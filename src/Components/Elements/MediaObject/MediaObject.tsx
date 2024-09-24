import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './MediaObject.module.scss';

//Images
import faces2 from '../../../assets/img/users/2.jpg';
import faces4 from '../../../assets/img/users/4.jpg';
import faces9 from '../../../assets/img/users/9.jpg';
import faces8 from '../../../assets/img/users/8.jpg';
import faces5 from '../../../assets/img/users/5.jpg';
import faces7 from '../../../assets/img/users/7.jpg';
import faces12 from '../../../assets/img/users/12.jpg';
import faces14 from '../../../assets/img/users/14.jpg';



const MediaObject = () => {

	return (
		
		<div className={styles.MediaObject}>
			<Pageheader titles="Elements" active="Media-object" />
			{/* <!-- container --> */}
			<Row>
				<Col xl={12} lg={12}>
					<Card className="" id="media-object">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Basic Example</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media d-block d-sm-flex">
										<img alt="" className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
											src={faces4} />
										<div className="media-body">
											<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
											Lorem Ipsum generators on the Internet as necessary aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
											nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
											amet, consectetur, adipisci velit
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="media-object2">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Nesting</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media d-block d-sm-flex">
										<img alt="" className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
											src={faces9} />
										<div className="media-body">
											<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
											<p>Lorem Ipsum generators on the Internet as necessary aut odit aut
												fugit, sed quia consequuntur magni dolores eos qui ratione
												voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
												ipsum quia dolor sit amet, consectetur, adipisci velit</p>
											<div className="media d-block d-sm-flex mg-t-25">
												<img alt=""
													className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
													src={faces8} />
												<div className="media-body">
													<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
													Lorem Ipsum generators on the Internet as necessary aut odit aut
													fugit, sed quia consequuntur magni dolores eos qui ratione
													voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
													ipsum quia dolor sit amet, consectetur, adipisci velit
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="media-object3">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Alignment</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media d-block d-sm-flex">
										<img alt=""
											className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0 align-self-center"
											src={faces14} />
										<div className="media-body">
											<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
											Lorem Ipsum generators on the Internet as necessary aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
											nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
											amet, consectetur, adipisci velit Lorem Ipsum generators on the Internet
											as necessary aut odit aut fugit, sed quia consequuntur magni dolores eos
											qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
											dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="media-object4">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Order</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
								your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media d-block d-sm-flex">
										<div className="media-body">
											<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
											Lorem Ipsum generators on the Internet as necessary aut odit aut fugit,
											sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
											nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
											amet, consectetur, adipisci velit
										</div>
										<img alt="" className="main-img-user avatar-lg mg-sm-l-20 mg-t-20 mg-sm-t-0"
											src={faces5} />
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					<Card className="" id="media-object5">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Media List</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
									your website apllication.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="media media-list d-block d-sm-flex">
										<ul className="list-unstyled mb-0">
											<li className="media d-block d-sm-flex">
												<img alt=""
													className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
													src={faces2} />
												<div className="media-body">
													<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
													Lorem Ipsum generators on the Internet as necessary aut odit aut
													fugit, sed quia consequuntur magni dolores eos qui ratione
													voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
													ipsum quia dolor sit amet, consectetur, adipisci velit
												</div>
											</li>
											<li className="media d-block d-sm-flex mg-t-25">
												<img alt=""
													className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
													src={faces12} />
												<div className="media-body">
													<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
													Lorem Ipsum generators on the Internet as necessary aut odit aut
													fugit, sed quia consequuntur magni dolores eos qui ratione
													voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
													ipsum quia dolor sit amet, consectetur, adipisci velit
												</div>
											</li>
											<li className="media d-block d-sm-flex mg-t-25">
												<img alt=""
													className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
													src={faces7} />
												<div className="media-body">
													<h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
													Lorem Ipsum generators on the Internet as necessary aut odit aut
													fugit, sed quia consequuntur magni dolores eos qui ratione
													voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
													ipsum quia dolor sit amet, consectetur, adipisci velit
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- /row --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

MediaObject.propTypes = {};

MediaObject.defaultProps = {};

export default MediaObject;
