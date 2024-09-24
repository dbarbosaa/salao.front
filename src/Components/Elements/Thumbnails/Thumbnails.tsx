import React from 'react';
import styles from './Thumbnails.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//image
import pic4 from '../../../assets/img/photos/4.jpg';
import pic7 from '../../../assets/img/photos/7.jpg';
import pic8 from '../../../assets/img/photos/8.jpg';
import pic9 from '../../../assets/img/photos/9.jpg';
import pic13 from '../../../assets/img/photos/13.jpg';
import pic14 from '../../../assets/img/photos/14.jpg';
import pic15 from '../../../assets/img/photos/15.jpg';
import pic10 from '../../../assets/img/photos/10.jpg';
import pic11 from '../../../assets/img/photos/11.jpg';
import pic12 from '../../../assets/img/photos/12.jpg';


const Thumbnails = () => {

	return (

		<div className={styles.Thumbnails}>
			<Pageheader titles="Elements" active="Thumbnails" />
			{/* <!-- container --> */}
			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12} >
					<Card className="custom-card" id="thumb">
						<Card.Body className="ht-100p">
							<div>
								<Card.Title as="h6" className="mb-1">Image Thumbnail</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Images in Bootstrap are made responsive with
									.img-fluid. max-width: 100%; and height: auto; are applied to the image so that
									it scales with the parent element.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Row>
										<Col col={6} md={3}>
											<img alt="Responsive image" className="img-thumbnail"
												src={pic9} />
										</Col>
										<Col col={6} md={3}>
											<img alt="Responsive image" className="img-thumbnail"
												src={pic13} />
										</Col>
										<Col col={6} md={3} className="mg-t-10 mg-sm-t-0">
											<img alt="Responsive image" className="img-thumbnail"
												src={pic14} />
										</Col>
										<Col col={6} md={3} className="mg-t-10 mg-sm-t-0">
											<img alt="Responsive image" className="img-thumbnail"
												src={pic15} />
										</Col>
									</Row>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card className="custom-card" id="aligning">
						<Card.Body className="ht-100p">
							<div>
								<Card.Title as='h6' className="mb-1">Aligning Thumbnails</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Align images with the helper float classNamees or
									text alignment classNamees.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="clearfix">
										<img src={pic10}
											className="float-sm-start wd-100p wd-sm-200" alt="img" />
										<img src={pic11}
											className="float-sm-end wd-100p wd-sm-200 mg-t-10 mg-sm-t-0" alt="img" />
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card className="custom-card" id="contentthumb">
						<Card.Body className="ht-100p">
							<div>
								<Card.Title as='h6' className="mb-1">Custom content Thumbnails</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Using the images in custom content thumbnails
								</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Row>
										<Col xl={4} lg={4}>
											<div className="img-thumbnail mb-3">
												<Link to="#">
													<img src={pic4} alt="thumb1"
														className="thumbimg wd-100p" />
												</Link>
												<div className="caption">
													<h5>Thumbnail label</h5>
													<p>sed do eiusmod tempor incididunt ut labore et dolore magna
														aliqua. Ut enim ad minim veniam, quis nostrud exercitation
														ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
													<div className="btn-list ps-0 pb-0">
														<Button variant='primary' className="ripple me-2">Button</Button>
														<Button variant='secondary' className="ripple me-2">Button</Button>
													</div>
												</div>
											</div>
										</Col>
										<Col xl={4} lg={4}>
											<div className="img-thumbnail mb-3">
												<Link to="#">
													<img src={pic9} alt="thumb1"
														className="thumbimg  wd-100p" />
												</Link>
												<div className="caption">
													<h5>Thumbnail label</h5>
													<p>sed do eiusmod tempor incididunt ut labore et dolore magna
														aliqua. Ut enim ad minim veniam, quis nostrud exercitation
														ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
													<div className="btn-list ps-0 pb-0">
														<Button variant='primary' className="ripple me-2">Button</Button>
														<Button variant='secondary' className="ripple me-2">Button</Button>
													</div>
												</div>
											</div>
										</Col>
										<Col xl={4} lg={4}>
											<div className="img-thumbnail mb-3">
												<Link to="#">
													<img src={pic8} alt="thumb1"
														className="thumbimg  wd-100p" />
												</Link>
												<div className="caption">
													<h5>Thumbnail label</h5>
													<p>sed do eiusmod tempor incididunt ut labore et dolore magna
														aliqua. Ut enim ad minim veniam, quis nostrud exercitation
														ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
													<div className="btn-list ps-0 pb-0">
														<Button variant='primary' className="ripple me-2">Button</Button>
														<Button variant='secondary' className="ripple me-2">Button</Button>
													</div>
												</div>
											</div>
										</Col>
									</Row>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="responsive">
						<Card.Body className="ht-100p">
							<div>
								<Card.Title as='h6' className="mb-1">Responsive Thumbnails</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Images in Bootstrap are made responsive with
									.img-fluid. max-width: 100%; and height: auto; are applied to the image so that
									it scales with the parent element.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div>
										<img alt="Responsive image" className="img-fluid"
											src={pic7} /></div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12} xl={6}>
					<Card className="custom-card" id="background">
						<Card.Body className="ht-100p">
							<div>
								<Card.Title as='h6' className="mb-1">Background Image</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Make image as background to your content using
									the helper or utilities classNamees.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<figure className="pos-relative mg-b-0">
										<img alt="Responsive image" className="img-fit-cover"
											src={pic12} />
										<figcaption className="pos-absolute a-0 pd-25 bg-black-5 tx-white-8">
											<h6 className="tx-14 tx-sm-16 tx-white tx-semibold mg-b-15 mg-sm-b-20">What
												Does Royalty-Free Mean?</h6>
											<p className="mg-b-0">Royalty free means you just need to pay for rights to
												use the item once per end product.
												You don't need to pay additional or ongoing fees for each person who
												sees or uses it.</p>
										</figcaption>
									</figure>
								</div>

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

Thumbnails.propTypes = {};

Thumbnails.defaultProps = {};

export default Thumbnails;
