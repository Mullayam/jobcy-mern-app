import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  DropdownToggle,
  Modal,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuthContext";

//import images
import flagUs from "../../assets/images/flags/us.jpg";
import ModalSignUp from "./ModalSignUp";

const TopBar = () => {
  const {Auth} = useAuth();
  
  const iconTobar = [
    {
      id: 1,
      classname: "uil uil-whatsapp",
    },
    {
      id: 2,
      classname: "uil uil-facebook-messenger-alt",
    },
    {
      id: 3,
      classname: "uil uil-instagram",
    },
    {
      id: 4,
      classname: "uil uil-envelope",
    },
    {
      id: 5,
      classname: "uil uil-twitter-alt",
    },
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
                    <i className="mdi mdi-map-marker"></i> Your Location: 
                    <Link to="#" className="text-dark">
                     {Auth.location}
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
                {Auth.isLoggedIn ? null : (
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
                        <ModalSignUp />
                      </ModalBody>
                    </Modal>
                  </li>
                )}
                <li className="list-inline-item align-middle">
                <img src={flagUs} alt="india_flag" height="16" />
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
