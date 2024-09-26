import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TableColumn } from "react-data-table-component";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";

import IServico from "../../Interfaces/Servico/IServico";
import FiltroServico from "../../Interfaces/Servico/IFiltroServico";
import IRecuperaLista from "../../Interfaces/Basic/IRecuperaLista";
import ServicoService from "../../Services/ServicoService";

import Grid from "../../Components/Tables/Grid";
import PageGridHeader from "../../Components/Layouts/Pageheader/PageGridHeader";
import AlertValidation from "../../Components/Forms/AlertValidation/AlertValidation";
import { errorTostify, successTostify } from "../../Components/Apps/Notification/Notification";

const ServicoPage = () => {

    const [servicos, setServicos] = useState<IServico[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [modal, setModal] = useState<boolean>(false);
    const [atualizar, setAtualizar] = useState<boolean>(false);
    const [filtrosPesquisa, setFiltrosPesquisa] = useState<FiltroServico>({
        size: 10,
        totalElements: 0,
        totalPages: 0,
        page: 0,
    });

    const initialValues: IServico = {
        id: 0,
        nome: '',
        valor: 0,
        descricao: '',
        ativo: true,
    }

    const toggle = (): void => setModal(!modal);

    const quantidadePorPagina = async (currentRowsPerPage: number) => setFiltrosPesquisa(oldState => { return { ...oldState, size: currentRowsPerPage } });
    const paginar = (page: number) => setFiltrosPesquisa(oldState => { return { ...oldState, page: page } });

    const colunas: TableColumn<IServico>[] = [
        {
            name: 'ID',
            sortField: 'id',
            selector: (row: IServico) => row.id,
            sortable: true,
            wrap: true,
            ignoreRowClick: true
        },
        {
            name: 'Nome',
            sortField: 'nome',
            selector: (row: IServico) => row.nome,
            sortable: true,
            wrap: true
        },
        {
            name: 'Preço',
            sortField: 'preco',
            selector: (row: IServico) => `R$ ${row.valor.toFixed(2)}`,
            sortable: true,
            wrap: true
        },
        {
            name: 'Status',
            cell: (row: IServico) => {
                return (row.ativo ? <Link className="btn btn-success btn-sm" to="#">Ativo</Link> : <Link className="btn btn-danger btn-sm" to="#">Inativo</Link>)
            },
        },
        {
            name: 'Opções',
            cell: (servico: IServico) => {
                return (
                    <Dropdown>
                        <Dropdown.Toggle variant={'default'}>...</Dropdown.Toggle>
                        <Dropdown.Menu className="tx-13">
                            <Dropdown.Item
                                onClick={() => {
                                    formik.setValues(servico);
                                    toggle();
                                }}
                            ><i className="fa fa-edit"></i> Editar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            },
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            carregarServicos(filtrosPesquisa);
        }, 1000);
    }, [filtrosPesquisa.page, filtrosPesquisa.size]);

    useEffect(() => {
        setTimeout(() => {
            if (atualizar) carregarServicos(filtrosPesquisa);
        }, 1000);
    }, [atualizar]);

    const carregarServicos = async (filtro: FiltroServico) => {
        try {
            setCarregando(true);
            let resultado: IRecuperaLista<IServico>;
            resultado = await ServicoService.findAll(filtro);
            setFiltrosPesquisa(filtro => { return { ...filtro, totalElements: resultado.totalElements } });
            setServicos(resultado.content);
        } catch (error: any) {
            setServicos([]);
        } finally {
            setCarregando(false);
            setAtualizar(false);
        }
    }

    const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),
        valor: Yup.number().required('Preço é obrigatório').min(0, 'Preço deve ser maior que zero'),
        descricao: Yup.string().required('Descrição é obrigatória'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: async (values) => {
            try {
                setCarregando(true);
                await ServicoService.save(values);
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
            active="Serviço"
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
                    <Card.Title as='h3'>Serviços</Card.Title>
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
                            itens={servicos} />
                    </Col>
                </Card.Body>
            </Card>
        </Row>

        <Modal size="xl" show={modal} centered>
            <Modal.Header>
                <Modal.Title>Serviços</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Informe o nome: </Form.Label>
                                <Form.Control isValid={formik.touched.nome && !formik.errors.nome} {...formik.getFieldProps('nome')} type="text" placeholder="Nome do serviço" />
                                <AlertValidation text={formik.errors.nome}></AlertValidation>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Informe o preço: </Form.Label>
                                <Form.Control isValid={formik.touched.valor && !formik.errors.valor} {...formik.getFieldProps('valor')} type="number" placeholder="Preço do serviço" />
                                <AlertValidation text={formik.errors.valor}></AlertValidation>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={12}>
                            <Form.Group>
                                <Form.Label>Informe a descrição: </Form.Label>
                                <Form.Control isValid={formik.touched.descricao && !formik.errors.descricao} {...formik.getFieldProps('descricao')} as="textarea" placeholder="Descrição do serviço" />
                                <AlertValidation text={formik.errors.descricao}></AlertValidation>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    toggle();
                    formik.resetForm();
                }}>
                    Fechar
                </Button>
                <Button variant="primary" type="button" onClick={formik.submitForm}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default ServicoPage;