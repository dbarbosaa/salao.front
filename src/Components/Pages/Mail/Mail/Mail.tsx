import React from 'react';
import { Card, Col, Form, Nav, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import { mailingData } from './Data/mailData';
import styles from './Mail.module.scss';
import { Link } from 'react-router-dom';

const Mail = () => {
	return (
		<div className={styles.Mail}>
			<Pageheader titles="Mail" active="mail" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm main-content-mail">
				<Col lg={4} xl={3} md={12} className="">
					<Card className="mg-b-20 mg-lg-b-0">
						<Card.Body>
							<div className="main-content-left main-content-left-mail">
								<Link className="btn btn-primary btn-compose" to={`${import.meta.env.BASE_URL}pages/mail/mailcompose`} id="btnCompose">Compose</Link>
								<div className="main-mail-menu">
									<Nav defaultActiveKey="inbox" className="nav main-nav-column mg-b-20">
										<Nav.Item><Nav.Link eventKey="inbox"><i className="bx bxs-inbox"></i> Inbox <span>20</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="stared"><i className="bx bx-star"></i> Starred <span>3</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="importnt"><i className="bx bx-bookmarks"></i> Important <span>10</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="mail"><i className="bx bx-send"></i> Sent Mail <span>8</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="drft"><i className="bx bx-edit"></i> Drafts <span>15</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="spam"><i className="bx bx-message-error"></i> Spam <span>128</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="trash"><i className="bx bx-trash"></i> Trash <span>6</span></Nav.Link></Nav.Item>
									</Nav>
									<Form.Label className="main-content-label main-content-label-sm">Label</Form.Label>
									<Nav className="nav main-nav-column mg-b-20">
										<Nav.Item><Nav.Link eventKey="social"><i className="bx bx-folder-open"></i> Social <span>10</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="promo"><i className="bx bx-folder"></i> Promotions <span>22</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="update"><i className="bx bx-folder-plus"></i> Updates <span>17</span></Nav.Link></Nav.Item>
									</Nav>
									<Form.Label className="main-content-label main-content-label-sm">Tags</Form.Label>
									<Nav className="nav main-nav-column">
										<Nav.Item><Nav.Link eventKey="tweet"><i className="bx bxl-twitter"></i> Twitter <span>2</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="github"><i className="bx bxl-github"></i> Github <span>32</span></Nav.Link></Nav.Item>
										<Nav.Item><Nav.Link eventKey="google"><i className="bx bxl-google-plus"></i> Google <span>7</span></Nav.Link></Nav.Item>
									</Nav>
								</div>
								{/* <!-- main-mail-menu --> */}
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={8} xl={9} md={12}>
					<Card>
						<div className="main-content-body main-content-body-mail card-body">
							<div className="main-mail-header">
								<div>
									<h4 className="main-content-title mg-b-5">Inbox</h4>
									<p>You have 2 unread messages</p>
								</div>
								<div>
									<span>1-50 of 1200</span>
									<div className="btn-group" role="group">
										<button className="btn btn-outline-secondary disabled" type="button">
											<i className="icon ion-ios-arrow-back"></i></button>
										<button className="btn btn-outline-secondary" type="button">
											<i className="icon ion-ios-arrow-forward"></i></button>
									</div>
								</div>
							</div>
							{/* <!-- main-mail-list-header --> */}
							<div className="main-mail-options">
								<Form.Check type="checkbox" label="" />
								<div className="btn-group ms-auto">
									<button className="btn btn-light"><OverlayTrigger placement="top" overlay={<Tooltip>refresh</Tooltip>}><i className="bx bx-refresh"></i></OverlayTrigger></button>
									<button className="btn btn-light disabled"><OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}><i className="bx bx-archive"></i></OverlayTrigger></button>
									<button className="btn btn-light disabled"><OverlayTrigger placement="top" overlay={<Tooltip>info</Tooltip>}><i className="bx bx-info-circle"></i></OverlayTrigger></button>
									<button className="btn btn-light disabled"><OverlayTrigger placement="top" overlay={<Tooltip>trash</Tooltip>}><i className="bx bx-trash"></i></OverlayTrigger></button>
									<button className="btn btn-light disabled"><OverlayTrigger placement="top" overlay={<Tooltip>folder</Tooltip>}><i className="bx bx-folder-open"></i></OverlayTrigger></button>
									<button className="btn btn-light disabled"><OverlayTrigger placement="top" overlay={<Tooltip>purchase</Tooltip>}><i className="bx bx-purchase-tag-alt"></i></OverlayTrigger></button>
								</div>
								{/* <!-- btn-group --> */}
							</div>
							{/* <!-- main-mail-options --> */}
							<div className="main-mail-list">
								{mailingData.map((idx) => (
									<div key={Math.random()} className={`main-mail-item ${idx.class}`}>
										<div className="main-mail-checkbox">
											<Form.Check type="checkbox" label="" />
										</div>
										<div className={`main-mail-star ${idx.starActive}`}>
											<i className="typcn typcn-star"></i>
										</div>
										<div className={idx.picClass}>{idx.content}<img alt="" src={idx.pic} /></div>
										<div className="main-mail-body">
											<div className="main-mail-from">
												{idx.username}
											</div>
											<div className="main-mail-subject">
												<strong>{idx.title}</strong> <span>{idx.description}</span>
											</div>
										</div>
										<div className="main-mail-attachment">
											{idx.attachicon}
										</div>
										<div className="main-mail-date">
											11:30am
										</div>
									</div>
								))}
							</div>
							<div className="mg-lg-b-30"></div>
						</div>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Mail.propTypes = {};

Mail.defaultProps = {};

export default Mail;
