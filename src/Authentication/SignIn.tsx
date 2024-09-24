import { useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useFormik } from "formik";
import * as Yup from 'yup';

import logo from '../assets/logo/logo.jpg';
import login from '../assets/img/pngs/8.png';

import { useAuth } from "../Context/AuthProvider";
import { ToastContainer } from "react-toastify";

export default function SignIn() {
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email incorreto')
            .min(3, 'Minimo 3 caracteres')
            .max(50, 'Máximo 50 caracteres')
            .required('Email é obrigatório'),
        password: Yup.string()
            .min(3, 'Minimo 3 caracteres')
            .max(50, 'Máximo 50 caracteres')
            .required('Senha é obrigatório'),
    })

    const initialValues = {
        email: '',
        password: ''
    }



    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, { setSubmitting }) => {
            setLoading(true)
            await signIn(values.email, values.password);
            setLoading(false)
            setSubmitting(false)
        },
    })


    return (
        <div>
           <div className="main-container container-fluid">
                <ToastContainer />
                <Row className="no-gutter">
                    <Col md={12}  className="bg-white">
                        <div className="login d-flex align-items-center py-2">
                            <Container className="p-0">
                                <Row>
                                    <Col md={10} lg={10} xl={9} className="mx-auto">
                                        <div className="card-sigin">
                                            <div className="mb-5 d-flex">
                                                <img src={logo} className="sign-favicon-a ht-60" alt="logo" />
                                            </div>
                                            <div className="card-sigin">
                                                <div className="main-signup-header">
                                                    <Form>
                                                        <h2>Seja bem vindo!</h2>
                                                        <h5 className="fw-semibold mb-4 text-faxinando">Por favor, informe usuário e senha para continuar</h5>

                                                        <Form.Group>
                                                            <Form.Label className="mb-2">Email</Form.Label>
                                                            <Form.Control {...formik.getFieldProps('email')} className="mb-3" name="email" placeholder="Informe seu e-mail" type="text" required />{" "}
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Label className="mb-2">Senha</Form.Label>
                                                            <Form.Control {...formik.getFieldProps('password')} className="mb-3" name="password" placeholder="Informe sua senha" type="password" required />{" "}
                                                        </Form.Group>
                                                        <Button disabled={formik.isSubmitting || !formik.isValid} className={"btn-main-primary btn-block"} onClick={() => formik.submitForm()}>
                                                            {loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : "Continuar"}
                                                        </Button>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
