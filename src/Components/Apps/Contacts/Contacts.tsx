import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Tabs, Tab, Modal, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Contacts.module.scss';
import Scrollbars from 'react-custom-scrollbars';
import { Link, useLocation } from "react-router-dom";
import ProfileService from '../../CommonFileComponents/service/profile';

import faces1 from '../../../assets/img/users/1.jpg';
import faces2 from '../../../assets/img/users/2.jpg';
import faces3 from '../../../assets/img/users/3.jpg';
import faces4 from '../../../assets/img/users/4.jpg';
import faces5 from '../../../assets/img/users/5.jpg';
import faces6 from '../../../assets/img/users/6.jpg';
import faces7 from '../../../assets/img/users/7.jpg';
import faces8 from '../../../assets/img/users/8.jpg';
import faces9 from '../../../assets/img/users/9.jpg';
import faces10 from '../../../assets/img/users/10.jpg';
import faces11 from '../../../assets/img/users/11.jpg';
import EditProfileService from '../../CommonFileComponents/service/edit-profile';



let suppressScrollX: boolean = false;

const tabProfile = [
	{ eventKey: 'Allc', Title: 'All Contacts' },
	{ eventKey: 'Fav', Title: 'Favorites' },
]
let ForData = {
	firstName: "Petey",
	lastName: "Cruiser",
	role: "Web Developer",
}
const Contacts = () => {

	//form
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [role, setRole] = useState("");
	const [outPut, setoutPut] = useState(EditProfileService.returnId());



	const putData = () => {
		EditProfileService.editDataFrom(firstName, lastName, role)
		setoutPut(EditProfileService.returnId());
	}


	// modal Show
	const [smShow, setSmShow] = useState(false);
	//URl image
	const [UrlImage, setUrlImage] = useState(faces6);
	//Disabling input feild
	const [UrlDisabled, setUrlDisabled] = useState(true);
	//React file input image
	const [img, setimg] = useState(faces6);
	const [fileDisabled, setfileDisabled] = useState(false);
	//Default image
	const [Image, setImage] = useState(faces6);

	let location = useLocation();


	const putImage = () => {
		setImage(ProfileService.returnImage())
		if (UrlImage != Image) {
			ProfileService.handleChangeUrl(UrlImage)
			setImage(ProfileService.returnImage())
		}
		setSmShow(false)
	}

	//toggle button for image 
	const toggleImage = (type) => {
		if (type == "fileDisabled") {
			setfileDisabled(false)
			setUrlDisabled(true)
		}
		if (type == "UrlDisabled") {
			setUrlDisabled(false)
			setfileDisabled(true)
		}
	}

	//Edit icon
	const [show, setShow] = useState<any>(false);

	const handleClose:any = () => setShow(false);
	const handleShow:any = () => setShow(true);

	useEffect(() => {
		if (ProfileService.returnImage() != undefined) {
			setImage(ProfileService.returnImage())
		}
		let contactItem = document.querySelectorAll(".main-contact-item")
		contactItem.forEach((ele => {
			ele.addEventListener("click", () => {
				document.body.classList.add("main-content-body-show")
			});
		}))

	}, [location])

	return (
		<div className={styles.Contacts}>
			<Pageheader titles="Apps" active="Contacts" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col sm={12} lg={5} xl={4}>
					<Card className="custom-card">
						<div className="">
							<div className="main-content-contacts pt-0">
								<div className="main-content-left main-content-left-contacts">
									<Tabs
										defaultActiveKey="Allc"
										id="uncontrolled-tab-example"
										className="main-nav-line main-nav-line-chat  ps-3"
									>
										{tabProfile.map((input) => (
											<Tab key={Math.random()} eventKey={input.eventKey} title={input.Title}>
												<Scrollbars style={{ height: 750 }}
													// options ={{ suppressScrollX: true }}
													className="hor-scroll"
												>
													<div className="main-contacts-list" id="mainContactList">
														<div className="main-contact-label">
															A
														</div>
														<div className="main-contact-item selected">
															<div className="main-img-user online"><img alt="avatar"
																src={faces2} /></div>
															<div className="main-contact-body">
																<h6>Abigail Johnson</h6><span className="phone">+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star text-warning me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-item">
															<div className="main-img-user"><img alt="avatar"
																src={faces3} /></div>
															<div className="main-contact-body">
																<h6>Archie Cantones</h6><span>archie@cantones.com</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-item">
															<div className="main-avatar online">
																A
															</div>
															<div className="main-contact-body">
																<h6>Allan Rey Palban</h6><span>allanr@palban.com</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-item">
															<div className="main-avatar bg-secondary">
																A
															</div>
															<div className="main-contact-body">
																<h6>Aileen Mante</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-label">
															B
														</div>
														<div className="main-contact-item">
															<div className="main-img-user"><img alt="avatar"
																src={faces4} /></div>
															<div className="main-contact-body">
																<h6>Brandon Dilao</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-item">
															<div className="main-img-user online"><img alt="avatar"
																src={faces5} /></div>
															<div className="main-contact-body">
																<h6>Britney Labares</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-item">
															<div className="main-avatar bg-danger">
																B
															</div>
															<div className="main-contact-body">
																<h6>Brateyley Cruz</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-label">
															C
														</div>
														<div className="main-contact-item">
															<div className="main-img-user"><img alt="avatar"
																src={faces6} /></div>
															<div className="main-contact-body">
																<h6>Camille Audrey</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-item">
															<div className="main-img-user online"><img alt="avatar"
																src={faces7} /></div>
															<div className="main-contact-body">
																<h6>Christian Lerio</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-item">
															<div className="main-img-user online"><img alt="avatar"
																src={faces8} /></div>
															<div className="main-contact-body">
																<h6>Christopher Segovia</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-label">
															D
														</div>
														<div className="main-contact-item">
															<div className="main-img-user online"><img alt="avatar"
																src={faces9} /></div>
															<div className="main-contact-body">
																<h6>Darius Clayton</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-item">
															<div className="main-img-user"><img alt="avatar"
																src={faces10} /></div>
															<div className="main-contact-body">
																<h6>Dyanne Aceron</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
														<div className="main-contact-item">
															<div className="main-img-user online"><img alt="avatar"
																src={faces11} /></div>
															<div className="main-contact-body">
																<h6>Divina Gracia</h6><span>+1-234-567-890</span>
															</div>
															<Link className="main-contact-star" to="#">
																<i className="fe fe-star me-1"></i>
																<i className="fe fe-edit-2 me-1"></i>
																<i className="fe fe-more-vertical"></i>
															</Link>
														</div>
													</div>
												</Scrollbars>
											</Tab>
										))}
									</Tabs>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col sm={12} lg={7} xl={8}>
					<div className="">
						<Link className="main-header-arrow" to="#" id="ChatBodyHide" onClick={() => {
							document.body.classList.remove("main-content-body-show")
						}}><i
							className="icon ion-md-arrow-back"></i></Link>
						<div className="main-content-body main-content-body-contacts card custom-card">
							<div className="main-contact-info-header pt-3">
								<div className="media">
									<div className="main-img-user">
										<img alt="avatar" src={Image} />
										<Link onClick={() => setSmShow(true)} to="#"><i
											className="fe fe-camera"></i></Link>
										<Modal
											size="sm"
											show={smShow}
											onHide={() => setSmShow(false)}
											aria-labelledby="example-modal-sizes-title-sm"
											centered
										>
											<Modal.Header closeButton>
												<Modal.Title id="example-modal-sizes-title-sm">
													Upload New Image
												</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												<Form.Group controlId="formFile" className="mb-3">

													<div onClick={() => { toggleImage("fileDisabled") }}>
														<Form.Control type="file" disabled={fileDisabled} onChange={(ele) => ProfileService.handleChange(ele)} />
													</div>
													<br></br>
													<div onClick={() => { toggleImage("UrlDisabled") }}>
														<Form.Control type="text" disabled={UrlDisabled} onChange={(ele) => { setUrlImage(ele.target.value) }} />
													</div>
													<br></br>
													<Link to="#">
														<button className='btn-sm btn-primary' onClick={() => { putImage() }}>submit</button>
													</Link>
												</Form.Group>

											</Modal.Body>
										</Modal>
									</div>
									<div className="media-body">
										<h5>{outPut.firstName == undefined ? "Petey" : outPut.firstName} {outPut.lastName == undefined ? "Cruiser" : outPut.lastName}</h5>
										<p>{outPut.role == undefined ? "Web Developer" : outPut.role}</p>
										<nav className="contact-info">
											<Link to="#" className="contact-icon border tx-inverse" title="Call"><OverlayTrigger placement="top" overlay={<Tooltip>phone</Tooltip>}><i className="fe fe-phone"></i></OverlayTrigger></Link>
											<Link to="#" className="contact-icon border tx-inverse" title="Video"><OverlayTrigger placement="top" overlay={<Tooltip>video</Tooltip>}><i className="fe fe-video"></i></OverlayTrigger></Link>
											<Link to="#" className="contact-icon border tx-inverse" title="message"><OverlayTrigger placement="top" overlay={<Tooltip>message</Tooltip>}><i className="fe fe-message-square"></i></OverlayTrigger></Link>
											<Link to="#" className="contact-icon border tx-inverse" title="Add to Group"><OverlayTrigger placement="top" overlay={<Tooltip>user</Tooltip>}><i className="fe fe-user-plus"></i></OverlayTrigger></Link>
											<Link to="#" className="contact-icon border tx-inverse" title="Block"><OverlayTrigger placement="top" overlay={<Tooltip>slash</Tooltip>}><i className="fe fe-slash"></i></OverlayTrigger></Link>
										</nav>
									</div>
								</div>
								<div className="main-contact-action btn-list pt-3">
									<Link to="#" className="btn ripple btn-primary text-white btn-icon" onClick={handleShow} title="Edit Profile"><i className="fe fe-edit"></i></Link>
									<Modal show={show} size='lg' onHide={handleClose} centered>
										<Modal.Header>
											<Modal.Title>Profile Update</Modal.Title>
											<Link to='#'><span className="text-dark d-flex ms-auto" onClick={() => { handleClose("Basic") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</Modal.Header>
										<Modal.Body>
											<Form>
												<Form.Group className="mb-3" controlId="formBasicEmail">
													<Form.Label>Enter Full Name</Form.Label>
													<Form.Control className='mb-3' type="text" placeholder="First Name" onChange={(ele) => { setFirstName(ele.target.value) }} />
													<Form.Control className='mb-3' type="text" placeholder="Last Name" onChange={(ele) => { setLastName(ele.target.value) }} />
												</Form.Group>
												<Form.Group className="mb-3" controlId="formBasicEmail">
													<Form.Label>Enter Designation</Form.Label>
													<Form.Control type="text" placeholder="Designation" onChange={(ele) => { setRole(ele.target.value) }} />
												</Form.Group>
											</Form>


										</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleClose}>
												Close
											</Button>
											<Link to="#">
												<Button variant="primary" onClick={() => { handleClose(); putData() }}>
													Save Changes
												</Button>
											</Link>
										</Modal.Footer>
									</Modal>
									<Link to="#" className="btn ripple btn-secondary text-white btn-icon" ><i className="fe fe-trash-2"></i></Link>


								</div>
							</div>
							<div className="main-contact-info-body p-4">
								<div>
									<h6>Biography</h6>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
										doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
										veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
										ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
										consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
										doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
										veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
										ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
										consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
								</div>
								<div className="media-list pb-0">
									<div className="media">
										<div className="media-body">
											<div>
												<label>Work</label> <span className="tx-medium">+1 (234) 567 8901</span>
											</div>
											<div>
												<label>Personal</label> <span className="tx-medium">+1 (498) 021
													0090</span>
											</div>
										</div>
									</div>
									<div className="media">
										<div className="media-body">
											<div>
												<label>Gmail Account</label> <span
													className="tx-medium">sonia.taylor@gmail.com</span>
											</div>
											<div>
												<label>Other Account</label> <span
													className="tx-medium">me@bootstrapdash.me</span>
											</div>
										</div>
									</div>
									<div className="media">
										<div className="media-body">
											<div>
												<label>Current Address</label> <span className="tx-medium">012 Dashboard
													Apartments, San Francisco, California 13245</span>
											</div>
										</div>
									</div>
									<div className="media mb-0">
										<div className="media-body">
											<div>
												<label>Call History</label> <span className="tx-medium">Duration of last
													call: 2m 32sec</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="card custom-card">
							<div className="card-header">Recent Contacts</div>
							<div className="card-body">
								<div className="row">
									<div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
										<div className="border d-flex p-2 rounded-5 mb-2">
											<div className="recent-contacts me-3">
												<div className="main-img-user avatar-md">
													<img alt="avatar" className="rounded-circle"
														src={faces5} />
												</div>
											</div>
											<div>
												<h6 className="mt-1 mb-1">Abigali kelly</h6>
												<p className="mb-0 text-muted">Front end</p>
											</div>
											<div className="my-auto ms-auto">
												<nav className="contact-info d-flex">
													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-phone tx-12"></i></Link>



													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-video tx-12"></i></Link>



												</nav>
											</div>
										</div>
									</div>
									<div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
										<div className="border d-flex p-2 rounded-5 mb-2">
											<div className="recent-contacts me-3">
												<div className="main-img-user avatar-md">
													<img alt="avatar" className="rounded-circle"
														src={faces2} />
												</div>
											</div>
											<div>
												<h6 className="mt-1 mb-1">Brenda Crux</h6>
												<p className="mb-0 text-muted">Angular</p>
											</div>
											<div className="my-auto ms-auto">
												<nav className="contact-info d-flex">
													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-phone tx-12"></i></Link>



													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-video tx-12"></i></Link>



												</nav>
											</div>
										</div>
									</div>
									<div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
										<div className="border d-flex p-2 rounded-5 mb-2">
											<div className="recent-contacts me-3">
												<div className="main-img-user avatar-md">
													<img alt="avatar" className="rounded-circle"
														src={faces8} />
												</div>
											</div>
											<div>
												<h6 className="mt-1 mb-1">Rach Michelle</h6>
												<p className="mb-0 text-muted">Php</p>
											</div>
											<div className="my-auto ms-auto">
												<nav className="contact-info d-flex">
													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-phone tx-12"></i></Link>



													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-video tx-12"></i></Link>



												</nav>
											</div>
										</div>
									</div>
									<div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
										<div className="border d-flex p-2 rounded-5 mb-2">
											<div className="recent-contacts me-3">
												<div className="main-img-user avatar-md">
													<img alt="avatar" className="rounded-circle"
														src={faces9} />
												</div>
											</div>
											<div>
												<h6 className="mt-1 mb-1">Matt Harder</h6>
												<p className="mb-0 text-muted">Codeignitor</p>
											</div>
											<div className="my-auto ms-auto">
												<nav className="contact-info d-flex">
													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-phone tx-12"></i></Link>



													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-video tx-12"></i></Link>



												</nav>
											</div>
										</div>
									</div>
									<div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
										<div className="border d-flex p-2 rounded-5 mb-2">
											<div className="recent-contacts me-3">
												<div className="main-img-user avatar-md">
													<img alt="avatar" className="rounded-circle"
														src={faces1} />
												</div>
											</div>
											<div>
												<h6 className="mt-1 mb-1">Micheal Phelps</h6>
												<p className="mb-0 text-muted">Web Testing</p>
											</div>
											<div className="my-auto ms-auto">
												<nav className="contact-info d-flex">
													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i


															className="fe fe-phone tx-12"></i></Link>
													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-video tx-12"></i></Link>



												</nav>
											</div>
										</div>
									</div>
									<div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
										<div className="border d-flex p-2 rounded-5 mb-2">
											<div className="recent-contacts me-3">
												<div className="main-img-user avatar-md">
													<img alt="avatar" className="rounded-circle"
														src={faces7} />
												</div>
											</div>
											<div>
												<h6 className="mt-1 mb-1">Azenda Hills</h6>
												<p className="mb-0 text-muted">Django</p>
											</div>
											<div className="my-auto ms-auto d-md-flex">
												<nav className="contact-info d-flex">
													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill"

													><i
														className="fe fe-phone tx-12"></i></Link>
													<Link to="#"
														className="contact-icon border tx-inverse rounded-pill" ><i className="fe fe-video tx-12"></i></Link>



												</nav>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</Col>

				{/* <!-- End Row --> */}
			</Row>
			{/* <!-- Container closed --> */}
		</div>
	)
};


Contacts.propTypes = {};

Contacts.defaultProps = {};

export default Contacts;
