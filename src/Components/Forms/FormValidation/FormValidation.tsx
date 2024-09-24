import React, { useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './FormValidation.module.scss';
import Select from 'react-select';
import { stateValue } from './Data/dataFormValidation';
import { Formik } from 'formik';
import *as Yup from 'yup';


const schema = Yup.object().shape({
	firstName: Yup.string().required(),
	lastName: Yup.string().required(),
	username: Yup.string().required(),
	city: Yup.string().required(),
	state: Yup.string().required(),
	zip: Yup.string().required(),
	file: Yup.mixed().required(),
	terms: Yup.bool().required().oneOf([true], 'terms must be accepted'),
});


const FormValid = [
	{ value: "One", label: "One" },
	{ value: "Two", label: "Two" },
	{ value: "Three", label: "Three" },
	{ value: "Four", label: "Four" }
];


const FormValidation = () => {

	const [validated, setValidated] = useState(false);
	const state = [
		{ value: ".....", label: "....." },
	];
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};


	return (

		<div className={styles.FormValidation}>
			<Pageheader titles="Forms" active="Form-Validation" />
			{/* <!-- container --> */}

			{/* <!--Row--> */}
			<Row>
				<Col lg={12} md={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Custom Validation</Card.Title>
						</Card.Header>
						<Card.Body>
							<Form noValidate validated={validated} onSubmit={handleSubmit}>
								<div className="form-row">
									<Col xl={6} className="mb-3">
										<Form.Label>First name</Form.Label>
										<Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Col>
									<Col xl={6} className="mb-3">
										<Form.Label>Last name</Form.Label>
										<Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Col>
								</div>
								<div className="form-row">
									<Col xl={6} className="mb-3">
										<Form.Label>City</Form.Label>
										<Form.Control type="text" placeholder="City" required />
										<Form.Control.Feedback type="invalid"> Please provide a valid city. </Form.Control.Feedback>
									</Col>
									<Col xl={3} className="mb-3">
										<Form.Label>State</Form.Label>
										<Select classNamePrefix="Select-sm" options={stateValue} placeholder='State' />
										<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
									</Col>
									<Col xl={3} className="mb-3">
										<Form.Label>Zip</Form.Label>
										<Form.Control type="text" placeholder="Zip" required />
										<Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
									</Col>
								</div>
								<Form.Group className='mb-3'>
									<Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
								</Form.Group>
								<Button type="submit">Submit form</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12} className="">
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Default Validation</Card.Title>
						</Card.Header>
						<Card.Body>
							<Form>
								<div className="form-row">
									<Col xl={6} className="mb-3">
										<Form.Label>First name</Form.Label>
										<Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
									</Col>
									<Col xl={6} className="mb-3">
										<Form.Label>Last name</Form.Label>
										<Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
									</Col>
								</div>
								<div className="form-row">
									<Col xl={6} className="mb-3">
										<Form.Label>City</Form.Label>
										<Form.Control type="text" placeholder="City" required />
									</Col>
									<Col xl={3} className="mb-3">
										<Form.Label>State</Form.Label>
										<Select classNamePrefix="Select-sm" options={stateValue} placeholder='State' />
									</Col>
									<Col xl={3} className="mb-3">
										<Form.Label>Zip</Form.Label>
										<Form.Control type="text" placeholder="Zip" required />
									</Col>
								</div>
								<Form.Group>
									<Form.Check required label="Agree to terms and conditions" feedbackType="invalid" />
								</Form.Group>
								<Button className='mt-3' type="submit">Submit form</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} className="">
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Server Side Validation</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<Form>
								<div className="form-row">
									<Col xl={6} className="mb-3">
										<Form.Label>First name</Form.Label>
										<Form.Control required isValid type="text" placeholder="First name" defaultValue="Mark" />
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Col>
									<Col xl={6} className="mb-3">
										<Form.Label>Last name</Form.Label>
										<Form.Control required isValid type="text" placeholder="Last name" defaultValue="Otto" />
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Col>
								</div>
								<div className="form-row">
									<Col xl={6} className="mb-3">
										<Form.Label>City</Form.Label>
										<Form.Control type="text" placeholder="City" required isInvalid />
										<Form.Control.Feedback type="invalid"> Please provide a valid city. </Form.Control.Feedback>
									</Col>
									<Col xl={3} className="mb-3">
										<Form.Label>State</Form.Label>
										<Select classNamePrefix="Select-sm" options={stateValue} placeholder='State' />
										<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
									</Col>
									<Col xl={3} className="mb-3">
										<Form.Label>Zip</Form.Label>
										<Form.Control type="text" placeholder="Zip" required isInvalid />
										<Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
									</Col>
								</div>
								<Form.Group>
									<Form.Check required isInvalid label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
								</Form.Group>
								<Button type="submit">Submit form</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} className="">
					<Card className="">
						<Card.Header className="">
							<Card.Title as='h3'>Supported Elements</Card.Title>
						</Card.Header>
						<Card.Body>
							<Form className="was-validated">
								<div className="mb-3">
									<Form.Label htmlFor="validationTextarea" >Textarea</Form.Label>
									<Form.Control as='textarea' className="" placeholder="Required example textarea" required isInvalid></Form.Control>
									<Form.Control.Feedback type='invalid' className="">
										Please enter a message in the textarea.
									</Form.Control.Feedback>
								</div>
								<Form.Check
									className="mb-3"
									required
									label="Check this checkbox"
									feedback="Example invalid feedback text"
									feedbackType="invalid"
								/>
								<Form.Check
									className=""
									required
									label="Toggle this radio"
								/>
								<Form.Check
									className="mb-3"
									required
									label="Or toggle this other radio"
									feedback="More example invalid feedback text"
									feedbackType="invalid"
								/>
								<div className="mb-3">
									<Select classNamePrefix="Select-sm" options={FormValid} placeholder='Open this select menu'/>
									<Form.Control.Feedback className="">Example invalid select feedback</Form.Control.Feedback>
								</div>
								<Form.Control type="file" className="file-browser mb-5" multiple />
								<div className="mb-3">
									<Button variant='primary' className="" disabled>Submit form</Button>
								</div>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} className="">
					<Card className="">
						<Card.Header className="">
							<Card.Title className="">Tooltips</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<Formik validationSchema={schema} onSubmit={console.log} initialValues={{ firstName: 'Mark', lastName: 'Otto', username: '', city: '', state: '', zip: '', file: null, terms: false }}>
								{({ handleSubmit, handleChange, values, touched, errors }) => (
									<Form noValidate onSubmit={handleSubmit}>
										<Row className="mb-3">
											<Form.Group as={Col} md="6" controlId="validationFormik101" className="position-relative mb-2">
												<Form.Label>First name</Form.Label>
												<Form.Control type="text" name="firstName" value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName} />
												<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
											</Form.Group>
											<Form.Group as={Col} md="6" controlId="validationFormik102" className="position-relative mb-2">
												<Form.Label>Last name</Form.Label>
												<Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName} />
												<Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
											</Form.Group>
										</Row>
										<Row className="mb-3">
											<Form.Group as={Col} md="6" controlId="validationFormik103" className="position-relative mb-2">
												<Form.Label>City</Form.Label>
												<Form.Control type="text" placeholder="City" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city} />
												<Form.Control.Feedback type="invalid" tooltip>{errors.city}</Form.Control.Feedback>
											</Form.Group>
											<Form.Group as={Col} md="3" controlId="validationFormik104" className="position-relative mb-2 ">
												<Form.Label>State</Form.Label>
												<Select classNamePrefix="Select-sm" options={state} placeholder='State' />
												<Form.Control.Feedback type="invalid" tooltip> {errors.state}</Form.Control.Feedback>
											</Form.Group>
											<Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative mb-2">
												<Form.Label>Zip</Form.Label>
												<Form.Control type="text" placeholder="Zip" name="zip" value={values.zip} onChange={handleChange} isInvalid={!!errors.zip} />
												<Form.Control.Feedback type="invalid" tooltip>{errors.zip}</Form.Control.Feedback>
											</Form.Group>
										</Row>
										<Button type="submit">Submit form</Button>
									</Form>
								)}
							</Formik>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!--/Row--> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

FormValidation.propTypes = {};

FormValidation.defaultProps = {};

export default FormValidation;
