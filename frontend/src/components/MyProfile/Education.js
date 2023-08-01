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
} from "reactstrap";
import Select from "react-select";
import { toast } from "react-toastify";
import { UpdateMemberEducation } from "../../Apis/apiCore";
function Education({ user_id }) {
  const [modal, setModal] = useState(false);
  const [gradeSystem, setGradeSystem] = useState("");
  const openModal = () => setModal(!modal);

  function tog_modal() {
    setModal(!modal);
  }

  const handleAddNewEducation = async () => {
    const DataObj = {
      user_id,
      education: document.getElementById("education").value,
      instituteName: document.getElementById("instituteName").value,
      courseName: document.getElementById("courseName").value,
      courseType: document.getElementById("courseType").value,
      specialization: document.getElementById("specialization").value,
      duration: document.getElementById("duration").value,
      gradeSystem,
    };

    const { data } = await UpdateMemberEducation(DataObj);
    if (data.success) {
      openModal()
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
            Add New Education
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
                      <span className="text-dark">Education Title</span>
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
            </CardBody>
          </Card>
        </div>
      </Card>
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
                Add New Education
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
                        <label htmlFor="fullname" className="form-label">
                          Education
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          id="education"
                          placeholder="10th,12th,Graduation,PG, PHD"
                        />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-3">
                        <label htmlFor="instituteName" className="form-label">
                          University/Insititute Name
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          id="instituteName"
                          placeholder="University Name"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="courseName" className="form-label">
                          Course
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="courseName"
                          placeholder="B.Tech/B.E/B.Sc/B.A/M.Sc etc"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="courseType" className="form-label">
                          Course Type
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="courseType"
                          placeholder="Regular/Full Time"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="mt-4">
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <label htmlFor="specialization" className="form-label">
                          Specialization
                        </label>
                        <Input
                          className="form-control"
                          type="text"
                          id="specialization"
                          placeholder="Subjects,Language,etc"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="mt-4">
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="duration" className="form-label">
                          Course Duration
                        </Label>
                        <Input
                          type="month"
                          className="form-control"
                          id="duration"
                          to="https://www.facebook.com"
                        />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="gradeSystem" className="form-label">
                          Grading System
                        </Label>
                        <Select
                          id="gradeSystem"
                          defaultValue={{ label: "Grade", value: "Grade" }}
                          options={[
                            { label: "CGPA", value: "CGPA" },
                            { label: "Only Pass", value: "Only Pass" },
                            { label: "Percentage", value: "Percentage" },
                          ]}
                          onChange={(n) => setGradeSystem(n.value)}
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
                onClick={handleAddNewEducation}
                className="btn btn-primary waves-effect waves-light"
              >
                Save changes
              </button>
            </ModalFooter>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
}

export default Education;
