import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Savetable } from './addNew';
import { BasicEditTable } from './basic';
import styles from './EditTables.module.scss';

const EditTables = () => {
  return (
    <div className={styles.EditTables}>
      <Pageheader titles="Tables" active="Edit Tables" />
      {/* <!-- container --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Basic Edit Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <BasicEditTable />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title as='h3'>Add New Row with Edit Table</Card.Title>
            </Card.Header>
            <Card.Body>
              <Savetable />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Container closed --> */}
    </div>
  )
};

EditTables.propTypes = {};

EditTables.defaultProps = {};

export default EditTables;
