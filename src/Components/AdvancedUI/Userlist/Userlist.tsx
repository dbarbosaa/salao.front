import React, { useEffect, useState } from 'react';
import { Card, Col, Form, InputGroup, OverlayTrigger, Pagination, Row, Table, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { userData } from './Data/userlistData';
import styles from './Userlist.module.scss';

const Userlist = () => {

	//for User search function

	const [allData, setAllData] = useState(userData)
	useEffect(()=>{
	},[userData])
	const [EditData, setEditData] = useState(true)



	//Search function
	let allElement2:any = [];

	let myfunction = (InputData) => {
		userData.map((allElement) => {
			if (allElement.name[0] == " ") {
				allElement.name = allElement.name.trim()
			}
			if (allElement.name.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.name.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement)

				}
			}
		})


		setAllData(allElement2)
	};

	//Update function

	let getdata = (data, id) => {
		
		allData.map((ele) => {
			if (ele.id == id) {
				if (data.target.name == "name") {
					ele.name = data.target.value
				}
				if (data.target.name == "created") {
					ele.created = data.target.value
				}
				if (data.target.name == "mail") {
					ele.mail = data.target.value
				}
			}
		})
	}
	// Delete function

	function handleRemove(id) {
		const RemoveData = allData.filter((outline) => outline.id !== id);
		setAllData(RemoveData);

	}

	return (
		<div className={styles.Userlist}>
			<Pageheader titles="Advanced ui" active=" Userlist" />
			{/* <!-- container --> */}

			{/* <!--Row--> */}
			<Row className="row-sm">
				<Col sm={12} md={12} lg={12} xl={12} className="grid-margin">
					<Card className="">
						<Card.Header className="pb-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="mg-b-0">USERS TABLE</Card.Title>
							</div>
							<p className="tx-12 tx-gray-500 mb-2">Example of Valex Simple Table. <Link to="#">Learn more</Link></p>
						</Card.Header>

						<Card.Body className="">
							<InputGroup className="mb-3">
								<Form.Control type='text' onChange={(e) => myfunction(e.target.value)} placeholder='Search.....' />
								<Link to='#' className="btn btn-sm btn-primary" ><i className="las la-search search-userData"></i></Link>
							</InputGroup>
							<div className="table-responsive border-top userlist-table">
								<Table className="card-table table-striped table-vcenter text-nowrap mb-0">
									<thead>
										<tr>
											<th className="wd-lg-8p"><span>User</span></th>
											<th className="wd-lg-20p"><span></span></th>
											<th className="wd-lg-20p"><span>Created</span></th>
											<th className="wd-lg-20p"><span>Status</span></th>
											<th className="wd-lg-20p"><span>Email</span></th>
											<th className="wd-lg-20p">Action</th>
										</tr>
									</thead>
									<tbody>
										{allData.map((idx) => (
											<tr key={Math.random()}>
												<td><img alt="avatar" className="rounded-circle avatar-md me-2" src={idx.pic} /></td>
												<td>{EditData ? idx.name : <input type='text' name="name" className='form-control' defaultValue={idx.name} onChange={(e) => { getdata(e, idx.id) }} />}</td>
												<td>{EditData ? idx.created : <input type='text' name='created' className='form-control' defaultValue={idx.created} onChange={(e) => { getdata(e, idx.id) }} />}</td>
												<td className="text-center"><span className={`label text-${idx.textclass} d-flex`}><div className={`dot-label ${idx.statusbgclass} me-1`}></div>{idx.status}</span></td>
												<td><Link to="#">{EditData ? idx.mail : <input type='text' name='mail' className='form-control' defaultValue={idx.mail} onChange={(e) => { getdata(e, idx.id) }} />}</Link></td>
												<td>
													<Link to="#" className="btn btn-sm btn-primary"><OverlayTrigger placement="top" overlay={<Tooltip>Search</Tooltip>}><i className="las la-search"></i></OverlayTrigger></Link>
													<Link to="#" className="btn btn-sm btn-info btn-b" onClick={() => { setEditData(!EditData) }}>{EditData ? <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}><i className="las la-pen" ></i></OverlayTrigger> : <OverlayTrigger placement="top" overlay={<Tooltip>Update</Tooltip>}><i className="fe fe-check-circle"></i></OverlayTrigger>}</Link>
													<Link to="#" className="btn btn-sm btn-danger" onClick={() => { handleRemove(idx.id) }}><OverlayTrigger placement="top" overlay={<Tooltip>Remove</Tooltip>}><i className="las la-trash"></i></OverlayTrigger></Link>
												</td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>
							<Pagination className="product-pagination ms-auto mt-4 mb-0 float-end flex-wrap">
								<Pagination.Item className="page-prev me-1 mb-1" disabled>Prev</Pagination.Item>
								<Pagination.Item className="page-item mb-1 active">1</Pagination.Item>
								<Pagination.Item className="page-item mb-1">2</Pagination.Item>
								<Pagination.Item className="page-item mb-1">3</Pagination.Item>
								<Pagination.Item className="page-item mb-1">4</Pagination.Item>
								<Pagination.Item className="page-item mb-1">5</Pagination.Item>
								<Pagination.Item className="page-next mb-1">Next</Pagination.Item>
							</Pagination>
						</Card.Body>
					</Card>
					{/* </div><!-- COL END --> */}
				</Col>
				{/* <!-- row closed  --> */}
			</Row>
			{/* <!-- Container closed --> */}
		</div>
	)
};

Userlist.propTypes = {};

Userlist.defaultProps = {};

export default Userlist;
