import React from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Navigation.module.scss';

const Navigation = () => {

	return (

		<div className={styles.Navigation}>
			<Pageheader titles="Elements" active="Navigation" />
			{/* <!-- container --> */}

			<Row>
				<Col xl={12} lg={12}>
					<Card className="custom-card" id="basic">
						<Card.Body>
							<div>
								<Card.Title as='h3' className="mb-1">Basic Navigation</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below is an example of a basic navigation</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="p-3 bg-light text-dark border">
										<Nav defaultActiveKey="link-12" className="nav main-nav flex-column flex-md-row">
											<Nav.Link eventKey="link-12" className="" href="#">Home</Nav.Link>
											<Nav.Link eventKey="link-13" className="" href="#">About</Nav.Link>
											<Nav.Link eventKey="link-14" className="" href="#">Pages</Nav.Link>
											<Nav.Link eventKey="link-15" className="" href="#">Custom</Nav.Link>
										</Nav>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="vertical">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Vertical Navigation</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below is an example of a basic navigation in a vertical mode</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="p-3 bg-light text-dark border">
										<Nav defaultActiveKey="link-12" className="nav main-nav-column">
											<Nav.Link eventKey="link-12" className="" href="#">Home</Nav.Link>
											<Nav.Link eventKey="link-13" className="" href="#">About</Nav.Link>
											<Nav.Link eventKey="link-14" className="" href="#">Pages</Nav.Link>
											<Nav.Link eventKey="link-15" className="" href="#">Custom</Nav.Link>
										</Nav>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="pill">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Pills Navigation</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below is an example of a pill navigation</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="p-3 bg-light text-dark border">
										<Nav defaultActiveKey="link-12" className="nav nav-pills">
											<Nav.Link eventKey="link-12" href="#">Home</Nav.Link>
											<Nav.Link eventKey="link-13" href="#">About</Nav.Link>
											<Nav.Link eventKey="link-14" href="#">Pages</Nav.Link>
											<Nav.Link eventKey="link-15" href="#">Custom</Nav.Link>
										</Nav>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="verticallpill">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Vertical Pills Navigation</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below is an example of a pill navigation in vertical mode</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="p-3 bg-light text-dark border">
										<Nav defaultActiveKey="link-12" className="nav nav-pills flex-column">
											<Nav.Link eventKey="link-12" href="#">Home</Nav.Link>
											<Nav.Link eventKey="link-13" href="#">About</Nav.Link>
											<Nav.Link eventKey="link-14" href="#">Pages</Nav.Link>
											<Nav.Link eventKey="link-15" href="#">Custom</Nav.Link>
										</Nav>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="hori">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Horizontal Alignment</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">A navigation with center and right in which left is the default.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="p-3 bg-light text-dark mb-3">
										<Nav defaultActiveKey="link-12" className="nav main-nav flex-column flex-md-row justify-content-center">
											<Nav.Link eventKey="link-12" href="#">Home</Nav.Link>
											<Nav.Link eventKey="link-13" href="#">About</Nav.Link>
											<Nav.Link eventKey="link-14" href="#">Pages</Nav.Link>
											<Nav.Link eventKey="link-15" href="#">Custom</Nav.Link>
										</Nav>
									</div>
									<div className="p-3 bg-light text-dark border">
										<Nav defaultActiveKey="link-12" className="nav main-nav flex-column flex-md-row justify-content-end">
											<Nav.Link eventKey="link-12" href="#">Home</Nav.Link>
											<Nav.Link eventKey="link-13" href="#">About</Nav.Link>
											<Nav.Link eventKey="link-14" href="#">Pages</Nav.Link>
											<Nav.Link eventKey="link-15" href="#">Custom</Nav.Link>
										</Nav>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="colored">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Colored Nav Variations</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">A navigation with colored nav that wrapped the navigation.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="p-3 bg-primary mb-3">
										<Nav defaultActiveKey="link-12" className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
											<Nav.Link eventKey="link-12" href="#">Home</Nav.Link>
											<Nav.Link eventKey="link-13" href="#">About</Nav.Link>
											<Nav.Link eventKey="link-14" href="#">Pages</Nav.Link>
											<Nav.Link eventKey="link-15" href="#">Custom</Nav.Link>
										</Nav>
									</div>
									<div className="p-3 bg-secondary">
										<Nav defaultActiveKey="link-12" className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
											<Nav.Link eventKey="link-12" href="#">Home</Nav.Link>
											<Nav.Link eventKey="link-13" href="#">About</Nav.Link>
											<Nav.Link eventKey="link-14" href="#">Pages</Nav.Link>
											<Nav.Link eventKey="link-15" href="#">Custom</Nav.Link>
										</Nav>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="underline">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Underline Navigation</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below is a type of navigation that have a line at the bottom of active link.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="p-3 bg-light text-dark border">
										<Nav defaultActiveKey="link-12" className="nav main-nav-line flex-column flex-md-row">
											<Nav.Link eventKey="link-12" href="#">Home</Nav.Link>
											<Nav.Link eventKey="link-13" href="#">About</Nav.Link>
											<Nav.Link eventKey="link-14" href="#">Pages</Nav.Link>
											<Nav.Link eventKey="link-15" href="#">Custom</Nav.Link>
										</Nav>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="tab">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Simple Tab Navigation</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below is a tab navigation that have only few links.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="border">
										<Tab.Container defaultActiveKey="first">
											<div className="bg-gray-100 nav-bg">
												<Nav variant="" className="nav nav-tabs d-sm-flex d-block">
													<Nav.Item>
														<Nav.Link eventKey="first">Home</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="second">About</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="three">Contact</Nav.Link>
													</Nav.Item>
												</Nav>
											</div>
											<Tab.Content className='card-body'>
												<Tab.Pane eventKey="first" id="tabCont1">
													Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
													impedit quo minus id quod maxime placeat facere possimus, omnis
													voluptas assumenda est, omnis dolor repellendus.
												</Tab.Pane>
												<Tab.Pane eventKey="second">
													At vero eos et accusamus et iusto odio dignissimos ducimus qui
													blanditiis praesentium voluptatum deleniti atque corrupti quos
													dolores et quas molestias excepturi sint occaecati cupiditate non
													provident, similique sunt in culpa qui officia deserunt mollitia
													animi, id est laborum et dolorum fuga.
												</Tab.Pane>
												<Tab.Pane eventKey="three">
													Itaque earum rerum hic tenetur a sapiente delectus, ut aut
													reiciendis voluptatibus maiores alias consequatur aut perferendis
													doloribus asperiores repellat.
												</Tab.Pane>
											</Tab.Content>
										</Tab.Container>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
