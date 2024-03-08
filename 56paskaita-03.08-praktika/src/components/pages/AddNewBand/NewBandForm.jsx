import { v4 as uuid } from 'uuid';
import FormInputContext, {
	inputActionTypes
} from '../../../contexts/FormInputContext';
import BandContext from '../../../contexts/BandContext';
import { useContext } from 'react';
import styled from 'styled-components';
import PageLoaderContext from '../../../contexts/PageLoaderContext';

const StyledBandFormSection = styled.section`
	text-align: center;
	display: flex;
	justify-content: center;
	p {
		color: white;
		font-size: 2rem;
		margin-bottom: 0;
	}
`;

const NewBandForm = () => {
	const { formInputs, handleChange, formDispatch } =
		useContext(FormInputContext);
	const { addBand } = useContext(BandContext);
	const { setPageLoader } = useContext(PageLoaderContext);

	const formSubmit = e => {
		e.preventDefault();

		const newBandData = {
			id: uuid(),
			name: formInputs.name,
			picture: formInputs.picture,
			members: formInputs.members.split(', '),
			genre: formInputs.genre,
			liked: formInputs.liked === 'like',
			formed: Number(formInputs.formed)
		};
		addBand(newBandData);
		formDispatch({ type: inputActionTypes.CLEAR_FORM });
		setPageLoader('cards');
	};

	return (
		<StyledBandFormSection>
			<div className='bandForm'>
				<p>
					<i className='fa-regular fa-square-plus'></i>ADD A NEW BAND
				</p>
				<form onSubmit={e => formSubmit(e)}>
					<input
						type='text'
						name='name'
						id='name'
						placeholder="band's name..."
						value={formInputs.name}
						onChange={handleChange}
						required
					/>
					<input
						type='url'
						name='picture'
						id='picture'
						placeholder="band's picture..."
						value={formInputs.picture}
						onChange={handleChange}
						required
					/>
					<textarea
						name='members'
						id='members'
						placeholder='members names separated by a comma...'
						value={formInputs.members}
						onChange={handleChange}
						required
					/>
					<div>
						<input
							type='radio'
							name='liked'
							id='liked'
							value='like'
							checked={formInputs.liked === 'like'}
							onChange={handleChange}
						/>
						<label htmlFor='liked'>Like</label>
						<input
							type='radio'
							name='liked'
							id='disliked'
							value='dislike'
							checked={formInputs.liked === 'dislike'}
							onChange={handleChange}
						/>
						<label htmlFor='disliked'>Dislike</label>
					</div>
					<input
						type='text'
						name='genre'
						id='genre'
						placeholder="band's genre..."
						value={formInputs.genre}
						onChange={handleChange}
						required
					/>
					<input
						type='number'
						name='formed'
						id='formed'
						placeholder='year the band was formed...'
						value={formInputs.formed}
						onChange={handleChange}
						required
					/>
					<input type='submit' value='ADD BAND' />
				</form>
			</div>
		</StyledBandFormSection>
	);
};

export default NewBandForm;
