import styled from 'styled-components';
import PageLoaderContext from '../../../contexts/PageLoaderContext';
import { useContext } from 'react';

const StyledNav = styled.nav`
	position: absolute;
	left: 45%;
	top: 1.8rem;
	> ul {
		display: flex;
		gap: 1rem;
		list-style: none;
		> li > a {
			color: white;
			text-decoration: none;
			border: 1px solid white;
			padding: 2px 8px;
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
			font-size: 1.2rem;
			&.cards {
				background-color: ${props =>
					props.$isClicked === 'cards' ? 'var(--yellow)' : 'transparent'};
				color: ${props => (props.$isClicked === 'cards' ? 'black' : 'white')};
				&:hover {
					background-color: var(--yellow);
					color: black;
				}
			}
			&.form {
				background-color: ${props =>
					props.$isClicked === 'form' ? 'var(--yellow)' : 'transparent'};
				color: ${props => (props.$isClicked === 'form' ? 'black' : 'white')};
				&:hover {
					background-color: var(--yellow);
					color: black;
				}
			}
		}
	}
`;

const Navigation = () => {
	const { pageLoader, setPageLoader } = useContext(PageLoaderContext);
	return (
		<StyledNav $isClicked={pageLoader}>
			<ul>
				<li>
					<a href='#/' className='cards' onClick={() => setPageLoader('cards')}>
						cards
					</a>
				</li>
				<li>
					<a href='#/' className='form' onClick={() => setPageLoader('form')}>
						add new band
					</a>
				</li>
			</ul>
		</StyledNav>
	);
};
export default Navigation;
