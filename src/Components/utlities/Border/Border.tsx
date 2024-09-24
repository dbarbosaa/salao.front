import React from 'react';
import styles from './Border.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row, Table } from 'react-bootstrap';

const Border = () => {

	return (

		<div className={styles.Border}>
			<Pageheader titles="Utilities" active="Border" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card className="border-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Set Border
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<Row>
								<Col md={6} xl={3}>
									<div className="p-3 p-3 bg-gray-100 bd bd-2">.border</div>
									<div className="p-3 p-3 bg-gray-100 bd-l bd-2 mt-4 mb-4 mb-xl-0">.border-start</div>
								</Col>
								<Col md={6} xl={3}>
									<div className="p-3 p-3 bg-gray-100 bd-t bd-2 ">.border-top</div>
									<div className="p-3 p-3 bg-gray-100 bd-y bd-2 mt-4 mb-4 mb-xl-0">.border-top &
										.border-bottom</div>
								</Col>
								<Col md={6} xl={3}>
									<div className="p-3 p-3 bg-gray-100 bd-r bd-2">.border-end</div>
									<div className="p-3 p-3 bg-gray-100 bd-x bd-2 mt-4 mb-4 mb-xl-0">.border-start &
										.border-end</div>
								</Col>
								<Col md={6} xl={3}>
									<div className="p-3 p-3 bg-gray-100 bd-b bd-2 mb-0">.border-bottom</div>
								</Col>

							</Row>
							<div className="table-responsive mg-t-25">
								<Table className="main-table-reference text-nowrap mg-b-0 mg-t-10">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd"</code></td>
											<td>Add border in all sides of an element using default color and width.
											</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd-t"</code></td>
											<td>Add border to top side of element.</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd-r"</code></td>
											<td>Add border to right side of element.</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd-b"</code></td>
											<td>Add border to bottom side of element.</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd-l"</code></td>
											<td>Add border to left side of element.</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd-x"</code></td>
											<td>Add border to left and right side of element.</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd-y"</code></td>
											<td>Add border to top and bottom side of element.</td>
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
					<Card className="border-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Border Sizes
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<Row>
								<Col md={6} xl={3}>
									<div className="p-3 p-3 bg-gray-100 bd mb-4 mb-xl-0">.border</div>
								</Col>
								<Col md={6} xl={3}>
									<div className="p-3 p-3 bg-gray-100 bd bd-2 mb-4 mb-xl-0">.border</div>
								</Col>
								<Col md={6} xl={3}>
									<div className="p-3 p-3 bg-gray-100 bd bd-3 mb-4 mb-xl-0">.border</div>
								</Col>
								<Col md={6} xl={3}>
									<div className="p-3 p-3 bg-gray-100 bd bd-4 mb-4 mb-xl-0">.border</div>
								</Col>
								<Col md={6} xl={3}>
									<div className="p-3 p-3 bg-gray-100 bd bd-5">.border</div>
								</Col>
							</Row>
							<div className="table-responsive mg-t-25">
								<Table className="main-table-reference text-nowrap mg-b-0 mg-t-10">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd"</code></td>
											<td>Set 1px (default) border to element.</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd bd-2"</code></td>
											<td>Set 2px border to element.</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd bd-3"</code></td>
											<td>Set 3px border to element.</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd bd-4"</code></td>
											<td>Set 4px border to element.</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">className="bd bd-5"</code></td>
											<td>Set 5px border to element.</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="mg-b-20 border-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Remove Border
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<Row>
								<Col md={6} xl={3} className="mb-4">
									<div className="p-3 p-3 bg-gray-100 bd bd-2 bd-t-0">.border</div>
								</Col>
								<Col md={6} xl={3} className="mb-4">
									<div className="p-3 p-3 bg-gray-100 bd bd-2 bd-r-0">.border</div>
								</Col>
								<Col md={6} xl={3} className="mb-4">
									<div className="p-3 p-3 bg-gray-100 bd bd-2 bd-b-0">.border</div>
								</Col>
								<Col md={6} xl={3} className="mb-4 mb-xl-0">
									<div className="p-3 p-3 bg-gray-100 bd bd-2 bd-l-0">.border</div>
								</Col>
								<Col md={6} xl={3} className="mb-4 mb-xl-0">
									<div className="p-3 p-3 bg-gray-100  bd bd-2 bd-x-0">.border</div>
								</Col>
								<Col md={6} xl={3} className="">
									<div className="p-3 p-3 bg-gray-100 bd bd-2 bd-y-0">.border</div>
								</Col>
							</Row>
							<div className="table-responsive mg-t-25">
								<Table className="main-table-reference text-nowrap mg-b-0 mg-t-10">
									<thead>
										<tr>
											<th className="wd-30p">ClassName</th>
											<th className="wd-70p">Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code className="pd-0 bg-transparent">.bd-t-0</code></td>
											<td>Remove top border of an element</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">.bd-r-0</code></td>
											<td>Remove right border of an element</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">.bd-b-0</code></td>
											<td>Remove bottom border of an element</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">.bd-l-0</code></td>
											<td>Remove left border of an element</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">.bd-x-0</code></td>
											<td>Remove left and right border of an element</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">.bd-y-0</code></td>
											<td>Remove top and bottom border of an element</td>
										</tr>
										<tr>
											<td><code className="pd-0 bg-transparent">.bd-[t||r|bl|x|y]-0-f</code></td>
											<td>Force remove border of any side of an element.</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="border-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Border Color
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<Row>
								<Col md={6} xl={3} className="mb-4">
									<div className="p-3 p-3 bd bd-2 bd-primary">.border</div>
								</Col>
								<Col md={6} xl={3} className="mb-4">
									<div className="p-3 p-3 bd bd-2 bd-success">.border</div>
								</Col>
								<Col md={6} xl={3} className="mb-4">
									<div className="p-3 p-3 bd bd-2 bd-warning">.border</div>
								</Col>
								<Col md={6} xl={3} className="mb-4">
									<div className="p-3 p-3 bd bd-2 bd-danger">.border</div>
								</Col>
								<Col md={6} xl={3} className="mb-4">
									<div className="p-3 p-3 bd bd-2 bd-info">.border</div>
								</Col>
								<Col md={6} xl={3} className="mb-4">
									<div className="p-3 p-3 bd bd-2 bd-gray-500">.border</div>
								</Col>
							</Row>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-b-0 mg-t-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code className="pd-0 bg-transparent">.bd-[value]</code></td>
											<td><code className="pd-0 bg-transparent">.bd-gray-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>primary | success | warning | danger | info | indigo | purple | pink
												| teal | orange</td>
											<td>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="border-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Border Radius
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="d-sm-flex d-block">
								<div className="wd-80 ht-80 bd bd-gray-500 rounded mb-sm-0 mb-2 ms-sm-0 ms-2"></div>
								<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-5 mb-sm-0 mb-2"></div>
								<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-10 mb-sm-0 mb-2"></div>
								<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-20 mb-sm-0 mb-2"></div>
								<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-30 mb-sm-0 mb-2"></div>
								<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-circle"></div>
							</div>
							<div className="table-responsive mg-t-20 mb-0">
								<Table className="main-table-reference text-nowrap mg-b-0 mg-t-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code className="pd-0 bg-transparent">.rounded</code></td>
											<td><code className="pd-0 bg-transparent">.rounded-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>Set a border radius of 2px (default) to an element.</td>
											<td>5 | 10 | 20 | 30 | 40 | 50 | circle</td>
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

Border.propTypes = {};

Border.defaultProps = {};

export default Border;
