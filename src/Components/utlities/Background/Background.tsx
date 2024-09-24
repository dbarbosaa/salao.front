import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Background.module.scss';

import photos5 from "../../../assets/img/photos/5.jpg";

const Background = () => {

	return (

		<div className={styles.Background}>
			<Pageheader titles="Utilities" active="Background" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12} xl={12} xs={12} sm={12} className="">
					{/* <!--div--> */}
					<Card className="mg-b-20">
						<Card.Body className="h-100">
							<div className="main-content-label mg-b-5">
								Gray Set
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="example">
								<div className="gray-set">
									<div className="flex-1 bg-gray-100 ht-100p p-3">.bg-gray-100</div>
									<div className="flex-1 bg-gray-200 ht-100p p-3">.bg-gray-200</div>
									<div className="flex-1 bg-gray-300 ht-100p p-3">.bg-gray-300</div>
									<div className="flex-1 bg-gray-400 ht-100p p-3">.bg-gray-400</div>
									<div className="flex-1 bg-gray-500 ht-100p p-3">.bg-gray-500</div>
									<div className="flex-1 bg-gray-600 ht-100p p-3">.bg-gray-600</div>
									<div className="flex-1 bg-gray-700 ht-100p p-3 tx-white-7">.bg-gray-700</div>
									<div className="flex-1 bg-gray-800 ht-100p p-3 tx-white-7">.bg-gray-800</div>
									<div className="flex-1 bg-gray-900 ht-100p p-3 tx-white-7">.bg-gray-900</div>
								</div>
							</div>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-t-0 mb-0">
									<tbody>
										<tr>
											<td className="wd-20p"><b>ClassNamees</b></td>
											<td><code>className="bg-gray-[value]"</code></td>
										</tr>
										<tr>
											<td className="wd-20p"><b>Values</b></td>
											<td>900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100</td>
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
					<Card className="mg-b-20">
						<Card.Body className="h-100">
							<div className="main-content-label mg-b-5">
								Solid Background Set
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="">
								<div className="flex-1 bg-primary p-3 tx-white">.bg-primary</div>
								<div className="flex-1 bg-secondary p-3 tx-white">.bg-secondary</div>
								<div className="flex-1 bg-success p-3 tx-white">.bg-success</div>
								<div className="flex-1 bg-warning p-3 tx-white">.bg-warning</div>
								<div className="flex-1 bg-danger p-3 tx-white">.bg-danger</div>
								<div className="flex-1 bg-info p-3 tx-white">.bg-info</div>
								<div className="flex-1 bg-indigo p-3 tx-white">.bg-indigo</div>
								<div className="flex-1 bg-purple p-3 tx-white">.bg-purple</div>
								<div className="flex-1 bg-pink p-3 tx-white">.bg-pink</div>
								<div className="flex-1 bg-teal p-3 tx-white">.bg-teal</div>
								<div className="flex-1 bg-orange p-3 tx-white">.bg-orange</div>
							</div>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-t-0 mb-0">
									<tbody>
										<tr>
											<td className="wd-20p"><b>ClassNamees</b></td>
											<td><code>className="bg-[value]"</code></td>
										</tr>
										<tr>
											<td className="wd-20p"><b>Values</b></td>
											<td>primary | secondary | success | warning | danger | info | indigo |
												purple | pink | teal | orange</td>
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
					<Card className="mg-b-20">
						<Card.Body className="h-100">
							<div className="main-content-label mg-b-5">
								Solid Gradient Background Set
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="">
								<div className="flex-1 bg-primary-gradient p-3 tx-white">.bg-primary-gradient</div>
								<div className="flex-1 bg-secondary-gradient p-3 tx-white">.bg-secondary-gradient</div>
								<div className="flex-1 bg-success-gradient p-3 tx-white">.bg-success-gradient</div>
								<div className="flex-1 bg-warning-gradient p-3 tx-white">.bg-warning-gradient</div>
								<div className="flex-1 bg-danger-gradient p-3 tx-white">.bg-danger-gradient</div>
								<div className="flex-1 bg-info-gradient p-3 tx-white">.bg-info-gradient</div>
								<div className="flex-1 bg-purple-gradient p-3 tx-white">.bg-purple-gradient</div>
								<div className="flex-1 bg-pink-gradient p-3 tx-white">.bg-pink-gradient</div>
								<div className="flex-1 bg-teal-gradient p-3 tx-white">.bg-teal-gradient</div>
							</div>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-t-0 mb-0">
									<tbody>
										<tr>
											<td className="wd-20p"><b>ClassNamees</b></td>
											<td><code>className="bg-[value]"</code></td>
										</tr>
										<tr>
											<td className="wd-20p"><b>Values</b></td>
											<td>primary-gradient | secondary-gradient | success-gradient |
												warning-gradient | dange-gradientr | info-gradient | purple-gradient
												| pink-gradient | teal-gradient</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card className="mg-b-20">
						<Card.Body className="h-100">
							<div className="main-content-label mg-b-5">
								Transparent White Set
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="d-flex flex-wrap">
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-white-1"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-white-2"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-white-3"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-white-4"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-white-5"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-white-6"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-white-7"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-white-8"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-white-9"></div>
								</div>
							</div>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-t-0 mb-0">
									<tbody>
										<tr>
											<td className="wd-20p"><b>ClassNamees</b></td>
											<td><code>className="bg-white-[value]"</code></td>
										</tr>
										<tr>
											<td className="wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card>
						<Card.Body className="h-100">
							<div className="main-content-label mg-b-5">
								Transparent Black Set
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="d-flex flex-wrap">
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-black-1"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-black-2"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-black-3"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-black-4"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-black-5"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-black-6"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-black-7"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-black-8"></div>
								</div>
								<div className="flex-1 pos-relative">
									<img alt="" className="wd-100p ht-100p object-fit-cover" src={photos5} />
									<div className="pos-absolute a-0 bg-black-9"></div>
								</div>
							</div>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-t-0 mb-0">
									<tbody>
										<tr>
											<td className="wd-20p"><b>ClassNamees</b></td>
											<td><code>className="bg-black-[value]"</code></td>
										</tr>
										<tr>
											<td className="wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
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

Background.propTypes = {};

Background.defaultProps = {};

export default Background;
