import React, { useState } from 'react';
import styles from './Tooltip.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Button, Card, Col, OverlayTrigger, Row, Tooltip, Form, Collapse } from 'react-bootstrap';

const Tooltips = () => {

	//Show Code variables

	const [i, seti] = useState(false)
	const [i2, seti2] = useState(false)

	return (
		<div className={styles.Tooltip}>
			<Pageheader titles="Elements" active="Tooltip" />
			{/* <!-- container --> */}

			{/* <!-- row opened--> */}
			<Row>
				<Col xl={12} lg={12} className="col-xl-12 col-lg-12">
					{/* <!-- div --> */}
					<Card className="mg-b-20" id="Tooltip">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Default Tooltip
							</div>
							<div className='d-sm-flex'>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
								</p>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-sm-auto ms-4" onClick={() => { seti(!i) }} />
							</div>
							<div className="main-content-label main-content-label-sm mg-b-10">
								Static Example
							</div>
							<div className="tooltip-static-demo mg-b-20" id="tooltip-demo">
								<Row className="me-0">
									<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0 ">
										<div className=" position-relative tooltip bs-tooltip-top tooltip-individual" role="tooltip" id="tooltip-individual">
											<div className="tooltip-arrow tooltip-arrow-individual" id="tooltip-arrow-individual"></div>
											<div className="tooltip-inner">
												Tooltip on the top
											</div>
										</div>
									</Col>
									<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0 d-flex justify-content-center align-items-center">
										<div className=" position-relative tooltip bs-tooltip-bottom tooltip-individual" role="tooltip" id="tooltip-individual">
											<div className="tooltip-arrow tooltip-arrow-individual" id="tooltip-arrow-individual"></div>
											<div className="tooltip-inner">
												Tooltip on the bottom
											</div>
										</div>
									</Col>
									<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0 d-flex justify-content-center align-items-center">
										<div className=" position-relative tooltip bs-tooltip-start tooltip-individual" role="tooltip" id="tooltip-individual">
											<div className="tooltip-arrow tooltip-arrow-individual" id="tooltip-left-arrow-individual"></div>
											<div className="tooltip-inner">
												Tooltip on the left
											</div>
										</div>
									</Col>
									<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0 d-flex justify-content-center align-items-center">
										<div className=" position-relative tooltip bs-tooltip-end tooltip-individual" role="tooltip" id="tooltip-individual">
											<div className="tooltip-arrow tooltip-arrow-individual" id="tooltip-right-arrow-individual"></div>
											<div className="tooltip-inner">
												Tooltip on the right
											</div>
										</div>
									</Col>
								</Row>
							</div>

							{/* <!-- tooltip-static-demo --> */}

							<div className="main-content-label main-content-label-sm mg-b-10">
								Example
							</div>
							<div className="text-wrap">
								<div className="example">
									<Row className=" tx-center justify-content-center">
										<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
											<OverlayTrigger placement="top" overlay={<Tooltip>Tooltip on the top</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
										</Col>
										<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
											<OverlayTrigger placement="bottom" overlay={<Tooltip>Tooltip on the bottom</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
										</Col>
										<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
											<OverlayTrigger placement="left" overlay={<Tooltip>Tooltip on the left</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
										</Col>
										<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
											<OverlayTrigger placement="right" overlay={<Tooltip>Tooltip on the right</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
										</Col>
									</Row>
								</div>
							</div>
						</Card.Body>
						<Collapse in={i} className="">
							<pre>
								<code>
									{`
<div className="example">
<Row className=" tx-center justify-content-center">
	<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
		<OverlayTrigger placement="top" overlay={<Tooltip>Tooltip on the top</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
	</Col>
	<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
		<OverlayTrigger placement="bottom" overlay={<Tooltip>Tooltip on the bottom</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
	</Col>
	<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
		<OverlayTrigger placement="left" overlay={<Tooltip>Tooltip on the left</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
	</Col>
	<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
		<OverlayTrigger placement="right" overlay={<Tooltip>Tooltip on the right</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
	</Col>
</Row>
</div>
`}
								</code>
							</pre>
						</Collapse>
					</Card>

					{/* <!-- /div --> */}

					{/* <!--div--> */}

					<Card className="mg-b-20" id="Tooltip2">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Colored Tooltip
							</div>
							<div className='d-flex'>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
								</p>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti2(!i2) }} />
							</div>
							<div className="main-content-label main-content-label-sm mg-b-10">
								Static Example
							</div>
							<div className="tooltip-static-demo mg-b-20" id="tooltip-demo">
								<Row className=" me-0">
									<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
										<div className="tooltip tooltip-primary bs-tooltip-top position-relative tooltip-individual"
											role="tooltip" id="tooltip-individual">
											<div className="tooltip-arrow tooltip-arrow-individual" id="tooltip-arrow-individual"></div>
											<div className="tooltip-inner">
												Tooltip on the top
											</div>
										</div>
									</Col>
									<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0 d-flex justify-content-center align-items-center">
										<div className="tooltip tooltip-primary bs-tooltip-bottom tooltip-individual" role="tooltip" id="tooltip-individual">
											<div className="tooltip-arrow tooltip-arrow-individual" id="tooltip-arrow-individual"></div>
											<div className="tooltip-inner">
												Tooltip on the bottom
											</div>
										</div>
									</Col>
									<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0 d-flex justify-content-center align-items-center">
										<div className="tooltip tooltip-primary bs-tooltip-start tooltip-individual" role="tooltip" id="tooltip-individual">
											<div className="tooltip-arrow tooltip-arrow-individual" id="tooltip-left-arrow-individual"></div>
											<div className="tooltip-inner">
												Tooltip on the left
											</div>
										</div>
									</Col>
									<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0 d-flex justify-content-center align-items-center">
										<div className="tooltip tooltip-primary bs-tooltip-end tooltip-individual" role="tooltip" id="tooltip-individual">
											<div className="tooltip-arrow tooltip-arrow-individual" id="tooltip-right-arrow-individual"></div>
											<div className="tooltip-inner">
												Tooltip on the right
											</div>
										</div>
									</Col>
								</Row>
							</div>

							{/* <!-- tooltip-static-demo --> */}

							<div className="main-content-label main-content-label-sm mg-b-10">
								Example
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="">
										<Row className=" tx-center justify-content-center">
											<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
												<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Tooltip on the top</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
											</Col>
											<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
												<OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-primary'>Tooltip on the bottom</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
											</Col>
											<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
												<OverlayTrigger placement="left" overlay={<Tooltip className='tooltip-primary'>Tooltip on the left</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
											</Col>
											<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
												<OverlayTrigger placement="right" overlay={<Tooltip className='tooltip-primary'>Tooltip on the right</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
											</Col>
										</Row>
									</div>
								</div>
							</div>
						</Card.Body>
						<Collapse in={i2} className="">
							<pre>
								<code>
									{`
<div className="example">
<div className="">
	<Row className=" tx-center justify-content-center">
		<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
			<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Tooltip on the top</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
		</Col>
		<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
			<OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-primary'>Tooltip on the bottom</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
		</Col>
		<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
			<OverlayTrigger placement="left" overlay={<Tooltip className='tooltip-primary'>Tooltip on the left</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
		</Col>
		<Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
			<OverlayTrigger placement="right" overlay={<Tooltip className='tooltip-primary'>Tooltip on the right</Tooltip>}><Button variant='secondary'>Hover me</Button></OverlayTrigger>
		</Col>
	</Row>
</div>
</div>
`}
								</code>
							</pre>
						</Collapse>
					</Card>
					{/* <!--div--> */}
				</Col>
				{/* <!--/div--> */}
			</Row>
			{/* <!-- /row --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

Tooltip.propTypes = {};

Tooltip.defaultProps = {};

export default Tooltips;
