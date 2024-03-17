import styled from 'styled-components';
import ParagraphNoMargin from '../atoms/typography/ParagraphNoMargin';

const StyledCopyRight = styled.div`
	background-color: var(--primary-color);
	display: flex;
	justify-content: space-between;
	padding-inline: var(--page-padding-sides);
	color: white;
	padding-block: 0.4rem;
`;

const Copyrights = () => {
	return (
		<StyledCopyRight>
			<ParagraphNoMargin text='© Plant Shop. Vilnius, 2024' />
			<ParagraphNoMargin text='Terms & Conditions' />
		</StyledCopyRight>
	);
};

export default Copyrights;
