import Label from '../atoms/form/Label';
import Input from '../atoms/form/Input';
import ErrorMessage from '../atoms/form/ErrorMessage';
import styled from 'styled-components';

const StyledFormField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const FormField = ({ label, id, register, type, error }) => (
	<StyledFormField>
		<Label htmlFor={id}>{label}</Label>
		<Input id={id} register={register} type={type} />
		<ErrorMessage message={error?.message} />
	</StyledFormField>
);

export default FormField;
