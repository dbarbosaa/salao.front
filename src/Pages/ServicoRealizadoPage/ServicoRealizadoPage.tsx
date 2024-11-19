import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import { TableColumn } from "react-data-table-component";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";

import IServicoRealizado from "../../Interfaces/ServicoRealizado/IServicoRealizado";
import FiltroServicoRealizado from "../../Interfaces/ServicoRealizado/IFiltroServicoRealizado";
import IRecuperaLista from "../../Interfaces/Basic/IRecuperaLista";
import ServicoRealizadoService from "../../Services/ServicoRealizadoService";

import Grid from "../../Components/Tables/Grid";
import PageGridHeader from "../../Components/Layouts/Pageheader/PageGridHeader";
import AlertValidation from "../../Components/Forms/AlertValidation/AlertValidation";
import { errorTostify, successTostify } from "../../Components/Apps/Notification/Notification";

const ServicoRealizadoPage = () => {

    const [servicosRealizados, setServicosRealizados] = useState<IServicoRealizado[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [modal, setModal] = useState<boolean>(false);
    const [atualizar, setAtualizar] = useState<boolean>(false);
    const [filtrosPesquisa, setFiltrosPesquisa] = useState<FiltroServicoRealizado>({
        size: 10,
        totalElements: 0,
        totalPages: 0,
        page: 0,
    });

    const initialValues: IServicoRealizado = {
        id: 0,
        clienteId: 0,
        servicoId: 0,
        profissionalId: 0,
        dataHorario: new Date().toISOString(),
        valorPago: 0,
        ativo: false
    };

    const toggle = (): void => setModal(!modal);

    const quantidadePorPagina = async (currentRowsPerPage: number) => setFiltrosPesquisa(oldState => { return { ...oldState, size: currentRowsPerPage } });
    const paginar = (page: number) => setFiltrosPesquisa(oldState => { return { ...oldState, page: page } });

    const colunas: TableColumn<IServicoRealizado>[] = [
        {
            name: 'ID',
            sortField: 'id',
            selector: (row: IServicoRealizado) => row.id,
            sortable: true,
            wrap: true,
            ignoreRowClick: true
        },
        {
            name: 'Cliente ID',
            sortField: 'clienteId',
            selector: (row: IServicoRealizado) => row.clienteId,
            sortable: true,
            wrap: true
        },
        {
            name: 'Serviço ID',
            sortField: 'servicoId',
            selector: (row: IServicoRealizado) => row.servicoId,
            sortable: true,
            wrap: true
        },
        {
            name: 'Profissional ID',
            sortField: 'profissionalId',
            selector: (row: IServicoRealizado) => row.profissionalId,
            sortable: true,
            wrap: true
        },
        {
            name: 'Data e Horário',
            sortField: 'dataHorario',
            selector: (row: IServicoRealizado) => new Date(row.dataHorario).toLocaleString(),
            sortable: true,
            wrap: true
        },
        {
            name: 'Valor Pago',
            sortField: 'valorPago',
            selector: (row: IServicoRealizado) => `R$ ${row.valorPago.toFixed(2)}`,
            sortable: true,
            wrap: true
        },
        {
            name: 'Opções',
            cell: (servicoRealizado: IServicoRealizado) => {
                return (
                    <Dropdown>
                        <Dropdown.Toggle variant={'default'}>...</Dropdown.Toggle>
                        <Dropdown.Menu className="tx-13">
                            <Dropdown.Item
                                onClick={() => {
                                    formik.setValues(servicoRealizado);
                                    toggle();
                                }}
                            ><i className="fa fa-edit"></i> Editar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            },
        }
    ];
//Paginação e tamanho da página;
    useEffect(() => {
        setTimeout(() => {
            carregarServicosRealizados(filtrosPesquisa);
        }, 1000);
    }, [filtrosPesquisa.page, filtrosPesquisa.size]);

    useEffect(() => {
        setTimeout(() => {
            if (atualizar) carregarServicosRealizados(filtrosPesquisa);
        }, 1000);
    }, [atualizar]);

//Carregando todos os serviços realizados;
    const carregarServicosRealizados = async (filtro: FiltroServicoRealizado) => {
        try {
            setCarregando(true); // Estado de carregamento para indicar o carregamento dos dados;
            let resultado: IRecuperaLista<IServicoRealizado>;
            resultado = await ServicoRealizadoService.findAll(filtro); // Busca dos dados dos serviços realizados;
            setFiltrosPesquisa(filtro => { return { ...filtro, totalElements: resultado.totalElements } });  // Atualiza o estado do filtro pesquisa;
            setServicosRealizados(resultado.content); // Atualiza os dados de pesquisa realizados com os dados retronados pela api;
        } catch (error: any) {
            setServicosRealizados([]); // Em caso de erro, defini lista de serviços realizados como vazia;
        } finally {
            setCarregando(false); // Defini estado de carregamento;
            setAtualizar(false); // Atualiza estado de carregamento;
        }
    };

// Validação de todos os campos para garantir que todos os dados são validos;
    const schema = Yup.object().shape({
        clienteId: Yup.number().required('Cliente ID é obrigatório'),
        servicoId: Yup.number().required('Serviço ID é obrigatório'),
        profissionalId: Yup.number().required('Profissional ID é obrigatório'),
        dataHorario: Yup.string().required('Data e horário são obrigatórios'),
        valorPago: Yup.number().required('Valor pago é obrigatório').min(0, 'Valor pago deve ser maior ou igual a zero'),
    });

// Conf do formik para gerenciamento de formulário;
    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: async (values) => {
            try {
                setCarregando(true); //Definição do estado do carregamento para iniciar a submissão;
                await ServicoRealizadoService.save(values); //Salva os dados do chamando o serviço;
                successTostify();
            } catch (error: any) {
                errorTostify(error?.response?.data); //Notificação de erro;
            } finally {
                setCarregando(false);
                formik.resetForm(); //Reseta o formulário;
                setAtualizar(true); //Define atualizar como ture para carregar os dados;
                toggle();
            }
        },
    });


    return (<>
        <ToastContainer />
        <PageGridHeader
            titles="Opções"
            active="Serviço Realizado"
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
                    <Card.Title as='h3'>Serviços Realizados</Card.Title>
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
                            itens={servicosRealizados} />
                    </Col>
                </Card.Body>
            </Card>
        </Row>

        <Modal size="xl" show={modal} centered>
            <Modal.Header>
                <Modal.Title>Serviço Realizado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col lg={4}>
                            <Form.Group>
                                <Form.Label>Cliente ID:</Form.Label>
                                <Form.Control isValid={formik.touched.clienteId && !formik.errors.clienteId} {...formik.getFieldProps('clienteId')} type="number" placeholder="Cliente ID" />
                                <AlertValidation text={formik.errors.clienteId}></AlertValidation>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group>
                                <Form.Label>Serviço ID:</Form.Label>
                                <Form.Control isValid={formik.touched.servicoId && !formik.errors.servicoId} {...formik.getFieldProps('servicoId')} type="number" placeholder="Serviço ID" />
                                <AlertValidation text={formik.errors.servicoId}></AlertValidation>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group>
                                <Form.Label>Profissional ID:</Form.Label>
                                <Form.Control isValid={formik.touched.profissionalId && !formik.errors.profissionalId} {...formik.getFieldProps('profissionalId')} type="number" placeholder="Profissional ID" />
                                <AlertValidation text={formik.errors.profissionalId}></AlertValidation>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Data e Horário:</Form.Label>
                                <Form.Control isValid={formik.touched.dataHorario && !formik.errors.dataHorario} {...formik.getFieldProps('dataHorario')} type="datetime-local" placeholder="Data e Horário" />
                                <AlertValidation text={formik.errors.dataHorario}></AlertValidation>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Valor Pago:</Form.Label>
                                <Form.Control isValid={formik.touched.valorPago && !formik.errors.valorPago} {...formik.getFieldProps('valorPago')} type="number" placeholder="Valor Pago" />
                                <AlertValidation text={formik.errors.valorPago}></AlertValidation>
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
    </>);
}

export default ServicoRealizadoPage;