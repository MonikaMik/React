const RegisterForm = ({
  registerFormInputs,
  setRegisterFormInputs,
  setUser,
  hideLoginForm,
  registerUser,
}) => {
  const handleRegistration = (e) => {
    e.preventDefault();

    const user = {
      id: String(Date.now()),
      name: registerFormInputs.username,
      password: registerFormInputs.password,
      email: registerFormInputs.email,
    };

    registerUser(user);

    setRegisterFormInputs({
      username: "",
      password: "",
      email: "",
    });

    hideLoginForm();
  };

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setRegisterFormInputs({
      ...registerFormInputs,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleRegistration(e)}>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='username...'
          value={registerFormInputs.username}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='email...'
          value={registerFormInputs.email}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='password...'
          value={registerFormInputs.password}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <input type='submit' value='Register' />
      </form>
      <i className='far fa-times-circle' onClick={hideLoginForm}></i>
    </div>
  );
};

export default RegisterForm;
