import Logo from '../atoms/header/Logo';
import Navigation from '../molecules/Navigation';
import styled, { useTheme } from 'styled-components';
import ThemeToggleButton from '../atoms/header/ThemeToggleButton';
import Icon from '../atoms/Icon';
import ParagraphNoMargin from '../atoms/typography/ParagraphNoMargin';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: var(--page-padding-sides);
	padding-block: 0.4rem;
	background-color: ${({ theme }) => theme.cardBody};
	> div {
		display: flex;
		gap: 0.2rem;
		align-items: center;
	}
	> input {
		width: 50%;
		padding: 0.4rem 0.5rem;
		border-radius: 5px;
		border: none;
	}
	> i {
		cursor: pointer;
	}
	> button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
`;

const Header = ({ theme, setTheme }) => {
	const toggleTheme = () => {
		setTheme(currTheme => (currTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<StyledHeader>
			<Logo
				imageSrc='https://upload.wikimedia.org/wikipedia/commons/6/6a/New-imdb-logo.png'
				title='logo'
			/>
			<div>
				<Icon iconClass='bi bi-list' color='text' size='medium' />
				<span>Menu</span>
			</div>
			<input type='text' placeholder='Search IMDb' />
			<Logo
				imageSrc='https://m.media-amazon.com/images/S/sash/plpk1uWJsI--$Bh.png'
				title='imdb pro logo'
			/>
			<p>Watchlist</p>
			<p>Sign In</p>
			<button onClick={toggleTheme}>
				<Icon
					iconClass={theme === 'light' ? 'bi bi-moon' : 'bi bi-sun'}
					color='text'
					size='medium'
				/>
			</button>
		</StyledHeader>
	);
};
export default Header;
