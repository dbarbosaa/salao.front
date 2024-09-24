import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row, Table } from 'react-bootstrap';




export const VerticalOrientationWizard = () => {
    const [goSteps, setGoSteps] = useState(0);

    const handleClick = () => {
        alert('form submitted sucessfully !!')
    }

    return (
        <div className="border">
            {goSteps === 0 && (
                <>
                    <Row className="" >
                         <Col xl={4} className="border-end cursor-steps">
                            <span className="Stepperh3 d-flex p-4"><span className="number step3 mx-2 active">1</span><span className="title" onClick={() => setGoSteps(0)}>Personal Information</span></span>
                            <span className="Stepperh3 d-flex p-4"><span className="number step2 mx-2">2</span><span className="title Step1" onClick={() => setGoSteps(1)}>Billing Information</span></span>
                            <span className="Stepperh3 d-flex p-4"><span className="number step2 mx-2">3</span><span className="title Step1" onClick={() => setGoSteps(2)}>Payment Details</span></span>
                        </Col>
                        <Col xl={8} className="p-4">
                            <section>
                                <Form.Group className="control-group">
                                    <Form.Label className="mb-3">Name</Form.Label>
                                    <Form.Control type="text" className="mb-3" required placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="control-group">
                                    <Form.Label className="mb-3">Email</Form.Label>
                                    <Form.Control type="email" className="mb-3" required placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group className="control-group">
                                    <Form.Label className="mb-3">Phone Number</Form.Label>
                                    <Form.Control type="number" className="mb-3" required placeholder="Number" />
                                </Form.Group>
                                <Form.Group className="control-group mb-0">
                                    <Form.Label className="mb-3">Address</Form.Label>
                                    <Form.Control type="text" className="mb-3" required placeholder="Address" />
                                </Form.Group>
                            </section>
                        </Col>
                         <Col xl={4} className="border-end cursor-steps"></Col>
                        <Col xl={8} className="p-4">
                            <Button variant='primary'
                                className="mt-2 float-end mt-4"
                                onClick={() => setGoSteps(1)}
                            >
                                Next
                            </Button>
                            <Button variant='primary'
                                className="mt-2 float-start mt-4"
                                onClick={() => setGoSteps(0)}
                                disabled
                            >
                                Previous
                            </Button>
                        </Col>
                    </Row>
                </>
            )}
            {goSteps === 1 && (
                <div>
                    <Row className="" >
                        <Col xl={4} className=" border-end">
                            <span className="Stepperh3 d-flex p-4"><span className="number step2 mx-2">1</span><span className="title Step1" onClick={() => setGoSteps(0)}>Personal Information</span></span>
                            <span className="Stepperh3 d-flex p-4"><span className="number step3 mx-2 active">2</span><span className="title" onClick={() => setGoSteps(1)}>Billing Information </span></span>
                            <span className="Stepperh3 d-flex p-4"><span className="number step2 mx-2">3</span><span className="title Step1" onClick={() => setGoSteps(2)}>Payment Details</span></span>
                        </Col>
                        <Col xl={8} className="p-4">
                            <section>
                                <div className="table-responsive mg-t-20">
                                    <Table className="table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Cart Subtotal</td>
                                                <td className="text-end">$792.00</td>
                                            </tr>
                                            <tr>
                                                <td><span>Totals</span></td>
                                                <td className="text-end text-muted"><span>$792.00</span></td>
                                            </tr>
                                            <tr className='border-bottom'>
                                                <td><span>Order Total</span></td>
                                                <td><h2 className="price text-end mb-0">$792.00</h2></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </section>
                        </Col>
                        <Col xl={4} className=""></Col>
                        <Col xl={8} className="p-4">
                            <Button variant="primary"
                                className="float-end mt-4"
                                onClick={() => setGoSteps(2)}
                            >
                                Next
                            </Button>
                            <Button variant="primary" className="float-start mt-4" onClick={() => setGoSteps(0)}>
                                Previous
                            </Button>
                        </Col>
                    </Row>
                </div>

            )}
            {goSteps === 2 && (
                <>
                    <Row className="">
                         <Col xl={4} className="border-end cursor-steps">
                            <span className="Stepperh3 d-flex p-4"><span className="number step2 mx-2">1</span><span className="title Step1" onClick={() => setGoSteps(0)}>Personal Information</span></span>
                            <span className="Stepperh3 d-flex p-4"><span className="number step2 mx-2">2</span><span className="title Step1" onClick={() => setGoSteps(1)}>Billing Information </span></span>
                            <span className="Stepperh3 d-flex p-4"><span className="number step3 mx-2 active">3</span><span className="title" onClick={() => setGoSteps(2)}>Payment Details</span></span>
                        </Col>
                        <Col xl={8} className="p-4">
                            <section>
                                <Form.Group>
                                    <Form.Label className="" >CardHolder Name</Form.Label>
                                    <Form.Control type="text" className="mb-3" id="name12" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="">Card number</Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control type="text" className="" placeholder="Search for..." />
                                        <InputGroup.Text className="bg-transparent border-0 p-0">
                                            <Button variant='primary' className="" type="button">
                                                <i className="fab fa-cc-visa"></i> &nbsp; 
                                                <i className="fab fa-cc-amex"></i> &nbsp;
                                                <i className="fab fa-cc-mastercard"></i>
                                                </Button>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Row>
                                    <Col xl={4} className="">
                                        <Form.Group className="mb-sm-0">
                                            <Form.Label className="">Expiration</Form.Label>
                                            <InputGroup className="">
                                                <Form.Control type="number" className="mb-4" placeholder="MM" name="expiremonth" />
                                                <Form.Control type="number" className="mb-4" placeholder="YY" name="expireyear" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={8} className="">
                                        <Form.Group className="mb-0">
                                            <Form.Label className="">CVV <i className="fa fa-question-circle"></i></Form.Label>
                                            <Form.Control type="number" className="mb-4" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </section>
                        </Col>
                         <Col xl={4} className="border-end cursor-steps"></Col>
                        <Col xl={8} className="p-4">
                            <Button variant="primary"
                                className="float-end mt-4"
                                onClick={() => { handleClick(); setGoSteps(0) }}
                            >
                                Submit
                            </Button>
                            <Button variant="primary" className="wizer float-start mt-4" onClick={() => setGoSteps(1)}>
                                Previous
                            </Button>
                        </Col>
                    </Row>
                </>
            )}
        </div>
    );
};