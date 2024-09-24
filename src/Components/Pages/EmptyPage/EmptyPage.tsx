import React from 'react';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './EmptyPage.module.scss';

const EmptyPage = () => {
	return (
		<div className={styles.EmptyPage}>
			<Pageheader titles="Pages" active="Empty" />

		</div>
	)
};

EmptyPage.propTypes = {};

EmptyPage.defaultProps = {};

export default EmptyPage;
