import styled from 'styled-components';

const StyledErrorMessage = styled.span`
	color: var(--important-color);
`;

const ErrorMessage = ({ message }) => (
	<StyledErrorMessage>{message}</StyledErrorMessage>
);

export default ErrorMessage;
