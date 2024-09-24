import React, { useState } from 'react';
import { Card, Col, Row, Alert, Button, Collapse, Form } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Alerts.module.scss';
//Datasource
import { BasicData, outlineAlert, solidAlert, linkAlert, dismissAlert, iconAlert, iconDismissable } from './Data/AlertData';

const Alerts = () => {

	const [showdata, setshowdata] = useState(BasicData);
	const [showdata1, setshowdata1] = useState(outlineAlert);
	const [showdata2, setshowdata2] = useState(solidAlert);
	const [showdata3, setshowdata3] = useState(dismissAlert);
	const [showdata4, setshowdata4] = useState(iconDismissable);

	//basicAlert
	function handleRemove(id) {
		const RemoveData = showdata.filter((ale) => ale.id !== id);
		setshowdata(RemoveData);
		
	}
	//outlineAlert
	function handleRemove1(id) {
		const RemoveData = showdata1.filter((outline) => outline.id !== id);
		setshowdata1(RemoveData);

	}
	//SolidAlert
	function handleRemove2(id) {
		const RemoveData = showdata2.filter((solid) => solid.id !== id);
		setshowdata2(RemoveData);

	}

	//dismissAlert
	function handleRemove3(id) {
		const RemoveData = showdata3.filter((dis) => dis.id !== id);
		setshowdata3(RemoveData);

	}
	//dismiss with iconAlert
	function handleRemove4(id) {
		const RemoveData = showdata4.filter((ids) => ids.id !== id);
		setshowdata4(RemoveData);
	}
	
	//Show Code variables

	const [i, seti] = useState(false)
	const [i2, seti2] = useState(false)
	const [i3, seti3] = useState(false)
	const [i4, seti4] = useState(false)
	const [i5, seti5] = useState(false)
	const [i6, seti6] = useState(false)
	const [i7, seti7] = useState(false)
	const [i8, seti8] = useState(false)

	let onOff = (val) => {
		seti(val)
		
	}
	return (

		<div className={styles.Alerts}>
			<Pageheader titles="Elements" active="Alerts" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card id="basic-alert">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">{"Basic alerts"}</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti(!i) }} />
							</div>
							<Card.Subtitle as='p' className="text-muted mb-3">Use one of the four required contextual
								classNames.</Card.Subtitle>


							<div className="text-wrap">
								<div className="example">
									{showdata.map((ale) => (
										<Alert key={Math.random()} variant={ale.color} className="" role="alert">
											<Button variant='' className="close" onClick={() => { handleRemove(ale.id) }}>
												<span aria-hidden="true">&times;</span>
											</Button>
											<strong>{ale.heading}</strong>{ale.description}
										</Alert>
									))}
								</div>
								<Collapse in={i} className="">
									<pre>
										<code>
											{`
<div className="example">
{showdata.map((ale) => (
	<Alert key={Math.random()} variant={ale.color} className="" role="alert">
		<Button variant='' className="close" onClick={() => { handleRemove(ale.id) }}>
			<span aria-hidden="true">&times;</span>
		</Button>
		<strong>{ale.heading}</strong>{ale.description}
	</Alert>
))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card id="outline-alert">
						<Card.Body>
							<div>
								<div className='d-flex'>
									<Card.Title as='h6' className="mb-1">{"Default alerts"}</Card.Title>
									<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti2(!i2) }} />
								</div>
								<Card.Subtitle as='p' className="text-muted mb-3">Use one of the four required contextual
									classNames.</Card.Subtitle>

							</div>
							<div className="text-wrap">
								<div className="example">
									{showdata1.map((outline) => (
										<Alert key={Math.random()} variant='' className={outline.class}>
											<Button variant='' className="close" onClick={() => { handleRemove1(outline.id) }}>
												<span aria-hidden="true">&times;</span></Button>
											<strong>{outline.heading}</strong>{outline.description}
										</Alert>
									))}
								</div>
								<Collapse in={i2} className="">
									<pre>
										<code>
											{`
<div className="example">
{showdata1.map((outline) => (
	<Alert key={Math.random()} variant='' className={outline.class}>
		<Button variant='' className="close" onClick={() => { handleRemove1(outline.id) }}>
			<span aria-hidden="true">&times;</span></Button>
		<strong>{outline.heading}</strong>{outline.description}
	</Alert>
))}
</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card id="solid-alert">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Solid Colored Alerts</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti3(!i3) }} />
							</div>
							<Card.Subtitle as='p' className="text-muted mb-3">Use one of the four required contextual
								classNamees.</Card.Subtitle>


							<div className="text-wrap">
								<div className="example">
									{showdata2.map((solid) => (
										<Alert key={Math.random()} className={solid.class}>
											<Button variant='' className="close" onClick={() => { handleRemove2(solid.id) }}>
												<span aria-hidden="true">&times;</span></Button>
											<strong>{solid.heading}</strong>{solid.description}
										</Alert>
									))}

								</div>
								<Collapse in={i3} className="">
									<pre>
										<code>
											{`
<div className="example">
{showdata2.map((solid) => (
	<Alert key={Math.random()} className={solid.class}>
		<Button variant='' className="close" onClick={() => { handleRemove2(solid.id) }}>
			<span aria-hidden="true">&times;</span></Button>
		<strong>{solid.heading}</strong>{solid.description}
	</Alert>
))}

</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card className="custom-card" id="link-alerts">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Link color Alerts</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti4(!i4) }} />
							</div>
							<Card.Subtitle as='p' className="text-muted mb-3">Use the <code
								className="highlighter-rouge">.alert-link</code> utility className to quickly
								provide matching colored links within any alert.</Card.Subtitle>


							<div className="text-wrap">
								<div className="example">
									{linkAlert.map((link) => (
										<Alert key={Math.random()} className={link.class} variant={link.color}>
											This is a {link.text} alert with <Alert.Link href="#" className="">an example
												link</Alert.Link>. Give it a click if you like.
										</Alert>
									))}

								</div>
								<Collapse in={i4} className="">
									<pre>
										<code>
											{`
<div className="example">
{linkAlert.map((link) => (
	<Alert key={Math.random()} className={link.class} variant={link.color}>
		This is a {link.text} alert with <Alert.Link href="#" className="">an example
			link</Alert.Link>. Give it a click if you like.
	</Alert>
))}

</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="additional-alerts">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Additional Content Alert</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti5(!i5) }} />
							</div>
							<Card.Subtitle as='p' className="text-muted mb-3">Alerts can also contain additional HTML
								elements like headings, paragraphs and dividers.</Card.Subtitle>


							<div className="text-wrap">
								<div className="example">
									<Alert variant='success' className="mb-0">
										<h4 className="alert-heading">Well done!</h4>
										<p>Aww yeah, you successfully read this important alert message. This
											example text is going to run a bit longer so that you can see how
											spacing within an alert works with this kind of content.</p>
										<hr />
										<p className="mb-0">Whenever you need to, be sure to use margin utilities to
											keep things nice and tidy.</p>
									</Alert>
								</div>
								<Collapse in={i5} className="">
									<pre>
										<code>
											{`
*****Additional Content Alert*****

div className="example">
<Alert variant='success' className="mb-0">
	<h4 className="alert-heading">Well done!</h4>
	<p>Aww yeah, you successfully read this important alert message. This
		example text is going to run a bit longer so that you can see how
		spacing within an alert works with this kind of content.</p>
	<hr />
	<p className="mb-0">Whenever you need to, be sure to use margin utilities to
		keep things nice and tidy.</p>
</Alert>
</div>

`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="dismiss-alerts">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Dismissing Alerts</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti6(!i6) }} />
							</div>
							<Card.Subtitle as='p' className="text-muted mb-3">Using the alert JavaScript plugin, it’s
								possible to dismiss any alert inline.</Card.Subtitle>


							<div className="text-wrap">
								<div className="example">
									{showdata3.map((dis) => (
										<Alert key={Math.random()} variant={dis.color} className={dis.class}>
											<strong>Holy guacamole!</strong> You should check in on some of those fields
											below.
											<Button className="close" variant='' onClick={() => { handleRemove3(dis.id) }}>
												<span className={`text-${dis.color}`} aria-hidden="true">&times;</span>
											</Button>
										</Alert>
									))}

								</div>
								<Collapse in={i6} className="">
									<pre>
										<code>
											{`
*****ADismissing Alerts*****

<div className="example">
{showdata3.map((dis) => (
	<Alert key={Math.random()} variant={dis.color} className={dis.class}>
		<strong>Holy guacamole!</strong> You should check in on some of those fields
		below.
		<Button className="close" variant='' onClick={() => { handleRemove3(dis.id) }}>
			<span aria-hidden="true">&times;</span>
		</Button>
	</Alert>
))}

</div>

`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="icon-alerts">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Alert With Icon</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti7(!i7) }} />
							</div>
							<Card.Subtitle as='p' className="text-muted mb-3">Alerts can also contain additional HTML
								elements like headings, paragraphs and dividers.</Card.Subtitle>


							<div className="text-wrap">
								<div className="example">
									{iconAlert.map((ico) => (
										<Alert key={Math.random()} className="" variant={ico.color} role="alert">
											<span className="alert-inner--icon me-1">{ico.icon}</span>
											<span className="alert-inner--text"><strong>{ico.text}</strong> This is a {ico.text} alert-check it out that has an icon too!</span>
										</Alert>
									))}

								</div>
								<Collapse in={i7} className="">
									<pre>
										<code>
											{`
<div className="example">
{iconAlert.map((ico) => (
	<Alert key={Math.random()} className="" variant={ico.color} role="alert">
		<span className="alert-inner--icon me-1">{ico.icon}</span>
		<span className="alert-inner--text"><strong>{ico.text}</strong> This is a {ico.text} alert-check it out that has an icon too!</span>
	</Alert>
))}

</div>
`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="icon-dismissalerts">
						<Card.Body>
							<div className='d-flex'>
								<Card.Title as='h6' className="mb-1">Alert With Icon Dismissing</Card.Title>
								<Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti8(!i8) }} />
							</div>
							<Card.Subtitle as='p' className="text-muted mb-3">Alerts can also contain additional HTML
								elements like headings, paragraphs and dividers.</Card.Subtitle>


							<div className="text-wrap">
								<div className="example">
									{showdata4.map((ids) => (
										<Alert key={Math.random()} className={ids.class} variant={ids.color} role="alert">
											<span className="alert-inner--icon me-2">{ids.icon}</span>
											<span className="alert-inner--text"><strong>{ids.text}</strong> This is a {ids.text} alert—check it out!</span>
											<Button variant='' className="close" onClick={() => { handleRemove4(ids.id) }}>
												<span aria-hidden="true">×</span>
											</Button>
										</Alert>
									))}

								</div>
								<Collapse in={i8} className="">
									<pre>
										<code>
											{`
<div className="example">
{showdata4.map((ids) => (
	<Alert key={Math.random()} className={ids.class} variant={ids.color} role="alert">
		<span className="alert-inner--icon me-2">{ids.icon}</span>
		<span className="alert-inner--text"><strong>{ids.text}</strong> This is a {ids.text} alert—check it out!</span>
		<Button variant='' className="close" onClick={() => { handleRemove4(ids.id) }}>
			<span aria-hidden="true">×</span>
		</Button>
	</Alert>
))}

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
			{/* <!-- /row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;
