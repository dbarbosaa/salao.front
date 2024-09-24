import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Height.module.scss';

const Height = () => {

	return (

		<div className={styles.Height}>
			<Pageheader titles="Utilities" active="Height" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Height Values
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="d-flex">
								<div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-400">
									.ht-80
								</div>
								<div className="d-flex align-items-center justify-content-center wd-150 ht-150 bg-gray-400 mg-l-20">
									.ht-150
								</div>
								<div className="d-flex align-items-center justify-content-center wd-150 ht-100 bg-gray-400 mg-l-20">
									.ht-100
								</div>
							</div>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-20 mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.ht-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-20 mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.ht-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>15 | 20 | 25 | 30 | ... | 100 &nbsp; (step of 5) Regular Height</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-20 mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.ht-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>150 | 200 | 250 | 300 | ... | 850 &nbsp; (step of 50) Bigger Height</td>
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
								Percentage Height
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.ht-[value]p</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>10 | 20 | 30 | 40 | ... | 100 &nbsp; (step of 10)</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Media Query Height
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap  mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.ht-[size]-[value]</code></td>
											<td><code>.ht-[size]-[value]p</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>
												<p className="mg-b-5">size: xs | sm | md | lg | xl</p>
												<p className="mg-b-0">value: the height value (refer to code above)</p>
											</td>
											<td>
												<p className="mg-b-5">size: xs | sm | md | lg | xl</p>
												<p className="mg-b-0">value: the height value (refer to code above)</p>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				<Col md={12} xl={12} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Extra Height ClassNamees
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap  mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.ht-100v</code></td>
											<td><code>.ht-auto</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>Set a height to an element based on viewport height.</td>
											<td>Set an auto height to an element.</td>
										</tr>
									</tbody>
								</Table>
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

Height.propTypes = {};

Height.defaultProps = {};

export default Height;
