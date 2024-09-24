import React, { useState } from 'react';
import styles from './FormLayouts.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Button, Card, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import Select from 'react-select';

//images
import visa from '../../../assets/img/pngs/13.png';
import MasterCard from '../../../assets/img/pngs/12.png';

const cardExp = [
	{ value: "January", label: "January" },
	{ value: "February", label: "February" },
	{ value: "March", label: "March" },
	{ value: "April", label: "April" },
	{ value: "May", label: "May" }
]
const Year = [
	{ value: "2018", label: "2018" },
	{ value: "2019", label: "2019" },
	{ value: "2020", label: "2020" },
	{ value: "2021", label: "2021" },
	{ value: "2022", label: "2022" }
]

const FormLayouts = () => {

	//Loading function
	const [loading, setLoader] = useState<any>(false);
	setTimeout(() => {
		setLoader(false)
	}, 3000);

	let BasicAlert = () => {
		Swal.fire('Thank You ♡ For Subscribing us')
	}

	//Modal function
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (

		<div className={styles.FormLayouts}>
			<Pageheader titles="Forms" active="Form-Layouts" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12} className="">
					<Card>
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Horizontal Alignment
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<div className="pd-30 pd-sm-40 background">
								<Row className="row-xs">
									<Col md={5} className="">
										<Form.Control className="" placeholder="Enter your username" type="text" />
									</Col>
									<Col md={5} className="mg-t-10 mg-md-t-0">
										<Form.Control className="" placeholder="Enter your password" type="password" />
									</Col>
									<div className="col-md mt-4 mt-md-0">
										<Button onClick={setLoader} className="btn-primary btn-block">Sign In
											{loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}
										</Button>
									</div>
								</Row>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Vertical Alignment
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row>
								<Col lg={12}>
									<div className="background p-4">
										<Form.Group className="mb-4">
											<Form.Control placeholder="Enter your username" type="text" />
										</Form.Group>
										<Form.Group className="mb-4">
											<Form.Control placeholder="Enter your password" type="password" />
										</Form.Group>
										<Button className="btn-main-primary pd-x-20" onClick={setLoader}>Sign In
											{loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}
										</Button>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Left Label Alignment
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<div className="pd-30 pd-sm-40 background">
								<Row className="row-xs align-items-center mg-b-20">
									<Col md={4}>
										<Form.Label className="mg-b-0">Firstname</Form.Label>
									</Col>
									<Col md={8} className="mg-t-5 mg-md-t-0">
										<Form.Control placeholder="Enter your firstname" type="text" />
									</Col>
								</Row>
								<Row className="row-xs align-items-center mg-b-20">
									<Col md={4} className="">
										<Form.Label className="mg-b-0">Lastnane</Form.Label>
									</Col>
									<Col md={8} className="mg-t-5 mg-md-t-0">
										<Form.Control placeholder="Enter your lastname" type="text" />
									</Col>
								</Row>
								<Row className="row-xs align-items-center mg-b-20">
									<Col md={4} className="">
										<Form.Label className="mg-b-0">Email</Form.Label>
									</Col>
									<Col md={8} className="mg-t-5 mg-md-t-0">
										<Form.Control placeholder="Enter your email" type="email" />
									</Col>
								</Row>
								<Button className="btn-main-primary pd-x-30 mg-r-5 mg-t-5" onClick={setLoader}>Register{loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}</Button>
								<Button className="btn-dark pd-x-30 mg-t-5">Cancel</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Form Group Wrapper
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<div className="">
								<Row className="row-xs formgroup-wrapper">
									<Col md={6}>
										<div className="main-form-group background">
											<Form.Label className="">Email</Form.Label>
											<Form.Control placeholder="Enter your email" type="email" defaultValue="me@sprukotechnologies.com" />
										</div>
										{/* <!-- main-form-group --> */}
									</Col>
									<Col md={6} className="mg-t-20 mg-md-t-0">
										<div className="main-form-group background">
											<Form.Label className="">Password</Form.Label>
											<Form.Control placeholder="Enter your password" type="password" defaultValue="thisismypassword" />
										</div>
										{/* <!-- main-form-group --> */}
									</Col>
								</Row>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Form in Dropdown
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<div className="main-dropdown-form-demo">
								<Dropdown className="mg-t-20">
									<Dropdown.Toggle className="btn-main-primary pd-x-20 vertical" >Live Example <i className="icon ion-ios-arrow-down mg-l-5 tx-12"></i></Dropdown.Toggle>
									<Dropdown.Menu style={{margin: '0px'}} >
										<h6 className="dropdown-title">Subscribe</h6>
										<p className="mg-b-20">Don't miss any update from us.</p>
										<Form.Group className='mb-3'>
											<Form.Control placeholder="Enter your fullname" type="text" />
										</Form.Group>
										<Form.Group className='mb-3'>
											<Form.Control placeholder="Enter your email" type="email" />
										</Form.Group>
										<Button className="btn-primary btn-block mb-2" onClick={() => { BasicAlert() }}>Subscribe</Button>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							{/* <!-- main-dropdown-demo --> */}
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Form in Modal
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<div className="tx-center pd-y-20 background">
								<Link className="btn btn-primary" onClick={handleShow} to="#">View Live Demo</Link>
							</div>
							{/* <!-- pd-y-30 --> */}

							<Modal show={show}>
								<Modal.Body className="modal-body pd-sm-40">
									<Button variant='default' className="close pos-absolute t-15 r-20 tx-26" onClick={handleClose}><span aria-hidden="true">&times;</span></Button>
									<h5 className="modal-title mg-b-5">Create New Account</h5>
									<p className="mg-b-20">Let's get you all setup so you can begin using our app.</p>
									<Form.Group className='mb-3'>
										<Form.Control placeholder="Firstname" type="text" />
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Control placeholder="Lastname" type="text" />
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Control placeholder="Phone" type="text" />
									</Form.Group>
									<Form.Group className='mb-3'>
										<Form.Control placeholder="Email" type="text" />
									</Form.Group>
									<Form.Group className="mg-b-25 mb-3 ms-4">

										<Form.Check type="checkbox" />
										<span className="tx-13"> I agree to <Link to="#">Terms</Link> and{" "}<Link to="#">Privacy Policy</Link></span>

										<Form.Check defaultChecked type="checkbox" />
										<span className="tx-13">Yes, I want to receive email from your newsletter.</span>

									</Form.Group>
									<Button variant="" onClick={setLoader} className="btn btn-primary btn-block">Continue {loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}</Button>
								</Modal.Body>
							</Modal>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Payment Details
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row>
								<Col md={10} lg={8} xl={6} className="mx-auto d-block">
									<Card className="card-body pd-20 pd-md-40 border shadow-none">
										<Card.Title as='h5' className="mg-b-20">Your Payment Details</Card.Title>
										<Form.Group>
											<Form.Label className="main-content-label tx-11 tx-medium tx-gray-600">Name on Card</Form.Label>
											<Form.Control required type="text" className="mb-3" />
										</Form.Group>
										<Form.Group>
											<Form.Label className="main-content-label tx-11 tx-medium tx-gray-600">Card Number</Form.Label>
											<div className="pos-relative">
												<Form.Control className="pd-r-80 ps-3 mb-3" required type="text" />
												<div className="d-flex pos-absolute t-5 r-10">
													<img alt="card1" className="wd-30 mg-r-5" src={visa} />
													<img alt="card2" className="wd-30" src={MasterCard} />
												</div>
											</div>
										</Form.Group>
										<Form.Group>
											<Row className="row-sm">
												<Col sm={9} className="">
													<Form.Label className="main-content-label tx-11 tx-medium tx-gray-600">Expiration Date</Form.Label>
													<Row className="row-sm mb-3">
														<Col sm={7} className="">
															<Select classNamePrefix="Select-sm" className='select2-no-search' options={cardExp} placeholder='Volvo' />
														</Col>
														<Col sm={5} className="mg-t-10 mg-sm-t-0">
															<Select classNamePrefix="Select-sm" className='select2-no-search' options={Year} placeholder='Volvo' />
														</Col>
													</Row>
												</Col>
												<Col sm={3} className="mg-t-20 mg-sm-t-0">
													<Form.Label className="main-content-label tx-11 tx-medium tx-gray-600">CVV</Form.Label>
													<Form.Control required type="text" />
												</Col>
											</Row>
										</Form.Group>
										<Form.Group className="mg-b-20 ms-4">

											<Form.Check defaultChecked type="checkbox" />
											<span className="tx-13">Save my card for future purchase</span>
										</Form.Group>
										<Button className="btn-main-primary btn-block" onClick={setLoader}>Complete Payment {loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}</Button>
									</Card>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

FormLayouts.propTypes = {};

FormLayouts.defaultProps = {};

export default FormLayouts;


