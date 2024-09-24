import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error501.module.scss';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

const Error501 = () => (
	<div className={styles.Error501}>
		{/* <!-- container --> */}


		{/* <!-- row --> */}
		<Row>
			{/* <!-- Main-error-wrapper --> */}
			<div className="main-error-wrapper wrapper-1 page-h">
				<h1 className="">501<span className="tx-20">error</span></h1>
				<h2 className="">Oopps. The page you were looking for doesn't exist.</h2>
				<h6 className="">You may have mistyped the address or the page may have moved.</h6><Link className="btn btn-primary" to={`${import.meta.env.BASE_URL}indexpage`}>Back to Home</Link>
			</div>
			{/* <!-- /Main-error-wrapper --> */}

		</Row>
		{/* <!-- row closed --> */}

		{/* <!-- Container closed --> */}
	</div>
);

Error501.propTypes = {};

Error501.defaultProps = {};

export default Error501;
