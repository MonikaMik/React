import { useForm } from 'react-hook-form';
import FormField from '../molecules/InputField';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useContext } from 'react';
import PlantContext from '../../contexts/PlantContext';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

const StyledForm = styled.form`
	width: 80%;
	padding-block: var(--page-padding-block);
	display: flex;
	flex-direction: column;
	> .doubleInput {
		display: flex;
		column-gap: 2rem;
		> * {
			flex: 1;
		}
	}
	> input[type='submit'] {
		background-color: var(--accent-color);
		border: none;
		border-radius: 5px;
		color: white;
		letter-spacing: 0.5px;
		padding: 10px 20px;
		place-self: center;
		&:hover {
			background-color: var(--hover-color);
			cursor: pointer;
		}
	}
`;

const schema = Yup.object().shape({
	name: Yup.string()
		.min(10, 'Must be at least 10 characters long')
		.required('Required')
		.trim(),
	type: Yup.string().required('Required').trim(),
	price: Yup.number().required('Required').min(1, 'Must be a valid price'),
	salePrice: Yup.number().required('Required').min(0, 'Must be a valid price'),
	description: Yup.string()
		.min(10, 'Must be at least 10 characters long')
		.required('Required')
		.trim(),
	image: Yup.string()
		.url('Field must be a valid url')
		.required('Required')
		.trim(),
	instructions: Yup.string().required('Required').trim()
});

const PlantForm = () => {
	const { addPlant } = useContext(PlantContext);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: '',
			type: '',
			price: 0,
			salePrice: 0,
			description: '',
			image: '',
			instructions: ''
		},
		mode: 'onBlur',
		revalidateMode: 'onChange'
	});

	const onSubmit = data => {
		const newPlant = {
			id: uuid(),
			name: data.name,
			type: data.type,
			price: data.price,
			salePrice: data.salePrice,
			description: data.description,
			pictureUrl: data.image,
			instructions: data.instructions.split(', ')
		};
		addPlant(newPlant);
		reset();
		navigate('/plants');
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<div className='doubleInput'>
				<FormField
					label='Name'
					id='name'
					register={register}
					error={errors.name}
				/>
				<FormField
					label='Type'
					id='type'
					register={register}
					error={errors.type}
				/>
			</div>
			<div className='doubleInput'>
				<FormField
					label='Price'
					id='price'
					register={register}
					type='number'
					error={errors.price}
				/>
				<FormField
					label='Sale price'
					id='salePrice'
					register={register}
					type='number'
					error={errors.salePrice}
				/>
			</div>
			<FormField
				label='Description'
				id='description'
				register={register}
				type='textarea'
				error={errors.description}
			/>
			<FormField
				label='Product image url'
				id='image'
				register={register}
				type='url'
				error={errors.image}
			/>
			<FormField
				label='Care instructions'
				id='instructions'
				register={register}
				type='textarea'
				error={errors.instructions}
			/>
			<input type='submit' value='Add product' />
		</StyledForm>
	);
};

export default PlantForm;
