import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Display.module.scss';

const Display = () => {

	return (

		<div className={styles.Display}>
			<Pageheader titles="Utilities" active="Display" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Basic Display
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mb-0 mg-t-5">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.d-inline</code></td>
											<td>Set an inline display property of an element.</td>
										</tr>
										<tr>
											<td><code>.d-inline-block</code></td>
											<td>Set an inline-block display property of an element.</td>
										</tr>
										<tr>
											<td><code>.d-block</code></td>
											<td>Set a block display property of an element.</td>
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
								Hiding Elements
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference  text-nowrap mb-0 mg-t-5">
									<thead>
										<tr>
											<th className="wd-40p">ClassName</th>
											<th className="wd-60p">Screen Size</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.d-none</code></td>
											<td>Hidden on all</td>
										</tr>
										<tr>
											<td><code>.d-none .d-sm-block</code></td>
											<td>Hidden only on xs</td>
										</tr>
										<tr>
											<td><code>.d-sm-none .d-md-block</code></td>
											<td>Hidden only on sm</td>
										</tr>
										<tr>
											<td><code>.d-md-none .d-lg-block</code></td>
											<td>Hidden only on md</td>
										</tr>
										<tr>
											<td><code>.d-lg-none .d-xl-block</code></td>
											<td>Hidden only on lg</td>
										</tr>
										<tr>
											<td><code>.d-xl-none</code></td>
											<td>Hidden only on xl</td>
										</tr>
										<tr>
											<td><code>.d-block</code></td>
											<td>Visible on all</td>
										</tr>
										<tr>
											<td><code>.d-block .d-sm-none</code></td>
											<td>Visible only on xs</td>
										</tr>
										<tr>
											<td><code>.d-none .d-sm-block .d-md-none</code></td>
											<td>Visible only on sm</td>
										</tr>
										<tr>
											<td><code>.d-none .d-md-block .d-lg-none</code></td>
											<td>Visible only on md</td>
										</tr>
										<tr>
											<td><code>.d-none .d-lg-block .d-xl-none</code></td>
											<td>Visible only on lg</td>
										</tr>
										<tr>
											<td><code>.d-none .d-xl-block</code></td>
											<td>Visible only on xl</td>
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

Display.propTypes = {};

Display.defaultProps = {};

export default Display;
