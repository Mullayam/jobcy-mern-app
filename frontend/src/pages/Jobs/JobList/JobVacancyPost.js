import React, { useState } from "react";
import { Col, Row, Modal, ModalBody, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { FromNowDate, slugify } from "../../../Helpers";
import { toast } from "react-toastify";
import { AddOrRemoveBookmarkedJob } from "../../../Apis/apiCore";
const ids = new Set();
const JobVacancyPost2 = ({ jobs }) => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  const [bookmark, setBookmark] = useState(ids);
  const handlebookmarkedJobs = async(id) => {
    if (ids.has(id)) {
      return toast.error("Already bookmarked");
    }
      ids.add(id);
     console.log(ids.entries())
    await AddOrRemoveBookmarkedJob(ids)
    return toast.success("Job is Bookmarked");
  };
  // const jobVacancyPost2 = [
  //   {

  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-warning-subtle text-warning",
  //         badgeName: "Urgent"
  //       },
  //       {
  //         id: 2,
  //         badgeclassName: "bg-info-subtle text-info",
  //         badgeName: "Private"
  //       }
  //     ]
  //   },
  //   {

  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-info-subtle text-info",
  //         badgeName: "Private"
  //       }
  //     ]
  //   },
  //   {

  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-blue-subtle text-blue",
  //         badgeName: "Internship"
  //       }
  //     ]
  //   },
  //   {

  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-info-subtle text-info",
  //         badgeName: "Private"
  //       }
  //     ]
  //   },
  //   {

  //   },
  //   {

  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-warning-subtle text-warning",
  //         badgeName: "Urgent"
  //       },
  //       {
  //         id: 2,
  //         badgeclassName: "bg-info-subtle text-info",
  //         badgeName: "Private"
  //       }
  //     ]
  //   },
  //   {

  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-warning-subtle text-warning",
  //         badgeName: "Urgent"
  //       },
  //       {
  //         id: 2,
  //         badgeclassName: "bg-info-subtle text-info",
  //         badgeName: "Private"
  //       }
  //     ]
  //   },
  //   {

  //     badges: [
  //       {
  //         id: 1,
  //         badgeclassName: "bg-warning-subtle text-warning",
  //         badgeName: "Urgent"
  //       }
  //     ]
  //   }
  // ];
  return (
    <React.Fragment>
      {jobs.length > 0
        ? jobs.map((job, key) => (
            <div
              key={key}
              className={
                job.id ? "job-box bookmark-post card mt-4" : "job-box card mt-4"
              }
            >
              {/* <div className="bookmark-label text-center">
                <Link
                  href=""
                  className="align-middle text-white"
                >
                  <i className="mdi mdi-star"></i>
                </Link>
              </div> */}
              <div className="p-4">
                <Row>
                  <Col lg={1}>
                    <Link
                      to={`/companydetails/${slugify(job.company_name)}-${
                        job.cid
                      }`}
                    >
                      <img
                        src={`../../../assets/images/featured-job/${job.logo}`}
                        alt={job.logo}
                        className="img-fluid rounded-3"
                      />
                    </Link>
                  </Col>
                  <Col lg={10}>
                    <div className="mt-3 mt-lg-0">
                      <h5 className="fs-17 mb-1">
                        <Link
                          to={`/jobdetails/${slugify(job.job_title)}-${job.id}`}
                          className="text-dark"
                        >
                          {job.job_title}
                        </Link>
                        <small className="text-muted fw-normal mx-1">
                          ({job.min_exp})
                        </small>
                      </h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">
                            {job.company_name}
                          </p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">
                            <i className="mdi mdi-map-marker"></i>
                            {job.job_location}
                          </p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">
                            <i className="uil uil-wallet"></i>{" "}
                            {job.offered_salary}
                          </p>
                        </li>
                      </ul>
                      <div className="mt-2">
                        <span
                          className={
                            `badge bg-blue-subtle text-blue fs-13 mt-1`
                            // + jobVacancyList2Details.fullTime === true
                            //     ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                            //     : jobVacancyList2Details.partTime === true
                            //     ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                            //     : jobVacancyList2Details.freeLance === true
                            //     ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                            //     : jobVacancyList2Details.internship === true
                            //     ? "badge bg-blue-subtle text-blue fs-13 mt-1"
                            //     : ""
                          }
                        >
                          {job.job_type}
                        </span>
                        {/* {(jobVacancyList2Details.badges || []).map(
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
                </Row>
                <div
                  className={`favorite-icon ${
                    ids.has(job.id) === true ? "bg-danger" : "bg-primary"
                  } text-white rounded px-2 `}
                  style={{ cursor: "pointer" }}
                >
                  <span onClick={() => handlebookmarkedJobs(job.id)}>
                    <i className="uil uil-heart-alt fs-18"></i>
                  </span>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="row justify-content-between">
                  <Col md={8}>
                    <div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <i className="uil uil-tag"></i> Keywords :
                        </li>
                        <li className="list-inline-item" key={key}>
                          <Link to="#" className="primary-link text-muted">
                            {job.keywords}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="text-md-end">
                      <Link
                        to="#applyNow"
                        onClick={openModal}
                        className="primary-link"
                      >
                        {FromNowDate(job.posted_on)}
                      </Link>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
          ))
        : "No Jobs Found"}
      <div
        className="modal fade"
        id="applyNow"
        tabIndex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered>
            <ModalBody className="modal-body p-5">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Apply For This Job
                </h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="mb-3">
                <Label for="nameControlInput" className="form-label">
                  Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="nameControlInput"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <Label for="emailControlInput2" className="form-label">
                  Email Address
                </Label>
                <Input
                  type="email"
                  className="form-control"
                  id="emailControlInput2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <Label for="messageControlTextarea" className="form-label">
                  Message
                </Label>
                <textarea
                  className="form-control"
                  id="messageControlTextarea"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="mb-4">
                <Label className="form-label" for="inputGroupFile01">
                  Resume Upload
                </Label>
                <Input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Application
              </button>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobVacancyPost2;
