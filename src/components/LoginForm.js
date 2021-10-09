import styled from "styled-components";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import Input from "./Input";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  function login(e) {
    e.preventDefault();
    if (email && password) {
      authContext.setAuth({ isAuth: true });
    } else {
      alert("wrong details");
    }
  }
  return (
    <Container>
      <Form>
        <h3>Login</h3>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 0 2rem;
  max-width: 20rem;
  flex-direction: column;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
  h3 {
    font-weight: 600;
    font-size: 1.2rem;
  }
  button {
    width: 6rem;
    height: 2rem;
    border: none;
    color: #FFFFFF;
    margin: 1.4rem;
    align-self: end;
    cursor: pointer;
    font-wieght: 500;
    border-radius: 6px;
    background-color: #5600e8;
  }
`;

const Container = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  margin-top: 5rem;
  justify-content: center;
`;

export default LoginForm;
