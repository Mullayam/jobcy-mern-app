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
import { UpdateMemberProjects } from "../../Apis/apiCore";
import { toast } from "react-toastify";

function Projects({user_id}) {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  function tog_modal() {
    setModal(!modal);
  }

  const handleSubmitEmploymentUpdate = async () => {
    
    let projectStatus = document.getElementsByName("projectStatus");

    for (let i = 0; i < projectStatus.length; i++) {
      if (projectStatus[i].checked) projectStatus = projectStatus[i].value;
    }

    const ObjDat = {
      user_id,
      projectStatus,
      projectTitle: document.getElementById("projectTitle").value,
      projectType: document.getElementById("projectType").value,
      projectFor: document.getElementById("projectFor").value,
      startWorkingFrom: document.getElementById("startWorkingFrom").value,
      detailsOfProject: document.getElementById("detailsOfProject").value,
      teamSize: document.getElementById("teamSize").value,
      role: document.getElementById("role").value,
      roleDescription: document.getElementById("roleDescription").value,
      skillsUsed: document.getElementById("skillsUsed").value,
      projectLink: document.getElementById("roleDescription").value,
    };

    if (
      ObjDat.projectTitle === "" ||
      ObjDat.projectStatus === "" ||
      ObjDat.skillsUsed === "" ||
      ObjDat.startWorkingFrom === ""
    ) {
      return toast.error("All Fields are Required");
    }
    const { data } = await UpdateMemberProjects(ObjDat);

    if (data.success) {
      openModal();
      return toast.success(data.message);
    }
    return toast.error(data.message);
  };

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
                      <span className="text-dark">Projects Title </span>
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
                                  htmlFor="projectTitle"
                                  className="form-label fw-semibold"
                                >
                                  Project title <small className="text-danger">*</small>
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="projectTitle"
                                  placeholder="Project Title"
                                />
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="projectType"
                                  className="form-label fw-semibold"
                                >
                                  Tag this project with your
                                  employment/education
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="projectType"
                                  defaultValue={"Personal"}
                                />
                                <small className="text-muted">
                                  Please Enter if Project for Organization else
                                  Personal is default
                                </small>
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="projectFor"
                                  className="form-label fw-semibold"
                                >
                                  Client
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="projectFor"
                                  defaultValue={"Personal"}
                                />
                                <small className="text-muted">
                                  Enter Project purpose
                                  Clien/Personal/Freelance/other please mention
                                  it
                                </small>
                              </div>
                            </Col>
                            <h5 className="fs-14 fw-semibold mb-3">
                              Project status <small className="text-danger">*</small>
                            </h5>

                            <div className="inline mb-3">
                              <FormGroup check inline>
                                <Input
                                  type="radio"
                                  name="projectStatus"
                                  defaultValue="In Progress"
                                />
                                <Label check>In Progress</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                <Input
                                  type="radio"
                                  name="projectStatus"
                                  defaultValue="Finished"
                                />
                                <Label check>Finished</Label>
                              </FormGroup>
                            </div>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="startWorkingFrom"
                                  className="form-label"
                                >
                                  Start Working From <small className="text-danger">*</small>
                                </Label>
                                <Input
                                  type="month"
                                  className="form-control"
                                  id="startWorkingFrom"
                                />
                              </div>
                            </Col>

                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="detailsOfProject"
                                  className="form-label"
                                >
                                  Details of project
                                </Label>
                                <textarea
                                  className="form-control"
                                  rows="5"
                                  defaultValue=""
                                  placeholder="Technologies/Tech Stack used/ Purpose of Project etc"
                                  id="detailsOfProject"
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
                                  defaultValue={1}
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
                                  defaultValue=""
                                  placeholder="Project Lead, Developer,Tester etc"
                                />
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="roleDescription"
                                  className="form-label"
                                >
                                  Role Description
                                </Label>
                                <textarea
                                  className="form-control"
                                  rows="5"
                                  defaultValue=""
                                  id="roleDescription"
                                  placeholder="Decsribe Your role in this project (Optional)"
                                />
                              </div>
                            </Col>

                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="skillsUsed"
                                  className="form-label"
                                >
                                  Skills Used <small className="text-danger">*</small>
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="skillsUsed"
                                  defaultValue=""
                                />
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label
                                  htmlFor="projectLink"
                                  className="form-label"
                                >
                                  Project Link{" "}
                                  <small className="text-muted">(if any)</small>
                                </Label>
                                <Input
                                  type="text"
                                  defaultValue=""
                                  className="form-control"
                                  id="projectLink"
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
                       onClick={handleSubmitEmploymentUpdate}
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
