import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import UsersContext from '../../contexts/UsersContext';
import EditIcon from '@mui/icons-material/Edit';

const StyledSection = styled.section`
	> img {
		height: 400px;
	}
	a {
		color: white;
		text-decoration: none;
	}
`;

const OnePlanetPage = () => {
	const { id } = useParams();
	const { loggedInUser } = useContext(UsersContext);
	const [planet, setPlanet] = useState({});

	useEffect(() => {
		fetch(`http://localhost:8080/planets/${id}`)
			.then(res => res.json())
			.then(data => setPlanet(data));
	}, []);

	return (
		<StyledSection>
			<h1>{planet.name}</h1>
			<img src={planet.picture} alt={planet.name} />
			<p>{planet.description}</p>
			<h2>Overview</h2>
			<p>{planet.overview}</p>
			{loggedInUser.role === 'moderator' && (
				<Button
					type='submit'
					variant='contained'
					color='primary'
					endIcon={<EditIcon />}
				>
					<Link to={'edit'}>Edit</Link>
				</Button>
			)}
		</StyledSection>
	);
};
export default OnePlanetPage;
