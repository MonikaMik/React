import logo from '../../../images/logo.png';
import LoginForm from '../Auth/LoginForm';
import RegisterForm from '../Auth/RegisterForm';
import { useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import LikedBandNumber from './LikedBandNumber';
import UserContext from '../../../contexts/UserContext';
import { LoginFormContextProvider } from '../../../contexts/LoginFormContext';
import { RegisterFormContextProvider } from '../../../contexts/RegisterFormContext';
import Navigation from './Navigation';

const StyledHeader = styled.header`
	height: 5rem;
	background: url('https://cdn.audioaddict.com/rockradio.com/assets/header-bg-5a3266e90a33f1c2319c66fb0c11460796743d6c226338411995d8ff33edec70.png')
		repeat-x 0 0 transparent;
	background-size: contain;
	color: white;
	border-bottom: 1px solid #1a1a1a;
	display: flex;
	justify-content: space-between;
	padding: 1rem 5%;
	position: relative;
	> img {
		height: 80%;
	}
	> div {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		> img {
			height: 4rem;
			width: 4rem;
			object-fit: cover;
			border-radius: 50%;
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
			border: 3px solid var(--yellow);
		}
		> p {
			font-size: 1.5rem;
			text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.75);
			font-weight: 400;
		}
	}
`;

const Header = () => {
	const { userState, logout } = useContext(UserContext);
	const [isLogin, setIsLogin] = useState(false);
	const dialogRef = useRef(null);

	const showLoginForm = loginOrRegister => {
		loginOrRegister === 'register' ? setIsLogin(false) : setIsLogin(true);
		dialogRef.current.showModal();
	};

	const hideLoginForm = () => {
		dialogRef.current.close();
	};

	return (
		<StyledHeader>
			<img src={logo} alt='logo' />
			<Navigation />
			<div>
				{userState.isAuthenticated ? (
					<>
						{/* <LikedBandNumber /> */}
						<p>{userState.user.name}</p>
						<img src={userState.user.avatar} alt='user avatar' />
						<i className='fa-solid fa-right-from-bracket' onClick={logout}></i>
					</>
				) : (
					<>
						<button onClick={() => showLoginForm('register')}>Register</button>
						<button onClick={() => showLoginForm('login')}>Log in</button>
						<dialog ref={dialogRef}>
							{isLogin ? (
								<LoginFormContextProvider>
									<LoginForm hideLoginForm={hideLoginForm} />
								</LoginFormContextProvider>
							) : (
								<RegisterFormContextProvider>
									<RegisterForm hideLoginForm={hideLoginForm} />
								</RegisterFormContextProvider>
							)}
						</dialog>
					</>
				)}
			</div>
		</StyledHeader>
	);
};

export default Header;
