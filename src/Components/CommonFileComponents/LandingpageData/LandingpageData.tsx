import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";

import web1 from '../../../assets/landing/web/1.png';
import web2 from '../../../assets/landing/web/2.png';
import web3 from '../../../assets/landing/web/3.png';
import web4 from '../../../assets/landing/web/4.png';
import web5 from '../../../assets/landing/web/5.png';
import web6 from '../../../assets/landing/web/6.png';

//Features Section

export const LandingFeatureData = () => {

  const landingpageFeature = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
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
  };

  return (
    <Slider {...landingpageFeature} className="feature-logos mt-5">

      <div className="slide">
        <img src={web1} alt="img" />
        <h5 className="mt-3 text-white">Bootstrap5</h5>
      </div>
      <div className="slide">
        <img src={web2} alt="img" />
        <h5 className="mt-3 text-white">HTML5</h5>
      </div>
      <div className="slide">
        <img src={web3} alt="img" />
        <h5 className="mt-3 text-white">JQuery</h5>
      </div>
      <div className="slide">
        <img src={web4} alt="img" />
        <h5 className="mt-3 text-white">Sass</h5>
      </div>
      <div className="slide">
        <img src={web5} alt="img" />
        <h5 className="mt-3 text-white">Gulp</h5>
      </div>
      <div className="slide">
        <img src={web6} alt="img" />
        <h5 className="mt-3 text-white">NPM</h5>
      </div>
      <div className="slide">
        <img src={web1} alt="img" />
        <h5 className="mt-3 text-white">Bootstrap5</h5>
      </div>
      <div className="slide">
        <img src={web2} alt="img" />
        <h5 className="mt-3 text-white">HTML5</h5>
      </div>

    </Slider>
  )
}

//Testimonial section

export const TestimonialData = () => {

  const TestimonialData = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (

    <div>
      <Slider {...TestimonialData} className="testimonial-carousel">
        <div className="slide text-center">
          <Row>
            <Col xl={8} md={12} className="d-block mx-auto">
              <div className="testimonia">
                <p className="text-white-80">
                  <i className="fa fa-quote-left fs-20 text-white-80"></i>
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quod eos id
                  officiis hic tenetur quae quaerat
                  ad velit ab. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                  Dolore cum accusamus eveniet molestias
                  voluptatum inventore laboriosam
                  labore sit, aspernatur praesentium iste
                  impedit quidem dolor veniam.
                </p>
                <h3 className="title">Elizabeth</h3>
                <span className="post">Web Developer</span>
                <div className="rating-stars block my-rating-5 mb-3 d-flex justify-content-center"
                  data-rating="4"></div>
                <div className="owl-controls clickable">
                  <div className="owl-pagination">
                    <div className="owl-page active">
                      <span className=""></span>
                    </div>
                    <div className="owl-page ">
                      <span className=""></span>
                    </div>
                    <div className="owl-page">
                      <span className=""></span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="slide text-center">
          <Row>
            <Col xl={8} md={12} className="d-block mx-auto">
              <div className="testimonia">
                <p className="text-white-80"><i
                  className="fa fa-quote-left fs-20"></i> Nemo
                  enim ipsam
                  voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur,
                  adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore.
                </p>
                <div className="testimonia-data">
                  <h3 className="title">williamson</h3>
                  <span className="post">Web Developer</span>
                  <div className="rating-stars block my-rating-5 mb-3 d-flex justify-content-center"
                    data-rating="5"></div>
                  <div className="owl-controls clickable">
                    <div className="owl-pagination">
                      <div className="owl-page ">
                        <span className=""></span>
                      </div>
                      <div className="owl-page active">
                        <span className=""></span>
                      </div>
                      <div className="owl-page">
                        <span className=""></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="slide text-center">
          <Row>
            <Col xl={8} md={12} className="d-block mx-auto">
              <div className="testimonia">
                <p className="text-white-80"><i
                  className="fa fa-quote-left fs-20"></i> Duis
                  aute irure dolor
                  in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                  Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium
                  doloremque laudantium.</p>
                <div className="testimonia-data">
                  <h3 className="title">Sophie Carr</h3>
                  <span className="post">Web Developer</span>
                  <div className="rating-stars block my-rating-5 mb-3 d-flex justify-content-center"
                    data-rating="5"></div>
                  <div className="owl-controls clickable">
                    <div className="owl-pagination">
                      <div className="owl-page ">
                        <span className=""></span>
                      </div>
                      <div className="owl-page">
                        <span className=""></span>
                      </div>
                      <div className="owl-page active">
                        <span className=""></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Slider>
    </div>
  )
}




