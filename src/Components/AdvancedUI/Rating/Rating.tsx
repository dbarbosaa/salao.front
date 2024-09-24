import React, { useState } from 'react';
import Pageheader from '../../Layouts/Pageheader/Pageheader';
import { Card, Col, Row } from 'react-bootstrap';


//rating plugins
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircleIcon from '@mui/icons-material/Circle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarsIcon from '@mui/icons-material/Stars';
import StarIcon from '@mui/icons-material/Star';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

//Heart rating
const StyledRating = styled(Rating)(
	{ color: '#F1C40F' }
);

// Multi Star Rating

const StyledStarRating = styled(Rating)(
	{ color: '#E74C3C' }
);

// Multi Heart Rating
const StyledheartRating = styled(Rating)(
	{ color: '#E74C3C' }
);


const labels = {
	0.5: 'Useless',
	1: 'Useless+',
	1.5: 'Poor',
	2: 'Poor+',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+',
};

function getLabelText(value) {
	return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}





const Ratings = () => {

	//Execute callback when rating function
	const [data, setData] = useState<any>(3)

	let myAlert:any = (value:any) => {
		if (value != undefined) {
			alert(`Rating Stage is ${value}`)
		}
		setData(value)
	}


	const [value, setValue] = React.useState(2);
	const [hover, setHover] = React.useState(-1);
	return (

		<div >
			<Pageheader titles="Advanced ui" active="Rating" />

			{/* <!-- container --> */}

			{/* <!-- row --> */}
			<Row className="row-cards">
				<Col md={6} className="">
					<Card>
						<Card.Header className="">
							<Card.Title className="">
								Star Rating
							</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<div className="rating-stars block">
								<Box sx={{ '& > legend': { mt: 2 }, }}><Rating name="no-value" size="large" value={3} max={5} /></Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								Heart Rating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="rating-stars block">
								<Box sx={{ '& > legend': { mt: 2 }, }}>
									<StyledRating name="customized-color" defaultValue={2} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								Multi Star Rating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="rating-stars block">
								<Box sx={{ '& > legend': { mt: 2 }, }}><StyledStarRating name="no-value" size="large" value={3} max={8} /></Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								Multi Heart Rating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="rating-stars block">
								<Box sx={{ '& > legend': { mt: 2 }, }}>
									<StyledheartRating name="no-value" size="large" value={3} max={8} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								Multi circle Rating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="rating-stars block">
								<Box sx={{ '& > legend': { mt: 2 }, }}>
									<Rating name="no-value" size="large" value={3} max={8} icon={<CircleIcon fontSize="inherit" />} emptyIcon={<CircleIcon fontSize="inherit" />} />
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								Thumbs-up Rating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="rating-stars block">
								<Box sx={{ '& > legend': { mt: 2 }, }}>
									<Rating name="no-value" size="large" value={3} max={5} icon={<ThumbUpIcon fontSize="inherit" />} emptyIcon={<ThumbUpIcon fontSize="inherit" />} />
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<div className="row row-cards">
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								Basic Star Rating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Stack spacing={1} className="rating-stars block my-rating ratingcenter">
								<Rating name="half-rating" value={3} precision={0.5} size="large" icon={<StarRateIcon fontSize="inherit" />} emptyIcon={<StarRateIcon fontSize="inherit" />} />
							</Stack>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								Rounded star Rating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Stack spacing={1} className="rating-stars  block my-rating-4">
								<Rating name="half-rating" value={3} precision={0.5} size="large" icon={<StarsIcon fontSize="inherit" />} emptyIcon={<StarsIcon fontSize="inherit" />} />
							</Stack>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								gradients Rating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="rating-stars block my-rating-5">
								<Box sx={{ '& > legend': { mt: 2 }, }}><Rating name="no-value" size="large" value={3} max={5} /></Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								Execute callback when rating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="rating-stars block my-rating-6" >
								<Box sx={{ '& > legend': { mt: 2 }, }}><Rating name="no-value" size="large" value={data} max={5} onChange={(ele:any) => { myAlert(ele.target.value) }} onClick={() => { myAlert() }} /></Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								read only mode
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Stack spacing={1} className="rating-stars block my-rating-7">
								<Rating name="half-rating-read" value={3} max={5} size="large" readOnly />
							</Stack>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Header>
							<Card.Title>
								On hover event
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="rating-stars block my-rating-9">
								{/* <span className="live-rating"></span> */}
								<Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
									<Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
										onChange={(event, newValue:any) => {
											setValue(newValue);
										}}
										onChangeActive={(event, newHover) => {
											setHover(newHover);
										}}
									/>
									{value !== null && (<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>)}
								</Box>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</div>
			{/* <!-- row closed --> */}

			{/* <!-- Container closed --> */}
		</div>
	)
};



export default Ratings;
