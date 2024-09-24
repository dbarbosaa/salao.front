import React, { useState } from 'react';
import { Col, Row, Dropdown, Card, ButtonGroup, Button, DropdownButton, Form, Collapse } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Dropdown.module.scss';

const dropData = [
	{ id: 1, icon: <i className="fe fe-mail "></i>, color: 'danger' },
	{ id: 2, icon: <i className="fe fe-more-horizontal"></i>, color: 'info' },
	{ id: 3, icon: <i className="fe fe-more-vertical"></i>, color: 'secondary' },
	{ id: 4, icon: <i className="fe fe-settings"></i>, color: 'outline-primary' }
]

const Dropdowns = () => {


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

	return (
		<div className={styles.Dropdown}>
			<Pageheader titles="Elements" active="Dropdowns" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="basic">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Basic Example</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti(!i) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Basic dropdown button</Card.Subtitle>
							<div className="text-wrap">
								<div className="example">
									{['primary', 'secondary', 'teal', 'light'].map((variant) => (
										<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
											<Dropdown>
												<Dropdown.Toggle variant={variant} className="ripple" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
												<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
													<Dropdown.Item className="" href="#">Action</Dropdown.Item>
													<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
													<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</ButtonGroup>
									))}
								</div>
								<Collapse in={i} className="">
									<pre>
										<code>
											{`
<div className="example">
{['primary', 'secondary', 'teal', 'light'].map((variant) => (
	<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
		<Dropdown>
			<Dropdown.Toggle variant={variant} className="ripple" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
			<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
				<Dropdown.Item className="" href="#">Action</Dropdown.Item>
				<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
				<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	</ButtonGroup>
))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="basic2">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Rounded button dropdowns</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti2(!i2) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Basic dropdown Rounded Outline button</Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									{['primary', 'secondary', 'teal', 'light'].map((variant) => (
										<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
											<Dropdown>
												<Dropdown.Toggle variant={variant} className="btn-rounded ripple" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
												<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
													<Dropdown.Item className="" href="#">Action</Dropdown.Item>
													<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
													<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</ButtonGroup>
									))}
								</div>
								<Collapse in={i2} className="">
									<pre>
										<code>
											{`
	<div className="example">
	{['primary', 'secondary', 'teal', 'light'].map((variant) => (
		<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
			<Dropdown>
				<Dropdown.Toggle variant={variant} className="btn-rounded ripple" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
				<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
					<Dropdown.Item className="" href="#">Action</Dropdown.Item>
					<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
					<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</ButtonGroup>
	))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="basic3">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1"> Outline button dropdowns</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti3(!i3) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted"> Dropdown square Outline button </Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									{['outline-primary', 'outline-danger', 'outline-success', 'outline-secondary'].map((variant) => (
										<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
											<Dropdown>
												<Dropdown.Toggle variant={variant} className="ripple" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
												<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
													<Dropdown.Item className="" href="#">Action</Dropdown.Item>
													<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
													<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</ButtonGroup>
									))}
								</div>
								<Collapse in={i3} className="">
									<pre>
										<code>
											{`
		<div className="example">
		{['outline-primary', 'outline-danger', 'outline-success', 'outline-secondary'].map((variant) => (
			<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
				<Dropdown>
					<Dropdown.Toggle variant={variant} className="ripple" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
					<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
						<Dropdown.Item className="" href="#">Action</Dropdown.Item>
						<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
						<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</ButtonGroup>
		))}
	</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="basic4">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Rounded Outline button dropdowns</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti4(!i4) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted"> Dropdowns with Rounded Outline button  </Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									{['outline-primary', 'outline-danger', 'outline-success', 'outline-secondary'].map((variant) => (
										<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
											<Dropdown>
												<Dropdown.Toggle variant={variant} className="ripple btn-rounded" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
												<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
													<Dropdown.Item className="" href="#">Action</Dropdown.Item>
													<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
													<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</ButtonGroup>
									))}
								</div>
								<Collapse in={i4} className="">
									<pre>
										<code>
											{`
			<div className="example">
			{['outline-primary', 'outline-danger', 'outline-success', 'outline-secondary'].map((variant) => (
				<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
					<Dropdown>
						<Dropdown.Toggle variant={variant} className="ripple btn-rounded" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
						<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
							<Dropdown.Item className="" href="#">Action</Dropdown.Item>
							<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
							<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</ButtonGroup>
			))}
		</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="basic5">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Rounded  split  button dropdowns</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti5(!i5) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted"> Dropdowns with Rounded  button </Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									{['primary', 'danger', 'info', 'warning', 'light'].map((variant) => (
										<Dropdown as={ButtonGroup} key={variant} className="ms-2 mt-2 mb-2">
											<Button variant={variant} className="btn-rounded">Action</Button>
											<Dropdown.Toggle split variant={variant} className="btn-rounded" id="dropdown-split-basic" />
											<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
												<Dropdown.Item href="#">Action</Dropdown.Item>
												<Dropdown.Item href="#">Another action</Dropdown.Item>
												<Dropdown.Item href="#">Something else</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									))}
								</div>
								<Collapse in={i5} className="">
									<pre>
										<code>
											{`
<div className="example">
{['primary', 'danger', 'info', 'warning', 'light'].map((variant) => (
	<Dropdown as={ButtonGroup} key={variant} className="ms-2 mt-2 mb-2">
		<Button variant={variant} className="btn-rounded">Action</Button>
		<Dropdown.Toggle split variant={variant} className="btn-rounded" id="dropdown-split-basic" />
		<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
			<Dropdown.Item href="#">Action</Dropdown.Item>
			<Dropdown.Item href="#">Another action</Dropdown.Item>
			<Dropdown.Item href="#">Something else</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="basic6">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1"> Outline split  button dropdowns</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti6(!i6) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted"> Dropdowns with Rounded Outline button </Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									{['primary', 'danger', 'info', 'warning', 'light'].map((variant) => (
										<Dropdown as={ButtonGroup} key={variant} className="ms-2 mt-2 mb-2">
											<Button variant={variant} className="">Action</Button>
											<Dropdown.Toggle split variant={variant} className="" id="dropdown-split-basic" />
											<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
												<Dropdown.Item href="#">Action</Dropdown.Item>
												<Dropdown.Item href="#">Another action</Dropdown.Item>
												<Dropdown.Item href="#">Something else</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									))}
								</div>
								<Collapse in={i6} className="">
									<pre>
										<code>
											{`
<div className="example">
{['primary', 'danger', 'info', 'warning', 'light'].map((variant) => (
	<Dropdown as={ButtonGroup} key={variant} className="ms-2 mt-2 mb-2">
		<Button variant={variant} className="">Action</Button>
		<Dropdown.Toggle split variant={variant} className="" id="dropdown-split-basic" />
		<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
			<Dropdown.Item href="#">Action</Dropdown.Item>
			<Dropdown.Item href="#">Another action</Dropdown.Item>
			<Dropdown.Item href="#">Something else</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="basic7">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Rounded Outline split button dropdowns</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti7(!i7) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted"> Dropdowns with Rounded Outline button </Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									{['outline-primary', 'outline-danger', 'outline-info', 'outline-warning', 'outline-secondary'].map((variant) => (
										<Dropdown as={ButtonGroup} key={variant} className="ms-2 mt-2 mb-2">
											<Button variant={variant} className="btn-rounded">Action</Button>
											<Dropdown.Toggle split variant={variant} className="btn-rounded" id="dropdown-split-basic" />
											<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
												<Dropdown.Item href="#">Action</Dropdown.Item>
												<Dropdown.Item href="#">Another action</Dropdown.Item>
												<Dropdown.Item href="#">Something else</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									))}
								</div>
								<Collapse in={i7} className="">
									<pre>
										<code>
											{`
<div className="example">
{['outline-primary', 'outline-danger', 'outline-info', 'outline-warning', 'outline-secondary'].map((variant) => (
	<Dropdown as={ButtonGroup} key={variant} className="ms-2 mt-2 mb-2">
		<Button variant={variant} className="btn-rounded">Action</Button>
		<Dropdown.Toggle split variant={variant} className="btn-rounded" id="dropdown-split-basic" />
		<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
			<Dropdown.Item href="#">Action</Dropdown.Item>
			<Dropdown.Item href="#">Another action</Dropdown.Item>
			<Dropdown.Item href="#">Something else</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="basic8">
						<Card.Body>
							<div className='d-flex' >
								<Card.Title as='h6' className="mb-1"> Outline split  button dropdowns</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti8(!i8) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted"> Dropdowns with Rounded Outline button  </Card.Subtitle>
							<div className="text-wrap">
								<div className="example">
									{['outline-primary', 'outline-danger', 'outline-info', 'outline-warning', 'outline-secondary'].map((variant) => (
										<Dropdown as={ButtonGroup} key={variant} className="ms-2 mt-2 mb-2">
											<Button variant={variant} className="">Action</Button>
											<Dropdown.Toggle split variant={variant} className="" id="dropdown-split-basic" />
											<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
												<Dropdown.Item href="#">Action</Dropdown.Item>
												<Dropdown.Item href="#">Another action</Dropdown.Item>
												<Dropdown.Item href="#">Something else</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									))}
								</div>
								<Collapse in={i8} className="">
									<pre>
										<code>
											{`
	<div className="example">
	{['outline-primary', 'outline-danger', 'outline-info', 'outline-warning', 'outline-secondary'].map((variant) => (
		<Dropdown as={ButtonGroup} key={variant} className="ms-2 mt-2 mb-2">
			<Button variant={variant} className="">Action</Button>
			<Dropdown.Toggle split variant={variant} className="" id="dropdown-split-basic" />
			<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
				<Dropdown.Item href="#">Action</Dropdown.Item>
				<Dropdown.Item href="#">Another action</Dropdown.Item>
				<Dropdown.Item href="#">Something else</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="active">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Active Menu Item</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti9(!i9) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Add active className to items in the dropdown to style them as active.</Card.Subtitle>
							<div className="text-wrap">
								<div className="example">
									{['warning', 'teal', 'secondary', 'danger'].map((variant) => (
										<DropdownButton as={ButtonGroup} key={variant} variant={variant} className="ms-2 mt-2 mb-2" id="dropdown-basic-button" title="Dropdown Menu">
											<Dropdown.Item href="#">Action</Dropdown.Item>
											<Dropdown.Item href="#" active>Another action</Dropdown.Item>
											<Dropdown.Item href="#">Something else</Dropdown.Item>
										</DropdownButton>
									))}
								</div>
								<Collapse in={i9} className="">
									<pre>
										<code>
											{`
<div className="example">
{['warning', 'teal', 'secondary', 'danger'].map((variant) => (
	<DropdownButton as={ButtonGroup} key={variant} variant={variant} className="ms-2 mt-2 mb-2" id="dropdown-basic-button" title="Dropdown Menu">
		<Dropdown.Item href="#">Action</Dropdown.Item>
		<Dropdown.Item href="#" active>Another action</Dropdown.Item>
		<Dropdown.Item href="#">Something else</Dropdown.Item>
	</DropdownButton>
))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="disabled">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Disabled Menu Item</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti10(!i10) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Add disabled className to items in the dropdown to style them as disabled.</Card.Subtitle>
							<div className="text-wrap">
								<div className="example">
									{['primary', 'teal', 'danger', 'info'].map((variant) => (
										<DropdownButton as={ButtonGroup} key={variant} variant={variant} className="ms-2 mt-2 mb-2" id="dropdown-basic-button" title="Dropdown Menu">
											<Dropdown.Item href="#" disabled>Action</Dropdown.Item>
											<Dropdown.Item href="#">Another action</Dropdown.Item>
											<Dropdown.Item href="#">Something else</Dropdown.Item>
										</DropdownButton>
									))}
								</div>
								<Collapse in={i10} className="">
									<pre>
										<code>
											{`
	<div className="example">
	{['primary', 'teal', 'danger', 'info'].map((variant) => (
		<DropdownButton as={ButtonGroup} key={variant} variant={variant} className="ms-2 mt-2 mb-2" id="dropdown-basic-button" title="Dropdown Menu">
			<Dropdown.Item href="#" disabled>Action</Dropdown.Item>
			<Dropdown.Item href="#">Another action</Dropdown.Item>
			<Dropdown.Item href="#">Something else</Dropdown.Item>
		</DropdownButton>
	))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="header">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Dropdown Header</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti11(!i11) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Add a header to label sections of actions in any dropdown menu.</Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									{['secondary', 'primary', 'info', 'warning'].map((variant) => (
										<DropdownButton as={ButtonGroup} key={variant} variant={variant} className="ms-2 mt-2 mb-2" id="dropdown-basic-button" title="Dropdown Menu">
											<Dropdown.Header as='h6' className="tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">Dropdown header</Dropdown.Header>
											<Dropdown.Item href="#" disabled>Action</Dropdown.Item>
											<Dropdown.Item href="#">Another action</Dropdown.Item>
											<Dropdown.Item href="#">Something else</Dropdown.Item>
										</DropdownButton>
									))}
								</div>
								<Collapse in={i11} className="">
									<pre>
										<code>
											{`
<div className="example">
{['secondary', 'primary', 'info', 'warning'].map((variant) => (
	<DropdownButton as={ButtonGroup} key={variant} variant={variant} className="ms-2 mt-2 mb-2" id="dropdown-basic-button" title="Dropdown Menu">
		<Dropdown.Header as='h6' className="tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">Dropdown header</Dropdown.Header>
		<Dropdown.Item href="#" disabled>Action</Dropdown.Item>
		<Dropdown.Item href="#">Another action</Dropdown.Item>
		<Dropdown.Item href="#">Something else</Dropdown.Item>
	</DropdownButton>
))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="right">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Dropright & Dropleft</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti12(!i12) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Trigger dropdown menus above elements by adding dropright & dropleft className to the parent element.</Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs">
										<Col sm={6} md={6}>
											<DropdownButton drop='end' variant="info" title='Dropright Menu' className='ripple tx-13'>
												<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
											</DropdownButton>
										</Col>
										<Col sm={6} md={6} className="mg-t-10 mg-sm-t-0">
											<DropdownButton drop='start' variant="danger" title='Dropleft Menu' className='ripple tx-13'>
												<Dropdown.Item eventKey="1">Action</Dropdown.Item>
												<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
												<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
											</DropdownButton>
										</Col>
									</Row>
								</div>
								<Collapse in={i12} className="">
									<pre>
										<code>
											{`
<div className="example">
<Row className="row-xs">
	<Col sm={6} md={6}>
		<DropdownButton drop='end' variant="info" title='Dropright Menu' className='ripple tx-13'>
			<Dropdown.Item eventKey="1">Action</Dropdown.Item>
			<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
			<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
		</DropdownButton>
	</Col>
	<Col sm={6} md={6} className="mg-t-10 mg-sm-t-0">
		<DropdownButton drop='start' variant="danger" title='Dropleft Menu' className='ripple tx-13'>
			<Dropdown.Item eventKey="1">Action</Dropdown.Item>
			<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
			<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
		</DropdownButton>
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
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="basic9">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Dropdown with icons</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti13(!i13) }} />

							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Basic dropdown with icons.</Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									<Row className="row-xs wd-xl-80p">
										{dropData.map((ico) => (
											<Dropdown as={ButtonGroup} key={Math.random()}>
												<Dropdown.Toggle variant={ico.color} id="dropdown-basic" className="mb-2 mt-2">
													{ico.icon}
												</Dropdown.Toggle>
												<Dropdown.Menu style={{ margin: "0px" }}>
													<Dropdown.Item href="#">Action</Dropdown.Item>
													<Dropdown.Item href="#">Another action</Dropdown.Item>
													<Dropdown.Item href="#">Something else</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item href="#">Separated link</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										))}
									</Row>
								</div>
								<Collapse in={i13} className="">
									<pre>
										<code>
											{`
<div className="example">
{['primary', 'secondary', 'teal', 'light'].map((variant) => (
	<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
		<Dropdown>
			<Dropdown.Toggle variant={variant} className="ripple" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
			<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
				<Dropdown.Item className="" href="#">Action</Dropdown.Item>
				<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
				<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	</ButtonGroup>
))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="divider">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Dropdown Divider</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti14(!i14) }} />
							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Separate groups of related menu items with a divider.</Card.Subtitle>

							<div className="text-wrap">
								<div className="example">
									{['info', 'primary', 'danger', 'warning'].map((ico) => (
										<Dropdown key={ico} as={ButtonGroup}>
											<Dropdown.Toggle variant={ico} id="dropdown-basic" className="ripple ms-2 mt-2 mb-2">
												Dropdown Menu
											</Dropdown.Toggle>
											<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
												<Dropdown.Header as='h6' className='tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1'>Dropdown header</Dropdown.Header>
												<Dropdown.Item href="#">Action</Dropdown.Item>
												<Dropdown.Item href="#">Another action</Dropdown.Item>
												<Dropdown.Item href="#">Something else</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item href="#">Separated link</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									))}
								</div>
								<Collapse in={i14} className="">
									<pre>
										<code>
											{`
<div className="example">
{['primary', 'secondary', 'teal', 'light'].map((variant) => (
	<ButtonGroup key={variant} className="ms-2 mt-2 mb-2">
		<Dropdown>
			<Dropdown.Toggle variant={variant} className="ripple" id="dropdown-basic">Dropdown Menu</Dropdown.Toggle>
			<Dropdown.Menu style={{ margin: "0px" }} className="tx-13">
				<Dropdown.Item className="" href="#">Action</Dropdown.Item>
				<Dropdown.Item className="" href="#">Another action</Dropdown.Item>
				<Dropdown.Item className="" href="#">Something else here</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	</ButtonGroup>
))}
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

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default Dropdowns;
