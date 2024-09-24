import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Padding.module.scss';

const Padding = () => {

	return (

		<div className={styles.Padding}>
			<Pageheader titles="Utilities" active="Padding" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Padding Top values
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="d-md-flex">
								<div className="wd-200 ht-100 bg-gray-500 pd-t-30">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-t-30
									</div>
								</div>
								<div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-t-50 mt-4 mt-md-0">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-t-50
									</div>
								</div>
								<div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-t-70 mt-4 mt-md-0">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-t-70
									</div>
								</div>
							</div>
							<div className="table-responsive mt-3">
								<Table className="main-table-reference text-nowrap mg-t-10 mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.pd-t-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Bigger Values</b></td>
											<td>15 | 20 | 25 | 30 | ... | 120 &nbsp; (step of 5)</td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Even Bigger Values</b></td>
											<td>110 | 120 | 130 | 140 | ... | 200 &nbsp; (step of 10)</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>

					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Padding Left values
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="d-md-flex">
								<div className="wd-200 ht-100 bg-gray-500 pd-l-30">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-l-30
									</div>
								</div>
								<div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-l-50 mt-4 mt-md-0">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-l-50
									</div>
								</div>
								<div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-l-120 mt-4 mt-md-0">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-l-120
									</div>
								</div>
							</div>
							<div className="table-responsive mt-3">
								<Table className="main-table-reference text-nowrap mg-t-10 mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.pd-l-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Bigger Values</b></td>
											<td>15 | 20 | 25 | 30 | ... | 120 &nbsp; (step of 5)</td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Even Bigger Values</b></td>
											<td>110 | 120 | 130 | 140 | ... | 200 &nbsp; (step of 10)</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>

					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Padding Right values
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="d-md-flex">
								<div className="wd-200 ht-100 bg-gray-500 pd-r-30">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-r-30
									</div>
								</div>
								<div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-r-50 mt-4 mt-md-0">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-r-50
									</div>
								</div>
								<div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-r-120 mt-4 mt-md-0">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-r-120
									</div>
								</div>
							</div>
							<div className="table-responsive mt-3">
								<Table className="main-table-reference text-nowrap mg-t-10 mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.pd-r-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Bigger Values</b></td>
											<td>15 | 20 | 25 | 30 | ... | 120 &nbsp; (step of 5)</td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Even Bigger Values</b></td>
											<td>110 | 120 | 130 | 140 | ... | 200 &nbsp; (step of 10)</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>

					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Padding Bottom values
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="d-md-flex">
								<div className="wd-200 ht-100 bg-gray-500 pd-b-30">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-b-30
									</div>
								</div>
								<div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-b-50 mt-4 mt-md-0">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-b-50
									</div>
								</div>
								<div className="wd-200 ht-100 bg-gray-500 ms-md-4 pd-b-70 mt-4 mt-md-0">
									<div
										className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
										.pd-b-70
									</div>
								</div>
							</div>
							<div className="table-responsive mt-3">
								<Table className="main-table-reference text-nowrap mg-t-10 mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.pd-b-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Bigger Values</b></td>
											<td>15 | 20 | 25 | 30 | ... | 120 &nbsp; (step of 5)</td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Even Bigger Values</b></td>
											<td>110 | 120 | 130 | 140 | ... | 200 &nbsp; (step of 10)</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Media Query Padding
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0 mg-b-0">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.pd-[size]-t-[value]<br />
												.pd-[size]-r-[value]<br />
												.pd-[size]-b-[value]<br />
												.pd-[size]-l-[value]</code></td>
											<td>
												<p className="mg-b-5">size: xs | sm | md | lg | xl</p>
												<p className="mg-b-0">value: the padding value (refer to code above)</p>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Padding.propTypes = {};

Padding.defaultProps = {};

export default Padding;
