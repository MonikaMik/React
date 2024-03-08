import { useContext } from 'react';
import BandContext from '../../../contexts/BandContext';
import EditFormContext, {
	inputActionTypes
} from '../../../contexts/EditFormContext';

const EditBandForm = ({ hideForm }) => {
	const { editBand } = useContext(BandContext);
	const { formInputs, handleChange, editFormDispatch } =
		useContext(EditFormContext);

	const formSubmit = e => {
		e.preventDefault();

		const editedBandData = {
			id: formInputs.id,
			name: formInputs.name,
			picture: formInputs.picture,
			members: formInputs.members.split(', '),
			genre: formInputs.genre,
			liked: formInputs.liked === 'like',
			formed: Number(formInputs.formed)
		};

		editBand(editedBandData);
		editFormDispatch({ type: inputActionTypes.CLEAR_FORM });
		hideForm();
	};

	return (
		<section id='editBandForm' className='bandForm'>
			<h1>Edit Band</h1>
			<form onSubmit={e => formSubmit(e)}>
				<input
					type='text'
					name='name'
					placeholder="band's name..."
					value={formInputs.name}
					onChange={handleChange}
					required
				/>
				<input
					type='url'
					name='picture'
					placeholder="band's picture..."
					value={formInputs.picture}
					onChange={handleChange}
					required
				/>
				<textarea
					name='members'
					placeholder='members names separated by a comma...'
					value={formInputs.members}
					onChange={handleChange}
					required
				/>
				<div>
					<input
						type='radio'
						name='liked'
						value='like'
						id='registerliked'
						checked={formInputs.liked === 'like'}
						onChange={handleChange}
					/>
					<label htmlFor='registerliked'>Like</label>
					<input
						type='radio'
						name='liked'
						value='dislike'
						id='registerdisliked'
						checked={formInputs.liked === 'dislike'}
						onChange={handleChange}
					/>
					<label htmlFor='registerdisliked'>Dislike</label>
				</div>
				<input
					type='text'
					name='genre'
					placeholder="band's genre..."
					value={formInputs.genre}
					onChange={handleChange}
					required
				/>
				<input
					type='number'
					name='formed'
					placeholder='year the band was formed...'
					value={formInputs.formed}
					onChange={handleChange}
					required
				/>
				<input type='submit' value='EDIT BAND' />
			</form>
			<i className='far fa-times-circle' onClick={hideForm}></i>
		</section>
	);
};

export default EditBandForm;
