import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	height: 150px;
	background-color: #ffaba2;
	border-top: 3px double black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	flex-shrink: 0;
	> div {
		height: 80%;
		display: flex;
		align-items: center;
		gap: 10px;
		> a {
			height: 80%;
			> img {
				height: 100%;
			}
		}
	}
	ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		li {
			margin-bottom: 5px;
			&:first-child {
				font-size: 1.3rem;
				font-weight: bold;
				margin-bottom: 10px;
			}
			> a {
				text-decoration: none;
				color: black;
				> i {
					font-size: 1.5rem;
					margin-right: 10px;
				}
				&:hover {
					color: #ff4f6c;
				}
			}
		}
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<div>
				<Link path='/'>
					<img
						src='https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png'
						alt='logo'
					/>
				</Link>
				<p>Copyrights &copy; 2024 by ME</p>
			</div>
			<ul>
				<li>Legal</li>
				<li>
					<Link>Terma & Conditions</Link>
				</li>
				<li>
					<Link>Privacy Policy</Link>
				</li>
				<li>
					<Link>Terms of use</Link>
				</li>
			</ul>
			<ul>
				<li>Socials</li>
				<li>
					<Link>
						<i className='bi bi-facebook'></i>
					</Link>
					<Link>
						<i className='bi bi-twitter-x'></i>
					</Link>
				</li>
				<li>
					<Link>
						<i className='bi bi-instagram'></i>
					</Link>
					<Link>
						<i className='bi bi-linkedin'></i>
					</Link>
				</li>
			</ul>
		</StyledFooter>
	);
};
export default Footer;
