import React from 'react';
import { Badge, Button, Card, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import styles from './Shop.module.scss';
import Select from 'react-select';
import { Brand, children, Electronics, Extra, Mens, Type, women } from './Data/shopData';
import { Link } from 'react-router-dom';
import { PODUCTDATA } from '../WishList/Data/wishlistData';
import { connect } from "react-redux";
import { AddToCart } from '../../../CommonFileComponents/redux/action';

const Shop = ({ local_varaiable, AddToCart }) => {

	const [allData, setAllData] = React.useState(PODUCTDATA)

	let allElement2:any = [];

	let myfunction = (InputData) => {
		let allElement:any
		for (allElement of PODUCTDATA) {
			if (allElement.title[0] == " ") {
				allElement.title = allElement.title.trim()
			}
			if (allElement.title.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.title.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement);
				}
			}

		}
		setAllData(allElement2);
	};

	return (

		<div className={styles.Shop}>
			<Pageheader titles="Ecommerce" active="Shop" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col xl={3} lg={12} md={12} className="mb-3 mb-md-0">
					<Card>
						<Card.Header className="border-bottom py-3 mb-0 fw-bold text-uppercase">Category</Card.Header>
						<Card.Body className="pb-0">
							<Form.Group>
								<Form.Label className="form-label">Mens</Form.Label>
								<Select classNamePrefix="Select-sm" className='mb-3' options={Mens} placeholder='--Select--' />
							</Form.Group>
							<Form.Group className="mt-2">
								<Form.Label className="form-label">Women</Form.Label>
								<Select classNamePrefix="Select-sm" className='mb-3' options={women} placeholder='--Select--' />
							</Form.Group>
							<Form.Group className="mt-2">
								<Form.Label className="">Baby & Kids</Form.Label>
								<Select classNamePrefix="Select-sm" className='mb-3' options={children} placeholder='--Select--' />
							</Form.Group>
							<Form.Group className="mt-2">
								<Form.Label className="">Electronics</Form.Label>
								<Select classNamePrefix="Select-sm" className='mb-3' options={Electronics} placeholder='--Select--' />
							</Form.Group>
							<Form.Group className="mt-2">
								<Form.Label className="">Sport,Books & More </Form.Label>
								<Select classNamePrefix="Select-sm" className='mb-3' options={Extra} placeholder='--Select--' />
							</Form.Group>
						</Card.Body>
						<div
							className="card-header border-bottom border-top py-3 mb-0 fw-bold text-uppercase rounded-0">
							Filter</div>
						<div className="card-body">
							<form role="form product-form">
								<Form.Group className="">
									<Form.Label>Brand</Form.Label>
									<Select classNamePrefix="Select-sm" className='mb-3' options={Brand} placeholder='--Select--' />
								</Form.Group>
								<Form.Group className="form-group">
									<Form.Label>Type</Form.Label>
									<Select classNamePrefix="Select-sm" className='mb-3' options={Type} placeholder='--Select--' />
								</Form.Group>
							</form>
						</div>
						<div className="card-header border-bottom border-top py-3 mb-0 fw-bold text-uppercase rounded-0">Rating</div>
						<div className="py-2 px-3">
							<div className="p-1 mt-2 d-flex align-items-center">
								<Form.Check type="checkbox" label="" defaultChecked />
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</div>
							<div className="p-1 mt-2 d-flex align-items-center">
								<Form.Check type="checkbox" label="" defaultChecked />
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</div>
							<div className="p-1 mt-2 d-flex align-items-center">
								<Form.Check type="checkbox" label="" defaultChecked />
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</div>
							<div className="p-1 mt-2 d-flex align-items-center">
								<Form.Check type="checkbox" label="" />
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</div>
							<div className="p-1 mt-2 d-flex align-items-center">
								<Form.Check type="checkbox" label="" />
								<span className="ms-3 tx-16 my-auto">
									<i className="ion ion-md-star  text-warning"></i>
								</span>
							</div>
							<Button variant="primary-gradient" className="mt-2 mb-2 pb-2">Filter</Button>
						</div>
					</Card>
				</Col>
				<Col xl={9} lg={12} md={12} className="">
					<Card>
						<Card.Body className="p-2">
							<InputGroup className="">
								<Form.Control onChange={(ele) => { myfunction(ele.target.value) }} type="text" className="" placeholder="Search ..." />
								<InputGroup.Text className="p-0">
									<Button variant='primary' className="">Search</Button>
								</InputGroup.Text>
							</InputGroup>
						</Card.Body>
					</Card>
					<Row className="row-sm">
						{allData.map((idx) => (
							<Col key={Math.random()} md={6} lg={6} xl={4} sm={6}>
								<Card>
									<Card.Body className="h-100">
										<div className="pro-img-box">
											<div className="d-flex product-sale">
												<Badge className="">New</Badge>
												<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`}><i className="mdi mdi-heart-outline ms-auto wishlist"></i></Link>
											</div>
											<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails/${idx.id}`}><img className="w-100" src={idx.preview} alt="product-image" /></Link>
											<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} className="adtocart" onClick={() => { AddToCart(idx.id) }}> <i className="las la-shopping-cart"></i></Link>
										</div>
										<div className="text-center pt-3">
											<h3 className="h6 mb-2 mt-4 fw-bold text-uppercase">{idx.title}</h3>
											<span className="tx-15 ms-auto">
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star text-warning"></i>
												<i className="ion ion-md-star-half text-warning"></i>
												<i className="ion ion-md-star-outline text-warning"></i>
											</span>
											<h4 className="h5 mb-0 mt-2 text-center fw-bold text-danger">${idx.newprice}<span
												className="text-muted fw-normal tx-13 mx-1 prev-price">${idx.oldprice}</span>
											</h4>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}

						<Pagination className="product-pagination ms-auto float-end">
							<Pagination.Item className="page-prev me-1" disabled>Prev</Pagination.Item>
							<Pagination.Item active>1</Pagination.Item>
							<Pagination.Item>2</Pagination.Item>
							<Pagination.Item>3</Pagination.Item>
							<Pagination.Item className="page-next">Next</Pagination.Item>
						</Pagination>
					</Row>
				</Col>
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Shop.propTypes = {};

Shop.defaultProps = {};

const mapStateToProps = (state) => ({
	local_varaiable: state
})

export default connect(mapStateToProps, { AddToCart })(Shop);
