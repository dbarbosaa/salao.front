import React from 'react';
import styles from './Extras.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row, Table } from 'react-bootstrap';

const Extras = () => {

	return (

		<div className={styles.Extras}>
			<Pageheader titles="Utilities" active="Extras" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Opacity
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="example">
								<div className="gray-set">
									<div className="flex-1 bg-primary p-3 op-1">.op-1</div>
									<div className="flex-1 bg-primary p-3 op-2">.op-2</div>
									<div className="flex-1 bg-primary p-3 op-3">.op-3</div>
									<div className="flex-1 bg-primary p-3 op-4">.op-4</div>
									<div className="flex-1 bg-primary p-3 op-5">.op-5</div>
									<div className="flex-1 bg-primary p-3 op-6">.op-6</div>
									<div className="flex-1 bg-primary p-3 op-7">.op-7</div>
									<div className="flex-1 bg-primary p-3 op-8">.op-8</div>
									<div className="flex-1 bg-primary p-3 op-9">.op-9</div>
								</div>
							</div>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-t-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.op-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-t-0 mg-b-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.op-[breakpoint]-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>
												<p className="mg-b-5">breakpoint: xs | sm | md | lg | xl</p>
												<p className="mg-b-0">value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</p>
											</td>
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
								Shadow
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-t-0 mb-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.shadow-base</code></td>
											<td><code>.shadow-none</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>Add shadow to any box element.</td>
											<td>Remove shadow to any box element.</td>
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

Extras.propTypes = {};

Extras.defaultProps = {};

export default Extras;
