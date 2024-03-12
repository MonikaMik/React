import UsersContext from '../../contexts/UsersContext';
import { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/logo.png';

const StyledHeader = styled.header`
	background-color: #191919;
	color: white;
	display: flex;
	justify-content: space-between;
	height: 6rem;
	align-items: center;
	padding: 0 2rem;
	> img {
		height: 80%;
	}
	> nav {
		> ul {
			display: flex;
			gap: 2rem;
			list-style-type: none;
			> li > a {
				color: white;
				text-decoration: none;
				&.active {
					color: rgb(25, 118, 210);
					text-decoration: underline;
				}
			}
		}
	}
`;

function Header() {
	const { loggedInUser, logout } = useContext(UsersContext);
	const navigate = useNavigate();
	return (
		<StyledHeader>
			<img src={logo} alt='planet logo' />
			<nav>
				<ul>
					<li>
						<NavLink to='/'>HOME</NavLink>
					</li>
					<li>
						<NavLink to='cards'>CARDS</NavLink>
					</li>
				</ul>
			</nav>
			{loggedInUser ? (
				<>
					<span>{loggedInUser.username}</span>
					<button
						onClick={() => {
							logout();
							navigate('/');
						}}
					>
						Log out
					</button>
				</>
			) : (
				<nav>
					<ul>
						<li>
							<Link to='/login'>LOGIN</Link>
						</li>
						<li>
							<Link to='/register'>REGISTER</Link>
						</li>
					</ul>
				</nav>
			)}
		</StyledHeader>
	);
}
export default Header;
