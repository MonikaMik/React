const Skaiciuoti = ({number, increment, decrement}) => {
    return ( 
        <section>
            <p>Musu skaicius yra: {number}</p>
            <button onClick={decrement}>Mazinti skaiciu</button> 
            <button onClick={e => increment()}>Didinti skaiciu</button>
        </section>
     );
}
 
export default Skaiciuoti;