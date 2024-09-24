import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import './Mixed.scss';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import { LineandAreaChart, LineColumn, LineColumnArea, MultipleSeries } from '../ChartFunction/apexchart';


const Mixed = () => (
  <div className="Mixed">
    <Pageheader titles="Charts" active="Mixed-Chart" />

    {/* <!-- container --> */}
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line and Column Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <LineColumn />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Multiple Y-axis Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <MultipleSeries />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    <Row>
      <Col xxl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line and area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <LineandAreaChart />
          </Card.Body>
        </Card>
      </Col>
      <Col xxl={6} md={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Line , Column and area Chart</Card.Title>
          </Card.Header>
          <Card.Body>
            <LineColumnArea />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- Container closed --> */}
  </div>
);

Mixed.propTypes = {};

Mixed.defaultProps = {};

export default Mixed;
