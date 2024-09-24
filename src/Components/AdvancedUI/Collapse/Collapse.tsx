import React, { useState } from 'react';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Row, Col, Collapse, Card, Button } from 'react-bootstrap';

const Collapsible = () => {

  //BASIC EXAMPLE

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //MULTIPLE TARGETS

  let [isFirstCollapsed, setisFirstCollapsed] = useState(false);
  let [isSecondCollapsed, setisSecondCollapsed] = useState(false);


  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true)
    }
    else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false)
    }
  }

  let second = () => {

    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false)
    }
    else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true)
    }
  }

  let both = () => {
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false)
    }
    else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true)
    }
    if (isFirstCollapsed === true) {
      setisFirstCollapsed(false)
    }
    else if (isFirstCollapsed === false) {
      setisFirstCollapsed(true)
    }
  }

  return (

    <div>
      {/* <!-- container --> */}

      <Pageheader titles="Advanced ui" active="Collapse" />

      {/* <!-- row --> */}
      <Row>
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body className="card-body">
              <div>
                <Card.Title as='h6' className="mb-1">Basic Example</Card.Title>
                <p className="text-muted card-sub-title">Click the buttons below to show and hide another element via className changes</p>
              </div>
              <div>
                <Button className="ripple" variant='primary' onClick={handleExpandClick}>Toggle Content</Button>
                <Collapse in={expanded}>
                  <p className="mt-4">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <Card.Title as='h6' className="mb-1">Multiple Targets</Card.Title>
                <p className="text-muted card-sub-title">A button or link can show and hide multiple elements by referencing them with a react selector in its href or data-bs-target attribute.</p>
              </div>
              <div>
                <div className="btn-list">
                  <Button className="ripple mb-3 mb-xl-0 me-2" variant='primary' onClick={() => { first() }}>Toggle First Content</Button>
                  <Button className="ripple mb-3 mb-xl-0 me-2" variant='secondary' onClick={() => { second() }}>Toggle Second Content</Button>
                  <Button className="ripple mb-3 mb-xl-0 me-2" variant='success' onClick={() => { both() }}>Toggle Both Contents</Button>
                </div>
                <Row className="row-sm">
                  <Col>
                    <div className="multi-collapse">
                      {isFirstCollapsed ? (
                        <p className="mt-4">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </p>
                      ) : null}
                    </div>
                  </Col>
                  <Col>
                    <div className="multi-collapse">
                      {isSecondCollapsed ? (
                        <div className="mt-4">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      ) : null}
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
      {/* <!-- Container closed --> */}
    </div>
  )
}

export default Collapsible;
