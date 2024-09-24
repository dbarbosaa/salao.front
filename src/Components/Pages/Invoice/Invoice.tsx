import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Invoice.module.scss';


const print = () => {
	window.print();
};
const Invoice = () => {
	return (
		<div className={styles.Invoice}>
			<Pageheader titles="Pages" active="Invoice" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col md={12} xl={12} className="">
					<div className="main-content-body-invoice">
						<Card className="card-invoice">
							<Card.Body>
								<div className="invoice-header">
									<h1 className="invoice-title">Invoice</h1>
									<div className="billed-from">
										<h6>BootstrapDash, Inc.</h6>
										<p>201 Something St., Something Town, YT 242, Country 6546<br />
											Tel No: 324 445-4544<br />
											Email: youremail@companyname.com</p>
									</div>
									{/* <!-- billed-from --> */}
								</div>
								{/* <!-- invoice-header --> */}
								<Row className="mg-t-20">
									<div className="col-md">
										<label className="tx-gray-600">Billed To</label>
										<div className="billed-to">
											<h6>Juan Dela Cruz</h6>
											<p>4033 Patterson Road, Staten Island, NY 10301<br />
												Tel No: 324 445-4544<br />
												Email: youremail@companyname.com</p>
										</div>
									</div>
									<div className="col-md">
										<label className="tx-gray-600">Invoice Information</label>
										<p className="invoice-info-row"><span>Invoice No</span> <span>GHT-673-00</span></p>
										<p className="invoice-info-row"><span>Project ID</span> <span>32334300</span></p>
										<p className="invoice-info-row"><span>Issue Date:</span> <span>November 21, 2017</span></p>
										<p className="invoice-info-row"><span>Due Date:</span> <span>November 30, 2017</span></p>
									</div>
								</Row>
								<div className="table-responsive mg-t-40">
									<Table className="table table-invoice border text-md-nowrap mb-0">
										<thead>
											<tr>
												<th className="wd-20p">Type</th>
												<th className="wd-40p">Description</th>
												<th className="tx-center">QNTY</th>
												<th className="tx-right">Unit Price</th>
												<th className="tx-right">Amount</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Website Design</td>
												<td className="tx-12">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...</td>
												<td className="tx-center">2</td>
												<td className="tx-right">$150.00</td>
												<td className="tx-right">$300.00</td>
											</tr>
											<tr>
												<td>Firefox Plugin</td>
												<td className="tx-12">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</td>
												<td className="tx-center">1</td>
												<td className="tx-right">$1,200.00</td>
												<td className="tx-right">$1,200.00</td>
											</tr>
											<tr>
												<td>iPhone App</td>
												<td className="tx-12">Et harum quidem rerum facilis est et expedita distinctio</td>
												<td className="tx-center">2</td>
												<td className="tx-right">$850.00</td>
												<td className="tx-right">$1,700.00</td>
											</tr>
											<tr>
												<td>Android App</td>
												<td className="tx-12">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut</td>
												<td className="tx-center">3</td>
												<td className="tx-right">$850.00</td>
												<td className="tx-right">$2,550.00</td>
											</tr>
											<tr>
												<td className="valign-middle" colSpan={2} rowSpan={4}>
													<div className="invoice-notes">
														<label className="main-content-label tx-13">Notes</label>
														<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
													</div>
													{/* <!-- invoice-notes --> */}
												</td>
												<td className="tx-right">Sub-Total</td>
												<td className="tx-right" colSpan={2}>$5,750.00</td>
											</tr>
											<tr>
												<td className="tx-right">Tax (5%)</td>
												<td className="tx-right" colSpan={2}>$287.50</td>
											</tr>
											<tr>
												<td className="tx-right">Discount</td>
												<td className="tx-right" colSpan={2}>-$50.00</td>
											</tr>
											<tr>
												<td className="tx-right tx-uppercase tx-bold tx-inverse">Total Due</td>
												<td className="tx-right" colSpan={2}>
													<h4 className="tx-primary tx-bold">$5,987.50</h4>
												</td>
											</tr>
										</tbody>
									</Table>
								</div>

								<Link className="btn btn-purple float-end mt-3 ms-2" to="#">
									<i className="mdi mdi-currency-usd me-1"></i>Pay Now
								</Link>
								<Link to="#" className="btn btn-danger float-end mt-3 ms-2" onClick={() => print ()} >
									<i className="mdi mdi-printer me-1"></i>Print
								</Link>
								<Link to="#" className="btn btn-success float-end mt-3">
									<i className="mdi mdi-telegram me-1"></i>Send Invoice
								</Link>
							</Card.Body>
						</Card>
					</div>
				</Col>
				{/* <!-- COL-END --> */}
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Invoice.propTypes = {};

Invoice.defaultProps = {};

export default Invoice;
