import { useEffect, useState } from 'react';
import { Row, Col, Card, ListGroup, Table, ProgressBar, Dropdown } from 'react-bootstrap';
import { AnualChart } from './Data/AnualChart';
import styles from './Indexpage.module.scss';

import IUsuarioAutenticacao from '../../Interfaces/IUsuarioAutenticacao';
import Storage from '../../utils/StorageUtils';

const Indexpage = () => {
	const User = async () => setUser(await Storage.getUser() || user);
	const [user, setUser] = useState<IUsuarioAutenticacao>({
		email: "",
		id: 0,
		perfil: "",
		ativo: true
	});

	useEffect(() => {
		User();
	}, []);

	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()?.toString());

	return (

		<div className={styles.Indexpage}>
			<div className="breadcrumb-header justify-content-between">
				<div className="left-content">
					<div>
						<h2 className="main-content-title tx-24 mg-b-1 mg-b-lg-1">Olá, {user?.email}</h2>
						<p className="mg-b-0">Seja muito bem vindo!</p>
					</div>
				</div>
				<div className="main-dashboard-header-right">
					<div>
						<label className="tx-13">Online</label>
						<h5>3</h5>
					</div>
					<div>
						<label className="tx-13">Offline</label>
						<h5>4</h5>
					</div>
				</div>
			</div>
			{/* <!-- breadcrumb --> */}

			{/* <!-- row --> */}
			<Row className="row-sm">
				<Col xl={3} lg={6} md={6} xm={12}>
					<Card className="overflow-hidden sales-card bg-primary-gradient">
						<div className="px-3 pt-3  pb-2 pt-0">
							<div className="">
								<h6 className="mb-3 tx-12 text-white">Clientes</h6>
							</div>
							<div className="pb-0 mt-0">
								<div className="d-flex">
									<div className="">
										<h4 className="tx-20 fw-bold mb-1 text-white">4</h4>
										<p className="mb-0 tx-12 text-white op-7">Total</p>
									</div>
								</div>
							</div>
						</div>

					</Card>
				</Col>
				<Col xl={3} lg={6} md={6} xm={12}>
					<Card className="overflow-hidden sales-card bg-warning-gradient">
						<div className="px-3 pt-3  pb-2 pt-0">
							<div className="">
								<h6 className="mb-3 tx-12 text-white">Agendamentos</h6>
							</div>
							<div className="pb-0 mt-0">
								<div className="d-flex">
									<div className="">
										<h4 className="tx-20 fw-bold mb-1 text-white">1</h4>
										<p className="mb-0 tx-12 text-white op-7">Total</p>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xl={3} lg={6} md={6} xm={12}>
					<Card className="overflow-hidden sales-card bg-success-gradient">
						<div className="px-3 pt-3  pb-2 pt-0">
							<div className="">
								<h6 className="mb-3 tx-12 text-white">Usuários</h6>
							</div>
							<div className="pb-0 mt-0">
								<div className="d-flex">
									<div className="">
										<h4 className="tx-20 fw-bold mb-1 text-white">2</h4>
										<p className="mb-0 tx-12 text-white op-7">Total</p>
									</div>
								</div>
							</div>
						</div>

					</Card>
				</Col>
				<Col xl={3} lg={6} md={6} xm={12}>
					<Card className="overflow-hidden sales-card bg-warning-gradient">
						<div className="px-3 pt-3  pb-2 pt-0">
							<div className="">
								<h6 className="mb-3 tx-12 text-white">Profissionais</h6>
							</div>
							<div className="pb-0 mt-0">
								<div className="d-flex">
									<div className="">
										<h4 className="tx-20 fw-bold mb-1 text-white">3</h4>
										<p className="mb-0 tx-12 text-white op-7">Total</p>
									</div>
								</div>
							</div>
						</div>

					</Card>
				</Col>
			</Row>
			{/* <!-- row closed --> */}

			{/* <!-- row opened --> */}
			<Row className="row-sm">
				<Col md={12} lg={12} xl={12}>
					<Card>
						<Card.Header className="bg-transparent pd-b-0 pd-t-20 bd-b-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="card-title mb-0">Anual</Card.Title>
								<select onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
									<option value="2024">2024</option>
									<option value="2025">2025</option>
									<option value="2026">2026</option>
									<option value="2027">2027</option>
								</select>
							</div>
						</Card.Header>
						<Card.Body className="b-p-apex">
							<AnualChart year={selectedYear} />
						</Card.Body>
					</Card>
				</Col>
			</Row>

			
			

			{/* <!-- /row --> */}
			{/* <!-- /Container --> */}
		</div>
	)
};

Indexpage.defaultProps = {};

export default Indexpage;
