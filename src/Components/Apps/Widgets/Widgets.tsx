import React from 'react';
import { Card, Carousel, Col, Dropdown, Form, Nav, ProgressBar, Row, Tab, Table, Tabs } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Widgets.module.scss';
import { baseData, userData, revenueData, profitData } from './Data/WidgetData';
import { Link } from 'react-router-dom';
//Images
import faces17 from '../../../assets/img/users/17.jpg';
import faces12 from '../../../assets/img/users/12.jpg';
import faces5 from '../../../assets/img/users/5.jpg';
import faces9 from '../../../assets/img/users/9.jpg';
import faces7 from '../../../assets/img/users/7.jpg';
import faces1 from '../../../assets/img/users/1.jpg';
import faces13 from '../../../assets/img/users/13.jpg';
import faces14 from '../../../assets/img/users/14.jpg';
import faces16 from '../../../assets/img/users/16.jpg';
import faces4 from '../../../assets/img/users/4.jpg';
import faces2 from '../../../assets/img/users/2.jpg';
import faces8 from '../../../assets/img/users/8.jpg';
import faces3 from '../../../assets/img/users/3.jpg';
import Ecom1 from '../../../assets/img/ecommerce/01.jpg';
import Ecom2 from '../../../assets/img/ecommerce/02.jpg';
import Ecom3 from '../../../assets/img/ecommerce/03.jpg';
import Ecom8 from '../../../assets/img/ecommerce/08.jpg';
import Ecom9 from '../../../assets/img/ecommerce/09.jpg';
import Ecom5 from '../../../assets/img/ecommerce/05.jpg';
import Ecom4 from '../../../assets/img/ecommerce/04.jpg';
import Ecom6 from '../../../assets/img/ecommerce/06.jpg';
import Ecom7 from '../../../assets/img/ecommerce/07.jpg';

import usFlag from '../../../assets/img/flag-imgs/us_flag.jpg';
import spainFlag from '../../../assets/img/flag-imgs/spain_flag.jpg';
import germanyFlag from '../../../assets/img/flag-imgs/germany_flag.jpg';
import russiaFlag from '../../../assets/img/flag-imgs/russia_flag.jpg';
import italyFlag from '../../../assets/img/flag-imgs/italy_flag.jpg';
import frenchFlag from '../../../assets/img/flag-imgs/french_flag.jpg';


import chrome from '../../../assets/img/svgicons/chrome.svg';
import opera from '../../../assets/img/svgicons/opera.svg';
import edge from '../../../assets/img/svgicons/edge.svg';
import firefox from '../../../assets/img/svgicons/firefox.svg';
import uc from '../../../assets/img/svgicons/uc-browser.svg';
import safari from '../../../assets/img/svgicons/safari.svg';



const Widgets = () => {

	return (

		<div className={styles.Widgets}>
			<Pageheader titles="Widgets" active="Widgets" />
			{/* <!-- container --> */}

			<Row className="row-sm">
				<Col lg={6} xl={3} md={6} col={12}>
					<Card className="bg-primary-gradient text-white ">
						<Card.Body>
							<Row className="">
								<Col col={6}>
									<div className="icon1 mt-2 text-center">
										<i className="fe fe-users tx-40"></i>
									</div>
								</Col>
								<Col col={6}>
									<div className="mt-0 text-center">
										<span className="text-white">Members</span>
										<h2 className="text-white mb-0">600</h2>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} xl={3} md={6} col={12}>
					<Card className="bg-danger-gradient text-white">
						<Card.Body>
							<Row className="">
								<Col col={6}>
									<div className="icon1 mt-2 text-center">
										<i className="fe fe-shopping-cart tx-40"></i>
									</div>
								</Col>
								<Col col={6}>
									<div className="mt-0 text-center">
										<span className="text-white">Sales</span>
										<h2 className="text-white mb-0">854</h2>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} xl={3} md={6} col={12}>
					<Card className="bg-success-gradient text-white">
						<Card.Body>
							<Row className="">
								<Col col={6}>
									<div className="icon1 mt-2 text-center">
										<i className="fe fe-bar-chart-2 tx-40"></i>
									</div>
								</Col>
								<Col col={6}>
									<div className="mt-0 text-center">
										<span className="text-white">Profits</span>
										<h2 className="text-white mb-0">98K</h2>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} xl={3} md={6} col={12}>
					<Card className="bg-warning-gradient text-white">
						<Card.Body>
							<Row className="">
								<Col col={6}>
									<div className="icon1 mt-2 text-center">
										<i className="fe fe-pie-chart tx-40"></i>
									</div>
								</Col>
								<Col col={6}>
									<div className="mt-0 text-center">
										<span className="text-white">Taxes</span>
										<h2 className="text-white mb-0">876</h2>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row className="">
				<Col sm={12} lg={6} xl={3}>
					<Card className="card-img-holder">
						<Card.Body className="list-icons p-0">
							<div className="clearfix p-3">
								<div className="float-end mt-3">
									<span className="text-primary">
										<i className="si si-basket-loaded tx-30"></i>
									</span>
								</div>
								<div className="float-start text-end">
									<p className="card-text text-muted mb-1">Services</p>
									<h3>$124</h3>
								</div>
							</div>
						</Card.Body>
						<Card.Footer className="p-3">
							<p className="text-muted mb-0"><i
								className="si si-arrow-down-circle text-warning me-1-20  me-2"
								aria-hidden="true"></i>Daily Orders</p>
						</Card.Footer>
					</Card>
				</Col>
				<Col sm={12} lg={6} xl={3}>
					<Card className="card-img-holder">
						<Card.Body className="list-icons p-0">
							<div className="clearfix p-3">
								<div className="float-end mt-3">
									<span className="text-primary ">
										<i className="si si-credit-card tx-30"></i>
									</span>
								</div>
								<div className="float-start">
									<p className="card-text text-muted mb-1">Sources</p>
									<h3>$124</h3>
								</div>
							</div>
						</Card.Body>
						<Card.Footer className="p-3">
							<p className="text-muted mb-0"><i
								className="si si-arrow-up-circle text-success me-2"></i>Less Sales</p>
						</Card.Footer>
					</Card>
				</Col>
				<Col sm={12} lg={6} xl={3}>
					<Card className="card-img-holder">
						<Card.Body className="list-icons p-0">
							<div className="clearfix p-3">
								<div className="float-end mt-3">
									<span className="text-primary">
										<i className="si si-chart tx-30"></i>
									</span>
								</div>
								<div className="float-start">
									<p className="card-text text-muted mb-1">Income</p>
									<h3>21%</h3>
								</div>
							</div>
						</Card.Body>
						<Card.Footer className="p-3">
							<p className="text-muted mb-0"><i className="si si-exclamation text-info me-2"></i>From
								Last Month</p>
						</Card.Footer>
					</Card>
				</Col>
				<Col sm={12} lg={6} xl={3}>
					<Card className="card-img-holder">
						<Card.Body className="list-icons p-0">
							<div className="clearfix p-3">
								<div className="float-end mt-3">
									<span className="text-primary">
										<i className="si si-social-facebook tx-30"></i>
									</span>
								</div>
								<div className="float-start">
									<p className="card-text text-muted mb-1">Followers</p>
									<h3>24K</h3>
								</div>
							</div>
							<Card.Footer className="p-3">
								<p className="text-muted mb-0"><i className="si si-check me-1 text-primary me-2"></i>
									Recent History</p>
							</Card.Footer>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} sm={12} xl={4}>
					<Card className="user-wideget user-wideget-widget widget-user">
						<div className="widget-user-header bg-primary">
							<h3 className="widget-user-username">Alexander Pierce</h3>
							<h5 className="widget-user-desc">Founder &amp; CEO</h5>
						</div>
						<div className="widget-user-image">
							<img src={faces17} className="brround" alt="User Avatar" />
						</div>
						<div className="user-wideget-footer">
							<Row className="">
								<Col sm={4} className="border-end">
									<div className="description-block">
										<h5 className="description-header">3,200</h5>
										<span className="description-text">SALES</span>
									</div>
								</Col>
								<Col sm={4} className="border-end">
									<div className="description-block">
										<h5 className="description-header">13,000</h5>
										<span className="description-text">FOLLOWERS</span>
									</div>
								</Col>
								<Col sm={4}>
									<div className="description-block">
										<h5 className="description-header">35</h5>
										<span className="description-text">PRODUCTS</span>
									</div>
								</Col>
							</Row>
						</div>
					</Card>
				</Col>
				<Col lg={12} sm={12} xl={4}>
					<Card className="user-wideget user-wideget-widget widget-user">
						<div className="widget-user-header bg-danger">
							<h3 className="widget-user-username">Alexander Pierce</h3>
							<h5 className="widget-user-desc">Founder &amp; CEO</h5>
						</div>
						<div className="widget-user-image">
							<img src={faces12} className="brround" alt="User Avatar" />
						</div>
						<div className="user-wideget-footer">
							<Row className="">
								<Col sm={4} className="border-end">
									<div className="description-block">
										<h5 className="description-header">3,200</h5>
										<span className="description-text">SALES</span>
									</div>
								</Col>
								<Col sm={4} className="border-end">
									<div className="description-block">
										<h5 className="description-header">13,000</h5>
										<span className="description-text">FOLLOWERS</span>
									</div>
								</Col>
								<Col sm={4}>
									<div className="description-block">
										<h5 className="description-header">35</h5>
										<span className="description-text">PRODUCTS</span>
									</div>
								</Col>
							</Row>
						</div>
					</Card>
				</Col>
				<Col lg={12} sm={12} xl={4}>
					<Card className="user-wideget user-wideget-widget widget-user">
						<div className="widget-user-header bg-success">
							<h3 className="widget-user-username">Alexander Pierce</h3>
							<h5 className="widget-user-desc">Founder &amp; CEO</h5>
						</div>
						<div className="widget-user-image">
							<img src={faces5} className="brround" alt="User Avatar" />
						</div>
						<div className="user-wideget-footer">
							<Row className="">
								<Col sm={4} className="border-end">
									<div className="description-block">
										<h5 className="description-header">3,200</h5>
										<span className="description-text">SALES</span>
									</div>
								</Col>
								<Col sm={4} className="border-end">
									<div className="description-block">
										<h5 className="description-header">13,000</h5>
										<span className="description-text">FOLLOWERS</span>
									</div>
								</Col>
								<Col sm={4}>
									<div className="description-block">
										<h5 className="description-header">35</h5>
										<span className="description-text">PRODUCTS</span>
									</div>
								</Col>
							</Row>
						</div>
					</Card>
				</Col>
			</Row>

			<Row className="row-cards row-deck">
				<Col sm={12} lg={6}>
					<Card>
						<Card.Header className="pb-0">
							<Card.Title className="pb-0  mb-2">Sales</Card.Title>
							<p className="tx-12 tx-gray-500 mb-3">On the other hand, we denounce with right indignation
								and dislike imagesralized <Link to="#">Learn more</Link></p>
						</Card.Header>
						<Card.Body>
							<Row className="">
								<div className="col text-center">
									<label className="tx-12">Today</label>
									<p className="fw-bold tx-20">3,256</p>
								</div>
								{/* <!-- col --> */}
								<div className="col border-start text-center">
									<label className="tx-12">This Week</label>
									<p className="fw-bold tx-20">25,321</p>
								</div>
								{/* <!-- col --> */}
								<div className="col border-start text-center">
									<label className="tx-12">This Month</label>
									<p className="fw-bold tx-20">53,625</p>
								</div>
								{/* <!-- col --> */}
							</Row>
							{/* <!-- row --> */}

							<ProgressBar className="mt-4 h-8" animated variant="primary" now={50} label={`${50}%`} />
						</Card.Body>
					</Card>
				</Col>
				<Col sm={12} lg={6}>
					<Card>
						<Card.Header className="pb-0">
							<Card.Title className="pb-0 mb-2">Profit</Card.Title>
							<p className="tx-12 tx-gray-500 mb-3">On the other hand, we denounce with right indignation
								and dislike imagesralized <Link to="#">Learn more</Link></p>
						</Card.Header>
						<Card.Body>
							<Row className="">
								<Col className="text-center">
									<label className="tx-12">Today</label>
									<p className="fw-bold tx-20">236 $</p>
								</Col>
								{/* <!-- col --> */}
								<Col className="border-start text-center ">
									<label className="tx-12">This Week</label>
									<p className="fw-bold tx-20">1,365 $</p>
								</Col>
								{/* <!-- col --> */}
								<Col className="border-start text-center">
									<label className="tx-12">This Month</label>
									<p className="fw-bold tx-20">36,254 $</p>
								</Col>
								{/* <!-- col --> */}
							</Row>
							{/* <!-- row --> */}
							<ProgressBar className="mt-4 h-8" animated variant="warning" now={40} label={`${36}%`} />
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row className="">
				{/* <!-- col --> */}
				<Col lg={4} md={4}>
					<Card className="bg-primary-gradient">
						<Card.Body>
							<Carousel indicators={false} interval={1000}>
								<Carousel.Item className="flex-column">
									<i className="si si-social-facebook tx-30 text-white mb-2"></i>
									<p className="text-white mt-2">12th June</p>
									<h3 className="text-white font-light">Now Get <span className="font-bold">20%
										Off</span><br />on buy</h3>
									<div className="text-white m-t-20"><i>- Trevor Hart</i></div>
								</Carousel.Item>
								<Carousel.Item className="flex-column">
									<i className="si si-social-google tx-30 text-white mb-2"></i>
									<p className="text-white mt-2">24th July</p>
									<h3 className="text-white font-light">Now Get <span className="font-bold">60%
										Off</span><br /> on buy</h3>
									<div className="text-white m-t-20"> <i>- Joseph Vaughan</i> </div>
								</Carousel.Item>
								<Carousel.Item>
									<i className="si si-social-twitter tx-30 text-white mb-2"></i>
									<p className="text-white mt-2">9th Aug</p>
									<h3 className="text-white font-light">Now Get <span className="font-bold">90%
										Off</span><br /> on buy</h3>
									<div className="text-white m-t-20"><i>- Alan Hemmings</i></div>
								</Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col --> */}
				<Col lg={4} md={4}>
					<Card className="bg-danger-gradient">
						<Card.Body>
							<Carousel indicators={false} interval={2000}>
								<Carousel.Item className="flex-column">
									<i className="si si-social-facebook tx-30 text-white mb-2"></i>
									<p className="text-white mt-2">11th June</p>
									<h3 className="text-white font-light">Now Get <span className="font-bold">30%
										Off</span><br />on buy</h3>
									<div className="text-white m-t-20"> <i>- Alan Hemmings</i> </div>
								</Carousel.Item>
								<Carousel.Item className="flex-column">
									<i className="si si-social-google tx-30 text-white mb-2"></i>
									<p className="text-white mt-2">21st July</p>
									<h3 className="text-white font-light">Now Get <span className="font-bold">70%
										Off</span><br /> on buy</h3>
									<div className="text-white m-t-20"><i>- Eric Lee</i> </div>
								</Carousel.Item>
								<Carousel.Item>
									<i className="si si-social-twitter tx-30 text-white mb-2"></i>
									<p className="text-white mt-2">12th Aug</p>
									<h3 className="text-white font-light">Now Get <span className="font-bold">80%
										Off</span><br /> on buy</h3>
									<div className="text-white m-t-20"> <i>- Eric Lee</i> </div>
								</Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col --> */}
				<Col lg={4} md={4}>
					<Card className="bg-purple-gradient">
						<Card.Body>
							<Carousel indicators={false}>
								<Carousel.Item className="flex-column">
									<i className="si si-social-facebook tx-30 text-white mb-2"></i>
									<p className="text-white mt-2">25th June</p>
									<h3 className="text-white font-light">Now Get <span className="font-bold">30%
										Off</span><br />on buy</h3>
									<div className="text-white m-t-20"><i>- Eric Lee</i></div>
								</Carousel.Item>
								<Carousel.Item className="flex-column">
									<i className="si si-social-google tx-30 text-white mb-2"></i>
									<p className="text-white mt-2">6th July</p>
									<h3 className="text-white font-light">Now Get <span className="font-bold">70%
										Off</span><br /> on buy</h3>
									<div className="text-white m-t-20">
										<i>- Eric Lee</i>
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<i className="si si-social-twitter tx-30 text-white mb-2"></i>
									<p className="text-white mt-2">7th Aug</p>
									<h3 className="text-white font-light">Now Get <span className="font-bold">80%
										Off</span><br /> on buy</h3>
									<div className="text-white m-t-20">
										<i>- Eric Lee</i>
									</div>
								</Carousel.Item>
							</Carousel>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- end row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				{userData.map((idx) => (
					<Col key={Math.random()} xl={3} lg={6} md={6} sm={12}>
						<Card>
							<Card.Body className="iconfont text-start">
								<div className="d-flex justify-content-between">
									<Card.Title as='h4' className="mb-3">{idx.title}</Card.Title>
									<Dropdown>
										<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
											<i className="mdi mdi-dots-vertical"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu style={{ margin: '0px' }}>
											<Dropdown.Item href="#/action-1">Edit User</Dropdown.Item>
											<Dropdown.Item href="#/action-2">Delete User</Dropdown.Item>
											<Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<div className="d-flex mb-0">
									<div className="">
										<h4 className="mb-1 fw-bold">{idx.data1}<span
											className={`text-${idx.color} tx-13 ms-2`}>{idx.data2}</span></h4>
										<p className="mb-2 tx-12 text-muted">Overview of Last month</p>
									</div>
									<div className={`card-chart bg-${idx.class}-transparent brround ms-auto mt-0`}>
										{idx.icon}
									</div>
								</div>
								<ProgressBar className="progress-sm mt-2" variant={idx.class} now={idx.value} />
								<small className="mb-0  text-muted">Monthly<span
									className="float-end text-muted">{idx.value}%</span></small>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				{baseData.map((idx) => (
					<Col key={Math.random()} sm={12} md={6} lg={6} xl={3}>
						<Card>
							<Card.Body>
								<div className="card-order">
									<h6 className="mb-2">{idx.title}</h6>
									<h2 className="text-end">{idx.icon}<span>{idx.data1}</span>
									</h2>
									<p className="mb-0">{idx.data3}<span className="float-end">{idx.data2}</span></p>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				{revenueData.map((idx: any) => (
					<Col key={Math.random()} sm={6} lg={6} xl={3}>
						<Card>
							<Card.Body>
								<Row className="">
									<Col>
										<div className="">{idx.title}</div>
										<div className="h3 mt-2 mb-2"><b>{idx.data1}</b><span
											className="text-success tx-13 mx-2">{idx.data2}</span></div>
									</Col>
									<div className="col-auto align-self-center ">
										<div className="feature mt-0 mb-0">
											{idx.icon}
										</div>
									</div>
								</Row>
								<div className="">
									<p className="mb-1">Overview of Last month</p>

									<ProgressBar className="progress-sm h-1 mb-1" variant={idx.color} now={idx.value} />
									<small className="mb-0 text-muted">Monthly<span
										className="float-end text-muted">{idx.value}%</span></small>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				{profitData.map((idx) => (
					<Col key={Math.random()} xl={3} lg={6} sm={6} md={6}>
						<Card className="text-center">
							<Card.Body className="">
								<div className="feature widget-2 text-center mt-0 mb-3">
									{idx.icon}
								</div>
								<h6 className="mb-1 text-muted">{idx.title}</h6>
								<h3 className="fw-semibold">{idx.data1}</h3>
							</Card.Body>
						</Card>
					</Col>
				))}

			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col md={12} xl={4}>
					<Card>
						<Card.Body>
							<div className="d-flex justify-content-between">
								<Card.Title as='h4'>Active Projects</Card.Title>
								{/* <i className="mdi mdi-dots-vertical"></i> */}
								<Dropdown>
									<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
										<i className="mdi mdi-dots-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{ margin: '0px' }}>
										<Dropdown.Item href="#/action-1">Edit User</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Delete User</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="card-description mb-1">What're people doing right now</p>
							<div className="list d-flex align-items-center border-bottom py-3">
								<img className="avatar brround d-block cover-image"
									src={faces5} />
								<span className="avatar-status avatar-status-new"></span>
								<div className="wrapper w-100 ms-3 m-0 p-0">
									<p className="mb-0">
										<b>Lilly </b>posted in Website
									</p>
									<div className="d-sm-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
											<i className="mdi mdi-clock text-muted me-1"></i>
											<p className="mb-0">Awesome websites!</p>
										</div>
										<small className="text-muted ms-auto">2 hours ago</small>
									</div>
								</div>
							</div>
							<div className="list d-flex align-items-center border-bottom py-3">
								<img className="avatar brround d-block cover-image"
									src={faces1} />
								<span className="avatar-status avatar-status-new"></span>

								<div className="wrapper w-100 ms-3 m-0 p-0">
									<p className="mb-0">
										<b>Thomos</b>posted in Material
									</p>
									<div className="d-sm-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
											<i className="mdi mdi-clock text-muted me-1"></i>
											<p className="mb-0">Awesome websites!</p>
										</div>
										<small className="text-muted ms-auto">3 hours ago</small>
									</div>
								</div>
							</div>
							<div className="list d-flex align-items-center border-bottom py-3">
								<img className="avatar brround d-block cover-image"
									src={faces14} />
								<span className="avatar-status avatar-status-new"></span>

								<div className="wrapper w-100 ms-3 m-0 p-0">
									<p className="mb-0">
										<b>Marry cott </b>posted in photo
									</p>
									<div className="d-sm-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
											<i className="mdi mdi-clock text-muted me-1"></i>
											<p className="mb-0">That's Great!</p>
										</div>
										<small className="text-muted ms-auto">1 hours ago</small>
									</div>
								</div>
							</div>
							<div className="list d-flex align-items-center pt-3">
								<img className="avatar brround d-block cover-image"
									src={faces4} />
								<span className="avatar-status avatar-status-new"></span>
								<div className="wrapper w-100 ms-3 m-0 p-0">
									<p className="mb-0">
										<b>John </b>posted in Status
									</p>
									<div className="d-sm-flex justify-content-between align-items-center">
										<div className="d-flex align-items-center">
											<i className="mdi mdi-clock text-muted me-1"></i>
											<p className="mb-0">Awesome websites!</p>
										</div>
										<small className="text-muted ms-auto">1 hours ago</small>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} xl={4}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Business Team</Card.Title>
						</Card.Header>
						<Card.Body>
							<div>
								<div className="chips">
									<div className="team">
										<Link to="#" className="chip">
											<img className="avatar cover-image"
												src={faces2} /> Victoria
										</Link>
										<i className="fab fa-facebook text-primary" aria-hidden="true"></i>
										<i className="fab fa-twitter text-primary" aria-hidden="true"></i>
										<i className="fas fa-envelope text-primary" aria-hidden="true"></i>
										<p>On the other hand, we denounce with right indignation and dislike
											imagesralized</p>
									</div>
									<div className="team">
										<Link to="#" className="chip">
											<img className="avatar cover-image"
												src={faces3} /> Nathan
										</Link>
										<i className="fab fa-facebook text-primary" aria-hidden="true"></i>
										<i className="fab fa-twitter text-primary" aria-hidden="true"></i>
										<i className="fas fa-envelope text-primary" aria-hidden="true"></i>
										<p>On the other hand, we denounce with right indignation and dislike
											imagesralized</p>
									</div>
									<div className="team">
										<Link to="#" className="chip">
											<img className="avatar cover-image"
												src={faces4} /> Alice
										</Link>
										<i className="fab fa-facebook text-primary" aria-hidden="true"></i>
										<i className="fab fa-twitter text-primary" aria-hidden="true"></i>
										<i className="fas fa-envelope text-primary" aria-hidden="true"></i>
										<p className="mb-0">On the other hand, we denounce with right indignation and
											dislike imagesralized</p>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} xl={4}>
					<Card>
						<Card.Header className="border-bottom-0 pb-0">
							<Card.Title as='h3'>Top Countries</Card.Title>
						</Card.Header>
						<Card.Body className="p-0">
							<Table className="table card-table country-table mb-0">
								<tbody>
									<tr>
										<td className="wd-50"><img src={usFlag} alt="flags"
											className="flag wd-30 ht-20 flag-us mt-1" /></td>
										<td>USA
											<div className="progress progress-sm mt-1">
												<div className="progress-bar bg-primary wd-80"></div>
											</div>
										</td>
										<td className="wd-50 text-end"><span className="text-muted">$5235</span></td>
									</tr>
									<tr>
										<td className="wd-50"><img src={spainFlag} alt="flags"
											className="flag wd-30 ht-20 flag-us mt-1" /></td>
										<td>Spain
											<div className="progress progress-sm mt-1">
												<div className="progress-bar bg-pink wd-60"></div>
											</div>
										</td>
										<td className="text-end"><span className="text-muted">$3214</span></td>
									</tr>
									<tr>
										<td className="wd-50"><img src={germanyFlag}
											alt="flags" className="flag wd-30 ht-20 flag-us mt-1" /></td>
										<td>Germany
											<div className="progress progress-sm mt-1">
												<div className="progress-bar bg-success wd-30"></div>
											</div>
										</td>
										<td className="text-end"><span className="text-muted">$4123</span></td>
									</tr>
									<tr>
										<td className="wd-50"><img src={russiaFlag}
											alt="flags" className="flag wd-30 ht-20 flag-us mt-1" /></td>
										<td>Russia
											<div className="progress progress-sm mt-1">
												<div className="progress-bar bg-warning wd-50"></div>
											</div>
										</td>
										<td className="text-end"><span className="text-muted">$1543</span></td>
									</tr>
									<tr>
										<td className="wd-50"><img src={italyFlag} alt="flags"
											className="flag wd-30 ht-20 flag-us mt-1" /></td>
										<td>Italy
											<div className="progress progress-sm mt-1">
												<div className="progress-bar bg-teal wd-40"></div>
											</div>
										</td>
										<td className="text-end"><span className="text-muted ">$1543</span></td>
									</tr>
									<tr>
										<td className="wd-50"><img src={frenchFlag}
											alt="flags" className="flag wd-30 ht-20 flag-us mt-1" /></td>
										<td>French
											<div className="progress progress-sm mt-1">
												<div className="progress-bar bg-teal wd-40"></div>
											</div>
										</td>
										<td className="text-end"><span className="text-muted ">$1543</span></td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col xl={4} lg={6} md={12} sm={12}>
					<Card>
						<Card.Header className="bg-transparent pd-b-0 pd-t-20 bd-b-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-10">Overall Rating</Card.Title>
								{/* <i className="mdi mdi-dots-vertical"></i> */}
								<Dropdown>
									<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
										<i className="mdi mdi-dots-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{ margin: '0px' }}>
										<Dropdown.Item href="#/action-1">Short Rating</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Delete Rating</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-0">Opinion of a customer on the product in the form of
								ratings 5-star rating. <Link to="#">Learn more</Link></p>
						</Card.Header>
						{/* <!-- card-header --> */}
						<Card.Body className="pd-y-7">
							<div className="d-flex align-items-baseline">
								<h1 className="tx-30 mg-b-5 mg-r-5">4.8</h1>
								<p className="tx-11  mg-b-0"><span className="tx-medium tx-success">1.6% <i
									className="icon ion-md-arrow-up"></i></span></p>
							</div>
							<h6 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 tx-color-02 mg-b-15">Overall
								product rating by the customers.</h6>
							<Table className="table table-borderless mt-3 rating-table">
								<tbody>
									<tr>
										<td className="text-gray"><small className="me-1">1</small></td>
										<td className="text-gray"><span><i
											className="ion ion-md-star tx-18 text-warning"></i></span></td>
										<td className="w-100">

											<ProgressBar className="mt-2 progress-sm" variant='danger' now={30} />
										</td>
										<td className=""><small className="text-gray">7</small></td>
									</tr>
									<tr>
										<td className="text-gray"><small className="me-1">2</small></td>
										<td className="text-gray"><span><i
											className="ion ion-md-star tx-18 text-warning"></i></span></td>
										<td className="w-100">

											<ProgressBar className="mt-2 progress-sm" variant='primary' now={40} />
										</td>
										<td className=""><small className="text-gray">27</small></td>
									</tr>
									<tr>
										<td className="text-gray"><small className="me-1">3</small></td>
										<td className="text-gray"><span><i
											className="ion ion-md-star tx-18 text-warning"></i></span></td>
										<td className="w-100">

											<ProgressBar className="mt-2 progress-sm" variant='warning' now={50} />
										</td>
										<td className=""><small className="text-gray">64</small></td>
									</tr>
									<tr>
										<td className="text-gray"><small className="me-1">4</small></td>
										<td className="text-gray"><span><i
											className="ion ion-md-star tx-18 text-warning"></i></span></td>
										<td className="w-100">

											<ProgressBar className="mt-2 progress-sm" variant='teal' now={60} />

										</td>
										<td className=""><small className="text-gray">93</small></td>
									</tr>
									<tr>
										<td className="text-gray"><small className="me-1">5</small></td>
										<td className="text-gray"><span><i
											className="ion ion-md-star tx-18 text-warning"></i></span></td>
										<td className="w-100">

											<ProgressBar className="mt-2 progress-sm" variant='success' now={70} />
										</td>
										<td className=""><small className="text-gray">82</small></td>
									</tr>
								</tbody>
							</Table>
							<div className="wrapper d-flex justify-content-center image-group pb-3">
								<img src={faces1} alt="profile" className="img-xs rounded-circle" />
								<img src={faces2} alt="profile" className="img-xs rounded-circle" />
								<img src={faces13} alt="profile" className="img-xs rounded-circle" />
								<img src={faces14} alt="profile" className="img-xs rounded-circle" />
								<img src={faces5} alt="profile" className="img-xs rounded-circle" />
								<img src={faces16} alt="profile" className="img-xs rounded-circle" />

							</div>
						</Card.Body>
						{/* <!-- card-body --> */}
					</Card>
				</Col>
				<Col xl={4} lg={6} md={12} sm={12}>
					<Card className="order-list">
						<Card.Body>
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-10">Order Activity</Card.Title>
								{/* <i className="mdi mdi-dots-vertical"></i> */}
								<Dropdown>
									<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
										<i className="mdi mdi-dots-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{ margin: '0px' }}>
										<Dropdown.Item href="#/action-1">Edit Activity</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Delete Activity</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-3">Order Activity is ecommerce platforms to track the
								orders placed <Link to="#">Learn more</Link></p>
							<ul className="list list-noborders pb-0 mb-0">
								<li className="list-item">
									<img className="img-sm rounded-circle bg-warning d-flex align-items-center justify-content-center text-white"
										src={faces3} alt="Profile Image" />
									<div className=" ms-3">
										<h6 className="mb-1 fw-medium">Lottie Arnold</h6>
										<p className="mb-0 text-muted tx-13">#PRD-10250</p>
									</div>
									<div className="ms-auto d-flex">
										<img className="img-sm me-1" src={Ecom3}
											alt="thumb images" />
										<img className="img-sm" src={Ecom8}
											alt="thumb images" />
									</div>
								</li>
								<li className="list-item">
									<img className="img-sm rounded-circle bg-warning d-flex align-items-center justify-content-center text-white"
										src={faces9} alt="Profile Image" />
									<div className=" ms-3">
										<h6 className="mb-1 fw-medium">Alan Macedo</h6>
										<p className="mb-0 tx-13 text-muted">#PRD-10251</p>
									</div>
									<div className="ms-auto d-flex">
										<img className="img-sm me-1" src={Ecom4}
											alt="thumb images" />
										<img className="img-sm" src={Ecom5}
											alt="thumb images" />
									</div>
								</li>
								<li className="list-item">
									<img className="img-sm rounded-circle bg-warning d-flex align-items-center justify-content-center text-white"
										src={faces5} alt="Profile Image" />
									<div className=" ms-3">
										<h6 className="mb-1 fw-medium">Bruce Tran</h6>
										<p className="mb-0 text-muted tx-13">#PRD-10252</p>
									</div>
									<div className="ms-auto d-flex">
										<img className="img-sm me-1" src={Ecom6}
											alt="thumb images" />
										<img className="img-sm" src={Ecom7}
											alt="thumb images" />
									</div>
								</li>
								<li className="list-item">
									<img className="img-sm rounded-circle bg-warning d-flex align-items-center justify-content-center text-white"
										src={faces12} alt="Profile Image" />
									<div className=" ms-3">
										<h6 className="mb-1 fw-medium">Mina Harper</h6>
										<p className="mb-0 text-muted tx-13">#PRD-10253</p>
									</div>
									<div className="ms-auto d-flex">
										<img className="img-sm me-1" src={Ecom8}
											alt="thumb images" />
										<img className="img-sm" src={Ecom9}
											alt="thumb images" />
									</div>
								</li>
								<li className="list-item pb-0 mb-0">
									<img className="img-sm rounded-circle bg-warning d-flex align-items-center justify-content-center text-white"
										src={faces8} alt="Profile Image" />
									<div className=" ms-3">
										<h6 className="mb-1 fw-medium">Maria Quinn</h6>
										<p className="mb-0 text-muted tx-13">#PRD-10254</p>
									</div>
									<div className="ms-auto d-flex">
										<img className="img-sm me-1" src={Ecom2}
											alt="thumb images" />
										<img className="img-sm" src={Ecom1}
											alt="thumb images" />
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} xl={4} md={12} sm={12}>
					<Card className="overflow-hidden latest-tasks">
						<div className="card-body">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-10">Latest Task</Card.Title>
								{/* <i className="mdi mdi-dots-vertical"></i> */}
								<Dropdown>
									<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
										<i className="mdi mdi-dots-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{ margin: '0px' }}>
										<Dropdown.Item href="#/action-1">Edit User</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Delete Task</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-0">Order Activity is ecommerce platforms to track the
								orders placed <Link to="#">Learn more</Link></p>
						</div>
						<Tab.Container id="left-tabs-example" defaultActiveKey="tday">

							<Nav variant="pills" className="nav-tabs nav-tabs-line nav-tabs-line-brand nav-tabs-bold">
								<Nav.Item>
									<Nav.Link eventKey="tday">Today</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="week">Week</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="mnth">Month</Nav.Link>
								</Nav.Item>
							</Nav>
							<Card.Body className="pt-3">
								<Tab.Content>
									<Tab.Pane eventKey="tday">
										<div className="">
											<div className="tasks">
												<div className=" task-line primary">
													<Link to="#" className="span">
														XML Import & Export
													</Link>
													<div className="time">
														12:00 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' defaultChecked />
											</div>
											<div className="tasks">
												<div className="task-line pink">
													<Link to="#" className="span">
														Database Optimization
													</Link>
													<div className="time">
														02:13 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line success">
													<Link to="#" className="span">
														Create Wireframes
													</Link>
													<div className="time">
														06:20 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line warning">
													<Link to="#" className="span">
														Develop MVP
													</Link>
													<div className="time">
														10: 00 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks mb-0">
												<div className="task-line teal">
													<Link to="#" className="span">
														Design Evommerce
													</Link>
													<div className="time">
														10: 00 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="week">
										<div className="">
											<div className="tasks">
												<div className=" task-line teal">
													<Link to="#" className="span">
														Management meeting
													</Link>
													<div className="time">
														06:30 AM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line danger">
													<Link to="#" className="span">
														Connect API to pages
													</Link>
													<div className="time">
														08:00 AM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line purple">
													<Link to="#" className="span">
														Icon change in Redesign App
													</Link>
													<div className="time">
														11:20 AM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line warning">
													<Link to="#" className="span">
														Test new features in tablets
													</Link>
													<div className="time">
														02: 00 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line success">
													<Link to="#" className="span">
														Design Logo
													</Link>
													<div className="time">
														04: 00 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="mnth">
										<div className="">
											<div className="tasks">
												<div className=" task-line info">
													<Link to="#" className="span">
														Design a Landing Page
													</Link>
													<div className="time">
														06:12 AM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line danger">
													<Link to="#" className="span">
														Food Delivery Mobile Application
													</Link>
													<div className="time">
														3:00 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line warning">
													<Link to="#" className="span">
														Export Database values
													</Link>
													<div className="time">
														03:20 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line pink">
													<Link to="#" className="span">
														Write Simple Python Script
													</Link>
													<div className="time">
														04: 00 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
											<div className="tasks">
												<div className="task-line success">
													<Link to="#" className="span">
														Write Simple Anugalr Program
													</Link>
													<div className="time">
														05: 00 PM
													</div>
												</div>
												<Form.Check type='checkbox' label='' />
											</div>
										</div>
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Tab.Container>
					</Card>
				</Col>

				<Col lg={6} xl={4} md={12} sm={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4'>Latest Ratings and Reviews</Card.Title>
								{/* <i className="mdi mdi-dots-vertical"></i> */}
								<Dropdown>
									<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
										<i className="mdi mdi-dots-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{ margin: '0px' }}>
										<Dropdown.Item href="#/action-1">Edit comments</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Delete comments</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Card.Header>
						<p className="tx-12 tx-gray-500 mb-0 px-3">A review is an evaluation of a publication,
							service, or company .<Link to="#">Learn more</Link></p>
						<div className="rating-scroll ps ps--active-y">
							<div className="px-3 py-3 border-bottom">
								<div className="media mt-0">
									<div className="d-flex me-3">
										<Link to="#">
											<img className="media-object avatar brround w-7 h-7" alt="64x64"
												src={faces5} />
										</Link>
									</div>
									<div className="media-body">
										<div className="d-flex">
											<h6 className="mt-0 mb-0 fw-semibold ">Joanne Scott</h6>
											<span className="tx-14 ms-auto">
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star-half text-warning"></i>
											</span>
										</div>
										<div className="d-flex">
											<p className="tx-12 text-muted mb-0">long established fact..</p>
											<small className="ms-auto text-end">5 reviews</small>
										</div>

									</div>
								</div>
							</div>
							<div className="px-3 py-3 border-bottom">
								<div className="media mt-0">
									<div className="d-flex me-3">
										<Link to="#">
											<img className="media-object avatar brround w-7 h-7" alt="64x64"
												src={faces9} />
										</Link>
									</div>
									<div className="media-body">
										<div className="d-flex">
											<h6 className="mt-0 mb-0 fw-semibold ">Cristobal Sharp</h6>
											<span className="tx-14 ms-auto">
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star-half text-warning"></i>
												<i className="ion ion-md-star-outline text-warning"></i>
											</span>
										</div>
										<div className="d-flex">
											<p className="tx-12 text-muted mb-0">The point of using Lorem..</p>
											<small className="ms-auto text-end">5 reviews</small>
										</div>
									</div>
								</div>
							</div>
							<div className="px-3 py-3 border-bottom">
								<div className="media mt-0">
									<div className="d-flex me-3">
										<Link to="#">
											<img className="media-object avatar brround w-7 h-7" alt="64x64"
												src={faces4} />
										</Link>
									</div>
									<div className="media-body">
										<div className="d-flex">
											<h6 className="mt-0 mb-0 fw-semibold ">Velma Wellons </h6>
											<span className="tx-14 ms-auto">
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star-half text-warning"></i>
											</span>
										</div>
										<div className="d-flex">
											<p className="tx-12 text-muted mb-0">Various versions have..</p>
											<small className="ms-auto text-end">5 reviews</small>
										</div>

									</div>
								</div>
							</div>
							<div className="px-3 py-3 border-bottom">
								<div className="media mt-0">
									<div className="d-flex me-3">
										<Link to="#">
											<img className="media-object avatar brround w-7 h-7" alt="64x64"
												src={faces7} />
										</Link>
									</div>
									<div className="media-body">
										<div className="d-flex">
											<h6 className="mt-0 mb-0 fw-semibold ">Cathie Madonna </h6>
											<span className="tx-14 ms-auto">
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star-half text-warning"></i>
												<i className="ion ion-md-star-outline text-warning"></i>
											</span>
										</div>
										<div className="d-flex">
											<p className="tx-12 text-muted mb-0">long established fact..</p>
											<small className="ms-auto text-end">5 reviews</small>
										</div>

									</div>
								</div>
							</div>
							<div className="px-3 py-3 border-bottom">
								<div className="media mt-0">
									<div className="d-flex me-3">
										<Link to="#">
											<img className="media-object avatar brround w-7 h-7" alt="64x64"
												src={faces12} />
										</Link>
									</div>
									<div className="media-body">
										<div className="d-flex">
											<h6 className="mt-0 mb-0 fw-semibold ">Aurelio Dahmer </h6>
											<span className="tx-14 ms-auto">
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star-half text-warning"></i>
											</span>
										</div>
										<div className="d-flex">
											<p className="tx-12 text-muted mb-0">Ut enim ad minim veniam..</p>
											<small className="ms-auto text-end">5 reviews</small>
										</div>

									</div>
								</div>
							</div>
							<div className="px-3 py-3 border-bottom">
								<div className="media mt-0">
									<div className="d-flex me-3">
										<Link to="#">
											<img className="media-object avatar brround w-7 h-7" alt="64x64"
												src={faces13} />
										</Link>
									</div>
									<div className="media-body">
										<div className="d-flex">
											<h6 className="mt-0 mb-1 fw-semibold ">Cyrus Macarthur </h6>
											<span className="tx-14 ms-auto">
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star-half text-warning"></i>
												<i className="ion ion-md-star-outline text-warning"></i>
											</span>
										</div>
										<div className="d-flex">
											<p className="tx-12 text-muted mb-0">variations of passages..</p>
											<small className="ms-auto text-end">5 reviews</small>
										</div>

									</div>
								</div>
							</div>
							<div className="px-3 py-3 border-bottom">
								<div className="media mt-0">
									<div className="d-flex me-3">
										<Link to="#">
											<img className="media-object avatar brround w-7 h-7" alt="64x64"
												src={faces2} />
										</Link>
									</div>
									<div className="media-body">
										<div className="d-flex">
											<h6 className="mt-0 mb-1 fw-semibold ">Bernardo Sykes </h6>
											<span className="tx-14 ms-auto">
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star-half text-warning"></i>
												<i className="ion ion-md-star-outline text-warning"></i>
											</span>
										</div>
										<div className="d-flex">
											<p className="tx-12 text-muted mb-0">you are going to use..</p>
											<small className="ms-auto text-end">5 reviews</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col md={12} lg={6} xl={4}>
					<Card>
						<Card.Header className="bg-transparent pd-b-0 pd-t-20 bd-b-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-10">Sessions by Countries</Card.Title>
								{/* <i className="mdi mdi-dots-vertical"></i> */}
								<Dropdown>
									<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
										<i className="mdi mdi-dots-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{ margin: '0px' }}>
										<Dropdown.Item href="#/action-1">Edit Countries</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Delete Countries</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-0">session by country mean that the user is from the
								stated country or that the session is originating in the stated country. <Link
									to="#">Learn more</Link></p>
						</Card.Header>
						<Card.Body>
							<ul className="sales-session mb-0">
								<li>
									<div className="d-flex justify-content-between">
										<h6>1. United States </h6>
										<p className="fw-semibold mb-2">$273.12 <span
											className="text-muted fw-normal">(2.17%)</span></p>
									</div>

									<ProgressBar className="ht-5" variant='primary' now={60} />
								</li>
								<li>
									<div className="d-flex justify-content-between">
										<h6>2. United kingdom</h6>
										<p className="fw-semibold mb-2">$423.10 <span
											className="text-muted fw-normal">(12.43%)</span></p>
									</div>

									<ProgressBar className="ht-5" variant='info' now={70} />

								</li>
								<li>
									<div className="d-flex justify-content-between">
										<h6>3. Australia</h6>
										<p className="fw-semibold mb-2">$547.18 <span
											className="text-muted fw-normal">(3.14%)</span></p>
									</div>

									<ProgressBar className="ht-5" variant='danger' now={80} />
								</li>
								<li>
									<div className="d-flex justify-content-between">
										<h6>4. Canada</h6>
										<p className="fw-semibold mb-2">$728.32 <span
											className="text-muted fw-normal">(7.23%)</span></p>
									</div>

									<ProgressBar className="ht-5" variant='warning' now={50} />
								</li>
								<li>
									<div className="d-flex justify-content-between">
										<h6>5. Russia</h6>
										<p className="fw-semibold mb-2">$843.19 <span
											className="text-muted fw-normal">(1.83%)</span></p>
									</div>

									<ProgressBar className="ht-5" variant='success' now={40} />
								</li>
								<li className="mb-0 pb-1">
									<div className="d-flex justify-content-between">
										<h6>6. Japan</h6>
										<p className="fw-semibold mb-2">$562.19 <span
											className="text-muted fw-normal">(1.35%)</span></p>
									</div>

									<ProgressBar className="ht-5" variant='purple' now={60} />
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>

				<Col md={12} lg={6} xl={4} sm={12}>
					<Card>
						<Card.Header>
							<div className="d-flex justify-content-between">
								<Card.Title as='h4'>Browser Usage</Card.Title>
								{/* <i className="mdi mdi-dots-vertical"></i> */}
								<Dropdown>
									<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
										<i className="mdi mdi-dots-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{ margin: '0px' }}>
										<Dropdown.Item href="#/action-1">Edit browser</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Delete browser</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 tx-gray-500 mb-0">Tells you where your visitors originated from, such as
								search engines, social networks or website referrals. <Link to="#">Learn more</Link></p>
						</Card.Header>
						{/* <!-- card-header --> */}
						<Card.Body className="p-0">
							<div className="browser-stats">
								<div className="d-flex align-items-center item  border-bottom">
									<div className="d-flex">
										<img src={chrome} alt="img"
											className="ht-30 wd-30 me-2" />
										<div className="">
											<h6 className="">Chrome</h6>
											<span className="sub-text">Mozilla Foundation, Inc.</span>
										</div>
									</div>
									<div className="ms-auto my-auto">
										<div className="d-flex">
											<span className="me-4 my-auto">35,502</span>
											<span className="text-success fs-15"><i
												className="fe fe-arrow-up"></i>12.75%</span>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center item  border-bottom">
									<div className="d-flex">
										<img src={opera} alt="img"
											className="ht-30 wd-30 me-2" />
										<div className="">
											<h6 className="">Opera</h6>
											<span className="sub-text">Mozilla Foundation, Inc.</span>
										</div>
									</div>
									<div className="ms-auto my-auto">
										<div className="d-flex">
											<span className="me-4 my-auto">12,563</span>
											<span className="text-danger"><i className="fe fe-arrow-down"></i>15.12%</span>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center item  border-bottom">
									<div className="d-flex">
										<img src={edge} alt="img"
											className="ht-30 wd-30 me-2" />
										<div className="">
											<h6 className="">Edge</h6>
											<span className="sub-text">Mozilla Foundation, Inc.</span>
										</div>
									</div>
									<div className="ms-auto my-auto">
										<div className="d-flex">
											<span className="me-4 mt-1">25,364</span>
											<span className="text-success"><i className="fe fe-arrow-up"></i>24.37%</span>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center item  border-bottom">
									<div className="d-flex">
										<img src={firefox} alt="img"
											className="ht-30 wd-30 me-2" />
										<div className="">
											<h6 className="">Firefox</h6>
											<span className="sub-text">Mozilla Foundation, Inc.</span>
										</div>
									</div>
									<div className="ms-auto my-auto">
										<div className="d-flex">
											<span className="me-4 mt-1">14,635</span>
											<span className="text-success"><i className="fe fe-arrow-up"></i>15,63%</span>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center item border-bottom">
									<div className="d-flex">
										<img src={uc} alt="img"
											className="ht-30 wd-30 me-2" />
										<div className="">
											<h6 className="">Ucbrowser</h6>
											<span className="sub-text">Mozilla Foundation, Inc.</span>
										</div>
									</div>
									<div className="ms-auto my-auto">
										<div className="d-flex">
											<span className="me-4 mt-1">15,453</span>
											<span className="text-danger"><i className="fe fe-arrow-down"></i>23.70%</span>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center item">
									<div className="d-flex">
										<img src={safari} alt="img"
											className="ht-30 wd-30 me-2" />
										<div className="">
											<h6 className="">Safari</h6>
											<span className="sub-text">Mozilla Foundation, Inc.</span>
										</div>
									</div>
									<div className="ms-auto my-auto">
										<div className="d-flex">
											<span className="me-4 mt-1">35,657</span>
											<span className="text-danger"><i className="fe fe-arrow-down"></i>12.54%</span>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					{/* <!-- card --> */}
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- main-content closed --> */}
		</div>
	)
};

Widgets.propTypes = {};

Widgets.defaultProps = {};

export default Widgets;
