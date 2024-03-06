import styled from "styled-components";

const StyledInput = styled.input`
  background-color: orange;
  color: black;
  font-size: 15px;
  letter-spacing: 10px;
`;

const Input = ({ type, id, name, placeholder, valueState, onChangeF }) => {
  console.log(valueState);
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={valueState[name]}
      onChange={(e) =>
        onChangeF({
          ...valueState,
          [name]: e.target.value,
        })
      }
    />
  );
};

export default Input;
