import React, { useState } from 'react';
import styles from './BootstrapCarousel.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Row, Card, Col, Carousel } from 'react-bootstrap';
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper";

//react_slick Css CDN Links
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data carousel images

import photos17 from './../../../assets/img/photos/17.jpg';
import photos18 from './../../../assets/img/photos/18.jpg';
import photos19 from './../../../assets/img/photos/19.jpg';

import photos8 from './../../../assets/img/photos/8.jpg';
import photos9 from './../../../assets/img/photos/9.jpg';
import photos10 from './../../../assets/img/photos/10.jpg';

import photos12 from './../../../assets/img/photos/12.jpg';
import photos13 from './../../../assets/img/photos/13.jpg';

import photos14 from './../../../assets/img/photos/14.jpg';
import photos15 from './../../../assets/img/photos/15.jpg';
import photos16 from './../../../assets/img/photos/16.jpg';

import photos20 from './../../../assets/img/photos/20.jpg';

import photos1 from './../../../assets/img/photos/1.jpg';
import photos2 from './../../../assets/img/photos/2.jpg';
import photos3 from './../../../assets/img/photos/3.jpg';
import photos4 from './../../../assets/img/photos/4.jpg';
import photos5 from './../../../assets/img/photos/5.jpg';
import photos6 from './../../../assets/img/photos/6.jpg';
import photos7 from './../../../assets/img/photos/7.jpg';
import photos11 from './../../../assets/img/photos/11.jpg';

const BootstrapCarousel = () => {

	//CarouselWithThumbnail
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

	//StaticCarousel*********
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	//With controls*********
	const controls = {
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	//With Indicators

	const Indicators = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,

	};

	//Multiple items
	const Multiple = {
		dots: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false,
					speed: 3000,
					autoplay: true
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					speed: 3000,
					autoplay: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					speed: 3000,
					autoplay: true
				}
			}
		]
	};

	//CARD EFFECT CAROUSEL


	return (

		<div className={styles.BootstrapCarousel}>
			<Pageheader titles="Advanced UI" active="Carousel" />
			{/* <!-- container --> */}

			{/* <!-- row opened--> */}
			<Row className="row-sm carsl-body">
				<Col lg={4} md={6}>
					<Card className="custom-card">
						<Card.Body className="">
							<div>
								<Card.Title as='h6' className="mb-1">Static Carousel</Card.Title>
								<p className="text-muted card-sub-title">Here’s a carousel with slides only.</p>
							</div>

							<Slider {...settings}>
								<div>
									<img alt="media_8" className="d-block w-100 rounded-5" src={photos8} />
								</div>
								<div>
									<img alt="media_9" className="d-block w-100 rounded-5" src={photos9} />
								</div>
								<div>
									<img alt="media_10" className="d-block w-100 rounded-5" src={photos10} />
								</div>
							</Slider>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} md={6}>
					<Card className="custom-card">
						<Card.Body className="ht-100p">
							<div>
								<Card.Title as="h6" className="mb-1">With Controls</Card.Title>
								<p className="text-muted card-sub-title">Adding in the previous and next controls.</p>
							</div>
							<div>

								<Slider {...controls}>
									<div>
										<img alt="media_8" className="d-block w-100 rounded-5" src={photos18} />
									</div>
									<div>
										<img alt="media_9" className="d-block w-100 rounded-5" src={photos12} />
									</div>
									<div>
										<img alt="media_10" className="d-block w-100 rounded-5" src={photos13} />
									</div>
								</Slider>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} md={6}>
					<Card className="custom-card">
						<Card.Body className="ht-100p">
							<div>
								<Card.Title as='h6' className="mb-1">With Indicator</Card.Title>
								<p className="text-muted card-sub-title">You can also add the indicators to the carousel, alongside the controls.</p>
							</div>
							<div>

								<Slider {...Indicators}>
									<div>
										<img alt="media_8" className="d-block w-100 rounded-5" src={photos14} />
									</div>
									<div>
										<img alt="media_9" className="d-block w-100 rounded-5" src={photos15} />
									</div>
									<div>
										<img alt="media_10" className="d-block w-100 rounded-5" src={photos16} />
									</div>
								</Slider>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} md={6}>
					<Card className="custom-card">
						<Card.Body className="ht-100p">
							<div>
								<Card.Title as='h6' className="mb-1">With Caption</Card.Title>
								<p className="text-muted card-sub-title">Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item.</code></p>
							</div>
							<div>

								<Carousel className='bg-dark'>
									<Carousel.Item >
										<img
											className="d-block w-100 op-3 rounded-5"
											src={photos17}
											alt="First slide"
										/>
										<Carousel.Caption className="d-none d-md-block">
											<h5>First Slide</h5>
											<p className="tx-14">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100 op-3 rounded-5"
											src={photos18}
											alt="Second slide"
										/>

										<Carousel.Caption className="d-none d-md-block">
											<h5>Second Slide</h5>
											<p className="tx-14">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100 op-3 rounded-5"
											src={photos19}
											alt="Third slide"
										/>

										<Carousel.Caption className="d-none d-md-block">

											<h5>Third Slide</h5>
											<p className="tx-14">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

										</Carousel.Caption>
									</Carousel.Item>
								</Carousel>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<div className="col-lg-4 col-md-6">
					<div className="card custom-card">
						<div className="card-body ht-100p">
							<div>
								<h6 className="card-title mb-1">Card Effect Carousel</h6>
								<p className="text-muted card-sub-title">Add effect transition to your carousel to animate slides with a effect instead of a slide.</p>
							</div>
							<div className="card-body">

								<div className="">
									<Swiper
										effect={"cards"}
										grabCursor={true}
										modules={[EffectCards]}
										className="mySwiper"
									>
										<SwiperSlide><img alt="img" className="d-block w-100 rounded-5" src={photos20} /></SwiperSlide>
										<SwiperSlide><img alt="img" className="d-block w-100 rounded-5" src={photos1} /></SwiperSlide>
										<SwiperSlide><img alt="img" className="d-block w-100 rounded-5" src={photos2} /></SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="card custom-card">
						<div className="card-body ht-100p">
							<div>
								<h6 className="card-title mb-1">Carousel With Thumbnails</h6>
								<p className="text-muted card-sub-title">The Carousel controls the Thumbnails easily.</p>
							</div>
							<Swiper
								// style={{
								// 	"--swiper-navigation-color": "#fff",
								// 	"--swiper-pagination-color": "#fff",
								// }}
								loop={true}
								spaceBetween={10}
								navigation={true}
								thumbs={{ swiper: thumbsSwiper }}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper2"
								
							>
								<SwiperSlide>
									<img src={photos1} className="rounded-5 mb-2 w-100" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos2} className="rounded-5 mb-2 w-100" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos3} className="rounded-5 mb-2 w-100" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos4} className="rounded-5 mb-2 w-100" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos5} className="rounded-5 mb-2 w-100" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos6} className="rounded-5 mb-2 w-100" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos7} className="rounded-5 mb-2 w-100" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos8} className="rounded-5 mb-2 w-100" alt="img" />
								</SwiperSlide>
							</Swiper>

							<Swiper
								onSwiper={setThumbsSwiper}
								loop={true}
								spaceBetween={10}
								slidesPerView={4}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper thumb"
							>
								<SwiperSlide>
									<img src={photos1} className="rounded-5" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos2} className="rounded-5" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos3} className="rounded-5" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos4} className="rounded-5" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos5} className="rounded-5" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos6} className="rounded-5" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos7} className="rounded-5" alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={photos8} className="rounded-5" alt="img" />
								</SwiperSlide>
							</Swiper>

						</div>
					</div>
				</div>
				<div className="col-lg-12 col-md-12">
					<div className="card custom-card">
						<div className="card-body ht-100p">
							<div>
								<h6 className="card-title mb-1">Multi Slider</h6>
								<p className="text-muted card-sub-title">Multislider is a Slick powered slideshow that specializes in showing more than one slide at a time. There's no need to find messy CSS and JS work arounds for other single-slide solutions. Multislider allows the developer to focus fully on each individual slide as it's own component, and then displays as many slides as you decide in a manner that is fluid, consistent, and dymanic.</p>
							</div>
							<div id="basicSlider">

								<div className="MS-content">
									<Slider {...Multiple} >

										<div className='item'>
											<img src={photos1} alt="" />
										</div>
										<div className='item'>
											<img src={photos2} alt="" />
										</div>
										<div className='item'>
											<img src={photos3} alt="" />
										</div>
										<div className='item'>
											<img src={photos4} alt="" />
										</div>
										<div className='item'>
											<img src={photos5} alt="" />
										</div>
										<div className='item'>
											<img src={photos6} alt="" />
										</div>
										<div className='item'>
											<img src={photos7} alt="" />
										</div>
										<div className='item'>
											<img src={photos8} alt="" />
										</div>
										<div className='item'>
											<img src={photos9} alt="" />
										</div>
										<div className='item'>
											<img src={photos10} alt="" />
										</div>
										<div className='item'>
											<img src={photos11} alt="" />
										</div>

									</Slider>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

export default BootstrapCarousel;
