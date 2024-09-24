import React from 'react';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Setting } from './Data/SettingData';
import styles from './Settings.module.scss';

const Settings = () => {
  return (
    <div className={styles.Settings}>
      <Pageheader titles="Pages" active="Settings" />
      {/* <!-- container --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={4} xl={3}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Settings</Card.Title>
            </Card.Header>
            <Card.Body className="main-content-left main-content-left-mail pt-0 ">
              <div className="main-settings-menu">
                <Nav className="main-nav-column" activeKey="main">
                  <Nav.Item><Nav.Link className="thumb mb-2" eventKey="main"><i className="fe fe-home"></i> Main</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="thumb mb-2" eventKey="web"><i className="fe fe-grid"></i> Web Apps</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="thumb mb-2" eventKey="gen"><i className="fe fe-server"></i> General</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="thumb mb-2" eventKey="com"><i className="fe fe-globe"></i> Components</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="thumb mb-2" eventKey="pag"><i className="fe fe-layers"></i> Pages</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="thumb mb-2" eventKey="lan"><i className="fe fe-flag"></i> Language & Region</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className="thumb mb-2" eventKey="not"><i className="fe fe-bell"></i> Notifications</Nav.Link></Nav.Item>
                </Nav>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8} xl={9}>
          <Card className="custom-card">
            <Card.Header className="">
              <Card.Title>Overview</Card.Title>
              <p>Used to customize and manage all settngs about this Dashboard</p>
            </Card.Header>
          </Card>
          <Row>
            {Setting.map((idx) => (
              <Col key={Math.random()} lg={12} xl={6} md={12} sm={12} className="p-2">
                <Card>
                  <Card.Body>
                    <Row>
                      <Col lg={12}>
                        <div className="d-flex">
                          <div className="settings-main-icon me-4 mt-1">{idx.icon}</div>
                          <div>
                            <p className="tx-20 font-weight-semibold d-flex mb-0">{idx.title}</p>
                            <p className="tx-13 text-muted mb-0">{idx.description}</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer className="p-3">
                    <Link to="#" className="tx-14 mb-0">Go to Settings</Link>
                    <label className="form-switch float-end mb-0">
                      <Link to="#" className="tx-14 mb-0 me-2">Restore default</Link>
                      <input type="checkbox" name="form-switch-checkbox3" className="form-switch-input" />
                      <span className="form-switch-indicator custom-radius"></span>
                    </label>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {/* <!--/ row --> */}

      {/* <!-- Container closed --> */}
    </div>
  )
};

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
