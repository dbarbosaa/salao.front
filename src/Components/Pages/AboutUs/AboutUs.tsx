import React from 'react';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './AboutUs.module.scss';

import aboutmain from '../../../assets/img/photos/21.jpg';
import team from '../../../assets/img/pngs/10.png';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { archivments, Team } from './Data/AboutData';

const AboutUs = () => {
  return (
    <div className={styles.AboutUs}>
      <Pageheader titles="Pages" active="About Us" />
      {/* <!-- container --> */}

      {/* <!-- row ---> */}
      <Container>
        <Row className="about-main mb-5">
          <Col lg={8} md={8} sm={12} className="text-center">
            <h1 className="mb-3 font-weight-semibold tx-46">Hello! This is <span className="text-primary tx-56">Valex.</span></h1>
            <p className="leading-normal lead-1">Majority have suffered alteration in some form.</p>
            <p className="leading-normal  tx-16">There are many variations of passages of Lorem Ipsum available, but the majority have suffered  by injected humour, or randomised words which don't look even slightly believable.
              If you are going to use a passage of Lorem Ipsum you are going to use a passage of Lorem Ipsum</p>
          </Col>
        </Row>
        <Row className="mb-5 rounded-5">
          <p><img src={aboutmain} className="rounded-5" alt="image" /></p>
        </Row>

        {/* <!-- ROW-3 OPEN --> */}
        <Row className="">
          <Col lg={12} className="">
            <Card className="mt-7">
              <Card.Body className="p-0 p-lg-5 text-dark">
                <div className="statistics-info p-4">
                  <Row>
                    <Col xl={6}>
                      <div className="">
                        <h2 className="fw-bold mb-4 text-dark">We Help to <span className="text-primary">Build</span> Your Dream Project.</h2>
                        <h5 className="leading-normal fw-normal mb-4 text-dark">majority have suffered alteration in some form, by injected humour</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <p> If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by
                          accident, sometimes on purpose (injected humour and the like).</p>
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="text-center">
                        <img src={team} alt="" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-3 CLOSED --> */}
        <Row className="">
          {archivments.map((idx) => (
            <Col key={Math.random()} xl={3} lg={6} md={6} className="">
              <Card className={`bg-${idx.Color}-transparent`}>
                <Card.Body className="">
                  <div className="counter-status md-mb-0">
                    <div className="text-center mb-1">
                      {idx.icon}
                    </div>
                    <div className="text-center">
                      <h2 className="counter mb-2">{idx.data}</h2>
                      <h6 className={`mb-0 text-${idx.Color}`} >{idx.description}</h6>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="">
          {Team.map((idx) => (
            <Col key={Math.random()} xl={3} lg={6} md={6} sm={12}>
              <Card className="p-3">
                <Card.Body>
                  <div className="mb-3 text-center about-team">
                    <img className="rounded-pill" src={idx.image} alt="image" />
                  </div>
                  <div className="tx-16 text-center font-weight-semibold">
                    {idx.name}
                  </div>
                  <div className="tx-14 text-center text-muted mb-3">
                    {idx.role}
                  </div>
                  <div className="text-center tx-14 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !</div>
                  <p className="text-center mb-0"><i className="fe fe-facebook text-primary me-3"></i><i className="fe fe-instagram text-success me-3"></i><i className="fe fe-globe text-info me-3"></i></p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* <!-- /row ---> */}

      {/* <!-- Container closed --> */}
    </div>
  )
};

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
