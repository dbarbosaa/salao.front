import React, { useState } from "react";
import { Col, Form, FormGroup, InputGroup, Row, Button } from "react-bootstrap";
import validator from "validator";

function Name({ nextStep, handleFormData, values }) {
    const [error, setError] = useState(false);
    const submitFormData = (e) => {
        e.preventDefault();
        if (
            validator.isEmpty(values.firstName) ||
            validator.isEmpty(values.lastName)
        ) {
            setError(true);
        } else {
            nextStep();
        }
    };

    return (
        <div >
            <Form onSubmit={submitFormData} className="row">
                <p className='mg-b-20'>Try the keyboard navigation by clicking arrow left or right!</p>

                <Form.Group className="col-md-5 col-lg-4">

                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        style={{ border: error ? "2px solid red" : "" }}
                        name="firstName"
                        defaultValue={values.firstName}
                        type="text"
                        placeholder="First Name"
                        onChange={handleFormData("firstName")}
                    />
                    {error ? (
                        <Form.Text style={{ color: 'red' }}>
                            This value is required
                        </Form.Text>
                    ) : (
                        ""
                    )}
                </Form.Group>
                <Form.Group className="col-md-5 col-lg-4">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        style={{ border: error ? "2px solid red" : "" }}
                        name="lastName"
                        defaultValue={values.lastName}
                        type="text"
                        placeholder="Last Name"
                        onChange={handleFormData("lastName")}
                    />
                    {error ? (
                        <Form.Text style={{ color: 'red' }}>
                            This value is required
                        </Form.Text>
                    ) : (
                        ""
                    )}
                </Form.Group>
                <div className="">
                    <Button type="submit" className="btn btn-primary d-flex mt-3 ">
                        Continue
                    </Button>
                </div>
            </Form>
        </div>
    );
}
function StepTwo({ nextStep, handleFormData, prevStep, values }) {

    const [error, setError] = useState(false);


    const submitFormData = (e) => {
        e.preventDefault();


        if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
            setError(true);
        } else {
            nextStep();
        }
    };
    return (
        <div>
            <Form onSubmit={submitFormData}>
                <Form.Group className="mb-3 wd-xs-300">
                    <p className='mg-b-20'>Wonderful transition effects.</p>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        style={{ border: error ? "2px solid red" : "" }}
                        type="email"
                        placeholder="Enter email address"
                        onChange={handleFormData("email")}
                    />
                    {error ? (
                        <Form.Text style={{ color: "red" }}>
                            This value is required
                        </Form.Text>
                    ) : (
                        ""
                    )}
                </Form.Group>
                <div>
                    <Button className="float-start btn btn-primary" onClick={prevStep}>
                        Previous
                    </Button>

                    <Button className="float-end btn btn-primary" type="submit" onClick={nextStep}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};
function Final({ nextStep, handleFormData, prevStep, values }:any) {
    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
            setError(true);
        } else {
            nextStep();
        }
    };
    return (
        <div>
            <section>
                <FormGroup className="" onSubmit={submitFormData}>
                    <Form.Label className="mb-2">CardHolder Name</Form.Label>
                    <Form.Control className="mb-3"
                        style={{ border: error ? "2px solid red" : "" }}
                        type="text"
                        placeholder="First Name"
                    />
                </FormGroup>
                <FormGroup className="">
                    <Form.Label className="mb-2">Card number</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="number"
                            className="form-control"
                            placeholder="Search for..."
                        />
                        <span className="input-group-append">
                            <Button variant="primary" className="" type="button">
                                <i className="fab fa-cc-visa"></i> &nbsp;{" "}
                                <i className="fab fa-cc-amex"></i> &nbsp;
                                <i className="fab fa-cc-mastercard"></i>
                            </Button>
                        </span>
                    </InputGroup>
                </FormGroup>
                <Row>
                    <Col sm={8}>
                        <FormGroup className="mb-sm-0">
                            <Form.Label className="mb-2">Expiration</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="number"
                                    className=""
                                    placeholder="MM"
                                    name="expiremonth"
                                />
                                <Form.Control
                                    type="number"
                                    className=""
                                    placeholder="YY"
                                    name="expireyear"
                                />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup className="mb-0">
                            <Form.Label className="mb-2">
                                CVV <i className="fa fa-question-circle"></i>
                            </Form.Label>
                            <Form.Control type="number" className="" required />
                        </FormGroup>
                    </Col>
                </Row>
            </section>
            <div>
                <Button
                    className="float-start btn btn-primary mt-2"
                    onClick={prevStep}
                >
                    Previous
                </Button>

                <Button
                    className="float-end btn btn-primary mt-2"
                    disabled
                    type="submit"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};
export function WizardForm() {
    const [step, setstep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    const nextStep = () => {
        setstep(step + 1);
    };
    const prevStep = () => {
        setstep(step - 1);
    };
    const handleInputData = input => e => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }
    switch (step) {
        case 1:
            return (
                <div className="custom-margin">
                    <Name nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                </div>
            );
        default:
            return (
                <div className="custom-margin">
                    <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </div>
            );
        case 3:
            return (
                <div className="">
                    <div className="custom-margin">
                        <Final values={formData} />
                    </div>
                </div>
            );
    }
}