import axios from "axios";
import React, { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = (e) => {
    e.preventDefault();
    console.log("Success");
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: email,
        password: password,
      })
      .then((results) => {
        console.log(results.data);
        alert("Success Login");
        window.location.assign("house");
      })

      .catch((error) => {
        console.log(error);
        // console.log(error.response);
        alert("invalid characters");
      });
  };

  return (
    <div className="form">
      <p className="title-login">Login</p>
      <div>
        <input
          className="input-email"
          value={email}
          onChange={handleEmail}
          placeholder="Enter email"
          name="email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          className="input-pass"
          placeholder="Enter password"
          name="password"
          required
        />
      </div>
      <button className="btn-login" type="submit" onClick={handleApi}>
        Submit
      </button>
    </div>
  );
};

export default LogIn;
