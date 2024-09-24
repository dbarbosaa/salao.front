import React, { useState } from 'react';
import styles from './Search.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Row, Col, Card, Nav, InputGroup, FormControl, Button, Pagination, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const tabData =[
	{Type:'All', eventKey:'all'},
	{Type:'Images', eventKey:'images'},
	{Type:'Books', eventKey:'books'},
	{Type:'News', eventKey:'news'},
	{Type:'Videos', eventKey:'videos'},
]


const Search = () => {

	const [inputType, setInputType] = useState("all")

	return (
	<div className={styles.Search}>
		<Pageheader titles="Advanced ui" active="Search" />
		{/* <!-- container --> */}


		{/* <!-- row --> */}
		<Row>
			<Col sm={12} md={12}>
				<Tab.Container id="left-tabs-example" defaultActiveKey="all">
					<Card className="custom-card">
						<Card.Body className="pb-0">
							<InputGroup className="mb-2">
								<FormControl type="text" className="rounded-3 br-te-0 br-be-0" placeholder="Searching....." />
								<InputGroup.Text className="bg-transparent p-0 rounded-3 br-ts-0 br-bs-0 overflow-hidden">
									<Button variant='primary' className="ripple" type="button">Search</Button>
								</InputGroup.Text>
							</InputGroup>
						</Card.Body>
						<Card.Body className="ps-0 pe-0 bd-t-0 pt-0">
							<div className="main-content-body-profile mb-3">
								<Nav className='main-nav-line'>
								{tabData.map((input) => (
									<Nav.Item key={Math.random()}>
										<Nav.Link eventKey={input.eventKey} onClick={() =>{setInputType(input.eventKey)}}>{input.Type}</Nav.Link>
									</Nav.Item>
									))}
								</Nav>
							</div>
							<p className="text-muted mb-0 ps-3">About 12,546,90000 results (0.56 Seconds)</p>
						</Card.Body>
					</Card>
					<Tab.Content>
						<Tab.Pane eventKey={inputType}>
							<Card className="custom-card">
								<Card.Body>
									<div className="mb-2">
										<Card.Title className="h5"><Link to='#'>Search the new animations</Link></Card.Title>
									</div>
									<h6 className="tx-13">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
										dolore eu fugiat nulla pariatur eu fugiat nulla pariatur</h6>
									<p className="mb-0 text-muted">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
										nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
										consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
										labore et dolore magnam aliquam quaerat voluptatem.</p>
								</Card.Body>
							</Card>
							<Card className="custom-card">
								<Card.Body>
									<div className="mb-2">
										<Card.Title className="h5"><Link to='#'>Free Boostrap admin templates</Link></Card.Title>
									</div>
									<h6 className="tx-13">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
										dolore eu fugiat nulla pariatur eu fugiat nulla pariatur</h6>
									<p className="mb-0 text-muted">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
										nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
										consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
										labore et dolore magnam aliquam quaerat voluptatem.</p>
								</Card.Body>
							</Card>
							<Card className="custom-card">
								<Card.Body>
									<div className="mb-2">
										<Card.Title className="h5"><Link to='#'>20+ download the free templates</Link></Card.Title>
									</div>
									<h6 className="tx-13">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
										dolore eu fugiat nulla pariatur eu fugiat nulla pariatur</h6>
									<p className="mb-0 text-muted">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
										nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
										consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
										labore et dolore magnam aliquam quaerat voluptatem.</p>
								</Card.Body>
							</Card>
							<Card className="custom-card">
								<Card.Body>
									<div className="mb-2">
										<Card.Title className="h5"><Link to='#'>Customizable admin templates</Link></Card.Title>
									</div>
									<h6 className="tx-13">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
										dolore eu fugiat nulla pariatur eu fugiat nulla pariatur</h6>
									<p className="mb-0 text-muted">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
										nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
										consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
										labore et dolore magnam aliquam quaerat voluptatem.</p>
								</Card.Body>
							</Card>
							<Card className="custom-card">
								<Card.Body>
									<div className="mb-2">
										<Card.Title className="h5"><Link to='#'>HTML Admin templates</Link></Card.Title>
									</div>
									<h6 className="tx-13">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
										dolore eu fugiat nulla pariatur eu fugiat nulla pariatur</h6>
									<p className="mb-0 text-muted">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
										nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
										consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
										labore et dolore magnam aliquam quaerat voluptatem.</p>
								</Card.Body>
							</Card>
							<Card className="custom-card">
								<Card.Body>
									<div className="mb-2">
										<Card.Title className="h5"><Link to='#'>Best free admin templates</Link></Card.Title>
									</div>
									<h6 className="tx-13">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
										dolore eu fugiat nulla pariatur eu fugiat nulla pariatur</h6>
									<p className="mb-0 text-muted">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
										nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
										consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
										labore et dolore magnam aliquam quaerat voluptatem.</p>
								</Card.Body>
							</Card>
						</Tab.Pane>
					</Tab.Content>
				</Tab.Container>
				<div className="text-center search">
					<Pagination className='gap-2'>
						<Pagination.Item><i className="icon ion-ios-arrow-back"></i></Pagination.Item>
						<Pagination.Item className='active'>1</Pagination.Item>
						<Pagination.Item className=''>2</Pagination.Item>
						<Pagination.Item className=''>3</Pagination.Item>
						<Pagination.Item><i className="icon ion-ios-arrow-forward"></i></Pagination.Item>
					</Pagination>
				</div>
			</Col>
		</Row>
		{/* <!-- row closed --> */}
		{/* <!-- Container closed --> */}
	</div>
)
								};

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
