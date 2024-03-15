import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	border: 1px solid var(--primary-color);
	border-radius: 5px;
	padding: 0.5rem;
	flex: 1;
	max-height: 1.1rem;
`;
const StyledTextarea = styled.textarea`
	border: 1px solid var(--primary-color);
	border-radius: 5px;
	padding: 0.5rem;
	flex: 1;
`;

const Input = ({ id, register, type = 'text' }) => (
	<>
		{type === 'textarea' ? (
			<StyledTextarea id={id} {...register(id)} />
		) : (
			<StyledInput id={id} type={type} {...register(id)} />
		)}
	</>
);

export default Input;
