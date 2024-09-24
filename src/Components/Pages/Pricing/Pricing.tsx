import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { pricingData, pricingTable, pricingCards } from './Data/DataPricing';
import styles from './Pricing.module.scss';

const Pricing = () => {

	return (
		<div className={styles.Pricing}>
			<Pageheader titles="Pages" active="Pricing" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Card.Title as='h4' className="mt-4">Column pricing table</Card.Title>

			<Row>
				{pricingData.map((idx) => (
					<Col key={Math.random()} sm={6} lg={6} xl={3}>
						<Card>
							<Card.Body className="text-center pricing">
								<div className="card-category">{idx.cardname}</div>
								<div className="display-4 my-4">{idx.data}</div>
								<ul className="list-unstyled leading-loose">
									<li><strong>{idx.domain}</strong> FreeDomain Name</li>
									<li><strong>{idx.apps}</strong> One-Click Apps</li>
									<li><strong>{idx.database}</strong> Databases</li>
									<li><strong>Money</strong> BackGuarantee</li>
									<li><strong>24/7</strong> Support</li>
								</ul>
								<div className="text-center mt-4">
									<Link to="#" className={`btn btn-${idx.color} btn-block`}>Buy Now</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- row --> */}
			<Row>
				{pricingTable.map((idx) => (
					<Col sm={6} lg={6} xl={3} key={Math.random()} className="">
						<Card className="pricing-card">
							<Card.Body className="text-center">
								<div className="card-category">{idx.cardname}</div>
								<div className="display-5 my-4">{idx.data}</div>
								<ul className="list-unstyled leading-loose">
									<li><strong>{idx.ads}</strong> Ads</li>
									<li>{idx.icon1} 30 days</li>
									<li>{idx.icon2} Private Messages</li>
									<li>{idx.icon3} Urgent Ads</li>
								</ul>
								<div className="text-center mt-6">
									<Link to="#" className={`btn btn-${idx.color} btn-block`}>Choose plan</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}

			</Row>
			{/* <!-- /row --> */}

			<Card.Title as='h4' className="mt-4">Pricing cards 4 colums</Card.Title>
			{/* <!-- row --> */}
			<Row>
				{pricingCards.map((idx) => (
					<Col key={Math.random()} xs={6} sm={6} lg={6} xl={3} className="col-12">
						<div className="panel price panel-color">
							<div className={`panel-heading bg-${idx.color} p-0 text-center`}>
								<h3>{idx.cardname}</h3>
							</div>
							<div className="panel-body text-center">
								<p className="lead"><strong>{idx.data}</strong>/ month</p>
							</div>
							<ListGroup className="list-group-flush text-center">
								<ListGroup.Item><strong> {idx.name1} Free</strong> Domain Name</ListGroup.Item>
								<ListGroup.Item><strong> {idx.name2}</strong> One-Click Apps</ListGroup.Item>
								<ListGroup.Item><strong> {idx.name3}</strong> Databases</ListGroup.Item>
								<ListGroup.Item><strong> Money </strong> BackGuarantee</ListGroup.Item>
								<ListGroup.Item className="border-bottom-0"><strong> 24/7</strong> support</ListGroup.Item>
							</ListGroup>
							<div className="panel-footer text-center">
								<Link className={`btn btn-${idx.color}`} to="#">Purchase Now!</Link>
							</div>
						</div>
					</Col>
				))}

			</Row>
			{/* <!-- /row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Pricing.propTypes = {};

Pricing.defaultProps = {};

export default Pricing;
