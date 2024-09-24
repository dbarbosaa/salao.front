import React, { useState } from 'react';
import styles from './Modals.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Rodal from "rodal";


const Modals = () => {
	const [Basic, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [show4, setShow4] = useState(false);
	const [show5, setShow5] = useState(false);
	const [show6, setShow6] = useState(false);
	const [show7, setShow7] = useState(false);
	const [show8, setShow8] = useState(false);
	const [show9, setShow9] = useState(false);
	const [visible, setVisible] = useState(false);

	const hide = () => {
        setVisible(false);
    };

	const [animation1, setanimation1] = useState(false);
	const [animation2, setanimation2] = useState(false);
	const [animation3, setanimation3] = useState(false);
	const [animation4, setanimation4] = useState(false);
	const [animation5, setanimation5] = useState(false);
	const [animation6, setanimation6] = useState(false);
	const [animation7, setanimation7] = useState(false);
	const [animation8, setanimation8] = useState(false);
	const [animation9, setanimation9] = useState(false);

	let viewDemoShow = (modal) => {
		switch (modal) {
			case "Basic":
				setShow1(true)
				break;
			case "show2":
				setShow2(true)
				break;
			case "show3":
				setShow3(true)
				break;
			case "show4":
				setShow4(true)
				break;
			case "show5":
				setShow5(true)
				break;
			case "show6":
				setShow6(true)
				break;
			case "show7":
				setShow7(true)
				break;
			case "show8":
				setShow8(true)
				break;
			case "show9":
				setShow9(true)
				break;
		}
	}

	let viewDemoClose = (modal) => {
		switch (modal) {
			case "Basic":
				setShow1(false)
				break;
			case "show2":
				setShow2(false)
				break;
			case "show3":
				setShow3(false)
				break;
			case "show4":
				setShow4(false)
				break;
			case "show5":
				setShow5(false)
				break;
			case "show6":
				setShow6(false)
				break;
			case "show7":
				setShow7(false)
				break;
			case "show8":
				setShow8(false)
				break;
			case "show9":
				setShow9(false)
				break;
		}
	}

	let viewDemoShow1 = (modal) => {
		switch (modal) {
			case "Basic":
				setanimation1(true)
				break;
			case "show2":
				setanimation2(true)
				break;
			case "show3":
				setanimation3(true)
				break;
			case "show4":
				setanimation4(true)
				break;
			case "show5":
				setanimation5(true)
				break;
			case "show6":
				setanimation6(true)
				break;
			case "show7":
				setanimation7(true)
				break;
			case "show8":
				setanimation8(true)
				break;
			case "show9":
				setanimation9(true)
				break;
		}
	}

	let viewDemoClose1 = (modal) => {
		switch (modal) {
			case "Basic":
				setanimation1(false)
				break;
			case "show2":
				setanimation2(false)
				break;
			case "show3":
				setanimation3(false)
				break;
			case "show4":
				setanimation4(false)
				break;
			case "show5":
				setanimation5(false)
				break;
			case "show6":
				setanimation6(false)
				break;
			case "show7":
				setanimation7(false)
				break;
			case "show8":
				setanimation8(false)
				break;
			case "show9":
				setanimation9(false)
				break;
		}
	}

	const ModalData = [
		{ value: "Firefox", label: "Firefox" },
		{ value: "Chrome", label: "Chrome" },
		{ value: "Safari", label: "Safari" },
		{ value: "Opera", label: "Opera" },
		{ value: "Internet Explore", label: "Internet Explore" },
	];

	return (
		<div className={styles.Modals}>
			<Pageheader titles="Advanced ui" active="Modals" />

			{/* <!-- container --> */}
			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Basic Example of Modal View</Card.Title>
								<p className="text-muted card-sub-title">Below is the static example of the basic modal.
								</p>
							</div>
							<div className="pd-20 bg-light text-dark">
								<div className="modal d-block pos-relative basic-modal">
									<div className="modal-dialog" role="document">
										<div className="modal-content modal-content-demo">
											<div className="modal-header">
												<h6 className="modal-title">Modal Header</h6><button aria-label="Close"
													className="close" data-bs-dismiss="modal" type="button"><span
														aria-hidden="true">&times;</span></button>
											</div>
											<div className="modal-body">
												<h6>Modal Body</h6>
												<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
													aut fugit, sed quia consequuntur magni dolores eos qui ratione
													voluptatem sequi nesciunt.</p>
											</div>
											<div className="modal-footer">
												<button className="btn ripple btn-primary" type="button">Save
													changes</button>
												<button className="btn ripple btn-secondary"
													type="button">Close</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row>
				<Col sm={4} md={6} lg={4}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as="h6">Basic Modal</Card.Title>
							</div>
							<Button variant='primary' className="ripple" onClick={() => viewDemoShow("Basic")}>View Demo</Button>
							<Modal show={Basic} backdrop="static" keyboard={false}>
								<Modal.Header >
									<Modal.Title>Basic Modal</Modal.Title>
									<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose("Basic") }}><i className='fe fe-x ms-auto'></i></span></Link>
								</Modal.Header>
								<Modal.Body>
									<h6>Modal Body</h6>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
								</Modal.Body>
								<Modal.Footer>
									<Button className='ripple' variant="primary">Save Changes</Button>
									<Button className='ripple' variant="secondary" onClick={() => { viewDemoClose("Basic") }}>Close</Button>
								</Modal.Footer>
							</Modal>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={4} md={6} lg={4}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as="h6">Small Modal</Card.Title>
							</div>
							<Button variant="secondary" className="ripple" onClick={() => viewDemoShow("show2")}>View Demo</Button>
							<Modal size="sm" show={show2} >
								<Modal.Header>
									<Modal.Title>Small Modal</Modal.Title>
									<Link to= '#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose("show2") }}><i className='fe fe-x ms-auto'></i></span></Link>
								</Modal.Header>
								<Modal.Body>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Modal.Body>
								<Modal.Footer>
									<Button className='ripple' variant="primary">
										Save Changes
									</Button>
									<Button className='ripple' variant="secondary" onClick={() => { viewDemoClose("show2") }}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={4} md={6} lg={4}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6'>Large Modal</Card.Title>
							</div>
							<Button variant='info' className="ripple btn-b" onClick={() => viewDemoShow("show3")}>View Demo</Button>
							<Modal size="lg" show={show3}>
								<Modal.Header>
									<Modal.Title>Large Modal</Modal.Title>
									<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose("show3") }}><i className='fe fe-x ms-auto'></i></span></Link>
								</Modal.Header>

								<Modal.Body><h6>Modal Body</h6>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Modal.Body>
								<Modal.Footer>
									<Button className='ripple' variant="primary">
										Save Changes
									</Button>
									<Button className='ripple' variant="secondary" onClick={() => { viewDemoClose("show3") }}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={4} md={6} lg={4}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6'>Grid Modal</Card.Title>
							</div>
							<Button variant='warning' className="ripple" onClick={() => viewDemoShow("show4")}>View Demo</Button>
							<Modal size="lg" show={show4}>
								<Modal.Header>
									<Modal.Title>Grid Modal</Modal.Title>
									<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose("show4") }}><i className='fe fe-x ms-auto'></i></span></Link>
								</Modal.Header>
								<Modal.Body>
									<Row>
										<Col md={6}>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
												laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
												architecto beatae vitae dicta sunt explicabo.</p>
										</Col>
										<Col md={6}>
											<p>But I must explain to you how all this mistaken idea of denouncing pleasure and
												praising pain was born and I will give you a complete account of the who loves toil
												and pain can procureor sit aspernatur system.</p>
										</Col>
									</Row>
									<Row>
										<Col md={6}>
											<p>expound the actual teachings of the great explorer of the truth, the master-builder
												of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it
												is pleasure desires to obtain pain.</p>
										</Col>
										<Col md={6}>
											<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
												adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
												magnam aliquam quaerat aut odit voluptatem.</p>
										</Col>
									</Row>
								</Modal.Body>
								<Modal.Footer>
									<Button className='ripple' variant="primary">
										Save Changes
									</Button>
									<Button className='ripple' variant="secondary" onClick={() => { viewDemoClose("show4") }}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={4} md={6} lg={4}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6'>Modal Success Alert Messages</Card.Title>
							</div>
							<Button variant='success' className="ripple" onClick={() => viewDemoShow("show5")}>View Demo</Button>
							<Modal show={show5} backdrop="static" centered>
								<Modal.Body className="text-center p-4 pb-5" >
									<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose("show5") }}><i className='fe fe-x ms-auto'></i></span></Link>
									<i className="icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 mg-t-20 d-inline-block"></i>
									<h4 className="tx-success tx-semibold mg-b-20">Congratulations!</h4>
									<p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
									<Button variant="success" className='ripple pd-x-25' onClick={() => { viewDemoClose("show5") }}>Continue</Button>
								</Modal.Body>
							</Modal>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={4} md={6} lg={4}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6'>Modal Danger Alert Messages</Card.Title>
							</div>
							<Button variant='danger' className="ripple" onClick={() => viewDemoShow("show6")}>View Demo</Button>
							<Modal show={show6} backdrop="static" centered>
								<Modal.Body className="text-center p-4 pb-5" >
									<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose("show6") }}><i className='fe fe-x ms-auto'></i></span></Link>
									<i className="icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"></i>
									<h4 className="tx-danger mg-b-20">Error: Cannot process your entry!</h4>
									<p className="mb-4 mx-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
									<Button variant="danger" className='ripple pd-x-25' onClick={() => { viewDemoClose("show6") }}>Continue</Button>
								</Modal.Body>
							</Modal>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={6} md={6} lg={4}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6'>Select2 Inside Modals</Card.Title>
							</div>
							<Button className="ripple btn-teal" onClick={() => viewDemoShow("show7")}>View Demo</Button>
							<Modal show={show7} >
								<Modal.Header>
									<Modal.Title>Select2 Modal</Modal.Title>
									<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose("show7") }}><i className='fe fe-x ms-auto'></i></span></Link>
								</Modal.Header>
								<Modal.Body>
									<h6>Modal Body</h6>
									<Select classNamePrefix="Select-sm" options={ModalData} placeholder='Choose one' />
									<p className='mt-3'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
								</Modal.Body>
								<Modal.Footer>
									<Button className='ripple' variant="primary">
										Save Changes
									</Button>
									<Button className='ripple' variant="secondary" onClick={() => { viewDemoClose("show7") }}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={6} md={6} lg={4}>
					<div className="card custom-card">
						<div className="card-body">
							<div>
								<h6 className="card-title">Scrolling Modal</h6>
							</div>
							<Button variant='primary' className="ripple" onClick={() => viewDemoShow("show8")}>View Demo</Button>
							<Modal show={show8} backdrop="static" keyboard={false}>
								<Modal.Header>
									<Modal.Title>Scrolling With Content Modal</Modal.Title>
									<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose("show8") }}><i className='fe fe-x ms-auto'></i></span></Link>
								</Modal.Header>
								<Modal.Body>
									<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
										consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
										was born and I will give you a complete account of the system, and expound the actual
										teachings of the great explorer of the truth, the master-builder of human happiness. No one
										rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
										do not know how to pursue pleasure rationally encounter consequences that are extremely
										painful. </p>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
										voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
										cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
										est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
									<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
										and demoralized by the charms of pleasure of the moment, so blinded by desire, that they
										cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to
										those who fail in their duty through weakness of will, which is the same as saying through
										shrinking from toil and pain.</p>
									<p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
										choice is untrammelled and when nothing prevents our being able to do what we like best,
										every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
										owing to the claims of duty or the obligations of business it will frequently occur that
										pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds
										in these matters to this principle of selection: he rejects pleasures to secure other
										greater pleasures, or else he endures pains to avoid worse pains.</p>
								</Modal.Body>
								<Modal.Footer>
									<Button className='ripple' variant="primary" >Save Changes</Button>
									<Button className='ripple' variant="secondary" onClick={() => { viewDemoClose("show8") }}>Close</Button>
								</Modal.Footer>
							</Modal>
						</div>
					</div>
				</Col>
				<Col sm={6} md={12} lg={4}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6'>Scrolling with Content</Card.Title>
							</div>
							<Button variant='secondary' className="ripple" onClick={() => viewDemoShow("show9")}>View Demo</Button>
							<Modal className='modal-dialog-scrollable' show={show9} backdrop="static">
								<Modal.Header>
									<Modal.Title>Scrolling With Content Modal</Modal.Title>
									<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose("show9") }}><i className='fe fe-x ms-auto'></i></span></Link>
								</Modal.Header>
								<Modal.Body>
									<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
										consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
										was born and I will give you a complete account of the system, and expound the actual
										teachings of the great explorer of the truth, the master-builder of human happiness. No one
										rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
										do not know how to pursue pleasure rationally encounter consequences that are extremely
										painful. </p>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
										voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
										cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
										est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
									<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
										and demoralized by the charms of pleasure of the moment, so blinded by desire, that they
										cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to
										those who fail in their duty through weakness of will, which is the same as saying through
										shrinking from toil and pain.</p>
									<p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
										choice is untrammelled and when nothing prevents our being able to do what we like best,
										every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
										owing to the claims of duty or the obligations of business it will frequently occur that
										pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds
										in these matters to this principle of selection: he rejects pleasures to secure other
										greater pleasures, or else he endures pains to avoid worse pains.</p>
								</Modal.Body>
								<Modal.Footer>
									<Button className='ripple' variant="primary" >Save Changes</Button>
									<Button className='ripple' variant="secondary" onClick={() => { viewDemoClose("show9") }}>Close</Button>
								</Modal.Footer>
							</Modal>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<div className="row">
				<div className="col-lg-12 col-md-12">
					<div className="card custom-card">
						<div className="card-body">
							<div>
								<h6 className="card-title mb-1">Modal Animation Effects</h6>
								<p className="text-muted card-sub-title">Below are different kind of effects to choose
									from.</p>
							</div>
							<Row className="row-sm">
								<Col sm={6} md={4} xl={3} className="col-sm-6 col-md-4 col-xl-3">
									<Link to="#" className="modal-effect btn btn-outline-primary btn-block" onClick={() => viewDemoShow1("Basic")}>Zoom</Link>
									<Rodal onClose={hide} visible={animation1} animation='Zoom' height={280} onClick={() => viewDemoClose1("Basic")} >
										<div className='modal-header'>Modal Header
											<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("Basic") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</div>
										<div className='modal-body'>
											<h6>Modal Body</h6>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
										<div className='modal-footer'>
											<Button className="me-2" variant="primary" onClick={() => viewDemoClose1("Basic")}>Save Changes</Button>
											<Button variant="secondary" onClick={() => viewDemoClose1("Basic")}>Close</Button>
										</div>
									</Rodal>
								</Col>
								<Col sm={6} md={4} xl={3} className="mg-t-20 mg-sm-t-0">
									<Link to="#" className="modal-effect btn btn-outline-primary btn-block" onClick={() => viewDemoShow1("show2")}>Fade</Link>
									<Rodal onClose={hide} visible={animation2} animation='fade' height={280}>
										<div className='modal-header'>Modal Header
										<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show2") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</div>
										<div className='modal-body'>
											<h6>Modal Body</h6>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
										<div className='modal-footer'>
											<Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show2")}>Save Changes</Button>
											<Button variant="secondary" onClick={() => viewDemoClose1("show2")}>Close</Button>
										</div>
									</Rodal>
								</Col>
								<Col sm={6} md={4} xl={3} className="mg-t-20 mg-md-t-0">
									<Link to="#" className="modal-effect btn btn-outline-primary btn-block" onClick={() => viewDemoShow1("show3")}>Flip</Link>
									<Rodal onClose={hide} visible={animation3} animation='flip' height={280}>
										<div className='modal-header'>Modal Header
											<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show3") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</div>
										<div className='modal-body'>
											<h6>Modal Body</h6>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
										<div className='modal-footer'>
											<Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show3")}>Save Changes</Button>
											<Button variant="secondary" onClick={() => viewDemoClose1("show3")}>Close</Button>
										</div>
									</Rodal>
								</Col>
								<Col sm={6} md={4} xl={3} className="mg-t-20 mg-xl-t-0">
									<Link to="#" className="modal-effect btn btn-outline-primary btn-block" onClick={() => viewDemoShow1("show4")}>Door</Link>
									<Rodal onClose={hide} visible={animation4} animation='door' height={280}>
										<div className='modal-header'>Modal Header
											<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show4") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</div>
										<div className='modal-body'>
											<h6>Modal Body</h6>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
										<div className='modal-footer'>
											<Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show4")}>Save Changes</Button>
											<Button variant="secondary" onClick={() => viewDemoClose1("show4")}>Close</Button>
										</div>
									</Rodal>
								</Col>
								<Col sm={6} md={4} xl={3} className="mg-t-20">
									<Link to="#" className="modal-effect btn btn-outline-primary btn-block" onClick={() => viewDemoShow1("show5")}>Rotate</Link>
									<Rodal onClose={hide} visible={animation5} animation='rotate' height={280}>
										<div className='modal-header'>Modal Header
											<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show5") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</div>
										<div className='modal-body'>
											<h6>Modal Body</h6>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
										<div className='modal-footer'>
											<Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show5")}>Save Changes</Button>
											<Button variant="secondary" onClick={() => viewDemoClose1("show5")}>Close</Button>
										</div>
									</Rodal>
								</Col>
								<Col sm={6} md={4} xl={3} className="mg-t-20">
									<Link to="#" className="modal-effect btn btn-outline-primary btn-block" onClick={() => viewDemoShow1("show6")}>Slide-Up</Link>
									<Rodal onClose={hide} visible={animation6} animation='slideUp' height={280}>
										<div className='modal-header'>Modal Header
											<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show6") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</div>
										<div className='modal-body'>
											<h6>Modal Body</h6>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
										<div className='modal-footer'>
											<Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show6")}>Save Changes</Button>
											<Button variant="secondary" onClick={() => viewDemoClose1("show6")}>Close</Button>
										</div>
									</Rodal>
								</Col>
								<Col sm={6} md={4} xl={3} className="mg-t-20">
									<Link to="#" className="modal-effect btn btn-outline-primary btn-block" onClick={() => viewDemoShow1("show7")}>slide-Down</Link>
									<Rodal onClose={hide} visible={animation7} animation='slideDown' height={280}>
										<div className='modal-header'>Modal Header
											<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show7") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</div>
										<div className='modal-body'>
											<h6>Modal Body</h6>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
										<div className='modal-footer'>
											<Button className="me-2" variant="primary" >Save Changes</Button>
											<Button variant="secondary" onClick={() => viewDemoClose1("show7")}>Close</Button>
										</div>
									</Rodal>
								</Col>
								<Col sm={6} md={4} xl={3} className="mg-t-20">
									<Link to="#" className="modal-effect btn btn-outline-primary btn-block" onClick={() => viewDemoShow1("show8")}>slide-Left</Link>
									<Rodal onClose={hide} visible={animation8} animation='slideLeft' height={280}>
										<div className='modal-header'>Modal Header
											<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show8") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</div>
										<div className='modal-body'>
											<h6>Modal Body</h6>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
										<div className='modal-footer'>
											<Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show8")}>Save Changes</Button>
											<Button variant="secondary" onClick={() => viewDemoClose1("show8")}>Close</Button>
										</div>
									</Rodal>
								</Col>
								<Col sm={6} md={4} xl={3} className="mg-t-20">
									<Link to="#" className="modal-effect btn btn-outline-primary btn-block" onClick={() => viewDemoShow1("show9")}>slide-Right</Link>
									<Rodal onClose={hide} visible={animation9} animation='slideRight' height={280}>
										<div className='modal-header'>Modal Header
											<Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show9") }}><i className='fe fe-x ms-auto'></i></span></Link>
										</div>
										<div className='modal-body'>
											<h6>Modal Body</h6>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
										<div className='modal-footer'>
											<Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show9")}>Save Changes</Button>
											<Button variant="secondary" onClick={() => viewDemoClose1("show9")}>Close</Button>
										</div>
									</Rodal>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}
Modals.propTypes = {};

Modals.defaultProps = {};

export default Modals;