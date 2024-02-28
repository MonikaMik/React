const Header = ({ bendrasKiekis, ragautasKiekis, neragautasKiekis }) => {
    return ( 
        <header>
            <p>Bendras patiekalu kiekis: {bendrasKiekis}</p>
            <p>Ragautu patiekalu kiekis: {ragautasKiekis}</p>
            <p>Neragautu patiekalu kiekis: {neragautasKiekis}</p>
        </header>
     );
}
 
export default Header;