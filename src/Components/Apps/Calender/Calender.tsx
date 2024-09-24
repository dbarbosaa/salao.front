import React from 'react';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { FullCalenderComponent } from './Data/CalenderFunction';


const Calender = () => {

	return (

		<div>
			<Pageheader titles="Apps" active="Calender" />

			{/* <!-- container --> */}

			<div className="pd-b-0  main-content-calendar pt-0">

				<FullCalenderComponent />

			</div>
			{/* <!-- Container closed --> */}
		</div>
	)
};

Calender.propTypes = {};

Calender.defaultProps = {};

export default Calender;











