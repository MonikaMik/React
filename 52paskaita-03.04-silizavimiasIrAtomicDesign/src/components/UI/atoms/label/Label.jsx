import styled from 'styled-components';

const Label = ({ text, inputId }) => {
    const stilius = {
        fontSize: "36px"
    }
    return ( 
        <label htmlFor={inputId} style={stilius}>{text}</label>
     );
}
 
export default Label;