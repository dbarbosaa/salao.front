import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Lightbox from "react-image-lightbox";
import { Link } from 'react-router-dom';

import photos1 from '../../assets/img/photos/1.jpg';
import photos2 from '../../assets/img/photos/2.jpg';
import photos3 from '../../assets/img/photos/3.jpg';
import photos4 from '../../assets/img/photos/4.jpg';
import photos5 from '../../assets/img/photos/5.jpg';
import photos6 from '../../assets/img/photos/6.jpg';
import photos7 from '../../assets/img/photos/7.jpg';
import photos8 from '../../assets/img/photos/8.jpg';
import photos9 from '../../assets/img/photos/9.jpg';
import photos10 from '../../assets/img/photos/10.jpg';
import photos11 from '../../assets/img/photos/11.jpg';
import photos12 from '../../assets/img/photos/12.jpg';


import media1 from '../../assets/img/media/1.jpg';
import media2 from '../../assets/img/media/2.jpg';
import media3 from '../../assets/img/media/3.jpg';
import media4 from '../../assets/img/media/4.jpg';
import media5 from '../../assets/img/media/5.jpg';
import media6 from '../../assets/img/media/6.jpg';
import media7 from '../../assets/img/media/7.jpg';
import media8 from '../../assets/img/media/8.jpg';



//Gallery Component****


const images = [photos1, photos2, photos3, photos4, photos5, photos6, photos7, photos8, photos9];


export class LightGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
    render() {
        const { photoIndex, isOpen }:any = this.state;
        return (
            <React.Fragment>
                <Row className="masonry mb-4">
                    <Col sm={6} lg={4}>
                        <img src={photos1} alt='media1' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col sm={6} lg={4}>
                        <img src={photos2} alt='media2' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col sm={6} lg={4}>
                        <img src={photos3} alt='media3' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col sm={6} lg={4}>
                        <img src={photos4} alt='media4' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col sm={6} lg={4}>
                        <img src={photos5} alt='media5' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col sm={6} lg={4}>
                        <img src={photos6} alt='media6' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                </Row>
                <Row className="masonry mb-4">
                    <Col sm={6} lg={4}>
                        <img src={photos7} alt='media7' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col sm={6} lg={4}>
                        <img src={photos8} alt='media8' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col sm={6} lg={4}>
                        <img src={photos9} alt='media9' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                </Row>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </React.Fragment>
        )
    }
}


//FIle-Manager Details Component



const mediaFile = [media1, media2, media3, media4, media5, media6, media7, media8];


export class RecentFiles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
    render() {
        const { photoIndex, isOpen }:any = this.state;
        return (
            <React.Fragment>
                <Row className="list-unstyled mb-0">
                    <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                        <img src={media1} alt='Thumb-1' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                        <img src={media2} alt='Thumb-2' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                        <img src={media3} alt='Thumb-3' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                        <img src={media4} alt='Thumb-4' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                        <img src={media5} alt='Thumb-5' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                        <img src={media6} alt='Thumb-6' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                        <img src={media7} alt='Thumb-7' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                    <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                        <img src={media8} alt='Thumb-8' onClick={() => this.setState({ isOpen: true })} />
                    </Col>
                </Row>
                {isOpen && (
                    <Lightbox
                        mainSrc={mediaFile[photoIndex]}
                        nextSrc={mediaFile[(photoIndex + 1) % mediaFile.length]}
                        prevSrc={mediaFile[(photoIndex + mediaFile.length - 1) % mediaFile.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + mediaFile.length - 1) % mediaFile.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % mediaFile.length
                            })
                        }
                    />
                )}
            </React.Fragment>
        )
    }
}


//Blog-Details Page


const images2 = [photos1, photos2, photos3, photos4, photos5, photos6, photos7, photos8, photos9];


export class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
    render() {
        const { photoIndex, isOpen }:any = this.state;
        return (
            <React.Fragment>
                <Row className="masonry">
                    <Col xl={4} lg={4} sm={6}>
                        <div className="brick">
                            <Link to='#'>
                                <img src={photos1} alt='Thumb-1' onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} sm={6}>
                        <div className="brick">
                            <Link to='#'>
                                <img src={photos2} alt='Thumb-2' onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} sm={6}>
                        <div className="brick">
                            <Link to='#'>
                                <img src={photos3} alt='Thumb-3' onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} sm={6}>
                        <div className="brick">
                            <Link to='#'>
                                <img src={photos4} alt='Thumb-4' onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} sm={6}>
                        <div className="brick">
                            <Link to='#'>
                                <img src={photos5} alt='Thumb-5' onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} sm={6}>
                        <div className="brick">
                            <Link to='#'>
                                <img src={photos6} alt='Thumb-6' onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} sm={6}>
                        <div className="brick">
                            <Link to='#'>
                                <img src={photos7} alt='Thumb-7' onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} sm={6}>
                        <div className="brick">
                            <Link to='#'>
                                <img src={photos8} alt='Thumb-8' onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4} sm={6}>
                        <div className="brick">
                            <Link to='#'>
                                <img src={photos9} alt='Thumb-8' onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                        </div>
                    </Col>
                </Row>
                {isOpen && (
                    <Lightbox
                        mainSrc={images2[photoIndex]}
                        nextSrc={images2[(photoIndex + 1) % images2.length]}
                        prevSrc={images2[(photoIndex + images2.length - 1) % images2.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images2.length - 1) % images2.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images2.length
                            })
                        }
                    />
                )}
            </React.Fragment>
        )
    }
}


// Profile Page Light-Gallery

const images3 = [photos1, photos2, photos3, photos4, photos5, photos6, photos7, photos8, photos9];

export class PagesGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
    render() {
        const { photoIndex, isOpen }:any = this.state;
        return (
            <React.Fragment>
                <Row className="masonry">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className="js-img-viewer"
                            >
                                <img src={photos1} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className="js-img-viewer"
                            >
                                <img src={photos2} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className="js-img-viewer"
                            >
                                <img src={photos3} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className="js-img-viewer"
                            >
                                <img src={photos4} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className="js-img-viewer"
                            >
                                <img src={photos5} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className=" js-img-viewer"
                            >
                                <img src={photos6} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className=" js-img-viewer"
                            >
                                <img src={photos7} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className=" js-img-viewer"
                            >
                                <img src={photos8} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className=" js-img-viewer"
                            >
                                <img src={photos9} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className=" js-img-viewer"
                            >
                                <img src={photos10} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className=" js-img-viewer"
                            >
                                <img src={photos11} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="brick card overflow-hidden">
                            <Link to="#" className=" js-img-viewer"
                            >
                                <img src={photos12} alt="" onClick={() => this.setState({ isOpen: true })} />
                            </Link>
                            <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                            <div className="ga-border"></div>
                            <p className="text-muted text-center"><small>Photography</small></p>
                        </div>
                    </div>

                </Row>
                {isOpen && (
                    <Lightbox
                        mainSrc={images3[photoIndex]}
                        nextSrc={images3[(photoIndex + 1) % images3.length]}
                        prevSrc={images3[(photoIndex + images3.length - 1) % images3.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images3.length - 1) % images3.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images3.length
                            })
                        }
                    />
                )}
            </React.Fragment>
        )
    }
}