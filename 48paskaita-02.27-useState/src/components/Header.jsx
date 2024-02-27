const Header = ({logIn, logOut, isLoggedIn}) => {
    return (
        <header>
            {
            !isLoggedIn 
                ? <>
                    <button>Sign Up</button>
                    <button onClick={logIn}>Prisijungti</button>
                  </>
                : <button onClick={logOut}>Atsijungti</button>
            }
        </header>
      );
}
 
export default Header;