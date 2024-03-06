import "./App.css";
import RegisterFormPage from "./components/UI/pages/registerFormPage/RegisterForm";
import { useState } from "react";

const App = () => {
  const [formInputs, setFormInputs] = useState({
    vardas: "em",
    email: "ha",
    avatar: "hi",
    password: "ka",
    passwordRepeat: "ka",
  });

  return (
    <>
      <RegisterFormPage value={formInputs} onChangeF={setFormInputs} />
    </>
  );
};

export default App;
