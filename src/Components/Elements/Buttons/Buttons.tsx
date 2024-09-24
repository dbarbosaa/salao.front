import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Card, Col, Dropdown, Row, ToggleButton, ToggleButtonGroup, Form, Collapse } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Buttons.module.scss';


const radios = [
	{ name: 'Radio 1', value: '1' },
	{ name: 'Radio 2', value: '2' },
	{ name: 'Radio 3', value: '3' },
];

const Buttons = () => {

	//Toggle Checkbox
	// const [checked, setChecked] = useState(false);
	const [radioValue, setRadioValue] = useState('1');

	//Show Code variables

	const [i, seti] = useState(false)
	const [i2, seti2] = useState(false)
	const [i3, seti3] = useState(false)
	const [i4, seti4] = useState(false)
	const [i5, seti5] = useState(false)
	const [i6, seti6] = useState(false)
	const [i7, seti7] = useState(false)
	const [i8, seti8] = useState(false)
	const [i9, seti9] = useState(false)
	const [i10, seti10] = useState(false)
	const [i11, seti11] = useState(false)
	const [i12, seti12] = useState(false)
	const [i13, seti13] = useState(false)
	const [i14, seti14] = useState(false)
	const [i15, seti15] = useState(false)
	const [i16, seti16] = useState(false)
	const [i17, seti17] = useState(false)
	const [i18, seti18] = useState(false)


	return (

		<div className={styles.Buttons}>
			<Pageheader titles="Elements" active="Buttons" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card id="button1">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">Default Buttons</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti(!i) }} />
							</div>
							<p className="text-muted card-sub-title">Predefined button styles, each serving its own semantic purpose.</p>

							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p">
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='primary' className="btn-block">Primary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='secondary' className="btn-block">Secondary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='success' className="btn-block">Success</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='warning' className="btn-block">Warning</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='danger' className="btn-block">Danger</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='info' className="btn-block">Info</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='light' className="btn-block">Light</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='dark' className="btn-block">Dark</Button>
										</Col>
									</Row>
								</div>
								<Collapse in={i} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs wd-xl-80p">
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='primary' className="btn-block">Primary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='secondary' className="btn-block">Secondary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='success' className="btn-block">Success</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='warning' className="btn-block">Warning</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='danger' className="btn-block">Danger</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='info' className="btn-block">Info</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='light' className="btn-block">Light</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='dark' className="btn-block">Dark</Button>
	</Col>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card id="button1">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">Disabled Buttons</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti2(!i2) }} />
							</div>
							<p className="text-muted card-sub-title">Predefined button styles, each serving its own semantic purpose.</p>

							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p">
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='primary' className="btn-block" disabled>Primary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='secondary' className="btn-block" disabled>Secondary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='success' className="btn-block" disabled>Success</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='warning' className="btn-block" disabled>Warning</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='danger' className="btn-block" disabled>Danger</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='info' className="btn-block" disabled>Info</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='light' className="btn-block" disabled>Light</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='dark' className="btn-block" disabled>Dark</Button>
										</Col>
									</Row>
								</div>
								<Collapse in={i2} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs wd-xl-80p">
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='primary' className="btn-block" disabled>Primary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='secondary' className="btn-block" disabled>Secondary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='success' className="btn-block" disabled>Success</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='warning' className="btn-block" disabled>Warning</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='danger' className="btn-block" disabled>Danger</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='info' className="btn-block" disabled>Info</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='light' className="btn-block" disabled>Light</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='dark' className="btn-block" disabled>Dark</Button>
	</Col>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card id="button33">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">Gradient Buttons</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti3(!i3) }} />
							</div>
							<p className="text-muted card-sub-title">Predefined button styles, each serving its own semantic purpose.</p>

							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p">
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='primary-gradient' className="btn-block">Primary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='secondary-gradient' className="btn-block">Secondary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='success-gradient' className="btn-block">Success</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='warning-gradient' className="btn-block">Warning</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='danger-gradient' className="btn-block">Danger</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='info-gradient' className="btn-block">Info</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='light-gradient' className="btn-block">Light</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='dark-gradient' className="btn-block">Dark</Button>
										</Col>
									</Row>
								</div>
								<Collapse in={i3} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs wd-xl-80p">
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='primary-gradient' className="btn-block">Primary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='secondary-gradient' className="btn-block">Secondary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='success-gradient' className="btn-block">Success</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='warning-gradient' className="btn-block">Warning</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='danger-gradient' className="btn-block">Danger</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='info-gradient' className="btn-block">Info</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='light-gradient' className="btn-block">Light</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='dark-gradient' className="btn-block">Dark</Button>
	</Col>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card id="button2">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">Outline Buttons</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti4(!i4) }} />
							</div>
							<p className="text-muted card-sub-title">Predefined button styles, each serving its own semantic purpose.</p>

							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p">
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='outline-primary' className="btn-block">Primary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='outline-secondary' className="btn-block">Secondary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='outline-success' className="btn-block">Success</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='outline-warning' className="btn-block">Warning</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='outline-danger' className="btn-block">Danger</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='outline-info' className="btn-block">Info</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='outline-light' className="btn-block">Light</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='outline-dark' className="btn-block">Dark</Button>
										</Col>
									</Row>
								</div>
								<Collapse in={i4} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs wd-xl-80p">
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='outline-primary' className="btn-block">Primary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='outline-secondary' className="btn-block">Secondary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='outline-success' className="btn-block">Success</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='outline-warning' className="btn-block">Warning</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='outline-danger' className="btn-block">Danger</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='outline-info' className="btn-block">Info</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='outline-light' className="btn-block">Light</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='outline-dark' className="btn-block">Dark</Button>
	</Col>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card id="button3">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">ROUNDED BUTTONS</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti5(!i5) }} />
							</div>
							<p className="text-muted card-sub-title">Predefined button styles, each serving its own semantic purpose.</p>

							<p className="mg-b-20">Predefined button styles, each serving its own semantic purpose..</p>
							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p">
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='primary' className="btn-rounded btn-block">Primary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='secondary' className="btn-rounded btn-block">Secondary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='success' className="btn-rounded btn-block">Success</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='warning' className="btn-rounded btn-block">Warning</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='danger' className="btn-rounded btn-block">Danger</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='info' className="btn-rounded btn-block">Info</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='light' className="btn-rounded btn-block">Light</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='dark' className="btn-rounded btn-block">Dark</Button>
										</Col>
									</Row>
								</div>
								<Collapse in={i5} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs wd-xl-80p">
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='primary' className="btn-rounded btn-block">Primary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='secondary' className="btn-rounded btn-block">Secondary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='success' className="btn-rounded btn-block">Success</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='warning' className="btn-rounded btn-block">Warning</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='danger' className="btn-rounded btn-block">Danger</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='info' className="btn-rounded btn-block">Info</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='light' className="btn-rounded btn-block">Light</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='dark' className="btn-rounded btn-block">Dark</Button>
	</Col>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card id="button2">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">Rounded Outline Buttons</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti6(!i6) }} />
							</div>
							<p className="text-muted card-sub-title">Predefined button styles, each serving its own semantic purpose.</p>

							<p className="mg-b-20">Predefined button styles, each serving its own semantic purpose..</p>
							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p">
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='outline-primary' className="btn-outline-primary  btn-rounded btn-block">Primary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Button variant='outline-secondary' className="btn-rounded  btn-block">Secondary</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='outline-success' className="btn-rounded  btn-block">Success</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
											<Button variant='outline-warning' className="btn-rounded  btn-block">Warning</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='outline-danger' className="btn-rounded  btn-block">Danger</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='outline-info' className="btn-rounded  btn-block">Info</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='outline-light' className="btn-rounded  btn-block">Light</Button>
										</Col>
										<Col sm={6} md={3} className="mg-t-10">
											<Button variant='outline-dark' className="btn-rounded  btn-block">Dark</Button>
										</Col>
									</Row>
								</div>
								<Collapse in={i6} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs wd-xl-80p">
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='outline-primary' className="btn-outline-primary  btn-rounded btn-block">Primary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Button variant='outline-secondary' className="btn-rounded  btn-block">Secondary</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='outline-success' className="btn-rounded  btn-block">Success</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-md-t-0">
		<Button variant='outline-warning' className="btn-rounded  btn-block">Warning</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='outline-danger' className="btn-rounded  btn-block">Danger</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='outline-info' className="btn-rounded  btn-block">Info</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='outline-light' className="btn-rounded  btn-block">Light</Button>
	</Col>
	<Col sm={6} md={3} className="mg-t-10">
		<Button variant='outline-dark' className="btn-rounded  btn-block">Dark</Button>
	</Col>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">Button with loading animation</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti7(!i7) }} />
							</div>
							<p className="text-muted card-sub-title">A basic button with added loaders...</p>

							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p btn-list btn-animation">
										<Button variant='secondary' className="btn-spiner ms-2 mb-1">
											<span className="loading">loading...</span></Button>
										<Button variant='success' className="btn-spiner ms-2 mb-1">
											<span className="loading">loading...</span></Button>
										<Button variant='warning' className="btn-spiner ms-2 mb-1">
											<span className="loading">loading...</span></Button>
										<Button variant='primary' className="btn-loaders ms-2 mb-1">
											<span className="loading">loading...</span></Button>
										<Button variant='danger' className="btn-loaders ms-2 mb-1">
											<span className="loading">loading...</span></Button>
										<Button variant='info' className="btn-loaders ms-2 mb-1">
											<span className="loading">loading...</span></Button>
									</Row>
								</div>
								<Collapse in={i7} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs wd-xl-80p btn-list btn-animation">
	<Button variant='secondary' className="btn-spiner ms-2 mb-1">
		<span className="loading">loading...</span></Button>
	<Button variant='success' className="btn-spiner ms-2 mb-1">
		<span className="loading">loading...</span></Button>
	<Button variant='warning' className="btn-spiner ms-2 mb-1">
		<span className="loading">loading...</span></Button>
	<Button variant='primary' className="btn-loaders ms-2 mb-1">
		<span className="loading">loading...</span></Button>
	<Button variant='danger' className="btn-loaders ms-2 mb-1">
		<span className="loading">loading...</span></Button>
	<Button variant='info' className="btn-loaders ms-2 mb-1">
		<span className="loading">loading...</span></Button>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={6} md={12} xl={6}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">BUTTON WITH ICONS</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti8(!i8) }} />
							</div>
							<p className="text-muted card-sub-title">A basic button with added icons.</p>

							<p className="mg-b-20">A basic button with added icons...</p>
							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p btn-list">
										<Button variant='dark' className="button-icon mb-1"><i
											className="fe fe-upload"></i></Button>
										<Button variant='warning' className="mx-2 button-icon mb-1"><i
											className="fe fe-heart me-2"></i>I like</Button>
										<Button variant='outline-success' className="button-icon mb-1"><i
											className="fe fe-check"></i></Button>
										<Button variant='outline-primary' className="mx-2 button-icon mb-1"><i
											className="fe fe-plus me-2"></i>More</Button>
										<Button variant='secondary' className="button-icon mb-1"><i
											className="fe fe-link"></i></Button>
										<Button variant='info' className="mx-2 button-icon mb-1"><i
											className="fe fe-message-circle me-2"></i>Comment</Button>
									</Row>
								</div>
								<Collapse in={i8} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs wd-xl-80p btn-list">
	<Button variant='dark' className="button-icon mb-1"><i
		className="fe fe-upload"></i></Button>
	<Button variant='warning' className="mx-2 button-icon mb-1"><i
		className="fe fe-heart me-2"></i>I like</Button>
	<Button variant='outline-success' className="button-icon mb-1"><i
		className="fe fe-check"></i></Button>
	<Button variant='outline-primary' className="mx-2 button-icon mb-1"><i
		className="fe fe-plus me-2"></i>More</Button>
	<Button variant='secondary' className="button-icon mb-1"><i
		className="fe fe-link"></i></Button>
	<Button variant='info' className="mx-2 button-icon mb-1"><i
		className="fe fe-message-circle me-2"></i>Comment</Button>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={12} xl={6}>
					<Card id="button5">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">ICON BUTTONS</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti9(!i9) }} />
							</div>
							<p className="text-muted card-sub-title">It is Very Easy to Customize and it uses in your website
								apllication....</p>

							<div className="text-wrap">
								<div className="example">
									<div className="btn-icon-list btn-list">
										<Button variant='primary' className="btn-icon">
											<i className="fe fe-activity"></i></Button>
										<Button variant='dark' className="btn-icon">
											<i className="fe fe-github"></i></Button>
										<Button variant='success' className="btn-icon">
											<i className="fe fe-bell"></i></Button>
										<Button variant='warning' className="btn-icon">
											<i className="fe fe-star"></i></Button>
										<Button variant='danger' className="btn-icon">
											<i className="fe fe-trash"></i></Button>
										<Button variant='purple' className="btn-icon">
											<i className="fe fe-bar-chart"></i></Button>
									</div>
								</div>
								<Collapse in={i9} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className="btn-icon-list btn-list">
	<Button variant='primary' className="btn-icon">
		<i className="fe fe-activity"></i></Button>
	<Button variant='dark' className="btn-icon">
		<i className="fe fe-github"></i></Button>
	<Button variant='success' className="btn-icon">
		<i className="fe fe-bell"></i></Button>
	<Button variant='warning' className="btn-icon">
		<i className="fe fe-star"></i></Button>
	<Button variant='danger' className="btn-icon">
		<i className="fe fe-trash"></i></Button>
	<Button variant='purple' className="btn-icon">
		<i className="fe fe-bar-chart"></i></Button>
</div>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={12} xl={6}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">Button size</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti10(!i10) }} />
							</div>
							<p className="text-muted card-sub-title">A basic button with sizes</p>

							<div className="">
								<div className="example">
									<div className="btn-list">
										<Row>
											<Col md={4} className="mb-2">
												<Button variant='warning' size='sm' className="mb-1">Small button</Button>
											</Col>
											<Col md={4} className="mb-2">
												<Button variant='info' className="mb-1">Medium button</Button>
											</Col>
											<Col md={4} className="mb-2">
												<Button variant='success' size='lg' className="mb-1">Large button</Button>
											</Col>
										</Row>
									</div>
								</div>
								<Collapse in={i10} className="">
									<pre>
										<code>
											{`
	<div className="example">
	<div className="btn-list">
		<Row>
			<Col md={4} className="mb-2">
				<Button variant='warning' size='sm' className="mb-1">Small button</Button>
			</Col>
			<Col md={4} className="mb-2">
				<Button variant='info' className="mb-1">Medium button</Button>
			</Col>
			<Col md={4} className="mb-2">
				<Button variant='success' size='lg' className="mb-1">Large button</Button>
			</Col>
		</Row>
	</div>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL END --> */}
				<Col lg={6} md={12} xl={6}>
					<Card id="button6">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">Button Widths</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti11(!i11) }} />
							</div>
							<p className="text-muted card-sub-title">A basic button with Width sizes</p>

							<div className="text-wrap">
								<div className="example">
									<div className="btn-list">
										<Button variant='primary' className="btn-w-xs mb-1 me-1">XS</Button>
										<Button variant='teal' className="btn-w-sm mb-1 me-1">SM</Button>
										<Button variant='danger' className="btn-w-sm mb-1 me-1">MD</Button>
										<Button variant='success' className="btn-w-lg mb-1 me-1">LG</Button>
									</div>
								</div>
								<Collapse in={i11} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className="btn-list">
	<Button variant='primary' className="btn-w-xs mb-1 me-1">XS</Button>
	<Button variant='teal' className="btn-w-sm mb-1 me-1">SM</Button>
	<Button variant='danger' className="btn-w-sm mb-1 me-1">MD</Button>
	<Button variant='success' className="btn-w-lg mb-1 me-1">LG</Button>
</div>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12} xl={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mb-1">Button size</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti12(!i12) }} />
							</div>
							<p className="text-muted card-sub-title">A basic button with block sizes</p>

							<div className="">
								<div className="example">
									<div className="btn-list">
										<Button variant='primary' size='lg' className="btn-block">Block level button</Button>
										<Button variant='secondary' className="btn-block btn-md">Block level button</Button>
										<Button variant='info' size='sm' className="btn-block">Block level button</Button>
									</div>
								</div>
								<Collapse in={i12} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className="btn-list">
	<Button variant='primary' size='lg' className="btn-block">Block level button</Button>
	<Button variant='secondary' size='md' className="btn-block">Block level button</Button>
	<Button variant='info' size='sm' className="btn-block">Block level button</Button>
</div>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL END --> */}
				<Col lg={6} md={12} xl={6}>
					<Card>
						<Card.Body>
							<div className='d-sm-flex'>
								<Card.Title as='h3' className="mg-b-10">Checkbox button groups</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti13(!i13) }} />
							</div>
							<div className="">
								<div className="example">
									<div className="group-checkboxbtns">
										<Row>
											<ToggleButtonGroup type="checkbox" defaultValue={[]} className="mb-2">
												<ToggleButton variant='outline-primary' id="tbg-check-1" value={1}>
													Checkbox 1
												</ToggleButton>
												<ToggleButton variant='outline-primary' id="tbg-check-2" value={2}>
													Checkbox 2
												</ToggleButton>
												<ToggleButton variant='outline-primary' id="tbg-check-3" value={3}>
													Checkbox 3
												</ToggleButton>
											</ToggleButtonGroup>
										</Row>
									</div>
								</div>
								<Collapse in={i13} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className="group-checkboxbtns">
	<Row>
		<ToggleButtonGroup type="checkbox" defaultValue={[]} className="mb-2">
			<ToggleButton variant='outline-primary' id="tbg-check-1" value={1}>
				Checkbox 1
			</ToggleButton>
			<ToggleButton variant='outline-primary' id="tbg-check-2" value={2}>
				Checkbox 2
			</ToggleButton>
			<ToggleButton variant='outline-primary' id="tbg-check-3" value={3}>
				Checkbox 3
			</ToggleButton>
		</ToggleButtonGroup>
	</Row>
</div>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL END --> */}
				<Col lg={6} md={12} xl={6}>
					<Card>
						<Card.Body>
							<div className='d-sm-flex'>
								<Card.Title as='h3' className="mg-b-10">Radio button groups</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti14(!i14) }} />
							</div>
							<div className="">
								<div className="example">
									<div className="group-radiobtns">
										<Row>
											<ButtonGroup>
												{radios.map((radio, idx) => (
													<ToggleButton
														key={idx}
														id={`radio-${idx}`}
														type="radio"
														variant='outline-primary'
														name="radio"
														value={radio.value}
														checked={radioValue === radio.value}
														onChange={(e) => setRadioValue(e.currentTarget.value)}
													>
														{radio.name}
													</ToggleButton>
												))}
											</ButtonGroup>
										</Row>
									</div>
								</div>
								<Collapse in={i14} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className="group-radiobtns">
	<Row>
		<ButtonGroup>
			{radios.map((radio, idx) => (
				<ToggleButton
					key={idx}
					id={radio-{idx}}
					type="radio"
					variant='outline-primary'
					name="radio"
					value={radio.value}
					checked={radioValue === radio.value}
					onChange={(e) => setRadioValue(e.currentTarget.value)}
				>
					{radio.name}
				</ToggleButton>
			))}
		</ButtonGroup>
	</Row>
</div>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL END --> */}
				<Col lg={12} md={12} xl={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mg-b-10">Button Toolbar</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti15(!i15) }} />
							</div>
							<div className="">
								<div className="example">
									<div className="btn-list">
										<ButtonToolbar aria-label="Toolbar with button groups">
											<ButtonGroup className="mx-2 mt-2 mb-2" aria-label="First group">
												<Button variant='primary' >1</Button>
												<Button variant='primary' >2</Button>
												<Button variant='primary' >3</Button>{' '}
												<Button variant='primary' >4</Button>
											</ButtonGroup>
											<ButtonGroup className="mx-2 mt-2 mb-2" aria-label="Second group">
												<Button variant='primary' >5</Button>
												<Button variant='primary' >6</Button>
												<Button variant='primary' >7</Button>
											</ButtonGroup>
											<ButtonGroup className="mx-2 mt-2 mb-2" aria-label="Third group">
												<Button variant='primary' >8</Button>
											</ButtonGroup>
										</ButtonToolbar>
									</div>
								</div>
								<Collapse in={i15} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className="btn-list">
	<ButtonToolbar aria-label="Toolbar with button groups">
		<ButtonGroup className="mx-2 mt-2 mb-2" aria-label="First group">
			<Button variant='primary' >1</Button>
			<Button variant='primary' >2</Button>
			<Button variant='primary' >3</Button>{' '}
			<Button variant='primary' >4</Button>
		</ButtonGroup>
		<ButtonGroup className="mx-2 mt-2 mb-2" aria-label="Second group">
			<Button variant='primary' >5</Button>
			<Button variant='primary' >6</Button>
			<Button variant='primary' >7</Button>
		</ButtonGroup>
		<ButtonGroup className="mx-2 mt-2 mb-2" aria-label="Third group">
			<Button variant='primary' >8</Button>
		</ButtonGroup>
	</ButtonToolbar>
</div>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL END --> */}
				<Col lg={12} md={12} xl={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mg-b-10">Toggle buttons</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti16(!i16) }} />
							</div>
							<div className="">
								<div className="example">
									<div className="">
										<div className="d-sm-flex d-grid">
											<ToggleButton variant='primary' value={1} className="mb-1 me-1">Toggle button</ToggleButton>
											<ToggleButton variant='primary' value={2} className="mb-1 me-1" active>Active toggle button</ToggleButton>
											<ToggleButton variant='primary' value={3} className="mb-1 me-1" disabled >Disabled toggle button</ToggleButton>
										</div>
									</div>
								</div>
								<Collapse in={i16} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className="">
	<Row>
		<div className="btn-list">
			<ToggleButton variant='primary' value={1} className="mb-1 me-1">Toggle button</ToggleButton>
			<ToggleButton variant='primary' value={2} className="mb-1 me-1" active>Active toggle button</ToggleButton>
			<ToggleButton variant='primary' value={3} className="mb-1 me-1" disabled >Disabled toggle button</ToggleButton>
		</div>
	</Row>
</div>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL END --> */}
				<Col lg={12} md={12} xl={12}>
					<Card id="button61">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mg-b-10">DROPDOWN BUTTONS</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti17(!i17) }} />
							</div>
							<p className="mg-b-20">A button variant for using only icons.</p>
							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p">
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Dropdown className="">
												<Dropdown.Toggle variant="secondary" className='btn-block' id="dropdown-basic">
													Dropdown  <i className="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
												</Dropdown.Toggle>
												<Dropdown.Menu style={{margin: '0px'}} >
													<Dropdown.Item href="#">Profile</Dropdown.Item>
													<Dropdown.Item href="#">Activity Logs</Dropdown.Item>
													<Dropdown.Item href="#">Account Settings</Dropdown.Item>
													<Dropdown.Item href="#">Logout</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											{/* <!-- dropdown-menu --> */}
										</Col>
										<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
											<Dropdown className="">
												<Dropdown.Toggle variant="primary" className='btn-block' id="dropdown-basic">
													Dropdown <i className="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
												</Dropdown.Toggle>
												<Dropdown.Menu style={{margin: '0px'}} >
													<Dropdown.Item href="#">Profile</Dropdown.Item>
													<Dropdown.Item href="#">Activity Logs</Dropdown.Item>
													<Dropdown.Item href="#">Account Settings</Dropdown.Item>
													<Dropdown.Item href="#">Logout</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</Col>
									</Row>
								</div>
								<Collapse in={i17} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs wd-xl-80p">
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Dropdown className="">
			<Dropdown.Toggle variant="secondary" className='btn-block' id="dropdown-basic">
				Dropdown  <i className="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
			</Dropdown.Toggle>
			<Dropdown.Menu style={{margin: '0px'}} >
				<Dropdown.Item href="#">Profile</Dropdown.Item>
				<Dropdown.Item href="#">Activity Logs</Dropdown.Item>
				<Dropdown.Item href="#">Account Settings</Dropdown.Item>
				<Dropdown.Item href="#">Logout</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
		{/* <!-- dropdown-menu --> */}
	</Col>
	<Col sm={6} md={3} className="mg-t-10 mg-sm-t-0">
		<Dropdown className="">
			<Dropdown.Toggle variant="primary" className='btn-block' id="dropdown-basic">
				Dropdown <i className="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
			</Dropdown.Toggle>
			<Dropdown.Menu style={{margin: '0px'}} >
				<Dropdown.Item href="#">Profile</Dropdown.Item>
				<Dropdown.Item href="#">Activity Logs</Dropdown.Item>
				<Dropdown.Item href="#">Account Settings</Dropdown.Item>
				<Dropdown.Item href="#">Logout</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	</Col>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12} xl={12}>
					<Card id="button7">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h3' className="mg-b-10">Button Groups</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti18(!i18) }} />
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website
								apllication..</p>
							<div className="text-wrap">
								<div className="example ">
									<Row className="row-sm">
										<Col lg={6} className="mg-t-20 mg-lg-t-0">
											<ButtonGroup aria-label="Basic example" className="">
												<Button variant='secondary' className="pd-sm-x-25 pd-x-15" active>Left</Button>
												<Button variant='secondary' className="pd-sm-x-25 pd-x-15">Center</Button>
												<Button variant='secondary' className="pd-sm-x-25 pd-x-15">Right</Button>
											</ButtonGroup>
										</Col>
										{/* <!-- col-4 --> */}
										<Col lg={3} className="mg-t-20 mg-lg-t-0">
											<ButtonGroup aria-label="Basic example" className="">
												<Button variant='primary' className="btn-icon" active><i className="typcn typcn-media-play-outline"></i></Button>
												<Button variant='primary' className="btn-icon"><i className="typcn typcn-media-pause-outline"></i></Button>
												<Button variant='primary' className="btn-icon"><i className="typcn typcn-media-stop-outline"></i></Button>
											</ButtonGroup>
										</Col>
										{/* <!-- col-2 --> */}
										<Col lg={3} className="mg-t-20 mg-lg-t-0">
											<ButtonGroup aria-label="Basic example" className="btn-group" role="group">
												<Button variant='secondary' className="btn-icon" active><i className="typcn typcn-media-play-outline"></i></Button>
												<Button variant='secondary' className="btn-icon"><i className="typcn typcn-media-pause-outline"></i></Button>
												<Button variant='secondary' className="btn-icon"><i className="typcn typcn-media-stop-outline"></i></Button>
											</ButtonGroup>
										</Col>
										{/* <!-- col-4 --> */}
									</Row>
								</div>
								<Collapse in={i18} className="">
									<pre>
										<code>
											{`
<div className="example ">
<Row className="row-sm">
	<Col lg={6} className="mg-t-20 mg-lg-t-0">
		<ButtonGroup aria-label="Basic example" className="">
			<Button variant='secondary' className="pd-sm-x-25 pd-x-15" active>Left</Button>
			<Button variant='secondary' className="pd-sm-x-25 pd-x-15">Center</Button>
			<Button variant='secondary' className="pd-sm-x-25 pd-x-15">Right</Button>
		</ButtonGroup>
	</Col>
	{/* <!-- col-4 --> */}
	<Col lg={3} className="mg-t-20 mg-lg-t-0">
		<ButtonGroup aria-label="Basic example" className="">
			<Button variant='primary' className="btn-icon" active><i className="typcn typcn-media-play-outline"></i></Button>
			<Button variant='primary' className="btn-icon"><i className="typcn typcn-media-pause-outline"></i></Button>
			<Button variant='primary' className="btn-icon"><i className="typcn typcn-media-stop-outline"></i></Button>
		</ButtonGroup>
	</Col>
	{/* <!-- col-2 --> */}
	<Col lg={3} className="mg-t-20 mg-lg-t-0">
		<ButtonGroup aria-label="Basic example" className="btn-group" role="group">
			<Button variant='secondary' className="btn-icon" active><i className="typcn typcn-media-play-outline"></i></Button>
			<Button variant='secondary' className="btn-icon"><i className="typcn typcn-media-pause-outline"></i></Button>
			<Button variant='secondary' className="btn-icon"><i className="typcn typcn-media-stop-outline"></i></Button>
		</ButtonGroup>
	</Col>
	{/* <!-- col-4 --> */}
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}


			{/* <!-- Container closed --> */}
		</div>
	)
};

Buttons.propTypes = {};

Buttons.defaultProps = {};

export default Buttons;
