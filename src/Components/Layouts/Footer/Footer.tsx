import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    {/* <!-- Footer opened --> */}
    <div className="main-footer">
      <div className="container-fluid pd-t-0 ht-100p">
        <span> Copyright © 2022 <Link to="#" className="text-primary">Valex</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#"> Spruko </Link> All rights reserved.</span>
      </div>
    </div>
    {/* <!-- Footer closed --> */}
  </div>
);


Footer.defaultProps = {};

export default Footer;
