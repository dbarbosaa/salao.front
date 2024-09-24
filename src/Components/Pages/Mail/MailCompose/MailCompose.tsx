import React from 'react';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import styles from './MailCompose.module.scss';
import { Row, Col, Card, Nav, Form, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MailCompose = () => {

	return (

		<div className={styles.MailCompose}>
			<Pageheader titles="Mail" active="Compose-mail" />
			{/* <!-- container --> */}

			{/* <!-- row opened --> */}
			<Row className="row-sm">
				{/* <!-- Col --> */}
				<Col lg={4} xl={3} md={12} sm={12}>
					<Card className="mg-b-20">
						<div className="main-content-left main-content-left-mail card-body">
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
						</div>
					</Card>
				</Col>
				{/* <!-- /Col --> */}
				<Col xl={9} lg={8} md={12} sm={12} className="">
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Compose new message</Card.Title>
						</Card.Header>
						<Card.Body>
							<Form>
								<Form.Group>
									<Row className="">
										<Form.Label className="col-sm-2">To</Form.Label>
										<Col sm={10}>
											<Form.Control type="text" className="mb-3" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group>
									<Row className="">
										<Form.Label className="col-sm-2">Subject</Form.Label>
										<Col sm={10}>
											<Form.Control type="text" className="mb-3" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group>
									<Row className="">
										<Form.Label className="col-sm-2">Message</Form.Label>
										<Col sm={10}>
											<Form.Control as='textarea' rows={10} className="mb-3" />
										</Col>
									</Row>
								</Form.Group>
							</Form>
						</Card.Body>
						<Card.Footer className="d-sm-flex">
							<div className="mt-2 mb-2">
								<Link to="#" className="me-3"><OverlayTrigger placement="top" overlay={<Tooltip>File-Attachment</Tooltip>}><i className="bx bx-paperclip text-muted tx-22"></i></OverlayTrigger></Link>
								<Link to="#" className="me-3"><OverlayTrigger placement="top" overlay={<Tooltip>Link</Tooltip>}><i className="bx bx-link text-muted tx-22"></i></OverlayTrigger></Link>
								<Link to="#" className="me-3"><OverlayTrigger placement="top" overlay={<Tooltip>Media</Tooltip>}><i className="bx bx-image text-muted tx-22"></i></OverlayTrigger></Link>
								<Link to="#" className="me-3"><OverlayTrigger placement="top" overlay={<Tooltip>Trash</Tooltip>}><i className="bx bx-trash text-muted tx-22"></i></OverlayTrigger></Link>
							</div>
							<div className="btn-list ms-auto">
								<Button variant='success' className="btn-space me-2 mb-2">Discard</Button>
								<Button variant='primary' className="btn-space me-2 mb-2">Save</Button>
								<Button variant='danger' className="btn-space me-2 mb-2">Send</Button>
							</div>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

MailCompose.propTypes = {};

MailCompose.defaultProps = {};

export default MailCompose;
