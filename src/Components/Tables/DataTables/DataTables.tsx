import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { BasicDataTable } from './basic';
import styles from './DataTables.module.scss';
import { DataTabless } from './deletedRow';
import { ExportCSV } from './fileExport';
import { ResponsiveDataTable } from './responsive';


const DataTables = () => {

	return (

		<div className={styles.DataTables}>
			<Pageheader titles="Tables" active="Data Tables" />
			{/* <!-- container --> */}

			{/* <!-- Row --> */}
			<Row className="row-sm">
				<Col lg={12} className="">
					<Card className="">
						<Card.Header>
							<Card.Title as='h3'>Basic Datatable</Card.Title>
						</Card.Header>
						<Card.Body>
							<BasicDataTable />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End Row --> */}

			{/* <!-- Row --> */}
			<Row className="row-sm">
				<Col lg={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Responsive DataTable</Card.Title>
						</Card.Header>
						<Card.Body>
							<ResponsiveDataTable />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End Row --> */}

			{/* <!-- Row --> */}
			<Row className="row-sm">
				<Col lg={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>File Export</Card.Title>
						</Card.Header>
						<Card.Body>
							<ExportCSV />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End Row --> */}

			{/* <!-- Row --> */}
			<Row className="row-sm">
				<Col lg={12}>
					<Card>
						<Card.Header>
							<Card.Title as='h3'>Deleted Row DataTable</Card.Title>
						</Card.Header>
						<Card.Body>
							<DataTabless />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End Row --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};

DataTables.propTypes = {};

DataTables.defaultProps = {};

export default DataTables;
