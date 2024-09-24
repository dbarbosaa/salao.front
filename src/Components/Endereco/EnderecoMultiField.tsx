// Third-party library imports
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import MaskedInput from "react-text-mask";
import { TableColumn } from "react-data-table-component";
import { Button, ButtonGroup, Card, Col, Dropdown, Form, InputGroup, Row } from "react-bootstrap";

// Services
import { CorreiosAPI } from "../../Services/CorreiosApi";
import EnderecoService from "../../Services/EnderecoService";

// Utilities and Constants
import { camelize, validarCep } from "../../utils/formart";
import { MASCARA_CEP } from "../../utils/Constants";

// Context
import { initialEndereco } from "../../Context/InitialValuesContext";

// Interfaces
import IEndereco from "../../Interfaces/Endereco/IEndereco";
import IRecuperaLista from "../../Interfaces/Basic/IRecuperaLista";

// Components
import Grid from "../../Components/Tables/Grid";
import Map, { getCoordinatesFromAddress } from "../Maps/Map";
import AlertValidation from "../Forms/AlertValidation/AlertValidation";
import IFiltroEndereco from "../../Interfaces/Endereco/IFiltroEndereco";
import { activeTostify, errorTostify, disabledTostify } from "../Apps/Notification/Notification";

interface EnderecoType {
    principal: any;
    propriedade: string;
    objetoId: string;

}

export const schema = Yup.object().shape({
    cep: Yup.string()
        .transform((value, originalValue) => {
            // Remover qualquer formatação do CEP (por exemplo, remover traços)
            return originalValue ? originalValue.replace(/[^\d]/g, '') : value;
        })
        .length(8, 'CEP deve ter 8 dígitos')
        .matches(/^\d{8}$/, 'CEP inválido')
        .required('CEP é obrigatório'),

    cidade: Yup.string()
        .required('Cidade é obrigatório'),

    bairro: Yup.string()
        .required('Bairro é obrigatório'),

    uf: Yup.string()
        .required('Estado é obrigatório'),

    numero: Yup.string()
        .required('Número do imovel é obrigatório'),
});

const EnderecoMultiField = ({ principal, propriedade, objetoId }: EnderecoType) => {

    const [carregando, setCarregando] = useState(false);
    const [atualizar, setAtualizar] = useState<boolean>(false);
    const [visualizar, setVisualizar] = useState<boolean>(false);

    const [filtrosPesquisa, setFiltrosPesquisa] = useState<IFiltroEndereco>({
        id: 0,
        empresaId: 0,
        pessoaId: 0,
        clienteId:0,
        nome: '',
        propriedade: objetoId,
        totalPaginas: 0,
        status: 1,
        quantidade: 10,
        totalItems: 0,
        pagina: 0,
        sort: "id"
    });

    const quantidadePorPagina = async (currentRowsPerPage: number) => setFiltrosPesquisa(oldState => { return { ...oldState, quantidade: currentRowsPerPage } });

    const paginar = (page: number) => setFiltrosPesquisa(oldState => { return { ...oldState, pagina: page } });

    useEffect(() => {

        if (principal.values.id) {
            carregar(filtrosPesquisa);
        }

    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (principal.values.id) {
                carregar(filtrosPesquisa);
            }
        }, 1000);
    }, [filtrosPesquisa.pagina, filtrosPesquisa.quantidade]);

    useEffect(() => {
        setTimeout(() => {
            if (atualizar) carregar(filtrosPesquisa);
        }, 1000);
    }, [atualizar]);


    const carregar = async (filtro: IFiltroEndereco) => {
        try {

            setCarregando(true);

            let resultado: IRecuperaLista<IEndereco>;

            filtro[`${camelize(objetoId)}`] = principal.values.id;

            resultado = await EnderecoService.listar(filtro);

            setFiltrosPesquisa(filtro => { return { ...filtro, totalItems: resultado?.total } });

            principal.setFieldValue('enderecos', resultado.content);

        } catch (error: any) {
            errorTostify(error?.response?.data);
        }
        finally {
            setAtualizar(false);
            setCarregando(false);
        }
    }

    const formik = useFormik({
        initialValues: initialEndereco,
        validationSchema: schema,
        onSubmit: async (values) => {

            if (principal.values.id) {

                values[`${objetoId}`] = principal.values.id;

                await salvar(values);
            }
            else {

                if (!principal.values[`${propriedade}`]) {
                    principal.values[`${propriedade}`] = [];
                }

                principal.values[`${propriedade}`].push(values);
            }

            formik.resetForm();

        },
    });

    const salvar = async (values: IEndereco) => {
        try {

            setCarregando(true);

            if (values.id)
                await EnderecoService.alterar(values);
            else
                await EnderecoService.incluir(values);


        } catch (error: any) {
            errorTostify(error?.response?.data);
        } finally {
            setCarregando(false);
            setAtualizar(true);
        }
    }

    const estados = [
        { value: "AC", label: "Acre" },
        { value: "AL", label: "Alagoas" },
        { value: "AP", label: "Amapá" },
        { value: "AM", label: "Amazonas" },
        { value: "BA", label: "Bahia" },
        { value: "CE", label: "Ceará" },
        { value: "DF", label: "Distrito Federal" },
        { value: "ES", label: "Espírito Santo" },
        { value: "GO", label: "Goiás" },
        { value: "MA", label: "Maranhão" },
        { value: "MT", label: "Mato Grosso" },
        { value: "MS", label: "Mato Grosso do Sul" },
        { value: "MG", label: "Minas Gerais" },
        { value: "PA", label: "Pará" },
        { value: "PB", label: "Paraíba" },
        { value: "PR", label: "Paraná" },
        { value: "PE", label: "Pernambuco" },
        { value: "PI", label: "Piauí" },
        { value: "RJ", label: "Rio de Janeiro" },
        { value: "RN", label: "Rio Grande do Norte" },
        { value: "RS", label: "Rio Grande do Sul" },
        { value: "RO", label: "Rondônia" },
        { value: "RR", label: "Roraima" },
        { value: "SC", label: "Santa Catarina" },
        { value: "SP", label: "São Paulo" },
        { value: "SE", label: "Sergipe" },
        { value: "TO", label: "Tocantins" }
    ];

    const onChange = (): void => {
        if (validarCep(formik.values.cep)) {
            CorreiosAPI(formik.values.cep)
                .then((resultado) => resultado.json())
                .then(async (resultado) => {
                    formik.setFieldValue(`logradouro`, resultado.logradouro);
                    formik.setFieldValue(`bairro`, resultado.bairro);
                    formik.setFieldValue(`cidade`, resultado.localidade);
                    formik.setFieldValue(`uf`, resultado.uf);
                    formik.setFieldValue(`cep`, formik.values.cep);

                    // setar latitude e longitude do endereço.
                    let coordenadas = await getCoordinatesFromAddress(resultado.logradouro, resultado.localidade);
                    formik.setFieldValue(`latitude`, coordenadas?.lat.toString());
                    formik.setFieldValue(`longitude`, coordenadas?.lon.toString());
                });
        }
    }

    useEffect(() => { onChange() }, [formik.values.cep]);

    const colunas: TableColumn<IEndereco>[] = [
        {
            name: 'Código',
            sortField: 'id',
            selector: (row: IEndereco) => row.id,
            sortable: true,
            wrap: true,
        },
        {
            name: 'CEP',
            sortField: 'cep',
            selector: (row: IEndereco) => row.cep,
            sortable: true,
            wrap: true
        },
        {
            name: 'UF',
            sortField: 'uf',
            selector: (row: IEndereco) => row.uf,
            sortable: true,
            wrap: true
        },
        {
            name: 'Rua/Av',
            sortField: 'logradouro',
            selector: (row: IEndereco) => row.logradouro,
            sortable: true,
            wrap: true
        },
        {
            name: 'N°',
            sortField: 'numero',
            selector: (row: IEndereco) => row.numero,
            sortable: true,
            wrap: true
        },
        {
            name: 'Bairro',
            sortField: 'bairro',
            selector: (row: IEndereco) => row.bairro,
            sortable: true,
            wrap: true
        },
        {
            name: 'Cidade',
            sortField: 'cidade',
            selector: (row: IEndereco) => row.cidade,
            sortable: true,
            wrap: true
        },
        {
            name: 'Complemento',
            sortField: 'complemento',
            selector: (row: IEndereco) => row.complemento,
            sortable: true,
            wrap: true
        },
        {
            name: 'Opções',
            cell: (row: IEndereco) => {
                return (
                    <Dropdown as={ButtonGroup} key={row.id} className="ms-2 mt-2 mb-2">
                        <Button variant={'default'} className="">..</Button>
                        <Dropdown.Toggle split variant={'default'} className="" key={row.id} />
                        <Dropdown.Menu style={{ margin: "-90px 0 0 0", zIndex: 1000 }} className="tx-13">
                            <Dropdown.Item onClick={() => row.ativo ? inativar(row.id) : ativar(row.id)}>
                                {row.ativo ?
                                    <> <i onClick={() => inativar(row.id)} className="fa fa-trash" ></i> Inativar</> :
                                    <> <i onClick={() => ativar(row.id)} className="fa fa-check" ></i>Ativar</>
                                }
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => editar(row, false)}>
                                {<i onClick={() => editar(row, false)} className="fa fa-edit" ></i>} Editar
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => editar(row, true)}>
                                {<i onClick={() => editar(row, true)} className="fa fa-align-justify" ></i>} Detalhes
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            },
        },


    ]

    const ativar = async (id: number) => {
        try {


            await EnderecoService.ativar(id);

            activeTostify();

        } catch (error: any) {
            errorTostify(error?.response?.data);
        }
        finally {
            setAtualizar(true);
            setCarregando(false);
        }
    }

    const inativar = async (id: number) => {
        try {

            setCarregando(true);

            await EnderecoService.inativar(id);

            disabledTostify();

        } catch (error: any) {
            errorTostify(error?.response?.data);
        }
        finally {
            setAtualizar(true);
            setCarregando(false);
        }
    }

    const editar = async (row: IEndereco, visualizar: boolean) => {
        try {


            formik.setValues(row);

            setVisualizar(visualizar);

        } catch (error: any) {
            errorTostify(error?.response?.data);
        }
    }

    const renderForms = () => {
        return <>
            <Row className="row-sm">
                <Col lg={3}>

                    <InputGroup className="mb-3">
                        <InputGroup.Text>
                            CEP:
                        </InputGroup.Text>
                        <MaskedInput
                            mask={MASCARA_CEP}
                            {...formik.getFieldProps(`cep`)}
                            placeholder="00000-000"
                            type="text"
                            className="form-control"
                        />
                        <AlertValidation text={formik.errors.cep}></AlertValidation>
                    </InputGroup>

                </Col>
            </Row>

            <Row className="row-sm">
                <Col lg={3}>
                    <Form.Group>
                        <Form.Group className="mb-3">
                            <label className="form-label">Estado:</label>
                            <Form.Select
                                isValid={formik.touched.uf && !formik.errors.uf} // Certifique-se de ajustar para o nome correto do seu campo
                                {...formik.getFieldProps(`uf`)} // Certifique-se de ajustar para o nome correto do seu campo
                            >
                                <option value="" label="Selecione..." />
                                {estados.map((option) => (
                                    <option key={option.value} value={option.value} label={option.label} />
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Cidade:</Form.Label>
                        <Form.Control isValid={formik.touched.cidade && !formik.errors.cidade} {...formik.getFieldProps(`cidade`)} type="text" placeholder="Cidade" />
                        <AlertValidation text={formik.errors.cidade}></AlertValidation>
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control isValid={formik.touched.bairro && !formik.errors.bairro} {...formik.getFieldProps(`bairro`)} type="text" placeholder="Bairro" />
                        <AlertValidation text={formik.errors.bairro}></AlertValidation>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Número:</Form.Label>
                        <Form.Control maxLength={6} isValid={formik.touched.numero && !formik.errors.numero} {...formik.getFieldProps(`numero`)} type="text" placeholder="Número" />
                        <AlertValidation text={formik.errors.numero}></AlertValidation>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Rua/Avenida:</Form.Label>
                        <Form.Control isValid={formik.touched.logradouro && !formik.errors.logradouro} {...formik.getFieldProps(`logradouro`)} type="text" placeholder="Logradouro" />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Complemento:</Form.Label>
                        <Form.Control isValid={formik.touched.complemento && !formik.errors.complemento} {...formik.getFieldProps(`complemento`)} type="text" placeholder="Opcional" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col xl={4} className=""></Col>
                <Col xl={8} className="p-4">
                    <Button className="float-end mt-4" disabled={formik.isSubmitting || !formik.isValid} variant={'outline-light'} onClick={() => formik.handleSubmit()}>
                        {formik.values.id ? 'Salvar' : 'Adicionar'}
                    </Button>

                </Col>
            </Row>
        </>
    }

    const renderDetalhes = () => {
        return <>
            <Col md={12} xl={12} xs={12} sm={12}>
                <Row className="row-sm">
                    <Col lg={3}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>
                                CEP:
                            </InputGroup.Text>
                            <Form.Text className="form-control">
                                {formik.values.cep}
                            </Form.Text>
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="row-sm">
                    <Col lg={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Estado:</Form.Label>
                            <Form.Text className="form-control">
                                {formik.values.uf}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Cidade:</Form.Label>
                            <Form.Text className="form-control">
                                {formik.values.cidade}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Bairro:</Form.Label>
                            <Form.Text className="form-control">
                                {formik.values.bairro}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="row-sm">
                    <Col lg={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Número:</Form.Label>
                            <Form.Text className="form-control">
                                {formik.values.numero}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Rua/Avenida:</Form.Label>
                            <Form.Text className="form-control">
                                {formik.values.logradouro}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="row-sm">
                    <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Complemento:</Form.Label>
                            <Form.Text className="form-control">
                                {formik.values.complemento}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
            </Col>
        </>
    }

    return (<>

        {visualizar ?
            renderDetalhes()
            :
            renderForms()
        }

        <Col md={12} xl={12} xs={12} sm={12}>

            <Card.Title> Lista de Enderecos </Card.Title>
            <hr></hr>
            <Row>
                <Col lg={12} className="">
                    <>
                        <Grid
                            progressPending={carregando}
                            limit={filtrosPesquisa.quantidade}
                            onChangePage={paginar}
                            onChangeRowsPerPage={quantidadePorPagina}
                            paginationServer={true}
                            paginationTotalRows={filtrosPesquisa.totalItems}
                            colunas={colunas}
                            itens={principal.values.enderecos} />
                    </>
                </Col>
            </Row>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
            <Card.Title> Localização </Card.Title>
            <hr></hr>
            {formik.values.latitude && formik.values.longitude && <> <Map latitude={formik.values?.latitude?.toString()} longitude={formik.values?.longitude?.toString()} /> </>}
        </Col>


    </>)
}

export default EnderecoMultiField;


