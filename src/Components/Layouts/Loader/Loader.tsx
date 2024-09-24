import React from 'react';
import styles from './Loader.module.scss';

import LoaderImage from '../../../assets/img/svgicons/loader.svg';
const Loader = () => (

  <div className={styles.Loader}>

   	{/* <!-- Loader --> */}

	<div id="global-loader" className='text-center'>
		<img src={LoaderImage} className="loader-img" alt="Loader"/>
	</div>

	{/* <!-- /Loader --> */}

  </div>
);

Loader.defaultProps = {};

export default Loader;
