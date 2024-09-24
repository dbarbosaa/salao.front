import React, { useState } from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import Select from 'react-select';
import styles from './Blogedit.module.scss';


//commomn file path
import { Dropzone } from '../../../../Components/CommonFileComponents/DropZone';


import { Link } from 'react-router-dom';

const Blogedit = () => {

	const Category = [
		{ value: "IT", label: "IT" },
		{ value: "Language", label: "Language" },
		{ value: "Science", label: "Science" },
		{ value: "Health", label: "Health" },
		{ value: "Humanities", label: "Humanities" },
		{ value: "Business", label: "Business" },
		{ value: "Maths", label: "Maths" },
		{ value: "Marketing", label: "Marketing" },
	];
	const Instructor = [
		{ value: "Pedro Cox", label: "Pedro Cox" },
		{ value: "Vera Guzman", label: "Vera Guzman" },
		{ value: "Glenda Long", label: "Glenda Long" },
		{ value: "Joel Anderson", label: "Joel Anderson" },
		{ value: "Blanche Henderson", label: "Blanche Henderson" }
	];
	//Type of mode
	const Checkbox = [
		{ Type: 'radio', label: 'online' },
		{ Type: 'radio', label: 'offline' }
	]
	//Course Type	
	const Radiobox = [
		{ Types: 'radio', labels: 'Free' },
		{ Types: 'radio', labels: 'Paid' }
	]

	//Course Post packages	
	const PostRadio = [
		{ Types: 'radio', labels: '30 Days Free', class: 'mb-0 me-5' },
		{ Types: 'radio', labels: '60 days / $20', class: 'mb-0 me-4' },
		{ Types: 'radio', labels: '6months /$50', class: 'mb-0 me-4' },
		{ Types: 'radio', labels: '1 year / $80', class: 'mb-0' }
	]


	return (

		<div className={styles.Blogedit}>
			<Pageheader titles="Blog" active="Blog Post" />

			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card className="blog-edit">
						<Card.Body>
							<Form.Group>
								<Form.Label className="text-dark">Course Title</Form.Label>
								<Form.Control type="text" defaultValue="Advanced Web Develpment" />
							</Form.Group>
							<Form>
								<Form.Label className="text-dark mt-3">Category</Form.Label>
								<Select classNamePrefix="Select-sm" options={Category} placeholder='Select' />
							</Form>
							<Form.Group>
								<Form.Label className="text-dark mt-3">Instructor</Form.Label>
								<Select classNamePrefix="Select-sm" options={Instructor} placeholder='Select' />
							</Form.Group>
							<Form.Group>
								<Form.Label className="text-dark mt-3">Type of mode</Form.Label>
								<div className="d-md-flex ad-post-details">
									<Form className=''>
										{Checkbox.map((idx:any) => (
											<div key={Math.random()} className="mb-3">
												<Form.Check
													inline
													label={idx.label}
													name="group1"
													type={idx.Type}
													id={`inline-${idx.label}-1`}
												/>
											</div>
										))}
									</Form>
								</div>
							</Form.Group>
							<Form.Group>

							</Form.Group>
							<Form.Group>
								<Form.Label className="text-dark">Course Type</Form.Label>
								<div className="d-md-flex ad-post-details">
									<Form className=''>
										{Radiobox.map((id:any) => (
											<div key={Math.random()} className="mb-3">
												<Form.Check
													inline
													label={id.labels}
													name="group1"
													type={id.Types}
													id={`inline-${id.labels}-1`}
												/>
											</div>
										))}
									</Form>
								</div>
							</Form.Group>
							<Form.Group className="p-4 border mb-4">
								<Dropzone />
							</Form.Group>
							<Form.Group>
								<Form.Label>Upload Video URL</Form.Label>
								<Form.Control type="text" placeholder="https://videos.com" defaultValue="https://www.youtube.com/embed/tMWkeBIohBs" />
							</Form.Group>
							<Form.Group className="control-group mb-0">
								<Form.Label className="text-dark mt-4">Course Post Package</Form.Label>
								<div className="border p-3 rounded-7">
									<div className="d-md-flex ad-post-details">
										<Form className=''>
											{PostRadio.map((types:any) => (
												<div key={Math.random()} className="mb-3">
													<Form.Check
														className={types.class}
														inline
														label={types.labels}
														name="group1"
														type={types.Types}
														id={`inline-${types.labels}-1`}
													/>
												</div>
											))}
										</Form>
									</div>
								</div>
							</Form.Group>
						</Card.Body>
						<Card.Footer>
							<Link to="#" className="btn btn-secondary">Save to Draft</Link>
							<Link to="#" className="btn btn-primary mx-1 float-end">Publish Now</Link>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Blogedit.propTypes = {};

Blogedit.defaultProps = {};

export default Blogedit;
