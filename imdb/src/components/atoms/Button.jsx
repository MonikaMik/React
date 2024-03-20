import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: var(--button-color);
	border: none;
	border-radius: 5px;
	font-weight: bold;
	color: var(--accent-blue);
	padding-block: 8px;
	width: 100%;
	&:hover {
		background-color: var(--hover-color);
		cursor: pointer;
	}
`;

const Button = ({ text, onClickF }) => {
	return <StyledButton onClick={onClickF}>{text}</StyledButton>;
};
export default Button;
