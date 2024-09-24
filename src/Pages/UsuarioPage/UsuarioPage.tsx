import { useEffect, useState } from "react";
import * as Yup from 'yup';
import moment from "moment";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TableColumn } from "react-data-table-component";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";


import IDominio from "../../Interfaces/Basic/IDominio";
import IUsuario from "../../Interfaces/Usuario/IUsuario";
import FiltroUsuario from "../../Interfaces/Usuario/IFiltroUsuario";
import IRecuperaLista from "../../Interfaces/Basic/IRecuperaLista";
import IFiltroUsuario from "../../Interfaces/Usuario/IFiltroUsuario";

import UsuarioService from "../../Services/UsuarioService";

import Grid from "../../Components/Tables/Grid";
import PageGridHeader from "../../Components/Layouts/Pageheader/PageGridHeader";
import AlertValidation from "../../Components/Forms/AlertValidation/AlertValidation";
import { errorTostify, successTostify } from "../../Components/Apps/Notification/Notification";


const UsuarioPage = () => {

    const [usuarios, setUsuarios] = useState<IUsuario[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [modal, setModal] = useState<boolean>(false);
    const [atualizar, setAtualizar] = useState<boolean>(false);
    const [filtrosPesquisa, setFiltrosPesquisa] = useState<IFiltroUsuario>({
        size: 10,
        totalElements: 0,
        totalPages: 0,
        page: 0,
    });

    const initialValues: IUsuario = {
        id: 0,
        email: '',
        perfil: 'PROFISSIONAL',
        senha: '',
        ativo: true,
    }

    const toggle = (): void => setModal(!modal);

    const quantidadePorPagina = async (currentRowsPerPage: number) => setFiltrosPesquisa(oldState => { return { ...oldState, size: currentRowsPerPage } });

    const paginar = (page: number) => setFiltrosPesquisa(oldState => { return { ...oldState, page: page } });

    const colunas: TableColumn<IUsuario>[] = [
        {
            name: 'id',
            sortField: 'id',
            selector: (row: IUsuario) => row.id,
            sortable: true,
            wrap: true,
            ignoreRowClick: true
        },
        {
            name: 'E-mail',
            sortField: 'email',
            selector: (row: IUsuario) => row.email,
            sortable: true,
            wrap: true
        },
        {
            name: 'Data de Cadastro',
            sortField: 'dataCadastro',
            selector: (row: IUsuario) => moment(row.dataCadastro).format("DD/MM/YYYY"),
            sortable: true,
            wrap: true
        },
        {
            name: 'Status',
            cell: (row: IUsuario) => {
                return (row.ativo ? <Link className="btn btn-success btn-sm" to="#">Ativo</Link> : <Link className="btn btn-danger btn-sm" to="#">Inativo</Link>)
            },
        },
        {
            name: 'Opções?',
            cell: (usuario: IUsuario) => {
                return (
                    <Dropdown>
                        <Dropdown.Toggle variant={'default'}>...</Dropdown.Toggle>
                        <Dropdown.Menu className="tx-13">
                            <Dropdown.Item
                                onClick={() => {
                                    formik.setValues(usuario);
                                    toggle()
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
            carregarUsuarios(filtrosPesquisa);
        }, 1000);
    }, [filtrosPesquisa.page, filtrosPesquisa.size]);

    useEffect(() => {
        setTimeout(() => {
            if (atualizar) carregarUsuarios(filtrosPesquisa);
        }, 1000);
    }, [atualizar]);

    const carregarUsuarios = async (filtro: FiltroUsuario) => {
        try {

            setCarregando(true);

            let resultado: IRecuperaLista<IUsuario>;

            resultado = await UsuarioService.findAll(filtro);

            setFiltrosPesquisa(filtro => { return { ...filtro, totalElements: resultado.totalElements } });

            setUsuarios(resultado.content);

        } catch (error: any) {
            setUsuarios([]);
        }
        finally {
            setCarregando(false);
            setAtualizar(false);
        }
    }

    const schema = Yup.object().shape({
        senha: Yup.string()
            .min(3, 'Mínimo 3 caracteres')
            .max(50, 'Máximo 50 caracteres')
            .matches(/.*[!@#$%^&*(),.?":{}|<>].*/, 'A senha deve conter pelo menos um caractere especial')
            .required('Senha é obrigatória'),

        email: Yup.string()
            .email('Formato de e-mail inválido')
            .required('E-mail é obrigatório'),

        perfil: Yup.string().required('Perfil é obrigatório'),

    });

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: async (values) => {
            try {

                setCarregando(true);

                await UsuarioService.save(values);

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
            active="Usuario"
            children={
                <>
                    <div className="pe-1 mb-xl-0">
                        <Button variant='warning' onClick={() => setAtualizar(!atualizar)} className="btn-icon me-2"><i className="mdi mdi-refresh"></i></Button>
                    </div><div className="pe-1 mb-xl-0">
                        <Button variant='primary' onClick={() => setModal(!modal)} className="btn-icon me-2"><i className="mdi mdi-plus"></i></Button>
                    </div>
                </>
            }
        />

        <Row className="row-sm">
            <Card>
                <Card.Header>
                    <Card.Title as='h3'>Usuarios</Card.Title>
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
                            itens={usuarios} />
                    </Col>
                </Card.Body>
            </Card>
        </Row>

        {/* Modal =*/}
        <Modal size="xl" show={modal} centered>
            <Modal.Header>
                <Modal.Title>Usuários</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Row className="mb-3">

                        <Col lg={4} >
                            <Form.Group>
                                <Form.Label>Informe o e-mail: </Form.Label>
                                <Form.Control isValid={formik.touched.email && !formik.errors.email} {...formik.getFieldProps('email')} type="text" placeholder="exemplo@gmail.com.br" />
                                <AlertValidation text={formik.errors.email}></AlertValidation>
                            </Form.Group>
                        </Col>
                        <Col lg={4} >
                            <Form.Group>
                                <Form.Label>Informe o senha: </Form.Label>
                                <Form.Control isValid={formik.touched.senha && !formik.errors.senha} {...formik.getFieldProps('senha')} type="text" placeholder="Exemplo: gmail@123" />
                                <AlertValidation text={formik.errors.senha}></AlertValidation>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">

                        <Col lg={4}>
                            <Form.Group>
                                <Form.Label>Selecione um perfil: </Form.Label>
                                <Form.Select
                                    isValid={formik.touched.perfil && !formik.errors.perfil} // Certifique-se de ajustar para o nome correto do seu campo
                                    {...formik.getFieldProps('perfil')} // Certifique-se de ajustar para o nome correto do seu campo
                                >
                                    <option value="" label="Selecione..." />
                                    <option value="PROFISSIONAL" label="PROFISSIONAL" />
                                    <option value="CLIENTE" label="CLIENTE" />

                                </Form.Select>
                                <AlertValidation text={formik.errors.perfil} /> {/* Certifique-se de ajustar para o nome correto do seu campo */}
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

export default UsuarioPage;