import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Table, Form, Button } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Sweetalert.module.scss';
import Swal from "sweetalert2";

import Logo from '../../../assets/img/brand/favicon.png';
import whiteLogo from '../../../assets/img/brand/logo-white.png';

const Sweetalert = () => {
	const [title, settitle] = useState("Your message")
	const [logo, setlogo] = useState(Logo)
	const [message, setmessage] = useState("Your message")

	// useEffect()

	let changlog = ()=>{
		if(document.body.classList.contains("dark-theme") == true){
			
			setlogo(whiteLogo)
		}
	}

	let simpleAlert = () => {
		Swal.fire({
			text: message,
			showConfirmButton: true,
			confirmButtonColor: '#705ec8',
		});
	}

	let titleAlert = () => {
		Swal.fire({
			title: title,
			text: message,
			showConfirmButton: true,
			confirmButtonColor: '#705ec8',
		});
	}

	let imageAlert = () => {
		Swal.fire({
			title: title,
			text: message,
			imageUrl: logo,
			imageAlt: 'Custom image',
			confirmButtonColor: '#705ec8',
		});
	}

	let timerAlert = () => {
		Swal.fire({
			title: title,
			html: 'New Notification From valex (Close after 2 Seconds)',
			timer: 2000,
			timerProgressBar: true,
			showConfirmButton: false,
		});
	}

	let BasicAlert = () => {
		Swal.fire('Welcome to Your Admin Page')
	}

	let TitleAlert = () => {
		Swal.fire({
			title: 'Here is a Title !!',
			text: 'All are available in the template',
		});
	}
	let SuccessAlert = () => {
		Swal.fire({
			icon: 'success',
			title: 'Well done!',
			text: 'You clicked the button!',
		});
	}
	let WarningAlert = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: "Your will not be able to recover this imaginary file!",
			icon: 'warning',
			confirmButtonText: 'Yes, delete it!',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					'Deleted!',
					'Your imaginary file has been deleted.',
					'success'
				)
			}
		})
	}

	let PassingparameterAlert = () => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: 'btn btn-primary',
				cancelButton: 'btn btn-primary me-2'
			},
			buttonsStyling: false
		})

		swalWithBootstrapButtons.fire({
			title: 'Are you sure?',
			text: "You will not be able to recover this imaginary file!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, cancel plx!',
			reverseButtons: true
		}).then((result) => {
			if (result.isConfirmed) {
				swalWithBootstrapButtons.fire(
					'Deleted!',
					'Your imaginary file has been deleted.',
					'success'
				)
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) {
				swalWithBootstrapButtons.fire(
					'Cancelled',
					'Your imaginary file is safe :)',
					'error'
				)
			}
		})
	}

	let ImageAlert = () => {
		changlog()
		Swal.fire({
			title: 'Lovely!',
			text: 'your image is uploaded.',
			imageUrl: logo,
			imageAlt: 'Custom image',
		})
	}

	let AutoCloseAlert = () => {
		Swal.fire({
			title: 'Auto close alert!',
			html: 'I will close in <b></b> 2 seconds.',
			timer: 2000,
			timerProgressBar: true,
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('I was closed by the timer')
			}
		})
	}
	let AJAXrequest = () => {
		 
Swal.fire({
	title: 'Ajax request example',
	icon: 'warning',
	text:  'Fill the input and submit to run ajax request',
	input: 'text',
	inputAttributes: {
	  autocapitalize: 'off'
	},
	showCancelButton: true,
	confirmButtonText: 'Look up',
	showLoaderOnConfirm: true,
	preConfirm: (login) => {
	  return fetch(`//api.github.com/users/${login}`)
		.then(response => {
		  if (!response.ok) {
			throw new Error(response.statusText)
		  }
		  return response.json()
		})
		.catch(error => {
		  Swal.showValidationMessage(
			`Request failed: ${error}`
		  )
		})
	},
	allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
	if (result.isConfirmed) {
	  Swal.fire({
		title: 'Ajax request finished!'
	  })
	}
  })
	}

	return (
		<div className={styles.Sweetalert}>
			<Pageheader titles="Advanced ui" active="Sweet-Alerts" />

			{/* <!-- container --> */}


			{/* <!-- row opened --> */}
			<Row className="row-deck">
				<Col sm={12} md={12} lg={12} xl={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Basic Sweet-alert</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<Table className="card-table border">
								<tbody>
									<tr>
										<td>Title</td>
										<td><Form.Control onChange={(ele) => { settitle(ele.target.value) }} type='text' placeholder='Title text' id='title' />
										</td>
									</tr>
									<tr>
										<td>Message</td>
										<td><Form.Control type='text' onChange={(ele) => { setmessage(ele.target.value) }} placeholder='Your message' id='message' /></td>
									</tr>
									<tr>
										<td colSpan={2} className="mt-5 text-center">
											<Button variant='primary' className="mt-2 me-2" onClick={() => { simpleAlert() }}>Simple alert</Button>
											<Button variant='danger' className="mt-2 me-2" onClick={() => { titleAlert() }}>Alert with title</Button>
											<Button variant='info' className="mt-2 me-2" onClick={() => { imageAlert() }}>Alert with image</Button>
											<Button variant='warning' className="mt-2 me-2" onClick={() => { timerAlert() }}>With timer</Button>

										</td>
									</tr>
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
				{/* <!-- col end --> */}
			</Row>
			{/* <!-- col end --> */}

			{/* <!-- Row --> */}
			<Row>
				<Col sm={6} md={6} lg={3} xl={3}>
					<Card className="custom-card text-center">
						<Card.Body>
							<div>
								<Card.Title as="h6" className="mb-1">Basic Alert</Card.Title>
								<p className="text-muted card-sub-title">A Basic Message</p>
							</div>
							<Button variant='primary-gradient' className="ripple" onClick={() => { BasicAlert() }}>
								Click me !
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={6} md={6} lg={3} xl={3}>
					<Card className="custom-card text-center">
						<Card.Body>
							<div>
								<Card.Title as="h6" className="mb-1">Title alert</Card.Title>
								<p className="text-muted card-sub-title">A title with a text under</p>
							</div>
							<Button variant='danger-gradient' className="ripple" onClick={() => { TitleAlert() }}>
								Click me !
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={6} md={6} lg={3} xl={3}>
					<Card className="custom-card text-center">
						<Card.Body>
							<div>
								<Card.Title as="h6" className="mb-1">Success alert</Card.Title>
								<p className="text-muted card-sub-title">A Success Message</p>
							</div>
							<Button variant='success-gradient' className="ripple" onClick={() => { SuccessAlert() }}>
								Click me !
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={6} md={6} lg={3} xl={3}>
					<Card className="custom-card text-center">
						<Card.Body>
							<div>
								<Card.Title as="h6" className="mb-1">Warning alert</Card.Title>
								<p className="text-muted card-sub-title">A warning message</p>
							</div>
							<Button variant='warning-gradient' className="ripple" onClick={() => { WarningAlert() }}>
								Click me !
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- Row --> */}
			<div className="row">
				<Col sm={6} md={6} lg={3} xl={3}>
					<Card className="custom-card text-center">
						<Card.Body>
							<div>
								<Card.Title as="h6" className="mb-1">Passing a parameter alert</Card.Title>
								<p className="text-muted card-sub-title">By passing a parameter</p>
							</div>
							<Button variant='purple-gradient' className="ripple" onClick={() => { PassingparameterAlert() }}>
								Click me !
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={6} md={6} lg={3} xl={3}>
					<Card className="custom-card text-center">
						<Card.Body>
							<div>
								<Card.Title as="h6" className="mb-1">Image alert</Card.Title>
								<p className="text-muted card-sub-title">A message with custom Image</p>
							</div>
							<Button variant='pink-gradient' className="ripple" onClick={() => { ImageAlert() }}>
								Click me !
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={6} md={6} lg={3} xl={3}>
					<Card className="custom-card text-center">
						<Card.Body>
							<div>
								<Card.Title as="h6" className="mb-1">Timer alert</Card.Title>
								<p className="text-muted card-sub-title">A message with auto close timer</p>
							</div>
							<Button variant='dark-gradient' className="ripple" onClick={() => { AutoCloseAlert() }}>
								Click me !
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={6} md={6} lg={3} xl={3}>
					<Card className="custom-card text-center">
						<Card.Body>
							<div>
								<Card.Title as="h6" className="mb-1">Ajax Alert</Card.Title>
								<p className="text-muted card-sub-title">With a loader (for a AJAX requests)</p>
							</div>
							<Button variant='info-gradient' className="ripple" onClick={() => { AJAXrequest() }}>
								Click me !
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</div>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Sweetalert.propTypes = {};

Sweetalert.defaultProps = {};

export default Sweetalert;
