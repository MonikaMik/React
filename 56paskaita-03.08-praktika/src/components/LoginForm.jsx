const LoginForm = ({
  loginFormInputs,
  setLoginFormInputs,
  setUser,
  hideLoginForm,
}) => {
  const handleLogin = (e) => {
    e.preventDefault();

    fetch(
      `http://localhost:8080/users?name=${loginFormInputs.username}&password=${loginFormInputs.password}`
    )
      .then((res) => res.json())
      .then((users) => users.length > 0 ? setUser(users[0].name) : alert('bad login info'));

    setLoginFormInputs({
      username: "",
      password: "",
    });

    hideLoginForm();
  };

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setLoginFormInputs({
      ...loginFormInputs,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type='text'
          name='username'
          id='username'
          placeholder='username...'
          value={loginFormInputs.username}
          onChange={(e) => handleInputChange(e, "login")}
          required
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='password...'
          value={loginFormInputs.password}
          onChange={(e) => handleInputChange(e, "login")}
          required
        />
        <input type='submit' value='Log in' />
      </form>
        <i 
            className="far fa-times-circle"
            onClick={hideLoginForm}
        >
        </i>
    </div>
  );
};

export default LoginForm;
