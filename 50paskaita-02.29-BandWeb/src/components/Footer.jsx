import logo from '../images/logoShort.png';

const Footer = () => {
    return ( 
        <footer>
            <div>
                <div>
                    <img src={logo} alt="logo" />
                    <span className='yellow'>ROCK RADIO</span>
                </div>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim sequi consequuntur magni minima nam, maxime expedita aspernatur officiis labore incidunt fuga aliquam</p>
            </div>
            <ul>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-square-x-twitter"></i></li>
                <li><i className="fa-brands fa-square-instagram"></i></li>
            </ul>
            <p><a href="#/">Privacy policy</a></p>
            <p><a href="#/">Terms and services</a></p>
        </footer>
     );
}
 
export default Footer;