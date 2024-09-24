import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './Notification.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Col, Card, Button } from 'react-bootstrap';



export const notifyFormikDanger = async (errors: any) => {
    const extractMessages = (obj: any): any[] => {
        let messages: any[] = [];
        
        Object.values(obj).forEach(value => {
            if (typeof value === 'object' && value !== null) {
                // Se o valor for um objeto, chamar a função recursivamente
                messages = messages.concat(extractMessages(value));
            } else {
                // Caso contrário, adicionar o valor (mensagem) à lista
                messages.push(value);
            }
        });

        return messages;
    };

    const messages = extractMessages(errors);

    // Verifica se há mensagens antes de iterar
    if (messages.length > 0) {
        messages.forEach((message) => {
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT,
                hideProgressBar: true,
                autoClose: 2000,
                theme: 'colored',
            });
        });
    }
};



export const successTostify = (message?: string) => {
	return (toast.success(
		<p className="text-white tx-16 mb-0">{message ? message : 'Salvo com sucesso'}</p>,
		{
			position: toast.POSITION.TOP_RIGHT,
			hideProgressBar: true,
			autoClose: 2000,
			theme: 'colored'
		}
	))
}



export const warningTostify = (message: string) => {
	return (toast.warning(
		<p className="text-white tx-16 mb-0">{message}</p>,
		{
			position: toast.POSITION.TOP_RIGHT,
			hideProgressBar: true,
			autoClose: 2000,
			theme: 'colored'
		}
	))
}

export const activeTostify = () => {
	return (toast.success(
		<p className="text-white tx-16 mb-0">Ativado com sucesso</p>,
		{
			position: toast.POSITION.TOP_RIGHT,
			hideProgressBar: true,
			autoClose: 2000,
			theme: 'colored'
		}
	))
}

export const disabledTostify = () => {
	return (toast.error(
		<p className="text-white tx-16 mb-0">Desabilitado com sucesso</p>,
		{
			position: toast.POSITION.TOP_RIGHT,
			hideProgressBar: true,
			autoClose: 5000,
			theme: 'colored'
		}
	))
}

export const errorTostify = (error: string) => {
	return (toast.error(
		<p className="text-white tx-16 mb-0">Ops! {error}</p>,
		{
			position: toast.POSITION.TOP_RIGHT,
			hideProgressBar: true,
			autoClose: 5000,
			theme: 'colored'
		}
	))
}


const Notification = () => {

	const DefaultTostify = () => {
		toast.success(
			<p className="text-white tx-16 mb-0">Sucesso: Cadastrado com sucesso</p>,
			{
				position: toast.POSITION.TOP_RIGHT,
				hideProgressBar: true,
				autoClose: 5000,
				theme: 'colored'
			}
		)
	}

	const CenterToastify = () =>
		toast.error(
			<p className="text-white tx-16 mb-0">Oops! An Error Occurred</p>,
			{
				position: toast.POSITION.TOP_CENTER,
				hideProgressBar: true,
				autoClose: 5000,
				theme: 'colored',

			}
		);
	const LeftNotifier = () =>
		toast.warn(
			<p className="text-white tx-16 mb-0">Warning: Something Went Wrong</p>,
			{
				position: toast.POSITION.TOP_LEFT,
				hideProgressBar: true,
				autoClose: 5000,
				theme: 'colored',
			}
		);

	const InfoTostifier = () =>
		toast.info(
			<p className="text-white tx-16 mb-0">Info: Some info here.</p>,
			{
				position: toast.POSITION.TOP_CENTER,
				hideProgressBar: true,
				autoClose: 5000,
				theme: 'colored',
			}
		);

	const DangerNotifier = () =>
		toast.error(
			<p className="text-white tx-16 mb-0">Error: This error will stay here until you click it.</p>,
			{
				position: toast.POSITION.TOP_CENTER,
				hideProgressBar: true,
				autoClose: 5000,
				theme: 'colored',
			}
		);

	const WarningNotifier = () =>
		toast.warn(
			<p className="text-white tx-16 mb-0">Opacity is cool!</p>,
			{
				position: toast.POSITION.TOP_CENTER,
				hideProgressBar: true,
				autoClose: 2000,
				theme: 'colored',
			}
		);

	let togleTost = (type) => {
		switch (type) {
			case "Primary":
				toast.success(
					<p className="text-white tx-16 mb-0">welcome To VALEX</p>,
					{
						position: toast.POSITION.TOP_RIGHT,
						hideProgressBar: true,
						autoClose: 2000,
						theme: 'colored'
					}
				);
				break;
			case "Success":
				toast.success(
					<p className="text-white tx-16 mb-0">Success: Well done Details Submitted Successfully</p>,
					{
						position: toast.POSITION.TOP_RIGHT,
						hideProgressBar: true,
						autoClose: 2000,
						theme: 'colored'
					}
				);
				break;
			case "Error":
				toast.error(
					<p className="text-white tx-16 mb-0">Oops! An Error Occurred</p>,
					{
						position: toast.POSITION.TOP_CENTER,
						hideProgressBar: true,
						autoClose: 2000,
						theme: 'colored',

					}
				);
				break;
			case "Warning":
				toast.warn(
					<p className="text-white tx-16 mb-0">Warning: Something Went Wrong</p>,
					{
						position: toast.POSITION.TOP_LEFT,
						hideProgressBar: true,
						autoClose: 2000,
						theme: 'colored',
					}
				);
				break;
			case "Info":
				toast.info(
					<p className="text-white tx-16 mb-0">Info: Some info here.</p>,
					{
						position: toast.POSITION.TOP_CENTER,
						hideProgressBar: true,
						autoClose: 2000,
						theme: 'colored',
					}
				);
				break;
			case "FixedError":
				toast.error(
					<p className="text-white tx-16 mb-0"><h3>Error!</h3>please check Your details ...file is missing</p>,
					{
						position: toast.POSITION.TOP_RIGHT,
						hideProgressBar: true,
						autoClose: 2000,
						theme: 'colored',
					}
				);
				break;
		}
	}


	return (
		<div className={styles.Notification}>
			<Pageheader titles="Apps" active="Notifications" />
			{/* <!-- container --> */}

			{/* <!-- row opened--> */}
			<Row>
				<Col md={12}>
					{/* <!-- div --> */}
					<Card className="mg-b-20">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Position Notification
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="example border-0 p-0">
								<div className="btn-list">
									<Button variant='light' className="mg-t-5 me-1" onClick={DefaultTostify}>Default</Button>
									<Button variant='light' className="mg-t-5 me-1" onClick={CenterToastify}>Center</Button>
									<Button variant='light' className="mg-t-5 me-1" onClick={LeftNotifier}>Left</Button>
									<Button variant='light' className="mg-t-5 me-1" onClick={InfoTostifier}>info</Button>
									<Button variant='light' className="mg-t-5 me-1" onClick={DangerNotifier}>Danger</Button>
									<Button variant='light' className="mg-t-5 me-1" onClick={WarningNotifier}>Warning</Button>
								</div>
							</div>
						</Card.Body>
					</Card>
					{/* <!-- div --> */}

					{/* <!-- div --> */}
					<Card className="mg-b-20">
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Notification Types
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
							<div className="example border-0 p-0">
								<div className="btn-list">
									<Button variant='primary' className="mg-t-5 me-1" onClick={() => { togleTost("Primary") }}>Default</Button>
									<Button variant='success' className="mg-t-5 me-1" onClick={() => { togleTost("Success") }}>Success</Button>
									<Button variant='danger' className="mg-t-5 me-1" onClick={() => { togleTost("Error") }}>Error</Button>
									<Button variant='warning' className="mg-t-5 me-1" onClick={() => { togleTost("Warning") }}>Warning</Button>
									<Button variant='info' className="mg-t-5 me-1" onClick={() => { togleTost("Info") }}>Info</Button>
									<Button variant='danger' className="mg-t-5 me-1" onClick={() => { togleTost("FixedError") }}>Fixed Error</Button>

									<ToastContainer />
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!--row closed--> */}
		</div>
	);
}

Notification.propTypes = {};

Notification.defaultProps = {};

export default Notification;
