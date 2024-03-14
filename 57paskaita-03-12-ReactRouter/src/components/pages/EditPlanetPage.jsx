import { useContext, useEffect } from 'react';
import PlanetContext from '../../contexts/PlanetContext';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import PlanetFormInputsContext from '../../contexts/PlanetFormInputsContext';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const EditPlanetPage = () => {
	const { id } = useParams();
	const { editPlanet } = useContext(PlanetContext);
	const { formInputs, onChangeF, clearForm, setFormInputs } = useContext(
		PlanetFormInputsContext
	);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:8080/planets/${id}`)
			.then(res => res.json())
			.then(data => {
				setFormInputs({
					id: id,
					name: data.name,
					awayFromSun: data.awayFromSun,
					description: data.description,
					overview: data.overview,
					picture: data.picture
				});
			});
	}, []);

	const formSubmit = e => {
		e.preventDefault();

		const editedPlanet = {
			id: id,
			name: formInputs.name,
			description: formInputs.description,
			overview: formInputs.overview,
			picture: formInputs.picture,
			awayFromSun: formInputs.awayFromSun
		};

		editPlanet(editedPlanet);
		clearForm();
		navigate(-1);
	};
	return (
		<section>
			<h1>Edit planet</h1>
			<Box
				component='form'
				sx={{
					width: '65ch',
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem'
				}}
				onSubmit={formSubmit}
			>
				<div style={{ display: 'flex', gap: '1rem' }}>
					<TextField
						id='name'
						name='name'
						value={formInputs.name}
						label='Planet name'
						variant='outlined'
						sx={{
							flex: 1
						}}
						onChange={onChangeF}
					/>

					<TextField
						type='number'
						id='awayFromSun'
						name='awayFromSun'
						value={formInputs.awayFromSun}
						label='Away from the sun'
						variant='outlined'
						sx={{
							flex: 1
						}}
						onChange={onChangeF}
					/>
				</div>
				<div>
					<TextField
						id='description'
						name='description'
						value={formInputs.description}
						multiline
						maxRows={10}
						label='Description'
						// defaultValue='something about the planet...'
						fullWidth
						onChange={onChangeF}
					/>
				</div>
				<div>
					<TextField
						id='overview'
						name='overview'
						value={formInputs.overview}
						multiline
						maxRows={50}
						label='Overview'
						fullWidth
						onChange={onChangeF}
					/>
				</div>
				<div>
					<TextField
						id='picture'
						name='picture'
						value={formInputs.picture}
						type='url'
						label='Picture'
						variant='outlined'
						fullWidth
						onChange={onChangeF}
					/>
				</div>
				<Stack direction='row' spacing={2} sx={{ placeSelf: 'end' }}>
					<Button
						color='secondary'
						variant='contained'
						onClick={() => {
							clearForm();
							navigate('/cards');
						}}
					>
						Cancel
					</Button>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						endIcon={<SendIcon />}
					>
						Submit
					</Button>
				</Stack>
			</Box>
		</section>
	);
};
export default EditPlanetPage;
