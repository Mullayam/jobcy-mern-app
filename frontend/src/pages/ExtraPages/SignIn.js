import React, {  useReducer, useState } from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import { toast } from "react-toastify";
//Import Image
import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/images/logo-dark.png";

import signInImage from "../../assets/images/auth/sign-in.png";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../Apis/apiCore";
import GoogleLoginButton from "../../components/Shared/GoogleLoginButton";
import { setTokenToLocalStorage } from "../../Apis/api.instance";
import { SetUser, SetisLoggedin } from "../../Store/Events";
import { AuthReducer, AuthInitialState } from "../../Store";

const SignIn = () => {
  document.title = "Sign In | Jobcy - Job Listing  ";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useNavigate();
  const [Auth, dispatch] = useReducer(AuthReducer, AuthInitialState);
   
  const handleSubmitLogin = async () => {
    if (email === "") {
      return toast.error("Please Enter Email Address");
    }
    if (password === "") {
      return toast.error("Please Enter Password");
    }

    const { data } = await Login(email, password);
    if (!data.success) {
      return toast.error(data.data.error);
    }
    toast.success(data.message);
    dispatch(SetisLoggedin(true));
    dispatch(SetUser(data.User));
    setTokenToLocalStorage(
      data.data.Token,
      data.data.RefreshToken,
      data.data.User
    );
    return redirect("/");
  }; 
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="g-0">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signInImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="w-100">
                              <div className="text-center mb-4">
                                <h5>Welcome Back !</h5>
                                <p className="text-white-70">
                                  Sign in to continue to Jobcy.
                                </p>
                              </div>
                              <div action="/" className="auth-form">
                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="Enter your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="passwordInput"
                                    className="form-label"
                                  >
                                    Password
                                  </label>
                                  <Input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                </div>
                                <div className="mb-4">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                    />
                                    <Link
                                      to="/resetpassword"
                                      className="float-end text-white"
                                    >
                                      Forgot Password?
                                    </Link>
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    className="btn btn-white btn-hover w-100"
                                    onClick={handleSubmitLogin}
                                  >
                                    Sign In
                                  </button>
                                </div>
                              </div>
                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  Don't have an account ?{" "}
                                  <Link
                                    to="/signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign Up{" "}
                                  </Link>
                                </p>
                              </div>
                              <hr />
                              <GoogleLoginButton />
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
