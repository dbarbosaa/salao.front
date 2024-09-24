import React from 'react';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../Layouts/Pageheader/Pageheader';
import styles from './FileAttachments.module.scss';

//Image
import media1 from '../../../../assets/img/media/1.jpg';
import media2 from '../../../../assets/img/media/2.jpg';
import media3 from '../../../../assets/img/media/3.jpg';
import media4 from '../../../../assets/img/media/4.jpg';
import image from '../../../../assets/img/files/5.png';
import doc from '../../../../assets/img/files/1.png';
import file2 from '../../../../assets/img/files/3.png';
import file from '../../../../assets/img/files/2.png';
import climate from '../../../../assets/img/media/11.jpg';


const FileAttachments = () => {
    return (
        <div className={styles.FileAttachments}>
            <Pageheader titles="Filemanager" active="File-Attachments" />

            {/* <!-- container --> */}


            {/* <!-- Row --> */}
            <Row className="sidemenu-height">
                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment tags</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">

                                <span className="tag tag-attachments rounded-pill bg-primary text-white mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> <span className="">Image01..._jpg </span><Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill bg-info text-white"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill bg-danger text-white"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill bg-success text-white"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill bg-danger text-white"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill bg-primary text-white"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill bg-info text-white"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill bg-warning text-white text-white"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill bg-pink text-white"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment tags</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">
                                <span className="tag tag-attachments rounded-pill tag-outline-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> Image01..._jpg <Link to="#" className="mt-1 ms-4 text-primary"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill tag-outline-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-info"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-danger"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill tag-outline-success"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <Link to="#" className="mt-1 ms-4 text-success"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <Link to="#" className="mt-1 ms-4 text-danger"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill tag-outline-primary"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <Link to="#" className="mt-1 ms-4 text-primary"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill tag-outline-info"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <Link to="#" className="mt-1 ms-4 text-info"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill tag-outline-warning"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <Link to="#" className="mt-1 ms-4 text-warning"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments rounded-pill tag-outline-pink"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <Link to="#" className="mt-1 ms-4 text-pink"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment tags</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">
                                <span className="tag tag-attachments bg-primary text-white mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> Image01..._jpg <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments bg-info text-white"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments bg-danger text-white"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments bg-success text-white"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments bg-danger text-white"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments bg-primary text-white"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments bg-info text-white"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments bg-warning text-white text-white"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments bg-pink text-white"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment tags</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">
                                <span className="tag tag-attachments tag-outline-primary mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-24"></i></span> Image01..._jpg <Link to="#" className="mt-1 ms-4 text-primary"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments tag-outline-info"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-info"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments  tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-danger"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments  tag-outline-success"><span className="me-2"><i className="mdi mdi-file-excel tx-24"></i></span> Document.exl <Link to="#" className="mt-1 ms-4 text-success"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments  tag-outline-danger"><span className="me-2"><i className="mdi mdi-file-pdf tx-24"></i></span>AMN0012.pdf <Link to="#" className="mt-1 ms-4 text-danger"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments   tag-outline-primary"><span className="me-2"><i className="mdi mdi-zip-box tx-24"></i></span> design00123.zip <Link to="#" className="mt-1 ms-4 text-primary"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments   tag-outline-info"><span className="me-2"><i className="mdi mdi-file-word tx-24"></i></span>Document.doc <Link to="#" className="mt-1 ms-4 text-info"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments   tag-outline-warning"><span className="me-2"><i className="mdi mdi-file-powerpoint  tx-24"></i></span> prsentation.ppt <Link to="#" className="mt-1 ms-4 text-warning"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments   tag-outline-pink"><span className="me-2"><i className="mdi mdi-volume-high tx-24"></i></span>audio-mp4 <Link to="#" className="mt-1 ms-4 text-pink"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment sizes</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">
                                <span className="tag tag-attachments-sm rounded-pill bg-primary text-white mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments  rounded-pill bg-info text-white"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments-lg rounded-pill bg-danger text-white"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment sizes</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">
                                <span className="tag tag-attachments-sm rounded-pill tag-outline-warning mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <Link to="#" className="mt-1 ms-4 text-warning"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments  rounded-pill tag-outline-success"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-success"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments-lg rounded-pill tag-outline-pink"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-pink"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment sizes</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">
                                <span className="tag tag-attachments-sm  bg-primary text-white mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments   bg-info text-white"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments-lg  bg-danger text-white"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment sizes</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">
                                <span className="tag tag-attachments-sm  tag-outline-warning mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <Link to="#" className="mt-1 ms-4 text-warning"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments   tag-outline-success"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-success"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments-lg  tag-outline-pink"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-pink"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment sizes</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">
                                <span className="tag tag-attachments-sm  bg-primary text-white mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments   bg-info text-white"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments-lg  bg-danger text-white"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-white"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-1">file-attachment sizes</h6>
                                <Card.Subtitle as='p' className="mg-b-20 text-muted">Predefined button styles, each serving its own semantic purpose.</Card.Subtitle>
                            </div>
                            <div className="tags">
                                <span className="tag tag-attachments-sm  tag-outline-warning mt-0"><span className="me-2"><i className="mdi mdi-file-image tx-20"></i></span> Image01..._jpg <Link to="#" className="mt-1 ms-4 text-warning"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments   tag-outline-success"><span className="me-2"><i className="mdi mdi-music tx-24"></i></span>music-mp3 <Link to="#" className="mt-1 ms-4 text-success"><i className="fe fe-x"></i></ Link></span>

                                <span className="tag tag-attachments-lg  tag-outline-pink"><span className="me-2"><i className="mdi mdi-file-video tx-24"></i></span>video0014...-mp4 <Link to="#" className="mt-1 ms-4 text-pink"><i className="fe fe-x"></i></ Link></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={3} lg={6} sm={12}>
                    <div className="card custom-card">
                        <div className="card-body">
                            <div>
                                <Card.Subtitle as='h6' className="main-content-label mb-4">Image-attachment</Card.Subtitle>
                                <Card.Subtitle as='p' className="text-muted"></Card.Subtitle>
                            </div>
                            <div className="h-100  attached-file-grid6">
                                <div className="pro-img-box attached-file-image">
                                    <Link to="#">
                                        <img className=" pic-1 pos-relative rounded-5" src={media1} alt="attached-file-image" /><span className="image-pic">123image.jpg</span>
                                    </ Link>
                                    <ul className="icons">
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>share</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={3} lg={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-4">Image-attachment</h6>
                                <Card.Subtitle as='p' className="text-muted"></Card.Subtitle>
                            </div>
                            <div className="h-100  attached-file-grid6">
                                <div className="pro-img-box attached-file-image">
                                    <Link to="#">
                                        <img className=" pic-1 pos-relative rounded-5" src={media2} alt="attached-file-image" /><span className="image-pic">123image.jpg</span>
                                    </ Link>
                                    <ul className="icons">
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>share</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-4">Image-attachment</h6>
                                <Card.Subtitle as='p' className="text-muted"></Card.Subtitle>
                            </div>
                            <div className="h-100  attached-file-grid6">
                                <div className="pro-img-box attached-file-image">
                                    <Link to="#">
                                        <img className=" pic-1 pos-relative rounded-5" src={media3} alt="attached-file-image" /><span className="image-pic">123image.jpg</span>
                                    </ Link>
                                    <ul className="icons">
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>share</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <h6 className="main-content-label mb-4">Image-attachment</h6>
                                <Card.Subtitle as='p' className="text-muted"></Card.Subtitle>
                            </div>
                            <div className="h-100  attached-file-grid6">
                                <div className="pro-img-box attached-file-image">
                                    <Link to="#">
                                        <img className=" pic-1 pos-relative rounded-5" src={media4} alt="attached-file-image" /><span className="image-pic">123image.jpg</span>
                                    </ Link>
                                    <ul className="icons">
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                        <li className="me-1"><OverlayTrigger placement="top" overlay={<Tooltip>share</Tooltip>}><i className="bi bi-alarm"></i></OverlayTrigger></li>
                                    </ul>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <!-- ROW-4 OPEN --> */}
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h3'>Image File_Attachment Small Size</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap pb-3">
                                <div className="file-image-1">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}>
                                            <img src={image} className="rounded-5" alt="" />
                                        </ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Image01.jpg</span>
                                </div>
                                <div className="file-image-1">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img src={doc} alt="" /></ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Word.doc</span>
                                </div>
                                <div className="file-image-1">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img src={file2} alt="" /></ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Excel.xls</span>
                                </div>
                                <div className="file-image-1">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img src={file} alt="" /></ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Document.pdf</span>
                                </div>
                                <div className="file-image-1">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}>
                                            <img src={climate} className="rounded-5" alt="" />
                                        </ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Image02.jpg</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- ROW-4 CLOSED --> */}

            {/* <!-- ROW-5 OPEN --> */}
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h3'>Image File_Attachment Medium Size</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap pb-3">
                                <div className="file-image-1 file-image-md">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}>
                                            <img src={image} className="rounded-5" alt="" />
                                        </ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Image01.jpg</span>
                                </div>
                                <div className="file-image-1 file-image-md">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img src={doc} alt="" /></ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Word.doc</span>
                                </div>
                                <div className="file-image-1 file-image-md">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img src={file2} alt="" /></ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Excel.xls</span>
                                </div>
                                <div className="file-image-1 file-image-md">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img src={file} alt="" /></ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Document.pdf</span>
                                </div>
                                <div className="file-image-1 file-image-md">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}>
                                            <img src={climate} className="rounded-5" alt="" />
                                        </ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Image02.jpg</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- ROW-5 CLOSED --> */}

            {/* <!-- ROW-6 OPEN --> */}
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h3'>Image File_Attachment Large Size</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-wrap pb-3">
                                <div className="file-image-1 file-image-lg">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}>
                                            <img src={image} className="rounded-5" alt="" />
                                        </ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Image01.jpg</span>
                                </div>
                                <div className="file-image-1 file-image-lg">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img src={doc} alt="" /></ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Word.doc</span>
                                </div>
                                <div className="file-image-1 file-image-lg">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img src={file2} alt="" /></ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Excel.xls</span>
                                </div>
                                <div className="file-image-1 file-image-lg">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}><img src={file} alt="" /></ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Document.pdf</span>
                                </div>
                                <div className="file-image-1 file-image-lg">
                                    <div className="product-image">
                                        <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`}>
                                            <img src={climate} className="rounded-5" alt="" />
                                        </ Link>
                                        <ul className="icons">
                                            <li><Link to="#" className="btn bg-danger"><i className="fe fe-trash"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-pink"><i className="fe fe-download"></i></ Link></li>
                                            <li><Link to="#" className="btn bg-primary"><i className="fe fe-eye"></i></ Link></li>
                                        </ul>
                                    </div>
                                    <span className="file-name-1">Image02.jpg</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End Row --> */}

            {/* <!-- Container closed --> */}
        </div>
    )
};

FileAttachments.propTypes = {};

FileAttachments.defaultProps = {};

export default FileAttachments;
