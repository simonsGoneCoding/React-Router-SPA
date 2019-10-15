import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Enter your login
        <input type="text" />
      </label>
      <br />
      <label htmlFor="">
        Enter your password
        <input type="text" />
      </label>
      <button>Submit</button>
    </div>
  );
};

export default LoginPage;
