import React from 'react';
import styles from './Rightside.module.scss';
import { Link } from 'react-router-dom';
import { Nav, Tab } from 'react-bootstrap';
import { ModalData } from './Data/DataRightSide';
import Scrollbars from 'react-custom-scrollbars';

// user images

import faces12 from '../../../assets/img/users/12.jpg'
import faces1 from '../../../assets/img/users/1.jpg'
import faces2 from '../../../assets/img/users/2.jpg'
import faces8 from '../../../assets/img/users/8.jpg'
import faces11 from '../../../assets/img/users/11.jpg'
import faces6 from '../../../assets/img/users/6.jpg'
import faces9 from '../../../assets/img/users/9.jpg'
import faces10 from '../../../assets/img/users/10.jpg'
import faces13 from '../../../assets/img/users/13.jpg'
import faces4 from '../../../assets/img/users/4.jpg'
import faces15 from '../../../assets/img/users/15.jpg'
import faces14 from '../../../assets/img/users/14.jpg'
import faces7 from '../../../assets/img/users/7.jpg'



//rightsidebar
const RightSideClose = () => {
  document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");
}
const Rightside = () => (
  <div className={styles.Rightside}>
    {/* <!-- sidebar-right--> */}
    <div className="sidebar sidebar-right sidebar-animate">
      <div className="panel panel-primary card mb-0 box-shadow">
        <div className="tab-menu-heading border-0 p-3">
          <div className="card-title mb-0">Notifications</div>
          <div className="card-options ms-auto" >
            <Link to="#" className="sidebar-remove" onClick={() => RightSideClose()}><i className="fe fe-x"></i></Link>
          </div>
        </div>
        <div className='panel-body tabs-menu-body latest-tasks p-0 border-0'>
          <div className='tabs-menu '>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Friend">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="Chat"><i className='ion ion-md-chatboxes tx-18 me-2'></i>Chat</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Notification"><i className="ion ion-md-notifications tx-18 me-2"></i>Notifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Friend"><i className="ion ion-md-contacts tx-18 me-2"></i>Friends</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="Chat">
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-primary brround avatar-md">CH</span>
                    </div>
                    <Link className="wrapper w-100 ms-3" to="#" >
                      <p className="mb-0 d-flex ">
                        <b>New Websites is Created</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <small className="text-muted ms-auto">30 mins ago</small>
                          <p className="mb-0"></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-danger brround avatar-md">N</span>
                    </div>
                    <Link className="wrapper w-100 ms-3" to="#" >
                      <p className="mb-0 d-flex ">
                        <b>Prepare For the Next Project</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <small className="text-muted ms-auto">2 hours ago</small>
                          <p className="mb-0"></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-info brround avatar-md">S</span>
                    </div>
                    <Link className="wrapper w-100 ms-3" to="#" >
                      <p className="mb-0 d-flex ">
                        <b>Decide the live Discussion</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <small className="text-muted ms-auto">3 hours ago</small>
                          <p className="mb-0"></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-warning brround avatar-md">K</span>
                    </div>
                    <Link className="wrapper w-100 ms-3" to="#" >
                      <p className="mb-0 d-flex ">
                        <b>Meeting at 3:00 pm</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <small className="text-muted ms-auto">4 hours ago</small>
                          <p className="mb-0"></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-success brround avatar-md">R</span>
                    </div>
                    <Link className="wrapper w-100 ms-3" to="#" >
                      <p className="mb-0 d-flex ">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <small className="text-muted ms-auto">1 day ago</small>
                          <p className="mb-0"></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-pink brround avatar-md">MS</span>
                    </div>
                    <Link className="wrapper w-100 ms-3" to="#" >
                      <p className="mb-0 d-flex ">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <small className="text-muted ms-auto">1 day ago</small>
                          <p className="mb-0"></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-purple brround avatar-md">L</span>
                    </div>
                    <Link className="wrapper w-100 ms-3" to="#" >
                      <p className="mb-0 d-flex ">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <small className="text-muted ms-auto">45 minutes ago</small>
                          <p className="mb-0"></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="list d-flex align-items-center p-3">
                    <div className="">
                      <span className="avatar bg-blue brround avatar-md">U</span>
                    </div>
                    <Link className="wrapper w-100 ms-3" to="#" >
                      <p className="mb-0 d-flex ">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <small className="text-muted ms-auto">2 days ago</small>
                          <p className="mb-0"></p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Notification">
                  <div className="list-group list-group-flush ">
                    <div className="list-group-item d-flex  align-items-center">
                      <img className="avatar avatar-lg brround cover-image" alt='face-12' src={faces12} />
                      <span className="avatar-status bg-success notify-status"></span>
                      <div className="ms-3">
                        <strong>Madeleine</strong> Hey! there I' am available....
                        <div className="small text-muted">
                          3 hours ago
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div>
                        <img className="avatar avatar-lg brround cover-image" alt='face-1' src={faces1} />
                      </div>
                      <div className="ms-3">
                        <strong>Anthony</strong> New product Launching...
                        <div className="small text-muted">
                          5 hour ago
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">

                      <img className="avatar avatar-lg brround cover-image" alt='face-2' src={faces2} />
                      <span className="avatar-status bg-success notify-status"></span>

                      <div className="ms-3">
                        <strong>Olivia</strong> New Schedule Realease......
                        <div className="small text-muted">
                          45 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">

                      <img className="avatar avatar-lg brround cover-image" alt='face-8' src={faces8} />
                      <span className="avatar-status bg-success notify-status"></span>

                      <div className="ms-3">
                        <strong>Madeleine</strong> Hey! there I' am available....
                        <div className="small text-muted">
                          3 hours ago
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div>
                        <img className="avatar avatar-lg brround cover-image" alt='face-11' src={faces11} />
                      </div>
                      <div className="ms-3">
                        <strong>Anthony</strong> New product Launching...
                        <div className="small text-muted">
                          5 hour ago
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div>
                        <img className="avatar avatar-lg brround cover-image" alt='face-6' src={faces6} />
                        <span className="avatar-status bg-success notify-status"></span>
                      </div>
                      <div className="ms-3">
                        <strong>Olivia</strong> New Schedule Realease......
                        <div className="small text-muted">
                          45 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div>
                        <img className="avatar avatar-lg brround cover-image" alt='face-9' src={faces9} />
                        <span className="avatar-status bg-success notify-status"></span>
                      </div>
                      <div className="ms-3">
                        <strong>Olivia</strong> Hey! there I' am available....
                        <div className="small text-muted">
                          12 minutes ago
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Scrollbars style={{ height: '700px' }}>
                  <Tab.Pane eventKey="Friend">
                    <div className="list-group list-group-flush ">
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-9' src={faces9} />
                          <span className="avatar-status bg-success Friend-status"></span>
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Mozelle Belt</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-11' src={faces11} />
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Florinda Carasco</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-10' src={faces10} />
                          <span className="avatar-status bg-success Friend-status"></span>
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Alina Bernier</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-2' src={faces2} />
                          <span className="avatar-status bg-success Friend-status"></span>
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Zula Mclaughin</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-13' src={faces13} />
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Isidro Heide</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-12' src={faces12} />
                          <span className="avatar-status bg-success Friend-status"></span>
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Mozelle Belt</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-4' src={faces4} />
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Florinda Carasco</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-7' src={faces7} />
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Alina Bernier</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-2' src={faces2} />
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Zula Mclaughin</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-14' src={faces14} />
                          <span className="avatar-status bg-success Friend-status"></span>
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Isidro Heide</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-11' src={faces11} />
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Florinda Carasco</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-9' src={faces9} />
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Alina Bernier</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-15' src={faces15} />
                          <span className="avatar-status bg-success Friend-status"></span>
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Zula Mclaughin</div>
                        </div>
                        <ModalData />
                      </div>
                      <div className="list-group-item d-flex  align-items-center">
                        <div>
                          <img className="avatar avatar-md brround cover-image" alt='face-4' src={faces4} />
                        </div>
                        <div className="ms-2">
                          <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">Isidro Heide</div>
                        </div>
                        <ModalData />
                      </div>
                    </div>
                  </Tab.Pane>
                </Scrollbars>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
    {/* <!--/sidebar-right--> */}
  </div>
);





Rightside.defaultProps = {};

export default Rightside;
