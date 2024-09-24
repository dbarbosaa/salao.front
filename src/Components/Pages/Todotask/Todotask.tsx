import React, { useState } from 'react';
import { Badge, Button, Card, Col, Collapse, Dropdown, Form, ListGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { taskData } from './Data/TodotaskData';
import styles from './Todotask.module.scss';

const Todotask = () => {
	const [expanded, setExpanded] = useState<any>(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<div className={styles.Todotask}>
			<Pageheader titles="Pages" active="Todo-task" />
			{/* <!-- container --> */}


			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col xl={9} md={12} className="">
					<Row className="row-sm">
						{/* <!-- col --> */}
						<Col lg={12} className="">
							<Card className="mg-b-20">
								<Card.Body className="d-flex p-3">
									<div className="main-content-label mb-0 mg-t-8">User Today Tasks</div>
									<div className="ms-auto"><OverlayTrigger placement="top" overlay={<Tooltip>Add New User</Tooltip>}><i className="si si-plus text-muted d-block tx-20" onClick={handleExpandClick}></i></OverlayTrigger>
									</div>
								</Card.Body>
								<Collapse in={expanded}>
									<div>
										<Form.Group className='d-sm-flex m-4 '>
										<Form.Control className='me-3 mb-3 mb-sm-0' type="text" placeholder="User Name" />
										<Form.Control as='textarea' type="text" className='me-3 mb-3 mb-sm-0' placeholder="New Assign Task Description" />
										<Button className='primary ms-auto'>submit</Button>
									</Form.Group>
									</div>
								</Collapse>
							</Card>
						</Col>
						{/* <!-- /col --> */}

						{/* <!-- col --> */}
						{taskData.map((idx) => (
							<Col key={Math.random()} xxl={4} md={6}>
								<Card className="mg-b-20">
									<Card.Body className="p-0">
										<div className="todo-widget-header d-flex pb-2 pd-20">
											<Dropdown className="drop-down-profile">
												<Dropdown.Toggle as='div' variant="" id="dropdown-basic" className='no-caret'>
													<img alt="" className="rounded-circle avatar avatar-md" src={idx.pic} />
													<span className={`assigned-task bg-${idx.badgecolor}`}>{idx.badge}</span>
												</Dropdown.Toggle>
												<Dropdown.Menu className="tx-13" style={{marginTop:'0px'}}>
													<div className="main-header-profile">
														<div className="tx-16 h5 mg-b-0">Petey Cruiser</div>
														<span>Web Designer</span>
													</div>
													<Dropdown.Item className="" href="#">View Total Tasks</Dropdown.Item>
													<Dropdown.Item className="" href="#">Completed Tasks</Dropdown.Item>
													<Dropdown.Item className="" href="#">Settings</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<div className="ms-auto">
												<div className="">
													<Dropdown >
														<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}><i className="fas fa-envelope-open-text p-2 text-muted"></i></OverlayTrigger>
														<OverlayTrigger placement="top" overlay={<Tooltip>Move to spam</Tooltip>}><i className="fas fa-exclamation-circle p-2 text-muted"></i></OverlayTrigger>
														<Dropdown.Toggle as='a' className="p-2 no-caret text-muted"><i
															className="fas fa-ellipsis-v"></i></Dropdown.Toggle>
														<Dropdown.Menu className="tx-13 dropleft" style={{marginTop:'0px'}}>
															<Dropdown.Item className="" href="#">Mark As Unread</Dropdown.Item>
															<Dropdown.Item className="" href="#">Mark As Important</Dropdown.Item>
															<Dropdown.Item className="" href="#">Add to Tasks</Dropdown.Item>
															<Dropdown.Item className="" href="#">Add Star</Dropdown.Item>
															<Dropdown.Item className="" href="#">Move to</Dropdown.Item>
															<Dropdown.Item className="" href="#">Mute</Dropdown.Item>
															<Dropdown.Item className="" href="#">Move to Trash</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</div>
											</div>
										</div>
										<div className="p-4">
											<span className="tx-12 text-muted">10.54am</span>
											<Badge bg='primary-transparent' className="text-primary ms-auto float-end">New task</Badge>
											<h5 className="tx-14 mb-0 mg-t-5 text-capitalize">{idx.description}</h5>
										</div>
										<div className="p-4 border-top">
											<span className="tx-12 text-muted">10.54am</span>
											<Badge bg='danger-transparent' className="text-danger ms-auto float-end">Pending task</Badge>
											<h5 className="tx-14 mb-0 mg-t-5 text-capitalize">{idx.pendingDescription}</h5>
										</div>
									</Card.Body>
									<Card.Footer>
										<Link className={`btn btn-primary ${idx.assign}`} to="#" title="Assign Task">Assign</Link>
										<OverlayTrigger placement="top" overlay={<Tooltip>View Task</Tooltip>}><Link className="btn btn-outline-primary ms-auto float-end" to="#">View All</Link></OverlayTrigger>
									</Card.Footer>
								</Card>
							</Col>
						))}
						{/* <!-- /col --> */}
					</Row>
				</Col>
				{/* <!-- /col --> */}

				{/* <!-- col --> */}
				<Col lg={12} xl={3} className="">
					<Card className="card--events mg-b-20">
						<Card.Body className="">
							<div className="pd-20">
								<div className="main-content-label">Tasks</div>
								<p className="mg-b-0">It is Very Easy to Customize and it uses in website apllication.
								</p>
							</div>
							<ListGroup className="to-do-tasks">
								<ListGroup.Item className="">
									<div className="event-indicator bg-info"></div>
									<h6 className="mg-t-5">Today Tasks</h6>
								</ListGroup.Item>
								<ListGroup.Item className="">
									<div className="event-indicator bg-primary"></div>
									<h6 className="mg-t-5">Yesterday Tasks</h6>
								</ListGroup.Item>
								<ListGroup.Item className="">
									<div className="event-indicator bg-success"></div>
									<h6 className="mg-t-5">Weakly Tasks</h6>
								</ListGroup.Item>
								<ListGroup.Item className="">
									<div className="event-indicator bg-danger"></div>
									<h6 className="mg-t-5">Mothly Tasks</h6>
								</ListGroup.Item>
								<ListGroup.Item className="">
									<div className="event-indicator bg-warning"></div>
									<h6 className="mg-t-5">User Tasks</h6>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
					<Card className="">
						<Card.Body className="p-0 todocheck">
							<div className="pd-t-20 pd-x-20">
								<div className="main-content-label">Recent Tasks</div>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.
								</p>
							</div>
							<div className="d-flex p-3 border-top">
								<Form.Check className="ckbox" type="checkbox" label="Do something more" defaultChecked />
								<span className="ms-auto">
									<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}><i className="si si-pencil text-primary me-2"></i></OverlayTrigger>
									<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}><i className="si si-trash text-danger me-2"></i></OverlayTrigger>
								</span>
							</div>
							<div className="d-flex p-3 border-top">
								<Form.Check className="ckbox" type="checkbox" label="Update More Files" defaultChecked />
								<span className="ms-auto">
									<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}><i className="si si-pencil text-primary me-2"></i></OverlayTrigger>
									<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}><i className="si si-trash text-danger me-2"></i></OverlayTrigger>
								</span>
							</div>
							<div className="d-flex p-3 border-top">
								<Form.Check className="ckbox" type="checkbox" label="Complete Projects" />
								<span className="ms-auto">
									<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}><i className="si si-pencil text-primary me-2"></i></OverlayTrigger>
									<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}><i className="si si-trash text-danger me-2"></i></OverlayTrigger>
								</span>
							</div>
							<div className="d-flex p-3 border-top">
								<Form.Check className="ckbox" type="checkbox" label="Finish Something" />
								<span className="ms-auto">
									<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}><i className="si si-pencil text-primary me-2"></i></OverlayTrigger>
									<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}><i className="si si-trash text-danger me-2"></i></OverlayTrigger>
								</span>
							</div>
							<div className="d-flex p-3 border-top">
								<Form.Check className="ckbox" type="checkbox" label="System Updated" defaultChecked />
								<span className="ms-auto">
									<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}><i className="si si-pencil text-primary me-2"></i></OverlayTrigger>
									<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}><i className="si si-trash text-danger me-2"></i></OverlayTrigger>
								</span>
							</div>
							<div className="d-flex p-3 border-top">
								<Form.Check className="ckbox" type="checkbox" label="Change Settings" />
								<span className="ms-auto">
									<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}><i className="si si-pencil text-primary me-2"></i></OverlayTrigger>
									<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}><i className="si si-trash text-danger me-2"></i></OverlayTrigger>
								</span>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

Todotask.propTypes = {};

Todotask.defaultProps = {};

export default Todotask;
