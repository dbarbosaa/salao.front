import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './BasicTables.module.scss';


const BasicTables = () => {
	return (
		<div className={styles.BasicTables}>
			<Pageheader titles="Tables" active="Basic-Tables" />
			{/* <!-- container --> */}

			{/* <!-- row opened --> */}
			<Row className="row-sm">
				<Col xl={12} className="">
					<Card className="">
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">SIMPLE TABLE</Card.Title>
								
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Simple Table. <Link to="#">more</Link></p>

						</Card.Header >
						<Card.Body>
							<div className="table-responsive">
								<Table className="mg-b-0 text-md-nowrap">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Joan Powell</td>
											<td>Associate Developer</td>
											<td>$450,870</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Gavin Gibson</td>
											<td>Account manager</td>
											<td>$230,540</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Julian Kerr</td>
											<td>Senior Javascript Developer</td>
											<td>$55,300</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Cedric Kelly</td>
											<td>Accountant</td>
											<td>$234,100</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Samantha May</td>
											<td>Junior Technical Author</td>
											<td>$43,198</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">STRIPED ROWS</Card.Title>
								
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Striped Rows.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-striped mg-b-0 text-md-nowrap">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Joan Powell</td>
											<td>Associate Developer</td>
											<td>$450,870</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Gavin Gibson</td>
											<td>Account manager</td>
											<td>$230,540</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Julian Kerr</td>
											<td>Senior Javascript Developer</td>
											<td>$55,300</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Cedric Kelly</td>
											<td>Accountant</td>
											<td>$234,100</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Samantha May</td>
											<td>Junior Technical Author</td>
											<td>$43,198</td>
										</tr>
									</tbody>
								</Table>
							</div>
							{/* <!-- bd --> */}
						</Card.Body>
						{/* <!-- bd --> */}
					</Card>
					{/* <!-- bd --> */}
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col xl={12}>
					<Card className="mg-b-20">
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Bordered Table</Card.Title>
								
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Bordered Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-bordered mg-b-0 text-md-nowrap">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Joan Powell</td>
											<td>Associate Developer</td>
											<td>$450,870</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Gavin Gibson</td>
											<td>Account manager</td>
											<td>$230,540</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Julian Kerr</td>
											<td>Senior Javascript Developer</td>
											<td>$55,300</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Cedric Kelly</td>
											<td>Accountant</td>
											<td>$234,100</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Samantha May</td>
											<td>Junior Technical Author</td>
											<td>$43,198</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col xl={12}>
					<Card>
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">Hoverable Rows Table</Card.Title>
								
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Hoverable Rows Table.. <Link to="#">Learn more</Link></p>

						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table-hover mb-0 text-md-nowrap">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Position</th>
											<th>Salary</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Tiger Nixon</td>
											<td>System Architect</td>
											<td>$320,800</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Garrett Winters</td>
											<td>Accountant</td>
											<td>$170,750</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Ashton Cox</td>
											<td>Junior Technical Author</td>
											<td>$86,000</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Cedric Kelly</td>
											<td>Senior Javascript Developer</td>
											<td>$433,060</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Airi Satou</td>
											<td>Accountant</td>
											<td>$162,700</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

BasicTables.propTypes = {};

BasicTables.defaultProps = {};

export default BasicTables;
