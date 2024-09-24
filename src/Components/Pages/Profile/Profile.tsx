import React from 'react';
import { Button, Card, Col, Dropdown, Form, Nav, ProgressBar, Row, Tab } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Profile.module.scss';
import { Link } from "react-router-dom";


//Images 

import faces1 from '../../../../src/assets/img/users/1.jpg';
import faces2 from '../../../../src/assets/img/users/2.jpg';
import faces3 from '../../../../src/assets/img/users/3.jpg';
import faces4 from '../../../../src/assets/img/users/4.jpg';
import faces5 from '../../../../src/assets/img/users/5.jpg';
import faces6 from '../../../../src/assets/img/users/6.jpg';
import faces7 from '../../../../src/assets/img/users/7.jpg';
import faces8 from '../../../../src/assets/img/users/8.jpg';
import faces9 from '../../../../src/assets/img/users/9.jpg';
import { PagesGallery } from '../../CommonFileComponents/LightGallery';

const FriendData = [
	{ id: 1, image: faces1, username: 'James Thomas', role: 'Web designer' },
	{ id: 2, image: faces3, username: 'Reynante Labares', role: 'Web designer' },
	{ id: 3, image: faces4, username: 'Owen Bongcaras', role: 'Web designer' },
	{ id: 4, image: faces8, username: 'Stephen Metcalfe', role: 'Administrator' },
	{ id: 5, image: faces2, username: 'Socrates Itumay', role: 'Project Manager' },
	{ id: 6, image: faces5, username: 'Florinda Carasco', role: 'Team Leader' },
	{ id: 7, image: faces7, username: 'Zula Mclaughin', role: 'App Developer' },
	{ id: 8, image: faces9, username: 'Alina Bernier', role: 'Administrator' }
]

function Profile() {

	return (
		<div className={styles.Profile}>
			<Pageheader titles="Pages" active="Profile" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col xl={4}>
					<Card className="mg-b-20">
						<Card.Body>
							<div className="ps-0">
								<div className="main-profile-overview">
									<div className="main-img-user profile-user">
										<img alt="" src={faces6} /><Link
											className="fas fa-camera profile-edit" to="#"></Link>
									</div>
									<div className="d-flex justify-content-between mg-b-20">
										<div>
											<h5 className="main-profile-name">Petey Cruiser</h5>
											<p className="main-profile-name-text">Web Designer</p>
										</div>
									</div>
									<h6>Bio</h6>
									<div className="main-profile-bio">
										pleasure rationally encounter but because pursue consequences that are
										extremely painful.occur in which toil and pain can procure him some great
										pleasure..<Link to="#">More</Link>
									</div>
									{/* <!-- main-profile-bio --> */}
									<Row>
										<Col md={4} className="col mb20">
											<h5>947</h5>
											<h6 className="text-small text-muted mb-0">Followers</h6>
										</Col>
										<Col md={4} className="col mb20">
											<h5>583</h5>
											<h6 className="text-small text-muted mb-0">Tweets</h6>
										</Col>
										<Col md={4} className="col mb20">
											<h5>48</h5>
											<h6 className="text-small text-muted mb-0">Posts</h6>
										</Col>
									</Row>
									<hr className="mg-y-30" />
									<label className="main-content-label tx-13 mg-b-20">Social</label>
									<div className="main-profile-social-list">
										<div className="media">
											<div className="media-icon bg-primary-transparent text-primary">
												<i className="icon ion-logo-github"></i>
											</div>
											<div className="media-body">
												<span>Github</span> <Link to="#">github.com/spruko</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-success-transparent text-success">
												<i className="icon ion-logo-twitter"></i>
											</div>
											<div className="media-body">
												<span>Twitter</span> <Link to="#">twitter.com/spruko.me</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-info-transparent text-info">
												<i className="icon ion-logo-linkedin"></i>
											</div>
											<div className="media-body">
												<span>Linkedin</span> <Link to="#">linkedin.com/in/spruko</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-danger-transparent text-danger">
												<i className="icon ion-md-link"></i>
											</div>
											<div className="media-body">
												<span>My Portfolio</span> <Link to="#">spruko.com/</Link>
											</div>
										</div>
									</div>
									<hr className="mg-y-30" />
									<h6>Skills</h6>
									<div className="skill-bar mb-4 clearfix mt-3">
										<span>HTML5 / CSS3</span>

										<ProgressBar className="mt-2" variant='primary-gradient' now={85} />
									</div>
									{/* <!--skill bar--> */}
									<div className="skill-bar mb-4 clearfix">
										<span>Javascript</span>

										<ProgressBar className="mt-2" variant='danger-gradient' now={89} />

									</div>
									{/* <!--skill bar--> */}
									<div className="skill-bar mb-4 clearfix">
										<span>Bootstrap</span>

										<ProgressBar className="mt-2" variant='success-gradient' now={80} />
									</div>
									{/* <!--skill bar--> */}
									<div className="skill-bar clearfix">
										<span>Coffee</span>

										<ProgressBar className="mt-2" variant='info-gradient' now={95} />
									</div>
									{/* <!--skill bar--> */}
								</div>
								{/* <!-- main-profile-overview --> */}
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={8}>
					<Row className="row-sm">
						<Col sm={12} xl={4} lg={12} md={12}>
							<Card>
								<Card.Body>
									<div className="counter-status d-flex md-mb-0">
										<div className="counter-icon bg-primary-transparent">
											<i className="icon-layers text-primary"></i>
										</div>
										<div className="ms-auto">
											<h5 className="tx-13">Orders</h5>
											<h2 className="mb-0 tx-22 mb-1 mt-1">1,587</h2>
											<p className="text-muted mb-0 tx-11"><i
												className="si si-arrow-up-circle text-success me-1"></i>increase</p>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} xl={4} lg={12} md={12}>
							<Card>
								<Card.Body>
									<div className="counter-status d-flex md-mb-0">
										<div className="counter-icon bg-danger-transparent">
											<i className="icon-paypal text-danger"></i>
										</div>
										<div className="ms-auto">
											<h5 className="tx-13">Revenue</h5>
											<h2 className="mb-0 tx-22 mb-1 mt-1">46,782</h2>
											<p className="text-muted mb-0 tx-11"><i
												className="si si-arrow-up-circle text-success me-1"></i>increase</p>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} xl={4} lg={12} md={12}>
							<Card>
								<Card.Body>
									<div className="counter-status d-flex md-mb-0">
										<div className="counter-icon bg-success-transparent">
											<i className="icon-rocket text-success"></i>
										</div>
										<div className="ms-auto">
											<h5 className="tx-13">Product sold</h5>
											<h2 className="mb-0 tx-22 mb-1 mt-1">1,890</h2>
											<p className="text-muted mb-0 tx-11"><i
												className="si si-arrow-up-circle text-success me-1"></i>increase</p>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Card>
						<Card.Body>

							<Tab.Container id="left-tabs-example" defaultActiveKey="first">
								<Nav className='profile navtab-custom panel-tabs'>
									<Nav.Item as='li'>
										<Nav.Link className='hidden-xs' eventKey="first"><i className="las la-user-circle tx-16 me-1 visible-xs"></i>ABOUT ME</Nav.Link>
									</Nav.Item>
									<Nav.Item as='li'>
										<Nav.Link className='hidden-xs' eventKey="second"><i className="las la-images tx-15 me-1 visible-xs"></i>GALLERY</Nav.Link>
									</Nav.Item>
									<Nav.Item as='li'>
										<Nav.Link className='hidden-xs' eventKey="third"><i className="las la-life-ring tx-16 me-1 visible-xs"></i>FRIENDS</Nav.Link>
									</Nav.Item>
									<Nav.Item as='li'>
										<Nav.Link className='hidden-xs' eventKey="fourth"><i className="las la-cog tx-16 me-1 visible-xs"></i>SETTINGS</Nav.Link>
									</Nav.Item>
								</Nav>

								<Tab.Content className='border p-4 br-dark'>
									<Tab.Pane eventKey="first">

										<h4 className="tx-15 text-uppercase mb-3">BIO Data</h4>
										<p className="m-b-5">Hi I'm Petey Cruiser,has been the industry's standard dummy
											text ever since the 1500s, when an unknown printer took a galley of type.
											Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
											justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
											eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
											semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
											eu, consequat vitae, eleifend ac, enim.</p>
										<div className="m-t-30">
											<h4 className="tx-15 text-uppercase mt-3">Experience</h4>
											<div className=" p-t-10">
												<h5 className="text-primary m-b-5 tx-14">Lead designer / Developer</h5>
												<p className="">websitename.com</p>
												<p><b>2010-2015</b></p>
												<p className="text-muted tx-13 m-b-0">Lorem Ipsum is simply dummy text of
													the printing and typesetting industry. Lorem Ipsum has been the
													industry's standard dummy text ever since the 1500s, when an unknown
													printer took a galley of type and scrambled it to make a type
													specimen book.</p>
											</div>
											<hr />
											<div className="">
												<h5 className="text-primary m-b-5 tx-14">Senior Graphic Designer</h5>
												<p className="">coderthemes.com</p>
												<p><b>2007-2009</b></p>
												<p className="text-muted tx-13 mb-0">Lorem Ipsum is simply dummy text of the
													printing and typesetting industry. Lorem Ipsum has been the
													industry's standard dummy text ever since the 1500s, when an unknown
													printer took a galley of type and scrambled it to make a type
													specimen book.</p>
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="second">
										<PagesGallery />
									</Tab.Pane>
									<Tab.Pane eventKey="third">
										<Row className="row-sm">
											{FriendData.map((idx) => (
												<Col sm={12} md={6} lg={6} xl={6} xxl={4} key={Math.random()}>
													<Card className="custom-card border">
														<Card.Body className="user-lock text-center">
															<Dropdown className='text-end'>
																<Dropdown.Toggle as="a" className="option-dots" variant="" id="dropdown-basic">
																	<i className="fe fe-more-vertical"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu className="dropdown-menu-end shadow" style={{marginTop: '0px'}}>
																	<Dropdown.Item href="#"><i className="fe fe-message-square me-2"></i> Message</Dropdown.Item>
																	<Dropdown.Item href="#"><i className="fe fe-edit-2 me-2"></i> Edit</Dropdown.Item>
																	<Dropdown.Item href="#"><i className="fe fe-eye me-2"></i> View</Dropdown.Item>
																	<Dropdown.Item href="#"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
															<Link to={`${import.meta.env.BASE_URL}pages/profile`}>
																<img alt="avatar" className="rounded-circle" src={idx.image} />
																<h5 className="fs-16 mb-0 mt-3 text-dark fw-semibold">{idx.username}</h5>
																<span className="text-muted">{idx.role}</span>
																<div className="mt-3 d-flex mx-auto text-center justify-content-center">
																	<span className="btn btn-icon me-3 btn-facebook">
																		<span className="btn-inner--icon"> <i className="bx bxl-facebook tx-18 tx-prime"></i>
																		</span>
																	</span>
																	<span className="btn btn-icon me-3">
																		<span className="btn-inner--icon"> <i className="bx bxl-twitter tx-18 tx-prime"></i>
																		</span>
																	</span>
																	<span className="btn btn-icon me-3">
																		<span className="btn-inner--icon"> <i className="bx bxl-linkedin tx-18 tx-prime"></i>
																		</span>
																	</span>
																</div>
															</Link>
														</Card.Body>
													</Card>
												</Col>
											))}
										</Row>
									</Tab.Pane>
									<Tab.Pane eventKey="fourth">
										<Form>
											<Form.Group>
												<Form.Label htmlFor="FullName">Full Name</Form.Label>
												<Form.Control className='mb-3' type="text" defaultValue="John Doe" />
											</Form.Group>
											<Form.Group>
												<Form.Label htmlFor="Email">Email</Form.Label>
												<Form.Control className='mb-3' type="email" defaultValue="first.last@example.com" />
											</Form.Group>
											<Form.Group>
												<Form.Label htmlFor="Username">Username</Form.Label>
												<Form.Control className='mb-3' type="text" defaultValue="john" id="Username" />
											</Form.Group>
											<Form.Group>
												<Form.Label htmlFor="Password">Password</Form.Label>
												<Form.Control className='mb-3' type="password" placeholder="6 - 15 Characters" />
											</Form.Group>
											<Form.Group>
												<Form.Label htmlFor="RePassword">Re-Password</Form.Label>
												<Form.Control className='mb-3' type="password" placeholder="6 - 15 Characters" />
											</Form.Group>
											<Form.Group>
												<Form.Label htmlFor="AboutMe">About Me</Form.Label>
												<Form.Control className='mb-3' as='textarea' defaultValue="Loren gypsum dolor sit mate, consecrate disciplining lit, tied diam nonunion nib modernism tincidunt it Loretta dolor manga Amalia erst volute. Ur wise denim ad minim venial, quid nostrum exercise ration perambulator suspicious cortisol nil it applique ex ea commodore consequent."></Form.Control>
											</Form.Group>
											<Button variant='primary' className="waves-effect waves-light w-md">Save</Button>
										</Form>
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}
			{/* <!-- Container closed --> */}
		</div>
	);
}




Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;


