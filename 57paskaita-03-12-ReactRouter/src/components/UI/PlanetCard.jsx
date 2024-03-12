import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const StyledSpan = styled.span`
	border: 1px solid lightgray;
	padding: 4px 5px;
	margin-left: 7px;
`;

export default function PlanetCard({ planet }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component='img'
				alt={planet.name}
				height='200'
				image={planet.picture}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{planet.name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{planet.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Typography variant='body2' color='text.secondary'>
					<StyledSpan>{planet.awayFromSun} from the sun</StyledSpan>
				</Typography>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
}
