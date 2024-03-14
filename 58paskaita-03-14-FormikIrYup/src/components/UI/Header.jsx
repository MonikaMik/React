import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	padding: 5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #75a1b0;
	> div > a > img {
		width: 50px;
		height: auto;
	}
	> nav {
		> ul {
			display: flex;
			gap: 10px;
			list-style: none;
			> li {
				> a {
					text-decoration: none;
					font-size: large;
					color: black;
					font-weight: bold;
					&.active {
						color: orange;
					}
					&:hover {
						color: green;
					}
				}
			}
		}
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<div>
				<NavLink to='/'>
					<img
						src='https://img.stackshare.io/service/8846/preview.png'
						alt='formik logo'
					/>
				</NavLink>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/products'>Products</NavLink>
					</li>
				</ul>
			</nav>
			<nav>
				<ul>
					<li>
						<NavLink to='register'>Register</NavLink>
					</li>
					<li>
						<NavLink to='register'>Login</NavLink>
					</li>
				</ul>
			</nav>
		</StyledHeader>
	);
};
export default Header;
