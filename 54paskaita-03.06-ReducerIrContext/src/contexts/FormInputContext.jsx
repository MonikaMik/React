import { createContext, useState } from "react";

const FormInputContext = createContext();

const FormInputProvider = ({ children }) => {
  const [formInputs, setFormInputs] = useState({
    pavadinimas: "",
    nuotrauka: "",
    kiekisNuo: "",
    kiekisIki: "",
    amziusNuo: "",
    aprasymas: "",
  });

  const handleInputChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormInputContext.Provider
      value={{
        formInputs,
        setFormInputs,
        handleInputChange,
      }}
    >
      {children}
    </FormInputContext.Provider>
  );
};

export default FormInputContext;
export { FormInputProvider };
