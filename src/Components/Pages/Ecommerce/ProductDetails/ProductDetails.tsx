import React, { useEffect, useState } from "react";
import {
	Button,
	Card,
	Col,
	Form,
	OverlayTrigger,
	Row,
	Tooltip,
} from "react-bootstrap";
import Pageheader from "../../../Layouts/Pageheader/Pageheader";
import styles from "./ProductDetails.module.scss";
import Select from "react-select";
import { Quantity } from "../Cart/Data/cartData";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productData1 } from "./Data/DataProduct";
import { useParams } from "react-router-dom";

import shirt5 from "../../../../assets/img/ecommerce/17.png";
import shirt2 from "../../../../assets/img/ecommerce/16.png";
import shirt3 from "../../../../assets/img/ecommerce/15.png";
import shirt4 from "../../../../assets/img/ecommerce/14.png";
import shirt1 from "../../../../assets/img/ecommerce/13.png";
import { AddToCart } from "../../../CommonFileComponents/redux/action";
import { PODUCTDATA } from "../WishList/Data/wishlistData";



const ProductDetails = ({ local_varaiable, AddToCart }) => {
	let { id } = useParams();

	const [defaultData, setdefaultData] = useState<any>();

	useEffect(() => {
		if (id != undefined) {
			let data = PODUCTDATA.filter((ele:any) => {
				return ele.id == id;
			});
			setdefaultData(data[0]);
		} else {
			setdefaultData({
				id: Math.random(),
				preview: shirt1,
				imges: [
					{ img: shirt1 },
					{ img: shirt2 },
					{ img: shirt3 },
					{ img: shirt4 },
					{ img: shirt5 },
				],
				title: "Trending Half Hands Tshirt (Best Fabric Premium made T-shirt for Casual wear.)",
				oldprice: "$599",
				newprice: "$299",
			});
		}
	}, [id]);

	return (
		<div className={styles.ProductDetails}>
			<Pageheader titles="Ecommerce" active="Product-details" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col xl={12} className="">
					<Card>
						<Card.Body className="h-100">
							<Row className="row-sm ">
								<Col xl={5} lg={12} md={12}>
									<div className="preview-pic tab-content text-center ">
										<div className="tab-pane active" id="pic-1">
											<img className={defaultData && defaultData.preview != shirt1 ? "eco-img" : ""}
												src={defaultData && defaultData.preview}
												alt="image"
											/>
										</div>
									</div>
									<ul className="preview-thumbnail nav nav-tabs">
										{defaultData &&
											defaultData.imges.map((ele) => {
												return (
													<li key={Math.random() + ele} className="active">
														<Link
															to="#"
															onClick={() => {
																setdefaultData({
																	...defaultData,
																	preview: ele.img,
																});
															}}
														>
															<img src={ele.img} className="ref-eco-img" alt="image" />
														</Link>
													</li>
												);
											})}
									</ul>
								</Col>
								<Col xl={7} lg={12} md={12} className="details mt-4 mt-xl-0">
									<h4 className="product-title mb-1">{defaultData && defaultData.title}</h4>
									<p className="text-muted tx-13 mb-1">
										Men red & Grey Checked Casual Shirt
									</p>
									<div className="rating mb-1">
										<div className="stars">
											<span className="fa fa-star checked me-1"></span>
											<span className="fa fa-star checked me-1"></span>
											<span className="fa fa-star checked me-1"></span>
											<span className="fa fa-star text-muted me-1"></span>
											<span className="fa fa-star text-muted me-1"></span>
										</div>
										<span className="review-no">41 reviews</span>
									</div>
									<h6 className="price">
										current price: <span className="h3 mx-2">${defaultData && defaultData.newprice}</span>
									</h6>
									<p className="product-description">
										Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
										cubilia sem sem! Repudiandae et! Massa senectus enim minim
										sociosqu delectus posuere.
									</p>
									<p className="product-description">
										Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
										cubilia sem sem! Repudiandae et! Massa senectus enim minim
										sociosqu delectus posuere Tempus cras iure temporibus? Eu laudantium
										cubilia sem sem! Repudiandae et! Massa senectus enim minim
										sociosqu delectus posuere.
									</p>
									<p className="product-description">
										Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
										cubilia sem sem! Repudiandae et! Massa senectus enim minim
										sociosqu delectus posuere Tempus cras iure temporibus? Eu laudantium
										cubilia sem sem! Repudiandae et! Massa senectus enim minim
										sociosqu delectus posuere.
									</p>
									<p className="vote">
										<strong>91%</strong> of buyers enjoyed this product!{" "}
										<strong>(87 votes)</strong>
									</p>
									{["radio"].map((type:any) => (
										<div className="sizes d-flex" key={`inline-${type}`}>
											sizes:
											<OverlayTrigger
												placement="top"
												overlay={<Tooltip>small</Tooltip>}
											>
												<Form.Check
													className="size d-flex"
													defaultChecked
													label="S"
													name="group1"
													type={type}
													id={`inline-${type}-1`}
												/>
											</OverlayTrigger>
											<OverlayTrigger
												placement="top"
												overlay={<Tooltip>medium</Tooltip>}
											>
												<Form.Check
													className="size d-flex"
													label="M"
													name="group1"
													type={type}
													id={`inline-${type}-2`}
												/>
											</OverlayTrigger>
											<OverlayTrigger
												placement="top"
												overlay={<Tooltip>large</Tooltip>}
											>
												<Form.Check
													className="size d-flex"
													label="L"
													name="group1"
													type={type}
													id={`inline-${type}-3`}
												/>
											</OverlayTrigger>
											<OverlayTrigger
												placement="top"
												overlay={<Tooltip>extra-large</Tooltip>}
											>
												<Form.Check
													className="size d-flex"
													label="XL"
													name="group1"
													type={type}
													id={`inline-${type}-4`}
												/>
											</OverlayTrigger>
										</div>
									))}
									<div className="d-flex  mt-2">
										<div className="mt-2 product-title">Quantity:</div>
										<div className="d-flex ms-2">
											<ul className=" mb-0 qunatity-list">
												<li>
													<Form.Group>
														<Select
															classNamePrefix="Select-sm"
															options={Quantity}
															placeholder="Select"
														/>
													</Form.Group>
												</li>
											</ul>
										</div>
									</div>
									<div className="colors d-flex mt-2">
										<span className="mt-2">colors:</span>
										<Row className="gutters-xs ms-4">
											<div className="me-2 w-auto ps-0 pe-0">
												<label className="colorinput">
													<input
														name="color"
														type="radio"
														value="azure"
														className="colorinput-input"
														defaultChecked
													/>
													<span className="colorinput-color bg-danger"></span>
												</label>
											</div>
											<div className="me-2 w-auto ps-0 pe-0">
												<label className="colorinput">
													<input
														name="color"
														type="radio"
														value="indigo"
														className="colorinput-input"
													/>
													<span className="colorinput-color bg-secondary"></span>
												</label>
											</div>
											<div className="me-2 w-auto ps-0 pe-0">
												<label className="colorinput">
													<input
														name="color"
														type="radio"
														value="purple"
														className="colorinput-input"
													/>
													<span className="colorinput-color bg-dark"></span>
												</label>
											</div>
											<div className="me-2 w-auto ps-0 pe-0">
												<label className="colorinput">
													<input
														name="color"
														type="radio"
														value="pink"
														className="colorinput-input"
													/>
													<span className="colorinput-color bg-pink"></span>
												</label>
											</div>
										</Row>
									</div>
									<div className="action mt-5">
										<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`}>
											<Button variant="danger" className="add-to-cart me-3">
												ADD TO WISHLIST
											</Button>
										</Link>
										<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} onClick={() => { AddToCart(defaultData.id)}}>
											<Button variant="success" className="add-to-cart me-3">
												ADD TO CART
											</Button>
										</Link>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="related-products-ltr-l">
				{productData1.map((idx) => (
					<Col xl={3} className="col-md-6 col-sm-6" key={Math.random()}>
						<Card className="item-card">
							<Card.Body className="pb-0 h-100">
								<Link
									to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails/${idx.id}`}
									className="text-center"
								>
									<img
										src={idx.pic}
										alt="img"
										className="img-fluid w-100 rounded-7"
									/>
								</Link>
								<Card.Body className="relative product-des">
									<div className="cardtitle">
										<span>{idx.type}</span>
										<a>{idx.title}</a>
									</div>
									<div className="cardprice">
										<span className="type--strikethrough">{idx.oldprice}</span>
										<span>{idx.newprice}</span>
									</div>
								</Card.Body>
							</Card.Body>
							<div className="text-center border-top py-3 px-2 ">
								<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shop`} className="btn btn-primary mx-2">
									{" "}
									View More
								</Link>
								<Link
									to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`}
									className="btn btn-success"
									onClick={() => {
										AddToCart(idx.id);
									}}
								>
									<i className="fa fa-shopping-cart"></i> Add to cart
								</Link>
							</div>
						</Card>
					</Col>
				))}
			</Row>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col md={12} xl={4} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="feature2">
								<i className="mdi mdi-airplane-takeoff bg-purple ht-50 wd-50 text-center brround text-white"></i>
							</div>
							<h5 className="mb-2 tx-16">Free Shipping</h5>
							<span className="fs-14 text-muted">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
								domenus orioneu.
							</span>
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} xl={4} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="feature2">
								<i className="mdi mdi-headset bg-pink  ht-50 wd-50 text-center brround text-white"></i>
							</div>
							<h5 className="mb-2 tx-16">Customer Support</h5>
							<span className="fs-14 text-muted">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
								domenus orioneu.
							</span>
						</Card.Body>
					</Card>
				</Col>
				<Col md={12} xl={4} xs={12} sm={12}>
					<Card>
						<Card.Body>
							<div className="feature2">
								<i className="mdi mdi-refresh bg-teal ht-50 wd-50 text-center brround text-white"></i>
							</div>
							<div className="icon-return"></div>
							<h5 className="mb-2  tx-16">30 days money back</h5>
							<span className="fs-14 text-muted">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
								domenus orioneu.
							</span>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}
			{/* <!-- Container closed --> */}
		</div>
	);
};

ProductDetails.propTypes = {};

ProductDetails.defaultProps = {};

const mapStateToProps = (state) => ({
	local_varaiable: state,
});
export default connect(mapStateToProps, { AddToCart })(ProductDetails);
