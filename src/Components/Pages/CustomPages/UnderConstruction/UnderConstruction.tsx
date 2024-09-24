import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, InputGroup, Form } from 'react-bootstrap';
import styles from './UnderConstruction.module.scss';
import underconstimg from '../../../../assets/img/pngs/11.png'
import { Link } from 'react-router-dom';

const UnderConstruction = () => {

	let [days, setdays] = useState<any>()
	let [hours, sethours] = useState<any>()
	let [minutes, setminutes] = useState<any>()
	let [seconds, setseconds] = useState<any>()
	useEffect(() => {
		let countDown = new Date('May 31, 2023 00:00:00').getTime();
		let time = setInterval(() => {
			let now = new Date().getTime();
			let distance = countDown - now;
			setdays(Math.floor(distance / (1000 * 60 * 60 * 24)))
			sethours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
			setminutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
			setseconds(Math.floor((distance % (1000 * 60)) / 1000))

			if (distance < 0) {
				clearInterval(time);
			}
		}, 1000)
	});

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
		<div className={styles.UnderConstruction}>
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
					<Col md={5} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
						<Row className="wd-100p mx-auto text-center">
							<Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
								<img src={underconstimg} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
							</Col>
						</Row>
					</Col>
					{/* <!-- The content half --> */}
					<Col md={7} lg={6} xl={5} className="bg-white py-4">
						<div className="login d-flex align-items-center py-2">
							{/* <!-- Demo content--> */}
							<Container>
								<Row>
									<div className="main-card-signin construction text-center border-0 mx-auto">
										<div className="p-4 wd-100p mx-auto">
											<div>
												<h2 className="tx-30">Under Maintenance</h2>
												<p className="tx-12 text-muted">Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience!</p>
												<Row className="row-sm mx-auto">
													<div id="count-down" className="center-block mt-3 mb-3 mx-auto">
														<div className="clock-presenter days_dash">
															<div className="digit">{days}</div>
															<p className="mt-2">Days</p>
														</div>
														<div className="clock-presenter hours_dash">
															<div className="digit">{hours}</div>
															<p className="mt-2">Hours</p>
														</div>
														<div className="clock-presenter minutes_dash">
															<div className="digit">{minutes}</div>
															<p className="mt-2">Minutes</p>
														</div>
														<div className="clock-presenter seconds_dash me-0">
															<div className="digit">{seconds}</div>
															<p className="mt-2">Seconds</p>
														</div>
													</div>
												</Row>
												<InputGroup className="mt-5 text-center sub-input mt-1 ml-auto mr-auto mt-6">
													<Form.Control type="text" className="input-lg " placeholder="Enter your Email" />
													<InputGroup.Text className="bg-transparent border-0 p-0">
														<Button type="button" className="btn-danger-gradient btn-lg br-tr-3  br-br-3">Subscribe</Button>
													</InputGroup.Text>
												</InputGroup>
												<div className="mt-4 d-flex mx-auto text-center justify-content-center">
													<Button className="btn-icon btn-facebook" type="button">
														<span className="btn-inner--icon"> <i className="bx bxl-facebook tx-20 tx-facebook"></i> </span>
													</Button>
													<Button className="btn-icon" type="button">
														<span className="btn-inner--icon"> <i className="bx bxl-twitter tx-20 tx-info"></i> </span>
													</Button>
													<Button className="btn-icon" type="button">
														<span className="btn-inner--icon"> <i className="bx bxl-linkedin tx-20 tx-purple"></i> </span>
													</Button>
													<Button className="btn-icon" type="button">
														<span className="btn-inner--icon"> <i className="bx bxl-instagram tx-20 tx-pink"></i> </span>
													</Button>
												</div>
											</div>
										</div>
									</div>
								</Row>
							</Container>
							{/* <!-- End --> */}
						</div>
					</Col>
					{/* <!-- End --> */}
				</Row>
			</div>
		</div>
	);
}

export default UnderConstruction;
