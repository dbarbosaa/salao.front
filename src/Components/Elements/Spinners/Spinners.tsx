import React from 'react';
import styles from './Spinners.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';

const Spinners = () => {

	return (

		<div className={styles.Spinners}>
			<Pageheader titles="Elements" active="Spinner" />
			{/* <!-- container --> */}

			<Row>
				<Col xl={12} lg={12}>
					<Card className="" id="spinner">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Basic Example</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Spinner animation="border" className="" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="spinner2">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">BORDER SPINNERS</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Use the border spinners for a lightweight
									loading indicator..</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div>
										<Spinner animation="border" variant='primary' className="me-2" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
										<Spinner animation="border" variant='secondary' className="me-2" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
										<Spinner animation="border" variant='success' className="me-2" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
										<Spinner animation="border" variant='danger' className="me-2" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
										<Spinner animation="border" variant='warning' className="me-2" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
										<Spinner animation="border" variant='info' className="me-2" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
										<Spinner animation="border" variant='light' className="me-2" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
										<Spinner animation="border" variant='dark' className="me-2" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="spinner3">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">GROWING SPINNER</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">If you don’t fancy a border spinner, switch to
									the grow spinner. While it doesn’t technically spin, it does repeatedly grow!
								</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Spinner animation="grow" className="" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="spinner4">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">GROWING Color</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">If you don’t fancy a border spinner, switch to
									the grow spinner. While it doesn’t technically spin, it does repeatedly grow!
								</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Spinner animation="grow" variant='primary' className="me-2" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
									<Spinner animation="grow" variant='secondary' className="me-2" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
									<Spinner animation="grow" variant='success' className="me-2" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
									<Spinner animation="grow" variant='danger' className="me-2" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
									<Spinner animation="grow" variant='warning' className="me-2" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
									<Spinner animation="grow" variant='info' className="me-2" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
									<Spinner animation="grow" variant='light' className="me-2" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
									<Spinner animation="grow" variant='dark' className="me-2" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="spinner5">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">ALIGNMENT</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Use flexbox utilities or text alignment
									utilities to place spinners exactly where you need them in any situation.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="text-center mg-b-20">
										<Spinner animation="border" className="" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
									</div>
									<div className="text-end">
										<Spinner animation="border" className="" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="spinner6">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Size</Card.Title>
								<p className="mg-b-20">Add <code>.spinner-border-sm</code> and
									<code>.spinner-grow-sm</code> to make a smaller spinner that can quickly be used
									within other components.</p>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Spinner animation="border" size="sm" className="" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
									<Spinner animation="grow" size="sm" className="" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="spinner7">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Button</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">Use spinners within buttons to indicate an
									action is currently processing or taking place. You may also swap the text out
									of the spinner element and utilize button text as needed..</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<Button variant='secondary' className="me-2" disabled>
										<Spinner animation="border" size="sm" className="" role="status"
											aria-hidden="true"></Spinner>
										<span className="sr-only">Loading...</span>
									</Button>
									<Button variant='secondary' className="me-2" disabled>
										<Spinner animation="border" size="sm" className="me-2" role="status"
											aria-hidden="true"></Spinner>
										Loading...
									</Button>
								</div>
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

Spinners.propTypes = {};

Spinners.defaultProps = {};

export default Spinners;
