import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Cards.module.scss';

//images
import photos14 from '../../../assets/img/photos/14.jpg';
import photos12 from '../../../assets/img/photos/12.jpg';
import photos13 from '../../../assets/img/photos/13.jpg';
import photos1 from '../../../assets/img/photos/1.jpg';
import photos2 from '../../../assets/img/photos/2.jpg';
import photos11 from '../../../assets/img/photos/11.jpg';
import photos3 from '../../../assets/img/photos/3.jpg';
import photos5 from '../../../assets/img/photos/5.jpg';
import photos6 from '../../../assets/img/photos/6.jpg';
import photos4 from '../../../assets/img/photos/4.jpg';
import photos7 from '../../../assets/img/photos/7.jpg';
import photos8 from '../../../assets/img/photos/8.jpg';
import photos9 from '../../../assets/img/photos/9.jpg';


const Cards = () => {
  return (
    <div className={styles.Cards}>
      <Pageheader titles="Apps" active="Cards" />

      {/* <!-- container --> */}

      {/* <!-- row opened--> */}
      <Row>
        <Col sm={6} lg={6} xl={3} className="col-12">
          <Card>
            <Card.Header className="pb-0">
              <Card.Title as='h5' className="mb-0 pb-0">Card title</Card.Title>
            </Card.Header>
            <Card.Body>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </Card.Body>
            <Card.Footer>
              Card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} lg={6} xl={3} className="col-12">
          <Card className="card-primary">
            <Card.Header className="pb-0">
              <Card.Title as='h5' className="mb-0 pb-0">Card title</Card.Title>
            </Card.Header>
            <Card.Body className="text-primary">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </Card.Body>
            <Card.Footer>
              Card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} lg={6} xl={3} className="col-12">
          <Card className="card-secondary">
            <Card.Header className="pb-0">
              <Card.Title as='h5' className="mb-0 pb-0">Card title</Card.Title>
            </Card.Header>
            <Card.Body className="text-secondary">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </Card.Body>
            <Card.Footer>
              Card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} lg={6} xl={3} className="col-12">
          <Card className="card-success">
            <Card.Header className="pb-0">
              <Card.Title as='h5' className="mb-0 pb-0">Card title</Card.Title>
            </Card.Header>
            <Card.Body className="text-success">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </Card.Body>
            <Card.Footer>
              Card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} lg={6} xl={3} className="col-12">
          <Card className="card-warning">
            <Card.Header className="pb-0">
              <Card.Title as='h5' className="mb-0 pb-0">Card title</Card.Title>
            </Card.Header>
            <Card.Body className="text-warning">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </Card.Body>
            <Card.Footer>
              Card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} lg={6} xl={3} className="col-12">
          <Card className="card-info">
            <Card.Header className="pb-0">
              <Card.Title as='h5' className="mb-0 pb-0">Card title</Card.Title>
            </Card.Header>
            <Card.Body className="text-info">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </Card.Body>
            <Card.Footer>
              Card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} lg={6} xl={3} className="col-12">
          <Card className="card-purple">
            <Card.Header className="pb-0">
              <Card.Title as='h5' className="mb-0 pb-0">Card title</Card.Title>
            </Card.Header>
            <Card.Body className="text-purple">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </Card.Body>
            <Card.Footer>
              Card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} lg={6} xl={3} className="col-12">
          <Card className="card-danger">
            <Card.Header className="pb-0">
              <Card.Title as='h5' className="mb-0 pb-0">Card title</Card.Title>
            </Card.Header>
            <Card.Body className="text-danger">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            </Card.Body>
            <Card.Footer>
              Card footer
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* <!--row closed--> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col lg={12} xl={4} className="col-12">
          <Card>
            <Card.Body>
              <Card.Title as='h5'>Card title</Card.Title>
              <Card.Subtitle as='h6' className="mb-2 text-muted">Card subtitle</Card.Subtitle>
              <Card.Text as='p'>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</Card.Text>
              <Card.Link href="#" className="text-muted">Card link</Card.Link>
              <Card.Link href="#" className="text-muted">Another link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} xl={4} className="col-12">
          <Card>
            <Card.Body>
              <Card.Title as='h5'>Card title</Card.Title>
              <Card.Subtitle as='h6' className="mb-2 text-muted">Card subtitle</Card.Subtitle>
              <Card.Text as='p'>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</Card.Text>
              <Card.Link href="#" className="text-muted">Card link</Card.Link>
              <Card.Link href="#" className="text-muted">Another link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} xl={4} className="col-12">
          <Card className="bg-info">
            <Card.Body>
              <Card.Title as='h5' className="text-white">Card title</Card.Title>
              <Card.Subtitle as='h6' className="mb-2 text-white">Card subtitle</Card.Subtitle>
              <Card.Text as='p'>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</Card.Text>
              <Card.Link href="#" className="text-white">Card link</Card.Link>
              <Card.Link href="#" className="text-white">Another link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={4} md={12} xl={4} className="col-12">
          <Card>
            <Card.Body>
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={12} xl={4} className="col-12">
          <Card className="bg-orange">
            <Card.Body>
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={12} xl={4} className="col-12">
          <Card className="bg-danger text-white">
            <Card.Body>
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <div className="col-md">
          <Card.Body className="bg-success bd-0 my-2">
            <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</Card.Text>
          </Card.Body>
        </div>
        <div className="col-md mg-md-t-0">
          <Card.Body className="bg-secondary tx-white bd-0 my-2">
            <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</Card.Text>
          </Card.Body>
        </div>
        <div className="col-md mg-md-t-0">
          <Card.Body className="bg-primary tx-white bd-0 my-2">
            <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</Card.Text>
          </Card.Body>
        </div>
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm mt-4">
        <div className="col-md">
          <Card className="bg-gray-200 bd-0">
            <Card.Body>
              <Card.Title as='h5' className="tx-dark tx-medium mg-b-10">The Card Title</Card.Title>
              <Card.Subtitle as='p' className="mg-b-15">This is the card subtitle</Card.Subtitle>
              <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text><Card.Link href="#">Card link</Card.Link> <Card.Link href="#">Another link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md mg-md-t-0">
          <Card className="bg-secondary tx-white bd-0">
            <Card.Body>
              <Card.Title as='h5' className="tx-white tx-medium mg-b-10">The Card Title</Card.Title>
              <Card.Subtitle as='p' className="mg-b-15 tx-white-8">This is the card subtitle</Card.Subtitle>
              <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text><Card.Link className="tx-white-7 hover-white" href="#">Card link</Card.Link> <Card.Link className="tx-white-7 hover-white" href="#">Another link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md mg-md-t-0">
          <Card className="bg-secondary tx-white bd-0">
            <Card.Body>
              <Card.Title as='h5' className="tx-white tx-medium mg-b-10">The Card Title</Card.Title>
              <Card.Subtitle as='h6' className="tx-white-8 mg-b-15">This is the card subtitle</Card.Subtitle>
              <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text><Card.Link className="tx-white-7 hover-white" href="#">Card link</Card.Link> <Card.Link className="tx-white-7 hover-white" href="#">Another link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col md={4} lg={4}>
          <Card>
            <img alt="Image" className="img-fluid card-img-top" src={photos14} />
            <Card.Body className="">
              <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-4 --> */}
        <Col md={4} lg={4} className="mg-md-t-0">
          <Card>
            <img alt="Image" className="img-fluid card-img-top" src={photos12} />
            <Card.Body className="">
              <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-4 --> */}
        <Col md={4} lg={4} className="mg-md-t-0">
          <Card>
            <img alt="Image" className="img-fluid card-img-top" src={photos13} />
            <Card.Body className="">
              <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-4 --> */}
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col md={4} lg={4}>
          <Card>
            <Card.Body className="">
              <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body><img alt="Image" className="img-fluid card-img-bottom" src={photos1} /></Card>
        </Col>
        {/* <!-- col-4 --> */}
        <Col md={4} lg={4} className="mg-md-t-0">
          <Card>
            <Card.Body className="">
              <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body><img alt="Image" className="img-fluid card-img-bottom" src={photos2} /></Card>
        </Col>
        {/* <!-- col-4 --> */}
        <Col md={4} lg={4} className="mg-md-t-0">
          <Card>
            <Card.Body className="">
              <Card.Text as='p'>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body><img alt="Image" className="img-fluid card-img-bottom" src={photos11} /></Card>
        </Col>
        {/* <!-- col-4 --> */}
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <div className="col-lg-4">
          <Card className="overflow-hidden">
            <img alt="Image" className="img-fluid" src={photos3} />
            <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center">
              <p className="tx-white tx-medium mg-b-15">The Cat Prisoner</p>
              <p className="tx-white-7 tx-13">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              <p className="tx-13 mg-b-0"><a className="tx-white" href="">Read more</a></p>
            </div>
            {/* <!-- card-img-overlay --> */}
          </Card>
        </div>
        <div className="col-lg-4 mg mg-md-t-0">
          <Card className="overflow-hidden">
            <img alt="Image" className="card-img img-fluid" src={photos5} />
            <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center">
              <p className="tx-white tx-medium mg-b-15">The Ghost Town</p>
              <p className="tx-white-7 tx-13">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              <p className="tx-13 mg-b-0"><a className="tx-white" href="">Read more</a></p>
              {/* </div><!-- card-img-overlay --> */}
            </div>
          </Card>
        </div>  
        <div className="col-lg-4 mg-md-t-0">
          <Card className="overflow-hidden">
            <img alt="Image" className="card-img img-fluid" src={photos6} />
            <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center">
              <p className="tx-white tx-medium mg-b-15">The Green Leaves</p>
              <p className="tx-white-7 tx-13">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              <p className="tx-13 mg-b-0"><a className="tx-white" href="">Read more</a></p>
            </div>
            {/* <!-- card-img-overlay --> */}
          </Card>
        </div>  
        {/* <!-- /row closed --> */}

        {/* <!-- row opened --> */}
        <Row className="row-sm">
          <Col md={4}>
            <Card>
              <Card.Header className="tx-medium bd-0 tx-white bg-secondary">
                Description
              </Card.Header>
              <Card.Body className="">
                <p className="mg-b-0">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mg-md-t-0">
            <Card>
              <Card.Header className="tx-medium bd-0 tx-white bg-primary">
                Description
              </Card.Header>
              <Card.Body className="">
                <p className="mg-b-0">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mg-md-t-0">
            <Card>
              <Card.Header className="tx-medium bd-0 tx-white bg-gray-800">
                Description
              </Card.Header>
              <Card.Body className="">
                <p className="mg-b-0">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- /row closed --> */}

        {/* <!-- row opened --> */}
        <Row className="row-sm">
          <div className="col-md">
            <Card>
              <Card.Body>
                <p className="mg-b-0">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              </Card.Body>
              <Card.Footer className="bd-t">
                January, 20, 2017 4:30am
              </Card.Footer>
            </Card>
          </div>
          <div className="col-md mg-md-t-0">
            <Card>
              <Card.Body>
                <p className="mg-b-0">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              </Card.Body>
              <Card.Footer className="bd-t tx-center">
                <Link to="#">Read more</Link>
              </Card.Footer>
            </Card>
          </div>
          <div className="col-md mg-md-t-0">
            <Card>
              <Card.Body>
                <p className="mg-b-0">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur...</p>
              </Card.Body>
              <Card.Footer className="bd-t tx-right">
                Share <i className="icon ion-logo-facebook mg-l-5 mg-r-5"></i> <i className="icon ion-logo-twitter"></i>
              </Card.Footer>
            </Card>
          </div>
        </Row>
        {/* <!-- /row closed --> */}

        {/* <!-- row opened --> */}
        <Row className="row-sm">
          <div className="col-md">
            <Card.Body className="tx-white-8 bg-primary bd-0 mb-2">
              Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur.
            </Card.Body>
          </div>
          <div className="col-md  mg-md-t-0">
            <Card.Body className="tx-white-8 bg-secondary bd-0 mb-2">
              Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur.
            </Card.Body>
          </div>
          <div className="col-md mg-md-t-0">
            <Card.Body className="tx-white-8 bg-success bd-0">
              Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consictetur.
            </Card.Body>
          </div>
        </Row>
        {/* <!-- /row closed --> */}

        {/* <!-- row opened --> */}
        <Row className="row-sm mt-4">
          <Col sm={6}>
            <Card>
              <Card.Body>
                <Card.Title as='h5' className="mb-3">Special title treatment</Card.Title>
                <Card.Text as='p'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</Card.Text>
                <Link to="#" className="btn btn-primary">See more</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <Card.Body>
                <Card.Title as='h5' className="mb-3">Special title treatment</Card.Title>
                <Card.Text as='p'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</Card.Text>
                <Link to="#" className="btn btn-primary">See more</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- row closed --> */}

        {/* <!-- row opened --> */}
        <Row className="row-sm">
          <Col lg={4} md={12} sm={12} className="col-12">
            <Card>
              <img className="card-img-top" src={photos1} alt="Card image cap" />
              <Card.Body>
                <Card.Text as='p'>To take a trivial example, which of us ever undertakes laborious physical exercise.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="col-12">
            <Card>
              <img className="card-img-top" src={photos2} alt="Card image cap" />
              <Card.Body>
                <Card.Text as='p'> To take a trivial example, which of us ever undertakes laborious physical exercise.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} className="col-12">
            <Card>
              <img className="card-img-top" src={photos3} alt="Card image cap" />
              <Card.Body>
                <Card.Text as='p'> To take a trivial example, which of us ever undertakes laborious physical exercise.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- row closed --> */}

        {/* <!-- row opened --> */}
        <Row className="row-sm">
          <Col xl={4} lg={4} md={12}>
            <Card>
              <img className="card-img-top w-100" src={photos4} alt="" />
              <Card.Body>
                <Card.Title as='h5' className="mb-3">Card Title</Card.Title>
                <Card.Text as='p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Card.Text>
                <Link className="btn btn-primary" to="#">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={12}>
            <Card>
              <img className="card-img-top w-100" src={photos5} alt="" />
              <Card.Body>
                <Card.Title as='h5' className="mb-3">Card Title</Card.Title>
                <Card.Text as='p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Card.Text>
                <Link className="btn btn-primary" to="#">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={12}>
            <Card>
              <img className="card-img-top w-100" src={photos6} alt="" />
              <Card.Body>
                <Card.Title as='h5' className="mb-3">Card Title</Card.Title>
                <Card.Text as='p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Card.Text>
                <Link className="btn btn-primary" to="#">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- row closed --> */}

        {/* <!-- row opened --> */}
        <Row className="row-sm">
          <Col xl={4} lg={4} md={12}>
            <Card className="text-center">
              <img className="card-img-top w-100" src={photos7} alt="" />
              <Card.Body>
                <Card.Title as='h5' className="mb-3">Card Title</Card.Title>
                <Card.Text as='p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Card.Text>
                <Link className="btn btn-primary" to="#">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={12}>
            <Card className="text-center">
              <img className="card-img-top w-100" src={photos8} alt="" />
              <Card.Body>
                <Card.Title as='h5' className="mb-3">Card Title</Card.Title>
                <Card.Text as='p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Card.Text>
                <Link className="btn btn-primary" to="#">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={12}>
            <Card className="text-center">
              <img className="card-img-top w-100" src={photos9} alt="" />
              <Card.Body>
                <Card.Title as='h5' className="mb-3">Card Title</Card.Title>
                <Card.Text as='p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Card.Text>
                <Link className="btn btn-primary" to="#">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- row closed --> */}
      </Row>
      {/* <!-- Container closed --> */}
    </div>
  )
};

export default Cards;
