import React from 'react';
import { Card } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Images.module.scss';

//Images
import pic1 from '../../../assets/img/photos/1.jpg';


const Images = () => {

	return (

		<div className={styles.Images}>
			<Pageheader titles="Elements" active="Images" />

			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Card className="mg-b-20" id="image1">
				<Card.Body className="">
					<div className="main-content-label mg-b-5">
						Responsive Image
					</div>
					<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
					<div className="text-wrap">
						<div className="example">
							<div><img alt="Responsive image" className="img-fluid" src={pic1} /></div>
						</div>
					</div>
				</Card.Body>
			</Card>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Card className="mg-b-20" id="image2">
				<Card.Body className="">
					<div className="main-content-label mg-b-5">
						Image Thumbnail
					</div>
					<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
					<div className="text-wrap">
						<div className="example">
							<img alt="Responsive image" className="img-thumbnail wd-100p wd-sm-200" src={pic1} />
						</div>
					</div>
				</Card.Body>
			</Card>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Card className="mg-b-20" id="image3">
				<Card.Body className="">
					<div className="main-content-label mg-b-5">
						Aligning Images
					</div>
					<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
					<div className="text-wrap">
						<div className="example">
							<div className="clearfix">
								<img alt="" className="rounded float-sm-start wd-100p wd-sm-200" src={pic1} />
								<img alt="" className="rounded float-sm-end wd-100p wd-sm-200 mg-t-10 mg-sm-t-0" src={pic1} />
							</div>
						</div>
					</div>
				</Card.Body>
			</Card>
			{/* <!-- /row --> */}

			{/* <!-- row --> */}
			<Card className="" id="image4">
				<Card.Body className="">
					<div className="main-content-label mg-b-5">
						Background Image
					</div>
					<p className="mg-b-20">It is Very Easy to Customize and it uses in your website apllication.</p>
					<div className="text-wrap">
						<div className="example">
							<figure className="pos-relative mg-b-0 wd-sm-80p wd-md-50p">
								<img alt="Responsive image" className="img-fit-cover" src={pic1} />
								<figcaption className="pos-absolute a-0 pd-25 bg-black-5 tx-white-8 custom-cls-img">
									<h6 className="tx-14 tx-sm-16 tx-white tx-semibold mg-b-15 mg-sm-b-20">What Does Royalty-Free Mean?</h6>
									<p className="mg-b-0">Royalty free means you just need to pay for rights to use the item once per end product. You don't need to pay additional.</p>
								</figcaption>
							</figure>
						</div>
					</div>
				</Card.Body>
				{/* <!-- /row --> */}
			</Card>
			{/* <!-- Container closed --> */}
			{/* <!-- main-content closed --> */}
		</div>
	)
};

Images.propTypes = {};

Images.defaultProps = {};

export default Images;
