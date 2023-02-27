import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Container>
      <div
        className="d-flex align-items-center mx-auto"
        style={{ height: "100vh" }}
      >
        <Form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ width: "400px" }}
        >
          <h1 className="text-center mb-5">PISCO</h1>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="아이디"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Control
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            로그인
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
