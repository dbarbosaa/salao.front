import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { BarChart, AreaChart, ColoredAreaChart, ColoredLineChart, LineChart, ColoredBarChart, StackedBarChart, ColoredStackedBarChart, PieChart, ColoredDonutChart } from './Data/Sparklinefunction';
import styles from './Sparkline.module.scss';

const Sparkline = () => {
	return (
		<div className={styles.Sparkline}>
			<Pageheader titles="Charts" active="Sparkline-chart" />

			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col className="col-xxl-6">
					<Card className="mg-b-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Line Chart
							</div>
							<p className="mg-b-20">Below is the basic line chart example.</p>
							<div className="d-sm-flex">
								<div className="">
									<LineChart />
								</div>
								<div className="mg-t-20 mg-sm-t-0 mg-sm-l-30">
									<ColoredLineChart />
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col--> */}
				<div className="col-xxl-6">
					<div className="card mg-b-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Area Chart
							</div>
							<p className="mg-b-20">Below is the area bar chart example.</p>
							<div className="d-sm-flex">
								<div className="">
									<AreaChart />
								</div>
								<div className="mg-t-20 mg-sm-t-0 mg-sm-l-30">
									<ColoredAreaChart />
								</div>
							</div>
						</Card.Body>
					</div>
				</div>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<div className="row row-sm">
				<div className="col-xl-6">
					<div className="card mg-b-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Bar Chart
							</div>
							<p className="mg-b-20">Below is the basic bar chart example.</p>
							<div className="d-sm-flex">
								<div className="">
									<BarChart />
								</div>
								<div className="mg-t-20 mg-sm-t-0 mg-sm-l-30">
									<ColoredBarChart />
								</div>
							</div>
						</Card.Body>
					</div>
				</div>
				{/* <!-- col--> */}

				<div className="col-xl-6">
					<div className="card mg-b-20 overflow-hidden">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Stacked Bar Chart
							</div>
							<p className="mg-b-20">Below is the basic stacked bar chart example.</p>
							<div className="d-sm-flex">
								<div className="">
									<StackedBarChart />
								</div>
								<div className="mg-t-20 mg-sm-t-0 mg-sm-l-30">
									<ColoredStackedBarChart />
								</div>
							</div>
						</Card.Body>
					</div>
				</div>
			</div>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<div className="row row-sm">
				<div className="col-md-12">
					{/* <!-- div --> */}
					<div className="card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Pie Chart
							</div>
							<p className="mg-b-20">An example of a pie chart with two series.</p>
							<div className="d-sm-flex">
								<div className="">
									<PieChart />
								</div>
								<div className="mg-sm-l-30">
									<ColoredDonutChart />
								</div>
							</div>
						</Card.Body>
					</div>
					{/* <!-- /div --> */}
				</div>
				{/* <!-- col-6 --> */}
			</div>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Sparkline.propTypes = {};

Sparkline.defaultProps = {};

export default Sparkline;
