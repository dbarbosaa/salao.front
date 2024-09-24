import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './ChartJs.module.scss';
import { LineChart, AreaChart, StackedBarChart, HoriStackedBarChart, Solid, Transparency, Gradient, HoriBarChart, HoriGroupedChart, DoughnutChart, PieChart } from './Data/ChartJSFunction';

const ChartJs = () => {
	return (
		<div className={styles.ChartJs}>
			<Pageheader titles="Charts" active="Chartjs" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col sm={12} xl={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Line Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ">
								<LineChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col-6 --> */}
				<Col sm={12} xl={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Area Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo">
								<AreaChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col-6 --> */}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Stacked Bar Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ht-300">
								<StackedBarChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col-6 --> */}
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Stacked Bar Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ht-300">
								<HoriStackedBarChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col-6 --> */}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col md={12}>
							<Row className="row-sm">
								<Col sm={12} md={6} xl={4}>
									<Card className="overflow-hidden">
										<Card.Body>
											<div className="main-content-label tx-12 mg-b-15">
												Solid Color
											</div>
											<div className="">
												<Solid />
											</div>
										</Card.Body>
									</Card>
								</Col>
								{/* <!-- col-6 --> */}
								<Col sm={12} md={6} xl={4} className="mg-t-20 mg-md-t-0">
									<Card className="overflow-hidden">
										<Card.Body>
											<div className="main-content-label tx-12 mg-b-15">
												With Transparency
											</div>
											<div className="">
												<Transparency />
											</div>
										</Card.Body>
									</Card>
								</Col>
								{/* <!-- col-6 --> */}
								<Col sm={12} md={6} xl={4} className="mg-t-20 mg-xl-t-0">
									<Card className="overflow-hidden">
										<Card.Body>
											<div className="main-content-label tx-12 mg-b-15">
												Using Multiple Color
											</div>
											<div className="">
												<Gradient />
											</div>
										</Card.Body>
									</Card>	
								</Col>
								{/* <!-- col-6 --> */}
							</Row>
					{/* <!-- col-12 --> */}
				</Col>
				{/* <!-- col-12 --> */}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Horizontal Bar Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ht-300">
								<HoriBarChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col-6 --> */}
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Horizontal Bar Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo ht-300">
								<HoriGroupedChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col-6 --> */}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col sm={12} md={6}>
					<Card className="mg-b-md-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Pie Chart
							</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo Chart">
								<DoughnutChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col-6 --> */}
				<Col sm={12} md={6}>
					<Card className="overflow-hidden">
						<Card.Body>
							<div className="main-containt-label mg-b-5">Donut Chart</div>
							<p className="mg-b-20">Basic Charts Of Valex template.</p>
							<div className="chartjs-wrapper-demo Chart">
								<PieChart />
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col-6 --> */}
			</Row>
			{/* <!-- row closed --> */}
			{/* <!-- Container closed --> */}
		</div >
	)
};

ChartJs.propTypes = {};

ChartJs.defaultProps = {};

export default ChartJs;
