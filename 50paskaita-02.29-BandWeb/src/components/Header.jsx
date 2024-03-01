import logo from '../images/logo.png';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useRef, useState } from "react";

const Header = ({ likedBands, loginFormInputs, setLoginFormInputs, setUser, user, registerFormInputs, setRegisterFormInputs, registerUser }) => {

  const [isLogin, setIsLogin] = useState(false);
  const dialogRef = useRef(null);

  const showLoginForm = (loginOrRegister) => {
    loginOrRegister === 'login' ? setIsLogin(true) : setIsLogin(false);
    dialogRef.current.showModal();
  }

  const hideLoginForm = () => {
    dialogRef.current.close();
  }

  return (
      <header>
          <img src={logo} alt="logo" />
          <div>
            { 
              user ?
              <>
              <p>FAVORITE BANDS: <span className='yellow'>{likedBands}</span></p>
              <p>{user}</p>
              <i className="far fa-user-circle"></i>
              <i 
                className="fa-solid fa-right-from-bracket" 
                onClick={() => setUser('')}
              ></i>
              </>
              : 
              <>
               <button
                  onClick={() => showLoginForm('register')}
                >
                  Register
                </button>
                <button
                  onClick={() => showLoginForm('login')}
                >
                  Log in
                </button>
                <dialog ref={dialogRef}>
                  { 
                    isLogin ?
                      <LoginForm
                        loginFormInputs={loginFormInputs}
                        setLoginFormInputs={setLoginFormInputs}
                        setUser={setUser}
                        hideLoginForm={hideLoginForm}
                      />
                      : 
                      <RegisterForm
                        registerFormInputs={registerFormInputs}
                        setRegisterFormInputs={setRegisterFormInputs}
                        setUser={setUser}
                        hideLoginForm={hideLoginForm}
                        registerUser={registerUser}
                      />
                    }
                </dialog>
              </>
            }
          </div>
      </header>
    );
}
 
export default Header;

//       User info dešinėje. User info susideda iš:
//         Ikonos, Vardo, Pažymėtų kortelių kiekio.