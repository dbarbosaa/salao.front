// External libraries
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import MaskedInput from "react-text-mask";
import * as Yup from 'yup';

// Services
import { CorreiosAPI } from "../../Services/CorreiosApi";

// Components and Utilities
import AlertValidation from "../Forms/AlertValidation/AlertValidation";
import { MASCARA_CEP } from "../../utils/Constants";
import { useEffect } from "react";

interface EnderecoType {
    formik: any;
    propriedade: string;
}

export const enderecoShema = Yup.object().shape({
    cep: Yup.string()
        .transform((value, originalValue) => {
            return originalValue ? originalValue.replace(/[^\d]/g, '') : value;
        })
        .length(8, 'CEP deve ter 8 dígitos')
        .matches(/^\d{8}$/, 'CEP inválido')
        .required('CEP é obrigatório'),
    numero: Yup.string()
        .min(1, 'Número do endereço')
        .required('Número do endereço'),
});



export const estados = [
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



const EnderecoField = ({ formik, propriedade }: EnderecoType) => {

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const cleanCep = event.target.value.replace(/[^\d]/g, ''); // Remove non-digits
        formik.setFieldValue(`${propriedade}.cep`, cleanCep);
        if (cleanCep.length === 8) { // Only call API if CEP has exactly 8 digits
            CorreiosAPI(cleanCep)
                .then(response => response.json())
                .then(async (data) => {
                    formik.setFieldValue(`${propriedade}.logradouro`, data.logradouro);
                    formik.setFieldValue(`${propriedade}.bairro`, data.bairro);
                    formik.setFieldValue(`${propriedade}.cidade`, data.localidade);
                    formik.setFieldValue(`${propriedade}.uf`, data.uf);
                })
                .catch(error => console.error('Error fetching CEP:', error));
        }
    };


    return (<>
        <Col md={12} xl={12} xs={12} sm={12}>
            <Row className="row-sm">
                <Col lg={3}>

                    <InputGroup className="mb-3">
                        <InputGroup.Text>
                            CEP:
                        </InputGroup.Text>
                        <MaskedInput
                            mask={MASCARA_CEP}
                            {...formik.getFieldProps(`${propriedade}.cep`)} // Certifique-se de ajustar para o nome correto do seu campo
                            onChange={handleCepChange}
                            placeholder="00000-000"
                            type="text"
                            className="form-control"
                        />
                        <AlertValidation text={formik.errors[`${propriedade}.cep`]}></AlertValidation>
                    </InputGroup>

                </Col>
            </Row>

            <Row className="row-sm">
                <Col lg={3}>
                    <Form.Group>
                        <Form.Group className="mb-3">
                            <label className="form-label">Estado:</label>
                            <Form.Select
                                isValid={formik.touched[`${propriedade}.uf`] && !formik.errors[`${propriedade}.uf`]} // Certifique-se de ajustar para o nome correto do seu campo
                                {...formik.getFieldProps(`${propriedade}.uf`)} // Certifique-se de ajustar para o nome correto do seu campo
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
                        <Form.Control isValid={formik.touched[`${propriedade}.cidade`] && !formik.errors[`${propriedade}.cidade`]} {...formik.getFieldProps(`${propriedade}.cidade`)} type="text" placeholder="Cidade" />
                        <AlertValidation text={formik.errors[`${propriedade}.cidade`]}></AlertValidation>
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control isValid={formik.touched[`${propriedade}.bairro`] && !formik.errors[`${propriedade}.bairro`]} {...formik.getFieldProps(`${propriedade}.bairro`)} type="text" placeholder="Bairro" />
                        <AlertValidation text={formik.errors[`${propriedade}.bairro`]}></AlertValidation>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="row-sm">
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Número:</Form.Label>
                        <Form.Control isValid={formik.touched[`${propriedade}.numero`] && !formik.errors[`${propriedade}.numero`]} {...formik.getFieldProps(`${propriedade}.numero`)} type="text" placeholder="Número" />
                        <AlertValidation text={formik.errors[`${propriedade}.numero`]}></AlertValidation>
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Rua/Avenida:</Form.Label>
                        <Form.Control isValid={formik.touched[`${propriedade}.logradouro`] && !formik.errors[`${propriedade}.logradouro`]} {...formik.getFieldProps(`${propriedade}.logradouro`)} type="text" placeholder="Logradouro" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="row-sm">
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Complemento:</Form.Label>
                        <Form.Control isValid={formik.touched[`${propriedade}.complemento`] && !formik.errors[`${propriedade}.complemento`]} {...formik.getFieldProps(`${propriedade}.complemento`)} type="text" placeholder="Opcional" />
                    </Form.Group>
                </Col>
            </Row>
        </Col>
    </>)
}

export default EnderecoField;


