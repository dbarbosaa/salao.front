import React, { useState } from "react";
import styles from './Tags.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';
import { TagsInput } from "react-tag-input-component";
import { Link } from "react-router-dom";

const Tags = () => {

	const [selected, setSelected] = useState(['NextJs', 'script', 'Net', 'React', 'Angular', 'Vue']);

	return (
		<div className={styles.Tags}>
			<Pageheader titles="Elements" active="Tags" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col xl={12} lg={12}>
					{/* <!-- div --> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								DEFAULT TAG
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag">First tag</span>
										<span className="tag">Second tag</span>
										<span className="tag">Third tag</span>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					{/* <!--/div--> */}

					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Link Tag
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-rounded">First tag</span>
										<span className="tag tag-rounded">Second tag</span>
										<span className="tag tag-rounded">Third tag</span>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					{/* <!--/div--> */}

					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Default Tags Addon
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-default">
											One
											<Link to="#" className="tag-addon"><i
												className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default">
											Two
											<Link to="#" className="tag-addon"><i
												className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default">
											Three
											<Link to="#" className="tag-addon"><i
												className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default">
											Four
											<Link to="#" className="tag-addon"><i
												className="fe fe-x"></i></Link>
										</span>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					{/* <!--/div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Colored tags
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-primary">primary tag<Link to="#" className="tag-addon bg-primary"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-secondary">secondary tag<Link to="#" className="tag-addon bg-secondary"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-success">success tag<Link to="#" className="tag-addon bg-success"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-warning">warning tag<Link to="#" className="tag-addon bg-warning"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-teal">teal tag<Link to="#" className="tag-addon bg-teal"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-danger">danger tag<Link to="#" className="tag-addon bg-danger"><i className="fe fe-x"></i></Link> </span>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>

					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Colored tags
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-blue">Blue tag</span>
										<span className="tag tag-azure">Azure tag</span>
										<span className="tag tag-indigo">Indigo tag</span>
										<span className="tag tag-purple">Purple tag</span>
										<span className="tag tag-pink">Pink tag</span>
										<span className="tag tag-red">Red tag</span>
										<span className="tag tag-orange">Orange tag</span>
										<span className="tag tag-yellow">Yellow tag</span>
										<span className="tag tag-lime">Lime tag</span>
										<span className="tag tag-green">Green tag</span>
										<span className="tag tag-teal">Teal tag</span>
										<span className="tag tag-cyan">Cyan tag</span>
										<span className="tag tag-gray">Gray tag</span>
										<span className="tag tag-gray-dark">Dark gray tag</span>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					{/* <!--/div--> */}

					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Input Tags
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.
							</p>
							<div className="text-wrap">
								<div className="example">
									<TagsInput value={selected} onChange={setSelected}  />
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}
			</Row>
			{/* <!-- /row --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

Tags.propTypes = {};

Tags.defaultProps = {};

export default Tags;
