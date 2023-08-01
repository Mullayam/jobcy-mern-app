import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from "reactstrap";

function Projects() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  function tog_modal() {
    setModal(!modal);
  }
  return (
    <React.Fragment>
      <Card id="modals">
        <div className="p-4 border-bottom">
          <button
            onClick={openModal}
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Add New Project
          </button>
        </div>
        <div className="px-2 mb-2">
          <Card className="job-box card mt-2">
            <CardBody className="p-4">
              <Row>
                <Col lg={1}></Col>

                <Col lg={9}>
                  <div className="mt-3 mt-lg-0">
                    <h5 className="fs-17 mb-1">
                      <span className="text-dark">Projects Title</span>
                    </h5>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <p className="text-muted fs-14 mb-0">Details</p>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted fs-14 mb-0">Year</p>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted fs-13 mb-0 badge bg-success-subtle text-success mt-1 mx-1">
                          <i className="uil uil-wallet"></i> info
                        </p>
                      </li>
                    </ul>
                    <div className="mt-2">
                      <span className="badge bg-danger-subtle text-success fs-13 mt-1 mx-1">
                        extraaa
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={2} className="align-self-center">
                  <ul className="list-inline mt-3 mb-0">
                    <li
                      className="list-inline-item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit"
                    >
                      <span className="avatar-sm bg-success-subtle text-success d-inline-block text-center rounded-circle fs-18">
                        <i className="uil uil-edit"></i>
                      </span>
                    </li>
                    <li
                      className="list-inline-item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                    >
                      <span
                        onClick={() => openModal()}
                        to="#"
                        className="avatar-sm bg-danger-subtle text-danger d-inline-block text-center rounded-circle fs-18"
                      >
                        <i className="uil uil-trash-alt"></i>
                      </span>
                    </li>
                  </ul>
                </Col>
              </Row>

              <div
                id="myModal"
                className="modal fade"
                tabIndex="-1"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <Modal isOpen={modal} toggle={openModal} role="dialog" centered>
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title mt-0" id="myModalLabel">
                        Add Projects
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={openModal}
                      ></button>
                    </div>
                    <ModalBody>
                      <div>
                        <div>
                          <Row>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="title"
                                  className="form-label fw-semibold"
                                >
                                  Project title
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="title"
                                />
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="mb-3">
                                <div id="myCompanyDropdown">
                                  <Label
                                    htmlFor="currentCompany"
                                    className="form-label fw-semibold"
                                  >
                                    Tag this project with your
                                    employment/education
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="currentCompany"
                                  />
                                </div>
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="email"
                                  className="form-label fw-semibold"
                                >
                                  Client
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  readOnly
                                />
                              </div>
                            </Col>
                            <h5 className="fs-14 fw-semibold mb-3">
                              Project status
                            </h5>

                           <div className="inline mb-3">
                           <FormGroup check inline>
                              <Input type="radio" />
                              <Label check>In Progress</Label>
                            </FormGroup>
                            <FormGroup check inline>
                              <Input type="radio" />
                              <Label check>Finished</Label>
                            </FormGroup>
                           </div>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="teamSize"
                                  className="form-label"
                                >
                                  Worked from
                                </Label>
                                <Input
                                  type="month"
                                  className="form-control"
                                  id="teamSize"
                                  to="https://www.facebook.com"
                                />
                              </div>
                            </Col>

                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="exampleFormControlTextarea1"
                                  className="form-label"
                                >
                                  Details of project
                                </Label>
                                <textarea
                                  className="form-control"
                                  rows="5"
                                  id="aboutme"
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>

                        <div className="mt-4">
                          <h5 className="fs-17 fw-semibold mb-3">
                            More Details
                          </h5>

                          <Row>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="teamSize"
                                  className="form-label"
                                >
                                  Team Size
                                </Label>
                                <Input
                                  type="number"
                                  className="form-control"
                                  id="teamSize"
                                  to="https://www.facebook.com"
                                />
                              </div>
                            </Col>

                            <Col lg={6}>
                              <div className="mb-3">
                                <Label htmlFor="role" className="form-label">
                                  Role
                                </Label>
                                <Input
                                  type="year"
                                  className="form-control"
                                  id="role"
                                  to="https://www.twitter.com"
                                />
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="roleDescription"
                                  className="form-label"
                                >
                                  Details of project
                                </Label>
                                <textarea
                                  className="form-control"
                                  rows="5"
                                  id="roleDescription"
                                />
                              </div>
                            </Col>

                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="skillsUsed"
                                  className="form-label"
                                >
                                  Skills Used
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="skillsUsed"
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <button
                        type="button"
                        onClick={() => {
                          tog_modal();
                        }}
                        className="btn btn-secondary waves-effect"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Save changes
                      </button>
                    </ModalFooter>
                  </div>
                </Modal>
              </div>
            </CardBody>
          </Card>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default Projects;
