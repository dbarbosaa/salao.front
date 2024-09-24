import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TableColumn } from "react-data-table-component";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";

import IProfissional from "../../Interfaces/Profissional/IProfissional";
import FiltroProfissional from "../../Interfaces/Profissional/IFiltroProfissional";
import IRecuperaLista from "../../Interfaces/Basic/IRecuperaLista";
import ProfissionalService from "../../Services/ProfissionalService";

import Grid from "../../Components/Tables/Grid";
import PageGridHeader from "../../Components/Layouts/Pageheader/PageGridHeader";
import AlertValidation from "../../Components/Forms/AlertValidation/AlertValidation";
import { errorTostify, successTostify } from "../../Components/Apps/Notification/Notification";

const ProfissionalPage = () => {

    const [profissionals, setProfissionals] = useState<IProfissional[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [modal, setModal] = useState<boolean>(false);
    const [atualizar, setAtualizar] = useState<boolean>(false);
    const [filtrosPesquisa, setFiltrosPesquisa] = useState<FiltroProfissional>({
        size: 10,
        totalElements: 0,
        totalPages: 0,
        page: 0,
    });

    const initialValues: IProfissional = {
        id: 0,
        nome: '',
        especializacao: '',
        ativo: true,
    }

//Abri modal;
    const toggle = (): void => setModal(!modal);

// Paginação;    
    const quantidadePorPagina = async (currentRowsPerPage: number) => setFiltrosPesquisa(oldState => { return { ...oldState, size: currentRowsPerPage } });
    const paginar = (page: number) => setFiltrosPesquisa(oldState => { return { ...oldState, page: page } });

//Colunas da tabela;   
    const colunas: TableColumn<IProfissional>[] = [
        {
            name: 'ID',
            sortField: 'id',
            selector: (row: IProfissional) => row.id,
            sortable: true,
            wrap: true,
            ignoreRowClick: true
        },
        {
            name: 'Nome',
            sortField: 'nome',
            selector: (row: IProfissional) => row.nome,
            sortable: true,
            wrap: true
        },
        {
            name: 'Especialização',
            sortField: 'especializacao',
            selector: (row: IProfissional) => row.especializacao,
            sortable: true,
            wrap: true
        },
        {
            name: 'Status',
            cell: (row: IProfissional) => {
                return (row.ativo ? <Link className="btn btn-success btn-sm" to="#">Ativo</Link> : <Link className="btn btn-danger btn-sm" to="#">Inativo</Link>)
            },
        },
        {
            name: 'Opções',
            cell: (profissional: IProfissional) => {
                return (
                    <Dropdown>
                        <Dropdown.Toggle variant={'default'}>...</Dropdown.Toggle>
                        <Dropdown.Menu className="tx-13">
                            <Dropdown.Item
                                onClick={() => {
                                    formik.setValues(profissional);
                                    toggle()
                                }}
                            ><i className="fa fa-edit"></i> Editar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            },
        }
    ]

// Evento que esculta a pagina e a quantidade, para quando o usuário alterar ele chamar o back e atualizar a página;
    useEffect(() => {
        setTimeout(() => {
            carregarProfissionals(filtrosPesquisa);
        }, 1000);
    }, [filtrosPesquisa.page, filtrosPesquisa.size]);

// Evento que esculta a ação do usuário atualizar tabela;
    useEffect(() => {
        setTimeout(() => {
            if (atualizar) carregarProfissionals(filtrosPesquisa);
        }, 1000);
    }, [atualizar]);

// Função de carregamento dos profissionais;
    const carregarProfissionals = async (filtro: FiltroProfissional) => {
        try {
            setCarregando(true);
            let resultado: IRecuperaLista<IProfissional>;
            resultado = await ProfissionalService.findAll(filtro);
            setFiltrosPesquisa(filtro => { return { ...filtro, totalElements: resultado.totalElements } });
            setProfissionals(resultado.content);
        } catch (error: any) {
            setProfissionals([]);
        } finally {
            setCarregando(false);
            setAtualizar(false);
        }
    }

// Esquema de validação, propriedade do yup;  
    const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),
        especializacao: Yup.string().required('Especialização é obrigatória'),
    });


// Formik metodo submit para salvar;
    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: async (values) => {
            try {
                setCarregando(true);
                await ProfissionalService.save(values);
                successTostify();
            } catch (error: any) {
                errorTostify(error?.response?.data);
            } finally {
                setCarregando(false);
                formik.resetForm();
                setAtualizar(true);
                toggle();
            }
        },
    });

    return (<>
        <ToastContainer />
        <PageGridHeader
            titles="Configurações/Opções"
            active="Profissional"
            children={
                <>
                    <div className="pe-1 mb-xl-0">
                        <Button variant='warning' onClick={() => setAtualizar(!atualizar)} className="btn-icon me-2"><i className="mdi mdi-refresh"></i></Button>
                    </div>
                    <div className="pe-1 mb-xl-0">
                        <Button variant='primary' onClick={() => setModal(!modal)} className="btn-icon me-2"><i className="mdi mdi-plus"></i></Button>
                    </div>
                </>
            }
        />

        <Row className="row-sm">
            <Card>
                <Card.Header>
                    <Card.Title as='h3'>Profissionais</Card.Title>
                </Card.Header>
                <Card.Body style={{ cursor: "pointer", height: "700px" }}>
                    <Col lg={12} className="">
                        <Grid
                            progressPending={carregando}
                            limit={filtrosPesquisa.size}
                            onChangePage={paginar}
                            onChangeRowsPerPage={quantidadePorPagina}
                            paginationServer={true}
                            paginationTotalRows={filtrosPesquisa.totalElements}
                            colunas={colunas}
                            itens={profissionals} />
                    </Col>
                </Card.Body>
            </Card>
        </Row>

        <Modal size="xl" show={modal} centered>
            <Modal.Header>
                <Modal.Title>Profissionais</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Informe o nome: </Form.Label>
                                <Form.Control isValid={formik.touched.nome && !formik.errors.nome} {...formik.getFieldProps('nome')} type="text" placeholder="Nome do profissional" />
                                <AlertValidation text={formik.errors.nome}></AlertValidation>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Informe a especialização: </Form.Label>
                                <Form.Control isValid={formik.touched.especializacao && !formik.errors.especializacao} {...formik.getFieldProps('especializacao')} type="text" placeholder="Especialização do profissional" />
                                <AlertValidation text={formik.errors.especializacao}></AlertValidation>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button disabled={formik.isSubmitting || !formik.isValid} className='ripple' variant="primary" onClick={() => formik.handleSubmit()} >Salvar</Button>
                <Button className='ripple' variant="secondary" onClick={toggle} >Fechar</Button>
            </Modal.Footer>
        </Modal>

    </>)
}

export default ProfissionalPage;