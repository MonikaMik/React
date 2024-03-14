import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlanetContext from '../../contexts/PlanetContext';
import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';

const StyledSpan = styled.span`
	border: 1px solid lightgray;
	padding: 4px 5px;
	margin-left: 7px;
`;

export default function PlanetCard({ planet }) {
	const { deletePlanet } = useContext(PlanetContext);
	const { loggedInUser } = useContext(UsersContext);

	return (
		<Card
			sx={{
				maxWidth: 345,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}
		>
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
			<CardActions
				sx={{
					justifyContent: 'space-between',
					width: '94%',
					padding: '0 16px 8px'
				}}
			>
				<Stack direction='row' spacing={1} alignItems='center'>
					<Typography variant='body2' color='text.secondary'>
						<StyledSpan>{planet.awayFromSun} from the sun</StyledSpan>
					</Typography>
					<Button size='small' component={Link} to={`/cards/${planet.id}`}>
						Learn More
					</Button>
				</Stack>
				{loggedInUser.role === 'moderator' && (
					<IconButton
						aria-label='delete'
						size='large'
						onClick={() => deletePlanet(planet.id)}
					>
						<DeleteIcon />
					</IconButton>
				)}
			</CardActions>
		</Card>
	);
}
