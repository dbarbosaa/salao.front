import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import styles from './Cart.module.scss';
import Select from 'react-select';
import { cartData, Quantity } from './Data/cartData';
import { connect } from "react-redux";
import { AddToCart, ProductReduxData } from "../../../CommonFileComponents/redux/action"


const Cart = ({ local_varaiable, AddToCart, ProductReduxData }) => {
	const [FiltercartData, setCartData] = useState<any>([])
	const [Price, setPrice] = useState(0)
	let dataprice

	useEffect(() => {
		if (local_varaiable == undefined) {
			
			setCartData(cartData)
			cartData.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			})
		}
		else if (local_varaiable.length == 0) {
			
			setCartData(cartData)
			cartData.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			})
		}
		else {
			
			setCartData(local_varaiable)
			local_varaiable.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			})
		}

		
	}, [local_varaiable])

	function handleRemove(id) {
		if (local_varaiable == undefined) {
			const RemoveData = FiltercartData.filter((ale) => ale.id !== id);
			setCartData(RemoveData);
		}
		else if (local_varaiable.length == 0) {
			const RemoveData = FiltercartData.filter((ale) => ale.id !== id);
			setCartData(RemoveData);
		}
		else {
			const RemoveData = FiltercartData.filter((ale) => ale.id !== id);
			setCartData(RemoveData);
		}
	}



	return (

		<div className={styles.Cart}>
			<Pageheader titles="Ecommerce" active="Product-Cart" />
			{/* <!-- container --> */}

			{/* <!-- row opened --> */}
			<Row>
				<Col xl={12} md={12}>
					<Card>
						<Card.Body>
							{/* <!-- Shopping Cart--> */}
							<div className="product-details table-responsive text-nowrap">
								<Table className="table-bordered table-hover mb-0 text-nowrap">
									<thead>
										<tr>
											<th className="text-start">Product</th>
											<th className="w-150">Quantity</th>
											<th>SUBTOTAL</th>
											<th>DISCOUNT</th>
											<th><Link className="btn btn-sm btn-outline-danger" to="#" onClick={() => { setCartData("") }}>Clear Cart</Link>
											</th>
										</tr>
									</thead>
									<tbody className="custom-cls-no-br">
										{FiltercartData != "" ? FiltercartData.map((idx) => (
											<tr key={Math.random()}>
												<td>
													<div className="media">
														<div className="card-aside-img">
															<img src={idx.preview} alt="img"
																className="h-60 w-60" />
														</div>
														<div className="media-body">
															<div className="card-item-desc mt-0">
																<h6 className="fw-semibold mt-0 text-uppercase">{idx.name}
																</h6>
																<dl className="card-item-desc-1">
																	<dt>Size: </dt>
																	<dd>{idx.size}</dd>
																</dl>
																<dl className="card-item-desc-1">
																	<dt>Color: </dt>
																	<dd>{idx.color}</dd>
																</dl>
															</div>
														</div>
													</div>
												</td>
												<td>
													<Form.Group>
														<Select classNamePrefix="Select-sm" options={Quantity} placeholder='1' />
													</Form.Group>
												</td>
												<td className="text-center text-lg text-medium">${idx.newprice}</td>
												<td className="text-center text-lg text-medium">$35.00</td>
												<td className="text-center"><Link className="remove-from-cart" to="#" onClick={() => { handleRemove(idx.id) }}><OverlayTrigger placement="top" overlay={<Tooltip>Remove Items</Tooltip>}><i className="fa fa-trash"></i></OverlayTrigger></Link></td>
											</tr>
										)) : <tr><td>"There is no product available in the Cart"</td></tr>}
									</tbody>
								</Table>
								<div className="shopping-cart-footer  border-top-0">
									<div className="column">
										<Form className="coupon-form d-sm-flex" method="post">
											<Form.Control className="py-2" type="text" placeholder="Coupon code" required />
											<Button variant='outline-primary' className="btn-outline-primary" type="submit">Apply Coupon</Button>
										</Form>
									</div>
									<div className="column text-lg">Subtotal: <span className="tx-20 fw-bold ms-2">${local_varaiable == undefined ? 3961 : Price - 35}</span>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="shopping-cart-footer px-5">
							<div className="column">
								<Link className="btn btn-secondary" to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`}>Back to Shopping</Link>
							</div>
							<div className="column">
								<Link className="btn btn-primary" to="#">Update Cart</Link>
								<Link className="btn btn-success" to={`${import.meta.env.BASE_URL}pages/ecommerce/checkout`}>Checkout</Link>
							</div>
						</div>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Cart.propTypes = {};

Cart.defaultProps = {};

const mapStateToProps = (state) => ({
	local_varaiable: state
})
export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Cart);
