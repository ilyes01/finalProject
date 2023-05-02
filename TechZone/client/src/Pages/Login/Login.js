import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../JS/Actions/user";
import "./Login.css";
import eye from "./eye.png";
import hide from "./hide.png";
import { Helmet } from "react-helmet";
import { loginAdmin } from "../../JS/Actions/admin";

const Login = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user)) && dispatch(loginAdmin(admin));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>connect</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="Login">connect</h1>
      {isAuth ? (
        navigate("/")
      ) : isAuthAdmin ? (
        navigate("/")
      ) : (
        <div className="cadre2">
          <div className="cadre">
            <Form onSubmit={handleUser}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="forms">e-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                We will never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="forms"> password</Form.Label>
                <div>
                  {passwordShown ? (
                    <img
                      src={hide}
                      onClick={togglePassword}
                      className="eye"
                      alt="show"
                    />
                  ) : (
                    <img
                      src={eye}
                      onClick={togglePassword}
                      className="eye"
                      alt="hide"
                    />
                  )}

                  <Form.Control
                    type={passwordShown ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
              <Button className="bouton" variant="light" type="submit">
                <span className="boutontext" onClick={handleUser}>
                  connect
                </span>
              </Button>
              <hr />
              <Button variant="primary" href="/accountCreate">
                <span className="boutontext">Don't have an account? Create one</span>
              </Button>{" "}
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
