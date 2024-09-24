import React from 'react';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Gallery.module.scss';
import Lightbox from "react-image-lightbox";
import { LightGallery } from '../../CommonFileComponents/LightGallery';
import { Col, Pagination, Row } from 'react-bootstrap';


import photos1 from '../../../assets/img/photos/1.jpg';
import photos2 from '../../../assets/img/photos/2.jpg';
import photos3 from '../../../assets/img/photos/3.jpg';
import photos4 from '../../../assets/img/photos/4.jpg';
import photos5 from '../../../assets/img/photos/5.jpg';
import photos6 from '../../../assets/img/photos/6.jpg';
import photos7 from '../../../assets/img/photos/7.jpg';
import photos8 from '../../../assets/img/photos/8.jpg';
import photos9 from '../../../assets/img/photos/9.jpg';




const Gallery = () => {

	return (
		<div className={styles.Gallery}>
			<Pageheader titles="Pages" active="Gallery" />
			{/* <!-- container --> */}

			{/* <!-- Gallery --> */}
			<div className="demo-gallery">
				<LightGallery />

				{/* <!-- /Gallery --> */}

				{/* <!-- Pagination --> */}
				<Row className="mb-5">
					<Col md={6} className="mt-1 d-none d-md-block">1 - 10 of 234 photos</Col>
					<Col md={6}>
						<div className="float-end">
							<Pagination>
								<Pagination.Item><i className="icon ion-ios-arrow-back"></i></Pagination.Item>
								<Pagination.Item className='me-1 active'>1</Pagination.Item>
								<Pagination.Item className='me-1'>2</Pagination.Item>
								<Pagination.Item className='me-1'>3</Pagination.Item>
								<Pagination.Item className='me-1'>4</Pagination.Item>
								<Pagination.Item className='me-1'>5</Pagination.Item>
								<Pagination.Item><i className="icon ion-ios-arrow-forward"></i></Pagination.Item>
							</Pagination>
						</div>
					</Col>
					{/* <!-- COL-END --> */}
				</Row>
				{/* <!-- Pagination --> */}
			</div>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
