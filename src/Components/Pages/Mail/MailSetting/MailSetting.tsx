import React from 'react';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import styles from './MailSetting.module.scss';
import { Row, Col, Card, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Lang, Timezone } from './Data/mailSettingData';


const MailSetting = () => {

	return (

		<div className={styles.MailSetting}>
			<Pageheader titles="Mail" active="Mail-setting" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				{/* <!-- Col --> */}
				<Col lg={4} xl={3}>
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

				{/* <!-- Col --> */}
				<Col lg={8} xl={9} className="">
					<Card className="">
						<Card.Body className="">
							<form className="form-horizontal">
								<div className="mb-4 main-content-label">Account</div>
								<Form.Group>
									<Row>
										<Col md={3}>
											<Form.Label className="">User Name</Form.Label>
										</Col>
										<Col md={9}>
											<Form.Control type="text" className="mb-3" placeholder="User Name" defaultValue="Petey" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group>
									<Row>
										<Col md={3}>
											<Form.Label className="">Email</Form.Label>
										</Col>
										<Col md={9}>
											<Form.Control type="email" className="mb-3" placeholder="Email" defaultValue="info@Valex.in" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group>
									<Row>
										<Col md={3}>
											<Form.Label className="">Language</Form.Label>
										</Col>
										<Col md={9}>
											<Select classNamePrefix="Select-sm" className="mb-3" options={Lang} placeholder='Us English' />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group>
									<Row>
										<Col md={3}>
											<Form.Label className="">Timezone</Form.Label>
										</Col>
										<Col md={9}>
											<Select classNamePrefix="Select-sm" className="mb-3" options={Timezone} placeholder='(GMT - 11: 00) Midway Island, Samoa' />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group>
									<Row>
										<Col md={3} className="col">
											<Form.Label className="">Verification</Form.Label>
										</Col>
										<Col md={9} className="col">
											<Form.Check className="mg-b-5" type="checkbox" label="Email" />
											<Form.Check className="mg-b-5" type="checkbox" label="SMS" defaultChecked />
											<Form.Check className="mg-b-5" type="checkbox" label="Phone" />
										</Col>
									</Row>
								</Form.Group>
								<div className="mb-4 main-content-label">Secuirity Settings</div>
								<Form.Group>
									<Row>
										<Col md={3}>
											<Form.Label className="">Login Verification</Form.Label>
										</Col>
										<Col md={9} className="mb-1">
											<Link className="" to="#">Settup Verification</Link>
										</Col>
									</Row>
								</Form.Group>
								<Form.Group>
									<Row>
										<Col md={3}>
											<Form.Label className="">Password Verification</Form.Label>
										</Col>
										<Col md={9}>
											<Form.Check className="mg-b-10" type="checkbox" label="Require Personal Details" />
										</Col>
									</Row>
								</Form.Group>
								<Form.Group>
									<Row>
										<Col md={3}>
										</Col>
										<Col md={9}>
											<Link className="mail-setting" to="#">Deactivate Account</Link>
											<Link className="" to="#">Change Password</Link>
										</Col>
									</Row>
								</Form.Group>
							</form>
						</Card.Body>
						<Card.Footer>
							<div className="float-end"><Link to="#" className="btn btn-success">Save Changes</Link></div>
						</Card.Footer>
					</Card>
				</Col>
				{/* <!-- /Col --> */}

			</Row>
			{/* <!-- /row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

MailSetting.propTypes = {};

MailSetting.defaultProps = {};

export default MailSetting;
