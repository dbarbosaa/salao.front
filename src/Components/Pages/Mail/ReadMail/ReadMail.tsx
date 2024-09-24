import React from 'react';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import styles from './ReadMail.module.scss';
import { Row, Col, Card, Nav, Form, Badge, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import faces6 from '../../../../assets/img/users/6.jpg';
import photos1 from '../../../../assets/img/photos/1.jpg';
import photos2 from '../../../../assets/img/photos/2.jpg';
import photos3 from '../../../../assets/img/photos/3.jpg';

const ReadMail = () => {

	return (

		<div className={styles.ReadMail}>
			<Pageheader titles="Mail" active="Read-Mail" />
			{/* <!-- container --> */}

			{/* <!-- row opened --> */}
			<Row className="row-sm">
				{/* <!-- Col --> */}
				<Col lg={4} xl={3} md={12} sm={12} className="">
					<Card className="mg-b-20">
						<Card.Body className="main-content-left main-content-left-mail">
							<Link className="btn btn-primary btn-compose" to={`${import.meta.env.BASE_URL}pages/mail/mailcompose`} id="btnCompose">Compose</Link>
							<div className="main-mail-menu">
								<Nav activeKey="inbox" className="main-nav-column mg-b-20">
									<Nav.Item><Nav.Link eventKey="inbox"><i className="bx bxs-inbox"></i> Inbox <span>18</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="stared"><i className="bx bx-star"></i> Starred <span>8</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="snoozed"><i className="bx bx-alarm-snooze"></i> Snoozed <span>6</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="impt"><i className="bx bx-bookmarks"></i> Important <span>15</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="mail"><i className="bx bx-send"></i> Sent Mail <span>24</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="draft"><i className="bx bx-edit"></i> Drafts <span>2</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="spam"><i className="bx bx-message-error"></i> Spam <span>32</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="chat"><i className="bx bx-message-square-detail"></i> Chats <span>14</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="all"><i className="bx bx-folder"></i> All Mail <span>652</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="contact"><i className="bx bx-book-content"></i> Contacts <span>547</span></Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="trash"><i className="bx bx-trash"></i> Trash <span>365</span></Nav.Link></Nav.Item>
								</Nav>
								<Form.Label className="main-content-label main-content-label-sm">Settings</Form.Label>
								<Nav activeKey="email" className="main-nav-column">
									<Nav.Item><Nav.Link eventKey="email" active>Email Settings</Nav.Link></Nav.Item>
									<Nav.Item><Nav.Link eventKey="Acci">Account Information</Nav.Link></Nav.Item>
								</Nav>
							</div>
							{/* <!-- main-mail-menu --> */}
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- /Col --> */}
				<Col xl={9} lg={8} md={12} sm={12} className="">
					<Card>
						<Card.Header>
							<Card.Title as='h4'>Velit a labore <Badge bg='primary' className="">inbox</Badge></Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="email-media">
								<div className="mt-0 d-sm-flex">
									<img className="me-2 rounded-circle avatar-xl" src={faces6} alt="avatar" />
									<div className="media-body">
										<div className="float-end d-none d-md-flex fs-15">
											<span className="me-3">Sep 13 , 2022 12:45 pm</span>
											<small className="me-3"><OverlayTrigger placement="top" overlay={<Tooltip>Rated</Tooltip>}><i className="bx bx-star tx-18"></i></OverlayTrigger></small>
											<small className="me-3"><OverlayTrigger placement="top" overlay={<Tooltip>Reply</Tooltip>}><i className="bx bx-reply tx-18"></i></OverlayTrigger></small>
											<Dropdown className="me-3">
												<Dropdown.Toggle className='no-caret' as='a' variant="success" id="dropdown-basic"><OverlayTrigger placement="top" overlay={<Tooltip>View More</Tooltip>}><i className="fe fe-more-horizontal tx-18"></i></OverlayTrigger></Dropdown.Toggle>
												<Dropdown.Menu style={{margin: '0px'}} >
													<Dropdown.Item href="#">Reply</Dropdown.Item>
													<Dropdown.Item href="#">Report Spam</Dropdown.Item>
													<Dropdown.Item href="#">Delete</Dropdown.Item>
													<Dropdown.Item href="#">Show Original</Dropdown.Item>
													<Dropdown.Item href="#">Print</Dropdown.Item>
													<Dropdown.Item href="#">Filter</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
										<div className="media-title fw-bold mt-3">Alica Nestle <span className="text-muted">( alicnestle@gmail.com )</span></div>
										<p className="mb-0">to Adam Cotter ( adamcotter@gmail.com )</p>
										<div className='d-flex'>
											<small className="me-2 d-md-none">Sep 13 , 2022 12:45 pm</small>
											<small className="me-2 d-md-none">
												<OverlayTrigger placement="top" overlay={<Tooltip>Rated</Tooltip>}><i className="fe fe-star text-muted"></i></OverlayTrigger>
											</small>
											<small className="me-2 d-md-none">
												<OverlayTrigger placement="top" overlay={<Tooltip>Reply</Tooltip>}><i className="fa fa-reply text-muted"></i></OverlayTrigger>
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="eamil-body mt-5">
								<h6>Hi Sir/Madam</h6>
								<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
								<p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
								<p> Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
								<p className="mb-0">Thanking you Sir/Madam</p>
								<hr />
								<div className="email-attch">
									<div className="float-end">
										<Link to="#"><OverlayTrigger placement="top" overlay={<Tooltip>Attachment Download</Tooltip>}><i className="bx bxs-download tx-18"></i></OverlayTrigger></Link>
									</div>
									<p className='d-flex'>3 Attachments<Link to="#" className='ms-3'> View All Images</Link></p>
									<div className="emai-img">
										<div className="d-sm-flex">
											<div className=" m-2">
												<Link to="#"><img className="wd-150 mb-2" src={photos1} alt="placeholder image" /></Link>
												<h6 className="mb-3 mb-lg-0">1.jpg <small className="text-muted">12kb</small></h6>
											</div>
											<div className="m-2">
												<Link to="#"><img className="wd-150 mb-2" src={photos2} alt="placeholder image" /></Link>
												<h6 className="mb-3 mb-lg-0">2.jpg <small className="text-muted">18kb</small></h6>
											</div>
											<div className="m-2">
												<Link to="#"><img className="wd-150 mb-2" src={photos3} alt="placeholder image" /></Link>
												<h6>3.jpg <small className="text-muted">21kb</small></h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
						<Card.Footer>
							<Link className="btn btn-primary mt-1 mb-1 me-3" to="#"><i className="fa fa-reply"></i> Reply</Link>
							<Link className="btn btn-info mt-1 mb-1 me-3" to="#"><i className="fa fa-share"></i> Forward</Link>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

ReadMail.propTypes = {};

ReadMail.defaultProps = {};

export default ReadMail;
