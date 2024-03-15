import styled from 'styled-components';

const StyledSecondaryTitle = styled.h2`
	font-size: 2rem;
	font-weight: 700;
`;

const HorizontalLine = styled.div`
	width: 3.5rem;
	height: 7px;
	background-color: var(--accent-color);
	border-radius: 5px;
`;

const StyledTitleWithAccent = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: center;
`;

const SecondaryTitle = ({ text }) => {
	return (
		<StyledTitleWithAccent>
			<HorizontalLine />
			<StyledSecondaryTitle>{text}</StyledSecondaryTitle>
			<HorizontalLine />
		</StyledTitleWithAccent>
	);
};
export default SecondaryTitle;
