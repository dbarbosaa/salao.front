import React from 'react';
import { Card, Col, Row, Pagination } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Pagination.module.scss';

const Paginations = () => {
	return (
		<div className={styles.Pagination}>
			<Pageheader titles="Elements" active="Pagination" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col xl={12} lg={12} className="">
					<Card className="">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">BASIC PAGINATION</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below are basic pagination navigation.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Pagination className="mb-0">
										<Pagination.Prev />
										<Pagination.Item active>{1}</Pagination.Item>
										<Pagination.Item>{2}</Pagination.Item>
										<Pagination.Item>{3}</Pagination.Item>
										<Pagination.Next />
									</Pagination>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">PAGINATION FOR DARK BACKGROUND</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below are basic pagination navigation for dark
									background.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="pd-20 bg-gray-800">
										<Pagination className="pagination-dark mb-0 mg-b-0">
											<Pagination.Prev />
											<Pagination.Item active>{1}</Pagination.Item>
											<Pagination.Item>{2}</Pagination.Item>
											<Pagination.Item>{3}</Pagination.Item>
											<Pagination.Next />
										</Pagination>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="custom-card">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">COLOR VARIANT PAGINATION</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below are the available colored pagination
									variants..</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Row className="row-sm">
										<Col sm={6} lg={4} className="">
											<Pagination className="pagination-primary mg-sm-b-0">
												<Pagination.Prev />
												<Pagination.Item active>{1}</Pagination.Item>
												<Pagination.Item>{2}</Pagination.Item>
												<Pagination.Item>{3}</Pagination.Item>
												<Pagination.Next />
											</Pagination>
										</Col>
										{/* <!-- col-4 --> */}
										<Col sm={6} lg={4} className="mg-sm-t-0">
											<Pagination className="pagination-success mb-0">
												<Pagination.Prev />
												<Pagination.Item active>{1}</Pagination.Item>
												<Pagination.Item>{2}</Pagination.Item>
												<Pagination.Item>{3}</Pagination.Item>
												<Pagination.Next />
											</Pagination>
										</Col>
										{/* <!-- col-4 --> */}
									</Row>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">CIRCLED PAGINATION</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Below are basic pagination navigation in
									circle.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Pagination className="pagination-circled mb-0">
										<Pagination.Prev />
										<Pagination.Item active>{1}</Pagination.Item>
										<Pagination.Item>{2}</Pagination.Item>
										<Pagination.Item>{3}</Pagination.Item>
										<Pagination.Next />
									</Pagination>
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

Pagination.propTypes = {};

Pagination.defaultProps = {};

export default Paginations;
