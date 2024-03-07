import { createContext, useState, useReducer } from "react";

const FormInputContext = createContext();

const inputActionTypes = {
  HANDLE_INPUT_CHANGE: "reaguoti i pasikeitima impute",
  CLEAR_FORM: "isvalyti formos laukus",
  FILL_FORM: "uzpildyti forma esanciais duomenimis",
};

const reducer = (state, action) => {
  switch (action.type) {
    case inputActionTypes.HANDLE_INPUT_CHANGE:
      const { name, value, type, checked } = action.payload;
      return {
        ...state,
        [name]: type === "checkbox" || type === "radio" ? checked : value,
      };
    case inputActionTypes.CLEAR_FORM:
      return {
        id: "",
        pavadinimas: "",
        nuotrauka: "",
        kiekisNuo: "",
        kiekisIki: "",
        amziusNuo: "",
        aprasymas: "",
        pazymetas: false,
      };
    case inputActionTypes.FILL_FORM:
      return {
        id: action.cardInfo.id,
        pavadinimas: action.cardInfo.pavadinimas,
        nuotrauka: action.cardInfo.nuotrauka,
        kiekisNuo: action.cardInfo.zaidejai.kiekisNuo,
        kiekisIki: action.cardInfo.zaidejai.kiekisIki,
        amziusNuo: action.cardInfo.zaidejai.amziusNuo,
        aprasymas: action.cardInfo.aprasymas,
        pazymetas: action.cardInfo.pazymetas,
      };
    default:
      console.error("Unknown action type", action.type);
      return state;
  }
};

const FormInputProvider = ({ children }) => {
  // const [formInputs, setFormInputs] = useState({
  //   id: "",
  //   pavadinimas: "",
  //   nuotrauka: "",
  //   kiekisNuo: "",
  //   kiekisIki: "",
  //   amziusNuo: "",
  //   aprasymas: "",
  //   pazymetas: false,
  // });

  // const handleInputChange = (e) => {
  //   setFormInputs({
  //     ...formInputs,
  //     [e.target.name]:
  //       e.target.type === "checkbox" || "radio"
  //         ? e.target.checked
  //         : e.target.value,
  //   });
  // };

  // const clearForm = () => {
  //   setFormInputs({
  //     id: "",
  //     pavadinimas: "",
  //     nuotrauka: "",
  //     kiekisNuo: "",
  //     kiekisIki: "",
  //     amziusNuo: "",
  //     aprasymas: "",
  //     pazymetas: false,
  //   });
  // };

  // const fillEditFormInputs = (cardInfo) => {
  //   setFormInputs({
  //     id: cardInfo.id,
  //     pavadinimas: cardInfo.pavadinimas,
  //     nuotrauka: cardInfo.nuotrauka,
  //     kiekisNuo: cardInfo.zaidejai.kiekisNuo,
  //     kiekisIki: cardInfo.zaidejai.kiekisIki,
  //     amziusNuo: cardInfo.zaidejai.amziusNuo,
  //     aprasymas: cardInfo.aprasymas,
  //     pazymetas: cardInfo.pazymetas,
  //   });
  // };

  const [formInputs, formDispatch] = useReducer(reducer, {
    id: "",
    pavadinimas: "",
    nuotrauka: "",
    kiekisNuo: "",
    kiekisIki: "",
    amziusNuo: "",
    aprasymas: "",
    pazymetas: false,
  });

  return (
    <FormInputContext.Provider
      value={{
        formInputs,
        formDispatch,
      }}
    >
      {children}
    </FormInputContext.Provider>
  );
};

export default FormInputContext;
export { FormInputProvider, inputActionTypes };
