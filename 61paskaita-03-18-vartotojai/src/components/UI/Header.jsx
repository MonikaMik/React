import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	padding: 0 20px;
	background-color: #ffd6d1;
	border-bottom: 3px double black;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	> div {
		height: 100%;
		> a {
			> img {
				height: 100%;
			}
		}
	}

	> nav ul {
		display: flex;
		list-style: none;
		li {
			margin: 0 10px;
			> a {
				text-decoration: none;
				color: black;
				font-size: 1.3rem;
				&.active {
					color: #d000c6;
				}
				&:hover {
					color: #ff4f6c;
				}
			}
		}
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<div>
				<Link to='/'>
					<img
						src='https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png'
						alt='logo'
					/>
				</Link>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to='/' end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/cards'>Cards</NavLink>
					</li>
				</ul>
			</nav>
			<nav>
				<ul>
					<li>
						<NavLink to='user/register'>Register</NavLink>
					</li>
					<li>
						<NavLink to='user/login'>Login</NavLink>
					</li>
				</ul>
			</nav>
		</StyledHeader>
	);
};
export default Header;
