import React from 'react';
import { Card, Col, OverlayTrigger, Row, Popover, Button } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Popover.module.scss';
import { popoverData, popoverHeading, popoverBody } from './Data/popoverData';


const Popovers = () => {

	return (

		<div className={styles.Popover}>
			<Pageheader titles="Elements" active="Popover" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col xl={12} lg={12}>
					<Card className="" id="popover">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">DEFAULT POPOVER</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Documentation and examples for adding Bootstrap
									popovers, like those found in iOS, to any element on your site..</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="tx-10 mb-1 fw-bold text-muted text-uppercase">
										STATIC EXAMPLE
									</div>
									<div className="popover-static-demo">
										<Row className='justify-content-center'> 
											<Col md={6} className="mg-t-30">
												<div className="popover bs-popover-end">
													<div className="popover-arrow"></div>
													<h3 className="popover-header">Popover Right</h3>
													<div className="popover-body">
														<p>Sed posuere consectetur est at lobortis. Aenean eu leo
															quam. Pellentesque ornare sem lacinia quam venenatis
															vestibulum.</p>
													</div>
												</div>
												{/* <!-- popover --> */}
											</Col>
											{/* <!-- col-6 --> */}
											<Col md={6} className="mg-t-30">
												<div className="popover bs-popover-top">
													<div className="popover-arrow"></div>
													<h3 className="popover-header">Popover top</h3>
													<div className="popover-body">
														<p>Sed posuere consectetur est at lobortis. Aenean eu leo
															quam. Pellentesque ornare sem lacinia quam venenatis
															vestibulum.</p>
													</div>
												</div>
												{/* <!-- popover --> */}
											</Col>
											{/* <!-- col-6 --> */}
											<Col md={6} className="mg-t-30 ">
												<div className="popover bs-popover-bottom">
													<div className="popover-arrow"></div>
													<h3 className="popover-header">Popover Bottom</h3>
													<div className="popover-body">
														<p>Sed posuere consectetur est at lobortis. Aenean eu leo
															quam. Pellentesque ornare sem lacinia quam venenatis
															vestibulum.</p>
													</div>
												</div>
												{/* <!-- popover --> */}
											</Col>
											{/* <!-- col-6 --> */}
											<Col md={6} className="mg-t-30 ">
												<div className="popover bs-popover-start">
													<div className="popover-arrow"></div>
													<h3 className="popover-header">Popover Left</h3>
													<div className="popover-body">
														<p>Sed posuere consectetur est at lobortis. Aenean eu leo
															quam. Pellentesque ornare sem lacinia quam venenatis
															vestibulum.</p>
													</div>
												</div>
												{/* <!-- popover --> */}
											</Col>
											{/* <!-- col-6 --> */}

										</Row>
										{/* <!-- row --> */}
									</div>
								</div>
								<div className="example mt-5">
									<div className="tx-10 mb-1 fw-bold text-muted text-uppercase">
										Live EXAMPLE
									</div>
									<div className="pd-20 bg-gray-200">
										<Row className="row-sm tx-center">
											{popoverData.map((item, k) => (
												<Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0" key={k}>
													<OverlayTrigger
														trigger="click"
														placement={item.placement}
														overlay={
															<Popover className='popover-primary' id={`popover-positioned-${item.placement}`} style={{ margin: "0px" }}>
																<Popover.Header as="h3">{item.heading}</Popover.Header>
																<Popover.Body>
																	Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
																</Popover.Body>
															</Popover>
														}
													>
														<Button variant='secondary'>Click me</Button>
													</OverlayTrigger>
												</Col>
											))}
										</Row>
										{/* <!-- row --> */}
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card id="popover2">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">DEFAULT POPOVER</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Documentation and examples for adding Bootstrap
									popovers, like those found in iOS, to any element on your site..</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="popover-static-demo">
										<div className="row justify-content-center">
											<div className="col-md-6  mg-t-30 mg-md-t-0">
												<div className="popover popover-head-primary bs-popover-top">
													<div className="popover-arrow"></div>
													<h3 className="popover-header">Popover top</h3>
													<div className="popover-body">
														<p>Sed posuere consectetur est at lobortis. Aenean eu leo
															quam. Pellentesque ornare sem lacinia quam venenatis
															vestibulum.</p>
													</div>
												</div>
												{/* <!-- popover --> */}
											</div>
											{/* <!-- col-6 --> */}
											<div className="col-md-6 mg-t-30 mg-md-t-0">
												<div className="popover popover-head-secondary bs-popover-bottom">
													<div className="popover-arrow" id="arrow"></div>
													<h3 className="popover-header">Popover Bottom</h3>
													<div className="popover-body">
														<p>Sed posuere consectetur est at lobortis. Aenean eu leo
															quam. Pellentesque ornare sem lacinia quam venenatis
															vestibulum.</p>
													</div>
												</div>
												{/* <!-- popover --> */}
											</div>
											{/* <!-- col-6 --> */}
										</div>
									</div>
								</div>
								<div className="example mt-5">
									<div className="pd-20 bg-gray-200">
										<Row className="row-sm tx-center">
											{popoverHeading.map((item, k) => (
												<Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0" key={k}>
													<OverlayTrigger
														trigger="click"
														placement={item.placement}
														overlay={
															<Popover className='popover-head-primary' id={`popover-positioned-${item.placement}`} style={{ margin: "0px" }}>
																<Popover.Header className='bg-primary text-white' as="h3">{item.heading}</Popover.Header>
																<Popover.Body>
																	Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
																</Popover.Body>
															</Popover>
														}
													>
														<Button variant='secondary'>Click me</Button>
													</OverlayTrigger>
												</Col>
											))}
										</Row>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<div className="card" id="popover3">
						<div className="card-body">
							<div>
								<h6 className="card-title mb-1">DEFAULT POPOVER</h6>
								<p className="text-muted card-sub-title">Documentation and examples for adding Bootstrap
									popovers, like those found in iOS, to any element on your site..</p>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="popover-static-demo">
										<div className="row justify-content-center">
											<div className="col-md-6 mg-t-30 mg-md-t-0">
												<div className="popover popover-primary bs-popover-top">
													<div className="popover-arrow"></div>
													<h3 className="popover-header">Popover top</h3>
													<div className="popover-body">
														<p>Sed posuere consectetur est at lobortis. Aenean eu leo
															quam. Pellentesque ornare sem lacinia quam venenatis
															vestibulum.</p>
													</div>
												</div>
												{/* <!-- popover --> */}
											</div>
											{/* !-- col-6 --> */}
											<div className="col-md-6 mg-t-30 mg-md-t-0">
												<div className="popover popover-secondary bs-popover-bottom">
													<div className="popover-arrow"></div>
													<h3 className="popover-header">Popover Bottom</h3>
													<div className="popover-body">
														<p>Sed posuere consectetur est at lobortis. Aenean eu leo
															quam. Pellentesque ornare sem lacinia quam venenatis
															vestibulum.</p>
													</div>
												</div>
												{/* <!-- popover --> */}
											</div>
											{/* <!-- col-6 --> */}
										</div>
									</div>
								</div>
								<div className="example mt-5">
									<div className="pd-20 bg-gray-200">
										<Row className="row-sm tx-center">

											{popoverBody.map((item, k) => (
												<Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0" key={k}>
													<OverlayTrigger
														trigger="click"
														placement={item.placement}
														overlay={
															<Popover className={item.class} id={`popover-positioned-${item.placement}`} style={{ margin: "0px" }}>
																<Popover.Header className={`${item.class} text-white`} as="h3">{item.heading}</Popover.Header>
																<Popover.Body className={`${item.class} text-white`}>
																	Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
																</Popover.Body>
															</Popover>
														}
													>
														<Button variant='secondary'>Click me</Button>
													</OverlayTrigger>
												</Col>
											))}
										</Row>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Popover.propTypes = {};

Popover.defaultProps = {};

export default Popovers;
