import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Modal, ModalBody, Row } from "reactstrap";
import { slugify } from "../../../Helpers";
import Pagination from "../../Jobs/JobList/Pagination";
import { toast } from "react-toastify";

//Import Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import { DeleteJobPostedByMember } from "../../../Apis/apiCore";

const JobListing = ({ jobList }) => {
  //Delete Modal
  const [deleteJobId, setDeleteJobId] = useState(null);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
    setDeleteJobId(null);
  };
  const handleDelete = async () => {
    const { data } = await DeleteJobPostedByMember(deleteJobId);
    if (data.success) {
      return toast.success(data.success);
    }
    return toast.error(data.success);
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          {jobList.map((jobListingDetails, key) => (
            <Card className="job-box card mt-4" key={key}>
              <CardBody className="p-4">
                <Row>
                  <Col lg={1}>
                    <Link
                      to={`/companydetails/${slugify(
                        `${jobListingDetails.name}`
                      )}-${jobListingDetails.cid}`}
                    >
                      <img
                        src={jobImage1}
                        alt="logo"
                        className="img-fluid rounded-3"
                      />
                    </Link>
                  </Col>

                  <Col lg={8}>
                    <div className="mt-3 mt-lg-0">
                      <h5 className="fs-17 mb-1">
                        <Link to={`/jobdetails/${slugify(jobListingDetails.job_title)}-${jobListingDetails.jobID}`} className="text-dark">
                          {jobListingDetails.job_title}
                        </Link>
                      </h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">
                            {jobListingDetails.name}
                          </p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">
                            <i className="mdi mdi-map-marker"></i>{" "}
                            {jobListingDetails.job_location}
                          </p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-13 mb-0 badge bg-success-subtle text-success mt-1 mx-1">
                            <i className="uil uil-wallet"></i>{" "}
                            {jobListingDetails.offered_salary}
                          </p>
                        </li>
                      </ul>
                      <div className="mt-2">
                        <span
                        // className={
                        //   jobListingDetails.fullTime === true
                        //     ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                        //     : jobListingDetails.partTime === true
                        //     ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                        //     : jobListingDetails.freeLance === true
                        //     ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                        //     : jobListingDetails.internship === true
                        //     ? "badge bg-blue-subtle text-blue fs-13 mt-1"
                        //     : ""
                        // }
                        >
                          {jobListingDetails.job_type}
                        </span>
                        {/* {(jobListingDetails.badges || []).map(
                          (badgeInner, key) => (
                            <span
                              className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                              key={key}
                            >
                              {badgeInner.badgeName}
                            </span>
                          )
                        )} */}
                      </div>
                    </div>
                  </Col>

                  <Col lg={3} className="align-self-center">
                    <ul className="list-end mt-3 mb-0">
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <Link
                          to={`/bookmarkjobpost/${slugify(jobListingDetails.job_title)}-${jobListingDetails.jobID}?edit=true`}
                          className="avatar-sm bg-success-subtle text-success d-inline-block text-center rounded-circle fs-18"
                        >
                          <i className="uil uil-edit"></i>
                        </Link>
                      </li>
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <span
                        role="button"
                          onClick={() => {
                            openModal();
                            setDeleteJobId(jobListingDetails.jobID);
                          }}
                         
                          className="avatar-sm bg-danger-subtle text-danger d-inline-block text-center rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </span>
                      </li>
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Total Applicants"
                      >
                        <Link
                        to={`/candidatelist/${slugify(jobListingDetails.name)}-${jobListingDetails.jobID}?jobApplicants=true`}
                          role="button"                         
                          className="avatar-sm bg-info-subtle text-danger d-inline-block text-center rounded-circle fs-18"
                        >
                          {jobListingDetails.total_applicants}
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Col>
        <Pagination />
      </Row>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Delete Jobs ?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={openModal}
              ></button>
            </div>
            <ModalBody>
              <div>
                <h6 className="text-danger">
                  <i className="uil uil-exclamation-triangle"></i> Warning: Are
                  you sure you want to delete job Post ?
                </h6>
                <p className="text-muted">
                  {" "}
                  Your jobs post will be permenently removed and you won't be
                  able to see them again, including the once you're shared with
                  your friends.
                </p>
              </div>
            </ModalBody>
            <div className="modal-footer">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-primary btn-sm"
              >
                Cancel
              </button>
              <button onClick={handleDelete} className="btn btn-danger btn-sm">
                Yes, delete
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobListing;
