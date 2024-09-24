import React, { useEffect, useState } from 'react';
import { Card, Col, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import { productData } from './Data/wishlistData';
import styles from './WishList.module.scss';
import { connect } from "react-redux"
import { AddToCart, ProductReduxData } from '../../../CommonFileComponents/redux/action';

const WishList = ({ local_varaiable, AddToCart, ProductReduxData }) => {
	const [show, setshow] = useState(productData);

	function handleRemove(id) {
		const RemoveData = show.filter((idx) => idx.id !== id);
		setshow(RemoveData);
	}


	return (
		<div className={styles.WishList}>
			<Pageheader titles="Ecommerce" active="Wishlist" />
			{/* <!-- container --> */}

			{/* <!-- ROW-1 OPEN --> */}
			<Row>
				<Col lg={12} xl={12} className="">
					<Row>
						{show.map((idx) => (
							<Col key={Math.random()} xxl={3} xl={6} lg={6} sm={6} className="alert wishlist-card">
								<Card className="item-card ">
									<Card.Body className="pb-0">
										<div className="text-center zoom">
											<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails/${idx.id}`} onClick={() => { ProductReduxData(idx.id) }}><img className="w-100 rounded-5" src={idx.pic} alt="img" /></Link>
										</div>
										<Card.Body className="px-0 pb-3">
											<Row>
												<Col col={9}>
													<div className="cardtitle">
														<div>
															<Link to="#"><i className="fa fa-star text-warning fs-16"></i></Link>
															<Link to="#"><i className="fa fa-star text-warning fs-16"></i></Link>
															<Link to="#"><i className="fa fa-star text-warning fs-16"></i></Link>
															<Link to="#"><i className="fa fa-star-half text-warning fs-16"></i></Link>
															<Link to="#"><i className="fa fa-star-o text-warning fs-16"></i></Link>
															<Link to="#">{idx.rating}</Link>
														</div>
														<a className="shop-title fs-18">{idx.title}</a>
													</div>
												</Col>
												<Col col={3}>
													<div className="cardprice-2">
														<span className="type--strikethrough number-font">{idx.oldprice}</span>
														<span className="number-font">{idx.newprice}</span>
													</div>
												</Col>
												<div>
													<p className="shop-description fs-13 text-muted mt-2 mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia saepe esse.</p>
												</div>
											</Row>
										</Card.Body>
									</Card.Body>
									<Card.Footer className="text-center">
										<div className="text-center px-2">
											<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} className="btn btn-md btn-primary mb-2 ms-2 w-45" onClick={() => { AddToCart(idx.id) }}><i className="fe fe-shopping-cart me-2"></i>Add to Cart</Link>
											<Link to="#" className="btn btn-md btn-light mb-2 ms-2 w-45" onClick={() => { handleRemove(idx.id) }}>
												<span className="me-2 fs-14">Remove</span>
												<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#495057"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
											</Link>
										</div>
									</Card.Footer>
								</Card>
							</Col>
						))}

					</Row>
					<div className="d-flex justify-content-end">
						<Pagination className="mb-5">
							<Pagination.Item className="page-prev me-1" disabled>Prev</Pagination.Item>
							<Pagination.Item className="active page-item">{1}</Pagination.Item>
							<Pagination.Item className="page-item">{2}</Pagination.Item>
							<Pagination.Item className="page-item">{3}</Pagination.Item>
							<Pagination.Item className="page-next">Next</Pagination.Item>
						</Pagination>
					</div>
				</Col>
			</Row>
			{/* <!-- COL-END --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

WishList.propTypes = {};

WishList.defaultProps = {};

const mapStateToProps = (state) => ({
	local_varaiable: state
})

export default connect(mapStateToProps, { AddToCart, ProductReduxData })(WishList);
