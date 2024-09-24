import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './FormElements.module.scss';
import InputMask from 'react-input-mask';


//plugins
import Pickr from "@simonwep/pickr";
import DatePicker from "react-datepicker";
import TextField from "@material-ui/core/TextField";
import Select from 'react-select';


const DefaultSelect = [
	{ value: "Brazil", label: "Brazil" },
	{ value: "Czech Republic", label: "Czech Republic" },
	{ value: "Germany", label: "Germany" },
	{ value: "Poland", label: "Poland" }
];



const FormElements = () => {

	const [secondary, setsecondary] = useState("")
	const [success, setsuccess] = useState("")
	const [dark, setdark] = useState("")
	const [primary, setprimary] = useState("")

	const [secondary1, setsecondary1] = useState("on")
	const [success1, setsuccess1] = useState("on")
	const [dark1, setdark1] = useState("on")
	const [primary1, setprimary1] = useState("on")


	//Nano color picker
	const colorPicker:any = React.useRef();

	React.useEffect(() => {
		if (colorPicker.current) {
			const _pickr = Pickr.create({
				el: ".color-picker",
				theme: "nano",
				default: '#05C3FB',
				swatches: [
					"rgba(156, 39, 176, 0.9)",
					"rgba(103, 58, 183, 0.85)",
					"rgba(63, 81, 181, 0.8)",
					"rgba(33, 150, 243, 0.75)",
					"rgba(3, 169, 244, 0.7)",
					"rgba(0, 188, 212, 0.7)",
					"rgba(0, 150, 136, 0.75)",
					"rgba(76, 175, 80, 0.8)",
					"rgba(244, 67, 54, 1)",
					"rgba(233, 30, 99, 0.95)",
					"rgba(139, 195, 74, 0.85)",
					"rgba(205, 220, 57, 0.9)",
					"rgba(255, 235, 59, 0.95)",
					"rgba(255, 193, 7, 1)",
				],

				components: {
					// Main components
					preview: true,
					opacity: true,
					hue: false,

					// Input / output Options
					interaction: {
						hex: true,
						input: true,
						clear: true,
						save: true,
					},
				},
			});
			
		}

	}, []);


	//Classic color picker
	const classicPicker:any = useRef();

	useEffect(() => {
		if (classicPicker.current) {
			const pickr = Pickr.create({
				el: ".color-picker",
				theme: "classic",
				default: '#6C5FFC',
				swatches: [
					"rgba(244, 67, 54, 1)",
					"rgba(233, 30, 99, 0.95)",
					"rgba(156, 39, 176, 0.9)",
					"rgba(103, 58, 183, 0.85)",
					"rgba(63, 81, 181, 0.8)",
					"rgba(33, 150, 243, 0.75)",
					"rgba(3, 169, 244, 0.7)",
					"rgba(0, 188, 212, 0.7)",
					"rgba(0, 150, 136, 0.75)",
					"rgba(76, 175, 80, 0.8)",
					"rgba(139, 195, 74, 0.85)",
					"rgba(205, 220, 57, 0.9)",
					"rgba(255, 235, 59, 0.95)",
					"rgba(255, 193, 7, 1)",
				],

				components: {
					preview: true,
					opacity: true,
					hue: true,

					interaction: {
						hex: true,
						rgba: true,
						hsva: true,
						input: true,
						clear: true,
						save: true,
					},
				},

			});
			
		}

	}, []);

	//Monolith color picker

	const monolithPicker:any = React.useRef();

	React.useEffect(() => {
		if (monolithPicker.current) {
			const pickr = Pickr.create({
				el: ".color-picker",
				theme: "classic",
				default: '#FC5296',

				swatches: [
					"rgba(55, 35, 9, 0.5)",
					"rgba(44, 67, 54, 1)",
					"rgba(33, 30, 99, 0.95)",
					"rgba(56, 39, 176, 0.9)",
					"rgba(03, 58, 183, 0.85)",
					"rgba(163, 81, 181, 0.8)",
					"rgba(33, 150, 243, 0.75)",
					"rgba(3, 169, 244, 0.7)",
					"rgba(0, 188, 212, 0.7)",
					"rgba(0, 150, 136, 0.75)",
					"rgba(76, 175, 80, 0.8)",
					"rgba(139, 195, 74, 0.85)",
					"rgba(205, 220, 57, 0.9)",

					"rgba(255, 193, 7, 1)",
				],

				components: {
					// Main components
					preview: true,
					opacity: true,
					hue: false,

					// Input / output Options
					interaction: {

						input: true,
						clear: true,
						save: true,
					},
				},
			});
			
		}
	}, []);


	//Date picker function

	const [startDate, setStartDate] = useState<any>(new Date());

	const [monthYear, setmonthYear] = useState<any>(new Date());

	const [Year, setYear] = useState<any>(new Date());


	return (

		<div className={styles.FormElements}>
			<Pageheader titles="Forms" active="Form-Elements" />

			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col lg={6} xl={6} md={12} sm={12}>
					<Card className="box-shadow-0">
						<Card.Header>
							<Card.Title as='h3' className="mb-1">Default Form</Card.Title>
							<p className="mb-2">It is Very Easy to Customize and it uses in your website apllication.</p>
						</Card.Header>
						<Card.Body className="pt-0">
							<Form className="form-horizontal">
								<Form.Group>
									<Form.Control className="mb-3" type="text" id="inputName" placeholder="Name" />
								</Form.Group>
								<Form.Group>
									<Form.Control className="mb-3" type="email" id="inputEmail3" placeholder="Email" />
								</Form.Group>
								<Form.Group>
									<Form.Control className="mb-3" type="password" id="inputPassword3" placeholder="Password" />
								</Form.Group>
								<Form.Group className="mb-0 justify-content-end">
									<div className="checkbox">
										<Form.Check type='checkbox' id='default-checkbox' label='Check me Out' />
									</div>
								</Form.Group>
								<Form.Group className="mb-0 mt-3 justify-content-end">
									<div>
										<Button variant='primary' className="">Sign in</Button>
										<Button variant='secondary' className="ms-4">Cancel</Button>
									</div>
								</Form.Group>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} xl={6} md={12} sm={12}>
					<Card className="box-shadow-0 ">
						<Card.Header>
							<Card.Title as='h4' className="mb-1">Vertical Form</Card.Title>
							<p className="mb-2">It is Very Easy to Customize and it uses in your website apllication.</p>
						</Card.Header>
						<Card.Body className="pt-0">
							<Form >
								<div className="">
									<Form.Group>
										<Form.Label className="mb-2">Email address</Form.Label>
										<Form.Control className="mb-2" type="email" placeholder="Enter email" />
									</Form.Group>
									<Form.Group>
										<Form.Label className="mb-2">Password</Form.Label>
										<Form.Control className="mb-3" type="password" placeholder="Password" />
									</Form.Group>
									<div className="checkbox mb-2">
										<Form.Check type='checkbox' id='vertical-checkbox' label='Check me Out' />
									</div>
								</div>
								<Button type="submit" variant='primary' className="mt-3 mb-0">Submit</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- row --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Form Input and Textarea
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row className="row-sm">
								<div className="col-lg">
									<Form.Control className="mb-3" type="text" placeholder="Input box" />
								</div>
								<div className="col-lg mg-t-10 mg-lg-t-0">
									<Form.Control className="mb-3" type="text" placeholder="Input box (readonly)" readOnly />
								</div>
								<div className="col-lg mg-t-10 mg-lg-t-0">
									<Form.Control className="mb-3" type="text" placeholder="Input box (disabled)" disabled />
								</div>
							</Row>
							<Row className="row-sm mg-t-20">
								<div className="col-lg">
									<Form.Control as='textarea' className="mb-3" type="text" placeholder="Textarea" rows={3} />
								</div>
								<div className="col-lg mg-t-10 mg-lg-t-0">
									<Form.Control as='textarea' className="mb-3" type="text" placeholder="Textarea (readonly)" rows={3} readOnly />
								</div>
								<div className="col-lg mg-t-10 mg-lg-t-0">
									<Form.Control as='textarea' className="mb-3" type="text" placeholder="Texarea (disabled)" rows={3} disabled />
								</div>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Form Input Sizes
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row className="row-sm">
								<div className="col-lg">
									<Form.Control className="mb-3 form-control-sm mg-b-20" type="text" placeholder="Input sm box" />
									<Form.Control className="mb-3 mg-b-20" type="text" placeholder="Input box" />
									<Form.Control className="mb-3 form-control-lg" type="text" placeholder="Input lg box" />
								</div>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Valid State Input
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Form className="needs-validation was-validated">
								<Row className="row-sm">
									<Col lg={6}>
										<Form.Group className="has-success mg-b-0">
											<Form.Control className="mb-3 mg-b-20" type="text" placeholder="Input box (invalid state)" required />
											<Form.Control as='textarea' className="mb-3 mg-t-20" type="text" placeholder="Textarea (invalid state)" required rows={3} />
										</Form.Group>
									</Col>
									<Col lg={6} className="mg-t-20 mg-lg-t-0">
										<Form.Group className="has-danger mg-b-0">
											<Form.Control className="mb-3  mg-b-20" type="text" placeholder="Input box (Success state)" required />
											<Form.Control as='textarea' className="mb-3 mg-t-20" type="text" placeholder="Textarea (Success state)" required rows={3} />
										</Form.Group>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								File Browser
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row className="row-sm">
								<Col sm={12} md={12} lg={12}>
									<div className="mb-3">
										<Form.Label>Default file input example</Form.Label>
										<Form.Control type="file" name="file" />
									</div>
									<div className="mb-3">
										<Form.Label>Multiple files input example</Form.Label>
										<Form.Control type="file" multiple name="file" />
									</div>
									<div className="mb-3">
										<Form.Label>Disabled file input example</Form.Label>
										<Form.Control type="file" disabled name="file" />
									</div>
									<div className="mb-3">
										<Form.Label>Small file input example</Form.Label>
										<Form.Control className="form-control-sm" type="file" name="file" />
									</div>
									<div>
										<Form.Label>Large file input example</Form.Label>
										<Form.Control className="form-control-lg" type="file" name="file" />
									</div>

								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}


				{/* <!--div--> */}
				<Col md={12} xl={6} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-10">
								Custom Checkboxes &amp; Radios
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row>
								<Col lg={3}>
									<Form.Check type='checkbox' id='checkbox' label='Unchecked' />
								</Col>
								<Col lg={3} className="mg-t-20 mg-lg-t-0">
									<Form.Check type='checkbox' id='checkbox1' label='Checked' defaultChecked />
								</Col>
								<Col lg={3} className="mg-t-20 mg-lg-t-0">
									<Form.Check type='checkbox' id='checkbox2' label='Disabled' disabled />
								</Col>
							</Row>
							<Row className="mg-t-15">
								<Col lg={3}>
									<Form.Check type='radio' id='radio' label='Unchecked' />
								</Col>
								<Col lg={3} className="mg-t-20 mg-lg-t-0">
									<Form.Check type='radio' id='radio1' label='Checked' defaultChecked />
								</Col>
								<Col lg={3} className="mg-t-20 mg-lg-t-0">
									<Form.Check type='radio' id='radio2' label='Disabled' disabled />
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={6} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Toggle Switches
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<div className="main-toggle-group-demo d-sm-flex d-block">
								<div className={`main-toggle ms-0 mb-sm-0 mb-1 ${primary}`} onClick={() => { primary == "off" ? setprimary("on") : setprimary("off") }}>
									<span></span>
								</div>
								<div className={`main-toggle ms-sm-2 ms-0 mb-sm-0 mb-1 main-toggle-secondary ${secondary}`} onClick={() => { secondary == "off" ? setsecondary("on") : setsecondary("off") }}>
									<span></span>
								</div>
								<div className={`main-toggle  ms-sm-2 ms-0 mb-sm-0 mb-1 main-toggle-success ${success}`} onClick={() => { success == "off" ? setsuccess("on") : setsuccess("off") }}>
									<span></span>
								</div>
								<div className={`main-toggle ms-sm-2 ms-0 mb-sm-0 mb-1 main-toggle-dark ${dark}`} onClick={() => { dark == "off" ? setdark("on") : setdark("off") }}>
									<span></span>
								</div>
							</div>
							<div className="main-toggle-group-demo mg-t-10 d-sm-flex d-block">
							<div className={`main-toggle ms-0 mb-sm-0 mb-1 ${primary1}`} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on") }}>
									<span></span>
								</div>
								<div className={`main-toggle ms-sm-2 ms-0 mb-sm-0 mb-1 main-toggle-secondary ${secondary1}`} onClick={() => { secondary1 == "on" ? setsecondary1("off") : setsecondary1("on") }}>
									<span></span>
								</div>
								<div className={`main-toggle ms-sm-2 ms-0 mb-sm-0 mb-1 main-toggle-success ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on") }}>
									<span></span>
								</div>
								<div className={`main-toggle ms-sm-2 ms-0 mb-sm-0 mb-1 main-toggle-dark ${dark1}`} onClick={() => { dark1 == "on" ? setdark1("off") : setdark1("on") }}>
									<span></span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Input Groups
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row className="row-sm">
								<Col lg={4}>
									<InputGroup className="mb-3">
										<InputGroup.Text className="" id="basic-addon1">@</InputGroup.Text>
										<Form.Control aria-describedby="basic-addon1" aria-label="Username" className="" placeholder="Username" type="text" />
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
								<Col lg={4}>
									<InputGroup className="mb-3">
										<Form.Control aria-describedby="basic-addon2" aria-label="Recipient's username" className="" placeholder="Recipient's username" type="text" />
										<InputGroup.Text className="input-group-text" id="basic-addon2">@example.com</InputGroup.Text>
									</InputGroup>
								</Col>
								<Col lg={4}>
									<InputGroup className="mb-3">
										<InputGroup.Text className="">$</InputGroup.Text>
										<Form.Control aria-label="Amount (to the nearest dollar)" className="rounded-0" type="text" />
										<InputGroup.Text className="">.00</InputGroup.Text>
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
							</Row>
							<Row className="row-sm">
								<Col lg={4}>
									<InputGroup>
										<InputGroup.Text>
											<Form.Check className="wd-16 mg-b-0" type='checkbox' id='checkbox4' label='checkbox' />
										</InputGroup.Text>
										<Form.Control className='' placeholder="Text input with checkbox" type="text" />
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
								{/* <!-- col-4 --> */}
								<Col lg={4} className="mg-t-20 mg-lg-t-0">
									<InputGroup>
										<InputGroup.Text>
											<Form.Check className="wd-16 mg-b-0" type='radio' id='radio4' label='checkbox' />
										</InputGroup.Text>
										<Form.Control className='' placeholder="Text input with radiobox" type="text" />
									</InputGroup>
									{/* !-- input-group --> */}
								</Col>
								{/* <!-- col-4 --> */}
								<Col lg={4} className="mg-t-20 mg-lg-t-0">
									<InputGroup>
										<Form.Control className='' placeholder="Search for..." type="text" />
										<Button className="btn btn-primary br-ts-0 br-bs-0" type="button"><i className="fa fa-search"></i></Button>
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
								{/* <!-- col-4 --> */}
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Input Mask
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row className="row-sm">
								<Col lg={3}>
									<InputGroup>
										<InputGroup.Text>
											Date:
										</InputGroup.Text>
										<InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
								{/* <!-- col-4 --> */}
								<Col lg={3} className="mg-t-20 mg-lg-t-0">
									<InputGroup>
										<InputGroup.Text>
											Phone:
										</InputGroup.Text>
										<InputMask className='form-control' mask="(999) 999-99-99" placeholder="(000) 000-0000)" />
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
								<Col lg={4} className="mg-t-20 mg-lg-t-0">
									<InputGroup>
										<InputGroup.Text>
											Phone + Ext.:
										</InputGroup.Text>
										<InputMask className='form-control' mask="(999) 999-9999 ext 9999" placeholder="(000) 000-0000 ext 0000" />
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
								<Col lg={2} className="mg-t-20 mg-lg-t-0">
									<InputGroup>
										<InputGroup.Text>
											SSN:
										</InputGroup.Text>
										{/* <!-- input-group-text --> */}
										<InputMask className='form-control' mask="999-99-9999" placeholder="000-00-0000" />
									</InputGroup>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}

				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h4' className="mb-1">Color Picker</Card.Title>
							<p className="mb-2">It is Very Easy to Customize and it uses in your website apllication.</p>
						</Card.Header>
						<Container className="p-0 p-md-5 ">
							<Card.Body className="pt-0">
								<div className="d-flex justify-content-between">
									<div>
										<div className="theme-container">
											<Button variant="">Clasic</Button>
										</div>
										<div className="pickr-container">
											<div className="color-picker" ref={classicPicker}></div>
										</div>
									</div>
									<div>
										<div className="theme-container1">
											<Button variant="">Monolith</Button>
										</div>
										<div className="pickr-container1">
											<div className="color-picker" ref={monolithPicker}></div>
										</div>
									</div>
									<div>
										<div className="theme-container2">
											<div className="theme-container2">
												<Button variant="">nano</Button>
											</div>
										</div>
										<div className="pickr-container2">
											<div className="color-picker" ref={colorPicker}></div>
										</div>
									</div>
								</div>
							</Card.Body>
						</Container>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								DATE, MONTH, YEAR RANGE PICKER
							</div>
							<Row className="row-sm">
								<Col lg={3}>
									<InputGroup className='flex-nowrap'>
										<InputGroup.Text>
											<i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
										</InputGroup.Text>
										<DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
								{/* <!-- col-4 --> */}
								<Col lg={3} className="mg-t-20 mg-lg-t-0">
									<InputGroup className='flex-nowrap'>
										<InputGroup.Text>
											<i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
										</InputGroup.Text>
										<DatePicker className="form-control" selected={monthYear} onChange={(date) => setmonthYear(date)} dateFormat="MM/yyyy" showMonthYearPicker showFullMonthYearPicker />
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
								<Col lg={4} className="mg-t-20 mg-lg-t-0">
									<InputGroup className='flex-nowrap'>
										<InputGroup.Text>
											<i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
										</InputGroup.Text>
										<DatePicker className="form-control" selected={Year} onChange={(date) => setYear(date)} showYearPicker dateFormat="yyyy" />
									</InputGroup>
									{/* <!-- input-group --> */}
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={6} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Datetimepicker Style 2
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row className="row-sm">
								<Col md={6} className="input-group">
									<InputGroup.Text>
										<i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
									</InputGroup.Text>
									<Form className="form-control" noValidate>
										<TextField id="datetime-local" type="datetime-local" defaultValue="2020-01-16T14:22" />
									</Form>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={6} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Datetimepicker Style 3
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
							<Row className="row-sm">
								<Col md={6} className="input-group">
									<InputGroup.Text>
										<i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
									</InputGroup.Text>
									<Form.Control type="text" defaultValue="January 20, 2019 09:00" id="datetimepicker3" className="" />
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Select</Card.Title>
						</Card.Header>
						<Card.Body>
							<p>Customize the native <code className="highlighter-rouge">&lt;select&gt;</code>s with custom CSS that changes the element’s initial appearance.</p>
							<Form.Group className="mb-3">
								<label className="form-label">Default Select</label>
								<Select classNamePrefix="Select-sm" options={DefaultSelect} placeholder='Poland' />
							</Form.Group>
							<Form.Group className="mb-3">
								<label className="form-label">Customize Select</label>
								<Select classNamePrefix="Select-sm" options={DefaultSelect} placeholder='Poland' />
							</Form.Group>
							<Form.Group>
								<label className="form-label">Disabled Select</label>
								<Select classNamePrefix="Select-sm" options={DefaultSelect} placeholder='Poland' isDisabled />
							</Form.Group>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

FormElements.propTypes = {};

FormElements.defaultProps = {};

export default FormElements;

