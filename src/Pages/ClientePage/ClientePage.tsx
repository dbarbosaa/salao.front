import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TableColumn } from "react-data-table-component";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import MaskedInput from "react-text-mask";


import ICliente from "../../Interfaces/Cliente/ICliente";
import FiltroCliente from "../../Interfaces/Cliente/IFiltroCliente";
import IRecuperaLista from "../../Interfaces/Basic/IRecuperaLista";
import ClienteService from "../../Services/Basic/ClienteService";

import Grid from "../../Components/Tables/Grid";
import PageGridHeader from "../../Components/Layouts/Pageheader/PageGridHeader";
import AlertValidation from "../../Components/Forms/AlertValidation/AlertValidation";
import { errorTostify, successTostify } from "../../Components/Apps/Notification/Notification";
import { MASCARA_TELEFONE } from "../../utils/Constants";

const ClientePage = () => {

    const [clientes, setClientes] = useState<ICliente[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [modal, setModal] = useState<boolean>(false);
    const [atualizar, setAtualizar] = useState<boolean>(false);
    const [filtrosPesquisa, setFiltrosPesquisa] = useState<FiltroCliente>({
        size: 10,
        totalElements: 0,
        totalPages: 0,
        page: 0,
    });

    const initialValues: ICliente = {
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        ativo: true,
    };

    // Toggle modal
    const toggle = (): void => setModal(!modal);

    // Pagination handling
    const quantidadePorPagina = async (currentRowsPerPage: number) => setFiltrosPesquisa(oldState => { return { ...oldState, size: currentRowsPerPage } });
    const paginar = (page: number) => setFiltrosPesquisa(oldState => { return { ...oldState, page: page } });

    // Table columns
    const colunas: TableColumn<ICliente>[] = [
        {
            name: 'ID',
            sortField: 'id',
            selector: (row: ICliente) => row.id,
            sortable: true,
            wrap: true,
            ignoreRowClick: true
        },
        {
            name: 'Nome',
            sortField: 'nome',
            selector: (row: ICliente) => row.nome,
            sortable: true,
            wrap: true
        },
        {
            name: 'Email',
            sortField: 'email',
            selector: (row: ICliente) => row.email,
            sortable: true,
            wrap: true
        },
        {
            name: 'Telefone',
            sortField: 'telefone',
            selector: (row: ICliente) => row.telefone,
            sortable: true,
            wrap: true
        },
        {
            name: 'Status',
            cell: (row: ICliente) => {
                return (row.ativo ? <Link className="btn btn-success btn-sm" to="#">Ativo</Link> : <Link className="btn btn-danger btn-sm" to="#">Inativo</Link>)
            },
        },
        {
            name: 'Opções',
            cell: (cliente: ICliente) => {
                return (
                    <Dropdown>
                        <Dropdown.Toggle variant={'default'}>...</Dropdown.Toggle>
                        <Dropdown.Menu className="tx-13">
                            <Dropdown.Item
                                onClick={() => {
                                    formik.setValues(cliente);
                                    toggle();
                                }}
                            ><i className="fa fa-edit"></i> Editar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            },
        }
    ];

    // Load clients when page or size changes
    useEffect(() => {
        setTimeout(() => {
            carregarClientes(filtrosPesquisa);
        }, 1000);
    }, [filtrosPesquisa.page, filtrosPesquisa.size]);

    // Reload clients when the user triggers an update
    useEffect(() => {
        setTimeout(() => {
            if (atualizar) carregarClientes(filtrosPesquisa);
        }, 1000);
    }, [atualizar]);

    // Load clients function
    const carregarClientes = async (filtro: FiltroCliente) => {
        try {
            setCarregando(true);
            let resultado: IRecuperaLista<ICliente>;
            resultado = await ClienteService.findAll(filtro);
            setFiltrosPesquisa(filtro => { return { ...filtro, totalElements: resultado.totalElements } });
            setClientes(resultado.content);
        } catch (error: any) {
            setClientes([]);
        } finally {
            setCarregando(false);
            setAtualizar(false);
        }
    };

    // Validation schema
    const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
        telefone: Yup.string().required('Telefone é obrigatório'),

    });

    // Formik submit method
    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: async (values) => {
            try {
                setCarregando(true);
                await ClienteService.save(values);
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
            active="Cliente"
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
                    <Card.Title as='h3'>Clientes</Card.Title>
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
                            itens={clientes} />
                    </Col>
                </Card.Body>
            </Card>
        </Row>

        <Modal size="xl" show={modal} centered>
            <Modal.Header>
                <Modal.Title>Clientes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col lg={4}>
                            <Form.Group>
                                <Form.Label>Informe o nome: </Form.Label>
                                <Form.Control isValid={formik.touched.nome && !formik.errors.nome} {...formik.getFieldProps('nome')} type="text" placeholder="Nome do cliente" />
                                <AlertValidation text={formik.errors.nome}></AlertValidation>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group>
                                <Form.Label>Informe o email: </Form.Label>
                                <Form.Control isValid={formik.touched.email && !formik.errors.email} {...formik.getFieldProps('email')} type="email" placeholder="Email do cliente" />
                                <AlertValidation text={formik.errors.email}></AlertValidation>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group>
                                <Form.Label>Informe o telefone: </Form.Label>
                                <MaskedInput
                                    mask={MASCARA_TELEFONE}
                                    {...formik.getFieldProps("telefone")}
                                    placeholder="(00) 00000-0000"
                                    type="text"
                                    className="form-control"
                                />                               
                                 <AlertValidation text={formik.errors.telefone}></AlertValidation>
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

    </>);
}

export default ClientePage;
