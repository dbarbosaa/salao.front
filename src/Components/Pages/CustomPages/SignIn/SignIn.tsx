import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.scss';

import favicon from '../../../../assets/img/brand/favicon.png';
import faviconWhite from '../../../../assets/img/brand/favicon-white.png';
import login from '../../../../assets/img/pngs/8.png';

const SignIn = () => {

	const switcherIcon = () => {
		//SwitcherMenu open function
		document.querySelector(".demo_changer")?.classList.toggle("active");
		let demoChangering:any = document.querySelector(".demo_changer")
		demoChangering.style.right = "0px";
	};

	const switcherIconReomve = () => {
		//SwitcherMenu close function
		document.querySelector(".demo_changer")?.classList.remove("active");
		let demoChangering1:any = document.querySelector(".demo_changer")
		demoChangering1.style.right = "-270px";
	};


	return (

		<div className={styles.SignIn}>
			<div className="d-flex">
				<Link className="demo-icon new nav-link" to="#" onClick={() => switcherIcon()}> <svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs fa-spin" width="24" height="24" viewBox="0 0 24 24">
					<path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z">
					</path>
					<path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z">
					</path>
				</svg>
				</Link>
			</div>
			<div className="main-container container-fluid" onClick={() => { switcherIconReomve() }}>
				<Row className="no-gutter">
					{/* <!-- The image half --> */}
					<Col md={6} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
						<Row className="wd-100p mx-auto text-center">
							<Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
								<img src={login} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
							</Col>
						</Row>
					</Col>
					{/* <!-- The content half --> */}
					<Col md={6} lg={6} xl={5} className="bg-white py-4">
						<div className="login d-flex align-items-center py-2">
							{/* <!-- Demo content--> */}
							<Container className="p-0">
								<Row>
									<Col md={10} lg={10} xl={9} className="mx-auto">
										<div className="card-sigin">
											<div className="mb-5 d-flex">
												<Link to={`${import.meta.env.BASE_URL}indexpage`}><img src={favicon} className="sign-favicon-a ht-40" alt="logo" />
													<img src={faviconWhite} className="sign-favicon-b ht-40" alt="logo" />
												</Link>
												<h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1>
											</div>
											<div className="card-sigin">
												<div className="main-signup-header">
													<h2>Welcome back!</h2>
													<h5 className="fw-semibold mb-4">Please sign in to continue.</h5>
													<Form action="#">
														<Form.Group>
															<Form.Label className="mb-2">Email</Form.Label>
															<Form.Control className="mb-3" placeholder="Enter your email" type="text" />
														</Form.Group>
														<Form.Group>
															<Form.Label className="mb-2">Password</Form.Label>
															<Form.Control className="mb-3" placeholder="Enter your password" type="password" />
														</Form.Group>
														<Link className="btn btn-main-primary btn-block" to={`${import.meta.env.BASE_URL}indexpage`}>Sign In</Link>
														<Row className="row-xs">
															<Col sm={6} className="">
																<Button className="btn-block"><i className="fab fa-facebook-f"></i> Signup with Facebook</Button>
															</Col>
															<Col sm={6} className="mg-t-10 mg-sm-t-0">
																<Button className="btn-info btn-block btn-b"><i className="fab fa-twitter"></i> Signup with Twitter</Button>
															</Col>
														</Row>
													</Form>
													<div className="main-signin-footer mt-5">
														<p><Link to={`${import.meta.env.BASE_URL}pages/custompages/forgotpassword`}>Forgot password?</Link></p>
														<p>Don't have an account? <Link to={`${import.meta.env.BASE_URL}pages/custompages/signup`}>Create an Account</Link></p>
													</div>
												</div>
											</div>
										</div>
									</Col>
								</Row>
							</Container>
							{/* <!-- End --> */}
						</div>
					</Col>
					{/* <!-- End --> */}
				</Row>
			</div>
		</div>
	)
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
