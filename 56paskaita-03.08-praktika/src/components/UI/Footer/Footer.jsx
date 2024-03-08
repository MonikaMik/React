import logo from '../../../images/logoShort.png';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	color: white;
	background-color: #2e2e2eb3;
	padding: 1rem 0;
	> div {
		flex-basis: 40%;
		> div {
			display: flex;
			gap: 1rem;
			align-items: center;
			> img {
				height: 4rem;
			}
			> span {
				font-size: 2rem;
				text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.75);
				font-weight: 400;
			}
		}
	}
	> ul {
		display: flex;
		list-style: none;
		gap: 2rem;
		> li > i {
			color: var(--yellow);
			font-size: 2rem;
			&:hover {
				cursor: pointer;
				color: var(--red);
			}
		}
	}
	> p > a {
		color: white;
		text-underline-offset: 5px;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<div>
				<div>
					<img src={logo} alt='logo' />
					<span className='yellow'>ROCK RADIO</span>
				</div>
				<hr />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim
					sequi consequuntur magni minima nam, maxime expedita aspernatur
					officiis labore incidunt fuga aliquam
				</p>
			</div>
			<ul>
				<li>
					<i className='fa-brands fa-facebook'></i>
				</li>
				<li>
					<i className='fa-brands fa-square-x-twitter'></i>
				</li>
				<li>
					<i className='fa-brands fa-square-instagram'></i>
				</li>
			</ul>
			<p>
				<a href='#/'>Privacy policy</a>
			</p>
			<p>
				<a href='#/'>Terms and services</a>
			</p>
		</StyledFooter>
	);
};

export default Footer;
