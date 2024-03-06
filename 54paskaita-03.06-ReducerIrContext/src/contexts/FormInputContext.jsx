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
  return (
    <FormInputContext.Provider
      value={{
        formInputs,
        setFormInputs,
      }}
    >
      {children}
    </FormInputContext.Provider>
  );
};

export default FormInputContext;
export { FormInputProvider };
