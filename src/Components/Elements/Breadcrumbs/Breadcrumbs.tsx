import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Row, Form, Collapse } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Breadcrumbs.module.scss';



const Breadcrumbs = () => {

	//Show Code variables

	const [i, seti] = useState(false)
	const [i2, seti2] = useState(false)
	const [i3, seti3] = useState(false)
	const [i4, seti4] = useState(false)
	const [i5, seti5] = useState(false)
	return (
		<div className={styles.Breadcrumbs}>
			<Pageheader titles="Elements" active="Breadcrumbs" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card className="custom-card" id="basic">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Basic Styling</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti(!i) }} />
							</div>
							<p className="text-muted card-sub-title">The example below is the basic styling of the breadcrumb from Bootstrap.</p>

							<div className="text-wrap">
								<div className="example">
									<Breadcrumb className='mb-0'>
										<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
										<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
										<Breadcrumb.Item active>Data</Breadcrumb.Item>
									</Breadcrumb>
								</div>
								<Collapse in={i} className="">
									<pre>
										<code>
											{`
<div className="example">
<Breadcrumb className='mb-0'>
	<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
	<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
	<Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
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
					<Card className="custom-card" id="custom">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Custom Styling</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti2(!i2) }} />

							</div>
							<p  className="text-muted card-sub-title">The example below is the custom styling of the breadcrumb used by this template.</p>
							<div className="text-wrap">
								<div className="example">
									<Breadcrumb className='breadcrumb-style1 mg-b-0'>
										<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
										<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
										<Breadcrumb.Item active>Data</Breadcrumb.Item>
									</Breadcrumb>
								</div>
								<Collapse in={i2} className="">
									<pre>
										<code>
											{`
<div className="example">
<Breadcrumb className='breadcrumb-style1 mg-b-0'>
	<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
	<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
	<Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
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
					<Card className="custom-card" id="divider">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Custom Divider</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti3(!i3) }} />
							</div>
							<p  className="text-muted card-sub-title">The example below is the custom styling of the breadcrumb using different divider.</p>

							<div className="text-wrap">
								<div className="example">
									<Breadcrumb className='breadcrumb-style2 mb-0'>
										<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
										<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
										<Breadcrumb.Item active>Data</Breadcrumb.Item>
									</Breadcrumb>
								</div>
								<Collapse in={i3} className="">
									<pre>
										<code>
											{`
<div className="example">
<Breadcrumb className='breadcrumb-style2 mb-0'>
	<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
	<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
	<Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
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
					<Card className="custom-card" id="center">
						<Card.Body>
							<div className='d-sm-flex'>
								<Card.Title as='h6' className="mb-1">Breadcrumbs-Center align</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti4(!i4) }} />

							</div>
							<p  className="text-muted card-sub-title">The example below is the center aligment of the breadcrumb</p>

							<div className="text-wrap">
								<div className="example">
									<div className='breadcrumb-3'>
										<Breadcrumb className='breadcrumb-style1 mg-b-0'>
											<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
											<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
											<Breadcrumb.Item active>Data</Breadcrumb.Item>
										</Breadcrumb>
									</div>
								</div>
								<Collapse in={i4} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className='breadcrumb-3'>
	<Breadcrumb className='breadcrumb-style1 mg-b-0'>
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
		<Breadcrumb.Item active>Data</Breadcrumb.Item>
	</Breadcrumb>
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

				<Col lg={12} md={12}>
					<Card className="custom-card" id="right">
						<Card.Body>
							<div className='d-sm-flex'>
								<Card.Title as='h6' className="mb-1">Breadcrumbs-Right align</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti5(!i5) }} />

							</div>
							<p className="text-muted card-sub-title">The example below is the Right aligment of the breadcrumb</p>

							<div className="text-wrap">
								<div className="example">
									<div className='breadcrumb-4'>
										<Breadcrumb className='breadcrumb-style1 mb-0'>
											<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
											<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
											<Breadcrumb.Item active>Data</Breadcrumb.Item>
										</Breadcrumb>
									</div>
								</div>
								<Collapse in={i5} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className='breadcrumb-4'>
	<Breadcrumb className='breadcrumb-style1 mb-0'>
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
		<Breadcrumb.Item active>Data</Breadcrumb.Item>
	</Breadcrumb>
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
			</Row>
			{/* <!-- /row --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

Breadcrumbs.propTypes = {};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
