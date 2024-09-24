import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Avatar.module.scss';


//Photos
import faces1 from '../../../assets/img/users/1.jpg';
import faces2 from '../../../assets/img/users/2.jpg';
import faces3 from '../../../assets/img/users/3.jpg';
import faces4 from '../../../assets/img/users/4.jpg';
import faces5 from '../../../assets/img/users/5.jpg';
import faces6 from '../../../assets/img/users/6.jpg';
import faces7 from '../../../assets/img/users/7.jpg';
import faces8 from '../../../assets/img/users/8.jpg';
import faces9 from '../../../assets/img/users/9.jpg';
import faces10 from '../../../assets/img/users/10.jpg';
import faces11 from '../../../assets/img/users/11.jpg';
import faces12 from '../../../assets/img/users/12.jpg';


const Avatar = () => {
	return (
		<div className={styles.Avatar}>
			<Pageheader titles="Elements" active="Avatar" />
			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row>
				<Col lg={12} md={12}>
					<Card className="custom-card" id="sizes">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Avatar Sizes</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">An avatar can have different sizes like larger
									and smaller avatar.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="demo-avatar-group d-sm-flex d-block">
										<div className="main-img-user avatar-xs">
											<img alt="avatar" className="rounded-circle"
												src={faces2} />
										</div>
										<div className="main-img-user avatar-sm">
											<img alt="avatar" className="rounded-circle"
												src={faces3} />
										</div>
										<div className="main-img-user">
											<img alt="avatar" className="rounded-circle"
												src={faces4} />
										</div>
										<div className="main-img-user avatar-md">
											<img alt="avatar" className="rounded-circle"
												src={faces5} />
										</div>
										<div className="main-img-user avatar-lg">
											<img alt="avatar" className="rounded-circle"
												src={faces6} />
										</div>
										<div className="main-img-user avatar-xl d-none d-sm-block">
											<img alt="avatar" className="rounded-circle"
												src={faces7} />
										</div>
										<div className="main-img-user avatar-xxl d-none d-sm-block">
											<img alt="avatar" className="rounded-circle"
												src={faces8} />
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card className="custom-card" id="shapes">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Avatar Shapes</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">An avatar can have different shapes like square
									and round, radius avatars.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="demo-avatar-group">
										<div className="main-img-user avatar-md">
											<img alt="avatar" className="rounded-circle"
												src={faces4} />
										</div>
										<div className="main-img-user avatar-md">
											<img alt="avatar" className="square" src={faces5} />
										</div>
										<div className="main-img-user avatar-md">
											<img alt="avatar" className="radius" src={faces6} />
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>


				<Col lg={12} md={12}>
					<Card className="custom-card" id="initials">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Initials Avatars</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">An avatar can have a temporary use of user's
									initial name while their photos are not yet available.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="demo-avatar-group d-sm-flex d-block avatar-list">
										<div className="avatar avatar-xs mb-sm-0 mb-1 bg-primary rounded-circle">
											A
										</div>
										<div className="avatar avatar-sm mb-sm-0 mb-1 bg-secondary rounded-circle">
											U
										</div>
										<div className="avatar bg-info mb-sm-0 mb-1 rounded-circle">
											C
										</div>
										<div className="avatar avatar-md mb-sm-0 mb-1 bg-success rounded-circle">
											X
										</div>
										<div className="avatar avatar-lg mb-sm-0 mb-1 bg-warning rounded-circle">
											E
										</div>
										<div className="avatar avatar-xl mb-sm-0 mb-1 d-sm-flex bg-danger rounded-circle">
											M
										</div>
										<div className="avatar avatar-xxl mb-sm-0 mb-1 d-sm-flex bg-pink rounded-circle">
											NB
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
					<Card className="custom-card" id="status">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Status Indicator</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">An avatar can have a status indicator to
									indicate users availability.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="example">
									<div className="demo-avatar-group">
										<div className="main-avatar avatar online">
											<img alt="avatar" className="rounded-circle avatar"
												src={faces9} />
										</div>
										<div className="main-avatar avatar-md offline">
											eb
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Avatars with numbers</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">Avatars that show number badges.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="additional-avatars">
									<div className="demo-avatar-group">
										<div className="demo-avatar-group">
											<div className="main-img-user1 avatar-sm me-4">
												<img alt="avatar" className="rounded-circle" src={faces2} />
												<span className="badge rounded-pill bg-primary number-badge">2</span>
											</div>
											<div className="main-img-user1 avatar-md me-4">
												<img alt="avatar" className="rounded-circle" src={faces1} />
												<span className="badge rounded-pill bg-secondary number-badge">11</span>
											</div>
											<div className="main-img-user1 avatar-lg">
												<img alt="avatar" className="rounded-circle" src={faces11} />
												<span className="badge rounded-pill bg-success number-badge">3</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Avatars with icons</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">Avatars that show icon badges.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="additional-avatars">
									<div className="demo-avatar-group">
										<div className="demo-avatar-group">
											<div className="main-img-user3 avatar-sm me-4">
												<img alt="avatar" className="rounded-circle" src={faces2} />
												<span className="badge rounded-pill bg-primary icon-badgeavatar"><i className="fe fe-plus"></i></span>
											</div>
											<div className="main-img-user3 avatar-md me-4">
												<img alt="avatar" className="rounded-circle" src={faces1} />
												<span className="badge rounded-pill bg-secondary icon-badgeavatar"><i className="fe fe-edit"></i></span>
											</div>
											<div className="main-img-user3 avatar-lg">
												<img alt="avatar" className="rounded-circle" src={faces11} />
												<span className="badge rounded-pill bg-success icon-badgeavatar"><i className="fe fe-delete"></i></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Stacked Avatars in Numbers</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">Group of avatars stacked together with number representation.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="avatar-list avatar-list-stacked">
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces2} /></span>
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces6} /></span>
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces8} /></span>
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces10} /></span>
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces12} /></span>
									<span className="avatar1 brround">+8</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<div>
								<Card.Title as='h6' className="mb-1">Stacked Avatars in Numbers</Card.Title>
								<Card.Subtitle as='p' className="text-muted mb-3">Avatars that show icon badges.</Card.Subtitle>
							</div>
							<div className="text-wrap">
								<div className="avatar-list avatar-list-stacked">
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces2} /></span>
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces6} /></span>
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces8} /></span>
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces10} /></span>
									<span className="avatar1 brround"><img alt="" className="rounded-circle" src={faces12} /></span>
									<span className="avatar1 brround"><i className="fe fe-plus"></i></span>
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

Avatar.propTypes = {};

Avatar.defaultProps = {};

export default Avatar;
