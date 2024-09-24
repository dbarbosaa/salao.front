import React from 'react';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import styles from './FilemanagerList.module.scss';
import { Col, Row, Card, Dropdown, InputGroup, Button, Form, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Images
import folder from "../../../../assets/img/files/4.png";
import image from "../../../../assets/img/files/5.png";
import file from "../../../../assets/img/files/2.png";
import doc from "../../../../assets/img/files/1.png";
import worddoc from "../../../../assets/img/files/6.png";

const FilemanagerList = () => {

	const FileList = [
		{ id: 1, image: folder, title: 'videos', space: '4.23gb' },
		{ id: 2, image: folder, title: 'Images', space: '1.23gb' },
		{ id: 3, image: folder, title: 'Downloads', space: '453kb' },
		{ id: 4, image: file, title: 'document.pdf', space: '23kb' },
		{ id: 5, image: file, title: 'document.pdf', space: '23kb' },
		{ id: 6, image: worddoc, title: 'Word document', space: '23kb' },
		{ id: 7, image: file, title: 'document.pdf', space: '23kb' },
		{ id: 8, image: file, title: 'document.pdf', space: '23kb' },
		{ id: 9, image: folder, title: 'Downloads', space: '453kb' },
		{ id: 10, image: file, title: 'document.pdf', space: '23kb' },
		{ id: 11, image: file, title: 'document.pdf', space: '453kb' },
		{ id: 12, image: folder, title: 'Downloads', space: '453kb' },
		{ id: 13, image: doc, title: 'Document', space: '23kb' },
		{ id: 14, image: image, title: 'login image', space: '23kb' },
		{ id: 15, image: image, title: 'beach image', space: '4.23gb' },
		{ id: 16, image: image, title: 'sky image', space: '1.23gb' },
		{ id: 17, image: image, title: 'Sea', space: '897mb' },
		{ id: 18, image: image, title: 'Outdoor Image', space: '23kb' }
	]
	return (
		<div className={styles.FilemanagerList}>
			<Pageheader titles="Filemanager" active="File List" />

			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} xl={12}>
					<Row>
						<Col col={6}>
							<div className="tx-20 mb-4">
								Files List
							</div>
						</Col>
						<Col col={6} className="col-auto file-1">
							<InputGroup className="mb-2">
								<Form.Control type="text" className="rounded-3 br-te-0 br-be-0" placeholder="Search folder....." />
								<InputGroup.Text className="bg-transparent p-0 rounded-3 br-ts-0 br-bs-0 overflow-hidden">
									<Button variant='primary' className="ripple">Search</Button>
								</InputGroup.Text>
							</InputGroup>
						</Col>
					</Row>
					<Row>
						{FileList.map((list) => (
							<Col key={Math.random()} xl={3} md={4} sm={6}>
								<Card className="p-0 ">
									<div className="d-flex align-items-center px-3 pt-3">
										<Dropdown className="float-end ms-auto">
											<Dropdown.Toggle as='a' className="option-dots" variant="">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="rounded-7" style={{ marginTop: '0px' }}>
												<Dropdown.Item href="#"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
												<Dropdown.Item href="#"><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
												<Dropdown.Item href="#"><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
									<Card.Body className="pt-0 text-center">
										<div className="file-manger-icon">
											<Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}>
												<img src={list.image} alt="img" className="rounded-7" />
											</Link>
										</div>
										<h6 className="mb-1 font-weight-semibold">{list.title}</h6>
										<span className="text-muted">{list.space}</span>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
					<Pagination className="float-end mb-4">
						<Pagination.Item className="page-prev me-1" disabled>Prev</Pagination.Item>
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Item>{2}</Pagination.Item>
						<Pagination.Item>{3}</Pagination.Item>
						<Pagination.Item className="page-next">Next</Pagination.Item>
					</Pagination>
				</Col>
			</Row>
			{/* <!-- End Row --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

FilemanagerList.propTypes = {};

FilemanagerList.defaultProps = {};

export default FilemanagerList;
