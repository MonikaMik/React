import Logo from '../atoms/header/Logo';
import styled from 'styled-components';
import Paragraph from '../atoms/typography/Paragraph';
import ParagraphNoMargin from '../atoms/typography/ParagraphNoMargin';
import LargeIcon from '../atoms/LargeIcon';
import BoldText from '../atoms/typography/BoldText';

const StyledFooterInfo = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-inline: var(--page-padding-sides);
	padding-block: var(--page-padding-block);
	gap: 2rem;
	> * {
		flex: 1;
		text-align: center;
	}
	> .logoSection {
		flex-basis: 40%;
		text-align: left;
	}
	> .iconContainer {
		display: flex;
		gap: 2rem;
	}
`;

const FooterInfo = () => {
	return (
		<StyledFooterInfo>
			<div className='logoSection'>
				<Logo imageSrc='../../../assets/images/logo.png' title='logo' />
				<Paragraph
					text="Welcome to our plant shop! We offer a wide variety of beautiful and
                healthy plants to bring nature into your home. Whether you're a seasoned
                plant enthusiast or just starting your green journey, we have the
                perfect plants for you."
				/>
			</div>
			<div className='iconContainer'>
				<LargeIcon iconClass={'bi bi-facebook'} />
				<LargeIcon iconClass={'bi bi-instagram'} />
				<LargeIcon iconClass={'bi bi-twitter'} />
			</div>
			<div>
				<LargeIcon iconClass={'bi bi-phone'} />
				<BoldText text='Call us' />
				<ParagraphNoMargin text='+3700002020' />
			</div>
			<div>
				<LargeIcon iconClass={'bi bi-geo-alt'} />
				<BoldText text='Visit us' />
				<ParagraphNoMargin text='Some st. 55' />
			</div>
		</StyledFooterInfo>
	);
};
export default FooterInfo;
