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
import { UpdateMemberExperiences } from "../../Apis/apiCore";
import { toast } from "react-toastify";

function Employement({ user_id }) {
  let timer;
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  function tog_modal() {
    setModal(!modal);
  }

  const showCompanyList = (e) => {
    let input = document.getElementById("currentCompany").value;
    let div = document.getElementById("myCompanyDropdown");

    // timer = setTimeout(async () => {
    //   const data = await GetRegisteredCompanies({ SearchKeyword: input });
    //   console.log(data);
    // }, 1800);
  };
  const handleSubmitEmploymentUpdate = async () => {
    let error = false;
    let currentEmployment = document.getElementsByName("currentEmployment");
    let employmentType = document.getElementsByName("employmentType");

    for (let i = 0; i < currentEmployment.length; i++) {
      if (currentEmployment[i].checked)
        currentEmployment = currentEmployment[i].value;
    }
    for (let i = 0; i < employmentType.length; i++) {
      if (employmentType[i].checked) employmentType = employmentType[i].value;
    }
    const ObjDat = {
      user_id,
      currentEmployment,
      employmentType,
      totalExpereinceInYear: document.getElementById("totalExpereinceInYear")
        .value,
      totalExpereinceInMonth: document.getElementById("totalExpereinceInMonth")
        .value,
      currentCompany: document.getElementById("currentCompany").value,
      currentPosition: document.getElementById("currentPosition").value,
      joiningDate: document.getElementById("joiningDate").value,      
      currentSalary: document.getElementById("currentSalary").value,
      skills: document.getElementById("skills").value,
      jobProfile: document.getElementById("jobProfile").value,
    };

    Object.keys(ObjDat).map((value,i) => {
      
      if (ObjDat[value] === "") {
        document.getElementById(`${value}`).focus();
        error = true;
        return error;
      }
      return error;
    });

    if (error) {
      return toast.error("All Fields are Required");
    }
    const { data } = await UpdateMemberExperiences({...ObjDat,endingDate: document.getElementById("endingDate").value});

    if (data.success) {
      openModal()
      return toast.success(data.message);
    }
    return toast.error(data.message);
  };
  React.useEffect(() => {
    clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <Card id="modals">
        <div className="p-4 border-bottom">
          <button
            onClick={openModal}
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Add New Employement/Experiences
          </button>
        </div>
        <div className="px-2 mb-2">
          <Card className="job-box card mt-2">
            <CardBody className="p-4">
              <Row>
                <Col lg={10}>
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
        className="modal modal-lg fade g"
        tabIndex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <Modal isOpen={modal} toggle={openModal} role="dialog" centered>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mt-0" id="myModalLabel">
                Add New Employement
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
                      <div>
                        <label
                          htmlFor="currentEmployment"
                          className="form-label"
                        >
                          Is this your current employment?
                        </label>
                        <div className="inline mb-3">
                          <FormGroup check inline>
                            <Input
                              type="radio"
                              value="yes"
                              name="currentEmployment"
                            />
                            <Label check>Yes</Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Input
                              type="radio"
                              value="no"
                              name="currentEmployment"
                            />
                            <Label check>No</Label>
                          </FormGroup>
                        </div>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="employmentType" className="form-label">
                          Employment type
                        </label>
                        <div className="inline mb-3">
                          <FormGroup check inline>
                            <Input
                              type="radio"
                              name="employmentType"
                              id="employmentType"
                              value="Full Time"
                            />
                            <Label check>Full Time</Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Input
                              type="radio"
                              name="employmentType"
                              id="employmentType"
                              value="Internship"
                            />
                            <Label check>Internship</Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Input
                              type="radio"
                              name="employmentType"
                              id="employmentType"
                              value="Part Time"
                            />
                            <Label check>Part Time</Label>
                          </FormGroup>
                        </div>
                      </div>
                    </Col>
                    <h6 className="fs-17 fw-semibold mb-3">Total experience</h6>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label
                          htmlFor="totalExpereinceInYear"
                          className="form-label"
                        >
                          Year
                        </Label>
                        <Input
                          type="number"
                        
                          className="form-control"
                          id="totalExpereinceInYear"
                          defaultValue={0}
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label
                          htmlFor="totalExpereinceInMonth"
                          className="form-label"
                        >
                          Months
                        </Label>
                        <Input
                          type="number"
                          defaultValue={1}
                          min={1}
                          max={12}
                          className="form-control"
                          id="totalExpereinceInMonth"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <div id="myCompanyDropdown">
                          <Label
                            htmlFor="currentCompany"
                            className="form-label"
                          >
                            Current Company
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="currentCompany"
                            placeholder="Company Name where are you working/worked, N/A for none"
                            onChange={showCompanyList}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="currentPosition" className="form-label">
                          Current Designation
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="currentPosition"
                          placeholder="Jr Web Deb,Ui/Ux Designer,Marketig Analyst etc"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3">Joining date</h5>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="joiningDate" className="form-label">
                          Starting month
                        </Label>
                        <Input
                          type="month"
                          className="form-control"
                          id="joiningDate"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="endingDate" className="form-label">
                          Ending Year
                        </Label>
                        <Input
                          type="month"
                          className="form-control"
                          id="endingDate"
                        />
                        <small className="text-muted">
                          Leave empty if currently working
                        </small>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="currentSalary" className="form-label">
                          Current salary
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="currentSalary"
                          placeholder="In L.P.A (3.5LPA)"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="skills" className="form-label">
                          Skills used
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="skills"
                          placeholder="Technologies used in the job, sperated by comma "
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Job profile
                        </Label>
                        <textarea
                          className="form-control"
                          rows="5"
                          id="jobProfile"
                          placeholder="Describe your role and job profile requirements what you do/did on that position. N/A for none"
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
    </React.Fragment>
  );
}

export default Employement;
