import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import './Line.scss';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import { Annotation, BasicChart, Dashedline, Stepline } from '../ChartFunction/apexchart';

const Line = () => (
  <div className="Line">
    <Pageheader titles="Charts" active="Line-Chart" />

    {/* <!-- container --> */}

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Basic Line chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicChart />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Step line Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <Stepline />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
    <Row>
      <Col xxl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Dashed line Chart with Gradient color</Card.Title>
          </Card.Header>
          <Card.Body>
            <Dashedline />
          </Card.Body>
        </Card>
      </Col>
      <Col xxl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line with Annotation Charts</Card.Title>
          </Card.Header>
          <Card.Body>
            <Annotation />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}
    {/* <!-- Container closed --> */}
  </div>
);

Line.propTypes = {};

Line.defaultProps = {};

export default Line;
