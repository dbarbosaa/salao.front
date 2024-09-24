import React, { useState } from 'react';
import styles from './Tabs.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Nav, Row, Tab, Form, Collapse } from 'react-bootstrap';

const Tabs = () => {

	//Show Code variables

	const [i, seti] = useState(false)
	const [i2, seti2] = useState(false)
	const [i3, seti3] = useState(false)
	const [i4, seti4] = useState(false)
	const [i5, seti5] = useState(false)

	return (
		<div className={styles.Tabs}>
			<Pageheader titles="Elements" active="Tabs" />
			{/* <!-- container --> */}

			{/* <!-- row opened --> */}
			<Row className="row-sm">
				<Col lg={12} md={12}>
					<Card className="" id="basic-alert">
						<Card.Body className="">
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Basic Style Tabs</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti(!i) }} />
							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
								your website apllication.</Card.Subtitle>
							<div className="text-wrap">
								<div className="example">
									<div className="panel panel-primary tabs-style-1">
										<Tab.Container id="left-tabs-example" defaultActiveKey="first">
											<Nav variant="pills" className="nav panel-tabs main-nav-line">
												<Nav.Item>
													<Nav.Link eventKey="first">Tab 01</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link eventKey="second">Tab 02</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link eventKey="three">Tab 03</Nav.Link>
												</Nav.Item>
											</Nav>
											<Tab.Content className='panel-body tabs-menu-body main-content-body-right border-top-0 border'>
												<Tab.Pane eventKey="first">
													At vero eos et accusamus et iusto odio dignissimos ducimus qui
													blanditiis praesentium voluptatum deleniti atque corrupti quos
													dolores et quas molestias excepturi sint occaecati cupiditate
													non provident, similique sunt in culpa qui officia deserunt
													mollitia animi, id est laborum et dolorum fuga. Et harum quidem
													rerum facilis est et expedita distinctio. Nam libero tempore,
													cum soluta nobis est eligendi optio cumque nihil impedit quo
													minus id quod maxime placeat facere possimus, omnis voluptas
													assumenda est, omnis dolor repellendus.
												</Tab.Pane>
												<Tab.Pane eventKey="second">
													<p>dignissimos ducimus qui blanditiis praesentium voluptatum
														deleniti atque corrupti quos dolores et quas molestias
														excepturi sint occaecati cupiditate non provident, similique
														sunt in culpa qui officia deserunt mollitia animi, id est
														laborum et dolorum fuga.</p>
													<p>Et harum quidem rerum facilis est et expedita distinctio. Nam
														libero tempore, cum soluta nobis est eligendi optio cumque
														nihil impedit quo minus id quod maxime</p>
													<p className="mb-0">placeat facere possimus, omnis voluptas
														assumenda est, omnis dolor repellendus.</p>
												</Tab.Pane>
												<Tab.Pane eventKey="three">
													<p>praesentium voluptatum deleniti atque corrupti quos dolores
														et quas molestias excepturi sint occaecati cupiditate non
														provident,</p>
													<p className="mb-0">similique sunt in culpa qui officia deserunt
														mollitia animi, id est laborum et dolorum fuga. Et harum
														quidem rerum facilis est et expedita distinctio. Nam libero
														tempore, cum soluta nobis est eligendi optio cumque nihil
														impedit quo minus id quod maxime placeat facere possimus,
														omnis voluptas assumenda est, omnis dolor repellendus.</p>
												</Tab.Pane>
											</Tab.Content>
										</Tab.Container>
									</div>
								</div>
								<Collapse in={i} className="">
									<pre>
										<code>
											{`
								<div className="example">
								<div className="panel panel-primary tabs-style-1">
									<Tab.Container id="left-tabs-example" defaultActiveKey="first">
										<Nav variant="pills" className="nav panel-tabs main-nav-line">
											<Nav.Item>
												<Nav.Link eventKey="first">Tab 01</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">Tab 02</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="three">Tab 03</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content className='panel-body tabs-menu-body main-content-body-right border-top-0 border'>
											<Tab.Pane eventKey="first">
												At vero eos et accusamus et iusto odio dignissimos ducimus qui
												blanditiis praesentium voluptatum deleniti atque corrupti quos
												dolores et quas molestias excepturi sint occaecati cupiditate
												non provident, similique sunt in culpa qui officia deserunt
												mollitia animi, id est laborum et dolorum fuga. Et harum quidem
												rerum facilis est et expedita distinctio. Nam libero tempore,
												cum soluta nobis est eligendi optio cumque nihil impedit quo
												minus id quod maxime placeat facere possimus, omnis voluptas
												assumenda est, omnis dolor repellendus.
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<p>dignissimos ducimus qui blanditiis praesentium voluptatum
													deleniti atque corrupti quos dolores et quas molestias
													excepturi sint occaecati cupiditate non provident, similique
													sunt in culpa qui officia deserunt mollitia animi, id est
													laborum et dolorum fuga.</p>
												<p>Et harum quidem rerum facilis est et expedita distinctio. Nam
													libero tempore, cum soluta nobis est eligendi optio cumque
													nihil impedit quo minus id quod maxime</p>
												<p className="mb-0">placeat facere possimus, omnis voluptas
													assumenda est, omnis dolor repellendus.</p>
											</Tab.Pane>
											<Tab.Pane eventKey="three">
												<p>praesentium voluptatum deleniti atque corrupti quos dolores
													et quas molestias excepturi sint occaecati cupiditate non
													provident,</p>
												<p className="mb-0">similique sunt in culpa qui officia deserunt
													mollitia animi, id est laborum et dolorum fuga. Et harum
													quidem rerum facilis est et expedita distinctio. Nam libero
													tempore, cum soluta nobis est eligendi optio cumque nihil
													impedit quo minus id quod maxime placeat facere possimus,
													omnis voluptas assumenda est, omnis dolor repellendus.</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col xl={12}>
					{/* <!-- div --> */}
					<Card className="mg-b-20" id="tabs-style2">
						<Card.Body className="">
							<div className="main-content-label mg-b-5 d-flex">
								Basic Style2 Tabs

							</div>
							<div className='d-grid d-sm-flex'>
								<p className="mg-b-20 mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
								</p>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti2(!i2) }} />
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="panel panel-primary tabs-style-2">
										<Tab.Container id="left-tabs-example" defaultActiveKey="first">
											<Nav variant="pills" className="nav panel-tabs main-nav-line">
												<Nav.Item>
													<Nav.Link eventKey="first">Tab 01</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link eventKey="second">Tab 02</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link eventKey="three">Tab 03</Nav.Link>
												</Nav.Item>
											</Nav>
											<Tab.Content className='panel-body tabs-menu-body main-content-body-right border'>
												<Tab.Pane eventKey="first">
													At vero eos et accusamus et iusto odio dignissimos ducimus qui
													blanditiis praesentium voluptatum deleniti atque corrupti quos
													dolores et quas molestias excepturi sint occaecati cupiditate
													non provident, similique sunt in culpa qui officia deserunt
													mollitia animi, id est laborum et dolorum fuga. Et harum quidem
													rerum facilis est et expedita distinctio. Nam libero tempore,
													cum soluta nobis est eligendi optio cumque nihil impedit quo
													minus id quod maxime placeat facere possimus, omnis voluptas
													assumenda est, omnis dolor repellendus.
												</Tab.Pane>
												<Tab.Pane eventKey="second">
													<p>dignissimos ducimus qui blanditiis praesentium voluptatum
														deleniti atque corrupti quos dolores et quas molestias
														excepturi sint occaecati cupiditate non provident, similique
														sunt in culpa qui officia deserunt mollitia animi, id est
														laborum et dolorum fuga.</p>
													<p>Et harum quidem rerum facilis est et expedita distinctio. Nam
														libero tempore, cum soluta nobis est eligendi optio cumque
														nihil impedit quo minus id quod maxime</p>
													<p className="mb-0">placeat facere possimus, omnis voluptas
														assumenda est, omnis dolor repellendus.</p>
												</Tab.Pane>
												<Tab.Pane eventKey="three">
													<p>praesentium voluptatum deleniti atque corrupti quos dolores
														et quas molestias excepturi sint occaecati cupiditate non
														provident,</p>
													<p className="mb-0">similique sunt in culpa qui officia deserunt
														mollitia animi, id est laborum et dolorum fuga. Et harum
														quidem rerum facilis est et expedita distinctio. Nam libero
														tempore, cum soluta nobis est eligendi optio cumque nihil
														impedit quo minus id quod maxime placeat facere possimus,
														omnis voluptas assumenda est, omnis dolor repellendus.</p>
												</Tab.Pane>
											</Tab.Content>
										</Tab.Container>
									</div>
								</div>
								<Collapse in={i2} className="">
									<pre>
										<code>
											{`
								<div className="example">
								<div className="panel panel-primary tabs-style-2">
									<Tab.Container id="left-tabs-example" defaultActiveKey="first">
										<Nav variant="pills" className="nav panel-tabs main-nav-line">
											<Nav.Item>
												<Nav.Link eventKey="first">Tab 01</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">Tab 02</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="three">Tab 03</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content className='panel-body tabs-menu-body main-content-body-right border'>
											<Tab.Pane eventKey="first">
												At vero eos et accusamus et iusto odio dignissimos ducimus qui
												blanditiis praesentium voluptatum deleniti atque corrupti quos
												dolores et quas molestias excepturi sint occaecati cupiditate
												non provident, similique sunt in culpa qui officia deserunt
												mollitia animi, id est laborum et dolorum fuga. Et harum quidem
												rerum facilis est et expedita distinctio. Nam libero tempore,
												cum soluta nobis est eligendi optio cumque nihil impedit quo
												minus id quod maxime placeat facere possimus, omnis voluptas
												assumenda est, omnis dolor repellendus.
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<p>dignissimos ducimus qui blanditiis praesentium voluptatum
													deleniti atque corrupti quos dolores et quas molestias
													excepturi sint occaecati cupiditate non provident, similique
													sunt in culpa qui officia deserunt mollitia animi, id est
													laborum et dolorum fuga.</p>
												<p>Et harum quidem rerum facilis est et expedita distinctio. Nam
													libero tempore, cum soluta nobis est eligendi optio cumque
													nihil impedit quo minus id quod maxime</p>
												<p className="mb-0">placeat facere possimus, omnis voluptas
													assumenda est, omnis dolor repellendus.</p>
											</Tab.Pane>
											<Tab.Pane eventKey="three">
												<p>praesentium voluptatum deleniti atque corrupti quos dolores
													et quas molestias excepturi sint occaecati cupiditate non
													provident,</p>
												<p className="mb-0">similique sunt in culpa qui officia deserunt
													mollitia animi, id est laborum et dolorum fuga. Et harum
													quidem rerum facilis est et expedita distinctio. Nam libero
													tempore, cum soluta nobis est eligendi optio cumque nihil
													impedit quo minus id quod maxime placeat facere possimus,
													omnis voluptas assumenda est, omnis dolor repellendus.</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- /div --> */}

				<Col xl={12}>
					{/* <!-- div --> */}
					<Card className="mg-b-20" id="tabs-style3">

						<Card.Body>
							<div className="main-content-label mg-b-5">
								Basic Style3 Tabs
							</div>
							<div className='d-grid d-sm-flex'>
								<p className="mg-b-20 mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
								</p>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti3(!i3) }} />

							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="panel panel-primary tabs-style-3">
										<Tab.Container id="left-tabs-example" defaultActiveKey="first">
											<div className="tabs-menu ">
												<Nav variant="" className=" nav panel-tabs">
													<Nav.Item>
														<Nav.Link eventKey="first"><i className="fa fa-laptop"></i> Tab Style 01</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="second"><i className="fa fa-cube"></i> Tab Style 02</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="third"><i className="fa fa-cogs"></i> Tab Style 03</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="fourth"><i className="fa fa-tasks"></i> Tab Style 04</Nav.Link>
													</Nav.Item>
												</Nav>
											</div>
											<Tab.Content className='panel-body tabs-menu-body'>
												<Tab.Pane eventKey="first">
													<p>At vero eos et accusamus et iusto odio dignissimos ducimus
														qui blanditiis praesentium voluptatum deleniti atque
														corrupti quos dolores et quas molestias excepturi sint
														occaecati cupiditate non provident, similique sunt in culpa
														qui officia deserunt mollitia animi, id est laborum et
														dolorum fuga.</p>
													<p className="mb-0">Et harum quidem rerum facilis est et expedita
														distinctio. Nam libero tempore, cum soluta nobis est
														eligendi optio cumque nihil impedit quo minus id quod maxime
														placeat facere possimus, omnis voluptas assumenda est, omnis
														dolor repellendus. </p>
												</Tab.Pane>
												<Tab.Pane eventKey="second">
													<p> Et harum quidem rerum facilis est et expedita distinctio.
														Nam libero tempore, cum soluta nobis est eligendi optio
														cumque nihil impedit quo minus id quod maxime placeat facere
														possimus, omnis voluptas assumenda est, omnis dolor
														repellendus. </p>
													<p className="mb-0">At vero eos et accusamus et iusto odio
														dignissimos ducimus qui blanditiis praesentium voluptatum
														deleniti atque corrupti quos dolores et quas molestias
														excepturi sint occaecati cupiditate non provident, similique
														sunt in culpa qui officia deserunt mollitia animi, id est
														laborum et dolorum fuga.</p>
												</Tab.Pane>
												<Tab.Pane eventKey="third">
													<p>Temporibus autem quibusdam et aut officiis debitis aut rerum
														necessitatibus saepe eveniet ut et voluptates repudiandae
														sint et molestiae non recusandae</p>
													<p className="mb-0">Et harum quidem rerum facilis est et expedita
														distinctio. Nam libero tempore, cum soluta nobis est
														eligendi optio cumque nihil impedit quo minus id quod maxime
														placeat facere possimus, omnis voluptas assumenda est, omnis
														dolor repellendus. </p>
												</Tab.Pane>
												<Tab.Pane eventKey="fourth">
													<p>On the other hand, we denounce with righteous indignation and
														dislike men who are so beguiled and demoralized by the
														charms of pleasure of the moment, so blinded by desire</p>
													<p className="mb-0">Nam libero tempore, cum soluta nobis est
														eligendi optio cumque nihil impedit quo minus id quod maxime
														placeat facere possimus, omnis voluptas assumenda est, omnis
														dolor repellendus. Temporibus autem quibusdam et aut
														officiis debitis aut rerum necessitatibus </p>
												</Tab.Pane>
											</Tab.Content>
										</Tab.Container>
									</div>
								</div>
								<Collapse in={i3} className="">
									<pre>
										<code>
											{`
						<div className="example">
						<div className="panel panel-primary tabs-style-3">
							<Tab.Container id="left-tabs-example" defaultActiveKey="first">
								<div className="tabs-menu ">
									<Nav variant="" className=" nav panel-tabs">
										<Nav.Item>
											<Nav.Link eventKey="first"><i className="fa fa-laptop"></i> Tab Style 01</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="second"><i className="fa fa-cube"></i> Tab Style 02</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="third"><i className="fa fa-cogs"></i> Tab Style 03</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="fourth"><i className="fa fa-tasks"></i> Tab Style 04</Nav.Link>
										</Nav.Item>
									</Nav>
								</div>
								<Tab.Content className='panel-body tabs-menu-body border-top-0'>
									<Tab.Pane eventKey="first">
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus
											qui blanditiis praesentium voluptatum deleniti atque
											corrupti quos dolores et quas molestias excepturi sint
											occaecati cupiditate non provident, similique sunt in culpa
											qui officia deserunt mollitia animi, id est laborum et
											dolorum fuga.</p>
										<p className="mb-0">Et harum quidem rerum facilis est et expedita
											distinctio. Nam libero tempore, cum soluta nobis est
											eligendi optio cumque nihil impedit quo minus id quod maxime
											placeat facere possimus, omnis voluptas assumenda est, omnis
											dolor repellendus. </p>
									</Tab.Pane>
									<Tab.Pane eventKey="second">
										<p> Et harum quidem rerum facilis est et expedita distinctio.
											Nam libero tempore, cum soluta nobis est eligendi optio
											cumque nihil impedit quo minus id quod maxime placeat facere
											possimus, omnis voluptas assumenda est, omnis dolor
											repellendus. </p>
										<p className="mb-0">At vero eos et accusamus et iusto odio
											dignissimos ducimus qui blanditiis praesentium voluptatum
											deleniti atque corrupti quos dolores et quas molestias
											excepturi sint occaecati cupiditate non provident, similique
											sunt in culpa qui officia deserunt mollitia animi, id est
											laborum et dolorum fuga.</p>
									</Tab.Pane>
									<Tab.Pane eventKey="third">
										<p>Temporibus autem quibusdam et aut officiis debitis aut rerum
											necessitatibus saepe eveniet ut et voluptates repudiandae
											sint et molestiae non recusandae</p>
										<p className="mb-0">Et harum quidem rerum facilis est et expedita
											distinctio. Nam libero tempore, cum soluta nobis est
											eligendi optio cumque nihil impedit quo minus id quod maxime
											placeat facere possimus, omnis voluptas assumenda est, omnis
											dolor repellendus. </p>
									</Tab.Pane>
									<Tab.Pane eventKey="fourth">
										<p>On the other hand, we denounce with righteous indignation and
											dislike men who are so beguiled and demoralized by the
											charms of pleasure of the moment, so blinded by desire</p>
										<p className="mb-0">Nam libero tempore, cum soluta nobis est
											eligendi optio cumque nihil impedit quo minus id quod maxime
											placeat facere possimus, omnis voluptas assumenda est, omnis
											dolor repellendus. Temporibus autem quibusdam et aut
											officiis debitis aut rerum necessitatibus </p>
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</div>
					</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- /div --> */}

				<Col xl={12}>
					{/* <!-- div --> */}
					<Card id="tabs-style4">

						<Card.Body>
							<div className="main-content-label mg-b-5">
								Vertical Tabs
							</div>
							<div className='d-grid d-sm-flex'>
								<p className="mg-b-20 mg-b-20">It is Very Easy to Customize and it uses in your website apllication.
								</p>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti4(!i4) }} />
							</div>


							<div className="text-wrap">
								<div className="example">
									<div className="d-md-flex">
										<Tab.Container id="left-tabs-example" defaultActiveKey="first">
											<div className="panel panel-primary tabs-style-4">
												<div className="tab-menu-heading">
													<div className="tabs-menu">
														<Nav variant="" className="nav panel-tabs me-3">
															<Nav.Item>
																<Nav.Link eventKey="first"><i className="fa fa-laptop me-2"></i> Tab Style 01</Nav.Link>
															</Nav.Item>
															<Nav.Item>
																<Nav.Link eventKey="second"><i className="fa fa-cube me-2"></i> Tab Style 02</Nav.Link>
															</Nav.Item>
															<Nav.Item>
																<Nav.Link eventKey="third"><i className="fa fa-cogs me-2"></i> Tab Style 03</Nav.Link>
															</Nav.Item>
															<Nav.Item>
																<Nav.Link eventKey="fourth"><i className="fa fa-tasks me-2"></i> Tab Style 04</Nav.Link>
															</Nav.Item>
														</Nav>
													</div>
												</div>
											</div>
											<div className="tabs-style-4">
												<Tab.Content className='panel-body tabs-menu-body'>
													<Tab.Pane eventKey="first">
														<p>At vero eos et accusamus et iusto odio dignissimos
															ducimus qui blanditiis praesentium voluptatum deleniti
															atque corrupti quos dolores et quas molestias excepturi
															sint occaecati cupiditate non provident, similique sunt
															in culpa qui officia deserunt mollitia animi, id est
															laborum et dolorum fuga.</p>
														<p>At vero eos et accusamus et iusto odio dignissimos
															ducimus qui blanditiis praesentium voluptatum deleniti
															atque corrupti quos dolores et quas molestias excepturi
															sint occaecati cupiditate non provident, similique sunt
															in culpa qui officia deserunt mollitia animi, id est
															laborum et dolorum fuga.</p>
														<p className="mb-0">Et harum quidem rerum facilis est et
															expedita distinctio. Nam libero tempore, cum soluta
															nobis est eligendi optio cumque nihil impedit quo minus
															id quod maxime placeat facere possimus, omnis voluptas
															assumenda est, omnis dolor repellendus. </p>
													</Tab.Pane>
													<Tab.Pane eventKey="second">
														<p> Et harum quidem rerum facilis est et expedita
															distinctio. Nam libero tempore, cum soluta nobis est
															eligendi optio cumque nihil impedit quo minus id quod
															maxime placeat facere possimus, omnis voluptas assumenda
															est, omnis dolor repellendus. </p>
														<p> Et harum quidem rerum facilis est et expedita
															distinctio. Nam libero tempore, cum soluta nobis est
															eligendi optio cumque nihil impedit quo minus id quod
															maxime placeat facere possimus, omnis voluptas assumenda
															est, omnis dolor repellendus. </p>
														<p className="mb-0">At vero eos et accusamus et iusto odio
															dignissimos ducimus qui blanditiis praesentium
															voluptatum deleniti atque corrupti quos dolores et quas
															molestias excepturi sint occaecati cupiditate non
															provident, similique sunt in culpa qui officia deserunt
															mollitia animi, id est laborum et dolorum fuga.</p>
													</Tab.Pane>
													<Tab.Pane eventKey="third">
														<p>Temporibus autem quibusdam et aut officiis debitis aut
															rerum necessitatibus saepe eveniet ut et voluptates
															repudiandae sint et molestiae non recusandae quod maxime
															placeat facere possimus, omnis voluptas assumenda est,
															omnis dolor repellendus.</p>
														<p>Temporibus autem quibusdam et aut officiis debitis aut
															rerum necessitatibus saepe eveniet ut et voluptates
															repudiandae sint et molestiae non recusandae quod maxime
															placeat facere possimus, omnis voluptas assumenda est,
															omnis dolor repellendus.</p>
														<p className="mb-0">Et harum quidem rerum facilis est et
															expedita distinctio. Nam libero tempore, cum soluta
															nobis est eligendi optio cumque nihil impedit quo minus
															id quod maxime placeat facere possimus, omnis voluptas
															assumenda est, omnis dolor repellendus. </p>
													</Tab.Pane>
													<Tab.Pane eventKey="fourth">
														<p>On the other hand, we denounce with righteous indignation
															and dislike men who are so beguiled and demoralized by
															the charms of pleasure of the moment, so blinded by
															desire quod maxime placeat facere possimus, omnis
															voluptas assumenda est, omnis dolor repellendus.</p>
														<p>On the other hand, we denounce with righteous indignation
															and dislike men who are so beguiled and demoralized by
															the charms of pleasure of the moment, so blinded by
															desire quod maxime placeat facere possimus, omnis
															voluptas assumenda est, omnis dolor repellendus.</p>
														<p className="mb-0">Nam libero tempore, cum soluta nobis est
															eligendi optio cumque nihil impedit quo minus id quod
															maxime placeat facere possimus, omnis voluptas assumenda
															est, omnis dolor repellendus. Temporibus autem quibusdam
															et aut officiis debitis aut rerum necessitatibus </p>
													</Tab.Pane>
												</Tab.Content>
											</div>
										</Tab.Container>
									</div>
								</div>
								<Collapse in={i4} className="">
									<pre>
										<code>
											{`
								<div className="example">
								<div className="d-md-flex">
									<Tab.Container id="left-tabs-example" defaultActiveKey="first" className="">
										<div className="panel panel-primary tabs-style-4">
											<div className="tab-menu-heading">
												<div className="tabs-menu">
													<Nav variant="" className="nav panel-tabs me-3">
														<Nav.Item>
															<Nav.Link eventKey="first"><i className="fa fa-laptop"></i> Tab Style 01</Nav.Link>
														</Nav.Item>
														<Nav.Item>
															<Nav.Link eventKey="second"><i className="fa fa-cube"></i> Tab Style 02</Nav.Link>
														</Nav.Item>
														<Nav.Item>
															<Nav.Link eventKey="third"><i className="fa fa-cogs"></i> Tab Style 03</Nav.Link>
														</Nav.Item>
														<Nav.Item>
															<Nav.Link eventKey="fourth"><i className="fa fa-tasks"></i> Tab Style 04</Nav.Link>
														</Nav.Item>
													</Nav>
												</div>
											</div>
										</div>
										<div className="tabs-style-4">
											<Tab.Content className='panel-body tabs-menu-body'>
												<Tab.Pane eventKey="first">
													<p>At vero eos et accusamus et iusto odio dignissimos
														ducimus qui blanditiis praesentium voluptatum deleniti
														atque corrupti quos dolores et quas molestias excepturi
														sint occaecati cupiditate non provident, similique sunt
														in culpa qui officia deserunt mollitia animi, id est
														laborum et dolorum fuga.</p>
													<p>At vero eos et accusamus et iusto odio dignissimos
														ducimus qui blanditiis praesentium voluptatum deleniti
														atque corrupti quos dolores et quas molestias excepturi
														sint occaecati cupiditate non provident, similique sunt
														in culpa qui officia deserunt mollitia animi, id est
														laborum et dolorum fuga.</p>
													<p className="mb-0">Et harum quidem rerum facilis est et
														expedita distinctio. Nam libero tempore, cum soluta
														nobis est eligendi optio cumque nihil impedit quo minus
														id quod maxime placeat facere possimus, omnis voluptas
														assumenda est, omnis dolor repellendus. </p>
												</Tab.Pane>
												<Tab.Pane eventKey="second">
													<p> Et harum quidem rerum facilis est et expedita
														distinctio. Nam libero tempore, cum soluta nobis est
														eligendi optio cumque nihil impedit quo minus id quod
														maxime placeat facere possimus, omnis voluptas assumenda
														est, omnis dolor repellendus. </p>
													<p> Et harum quidem rerum facilis est et expedita
														distinctio. Nam libero tempore, cum soluta nobis est
														eligendi optio cumque nihil impedit quo minus id quod
														maxime placeat facere possimus, omnis voluptas assumenda
														est, omnis dolor repellendus. </p>
													<p className="mb-0">At vero eos et accusamus et iusto odio
														dignissimos ducimus qui blanditiis praesentium
														voluptatum deleniti atque corrupti quos dolores et quas
														molestias excepturi sint occaecati cupiditate non
														provident, similique sunt in culpa qui officia deserunt
														mollitia animi, id est laborum et dolorum fuga.</p>
												</Tab.Pane>
												<Tab.Pane eventKey="third">
													<p>Temporibus autem quibusdam et aut officiis debitis aut
														rerum necessitatibus saepe eveniet ut et voluptates
														repudiandae sint et molestiae non recusandae quod maxime
														placeat facere possimus, omnis voluptas assumenda est,
														omnis dolor repellendus.</p>
													<p>Temporibus autem quibusdam et aut officiis debitis aut
														rerum necessitatibus saepe eveniet ut et voluptates
														repudiandae sint et molestiae non recusandae quod maxime
														placeat facere possimus, omnis voluptas assumenda est,
														omnis dolor repellendus.</p>
													<p className="mb-0">Et harum quidem rerum facilis est et
														expedita distinctio. Nam libero tempore, cum soluta
														nobis est eligendi optio cumque nihil impedit quo minus
														id quod maxime placeat facere possimus, omnis voluptas
														assumenda est, omnis dolor repellendus. </p>
												</Tab.Pane>
												<Tab.Pane eventKey="fourth">
													<p>On the other hand, we denounce with righteous indignation
														and dislike men who are so beguiled and demoralized by
														the charms of pleasure of the moment, so blinded by
														desire quod maxime placeat facere possimus, omnis
														voluptas assumenda est, omnis dolor repellendus.</p>
													<p>On the other hand, we denounce with righteous indignation
														and dislike men who are so beguiled and demoralized by
														the charms of pleasure of the moment, so blinded by
														desire quod maxime placeat facere possimus, omnis
														voluptas assumenda est, omnis dolor repellendus.</p>
													<p className="mb-0">Nam libero tempore, cum soluta nobis est
														eligendi optio cumque nihil impedit quo minus id quod
														maxime placeat facere possimus, omnis voluptas assumenda
														est, omnis dolor repellendus. Temporibus autem quibusdam
														et aut officiis debitis aut rerum necessitatibus </p>
												</Tab.Pane>
											</Tab.Content>
										</div>
									</Tab.Container>
								</div>
							</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
						{/* <!-- /div --> */}
					</Card>
				</Col>
			</Row>
			<Row className="row-sm">
				<Col xl={12}>
					{/* <!-- div --> */}
					<Card id="tabs-style4">

						<Card.Body>
							<div className="main-content-label mg-b-5">
								Horizontal Tabs-right-side
							</div>
							<div className='d-grid d-sm-flex'>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti5(!i5) }} />

							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="panel panel-primary">
										<div className="tab_wrapper right_tab right_side">
											<Tab.Container id="left-tabs-example" defaultActiveKey="first">
												<Row>
													<Col sm={9}>
														<Tab.Content>
															<Tab.Pane eventKey="first">
																<p className="mb-1 ">
																	Circumstances occur in which toil and pain can
																	procure him some great pleasure. To take a
																	trivial example, which of us ever undertakes
																	laborious physical exercise, Nor again is there
																	anyone who loves or pursues or desires to obtain
																	pain of itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences,To take a trivial
																	example, which of us ever undertakes laborious
																	physical exercise, Nor again is there anyone who
																	loves or pursues or desires to obtain pain of
																	itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences, or one ?
																</p>
															</Tab.Pane>
															<Tab.Pane eventKey="second">
																<p className="mb-1 ">
																	Circumstances occur in which toil and pain can
																	procure him some great pleasure. To take a
																	trivial example, which of us ever undertakes
																	laborious physical exercise, Nor again is there
																	anyone who loves or pursues or desires to obtain
																	pain of itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences,To take a trivial
																	example, which of us ever undertakes laborious
																	physical exercise, Nor again is there anyone who
																	loves or pursues or desires to obtain pain of
																	itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences, or one ?
																</p>
															</Tab.Pane>
															<Tab.Pane eventKey="third">
																<p className="mb-1 ">
																	Circumstances occur in which toil and pain can
																	procure him some great pleasure. To take a
																	trivial example, which of us ever undertakes
																	laborious physical exercise, Nor again is there
																	anyone who loves or pursues or desires to obtain
																	pain of itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences,To take a trivial
																	example, which of us ever undertakes laborious
																	physical exercise, Nor again is there anyone who
																	loves or pursues or desires to obtain pain of
																	itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences, or one ?
																</p>
															</Tab.Pane>
														</Tab.Content>
													</Col>
													<Col className='col-12' sm={3}>
														<Nav variant="pills" className="flex-column tab_list">
															<Nav.Item className='flex-grow-1'>
																<Nav.Link eventKey="first" className='w-100'>Tab 1</Nav.Link>
															</Nav.Item>
															<Nav.Item className='flex-grow-1'>
																<Nav.Link eventKey="second" className='w-100'>Tab 2</Nav.Link>
															</Nav.Item>
															<Nav.Item className='flex-grow-1'>
																<Nav.Link eventKey="third" className='w-100'>Tab 3</Nav.Link>
															</Nav.Item>
														</Nav>
													</Col>
												</Row>
											</Tab.Container>
										</div>
									</div>
								</div>
								<Collapse in={i5} className="">
									<pre>
										<code>
											{`
							<div className="example">
									<div className="panel panel-primary">
										<div className="tab_wrapper right_tab right_side">
											<Tab.Container id="left-tabs-example" defaultActiveKey="first">
												<Row>
													<Col sm={9}>
														<Tab.Content>
															<Tab.Pane eventKey="first">
																<p className="mb-1 ">
																	Circumstances occur in which toil and pain can
																	procure him some great pleasure. To take a
																	trivial example, which of us ever undertakes
																	laborious physical exercise, Nor again is there
																	anyone who loves or pursues or desires to obtain
																	pain of itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences,To take a trivial
																	example, which of us ever undertakes laborious
																	physical exercise, Nor again is there anyone who
																	loves or pursues or desires to obtain pain of
																	itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences, or one ?
																</p>
															</Tab.Pane>
															<Tab.Pane eventKey="second">
																<p className="mb-1 ">
																	Circumstances occur in which toil and pain can
																	procure him some great pleasure. To take a
																	trivial example, which of us ever undertakes
																	laborious physical exercise, Nor again is there
																	anyone who loves or pursues or desires to obtain
																	pain of itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences,To take a trivial
																	example, which of us ever undertakes laborious
																	physical exercise, Nor again is there anyone who
																	loves or pursues or desires to obtain pain of
																	itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences, or one ?
																</p>
															</Tab.Pane>
															<Tab.Pane eventKey="third">
																<p className="mb-1 ">
																	Circumstances occur in which toil and pain can
																	procure him some great pleasure. To take a
																	trivial example, which of us ever undertakes
																	laborious physical exercise, Nor again is there
																	anyone who loves or pursues or desires to obtain
																	pain of itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences,To take a trivial
																	example, which of us ever undertakes laborious
																	physical exercise, Nor again is there anyone who
																	loves or pursues or desires to obtain pain of
																	itself, because it is pain, but because
																	occasionally except to obtain some advantage
																	from it? But who has any right to find fault
																	with a man who chooses to enjoy a pleasure that
																	has no annoying consequences, or one ?
																</p>
															</Tab.Pane>
														</Tab.Content>
													</Col>
													<Col className='col-12' sm={3}>
														<Nav variant="pills" className="flex-column tab_list">
															<Nav.Item className='flex-grow-1'>
																<Nav.Link eventKey="first" className='w-100'>Tab 1</Nav.Link>
															</Nav.Item>
															<Nav.Item className='flex-grow-1'>
																<Nav.Link eventKey="second" className='w-100'>Tab 2</Nav.Link>
															</Nav.Item>
															<Nav.Item className='flex-grow-1'>
																<Nav.Link eventKey="third" className='w-100'>Tab 3</Nav.Link>
															</Nav.Item>
														</Nav>
													</Col>
												</Row>
											</Tab.Container>
										</div>
									</div>
								</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
							{/* <!-- /div --> */}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
		// <!-- /row -->
		// <!-- Container closed -->
	)
};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
