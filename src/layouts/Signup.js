import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/");
  };

  const style = {
    signupBottom: {
      fontSize: "13px",
    },
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
          <div
            className="form-group d-flex gap-2 mb-3"
            style={{ height: "38px" }}
          >
            <Form.Control
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
            <Button variant="secondary" className="w-100">
              중복체크
            </Button>
          </div>
          <div
            className="form-group d-flex gap-2 mb-3"
            style={{ height: "38px" }}
          >
            <Form.Control
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Form.Control
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <div
            className="form-group d-flex gap-2 mb-3"
            style={{ height: "38px" }}
          >
            <Form.Control
              type="tel"
              placeholder="휴대폰 번호"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />

            <Button variant="secondary" className="w-100">
              인증코드 발송
            </Button>
          </div>
          <div
            className="form-group d-flex gap-2 mb-3"
            style={{ height: "38px" }}
          >
            <Form.Control
              type="text"
              placeholder="인증코드"
              value={authCode}
              onChange={(event) => setAuthCode(event.target.value)}
            />
            <Button variant="secondary" className="w-100">
              확인
            </Button>
          </div>
          <div
            className="form-group d-flex gap-2 mb-3"
            style={{ height: "38px" }}
          >
            <Form.Control
              type="text"
              placeholder="이름"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <Form.Control
              type="text"
              placeholder="계좌번호"
              value={accountNumber}
              onChange={(event) => setAccountNumber(event.target.value)}
            />
          </div>
          <div
            className="form-group d-flex gap-2 mb-3"
            style={{ height: "38px" }}
          >
            <Form.Control
              as="select"
              value={bank}
              onChange={(event) => setBank(event.target.value)}
            >
              <option value="">은행</option>
              <option value="branch1">국민은행</option>
              <option value="branch2">우리은행</option>
              <option value="branch3">농협</option>
            </Form.Control>

            <Form.Control
              as="select"
              value={branch}
              onChange={(event) => setBranch(event.target.value)}
            >
              <option value="">지점</option>
              <option value="branch1">강남점</option>
              <option value="branch2">강북점</option>
              <option value="branch3">삼성점</option>
            </Form.Control>
          </div>

          <Form.Group controlId="formAgree" className="mb-3">
            <Form.Check
              type="checkbox"
              label={
                <p>
                  PISCO 계정 이외의 다른 계정에 사용되지 않는 강력하고 고유한
                  암호를 지정했음을 확인합니다.
                </p>
              }
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={!isChecked}
            className="w-100 mb-3"
          >
            회원가입
          </Button>
          <div style={style.signupBottom}>
            <div className="d-flex">
              <p>이미 존재하는 계정이 있습니까?</p>
              <Link to="/login">로그인</Link>
            </div>
            <div className="d-flex">
              <p>
                PISCO에 가입하면 귀하는 당사의 이용약관에 동의하는 것입니다.
              </p>
              <Link>이용약관</Link>
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;
