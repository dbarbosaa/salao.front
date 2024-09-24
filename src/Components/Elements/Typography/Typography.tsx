import React from 'react';
import styles from './Typography.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row, Table } from 'react-bootstrap';

const Typography = () => {

	return (

		<div className={styles.Typography}>
			<Pageheader titles="Elements" active="Typography" />
			{/* <!-- container --> */}

			{/* <!--row open --> */}
			<Row className="row-sm">
				<Col xl={6} md={12}>
					<Card>
						<Card.Header className="pb-0">
							<Card.Title as='h3' className="mb-2">Default Heading Text</Card.Title>
							<p className="mg-b-20 tx-13 text-muted">Examples using standard <code>h1</code> to
								<code>h6</code> html tags</p>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="example">
									<h1>h1. Heading</h1>
									<h2>h2. Heading</h2>
									<h3>h3. Heading</h3>
									<h4>h4. Heading</h4>
									<h5>h5. Heading</h5>
									<h6>h6. Heading</h6>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL-END --> */}
				<Col xl={6} md={12}>
					<Card>
						<Card.Header className="pb-0">
							<Card.Title as='h3' className="mb-2">HEADING WITH COLOR TEXT</Card.Title>
							<p className="mg-b-20 tx-13 text-muted">Examples using standard <code>h1</code> to
								<code>h6</code> html tags</p>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="example">
									<h1 className="text-primary">h1. Heading</h1>
									<h2 className="text-secondary">h2. Heading</h2>
									<h3 className="text-success">h3. Heading</h3>
									<h4 className="text-danger">h4. Heading</h4>
									<h5 className="text-info">h5. Heading</h5>
									<h6 className="text-warning">h6. Heading</h6>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL-END --> */}
			</Row>
			{/* <!-- row closed --> */}

			{/* <!--row open --> */}
			<Row className="row-sm">
				<Col xl={6} md={12}>
					<Card>
						<Card.Header className="pb-0">
							<Card.Title className="mb-2">HEADING-INVERSE</Card.Title>
							<p className="mg-b-20 tx-13 text-muted">Examples using <code>heading-inverse</code> css</p>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="example">
									<h1 className="heading-inverse">h1. Heading</h1>
									<h2 className="heading-inverse">h2. Heading</h2>
									<h3 className="heading-inverse">h3. Heading</h3>
									<h4 className="heading-inverse">h4. Heading</h4>
									<h5 className="heading-inverse">h5. Heading</h5>
									<h6 className="heading-inverse">h6. Heading</h6>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL-END --> */}
				<Col xl={6} md={12}>
					<Card>
						<Card.Header className="pb-0">
							<Card.Title className="mb-2">Heading primary to danger</Card.Title>
							<p className="mg-b-20 tx-13 text-muted">Examples using <code>heading-primary</code> to
								<code>heading-danger</code> css</p>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="example">
									<h1 className="heading-primary">h1. Heading</h1>
									<h2 className="heading-secondary">h2. Heading</h2>
									<h3 className="heading-success">h3. Heading</h3>
									<h4 className="heading-info">h4. Heading</h4>
									<h5 className="heading-warning">h5. Heading</h5>
									<h6 className="heading-danger">h6. Heading</h6>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- COL-END --> */}
			</Row>
			{/* <!-- row closed --> */}

			{/* <!--row open --> */}
			<Row>
				<Col xl={12} lg={12}>
					<Card className="mg-b-20" id="typography">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Font Size
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0">
									<tbody>
										<tr>
											<td className="bg-gray-100"><b>ClassNamees</b></td>
											<td><code>.tx-[size]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100"><b>Values</b></td>
											<td>8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 22 | 24 | ... |
												140</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0 mg-b-0">
									<tbody>
										<tr>
											<td className="bg-gray-100"><b>ClassNamees</b></td>
											<td><code>.tx-[viewport]-[size]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100"><b>Viewports</b></td>
											<td>xs | sm | md | lg | xl</td>
										</tr>
										<tr>
											<td className="bg-gray-100"><b>Sizes</b></td>
											<td>8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 22 | 24 | ... |
												140 (step of 2)</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>

					{/* <!--div--> */}
					<Card className="mg-b-20" id="typography">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Font Weight
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0 mg-b-0">
									<tbody>
										<tr>
											<td className="bg-gray-100"><b>ClassNamees</b></td>
											<td><code>.tx-[weight]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100"><b>Weight</b></td>
											<td>bold | semibold | medium | normal | light | thin | xthin</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
					{/* <!--/div--> */}

					{/* <!--div--> */}
					<Card className="mg-b-20" id="typography">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Font Color
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.tx-[color]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Colors</b></td>
											<td>primary | success | warning | danger | info | indigo | purple |
												orange | teal | pink | black | white | inverse</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.tx-gray-[num]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Colors</b></td>
											<td>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0 mg-b-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.tx-white-[transparency]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Colors</b></td>
											<td>2 | 3 | 4 | 5 | 6 | 7 | 8</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
					{/* <!--/div--> */}

					{/* <!--div--> */}
					<Card className="mg-b-20" id="typography">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Font Spacing
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.tx-spacing-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0 mg-b-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.tx-spacing--[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ( negative spacing result )</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
					{/* <!--/div--> */}

					{/* <!--div--> */}
					<Card id="typography">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Line Height
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.lh-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<div className="table-responsive">
								<Table className="main-table-reference text-nowrap mg-t-0 mg-b-0">
									<tbody>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>ClassNamees</b></td>
											<td><code>.lh-[viewport]-[value]</code></td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>View Port</b></td>
											<td>xs | sm | md | lg | xl</td>
										</tr>
										<tr>
											<td className="bg-gray-100 wd-20p"><b>Values</b></td>
											<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15</td>
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

Typography.propTypes = {};

Typography.defaultProps = {};

export default Typography;
