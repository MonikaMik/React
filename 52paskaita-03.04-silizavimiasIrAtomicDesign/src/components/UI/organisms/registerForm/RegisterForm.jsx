import FormInput from "../../molecules/formInput/FormInput";
import Input from "../../atoms/input/Input";

const RegisterForm = ({ value, onChangeF }) => {
    return ( 
        <form>
            <FormInput
                nameId="vardas"
                labelText="Vardas: "
                inputType="text"
                placeholderText="iveskite varda..."
                value={value}
                onChangeF={onChangeF}
            />
              <FormInput
                nameId="email"
                labelText="Email: "
                inputType="email"
                placeholderText="iveskite email..."
                value={value}
                onChangeF={onChangeF}
            />
              <FormInput
                nameId="avatar"
                labelText="Nuotraukos url: "
                inputType="url"
                placeholderText="iveskite profilio nuotraukos url..."
                value={value}
                onChangeF={onChangeF}
            />
              <FormInput
                nameId="password"
                labelText="Slaptazodis: "
                inputType="password"
                placeholderText="iveskite slaptazodi..."
                value={value}
                onChangeF={onChangeF}
            />
            <FormInput
                nameId="passwordRepeat"
                labelText="Slaptazodzio pakartojimas: "
                inputType="password"
                placeholderText="iveskite slaptazodi..."
                value={value}
                onChangeF={onChangeF}
            />
            <Input
                type="submit"
                valueState="Registruotis"
            />
            {/* <input type="submit" value="Registruotis"/> */}
        </form>
     );
}
 
export default RegisterForm;
