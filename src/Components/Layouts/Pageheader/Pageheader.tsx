import React from 'react';
import { ButtonGroup, Dropdown, Button } from 'react-bootstrap';
import styles from './Pageheader.module.scss';

const Pageheader = (props) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className={styles.Pageheader}>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="my-auto">
          <div className="d-flex">
            <h4 className="content-title mb-0 my-auto">{props.titles}</h4><span className="text-muted mt-1 tx-13 ms-2 mb-0">/ {props.active}</span>
          </div>
        </div>
        <div className="d-sm-flex">
          {/* <div className="d-flex my-xl-auto right-content">
            <div className="pe-1 mb-xl-0">
              <Button variant='info' className="btn-icon me-2 btn-b"><i className="mdi mdi-filter-variant"></i></Button>
            </div>
            <div className="pe-1 mb-xl-0">
              <Button variant='danger' className="btn-icon me-2"><i className="mdi mdi-star"></i></Button>
            </div>
            <div className="pe-1 mb-xl-0">
              <Button variant='warning' className="btn-icon me-2"><i className="mdi mdi-refresh"></i></Button>
            </div>
          </div>  
         */}
        </div> 
      </div>
      {/* <!-- breadcrumb --> */}
    </div>
  )
};

Pageheader.defaultProps = {};

export default Pageheader;
