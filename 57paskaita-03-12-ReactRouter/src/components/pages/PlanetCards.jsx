import { useContext } from 'react';
import PlanetContext from '../../contexts/PlanetContext';
import PlanetCard from '../UI/PlanetCard';
import * as React from 'react';
import { experimentalStyled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import UsersContext from '../../contexts/UsersContext';

const Item = experimentalStyled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary
}));
const CardsPageTitle = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const PlanetCards = () => {
	const { planets } = useContext(PlanetContext);
	const { loggedInUser } = useContext(UsersContext);
	const navigate = useNavigate();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<CardsPageTitle>
				<h1>Card Page</h1>
				{loggedInUser && (
					<Button
						variant='outlined'
						onClick={() => {
							navigate('add');
						}}
					>
						Add a planet
					</Button>
				)}
			</CardsPageTitle>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{planets.map((planet, i) => (
					<Grid item xs={2} sm={4} md={4} key={i}>
						<PlanetCard key={i} planet={planet} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
export default PlanetCards;
