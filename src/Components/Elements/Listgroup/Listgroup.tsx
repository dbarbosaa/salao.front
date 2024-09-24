import React from 'react';
import { Badge, Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Listgroup.module.scss';

//Images
import faces3 from '../../../assets/img/users/3.jpg';
import faces8 from '../../../assets/img/users/8.jpg';
import faces11 from '../../../assets/img/users/11.jpg';
import faces17 from '../../../assets/img/users/17.jpg';
import faces5 from '../../../assets/img/users/5.jpg';
import faces6 from '../../../assets/img/users/6.jpg';
import faces12 from '../../../assets/img/users/12.jpg';
import faces15 from '../../../assets/img/users/15.jpg';
import { Link } from 'react-router-dom';
import { UnfoldLessDoubleOutlined } from '@mui/icons-material';


const Listgroup = () => {

	return (

		<div className={styles.Listgroup}>
			<Pageheader titles="Elements" active="Listgroup" />

			{/* <!-- container --> */}

			{/* <!-- row --> */}

			<Row>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Basic List group</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ListGroup>
								<ListGroup.Item>An item</ListGroup.Item>
								<ListGroup.Item>A second item</ListGroup.Item>
								<ListGroup.Item>A third item</ListGroup.Item>
								<ListGroup.Item>A fourth item</ListGroup.Item>
								<ListGroup.Item>And a fifth one</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Basic List group with Active item</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ListGroup>
								<ListGroup.Item active>An active item</ListGroup.Item>
								<ListGroup.Item>A second item</ListGroup.Item>
								<ListGroup.Item>A third item</ListGroup.Item>
								<ListGroup.Item>A fourth item</ListGroup.Item>
								<ListGroup.Item>And a fifth one</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Basic List group with Disabled item</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ListGroup>
								<ListGroup.Item disabled>A disabled item</ListGroup.Item>
								<ListGroup.Item>A second item</ListGroup.Item>
								<ListGroup.Item>A third item</ListGroup.Item>
								<ListGroup.Item>A fourth item</ListGroup.Item>
								<ListGroup.Item>And a fifth one</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>List group with Link</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ListGroup>
								<ListGroup.Item className="list-group-item-action" active>The current link item</ListGroup.Item>
								<ListGroup.Item className="list-group-item-action">A second link item</ListGroup.Item>
								<ListGroup.Item className="list-group-item-action">A third link item</ListGroup.Item>
								<ListGroup.Item className="list-group-item-action">A fourth link item</ListGroup.Item>
								<ListGroup.Item className="list-group-item-action" disabled>A disabled link item</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>List group with Buttons</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ListGroup>
								<ListGroup.Item variant='primary' className="list-group-item list-group-item-action" active>The current button</ListGroup.Item>
								<ListGroup.Item variant='' className="list-group-item list-group-item-action">A second item</ListGroup.Item>
								<ListGroup.Item variant='' className="list-group-item list-group-item-action">A third button item</ListGroup.Item>
								<ListGroup.Item variant='' className="list-group-item list-group-item-action">A fourth button item</ListGroup.Item>
								<ListGroup.Item variant='' className="list-group-item list-group-item-action" disabled>A disabled button item</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Numbered list group</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ListGroup className="list-group-numbered">
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Body className="">
							<Card.Title as='h3' className="mg-b-10">List group with flush</Card.Title>
							<p className="mg-b-20">Add .list-group-flush to remove some borders and rounded corners to
								render list group items edge-to-edge in a parent container(e.g., cards).</p>
							<div>
								<ListGroup className="list-group-flush">
									<ListGroup.Item>An item</ListGroup.Item>
									<ListGroup.Item>A second item</ListGroup.Item>
									<ListGroup.Item>A third item</ListGroup.Item>
									<ListGroup.Item>A fourth item</ListGroup.Item>
								</ListGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Numbered list group with custom content</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ListGroup className="list-group-numbered">
								<ListGroup.Item className="d-flex justify-content-between align-items-start">
									<div className="ms-2 me-auto">
										<div className="fw-bold">Subheading</div>
										Cras justo odio
									</div>
									<Badge bg='primary' className="rounded-pill">14</Badge>
								</ListGroup.Item>
								<ListGroup.Item className="d-flex justify-content-between align-items-start">
									<div className="ms-2 me-auto">
										<div className="fw-bold">Subheading</div>
										Cras justo odio
									</div>
									<Badge bg='primary' className="rounded-pill">14</Badge>
								</ListGroup.Item>
								<ListGroup.Item className="d-flex justify-content-between align-items-start">
									<div className="ms-2 me-auto">
										<div className="fw-bold">Subheading</div>
										Cras justo odio
									</div>
									<Badge bg='primary' className="rounded-pill">14</Badge>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Body className="">
							<Card.Title as='h3' className="mg-b-10">Horizontal List group</Card.Title>
							<p className="mg-b-20">Add .list-group-horizontal to change the layout of list group items
								from vertical to horizontal across all breakpoints. Alternatively, choose a
								responsive variant .list-group-horizontal- (sm|md|lg|xl|xxl) to make a list group
								horizontal starting at that breakpoint’s min-width.</p>
							<div>
								<ListGroup className="list-group-horizontal mb-3">
									<ListGroup.Item>An item</ListGroup.Item>
									<ListGroup.Item>A second item</ListGroup.Item>
									<ListGroup.Item>A third item</ListGroup.Item>
								</ListGroup>
								<ListGroup className="list-group-horizontal-sm mb-3">
									<ListGroup.Item>An item</ListGroup.Item>
									<ListGroup.Item>A second item</ListGroup.Item>
									<ListGroup.Item>A third item</ListGroup.Item>
								</ListGroup>
								<ListGroup className="list-group-horizontal-md mb-3">
									<ListGroup.Item>An item</ListGroup.Item>
									<ListGroup.Item>A second item</ListGroup.Item>
									<ListGroup.Item>A third item</ListGroup.Item>
								</ListGroup>
								<ListGroup className="list-group-horizontal-lg mb-3">
									<ListGroup.Item>An item</ListGroup.Item>
									<ListGroup.Item>A second item</ListGroup.Item>
									<ListGroup.Item>A third item</ListGroup.Item>
								</ListGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Body className="">
							<Card.Title as='h3' className="mg-b-10">List group with Checkboxes</Card.Title>
							<p className="mg-b-20">Place Bootstrap’s checkboxes and radios within list group items and
								customize as needed. You can use them without labels, but please remember to include
								an aria-label attribute and value for accessibility.</p>
							<div>
								<ListGroup>
									<ListGroup.Item>
										<Form.Check type="checkbox" label="First checkbox" />
									</ListGroup.Item>
									<ListGroup.Item>
										<Form.Check type="checkbox" label="Second checkbox" />
									</ListGroup.Item>
									<ListGroup.Item>
										<Form.Check type="checkbox" label="Third checkbox" />
									</ListGroup.Item>
									<ListGroup.Item>
										<Form.Check type="checkbox" label="Fourth checkbox" />
									</ListGroup.Item>
									<ListGroup.Item>
										<Form.Check type="checkbox" label="Fifth checkbox" />
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Body className="">
							<Card.Title as='h3' className="mg-b-10">List group with Contextual classNamees</Card.Title>
							<p className="mg-b-20">Use contextual classNamees to style list items with a stateful background
								and color..</p>
							<div>
								<ListGroup>
									<ListGroup.Item>A simple default list group item</ListGroup.Item>
									<ListGroup.Item className="list-group-item-primary">A simple primary list group item</ListGroup.Item>
									<ListGroup.Item className="list-group-item-secondary">A simple secondary list group item</ListGroup.Item>
									<ListGroup.Item className="list-group-item-success">A simple success list group item</ListGroup.Item>
									<ListGroup.Item className="list-group-item-warning">A simple warning list group item</ListGroup.Item>
									<ListGroup.Item className="list-group-item-info">A simple info list group item </ListGroup.Item>
								</ListGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>List style with paragraph</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<div>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fuga veniam
									alias ab nemo nesciunt aperiam vero rem enim ,Lorem ipsum dolor sit amet
									consectetur, adipisicing elit. Quos obcaecati velit earum suscipit possimus
									quaerat similique eos quod distinctio commodi dicta ?
								</p>
								<ul className="paragraph-list">
									<li>Lorem ipsum dolor sit amet</li>
									<li>Consectetur adipiscing elit</li>
									<li>Integer molestie lorem at massa</li>
									<li>Facilisis in pretium nisl aliquet</li>
								</ul>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fuga veniam
									alias ab nemo nesciunt aperiam vero rem enim ,Lorem ipsum dolor sit amet
									consectetur, adipisicing elit. Quos obcaecati velit earum suscipit possimus
									quaerat similique eos quod distinctio commodi dicta ?
								</p>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Unorder List Style</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ul className="list-style-1">
								<li>Lorem ipsum dolor sit amet</li>
								<li>Consectetur adipiscing elit</li>
								<li>Integer molestie lorem at massa</li>
								<li>Facilisis in pretium nisl aliquet</li>
								<li>Nulla volutpat aliquam velit
									<ul>
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Ac tristique libero volutpat at</li>
									</ul>
								</li>
								<li>Faucibus porta lacus fringilla vel</li>
								<li>Aenean sit amet erat nunc</li>
								<li>Eget porttitor lorem</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Unorder List Style2</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ul className="list-style2">
								<li>Lorem ipsum dolor sit amet</li>
								<li>Consectetur adipiscing elit</li>
								<li>Integer molestie lorem at massa</li>
								<li>Facilisis in pretium nisl aliquet</li>
								<li>Nulla volutpat aliquam velit
									<ul>
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Ac tristique libero volutpat at</li>
									</ul>
								</li>
								<li>Faucibus porta lacus fringilla vel</li>
								<li>Aenean sit amet erat nunc</li>
								<li>Eget porttitor lorem</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Unorder List Style3</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ul className="list-style3">
								<li>Lorem ipsum dolor sit amet</li>
								<li>Consectetur adipiscing elit</li>
								<li>Integer molestie lorem at massa</li>
								<li>Facilisis in pretium nisl aliquet</li>
								<li>Nulla volutpat aliquam velit
									<ul>
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Ac tristique libero volutpat at</li>
									</ul>
								</li>
								<li>Faucibus porta lacus fringilla vel</li>
								<li>Aenean sit amet erat nunc</li>
								<li>Eget porttitor lorem</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Unorder List Style4</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ul className="list-style4">
								<li>Lorem ipsum dolor sit amet</li>
								<li>Consectetur adipiscing elit</li>
								<li>Integer molestie lorem at massa</li>
								<li>Facilisis in pretium nisl aliquet</li>
								<li>Nulla volutpat aliquam velit
									<ul>
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Ac tristique libero volutpat at</li>
									</ul>
								</li>
								<li>Faucibus porta lacus fringilla vel</li>
								<li>Aenean sit amet erat nunc</li>
								<li>Eget porttitor lorem</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Unorder List Style5</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ul className="list-style5">
								<li>Lorem ipsum dolor sit amet</li>
								<li>Consectetur adipiscing elit</li>
								<li>Integer molestie lorem at massa</li>
								<li>Facilisis in pretium nisl aliquet</li>
								<li>Nulla volutpat aliquam velit
									<ul>
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Ac tristique libero volutpat at</li>
									</ul>
								</li>
								<li>Faucibus porta lacus fringilla vel</li>
								<li>Aenean sit amet erat nunc</li>
								<li>Eget porttitor lorem</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Unorder List Style6</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ul className="list-style6">
								<li>Lorem ipsum dolor sit amet</li>
								<li>Consectetur adipiscing elit</li>
								<li>Integer molestie lorem at massa</li>
								<li>Facilisis in pretium nisl aliquet</li>
								<li>Nulla volutpat aliquam velit
									<ul>
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Ac tristique libero volutpat at</li>
									</ul>
								</li>
								<li>Faucibus porta lacus fringilla vel</li>
								<li>Aenean sit amet erat nunc</li>
								<li>Eget porttitor lorem</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Order list</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ol className="order-list">
								<li>Lorem ipsum dolor sit amet</li>
								<li>Consectetur adipiscing elit</li>
								<li>Integer molestie lorem at massa</li>
								<li>Facilisis in pretium nisl aliquet</li>
								<li>Nulla volutpat aliquam velit
									<ol className="order-list">
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Ac tristique libero volutpat at</li>
									</ol>
								</li>
								<li>Faucibus porta lacus fringilla vel</li>
								<li>Aenean sit amet erat nunc</li>
								<li>Eget porttitor lorem</li>
							</ol>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={6}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Order With unorder</Card.Title>
						</Card.Header>
						<Card.Body className="pt-0">
							<ol className="order-list">
								<li>Lorem ipsum dolor sit amet</li>
								<li>Consectetur adipiscing elit</li>
								<li>Integer molestie lorem at massa</li>
								<li>Facilisis in pretium nisl aliquet</li>
								<li>Nulla volutpat aliquam velit
									<ul className="list-style4 ps-5">
										<li>Phasellus iaculis neque</li>
										<li>Purus sodales ultricies</li>
										<li>Vestibulum laoreet porttitor sem</li>
										<li>Ac tristique libero volutpat at</li>
									</ul>
								</li>
								<li>Faucibus porta lacus fringilla vel</li>
								<li>Aenean sit amet erat nunc</li>
								<li>Eget porttitor lorem</li>
							</ol>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col lg={6} md={12}>
					<Card className="mg-b-20" id="list">
						<Card.Header>
							<Card.Title as='h3'>Basic Example</Card.Title>
							<Card.Subtitle as='p' className="text-muted">It is Very Easy to Customize and it uses in your
								website apllication</Card.Subtitle>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="example">
									<div className="listgroup-example">
										<ul className="list-group">
											<li>Dapibus ac facilisis in</li>
											<li>Morbi leo risus</li>
											<li>Cras justo odio
												<ul className="list-style-disc">
													<li>Lorem </li>
													<li>established</li>
													<li>Contrary</li>
												</ul>
											</li>
											<li>Porta ac consectetur ac</li>
											<li>Vestibulum at eros</li>
										</ul>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>


				<Col lg={6} md={12}>
					<Card className="mg-b-20" id="list1">
						<Card.Header>
							<Card.Title as='h3'>Active Item</Card.Title>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
								your website apllication</Card.Subtitle>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="example">
									<div className="listgroup-example2">
										<ul className="list-group">
											<li>Dapibus ac facilisis in</li>
											<li>Morbi leo risus</li>
											<li>Cras justo odio
												<ul className="list-style-disc">
													<li>Lorem </li>
													<li>established</li>
													<li>Contrary</li>
												</ul>
											</li>
											<li>Porta ac consectetur ac</li>
											<li>Vestibulum at eros</li>
										</ul>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} xl={6} md={12}>
					<Card className="mg-b-20">
						<Card.Header>
							<Card.Title as='h3'>Custom content</Card.Title>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
								your website apllication</Card.Subtitle>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="example">
									<ListGroup>
										<ListGroup.Item className="list-group-item-action flex-column align-items-start active" >
											<div className="d-flex w-100 justify-content-between">
												<h5 className="mb-2 tx-14">List group item heading</h5><small>3 days
													ago</small>
											</div>
											<p className="mb-1 tx-13">Donec id elit non mi porta gravida at eget metus.
												Maecenas sed diam eget risus varius blandit.</p><small>Donec id elit
													non mi porta.</small>
										</ListGroup.Item>
										<ListGroup.Item className="list-group-item-action flex-column align-items-start" >
											<div className="d-flex w-100 justify-content-between">
												<h5 className="mb-2 tx-14">List group item heading</h5><small
													className="text-muted">3 days ago</small>
											</div>
											<p className="mb-1 tx-13">Donec id elit non mi porta gravida at eget metus.
												Maecenas sed diam eget risus varius blandit.</p><small
													className="text-muted">Donec id elit non mi porta.</small>
										</ListGroup.Item>
										<ListGroup.Item className="list-group-item-action flex-column align-items-start" >
											<div className="d-flex w-100 justify-content-between">
												<h5 className="mb-2 tx-14">List group item heading</h5><small
													className="text-muted">3 days ago</small>
											</div>
											<p className="mb-1 tx-13">Donec id elit non mi porta gravida at eget metus.
												Maecenas sed diam eget risus varius blandit.</p><small
													className="text-muted">Donec id elit non mi porta.</small>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} xl={6} md={12}>
					<Card className="mg-b-20">
						<Card.Header>
							<Card.Title as='h3'>Custom content with image</Card.Title>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
								your website apllication</Card.Subtitle>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="example">
									<ListGroup>
										<ListGroup.Item className="list-group-item-action flex-column align-items-start" active >
											<div className="d-flex">
												<img alt="" className="me-3 rounded-circle avatar-md"
													src={faces3} />
												<div className="">
													<div className="d-flex w-100 justify-content-between">
														<h5 className="mb-2 tx-14">List group item heading</h5><small>3 days ago</small>
													</div>
													<p className="mb-1 tx-13">Donec id elit non mi porta gravida at eget
														metus. Maecenas sed diam eget risus varius blandit.</p>
													<small>Donec id elit non mi porta.</small>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item className="list-group-item-action flex-column align-items-start" >
											<div className="d-flex">
												<img alt="" className="me-3 rounded-circle avatar-md"
													src={faces8} />
												<div className="">
													<div className="d-flex w-100 justify-content-between">
														<h5 className="mb-2 tx-14">List group item heading</h5><small>3 days ago</small>
													</div>
													<p className="mb-1 tx-13">Donec id elit non mi porta gravida at eget
														metus. Maecenas sed diam eget risus varius blandit.</p>
													<small>Donec id elit non mi porta.</small>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item className="list-group-item-action flex-column align-items-start" >
											<div className="d-flex">
												<img alt="" className="me-3 rounded-circle avatar-md"
													src={faces11} />
												<div className="">
													<div className="d-flex w-100 justify-content-between">
														<h5 className="mb-2 tx-14">List group item heading</h5><small>3 days ago</small>
													</div>
													<p className="mb-1 tx-13">Donec id elit non mi porta gravida at eget
														metus. Maecenas sed diam eget risus varius blandit.</p>
													<small>Donec id elit non mi porta.</small>
												</div>
											</div>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} xl={6} md={12}>
					<Card className="mg-b-20">
						<Card.Header>
							<Card.Title as='h3'>USER LIST</Card.Title>
							<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it uses in
								your website apllication</Card.Subtitle>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="">
									<ListGroup>
										<ListGroup.Item className="pd-y-20">
											<div className="media">
												<div className="d-flex mg-r-10 wd-50">
													<img className="me-4 rounded-circle avatar-md"
														src={faces17} alt="avatar" />
												</div>
												<div className="media-body">
													<div className="media-body d-flex">
														<h6 className="tx-15 mb-2">Blake Vanessa</h6>
														<span className="tx-12 float-end ms-auto text-muted">4 hours
															ago</span>
													</div>
													<p className="tx-13 mg-b-10 text-muted mb-0">Lorem Ipsum is simply
														dummy text of the printing and typesetting industry. Lorem
														Ipsum has been the industry's .</p>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item className="pd-y-20">
											<div className="media">
												<div className="d-flex mg-r-10 wd-50">
													<img className="me-4 rounded-circle avatar-md"
														src={faces5} alt="avatar" />
												</div>
												<div className="media-body">
													<div className="media-body d-flex">
														<h6 className="tx-15 mb-2">Elizabeth Parsons</h6>
														<span className="tx-12 float-end ms-auto text-muted">8 hours
															ago</span>
													</div>
													<p className="tx-13 mg-b-10 text-muted mb-0">Lorem Ipsum is simply
														dummy text of the printing and typesetting industry. Lorem
														Ipsum has been the industry's .</p>
												</div>
											</div>
										</ListGroup.Item>
										<ListGroup.Item className="pd-y-20">
											<div className="media">
												<div className="d-flex mg-r-10 wd-50">
													<img className="me-4 rounded-circle avatar-md"
														src={faces12} alt="avatar" />
												</div>
												<div className="media-body">
													<div className="media-body d-flex">
														<h6 className="tx-15 mb-2">Nicola Lambert</h6>
														<span className="tx-12 float-end text-muted ms-auto">12 hours
															ago</span>
													</div>
													<p className="tx-13 mg-b-10 text-muted mb-0">Lorem Ipsum is simply
														dummy text of the printing and typesetting industry. Lorem
														Ipsum has been the industry's .</p>
												</div>
											</div>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} xl={6} md={12}>
					<Card className="mg-b-20" id="list8">
						<Card.Header className="border-bottom-0">
							<div>
								<Card.Title as='h3'>Using Image</Card.Title>
								<Card.Subtitle as='p' className="mg-b-20 text-muted">It is Very Easy to Customize and it
									uses in your website apllication.</Card.Subtitle>
							</div>
						</Card.Header>
						<Card.Body className="pt-0">
							<div className="text-wrap">
								<div className="">
									<ListGroup className="wd-md-100p users-list-group">
										<ListGroup.Item className="d-sm-flex d-block align-items-center">
											<img alt="" className="me-3 rounded-circle avatar-md"
												src={faces5} />
											<div>
												<h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">Adrian Monino
												</h6><span className="d-block tx-13 text-muted">Premium Member</span>
											</div>
											<div className="d-flex float-start ms-auto">
												<Link to="#" className="btn btn-light btn-icon me-2">
													<div className=""><i className="bx bx-plus"></i></div>
												</Link>
												<Link to="#" className="btn btn-light btn-icon">
													<div className=""><i className="bx bx-minus"></i></div>
												</Link>
											</div>
										</ListGroup.Item>
										<ListGroup.Item className="d-sm-flex d-block align-items-center">
											<img alt="" className="me-3 rounded-circle avatar-md"
												src={faces6} />
											<div>
												<h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">Joel Mendez
												</h6><span className="d-block tx-13 text-muted">Premium Member</span>
											</div>
											<div className="d-flex float-start ms-auto">
												<Link to="#" className="btn btn-light btn-icon me-2">
													<div className=""><i className="bx bx-plus"></i></div>
												</Link>
												<Link to="#" className="btn btn-light btn-icon">
													<div className=""><i className="bx bx-minus"></i></div>
												</Link>
											</div>
										</ListGroup.Item>
										<ListGroup.Item className="d-sm-flex d-block align-items-center">
											<img alt="" className="me-3 rounded-circle avatar-md"
												src={faces15} />
											<div>
												<h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">Joel Mendez
												</h6><span className="d-block tx-13 text-muted">Premium Member</span>
											</div>
											<div className="d-flex float-start ms-auto">
												<Link to="#" className="btn btn-light btn-icon me-2">
													<div className=""><i className="bx bx-plus"></i></div>
												</Link>
												<Link to="#" className="btn btn-light btn-icon">
													<div className=""><i className="bx bx-minus"></i></div>
												</Link>
											</div>
										</ListGroup.Item>
										<ListGroup.Item className="d-sm-flex d-block align-items-center">
											<img alt="" className="me-3 rounded-circle avatar-md"
												src={faces12} />
											<div>
												<h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">Marianne Audrey
												</h6><span className="d-block tx-13 text-muted">Premium Member</span>
											</div>
											<div className="d-flex float-start ms-auto">
												<Link to="#" className="btn btn-light btn-icon me-2">
													<div className=""><i className="bx bx-plus"></i></div>
												</Link>
												<Link to="#" className="btn btn-light btn-icon">
													<div className=""><i className="bx bx-minus"></i></div>
												</Link>
											</div>
										</ListGroup.Item>
									</ListGroup>
								</div>
							</div>
						</Card.Body>

					</Card>
				</Col>
				{/* <!-- /row --> */}
			</Row>
			{/* <!-- row closed --> */}
			{/* <!-- Container closed --> */}
		</div>
	)
};

Listgroup.propTypes = {};

Listgroup.defaultProps = {};

export default Listgroup;
