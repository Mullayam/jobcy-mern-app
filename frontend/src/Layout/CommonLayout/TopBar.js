import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  DropdownToggle,
  Input,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label
} from "reactstrap";
import { Link } from "react-router-dom";

//import images
import flagUs from "../../assets/images/flags/us.jpg";
 

const TopBar = () => {
  const iconTobar = [
    {
      id: 1,
      classname: "uil uil-whatsapp"
    },
    {
      id: 2,
      classname: "uil uil-facebook-messenger-alt"
    },
    {
      id: 3,
      classname: "uil uil-instagram"
    },
    {
      id: 4,
      classname: "uil uil-envelope"
    },
    {
      id: 5,
      classname: "uil uil-twitter-alt"
    }
  ];
  //Language Dropdown
  
  //Signup Modal
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);

  return (
    <React.Fragment>
      <div className="top-bar" style={{ zIndex: 1030 }}>
        <Container fluid className="custom-container">
          <Row className="g-0 align-items-center">
            <Col md={7}>
              <ul className="list-inline mb-0 text-center text-md-start">
                <li className="list-inline-item">
                  <p className="fs-13 mb-0">
                    {" "}
                    <i className="mdi mdi-map-marker"></i> Your Location:{" "}
                    <Link to="#" className="text-dark">
                      New Caledonia
                    </Link>
                  </p>
                </li>
                <li className="list-inline-item">
                  <ul className="topbar-social-menu list-inline mb-0">
                    {(iconTobar || []).map((icon, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link to="/" className="social-link">
                          <i className={icon.classname}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </Col>

            <Col md={5}>
              <ul className="list-inline mb-0 text-center text-md-end">
                <li className="list-inline-item py-2 me-2 align-middle">
                  <span
                    onClick={openModal}
                    role="button"
                    className="text-dark fw-medium fs-13"
                  >
                    <i className="uil uil-lock"></i>
                    Sign Up
                  </span>
                  <Modal
                    isOpen={modal}
                    toggle={openModal}
                    role="dialog"
                    centered
                  >
                    <ModalBody className="p-5">
                      <div className="position-absolute end-0 top-0 p-3">
                        <button
                          type="button"
                          className="btn-close"
                          onClick={openModal}
                        ></button>
                      </div>
                      <div className="auth-content">
                        <div className="w-100">
                          <div className="text-center mb-4">
                            <h5>Sign Up</h5>
                            <p className="text-muted">
                              Sign Up and get access to all the features of
                              Jobcy
                            </p>
                          </div>
                          <Form action="#" className="auth-form">
                            <FormGroup className="mb-3">
                              <Label
                                htmlFor="usernameInput"
                                className="form-label"
                              >
                                Username
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="usernameInput"
                                placeholder="Enter your username"
                              />
                            </FormGroup>
                            <FormGroup className="mb-3">
                              <Label
                                htmlFor="emailInput"
                                className="form-label"
                              >
                                Email
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="Enter your email"
                              />
                            </FormGroup>
                            <FormGroup className="mb-3">
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
                                placeholder="Password"
                              />
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <div className="form-check">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="flexCheckDefault"
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                >
                                  I agree to the{" "}
                                  <Link
                                    to="/"
                                    className="text-primary form-text text-decoration-underline"
                                  >
                                    Terms and conditions
                                  </Link>
                                </Label>
                              </div>
                            </FormGroup>
                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-primary w-100"
                              >
                                Sign Up
                              </button>
                            </div>
                          </Form>
                          <div className="mt-3 text-center">
                            <p className="mb-0">
                              Already a member ?{" "}
                              <Link
                                to="/signin"
                                className="form-text text-primary text-decoration-underline"
                              >
                                {" "}
                                Sign-in{" "}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </ModalBody>
                  </Modal>
                </li>
                <li className="list-inline-item align-middle">
                <DropdownToggle tag="button" type="button" className="btn">
                      <img src={flagUs} alt="india_flag" height="16" />
                    </DropdownToggle>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
