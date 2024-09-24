import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import styles from './RangeSlider.module.scss';
import Box from '@mui/material/Box';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";



const RangeSlider = () => {

	//Row 1
	const marks = [
		{
			value: 0,
			label: '10',
		},

		{
			value: 100,
			label: '100',
		},
	];

	function valuetext(value) {
		return `${value}`;
	}

	//Row 2
	const mark = [
		{
			value: 100,
			label: '100',
		},

		{
			value: 1000,
			label: '1000',
		},
	];

	function valuetext1(value) {
		return `${value}`;
	}

	//Row 3

	const Mark = [
		{
			value: 0,
			label: '$0',
		},
		{
			value: 250,
			label: '$250',
		},
		{
			value: 500,
			label: '$500',
		},
		{
			value: 750,
			label: '$750',
		},
		{
			value: 1000,
			label: '$1000',
		}
	];


	function valuetext4(value) {
		return `${value}°C`;
	};


	const [value, setValue] = React.useState([200, 800]);

	const handleChange = (event, newValue) => {
		setValue(newValue );
	};

	//Row 4

	const Marking = [
		{
			value: -1000,
			label: '-1000',
		},
		{
			value: -500,
			label: '-500',
		},
		{
			value: 0,
			label: '0',
		},
		{
			value: 500,
			label: '$750',
		},
		{
			value: 1000,
			label: '1000',
		}
	];

	function valuetext3(value) {
		return `${value}$`;
	}

	const [value1, setValue1] = React.useState([-750, 750]);

	const handleChange1 = (event, newValue) => {
		setValue1(newValue );
	};

	//Ios Range Slider
	// interface Props {
	// 	children: React.ReactElement;
	// 	value;
	// }

	const iOSBoxShadow =
		"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

	const marker = [
		{
			value: 0,
			label: '0',
		},
		{
			value: 100,
			label: '100',
		}
	];

	const IOSSlider = styled(Slider)(({ theme }) => ({
		color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
		height: 2,
		padding: "15px 0",
		"& .MuiSlider-thumb": {
			height: 28,
			width: 28,
			backgroundColor: "#fff",
			boxShadow: iOSBoxShadow,
			"&:focus, &:hover, &.Mui-active": {
				boxShadow:
					"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
				// Reset on touch devices, it doesn't add specificity
				"@media (hover: none)": {
					boxShadow: iOSBoxShadow
				}
			}
		},
		"& .MuiSlider-valueLabel": {
			fontSize: 12,
			fontWeight: "normal",
			top: -6,
			backgroundColor: "unset",
			color: theme.palette.text.primary,
			"&:before": {
				display: "none"
			},
			"& *": {
				background: "transparent",
				color: theme.palette.mode === "dark" ? "#fff" : "#000"
			}
		},
		"& .MuiSlider-mark": {
			backgroundColor: "#bfbfbf",
			height: 8,
			width: 1,
			"&.MuiSlider-markActive": {
				opacity: 1,
				backgroundColor: "currentColor"
			}
		}
	}));


	//Pretto Slider 

	// interface Props {
	// 	children: React.ReactElement;
	// 	value;
	// }

	const markey = [
		{
			value: 100,
			label: '100',
		},
		{
			value: 1000,
			label: '1000',
		}
	];

	const PrettoSlider = styled(Slider)({
		color: 'primary',
		height: 5,
		'& .MuiSlider-valueLabel': {
			lineHeight: 1.2,
			fontSize: 12,
			background: 'unset',
			padding: 0,
			width: 32,
			height: 32,
			borderRadius: '50% 50% 50% 0',
			backgroundColor: '#5389b8',
			transformOrigin: 'bottom left',
			transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
			'&:before': { display: 'none' },
			'&.MuiSlider-valueLabelOpen': {
				transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
			},
			'& > *': {
				transform: 'rotate(45deg)',
			},
		},
	});

	// Tooltip Value Label

	// interface Props {
	// 	children: React.ReactElement;
	// 	value;
	// }

	const Markee = [
		{
			value: 0,
			label: '$0',
		},
		{
			value: 250,
			label: '$250',
		},
		{
			value: 500,
			label: '$500',
		},
		{
			value: 750,
			label: '$750',
		},
		{
			value: 1000,
			label: '$1000',
		}
	];

	function ValueLabelComponent2(props) {
		const { children, value } = props;

		return (
			<Tooltip enterTouchDelay={0} placement="top" title={value}>
				{children}
			</Tooltip>
		);
	}


	//Price Set Slider

	const Markr = [
		{
		  value: -1000,
		  label: '-1000',
		},
		{
		  value: -500,
		  label: '-500',
		},
		{
		  value: 0,
		  label: '0',
		},
		{
		  value: 500,
		  label: '$750',
		},
		{
		  value: 1000,
		  label: '1000',
		}
	  ];
	  
	  const AirbnbSlider = styled(Slider)(({ theme }) => ({
		color: `$primary`,
		height: 3,
		padding: '13px 0',
		'& .MuiSlider-thumb': {
		  height: 27,
		  width: 27,
		  backgroundColor: '#fff',
		  border: '1px solid currentColor',
		  '&:hover': {
			boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
		  },
		  '& .airbnb-bar': {
			height: 9,
			width: 1,
			backgroundColor: 'currentColor',
			marginLeft: 1,
			marginRight: 1,
		  },
		},
		'& .MuiSlider-track': {
		  height: 3,
		},
		'& .MuiSlider-rail': {
		  color: theme.palette.mode === 'dark' ? '#5389b8' : '#d8d8d8',
		  opacity: theme.palette.mode === 'dark' ? undefined : 1,
		  height: 3,
		},
	  }));
	  
	//   interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }
	  
	  function AirbnbThumbComponent(props) {
		const { children, ...other } = props;
		return (
		  <SliderThumb {...other}>
			{children}
			<span className="airbnb-bar" />
			<span className="airbnb-bar" />
			<span className="airbnb-bar" />
		  </SliderThumb>
		);
	  }

	return (
		<div className={styles.RangeSlider}>
			<Pageheader titles="Apps" active="Rangeslider" />

			{/* <!-- container --> */}


			{/* <!-- Row --> */}
			<Row>
				<Col sm={12} md={12} lg={12}>

					{/* <!--div--> */}
					<Card className="mg-b-20">
						<Card.Body>

							<div className="main-content-label mg-b-5">
								Range Slider (Basic modern Skin)
							</div>
							<p className="mg-b-20">It is the basic modern skin range slider .</p>
							<Row className="row-sm">
								<Col lg={12}>
									<Box sx={{ width: "100%" }}>
										<Slider defaultValue={10} getAriaValueText={valuetext} step={1} valueLabelDisplay="on" marks={marks} />
									</Box>
								</Col>
								<Col lg={12} className="mg-t-20">

									<Box sx={{ width: "100%" }}>
										<Slider defaultValue={550} getAriaValueText={valuetext1} valueLabelDisplay="on" step={1} min={100} max={1000} marks={mark} />
									</Box>
								</Col>
							</Row>
							<Row className="row-sm">
								<Col lg={12} className="mg-t-20">
									<Box sx={{ width: "100%" }}>
										<Slider
											onChange={handleChange}
											valueLabelDisplay="on"
											getAriaValueText={valuetext4}
											value={value}
											min={0}
											max={1000}
											defaultValue={[200, 800]}
											marks={Mark}
										/>
									</Box>
								</Col>
								<Col lg={12} className="mg-t-20">
									<Box sx={{ width: "100%" }}>
										<Slider
											onChange={handleChange1}
											valueLabelDisplay="on"
											getAriaValueText={valuetext3}
											value={value1}
											min={-1000}
											max={1000}
											marks={Marking}
											defaultValue={[-500, 500]}
											step={250}
										/>
									</Box>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					{/* <!--/div--> */}

					{/* <!--div--> */}
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								React Range Slider (Customising)
							</div>
							<p className="mg-b-20">It is a functional range slider comes with customisable skins.</p>
							<Row className="row-sm">
								<Col lg={12}>
									<Box sx={{ width: "100%" }}>

										<IOSSlider
											// getAriaLabel="ios slider"
											defaultValue={10}
											marks={marker}
											valueLabelDisplay="on"
										/>
									</Box>
								</Col>
								<Col lg={12} className="mg-t-20">
									<PrettoSlider
										valueLabelDisplay="auto"
										// getAriaLabel="pretto slider"
										defaultValue={560}
										marks={markey}
										step={1}
										min={100}
										max={1000}
									/>
								</Col>
							</Row>
							<Row className="row-sm">
								<Col lg={12} className="mg-t-20">
									<Box sx={{ width: "100%" }}>
										<Slider
											valueLabelDisplay="auto"
											components={{
												ValueLabel: ValueLabelComponent2,
											}}
											step={250}
											defaultValue={[200, 800]}
											marks={Markee}
											getAriaValueText={valuetext4}
											min={0}
											max={1000}
										/>
									</Box>
								</Col>
							</Row>
							<Row className="row-sm">
								<Col lg={12} className="mg-t-20">
									<AirbnbSlider
										components={{ Thumb: AirbnbThumbComponent }}
										getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
										defaultValue={[-750, 250]}
										marks={Markr}
										valueLabelDisplay="on"
										min={-1000}
										max={1000}
										step={250}
									/>
								</Col>


							</Row>
						</Card.Body>
					</Card>
					{/* <!--/div--> */}

					{/* <!--div--> */}

					{/* <!--/div--> */}
				</Col>
			</Row>

		</div>
	)
};

RangeSlider.propTypes = {};

RangeSlider.defaultProps = {};

export default RangeSlider;
