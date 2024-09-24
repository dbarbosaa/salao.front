import React from 'react';
import styles from './Progress.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row, ProgressBar } from 'react-bootstrap';

const Progress = () => {

	return (

		<div className={styles.Progress}>
			<Pageheader titles="Elements" active="Progress" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col xl={12} lg={12}>
					<Card className="" id="progress">
						<Card.Body className="">
							<div>
								<Card.Title as='h3' className="mb-1">BASIC PROGRESS</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">A basic progress in all different colors.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<ProgressBar className="mg-b-20" now={25} />
									<ProgressBar className="mg-b-20" variant='success' now={35} />
									<ProgressBar className="mg-b-20" variant='warning' now={50} />
									<ProgressBar className="mg-b-20" variant='danger' now={65} />
									<ProgressBar className="" variant='indigo' now={75} />
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="progress2">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">STRIPED PROGRESS</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">A basic progress in all different colors.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<ProgressBar className="mg-b-20" striped variant="primary" now={25} />
									<ProgressBar className="mg-b-20" striped variant="success" now={35} />
									<ProgressBar className="mg-b-20" striped variant="warning" now={50} />
									<ProgressBar className="mg-b-20" striped variant="danger" now={65} />
									<ProgressBar className="mg-b-20" striped variant="info" now={75} />
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="progress6">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">PROGRESSBAR STYLE</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">A basic progress in all different colors.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<ProgressBar className="progress-style ht-5 mb-4" variant='primary' now={78} />
									<ProgressBar className="progress-style ht-5 mb-4" variant='danger' now={68} />
									<ProgressBar className="progress-style ht-5 mb-4" variant='success' now={58} />
									<ProgressBar className="progress-style ht-5 mb-4" variant='warning' now={48} />
									<ProgressBar className="progress-style ht-5 mb-4" variant='info' now={38} />
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="progress3">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Progress Sizes</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">A basic progress in different sizes.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<span className="tx-uppercase tx-11 d-block mg-b-5">Size Super Extra Small</span>

									<ProgressBar className="mg-b-10 ht-2" variant='primary' now={25} />
									<ProgressBar className="mg-b-10 ht-2" variant='success' now={35} />
									<ProgressBar className="ht-2" variant='danger' now={50} />

									<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Extra Small</span>

									<ProgressBar className="mg-b-10 progress-bar-xs" variant='primary' now={25} />
									<ProgressBar className="mg-b-10 progress-bar-xs" variant='success' now={35} />
									<ProgressBar className="progress-bar-xs" variant='danger' now={50} />

									<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Small</span>

									<ProgressBar className="mg-b-10 progress-bar-sm" variant='primary' now={25} />
									<ProgressBar className="mg-b-10 progress-bar-sm" variant='success' now={35} />
									<ProgressBar className="progress-bar-sm" variant='danger' now={50} />

									<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Normal</span>

									<ProgressBar className="mg-b-10" variant='primary' now={25} />
									<ProgressBar className="mg-b-10" variant='success' now={35} />
									<ProgressBar className="" variant='danger' now={50} />

									<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Large</span>

									<ProgressBar className="mg-b-10 h-8" variant='primary' now={25} />
									<ProgressBar className="mg-b-10 h-8" variant='success' now={35} />
									<ProgressBar className="h-8" variant='danger' now={50} />
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="progress04">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">PROGRESS LABEL</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">A basic progress in different sizes.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<ProgressBar className="mg-b-10 h-8" variant='primary' now={50} label={`${50}%`} />
									<ProgressBar className="mg-b-10 h-8" variant='success' now={60} label={`${60}%`} />
									<ProgressBar className="mg-b-10 h-8" variant='danger' now={95} label={`${95}%`} />
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

Progress.propTypes = {};

Progress.defaultProps = {};

export default Progress;
