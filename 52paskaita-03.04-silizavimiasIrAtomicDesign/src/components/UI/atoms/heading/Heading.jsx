import koksNori from './heading.module.css';

const Heading = ({ text }) => {
    return ( 
        <h1 className={`${koksNori.colorRed} ${koksNori.size}`}>{text}</h1>
     );
}
 
export default Heading;