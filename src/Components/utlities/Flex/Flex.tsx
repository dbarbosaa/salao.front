import React from 'react';
import styles from './Flex.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';

const Flex = () => {

	return (

		<div className={styles.Flex}>
			<Pageheader titles="Utilities" active="Flex" />
			{/* <!-- container --> */}

			{/* <!-- row  --> */}
			<Row className="row-sm">
				<Col md={12} xl={12} xs={12} sm={12}>
					{/* <!--div--> */}
					<Card className="flex-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Enable Flex
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="d-flex pd-10 bg-gray-200">
								I'm a flexbox container!
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="flex-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Direction
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div>
								<div className="d-flex flex-row bg-gray-200 mg-b-20">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
								<div className="d-flex flex-row-reverse bg-gray-200">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="flex-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Justify Content
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div>
								<div className="d-flex flex-row justify-content-start bg-gray-200 mg-b-20">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
								<div className="d-flex flex-row justify-content-end bg-gray-200 mg-b-20">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
								<div className="d-flex flex-row justify-content-center bg-gray-200 mg-b-20">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
								<div className="d-flex flex-row justify-content-between bg-gray-200 mg-b-20">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
								<div className="d-flex flex-row justify-content-around bg-gray-200">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="flex-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Align Items
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div>
								<div className="d-flex flex-row align-items-start bg-gray-200 ht-100 mg-b-20">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
								<div className="d-flex flex-row align-items-center bg-gray-200 ht-100 mg-b-20">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
								<div className="d-flex flex-row align-items-end bg-gray-200 ht-100 mg-b-20">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
								<div className="d-flex flex-row align-items-stretch bg-gray-200 ht-100">
									<div className="pd-10 bg-gray-400">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-600">
										Flex item 3
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="flex-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Align Self
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div>
								<div className="d-flex flex-row bg-gray-200 ht-100 mg-b-20">
									<div className="pd-10 bg-gray-300 align-self-start">
										Flex item 1
									</div>
									<div className="pd-10 bg-gray-400 align-self-center">
										Flex item 2
									</div>
									<div className="pd-10 bg-gray-500 align-self-end">
										Flex item 3
									</div>
									<div className="pd-10 bg-gray-400 align-self-stretch">
										Flex item 4
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="flex-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Fill
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div>
								<div className="d-flex bg-gray-200">
									<div className="pd-10 bg-gray-300 flex-fill">
										Flex item with a lot of content
									</div>
									<div className="pd-10 bg-gray-400 flex-fill">
										Flex item
									</div>
									<div className="pd-10 bg-gray-500 flex-fill">
										Flex item
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="flex-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Grow and Shrink
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div>
								<div className="d-flex bg-gray-200">
									<div className="pd-10 bg-gray-300 flex-grow-1">
										Flex item
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item
									</div>
									<div className="pd-10 bg-gray-600">
										Third flex item
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="flex-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Auto Margins
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div>
								<div className="d-flex bg-gray-200">
									<div className="pd-10 bg-gray-400">
										Flex item
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item
									</div>
									<div className="pd-10 bg-gray-500 mg-l-auto">
										Third flex item
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col md={12} xl={12} xs={12} sm={12}>
					<Card className="flex-card">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Auto Margins
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div>
								<div className="d-flex bg-gray-200">
									<div className="pd-10 bg-gray-400">
										Flex item
									</div>
									<div className="pd-10 bg-gray-500">
										Flex item
									</div>
									<div className="pd-10 bg-gray-500 mg-l-auto">
										Third flex item
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}
			</Row>
			{/* <!-- row closed --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

Flex.propTypes = {};

Flex.defaultProps = {};

export default Flex;
