import Heading from "../../atoms/heading/Heading";
import RegisterForm from "../../organisms/registerForm/RegisterForm";

const RegisterFormPage = ({ value, onChangeF }) => {
    return ( 
        <section>
            <Heading
                text="Registracijos forma"
            />
            <RegisterForm
                value={value}
                onChangeF={onChangeF}
            />
        </section>
     );
}
 
export default RegisterFormPage;

