import React from 'react';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Counters.module.scss';
import CountUp from 'react-countup';
import Countdown from 'react-countdown';
import { Card, Col, Row } from 'react-bootstrap';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';


// image import

import media1 from '../../../assets/img/pngs/4.png';
import media2 from '../../../assets/img/pngs/5.png';
import media3 from '../../../assets/img/pngs/6.png';


const Counters = () => {


	const AfterCompletion = () => <span>You are good to go!</span>;

	// Renderer callback with condition
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a complete state
			return <AfterCompletion />;
		} else {
			// Render a countdown
			return (
				<span>
					{days} Days {hours} Hours:{minutes} Minutes:{seconds} Seconds
				</span>
			);
		}
	};


	return (
		<div className={styles.Counters}>
			<Pageheader titles="Advanced ui" active="Counters" />
			{/* <!-- container --> */}


			{/* <!-- row --> */}
			<Row>
				<Col xl={3} lg={6} md={6}>
					<Card className="bg-primary-gradient">
						<Card.Body>
							<div className="counter-status d-flex md-mb-0">
								<div className="counter-icon">
									<i className="icon icon-people"></i>
								</div>
								<div className="ms-auto">
									<h5 className="tx-13 tx-white-8 mb-3">Clients</h5>

									<CountUp className='h2 counter mb-0 text-white' end={2569} />
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={6} md={6}>
					<Card className="bg-danger-gradient">
						<Card.Body>
							<div className="counter-status d-flex md-mb-0">
								<div className="counter-icon text-warning">
									<i className="icon icon-rocket"></i>
								</div>
								<div className="ms-auto">
									<h5 className="tx-13 tx-white-8 mb-3">Total Sales</h5>

									<CountUp className='h2 counter mb-0 text-white' end={1765} />

								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={6} md={6}>
					<Card className="bg-success-gradient">
						<Card.Body>
							<div className="counter-status d-flex md-mb-0">
								<div className="counter-icon text-primary">
									<i className="icon icon-docs"></i>
								</div>
								<div className="ms-auto">
									<h5 className="tx-13 tx-white-8 mb-3">Total Projects</h5>

									<CountUp className='h2 counter mb-0 text-white' end={846} />

								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3} lg={6} md={6}>
					<Card className="bg-warning-gradient">
						<Card.Body>
							<div className="counter-status d-flex md-mb-0">
								<div className="counter-icon text-success">
									<i className="icon icon-emotsmile"></i>
								</div>
								<div className="ms-auto">
									<h5 className="tx-13 tx-white-8 mb-3">Happy Customers</h5>

									<CountUp className='h2 counter mb-0 text-white' end={7253} />

								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- row --> */}
			<Row>
				<Col sm={12} md={12} xl={4}>
					<Card className="custom-card">
						<Card.Body className="text-center">
							<div>
								<Card.Title as='h6'>Time Counting From 0 to 3</Card.Title>
							</div>
							<img src={media1} alt="counter-image" className="wd-160 ht-160 " />
							<div className="pb-0 mt-3">
								<Timer className="p timer" active duration={180000}>
									<Timecode className='text-break' />
								</Timer>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={12} md={12} xl={4}>
					<Card className="custom-card">
						<Card.Body className="text-center">
							<div>
								<Card.Title as='h6'>Time Counting From 60 to 0</Card.Title>
							</div>
							<img src={media2} alt="counter-image" className="wd-160 ht-160 " />
							<div className="mt-3">
								{/* <span id="timer-countinbetween" className="tx-26 mb-0"></span> */}
								<Countdown className='span tx-26 mb-0' date={Date.now() + 60000} />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={12} md={12} xl={4}>
					<Card className="custom-card">
						<Card.Body className="text-center ">
							<div>
								<Card.Title as='h6'>Time 3 minute counter</Card.Title>
							</div>
							<img src={media3} alt="counter-image" className="wd-160 ht-160 " />
							<div className="mt-3">
								<Countdown className='span tx-26 mb-0' date={Date.now() + 180000} />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row>
				<Col sm={12} md={12}>
					<Card className="custom-card">
						<Card.Body className="text-center">
							<div>
								<Card.Title as='h6'>Time Counting days Limit</Card.Title>
							</div>
							<div className="p-2">

								<span className="h3 mb-0 text-primary"><Countdown date={Date.now() + 259200000} renderer={renderer} /></span>
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

Counters.propTypes = {};

Counters.defaultProps = {};

export default Counters;
