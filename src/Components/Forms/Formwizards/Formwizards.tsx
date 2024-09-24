import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { BasicContent } from './BasicContent';
import styles from './Formwizards.module.scss';
import { WizardForm } from './validation';
import { VerticalOrientationWizard } from './verticalWizard';

const Formwizards = () => (
	<div className={styles.Formwizards}>
		<Pageheader titles="Forms" active="Form-wizards" />
		{/* <!-- container --> */}


		{/* <!-- row --> */}
		<Row>
			<Col lg={12} md={12}>
				<Card>
					<Card.Body>
						<div className="main-content-label mg-b-5">
							Basic Content Wizard
						</div>
						<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
						<BasicContent />
					</Card.Body>
				</Card>
			</Col>
			<Col lg={12} md={12} className="">
				<Card>
					<Card.Body>
						<div className="main-content-label mg-b-5">
							Basic Wizard With Validation
						</div>
						<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
						<WizardForm />
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- /row --> */}

		{/* <!-- row --> */}
		<Row>
			<Col lg={12} md={12} className="">
				<Card>
					<Card.Body>
					<div className="main-content-label mg-b-5"> Vertical Orientation Wizard</div>
					<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
						<VerticalOrientationWizard />
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- row closed --> */}
		{/* <!-- Container closed --> */}
	</div>
);

Formwizards.propTypes = {};

Formwizards.defaultProps = {};

export default Formwizards;
