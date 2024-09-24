import React, { useState } from 'react';
import styles from './Toast.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row, Toast, Form, Collapse } from 'react-bootstrap';

const toastData = [
	{ id: 1, class: 'bg-secondary', icon: <i className="fe fe-home me-2"></i> },
	{ id: 2, class: 'bg-primary', icon: <i className="fe fe-compass me-2"></i> },
	{ id: 3, class: 'bg-success', icon: <i className="fe fe-check-circle me-2"></i> },
	{ id: 4, class: 'bg-info', icon: <i className="fe fe-info me-2"></i> }
];

const Toasts = () => {

	const [Basic, setBasic] = useState(true);
	const [ToastData, setToastData] = useState(toastData);
	const toggleShow = () => setBasic(!Basic);

	const [Timer, setTimer] = useState(true);
	setTimeout(() => {
		setTimer(false)
	}, 10000);


	const [Basic1, setBasic1] = useState(true);
	const toggleShow1 = () => setBasic1(!Basic1);

	const [Basic2, setBasic2] = useState(true);
	const toggleShow2 = () => setBasic2(!Basic2);

	const [Basic3, setBasic3] = useState(true);
	const toggleShow3 = () => setBasic3(!Basic3);

	const [Basic4, setBasic4] = useState(true);
	const toggleShow4 = () => setBasic4(!Basic4);

	const [Basic5, setBasic5] = useState(true);
	const toggleShow5 = () => setBasic5(!Basic5);

	const [Basic6, setBasic6] = useState(true);
	const toggleShow6 = () => setBasic6(!Basic6);

	const removeItem = (id) => {
		let data = ToastData.filter((ele) => { return ele.id !== id })
		setToastData(data)
	}



	//Show Code variables

	const [i, seti] = useState(false)
	const [i2, seti2] = useState(false)
	const [i3, seti3] = useState(false)
	const [i4, seti4] = useState(false)
	const [i5, seti5] = useState(false)

	return (

		<div className={styles.Toast}>
			<Pageheader titles="Elements" active="Toast" />
			{/* <!-- container --> */}

			{/* <!-- Row --> */}
			<Row>
				<Col xl={12} lg={12}>
					<Card className="custom-card" id="basic">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Basic Example</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti(!i) }} />
							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Toasts are as flexible as you need and have
								very little required markup. At a minimum, we require a single element to
								contain your “toasted” content and strongly encourage a dismiss button.</Card.Subtitle>
							<div className="text-wrap">
								<div className="example">
									<Toast show={Basic} onClose={toggleShow}>
										<Toast.Header>
											<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
											<small className="text-muted">11 mins ago</small>
										</Toast.Header>
										<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
									</Toast>
								</div>
								<Collapse in={i} className="">
									<pre>
										<code>
											{`
<div className="example">
<Toast show={Basic} onClose={toggleShow}>
	<Toast.Header>
		<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
		<small className="text-muted">11 mins ago</small>
	</Toast.Header>
	<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="tarns">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Translucent</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti2(!i2) }} />
							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Toasts are slightly translucent, too, so they
								blend over whatever they might appear over.</Card.Subtitle>
							<div className="text-wrap">
								<div className="example">
									{Timer ?
										<Toast show={Basic1} onClose={toggleShow1}>
											<Toast.Header>
												<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
												<small className="text-muted">11 mins ago</small>
											</Toast.Header>
											<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
										</Toast> : ""}
								</div>
								<Collapse in={i2} className="">
									<pre>
										<code>
											{`
<div className="example">
{Timer ?
	<Toast show={Basic1} onClose={toggleShow1}>
		<Toast.Header>
			<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
			<small className="text-muted">11 mins ago</small>
		</Toast.Header>
		<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
	</Toast> : ""}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="stacking">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Stacking</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti3(!i3) }} />
							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">When you have multiple toasts, we default to
								vertiaclly stacking them in a readable manner.</Card.Subtitle>
							<div className="text-wrap">
								<div className="example">
									<div className="demo-static-toast">
										{Timer ?
											<Toast show={Basic2} onClose={toggleShow2}>
												<Toast.Header>
													<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
													<small className="text-muted">just now</small>
												</Toast.Header>
												<Toast.Body>See? Just like this.</Toast.Body>
											</Toast> : ""}

										<Toast show={Basic3} onClose={toggleShow3}>
											<Toast.Header>
												<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
												<small className="text-muted">11 mins ago</small>
											</Toast.Header>
											<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
										</Toast>
									</div>
								</div>
								<Collapse in={i3} className="">
									<pre>
										<code>
											{`
<div className="example">
<div className="demo-static-toast">
	{Timer ?
		<Toast show={Basic2} onClose={toggleShow2}>
			<Toast.Header>
				<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
				<small className="text-muted">just now</small>
			</Toast.Header>
			<Toast.Body>See? Just like this.</Toast.Body>
		</Toast> : ""}

	<Toast show={Basic3} onClose={toggleShow3}>
		<Toast.Header>
			<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
			<small className="text-muted">11 mins ago</small>
		</Toast.Header>
		<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
	</Toast>
</div>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="place">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Placement</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti4(!i4) }} />
							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Place toasts with custom CSS as you need them.
								The top right is often used for notifications, as is the top middle.</Card.Subtitle>
							<div className="text-wrap mb-3">
								<div className="example">
									<div className="ht-150 pos-relative mb-3">
										<div className="demo-static-toast pos-absolute t-10">
											<Toast show={Basic4} onClose={toggleShow4}>
												<Toast.Header>
													<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
													<small className="text-muted">11 mins ago</small>
												</Toast.Header>
												<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
											</Toast>
										</div>

									</div>
								</div>
							</div>
							<div className="text-wrap mb-3">
								<div className="example">
									<div className="demo-static-toast d-flex justify-content-center align-items-center">
										<Toast show={Basic5} onClose={toggleShow5}>
											<Toast.Header>
												<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
												<small className="text-muted">11 mins ago</small>
											</Toast.Header>
											<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
										</Toast>
									</div>
								</div>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="ht-150 pos-relative">
										<div className="demo-static-toast pos-absolute b-10 r-10">
											<Toast show={Basic6} onClose={toggleShow6}>
												<Toast.Header>
													<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
													<small className="text-muted">11 mins ago</small>
												</Toast.Header>
												<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
											</Toast>
										</div>
									</div>
								</div>
							</div>
							<Collapse in={i4} className="">
								<pre>
									<code>
										{`
<div className="text-wrap mb-3">
<div className="example">
	<div className="ht-150 pos-relative mb-3">
		<div className="demo-static-toast pos-absolute t-10">
			<Toast show={Basic4} onClose={toggleShow4}>
				<Toast.Header>
					<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
					<small className="text-muted">11 mins ago</small>
				</Toast.Header>
				<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
			</Toast>
		</div>

	</div>
</div>
</div>
<div className="text-wrap mb-3">
<div className="example">
	<div className="demo-static-toast d-flex justify-content-center align-items-center">
		<Toast show={Basic5} onClose={toggleShow5}>
			<Toast.Header>
				<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
				<small className="text-muted">11 mins ago</small>
			</Toast.Header>
			<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
		</Toast>
	</div>
</div>
</div>
<div className="text-wrap">
<div className="example">
	<div className="ht-150 pos-relative">
		<div className="demo-static-toast pos-absolute b-10 r-10">
			<Toast show={Basic6} onClose={toggleShow6}>
				<Toast.Header>
					<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
					<small className="text-muted">11 mins ago</small>
				</Toast.Header>
				<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
			</Toast>
		</div>
	</div>
</div>
</div>
`}
									</code>
								</pre>
							</Collapse>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}
			<Row>
				<Col xl={12}>
					<Card className="custom-card" id="tarns">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Color Toasts</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti5(!i5) }} />
							</div>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">Toasts are slightly translucent, too, so they blend over whatever they might appear over.</Card.Subtitle>
							<div className="text-wrap">
								<div className="example d-flex">
									<Row>
										<Col xl={12}>
											<Row>
												{ToastData.map((idx) => (
													<Col xl={6} md={12} key={Math.random()}>
														<Toast className="mt-2 mb-2 fade show">
															<Toast.Header onClick={() => { removeItem(idx.id); }} className={`${idx.class} text-white`}>{idx.icon}
																<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
																<small className="">11 mins ago</small>
															</Toast.Header>
															<Toast.Body className="p-3">Hello, world! This is a toast message.</Toast.Body>
														</Toast>
													</Col>
												))}
											</Row>
										</Col>
									</Row>
								</div>
								<Collapse in={i5} className="">
									<pre>
										<code>
											{`
<div className="example d-flex">
<Row>
	<Col xl={12}>
		<Row>
			{ToastData.map((idx) => (
				<Col xl={6} md={12} key={Math.random()}>
					<Toast className="mt-2 mb-2 fade show">
						<Toast.Header onClick={() => { removeItem(idx.id); }} className={{idx.class} text-white}>{idx.icon}
							<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
							<small className="">11 mins ago</small>
						</Toast.Header>
						<Toast.Body className="p-3">Hello, world! This is a toast message.</Toast.Body>
					</Toast>
				</Col>
			))}
		</Row>
	</Col>
</Row>
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- Container closed --> */}
		</div>
	)
};

Toast.propTypes = {};

Toast.defaultProps = {};

export default Toasts;
