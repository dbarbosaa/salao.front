import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Position.module.scss';

const Position = () => {

	return (
		
		<div className={styles.Position}>
			<Pageheader titles="Utilities" active="Position" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Set Position
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0 mb-0">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.pos-relative</code></td>
											<td>Set a relative position to an element.</td>
										</tr>
										<tr>
											<td><code>.pos-absolute</code></td>
											<td>Set an absolute position to an element.</td>
										</tr>
										<tr>
											<td><code>.pos-fixed</code></td>
											<td>Set a fixed position to an element.</td>
										</tr>
										<tr>
											<td><code>.pos-static</code></td>
											<td>Set a static position to an element.</td>
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
								Cornering
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference  text-nowrap mg-t-0 mb-0">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.t-[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
										</tr>
										<tr>
											<td><code>.r-[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
										</tr>
										<tr>
											<td><code>.b-[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
										</tr>
										<tr>
											<td><code>.l-[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
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
								X and Y Position
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0 mb-0">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.t-[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
										</tr>
										<tr>
											<td><code>.r-[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
										</tr>
										<tr>
											<td><code>.b-[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
										</tr>
										<tr>
											<td><code>.l-[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
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
								Negative Corner
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0 mb-0">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.t--[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
										</tr>
										<tr>
											<td><code>.r--[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
										</tr>
										<tr>
											<td><code>.b--[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
										</tr>
										<tr>
											<td><code>.l--[value]</code></td>
											<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
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
								Z-Index Property
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference mg-t-0 mb-0">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>.z-index-[value]</code></td>
											<td>10 | 50 | 100 | 150 | 200</td>
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

Position.propTypes = {};

Position.defaultProps = {};

export default Position;
