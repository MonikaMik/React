import user from '../images/user.png';
import logo from '../images/logo.png';

const Header = ({ likedBands }) => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <div>
              <p>FAVORITE BANDS: <span className='yellow'>{likedBands}</span></p>
              <p>MONIKA</p>
              <img src={user} alt="user profile pic" />
            </div>
        </header>
      );
}
 
export default Header;

//       User info dešinėje. User info susideda iš:
//         Ikonos, Vardo, Pažymėtų kortelių kiekio.