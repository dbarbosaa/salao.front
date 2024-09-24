import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Faqs.module.scss';

const Faqs = () => {
	return (
		<div className={styles.Faqs}>
			<Pageheader titles="Pages" active="Faqs" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12}>
					<Card>
						<Card.Body>
							<h4 className="fw-semibold tx-15 text-dark">How To Insert All The Plugins?</h4>
							<p className="text-muted mb-0 tx-13">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
						</Card.Body>
						<Card.Body>
							<h4 className="fw-semibold tx-15 text-dark">How Can I contact?</h4>
							<p className="text-muted mb-0 tx-13">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
						</Card.Body>
						<Card.Body>
							<h4 className="fw-semibold tx-15 text-dark">Can I use this Plugins in Another Template?</h4>
							<p className="text-muted mb-0 tx-13">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
						</Card.Body>
						<Card.Body>
							<h4 className="fw-semibold tx-15 text-dark">How Can I Add another page in Template?</h4>
							<p className="text-muted mb-0 tx-13">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
						</Card.Body>
						<Card.Body>
							<h4 className="fw-semibold tx-15 text-dark">It is Easy to Customizable?</h4>
							<p className="text-muted mb-0 tx-13">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
						</Card.Body>
						<Card.Body>
							<h4 className="fw-semibold tx-15 text-dark">How can I download This template?</h4>
							<p className="text-muted mb-0 tx-13">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

Faqs.propTypes = {};

Faqs.defaultProps = {};

export default Faqs;
