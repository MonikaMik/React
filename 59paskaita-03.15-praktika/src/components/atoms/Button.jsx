import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: var(--accent-color);
	border: none;
	border-radius: 5px;
	color: white;
	letter-spacing: 0.5px;
	padding: 10px 20px;
	&:hover {
		background-color: var(--hover-color);
		cursor: pointer;
	}
`;

const Button = ({ text, onClickF }) => {
	return <StyledButton onClick={onClickF}>{text}</StyledButton>;
};
export default Button;
