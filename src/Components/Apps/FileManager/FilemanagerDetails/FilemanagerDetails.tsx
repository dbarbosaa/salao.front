import React from "react";
import { Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import styles from './FilemanagerDetails.module.scss';
import blogMain from '../../../../assets/img/photos/27.jpg';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FileData } from "./Data/DataFileManager";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RecentFiles } from "../../../CommonFileComponents/LightGallery";

const FilemanagerDetails = () => {

	const settings = {
		className: "center",
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 5,
		swipeToSlide: true,
		afterChange: function (index) {
			console.log(
				`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
			);
		},
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	}

	return (

		<div className={styles.FilemanagerDetails}>
			<Pageheader titles="Filemanager" active="File Details" />

			{/* <!-- container --> */}
			{/* <!-- Row --> */}
			<Row className="row-sm">
				<Col xxl={8} xl={12} lg={12} md={12}>
					<Card className="custom-card overflow-hidden">
						<Card.Body className="px-4 pt-4">
							<Link to={`${import.meta.env.BASE_URL}advancedui/blogpages/blogdetails`}><img src={blogMain} alt="img"
								className="cover-image rounded-7 w-100" /></Link>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={4} xl={12} lg={12} md={12}>
					<Card className="custom-card">
						<Card.Body>
							<h5 className="mb-3">File details :</h5>
							<div className="">
								<Row>
									<Col xl={12}>
										<div className="table-responsive">
											<Table className="table mb-0 border-top table-bordered text-nowrap">
												<tbody>
													<tr>
														<th scope="row">File-name</th>
														<td>image.jpg</td>
													</tr>
													<tr>
														<th scope="row">File-size</th>
														<td>12.45mb</td>
													</tr>
													<tr>
														<th scope="row">uploaded-date</th>
														<td>01-12-2020</td>
													</tr>
													<tr>
														<th scope="row">uploaded-by</th>
														<td>prityy abodh</td>
													</tr>
													<tr>
														<th scope="row">image-width</th>
														<td>1000</td>
													</tr>
													<tr>
														<th scope="row">image-height</th>
														<td>600</td>
													</tr>
													<tr>
														<th scope="row">File-formate</th>
														<td>jpg</td>
													</tr>
													<tr className="border-bottom">
														<th scope="row">File-location</th>
														<td>storage/photos/image.jpg</td>
													</tr>
												</tbody>
											</Table>
										</div>
									</Col>
								</Row>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col xxl={8} xl={12} lg={12} md={12} className="">
					<Card className="custom-card">
						<Card.Body className="h-100">
							<Slider {...settings}>
								{FileData.map((idx) => (
									<div className="item" key={Math.random()}>
										<div className="card m-2 border-0">
											<div className="card custom-card overflow-hidden mb-0">
												<Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img className="w-100"
													src={idx.pic} alt="img" id="basicSlider"/></Link>
												<div className="card-footer bd-t-0 py-3">
													<div className="d-flex">
														<div>
															<h6 className="mb-0">{idx.title}</h6>
														</div>
														<div className="ms-auto">
															<h6 className="text-muted mb-0">120 KB</h6>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</Slider>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={4} xl={12} lg={12} md={12} className="">
					<Card className="custom-card">
						<Card.Body>
							<h5 className="mb-3">Recent Files</h5>
							<RecentFiles/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End Row --> */}

			{/* <!-- Container closed --> */}
		</div >
	)
};

FilemanagerDetails.propTypes = {};

FilemanagerDetails.defaultProps = {};

export default FilemanagerDetails;
