import { createContext, useReducer } from "react";

const FormInputContext = createContext();

const inputActionTypes = {
   HANDLE_INPUT_CHANGE: "reaguoti i pasikeitima impute",
   CLEAR_FORM: "isvalyti formos laukus",
   FILL_FORM: "uzpildyti forma esanciais duomenimis"
}