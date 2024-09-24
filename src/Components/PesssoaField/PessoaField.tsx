import * as Yup from 'yup';
import MaskedInput from "react-text-mask";
import { Card, Col, Form, Row } from "react-bootstrap";

import { isCpfValid, isCnpjValid } from "../../utils/formart";
import { MASCARA_TELEFONE } from "../../utils/Constants";
import AlertValidation from "../Forms/AlertValidation/AlertValidation";
import { enderecoShema, estados } from '../Endereco/EnderecoField';

interface EnderecoType {
    formik: any;
}


export const contatoSchema = Yup.object().shape({
    telefone: Yup.string()
        .min(14, 'Mínimo 14 caracteres')
        .required('Telefone é obrigatório'),
});

export const contaShema = Yup.object().shape({
    bancoId: Yup.number().required('Banco é obrigatório').typeError('Banco inválido'),
    agencia: Yup.string().required('Agência é obrigatório').typeError('Agência inválido'),
    numero: Yup.string().required('Conta é obrigatório').typeError('Conta inválido'),
});


export const pessoaSchema = Yup.object().shape({
    nomeCompleto: Yup.string()
        .min(5, 'Mínimo 5 caracteres')
        .required('Nome completo é obrigatório'),
    estadoCivil: Yup.number().required('Estado Cívil é obrigatório').typeError('Estado Cívil inválido'),
    rg: Yup.string()
        .min(5, 'Mínimo 5 caracteres')
        .required('RG é obrigatório'),
    cpf: Yup.string()
        .test(
            'valida-documento',
            'CPF inválido',
            function (value) {
                if (!value) return false;
                const cleanValue = value.replace(/[^\d]/g, '');
                if (cleanValue.length === 11) {
                    return isCpfValid(cleanValue);
                } else if (cleanValue.length === 14) {
                    return isCnpjValid(cleanValue);
                }
                return false;
            }
        ).required('CPF é obrigatório'),
    dataNascimento: Yup.date()
        .typeError('Data de nascimento inválida')
        .required('Data de nascimento é obrigatória'),
    endereco: enderecoShema,
    contato: contatoSchema,
    conta: contaShema
});

const PessoaField = ({ formik }: EnderecoType) => {


    return (<>
        <Col md={12} xl={12} xs={12} sm={12}>


            <Row className="mt-3">
                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>Data de nascimento:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.dataNascimento && !formik.errors?.pessoa?.dataNascimento}
                            {...formik.getFieldProps('pessoa.dataNascimento')}
                            type="date"
                            placeholder="Data de Nascimento" />
                        <AlertValidation text={formik.errors?.pessoa?.dataNascimento}></AlertValidation>
                    </Form.Group>
                </Col>

                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>Estado Civil: </Form.Label>
                        <Form.Select
                            isValid={formik.touched?.pessoa?.estadoCivil && !formik.errors.pessoa?.estadoCivil} // Certifique-se de ajustar para o nome correto do seu campo
                            {...formik.getFieldProps("pessoa.estadoCivil")}
                            onChange={(event: any) => formik.setFieldValue('pessoa.estadoCivil', parseInt(event.target.value))}
                        >
                            <option value="" label="Selecione..." />
                            <option value="1">Solteiro</option>
                            <option value="2">Casado</option>
                            <option value="3">Divorciado</option>
                            <option value="4">Viúvo</option>
                        </Form.Select>
                        <AlertValidation text={formik.errors.pessoa?.estadoCivil} /> {/* Certifique-se de ajustar para o nome correto do seu campo */}
                    </Form.Group>
                </Col>

                <Col lg={6}>
                    <Form.Group>
                        <Form.Label>Cônjuge:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.nomeConjuge && !formik.errors?.pessoa?.nomeConjuge}
                            {...formik.getFieldProps('pessoa.nomeConjuge')}
                            type="text"
                            placeholder="Nome do Cônjuge" />
                        <AlertValidation text={formik.errors?.pessoa?.nomeConjuge}></AlertValidation>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-3">

                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>Sexo: </Form.Label>
                        <Form.Select
                            isValid={formik.touched?.pessoa?.sexo && !formik.errors?.pessoa?.sexo} // Certifique-se de ajustar para o nome correto do seu campo
                            onChange={(event: any) => formik.setFieldValue('pessoa.sexo', parseInt(event.target.value))}
                            {...formik.getFieldProps('pessoa.sexo')} // Certifique-se de ajustar para o nome correto do seu campo
                        >
                            <option value="1" label="Homem" />
                            <option value="2" label="Mulher" />
                            <option value="3" label="Outro" />

                        </Form.Select>
                        <AlertValidation text={formik.errors?.pessoa?.sexo} /> {/* Certifique-se de ajustar para o nome correto do seu campo */}
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>Contato:</Form.Label>
                        <MaskedInput
                            mask={MASCARA_TELEFONE}
                            {...formik.getFieldProps("pessoa.contato.telefone")}
                            placeholder="(00) 00000-0000"
                            type="text"
                            className="form-control"
                        />
                        <AlertValidation text={formik.errors?.pessoa?.contato?.telefone}></AlertValidation>
                    </Form.Group>
                </Col>
            </Row>

            <hr></hr>
            <Card.Title>Filiação </Card.Title>
            <hr></hr>

            <Row className="mt-3">
                <Col lg={6}>
                    <Form.Group>
                        <Form.Label>Nome do Pai:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.nomePai && !formik.errors?.pessoa?.nomePai}
                            {...formik.getFieldProps('pessoa.nomePai')}
                            type="text"
                            placeholder="Nome do Pai" />
                        <AlertValidation text={formik.errors?.pessoa?.nomePai}></AlertValidation>
                    </Form.Group>
                </Col>

                <Col lg={6}>
                    <Form.Group>
                        <Form.Label>Nome da Mãe:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.nomeMae && !formik.errors?.pessoa?.nomeMae}
                            {...formik.getFieldProps('pessoa.nomeMae')}
                            type="text"
                            placeholder="Nome da Mãe" />
                        <AlertValidation text={formik.errors?.pessoa?.nomeMae}></AlertValidation>
                    </Form.Group>
                </Col>

            </Row>

            <hr></hr>
            <Card.Title>Identificação </Card.Title>
            <hr></hr>

            <Row className="mt-3">
                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>RG:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.rg && !formik.errors?.pessoa?.rg}
                            {...formik.getFieldProps('pessoa.rg')}
                            type="text"
                            placeholder="RG" />
                        <AlertValidation text={formik.errors?.pessoa?.rg}></AlertValidation>
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Órgão Emissor:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.orgaoEmissor && !formik.errors?.pessoa?.orgaoEmissor}
                            {...formik.getFieldProps('pessoa.orgaoEmissor')}
                            type="text"
                            placeholder="Órgão Emissor" />
                        <AlertValidation text={formik.errors?.pessoa?.orgaoEmissor}></AlertValidation>
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Data do RG:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.rgData && !formik.errors?.pessoa?.rgData}
                            {...formik.getFieldProps('pessoa.rgData')}
                            type="date"
                            placeholder="Data de Emissão" />
                        <AlertValidation text={formik.errors?.pessoa?.rgData}></AlertValidation>
                    </Form.Group>
                </Col>
            </Row>

            <hr></hr>
            <Card.Title>Habilitação </Card.Title>
            <hr></hr>

            <Row className="mt-3">

                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>CNH:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.cnh && !formik.errors?.pessoa?.cnh}
                            {...formik.getFieldProps('pessoa.cnh')}
                            type="text"
                            placeholder="N° Carteira de Habilitação" />
                        <AlertValidation text={formik.errors?.pessoa?.cnh}></AlertValidation>
                    </Form.Group>
                </Col>

                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Data Vencimento CNH:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.cnhVencimentoData && !formik.errors?.pessoa?.cnhVencimentoData}
                            {...formik.getFieldProps('pessoa.cnhVencimentoData')}
                            type="date"
                        />
                        <AlertValidation text={formik.errors?.pessoa?.cnhVencimentoData}></AlertValidation>
                    </Form.Group>
                </Col>

            </Row>

            <hr></hr>
            <Card.Title>Carteira de Trabalho </Card.Title>
            <hr></hr>

            <Row className="mt-3">

                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>PIS:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.pis && !formik.errors?.pessoa?.pis}
                            {...formik.getFieldProps('pessoa.pis')}
                            type="text"
                            placeholder="PIS" />
                        <AlertValidation text={formik.errors?.pessoa?.pis}></AlertValidation>
                    </Form.Group>
                </Col>


                <Col lg={2}>
                    <Form.Group>
                        <Form.Label>CTPS:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.ctps && !formik.errors?.pessoa?.ctps}
                            {...formik.getFieldProps('pessoa.ctps')}
                            type="text"
                            placeholder="CTPS" />
                        <AlertValidation text={formik.errors?.pessoa?.ctps}></AlertValidation>
                    </Form.Group>
                </Col>


                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>Data da CTPS:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.ctpsData && !formik.errors?.pessoa?.ctpsData}
                            {...formik.getFieldProps('pessoa.ctpsData')}
                            type="date"
                            placeholder="Data da Emissão da CTPS" />
                        <AlertValidation text={formik.errors?.pessoa?.ctpsData}></AlertValidation>
                    </Form.Group>
                </Col>


                <Col lg={2}>
                    <Form.Group>
                        N° Série:
                        <Form.Control
                            isValid={formik.touched?.pessoa?.ctpsSerie && !formik.errors?.pessoa?.ctpsSerie}
                            {...formik.getFieldProps('pessoa.ctpsSerie')}
                            type="text"
                            placeholder="Série da CTPS" />
                        <AlertValidation text={formik.errors?.pessoa?.ctpsSerie}></AlertValidation>
                    </Form.Group>
                </Col>

                <Col lg={2}>
                    <Form.Group>
                        <Form.Label>UF:</Form.Label>
                        <Form.Select
                            isValid={formik.touched.ctpsuf && !formik.errors.ctpsuf} // Certifique-se de ajustar para o nome correto do seu campo
                            {...formik.getFieldProps(`pessoa.ctpsuf`)} // Certifique-se de ajustar para o nome correto do seu campo
                        >
                            <option value="" label="Selecione..." />
                            {estados.map((option) => (
                                <option key={option.value} value={option.value} label={option.label} />
                            ))}
                        </Form.Select>
                        <AlertValidation text={formik.errors?.pessoa?.ctpsuf}></AlertValidation>
                    </Form.Group>
                </Col>
            </Row>


            <hr></hr>
            <Card.Title>Dados Eleitorais </Card.Title>
            <hr></hr>

            <Row className="mt-3">

                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>N° Título:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.tituloEleitor && !formik.errors?.pessoa?.tituloEleitor}
                            {...formik.getFieldProps('pessoa.tituloEleitor')}
                            type="text"
                            placeholder="N° da Título" />
                        <AlertValidation text={formik.errors?.pessoa?.tituloEleitor}></AlertValidation>
                    </Form.Group>
                </Col>

                <Col lg={2}>
                    <Form.Group>
                        <Form.Label>N° Zona Eleitoral:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.zonaEleitoral && !formik.errors?.pessoa?.zonaEleitoral}
                            {...formik.getFieldProps('pessoa.zonaEleitoral')}
                            type="text"
                            placeholder="N° de Série" />
                        <AlertValidation text={formik.errors?.pessoa?.zonaEleitoral}></AlertValidation>
                    </Form.Group>
                </Col>

                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>UF:</Form.Label>
                        <Form.Select
                            isValid={formik.touched?.pessoa?.tituloEleitorUF && !formik.errors?.pessoa?.tituloEleitorUF} // Certifique-se de ajustar para o nome correto do seu campo
                            {...formik.getFieldProps(`pessoa.tituloEleitorUF`)} // Certifique-se de ajustar para o nome correto do seu campo
                        >
                            <option value="" label="Selecione..." />
                            {estados.map((option) => (
                                <option key={option.value} value={option.value} label={option.label} />
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row >

            <hr></hr>
            <Card.Title>Resevista </Card.Title>
            <hr></hr>

            <Row className="mt-3">

                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>Resevista:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.resevista && !formik.errors?.pessoa?.resevista}
                            {...formik.getFieldProps('pessoa.resevista')}
                            type="text"
                            placeholder="N° da Resevista" />
                        <AlertValidation text={formik.errors?.pessoa?.resevista}></AlertValidation>
                    </Form.Group>
                </Col>

                <Col lg={2}>
                    <Form.Group>
                        <Form.Label>N° Série:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.resevistaSerie && !formik.errors?.pessoa?.resevistaSerie}
                            {...formik.getFieldProps('pessoa.resevistaSerie')}
                            type="text"
                            placeholder="N° de Série" />
                        <AlertValidation text={formik.errors?.pessoa?.resevistaSerie}></AlertValidation>
                    </Form.Group>
                </Col>

                <Col lg={3}>
                    <Form.Group>
                        <Form.Label>Data da Resevista:</Form.Label>
                        <Form.Control
                            isValid={formik.touched?.pessoa?.resevistaData && !formik.errors?.pessoa?.resevistaData}
                            {...formik.getFieldProps('pessoa.resevistaData')}
                            type="date"
                            placeholder="Data da Resevista" />
                        <AlertValidation text={formik.errors?.pessoa?.resevistaData}></AlertValidation>
                    </Form.Group>
                </Col>
            </Row >

        </Col >
    </>)
}

export default PessoaField;