import logo from "../images/logo.png";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useRef, useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 5rem;
  background: url("https://cdn.audioaddict.com/rockradio.com/assets/header-bg-5a3266e90a33f1c2319c66fb0c11460796743d6c226338411995d8ff33edec70.png")
    repeat-x 0 0 transparent;
  background-size: contain;
  color: white;
  border-bottom: 1px solid #1a1a1a;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5%;
  > img {
    height: 80%;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 2rem;
    > img {
      height: 4rem;
      width: 4rem;
      object-fit: cover;
      border-radius: 50%;
    }
    > p {
      font-size: 1.5rem;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.75);
      font-weight: 400;
    }
  }
`;

const Header = ({
  likedBands,
  loginFormInputs,
  setLoginFormInputs,
  setUser,
  user,
  registerFormInputs,
  setRegisterFormInputs,
  registerUser,
}) => {
  const [isLogin, setIsLogin] = useState(false);
  const dialogRef = useRef(null);

  const showLoginForm = (loginOrRegister) => {
    loginOrRegister === "login" ? setIsLogin(true) : setIsLogin(false);
    dialogRef.current.showModal();
  };

  const hideLoginForm = () => {
    dialogRef.current.close();
  };

  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <div>
        {user ? (
          <>
            <p>
              FAVORITE BANDS: <span className="yellow">{likedBands}</span>
            </p>
            <p>{user}</p>
            <i className="far fa-user-circle"></i>
            <i
              className="fa-solid fa-right-from-bracket"
              onClick={() => setUser("")}
            ></i>
          </>
        ) : (
          <>
            <button onClick={() => showLoginForm("register")}>Register</button>
            <button onClick={() => showLoginForm("login")}>Log in</button>
            <dialog ref={dialogRef}>
              {isLogin ? (
                <LoginForm
                  loginFormInputs={loginFormInputs}
                  setLoginFormInputs={setLoginFormInputs}
                  setUser={setUser}
                  hideLoginForm={hideLoginForm}
                />
              ) : (
                <RegisterForm
                  registerFormInputs={registerFormInputs}
                  setRegisterFormInputs={setRegisterFormInputs}
                  setUser={setUser}
                  hideLoginForm={hideLoginForm}
                  registerUser={registerUser}
                />
              )}
            </dialog>
          </>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;

//       User info dešinėje. User info susideda iš:
//         Ikonos, Vardo, Pažymėtų kortelių kiekio.
