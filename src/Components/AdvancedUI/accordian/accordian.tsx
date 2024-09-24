import React from 'react';
import styles from './Accordian.module.scss';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row, Table, Accordion } from 'react-bootstrap';

//images

import user8 from '../../../assets/img/photos/8.jpg';
import user10 from '../../../assets/img/photos/10.jpg';
import user11 from '../../../assets/img/photos/11.jpg';
import user12 from '../../../assets/img/photos/12.jpg';


const Accordian = () => (
  <div className={styles.Accordian}>
    <Pageheader titles="Advanced UI" active="Accordion" items={['Icons']} />
    {/* <!-- container --> */}
    {/* <!-- row opened--> */}
    <Row>
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div>
              <Card.Title as='h6' className="mb-1">Basic Style Accordion</Card.Title>
              <p className="text-muted card-sub-title">The default collapse behavior to create an
                accordion.</p>
            </div>
            <Accordion className='accordion-dark' defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Making a Beautiful CSS3 Button Set</Accordion.Header>
                <Accordion.Body>
                  A concisely coded CSS3 button set increases usability across the board,
                  gives you a ton of options, and keeps all the code involved to an
                  absolute minimum. Anim pariatur cliche reprehenderit, enim eiusmod high
                  life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                  cupidatat skateboard dolor brunch.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Horizontal Navigation Menu Fold Animation</Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                  skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                  single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Creating CSS3 Button with Rounded Corners</Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                  skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                  single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* <!-- accordion --> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!--row closed--> */}

    {/* <!--row opened--> */}
    <Row>
      <Col lg={12} md={12}>
        <Card className="overflow-hidden">
          <Card.Header className="pb-0">
            <Card.Title as='h3'>Accordion Style01</Card.Title>
            <p className="text-muted card-sub-title mb-0">The default collapse behavior to create an
              accordion.</p>
          </Card.Header>
          <Card.Body>
            <Accordion className='mb-3'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Section 1</Accordion.Header>
                <Accordion.Body>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator
                    on the Internet. It uses a dictionary of over 200 Latin words </p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion >
              <Accordion.Item eventKey="1">
                <Accordion.Header>Section 2</Accordion.Header>
                <Accordion.Body>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator
                    on the Internet. It uses a dictionary of over 200 Latin words </p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row closed --> */}

    {/* <!-- row opened --> */}
    <Row>
      <Col xl={12}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Accordion Style02</Card.Title>
          </Card.Header>
          <Card.Body className="h-100">
            <Accordion defaultActiveKey="0" flush className='border'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordions with text</Accordion.Header>
                <Accordion.Body>
                  I must explain to you how all this mistaken idea of denouncing pleasure
                  and praising pain was born and I will give you a complete account of the
                  system, and expound the actual teachings of the great explorer of the
                  truth, the master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because those who
                  do not know how to pursue pleasure rationally encounter consequences
                  that are extremely painful
                  sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
                  harum quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                  minus id quod maxime placeat facere possimus, omnis voluptas assumenda
                  est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                  repudiandae sint et molestiae
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordions with images</Accordion.Header>
                <Accordion.Body>
                  <div className="border p-3">
                    <Row>
                      <Col lg={3} md={6}>
                        <img className="img-fluid rounded mb-2 mb-lg-0"
                          src={user8} alt="banner image" />
                      </Col>
                      <Col lg={3} md={6}>
                        <img className="img-fluid rounded mb-2 mb-lg-0"
                          src={user10} alt="banner image" />
                      </Col>
                      <Col lg={3} md={6}>
                        <img className="img-fluid rounded mb-2 mb-lg-0"
                          src={user11} alt="banner image" />
                      </Col>
                      <Col lg={3} md={6}>
                        <img className="img-fluid rounded mb-2 mb-lg-0"
                          src={user12} alt="banner image" />
                      </Col>
                    </Row>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Accordions with tables</Accordion.Header>
                <Accordion.Body>
                  <div className="border p-3 table-responsive">
                    <Table className="mb-0 table-bordered border-top mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row closed --> */}

    {/* <!-- row opened --> */}
    <Row>
      <Col lg={12} md={12} >
        <Card>
          <Card.Body>
            <div>
              <Card.Title as='h6' className="mb-1">Colored Style Accordion</Card.Title>
              <p className="text-muted card-sub-title">The default collapse behavior to create an
                accordion.</p>
            </div>

            {/* <!-- accordion --> */}


            <Accordion defaultActiveKey="0" flush className='border coloured-accordion'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Making a Beautiful CSS3 Button Set</Accordion.Header>
                <Accordion.Body>
                  A concisely coded CSS3 button set increases usability across the board,
                  gives you a ton of options, and keeps all the code involved to an
                  absolute minimum. Anim pariatur cliche reprehenderit, enim eiusmod high
                  life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                  cupidatat skateboard dolor brunch.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Horizontal Navigation Menu Fold Animation</Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                  skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                  single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Creating CSS3 Button with Rounded Corners</Accordion.Header>
                <Accordion.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                  skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                  single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </Row >
    {/* <!-- row closed --> */}

    {/* <!-- Container closed --> */}
  </div >
);

Accordian.propTypes = {};

Accordian.defaultProps = {};

export default Accordian;
