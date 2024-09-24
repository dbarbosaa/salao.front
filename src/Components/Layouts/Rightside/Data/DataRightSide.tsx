import React, { useState } from 'react'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// user images

import faces6 from '../../../../assets/img/users/6.jpg'
import faces9 from '../../../../assets/img/users/9.jpg'


export function ModalData() {
    const [Modalshow, setModalShow] = useState(false);

    const ChatClose = () => setModalShow(false);
    const ChatShow = () => setModalShow(true);


    const [VideoShow, setVideoCallShow] = useState(false);

    const RemoveVideo = () => setVideoCallShow(false);
    const ShowVideo = () => setVideoCallShow(true);


    const [Audioshow, setAudioShow] = useState(false);

    const RemoveAudio = () => setAudioShow(false);
    const ShowAudio = () => setAudioShow(true);

    return (
        <React.Fragment>
            {/* <!-- Message Modal --> */}
            <div className="ms-auto">
                <Button size='sm' variant='light' className="ms-auto" onClick={ChatShow}><i className="fab fa-facebook-messenger"></i></Button>
            </div>

            <Modal className="fade" show={Modalshow} onHide={ChatClose}>
                <div className="chatbox" role="document">
                    <div className="modal-content chat border-0">
                        <div className="card overflow-hidden mb-0 border-0">

                            {/* <!-- action-header --> */}

                            <Modal.Header className="action-header clearfix">
                                <div className="float-start hidden-xs d-flex ms-2">
                                    <div className="img_cont me-3">
                                        <img src={faces6} className="rounded-circle user_img" alt="img" />
                                    </div>
                                    <div className="align-items-center mt-2">
                                        <h4 className="text-white mb-0 fw-semibold">Daneil Scott</h4>
                                        <span className="dot-label bg-success"></span><span className="me-3 text-white">online</span>
                                    </div>
                                </div>
                                <ul className="ah-actions actions align-items-center ms-auto d-flex">
                                    <li className="call-icon">
                                        <Link to="#" className="d-done d-md-block phone-button" onClick={() => { ShowAudio(); ChatClose() }} >
                                            <i className="si si-phone"></i>
                                        </Link>
                                    </li>
                                    <li className="video-icon">
                                        <Link to="#" className="d-done d-md-block phone-button" onClick={() => { ShowVideo(); RemoveAudio(); ChatClose(); }}>
                                            <i className="si si-camrecorder"></i>
                                        </Link>
                                    </li>
                                    <Dropdown>
                                        <Dropdown.Toggle href="#">
                                            <i className="si si-options-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end">
                                            <Dropdown.Item><i className="fa fa-user-circle me-2"></i>View profile</Dropdown.Item>
                                            <Dropdown.Item><i className="fa fa-users me-2"></i>Add friends</Dropdown.Item>
                                            <Dropdown.Item><i className="fa fa-plus me-2"></i> Add to group</Dropdown.Item>
                                            <Dropdown.Item><i className="fa fa-ban me-2"></i> Block</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <li>
                                        <Link to="#" className="" onClick={ChatClose}>
                                            <span aria-hidden="true"><i className="si si-close text-white"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </Modal.Header>

                            {/* <!-- action-header end --> */}

                            {/* <!-- msg_card_body --> */}

                            <Modal.Body className="card-body msg_card_body">
                                <div className="chat-box-single-line">
                                    <abbr className="timestamp">February 1st, 2019</abbr>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <div className="img_cont_msg">
                                        <img src={faces6} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Hi, how are you Jenna Side?
                                        <span className="msg_time">8:40 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <div className="msg_cotainer_send">
                                        Hi Connor Paige i am good tnx how about you?
                                        <span className="msg_time_send">8:55 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src={faces9} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <div className="img_cont_msg">
                                        <img src={faces6} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        I am good too, thank you for your chat template
                                        <span className="msg_time">9:00 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end ">
                                    <div className="msg_cotainer_send">
                                        You welcome Connor Paige
                                        <span className="msg_time_send">9:05 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src={faces9} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <div className="img_cont_msg">
                                        <img src={faces6} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Yo, Can you update Views?
                                        <span className="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        But I must explain to you how all this mistaken  born and I will give
                                        <span className="msg_time_send">9:10 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src={faces9} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <div className="img_cont_msg">
                                        <img src={faces6} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Yo, Can you update Views?
                                        <span className="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        But I must explain to you how all this mistaken  born and I will give
                                        <span className="msg_time_send">9:10 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src={faces9} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start ">
                                    <div className="img_cont_msg">
                                        <img src={faces6} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Yo, Can you update Views?
                                        <span className="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        But I must explain to you how all this mistaken  born and I will give
                                        <span className="msg_time_send">9:10 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        <img src={faces9} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <div className="img_cont_msg">
                                        <img src={faces6} className="rounded-circle user_img_msg" alt="img" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Okay Bye, text you later..
                                        <span className="msg_time">9:12 AM, Today</span>
                                    </div>
                                </div>
                            </Modal.Body>

                            {/* <!-- msg_card_body end --> */}

                            {/* <!-- card-footer --> */}

                            <div className="card-footer">
                                <div className="msb-reply d-flex">
                                    <div className="input-group">
                                        <Form.Control type="text" placeholder="Typing...." />
                                        <div className="input-group-text bg-transparent border-0 p-0">
                                            <button type="button" className="btn btn-primary ">
                                                <i className="far fa-paper-plane" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- card-footer end --> */}

                        </div>
                    </div>
                </div>
            </Modal>

            {/* <!--Video Modal --> */}

            <Modal show={VideoShow} onHide={RemoveVideo} id="videomodal" className="modal fade">
                <div className="modal-dialog" role="document">
                    <div className="modal-content bg-dark border-0 text-white">
                        <Modal.Body className="mx-auto text-center p-7">
                            <h5>Valex Video call</h5>
                            <img src={faces6} className="rounded-circle user-img-circle h-8 w-8 mt-4 mb-3" alt="img" />
                            <h4 className="mb-1 fw-semibold">Daneil Scott</h4>
                            <h6>Calling...</h6>
                            <div className="mt-5">
                                <div className="row">
                                    <div className="col-4">
                                        <Link className="icon icon-shape rounded-circle mb-0 me-3" to="#">
                                            <i className="fas fa-video-slash"></i>
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <Link className="icon icon-shape rounded-circle text-white mb-0 me-3" to="#" onClick={RemoveVideo}>
                                            <i className="fas fa-phone bg-danger text-white"></i>
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <Link className="icon icon-shape rounded-circle mb-0 me-3" to="#">
                                            <i className="fas fa-microphone-slash"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>

                        {/* <!-- modal-body --> */}

                    </div>
                </div>

                {/* <!-- modal-dialog --> */}

            </Modal>

            {/* <!-- modal --> */}

            {/* <!-- Audio Modal --> */}

            <Modal show={Audioshow} onHide={RemoveAudio} id="audiomodal" className="modal fade">
                <div className="modal-dialog" role="document">
                    <div className="modal-content border-0">
                        <Modal.Body className="mx-auto text-center p-7">
                            <h5>Valex Voice call</h5>
                            <img src={faces6} className="rounded-circle user-img-circle h-8 w-8 mt-4 mb-3" alt="img" />
                            <h4 className="mb-1  fw-semibold">Daneil Scott</h4>
                            <h6>Calling...</h6>
                            <div className="mt-5">
                                <div className="row">
                                    <div className="col-4">
                                        <Link className="icon icon-shape rounded-circle mb-0 me-3" to="#">
                                            <i className="fas fa-volume-up bg-light text-dark"></i>
                                        </Link>
                                    </div>
                                    <div className="col-4">
                                        <a className="icon icon-shape rounded-circle text-white mb-0 me-3" href="#" onClick={RemoveAudio}>
                                            <i className="fas fa-phone text-white bg-success"></i>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a className="icon icon-shape  rounded-circle mb-0 me-3" href="#">
                                            <i className="fas fa-microphone-slash bg-light text-dark"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>

                        {/* <!-- modal-body --> */}

                    </div>
                </div>

                {/* <!-- modal-dialog --> */}

            </Modal>

            {/* <!-- modal --> */}

        </React.Fragment>
    )
}
