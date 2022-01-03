import axios from "axios";
import { useState } from "react";
import { API_KEY } from "../logic/keys";

const Register = ({ setAuth, LOCAL_AUTH }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

  const getAuth = (e) => {
    e.preventDefault();
    axios
      .post(URL, { email, password })
      .then((res) => {
        console.log(res);
        setAuth(res.data.email);
        localStorage.setItem(LOCAL_AUTH, JSON.stringify(res.data.email));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>REGISTER PAGE</h1>
      <br />
      <form onSubmit={getAuth}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value={"Register"} />
      </form>
    </div>
  );
};

export default Register;
