import React from 'react';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import styles from './Blogdetails.module.scss';
import { Row, Col, Card, Button, ButtonGroup, OverlayTrigger, Tooltip, Badge, Form, InputGroup, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Gallery } from '../../../CommonFileComponents/LightGallery';
import Blogmain from '../../../../assets/img/photos/27.jpg';
import faces2 from '../../../../assets/img/users/2.jpg';
import faces1 from '../../../../assets/img/users/1.jpg';
import faces3 from '../../../../assets/img/users/3.jpg';
import faces5 from '../../../../assets/img/users/5.jpg';
import faces6 from '../../../../assets/img/users/6.jpg';
import Photo11 from '../../../../assets/img/photos/11.jpg';
import Blog1 from '../../../../assets/img/photos/22.jpg';
import Blog2 from '../../../../assets/img/photos/23.jpg';
import Blog5 from '../../../../assets/img/photos/25.jpg';




const Blogdetails = () => {

	return (
		<div className={styles.Blogdetails}>
			<Pageheader titles="Blog" active="Blog Details" />
			{/* <!-- container --> */}
			{/* <!-- row --> */}
			<Row>
				<Col xxl={9} xl={12} lg={12} md={12}>
					<Card className="overflow-hidden">
						<div className="item7-card-img px-4 pt-4">
							{/* <Link to="#"></Link> */}
							<img src={Blogmain} alt="img" className="cover-image rounded-7 w-100" />
						</div>
						<Card.Body>
							<Link to="#" className="mt-4"><h5 className="font-weight-semibold text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5></Link>
							<p className="">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
							<p className="mb-0">but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example</p>
						</Card.Body>
						<Card.Footer className="pb-2 pt-2">
							<div className="item7-card-desc d-md-flex">
								<div className="d-flex align-items-center mt-0">
									<img src={faces2} className="avatar brround avatar-md me-3" alt="avatar-img" />
									<div>
										<Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-dark font-weight-bold">Lilly Potter</Link>
										<small className="d-block text-muted">1 day ago</small>
									</div>
								</div>
								<div className="ms-auto mb-2 d-flex mt-3">
									<Link to="#" className="me-3 mb-2 d-flex"><span className="fe fe-calendar text-muted me-2 tx-17"></span><div className="mt-0 mt-0 text-dark">Jan-18-2020</div></Link>
									<Link className="me-0 d-flex" to="#"><span className="fe fe-message-square text-muted me-2 tx-17"></span><div className="mt-0 mt-0 text-dark">12 Comments</div></Link>
								</div>
							</div>
						</Card.Footer>
					</Card>
					<div className="">
						<Card>
							<Card.Header>
								<Card.Title as='h3'>Comments</Card.Title>
							</Card.Header>
							<Card.Body>
								<div className="d-sm-flex mt-0 p-3 sub-review-section border border-bottom-0 br-bl-0 br-br-0">
									<div className="d-flex me-3">
										<Link to="#"><img className="media-object brround avatar-md" alt="64x64" src={faces1} /> </Link>
									</div>
									<div className="media-body">
										<h5 className="mt-0 mb-1 font-weight-semibold">Joanne Scott
											<OverlayTrigger  placement="top" overlay={<Tooltip className="tx-14 ms-0">Verified</Tooltip>}><i className="fe fe-check-circle text-success tx-12 mx-1 d-inline-block"></i></OverlayTrigger>
											<span className="tx-14 ms-2 d-inline-block"> 4.5 <i className="fa fa-star text-warning"></i></span>
										</h5>
										<p className="font-13  mb-2 mt-2">
											Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris   commodo consequat.
										</p>
										<Link to="#" className="me-2 mt-1"><Badge bg="primary"><span className="me-1 fe fe-thumbs-up tx-11"></span>Helpful</Badge></Link>
										<Link to="#" className="me-2 mt-1"><Badge bg="success "><span className="me-1 fe fe-edit-2 tx-11"></span>Comment</Badge></Link>
										<Link to="#" className="me-2 mt-1"><Badge bg="success"><span className="me-1 fe fe-alert-triangle tx-11"></span>Report</Badge></Link>
										<ButtonGroup size='sm' className="mb-1 ms-auto float-sm-end mt-1">
											<Button variant='light' className="me-2" ><span className="fe fe-thumbs-up tx-16"></span></Button>
											<Button variant="light"><span className="fe fe-thumbs-down tx-16"></span></Button>
										</ButtonGroup>
									</div>
								</div>
								<div className="d-sm-flex p-3 sub-review-section border subsection-color br-tl-0 br-tr-0">
									<div className="d-flex me-3">
										<Link to="#"><img className="media-object brround avatar-md" alt="64x64" src={faces3} /> </Link>
									</div>
									<div className="media-body">
										<h5 className="mt-0 mb-1 font-weight-semibold">Rose Slater <OverlayTrigger  placement="top" overlay={<Tooltip className="tx-14 ms-0">Verified</Tooltip>}><i className="fe fe-check-circle d-inline-block text-success tx-12 mx-1"></i></OverlayTrigger></h5>
										<p className="font-13  mb-2 mt-2">
											Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris commodo consequat.
										</p>
										<Link to="#" className="me-2 mt-1"><Badge bg="primary"><span className="me-1 fe fe-thumbs-up tx-11"></span>Helpful</Badge></Link>
										<Link to="#" className="me-2 mt-1"><Badge bg="success "><span className="me-1 fe fe-edit-2 tx-11"></span>Comment</Badge></Link>
										<Link to="#" className="me-2 mt-1"><Badge bg="success"><span className="me-1 fe fe-alert-triangle tx-11"></span>Report</Badge></Link>
										<ButtonGroup size='sm' className="mb-1 ms-auto float-sm-end mt-1">
											<Button variant='light' className="me-2" ><span className="fe fe-thumbs-up tx-16"></span></Button>
											<Button variant='light' className="" ><span className="fe fe-thumbs-down tx-16"></span></Button>
										</ButtonGroup>
									</div>
								</div>
								<div className="d-sm-flex p-3 mt-4 border sub-review-section pb-0">
									<div className="d-flex me-3">
										<Link to="#"><img className="media-object brround avatar-md" alt="64x64" src={faces5} /> </Link>
									</div>
									<div className="media-body">
										<h5 className="mt-0 mb-1 font-weight-semibold">Edward
											<OverlayTrigger  placement="top" overlay={<Tooltip className="tx-14 ms-0">Verified</Tooltip>}><i className="fe fe-check-circle text-success tx-12 d-inline-block mx-1"></i></OverlayTrigger>
											<span className="tx-14 ms-2 d-inline-block"> 4 <i className="fa fa-star text-warning"></i></span>
										</h5>
										<p className="font-13  mb-2 mt-2">
											Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris   commodo consequat.
										</p>
										<Link to="#" className="me-2 mt-1"><Badge bg="primary"><span className="me-1 fe fe-thumbs-up tx-11"></span>Helpful</Badge></Link>
										<Link to="#" className="me-2 mt-1"><Badge bg="success "><span className="me-1 fe fe-edit-2 tx-11"></span>Comment</Badge></Link>
										<Link to="#" className="me-2 mt-1"><Badge bg="success"><span className="me-1 fe fe-alert-triangle tx-11"></span>Report</Badge></Link>
										<ButtonGroup size='sm' className="mb-1 ms-auto float-sm-end mt-1">
											<Button variant='light' className="me-2" ><span className="fe fe-thumbs-up tx-16"></span></Button>
											<Button variant='light' className="" ><span className="fe fe-thumbs-down tx-16"></span></Button>
										</ButtonGroup>
									</div>
								</div>
								<div className="d-sm-flex p-3  mt-4 sub-review-section border subsection-color br-tl-0 br-tr-0">
									<div className="d-flex me-3">
										<Link to="#"><img className="media-object brround avatar-md" alt="64x64" src={faces6} /> </Link>
									</div>
									<div className="media-body">
										<h5 className="mt-0 mb-1 font-weight-semibold">Camila cabello <OverlayTrigger  placement="top" overlay={<Tooltip className='tx-14 ms-0'>Verified</Tooltip>}><i className="fe fe-check-circle text-success tx-12 d-inline-block mx-1"></i></OverlayTrigger></h5>
										<p className="font-13  mb-2 mt-2">
											Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris   commodo consequat.
										</p>
										<Link to="#" className="me-2 mt-1"><Badge bg="primary"><span className="me-1 fe fe-thumbs-up tx-11"></span>Helpful</Badge></Link>
										<Link to="#" className="me-2 mt-1"><Badge bg="success "><span className="me-1 fe fe-edit-2 tx-11"></span>Comment</Badge></Link>
										<Link to="#" className="me-2 mt-1"><Badge bg="success"><span className="me-1 fe fe-alert-triangle tx-11"></span>Report</Badge></Link>
										<ButtonGroup size='sm' className="mb-1 ms-auto float-sm-end mt-1">
											<Button variant='light' className="me-2" ><span className="fe fe-thumbs-up tx-16"></span></Button>
											<Button variant='light' className="" ><span className="fe fe-thumbs-down tx-16"></span></Button>
										</ButtonGroup>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="">
						<Card>
							<Card.Header className="border-bottom-0">
								<Card.Title as='h3'>Add a Comment</Card.Title>
							</Card.Header>
							<Card.Body>
								<div className="mt-2">
									<Form.Group>
										<Form.Control type="text" className="mb-3" id="name1" placeholder="Your Name" />
									</Form.Group>
									<Form.Group>
										<Form.Control type="email" className="mb-3" id="email" placeholder="Email Address" />
									</Form.Group>
									<Form.Group>
										<Form.Control as='textarea' className="mb-3" name="example-textarea-input" rows={6} placeholder="Write Review"></Form.Control>
									</Form.Group>
									<Link to="#" className="btn btn-primary">Send Reply</Link>
								</div>
							</Card.Body>
						</Card>
					</div>
				</Col>
				<Col xxl={3} xl={12} lg={12} md={12}>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom mb-1">
							<Card.Title as='h3'>Search</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="text-center">
								<span className="">
									<InputGroup>
										<Form.Control className="rounded-3 br-te-0 br-be-0" placeholder="Enter email..." type="email" />
										<Button variant="primary" className="br-ts-0 br-bs-0" type="button">Sign in</Button>
									</InputGroup>
								</span>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom">
							<Card.Title as='h3'>About Author</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="text-center">
								<Link to={`${import.meta.env.BASE_URL}advancedui/blogpages/blogdetails`}><img className="card-img-top w-100 w-100" src={Photo11} alt="" /></Link>
								<div className="rounded-5 pt-3 px-0 text-start">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla deleniti voluptas officia accusamus magnam ullam inventore Lorem ipsum dolor, sit amet consectetur dolorem quibusdam ?
									</p>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom">
							<Card.Title as='h3' className="mb-1">Popular posts</Card.Title>
						</Card.Header>
						<Card.Body>
							<ListGroup className="mb-0">
								<ListGroup.Item className="d-flex border-0 pt-3 px-0">
									<img src={Blog1} className="avatar rounded-5 avatar-lg me-3 my-auto" alt="avatar-img" />
									<div className="">
										<span className="d-block">Tourism</span>
										<a className="text-default tx-12 font-weight-semibold white-space-nowrap">Explore tourism by visitinig places.</a>
										<small className="d-block text-muted">February 2,2021</small>
									</div>
								</ListGroup.Item>
								<ListGroup.Item className="d-flex border-0 px-0">
									<img src={Blog2} className="avatar rounded-5 avatar-lg me-3 my-auto" alt="avatar-img" />
									<div className="">
										<span className="d-block">Beautician</span>
										<a className="text-default  tx-12 font-weight-semibold white-space-nowrap">Beautification courses are available.</a>
										<small className="d-block text-muted">August 14,2021</small>
									</div>
								</ListGroup.Item>
								<ListGroup.Item className="d-flex pb-3 border-0 px-0">
									<img src={Blog5} className="avatar rounded-5 avatar-lg me-3 my-auto" alt="avatar-img" />
									<div className="">
										<span className="d-block">Music</span>
										<a className="text-default tx-12 font-weight-semibold white-space-nowrap">Music in a peaceful way </a>
										<small className="d-block text-muted">November 30,2021</small>
									</div>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom">
							<Card.Title as='h3' className="mb-1">Categories</Card.Title>
						</Card.Header>
						<Card.Body>
							<div><div className="tags">
								<Link to="#" className="tag">Life style</Link>
								<Link to="#" className="tag">Health</Link>
								<Link to="#" className="tag">Tourism</Link>
								<Link to="#" className="tag">Web designing</Link>
								<Link to="#" className="tag">Medical</Link>
								<Link to="#" className="tag">Hotels</Link>
								<Link to="#" className="tag">Real estate</Link>
								<Link to="#" className="tag">Business</Link>
								<Link to="#" className="tag">Shopping</Link>
								<Link to="#" className="tag">Marketing</Link>
								<Link to="#" className="tag">Housing</Link>
							</div></div>
						</Card.Body>
					</Card>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="border-bottom">
							<Card.Title as='h3' className="mb-1">Gallery</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="text-center demo-gallery">
								<div className="mt-2">
									<Gallery/>
									
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!--End Row--> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Blogdetails.propTypes = {};

Blogdetails.defaultProps = {};

export default Blogdetails;
