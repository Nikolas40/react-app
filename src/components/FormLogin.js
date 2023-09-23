import React, { useState } from "react";

const FormLogin = ({ createUser, closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleCheck = ({ target }) => {
    setIsChecked(target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");

    closeModal();
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleChangeEmail}
          value={email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handleChangePassword}
          value={password}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          checked={isChecked}
          onChange={handleCheck}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          I agree
        </label>
      </div>
      
      <button disabled={!isChecked} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormLogin;
