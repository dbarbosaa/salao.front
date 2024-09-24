import React from 'react';
import { Card, Col, Row, ProgressBar, Form, Button } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './EditProfile.module.scss';
import Select from 'react-select';
import { Link } from 'react-router-dom';
//Images
import faces6 from '../../../../src/assets/img/users/6.jpg';



const EditProfile = () => {

	const LangData = [
		{ value: "Us English", label: "Us English" },
		{ value: "Arabic", label: "Arabic" },
		{ value: "Korean", label: "Korean" }
	];
	return(

	<div className={styles.EditProfile}>
		<Pageheader titles="Pages" active="Edit-Profile" />

		{/* <!-- container --> */}
		{/* <!-- row --> */}
		<Row className="row-sm">
			{/* <!-- Col --> */}
			<Col lg={12} xl={4}>
				<Card className="mg-b-20">
					<Card.Body>
						<div className="ps-0">
							<div className="main-profile-overview">
								<div className="main-img-user profile-user">
									<img alt="" src={faces6} /><Link className="fas fa-camera profile-edit" to="#"></Link>
								</div>
								<div className="d-flex justify-content-between mg-b-20">
									<div>
										<h5 className="main-profile-name">Petey Cruiser</h5>
										<p className="main-profile-name-text">Web Designer</p>
									</div>
								</div>
								<h6>Bio</h6>
								<div className="main-profile-bio">
									pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.. <a href="">More</a>
								</div>
								{/* <!-- main-profile-bio --> */}
								<Row>
									<Col md={4} className="col mb20">
										<h5>947</h5>
										<h6 className="text-small text-muted mb-0">Followers</h6>
									</Col>
									<Col md={4} className="col mb20">
										<h5>583</h5>
										<h6 className="text-small text-muted mb-0">Tweets</h6>
									</Col>
									<Col md={4} className="col mb20">
										<h5>48</h5>
										<h6 className="text-small text-muted mb-0">Posts</h6>
									</Col>
								</Row>
								<hr className="mg-y-30" />
								<label className="main-content-label tx-13 mg-b-20">Social</label>
								<div className="main-profile-social-list">
									<div className="media">
										<div className="media-icon bg-primary-transparent text-primary">
											<i className="icon ion-logo-github"></i>
										</div>
										<div className="media-body">
											<span>Github</span> <a href="">github.com/spruko</a>
										</div>
									</div>
									<div className="media">
										<div className="media-icon bg-success-transparent text-success">
											<i className="icon ion-logo-twitter"></i>
										</div>
										<div className="media-body">
											<span>Twitter</span> <a href="">twitter.com/spruko.me</a>
										</div>
									</div>
									<div className="media">
										<div className="media-icon bg-info-transparent text-info">
											<i className="icon ion-logo-linkedin"></i>
										</div>
										<div className="media-body">
											<span>Linkedin</span> <a href="">linkedin.com/in/spruko</a>
										</div>
									</div>
									<div className="media">
										<div className="media-icon bg-danger-transparent text-danger">
											<i className="icon ion-md-link"></i>
										</div>
										<div className="media-body">
											<span>My Portfolio</span> <a href="">spruko.com/</a>
										</div>
									</div>
								</div>
								<hr className="mg-y-30" />
								<h6>Skills</h6>
								<div className="skill-bar mb-4 clearfix mt-3">
									<span>HTML5 / CSS3</span>
									<ProgressBar variant="primary-gradient" className="mt-2" now={85} />
								</div>
								{/* <!--skill bar--> */}
								<div className="skill-bar mb-4 clearfix">
									<span>Javascript</span>
									<ProgressBar variant="danger-gradient" className="mt-2" now={89} />
								</div>
								{/* <!--skill bar--> */}
								<div className="skill-bar mb-4 clearfix">
									<span>Bootstrap</span>
									<ProgressBar variant="success-gradient" className="mt-2" now={80} />
								</div>
								{/* <!--skill bar--> */}
								<div className="skill-bar clearfix">
									<span>Coffee</span>
									<ProgressBar variant="info-gradient" className="mt-2" now={95} />
								</div>
								{/* <!--skill bar--> */}
							</div>
							{/* <!-- main-profile-overview --> */}
						</div>
					</Card.Body>
				</Card>
				<Card className="mg-b-20">
					<Card.Body>
						<div className="main-content-label tx-13 mg-b-25">
							contact
						</div>
						<div className="main-profile-contact-list">
							<div className="media">
								<div className="media-icon bg-primary-transparent text-primary">
									<i className="icon ion-md-phone-portrait"></i>
								</div>
								<div className="media-body">
									<span>Mobile</span>
									<div>
										+245 354 654
									</div>
								</div>
							</div>
							<div className="media">
								<div className="media-icon bg-success-transparent text-success">
									<i className="icon ion-logo-slack"></i>
								</div>
								<div className="media-body">
									<span>Slack</span>
									<div>
										@spruko.w
									</div>
								</div>
							</div>
							<div className="media">
								<div className="media-icon bg-info-transparent text-info">
									<i className="icon ion-md-locate"></i>
								</div>
								<div className="media-body">
									<span>Current Address</span>
									<div>
										San Francisco, CA
									</div>
								</div>
							</div>
						</div>
						{/* <!-- main-profile-contact-list --> */}
					</Card.Body>
				</Card>
			</Col>

			{/* <!-- Col --> */}
			<Col lg={12} xl={8}>
				<Card>
					<Card.Body>
						<div className="mb-4 main-content-label">Personal Information</div>
						<Form className="form-horizontal">
							<Form.Group>
								<Row>
									<Col md={3}>
										<Form.Label>Language</Form.Label>
									</Col>
									<Col md={9}>
										<Select classNamePrefix="Select-sm" options={LangData} placeholder='Us English' />
									</Col>
								</Row>
							</Form.Group>
							<div className="my-4 main-content-label">Name</div>
							<Form.Group>
								<Row>
									<Col md={3}>
										<Form.Label>User Name</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="User Name" defaultValue="Petey Cruiser" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>First Name</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="First Name" defaultValue="Petey" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>last Name</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="Last Name" defaultValue="Pechon" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>Nick Name</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="Nick Name" defaultValue="Petey" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>Designation</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="Designation" defaultValue="Web Designer" />
									</Col>
								</Row>
							</Form.Group>
							<div className="mb-4 main-content-label mt-3">Contact Info</div>
							<Form.Group>
								<Row>
									<Col md={3}>
										<Form.Label>Email<i>(required)</i></Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="Email" defaultValue="info@Valex.in" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>Website</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="Website" defaultValue="@spruko.w" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>Phone</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="phone number" defaultValue="+245 354 654" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>Address</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control as='textarea' name="example-textarea-input" rows={2} placeholder="Address" defaultValue='San Francisco, CA' />
									</Col>
								</Row>
							</Form.Group>
							<div className="mb-4 main-content-label mt-4">Social Info</div>
							<Form.Group>
								<Row>
									<Col md={3}>
										<Form.Label>Twitter</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="twitter" defaultValue="twitter.com/spruko.me" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>Facebook</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="facebook" defaultValue="https://www.facebook.com/Redash" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>Google+</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="google" defaultValue="spruko.com" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>Linked in</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="linkedin" defaultValue="linkedin.com/in/spruko" />
									</Col>
								</Row>
							</Form.Group>
							<Form.Group>
								<Row className='mt-3'>
									<Col md={3}>
										<Form.Label>Github</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control type="text" placeholder="github" defaultValue="github.com/sprukos" />
									</Col>
								</Row>
							</Form.Group>
							<div className="mb-4 main-content-label mt-3">About Yourself</div>
							<Form.Group>
								<Row>
									<Col md={3}>
										<Form.Label>Biographical Info</Form.Label>
									</Col>
									<Col md={9}>
										<Form.Control as="textarea" name="example-textarea-input" rows={4} defaultValue="pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.."/>
									</Col>
								</Row>
							</Form.Group>
							<div className="mb-4 main-content-label mt-3">Email Preferences</div>
							<Form.Group className="mb-0">
								<Row>
									<Col md={3}>
										<Form.Label>Verified User</Form.Label>
									</Col>
									<Col md={9}>
										<div className="custom-controls-stacked">
											 <Form.Check type='checkbox' aria-label="option 1"  label="Accept to receive post or page notification emails" />
											 <Form.Check type='checkbox' aria-label="option 1"  label="Accept to receive email sent to multiple recipients" />
										</div>
									</Col>
								</Row>
							</Form.Group>
						</Form>
					</Card.Body>
					<Card.Footer>
						<Button variant='primary' className="waves-effect waves-light">Update Profile</Button>
					</Card.Footer>
				</Card>
			</Col>
			{/* <!-- /Col --> */}
		</Row>
		{/* <!-- row closed --> */}

		{/* <!-- Container closed --> */}
	</div>
)
	};

EditProfile.propTypes = {};

EditProfile.defaultProps = {};

export default EditProfile;
