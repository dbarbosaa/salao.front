import React from 'react';
import { Button, Card, Col, Row, Badge } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Badge.module.scss';

const Badges = () => (
	<div className={styles.Badge}>
		<Pageheader titles="Elements" active="Badge" />
		{/* <!-- container --> */}

		{/* <!-- ROW-OPEN --> */}
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Buttons with square Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Below exapmle badges are button badges.</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Button variant='primary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="ms-1">2</Badge>
								</Button>
								<Button variant='secondary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="ms-1">1</Badge>
								</Button>
								<Button variant='success' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="ms-1">5</Badge>
								</Button>
								<Button variant='info' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="ms-1">3</Badge>
								</Button>
								<Button variant='warning' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="ms-1">6</Badge>
								</Button>
								<Button variant='danger' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="ms-1">4</Badge>
								</Button>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
			{/* <!-- COL-END --> */}
		</Row>
		{/* <!-- ROW CLOSED --> */}

		{/* <!-- ROW OPEN --> */}
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Border buttons with square Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Below exapmle badges are Border buttons badges..</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Button variant='outline-primary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='primary' className="ms-1">2</Badge>
								</Button>
								<Button variant='outline-success' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='success' className="ms-1">65</Badge>
								</Button>
								<Button variant='outline-secondary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='secondary' className="ms-1">1</Badge>
								</Button>
								<Button variant='outline-info' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='info' className="ms-1">5333</Badge>
								</Button>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
			{/* <!-- COL-END --> */}
		</Row>
		{/* <!-- ROW CLOSED --> */}


		{/* <!-- ROW OPEN --> */}
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Buttons with rounded Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Below exapmle badges are  button rounded badges...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Button variant='info' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="rounded-pill ms-1">3</Badge>
								</Button>
								<Button variant='primary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="rounded-pill ms-1">22</Badge>
								</Button>
								<Button variant='secondary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="rounded-pill ms-1">145</Badge>
								</Button>
								<Button variant='success' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='white' className="rounded-pill ms-1">3225</Badge>
								</Button>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- ROw CLOSED --> */}

		{/* <!-- ROW OPEN --> */}
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Border buttons with rounded Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Below exapmle badges are border  button rounded badges...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Button variant='outline-primary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='primary' className="rounded-pill ms-1">2</Badge>
								</Button>
								<Button variant='outline-success' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='success' className="rounded-pill ms-1">65</Badge>
								</Button>
								<Button variant='outline-secondary' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='secondary' className="rounded-pill ms-1">43</Badge>
								</Button>
								<Button variant='outline-info' className="mt-1 mb-1 me-3">
									<span>Notifications</span>
									<Badge bg='info' className="rounded-pill ms-1">563</Badge>
								</Button>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
			{/* <!-- COL-END --> */}
		</Row>
		{/* <!-- ROW CLOSED --> */}

		{/* <!-- ROW OPEN --> */}
		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Link Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges can be used as part of links or buttons to provide a counter.</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Button variant='primary' className="mt-1 mb-1 me-3">Primary <Badge bg='light' className="ms-1">22</Badge></Button>
								<Button variant='success' className="mt-1 mb-1 me-3">Success <Badge bg='light' className=" ms-1">New</Badge></Button>
								<Button variant='info' className="mt-1 mb-1 me-3">Info <Badge bg='light' className=" ms-1">5</Badge></Button>
								<Button variant='warning' className="mt-1 mb-1 me-3">Warning <Badge bg='light' className="badge-pill  ms-1"><i className="fe fe-plus-circle tx-14"></i></Badge></Button>
								<Button variant='danger' className="mt-1 mb-1 me-3">Danger <Badge bg='light' className="badge-pill  ms-1">Updated</Badge></Button>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- ROW CLOSED --> */}

		{/* <!-- ROW OPEN --> */}

		<Row>
			<Col lg={12} md={12}>
				<Card className="mg-b-20">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Link Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges can be used as part of links or buttons to provide a counter.</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Button variant='primary' className="position-relative  mb-2 mt-2 badge-top-pill">
									Inbox
									<Badge bg='info' className="position-absolute start-100 translate-middle rounded-pill">
										8
										<span className="visually-hidden">unread messages</span>
									</Badge>
								</Button>
								<Button variant='success' className="position-relative  mb-2 mt-2 badge-top-pill">
									Inbox
									<Badge bg='secondary' className="position-absolute start-100 translate-middle rounded-pill">
										82
										<span className="visually-hidden">unread messages</span>
									</Badge>
								</Button>
								<Button variant='danger' className="position-relative  mb-2 mt-2 badge-top-pill">
									Inbox
									<Badge bg='success' className="position-absolute start-100 translate-middle rounded-pill">
										539
										<span className="visually-hidden">unread messages</span>
									</Badge>
								</Button>
								<Button variant='teal' className="position-relative  mb-2 mt-2 badge-top-pill">
									Inbox
									<Badge bg='warning' className="position-absolute start-100 translate-middle rounded-pill">
										9+
										<span className="visually-hidden">unread messages</span>
									</Badge>
								</Button>
								<Button variant='info' className="position-relative  mb-2 mt-2 badge-top-pill">
									Inbox
									<Badge bg='danger' className="position-absolute start-100 translate-middle rounded-pill">
										99+
										<span className="visually-hidden">unread messages</span>
									</Badge>
								</Button>
								<Button variant='warning' className="position-relative  mb-2 mt-2 badge-top-pill">
									Inbox
									<Badge bg='primary' className="position-absolute  start-100 translate-middle rounded-pill">
										999+
										<span className="visually-hidden">unread messages</span>
									</Badge>
								</Button>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- ROW CLOSED --> */}

		{/* <!-- Row --> */}
		<Row>
			<Col lg={6} md={6}>
				<Card className="mg-b-20" id="badge">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Simple Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges scale to match the size of the immediate parent element by using relative font sizing and em units...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<h1>Heading 1 <Badge bg='light'>New</Badge></h1>
								<h2>Heading 2 <Badge bg='light'>New</Badge></h2>
								<h3>Heading 3 <Badge bg='light'>New</Badge></h3>
								<h4>Heading 4 <Badge bg='light'>New</Badge></h4>
								<h5>Heading 5 <Badge bg='light'>New</Badge></h5>
								<h6>Heading 6 <Badge bg='light'>New</Badge></h6>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={6} md={6}>
				<Card className="mg-b-20" id="badge1">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Colored Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges scale to match the size of the immediate parent element by using relative font sizing and em units...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<h1 className="text-primary">Heading 1 <Badge bg='primary'>New</Badge></h1>
								<h2 className="text-danger">Heading 2 <Badge bg='danger'>New</Badge></h2>
								<h3 className="text-warning">Heading 3 <Badge bg='warning'>New</Badge></h3>
								<h4 className="text-success">Heading 4 <Badge bg='success'>New</Badge></h4>
								<h5 className="text-info">Heading 5 <Badge bg='info'>New</Badge></h5>
								<h6 className="text-secondary">Heading 6 <Badge bg='secondary'>New</Badge></h6>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>

			<Col lg={12} md={12}>
				<Card className="mg-b-20" id="badge2">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">BADGES</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Badges scale to match the size of the immediate parent element by using relative font sizing and em units...</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Badge bg='primary' className="me-1 my-2">Primary</Badge>
								<Badge bg='secondary' className="me-1">Secondary</Badge>
								<Badge bg='success' className="me-1">Success</Badge>
								<Badge bg='danger' className="me-1">Danger</Badge>
								<Badge bg='warning' className="me-1">Warning</Badge>
								<Badge bg='info' className="me-1">Info</Badge>
								<Badge bg='light' className="me-1">Light</Badge>
								<Badge bg='dark' className="me-1">Dark</Badge>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>

			<Col lg={12} md={12}>
				<Card className="mg-b-20" id="badge3">
					<Card.Body>
						<Card.Title as='h3' className="mg-b-10">Pill Badges</Card.Title>
						<Card.Subtitle as='p' className="mg-b-20 text-muted ">Use the <code>.badge-pill</code> modifier className to make badges more rounded.</Card.Subtitle>
						<div className="text-wrap">
							<div className="example">
								<Badge bg='primary' className="badge-pill me-1 my-2">Primary</Badge>
								<Badge bg='secondary' className="badge-pill me-1">Secondary</Badge>
								<Badge bg='success' className="badge-pill me-1">Success</Badge>
								<Badge bg='danger' className="badge-pill me-1">Danger</Badge>
								<Badge bg='warning' className="badge-pill me-1">Warning</Badge>
								<Badge bg='info' className="badge-pill me-1">Info</Badge>
								<Badge bg='light' className="badge-pill me-1">Light</Badge>
								<Badge bg='dark' className="badge-pill me-1">Dark</Badge>
							</div>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- /row --> */}

		{/* <!-- Container closed --> */}
	</div>
);

Badge.propTypes = {};

Badge.defaultProps = {};

export default Badges;
