import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	> h1 {
		font-size: 2.5rem;
	}
	> form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 30rem;
		> input {
			width: 20%;
			align-self: center;
		}
		> div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
			> input,
			> select {
				padding: 0.2rem 0.5rem;
			}
			> label,
			> p {
				text-align: right;
			}
			> p {
				margin: 0;
			}
			> div {
				display: flex;
				align-items: center;
				justify-content: space-around;
			}
		}
	}
`;

const schema = Yup.object().shape({
	name: Yup.string().required('Required').trim(),
	price: Yup.number().min(1, 'Must be a valid price').required('Required'),
	description: Yup.string()
		.min(10, 'Must be at least 10 characters long')
		.required('Required')
		.trim(),
	image: Yup.string()
		.url('Field must be a valid url')
		.required('Required')
		.trim()
});

function AddNewCard() {
	const { addProduct } = useContext(ProductContext);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur'
	});

	const onSubmit = data => {
		const newProduct = {
			id: uuid(),
			name: data.name,
			price: data.price,
			description: data.description,
			image: data.image
		};
		addProduct(newProduct);
		reset();
		navigate('/products');
	};

	return (
		<StyledSection>
			<h1>Add a new Product</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='name'>Name: </label>
					<input id='name' {...register('name')} />
					{errors.name && <p>{errors.name.message}</p>}
				</div>
				<div>
					<label htmlFor='price'>Price: </label>
					<input id='price' type='number' {...register('price')} />
					{errors.price && <p>{errors.price.message}</p>}
				</div>
				<div>
					<label htmlFor='description'>Description: </label>
					<textarea id='description' {...register('description')} />
					{errors.description && <p>{errors.description.message}</p>}
				</div>
				<div>
					<label htmlFor='image'>Product image url: </label>
					<input id='image' type='url' {...register('image')} />
					{errors.image && <p>{errors.image.message}</p>}
				</div>
				<input type='submit' value='Add product' />
			</form>
		</StyledSection>
	);
}

export default AddNewCard;
