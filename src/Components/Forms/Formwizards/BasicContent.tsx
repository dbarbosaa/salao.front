import React from "react";
import { Col, Form, FormGroup, InputGroup, Row, Table } from "react-bootstrap";


const Wizard = ({ step: currentIndex, ...props }) => {
    const steps:any = React.Children.toArray(props.children);
    const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
    const nextStep = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

    return (
        <div>

            <nav className="steps basicsteps">
                {steps.map((step, index):any => (
                    <button
                        key={step.props.number}
                        onClick={() => props.onChange(index)}
                        className={getClsNavBtn(index === currentIndex)}
                    >
                        <span className="number mx-2 ">{step.props.number}</span>
                        <span>{step.props.title}</span>
                    </button>
                ))}
            </nav>

            {steps[currentIndex]}

            <div className=" p-3 d-flex justify-content-between  ">
                <Button
                    visible={prevStep}
                    onClick={() => props.onChange(currentIndex - 1)}
                    title={prevStep.description}
                >
                    Back
                </Button>
                <Button
                    visible={nextStep}
                    onClick={() => props.onChange(currentIndex + 1)}
                    title={nextStep.description}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};
const Step:any = ({ children }) => children;

function getClsNavBtn(active) {
    return "btn" + (active ? " active" : "");
}
function Button({ visible, ...props }) {
    return (

        <button
            className={visible ? "btn btn-primary " : "invisible"}
            {...props}
        />

    );
}

export class BasicContent extends React.Component {
    state= { step: 0 };

    handleStep = (step) => {
        this.setState({ step });
    };

    render() {
        return (
            <Wizard step={this.state.step} onChange={this.handleStep}>
                <Step title="Personal Information" number="1">
                    <section className="card-body Basicwizard ">
                        <Form.Group className="control-group">
                            <Form.Label className="mb-2">Name</Form.Label>
                            <Form.Control type="text" className="mb-3" required placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="control-group">
                            <Form.Label className="mb-2">Email</Form.Label>
                            <Form.Control type="email" className="mb-3" required placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group className="control-group">
                            <Form.Label className="mb-2">Phone Number</Form.Label>
                            <Form.Control type="number" className="mb-3" required placeholder="Number" />
                        </Form.Group>
                        <Form.Group className="control-group mb-0">
                            <Form.Label className="mb-2">Address</Form.Label>
                            <Form.Control type="text" className="mb-3" required placeholder="Address" />
                        </Form.Group>
                    </section>
                </Step>
                <Step title="Billing Information" number="2">
                    <section className="card-body Basicwizard ">
                        <div className="table-responsive mg-t-20">
                            <Table className="table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Cart Subtotal</td>
                                        <td className="text-end">$792.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Totals</span>
                                        </td>
                                        <td className="text-end text-muted">
                                            <span>$792.00</span>
                                        </td>
                                    </tr>
                                    <tr className="border-bottom">
                                        <td>
                                            <span>Order Total</span>
                                        </td>
                                        <td>
                                            <h2 className="price text-end mb-0">$792.00</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </section>
                </Step>
                <Step title="Payment Details" number="3">
                    <section className="card-body Basicwizard ">
                        <FormGroup className="mb-3">
                            <Form.Label className="">CardHolder Name</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                id="name1"
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
                                
                                    <InputGroup.Text className="btn btn-primary">
                                        <i className="fab fa-cc-visa"></i> &nbsp;{" "}
                                        <i className="fab fa-cc-amex"></i> &nbsp;
                                        <i className="fab fa-cc-mastercard"></i>
                                    </InputGroup.Text>
                            </InputGroup>
                        </FormGroup>
                        <Row>
                            <Col sm={8}>
                                <FormGroup className=" mb-sm-0">
                                    <Form.Label className="">Expiration</Form.Label>
                                    <InputGroup className="">
                                        <Form.Control
                                            type="number"
                                            className="form-control mb-3"
                                            placeholder="MM"
                                            name="expiremonth"
                                        />
                                        <Form.Control
                                            type="number"
                                            className="form-control mb-3"
                                            placeholder="YY"
                                            name="expireyear"
                                        />
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup className=" mb-0">
                                    <Form.Label className="">
                                        CVV <i className="fa fa-question-circle"></i>
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        className="form-control"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </section>
                </Step>
            </Wizard>
        );
    }
}