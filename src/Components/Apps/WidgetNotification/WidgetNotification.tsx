import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './WidgetNotification.module.scss';
import { Link } from 'react-router-dom';

//Image
import noData from '../../../../src/assets/img/svgicons/no-data.svg';
import noTaking from '../../../../src/assets/img/svgicons/note_taking.svg';
import noImac from '../../../../src/assets/img/svgicons/imac.svg';

const AlertData = [
	{ id: 1, icon: <i className="far fa-times-circle"></i>, class1: "bd-0 mg-b-20 bg-danger-transparent alert p-0", class2: 'text-danger fw-bold', class3: "text-danger", heading: 'Error Data', strong: 'Oh snap!', description: 'Change a few things up and try submitting again.', hidden: false },
	{ id: 2, icon: <i className="far fa-check-circle"></i>, class1: 'bd-0 mg-b-20 bg-success-transparent alert p-0', class2: 'text-success fw-bold', class3: "text-success", heading: 'Success Data', strong: 'Well done!', description: 'You successfully read this important alert message.', hidden: false },
	{ id: 3, icon: <i className="far fa-question-circle"></i>, class1: 'bd-0 mg-b-20 bg-info-transparent alert p-0', class2: 'text-info fw-bold', class3: "text-info", heading: ' Info Data', strong: 'Heads up!', description: 'This alert needs your attention, but its not super important.', hidden: false }
]

const WidgetNotification = () => {
	//Alert function
	const [mainidx, setidx] = useState(AlertData);
	function handleRemove(id) {
		const RemoveData = mainidx.filter((idx) => idx.id !== id);
		setidx(RemoveData);
	}
	return (

		<div className={styles.WidgetNotification}>
			<Pageheader titles="Apps" active="Widget-Notifications" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col lg={6} md={12} xl={4}>
					{/* <!--Page Widget Error--> */}
					<Card className="bd-0 mg-b-20">
						<Card.Body className="bd bd-success text-success text-center">
							<div className="success-widget">
								<h3>Success!</h3>
								<p className="mt-3 mb-0">Thanks so much for your message. We check e-mail frequently and
									will try our best to respond to your inquiry.</p>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col lg={6} md={12} xl={4}>
					{/* <!--Page Widget Error--> */}
					<Card className="bd-0 mg-b-20">
						<Card.Body className="bd bd-danger text-danger text-center">
							<div className="danger-widget">
								<h3>Danger!</h3>
								<p className="mt-3 mb-0">Thanks so much for your message. We check e-mail frequently and
									will try our best to respond to your inquiry.</p>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col lg={12} md={12} xl={4}>
					{/* <!--Page Widget Error--> */}
					<Card className="bd-0 mg-b-20">
						<Card.Body className="bd bd-warning text-warning text-center">
							<div className="warning-widget">
								<h3>Warning!</h3>
								<p className="mt-3 mb-0">Thanks so much for your message. We check e-mail frequently and
									will try our best to respond to your inquiry.</p>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>

				<Col lg={6} md={6} xl={4}>
					{/* <!--Page Widget Error--> */}
					<Card className="bd-0 mg-b-20">
						<Card.Body className="text-danger">
							<div className="main-error-wrapper">
								<i className="si si-close mg-b-20 tx-50"></i>
								<h4 className="mg-b-20">Data Not Found.</h4>
								<Link className="btn btn-outline-danger btn-sm" to="#">Click to view details</Link>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col lg={6} md={6} xl={4}>
					{/* <!--Page Widget Error--> */}
					<Card className="bd-0 mg-b-20">
						<Card.Body className="text-success">
							<div className="main-error-wrapper">
								<i className="si si-check mg-b-20 tx-50"></i>
								<h4 className="mg-b-20">Submitted Successfully</h4>
								<Link className="btn btn-outline-success btn-sm" to="#">Click to view details</Link>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col lg={6} md={12} xl={4}>
					{/* <!--Page Widget Error--> */}
					<Card className="bd-0 mg-b-20">
						<Card.Body className="text-info">
							<div className="main-error-wrapper">
								<i className="si si-info mg-b-20 tx-50"></i>
								<h4 className="mg-b-20">Info Alert</h4>
								<Link className="btn btn-outline-info btn-sm" to="#">Click to view details</Link>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col lg={6} md={6} xl={4}>
					{/* <!--Page Widget Error--> */}
					<Card className="bd-0 mg-b-20 bg-danger">
						<Card.Body className="text-white">
							<div className="main-error-wrapper">
								<i className="si si-close mg-b-20 tx-50"></i>
								<h4 className="mg-b-0">Data Not Found.</h4>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col lg={6} md={6} xl={4}>
					{/* <!--Page Widget Error--> */}
					<Card className="bd-0 mg-b-20 bg-success">
						<Card.Body className="text-white">
							<div className="main-error-wrapper">
								<i className="si si-check mg-b-20 tx-50"></i>
								<h4 className="mg-b-0">Submitted Successfully</h4>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
				<Col lg={6} md={12} xl={4}>
					{/* <!--Page Widget Error--> */}
					<Card className="bd-0 mg-b-20 bg-info">
						<Card.Body className="text-white">
							<div className="main-error-wrapper">
								<i className="si si-info mg-b-20 tx-50"></i>
								<h4 className="mg-b-0">Info Alert</h4>
							</div>
						</Card.Body>
					</Card>
					{/* <!--Page Widget Error--> */}
				</Col>
			</Row>
			{/* <!-- row --> */}

			{/* <!-- /row --> */}
			<Row className="row-sm">
				{mainidx.map((idx) => (
					<Col key={Math.random()} lg={6} md={6} xl={4}>
						{/* <!--Page Widget Error--> */}
						<Card hidden={idx.hidden} className={idx.class1}>
							<Card.Header className={idx.class2}>
								{idx.icon} {idx.heading}
								<Button variant='' className="close" onClick={() => { handleRemove(idx.id) }}><span className={idx.class3} aria-hidden="true">×</span></Button>
									
							</Card.Header>
							<Card.Body className={idx.class3}>
								<strong>{idx.strong}</strong> {idx.description}
							</Card.Body>
						</Card>
						{/* <!--Page Widget Error--> */}
					</Col>
				))}
			</Row>
			{/* <!-- row --> */}

			{/* <!-- /row --> */}
			<Row className="row-sm">
				<Col lg={6} md={6} xl={4}>
					<Card className="mg-b-20 text-center">
						<Card.Body className="h-100">
							<img src={noData} alt="" className="wd-35p" />
							<h5 className="mg-b-10 mg-t-15 tx-18">Items Not Found</h5>
							<Link to="#" className="text-muted">Check The Settings</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={6} xl={4}>
					<Card className="mg-b-20 text-center">
						<Card.Body className="h-100">
							<img src={noTaking} alt="" className="wd-35p" />
							<h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
							<Link to="#" className="text-muted">Check The Settings</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6} md={12} xl={4}>
					<Card className="mg-b-20 text-center">
						<Card.Body className="h-100">
							<img src={noImac} alt="" className="wd-40p" />
							<h5 className="mg-b-10 mg-t-15 tx-18">No Site Selected</h5>
							<Link to="#" className="text-muted">Check The Settings</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

WidgetNotification.propTypes = {};

WidgetNotification.defaultProps = {};

export default WidgetNotification;
