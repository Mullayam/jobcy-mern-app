import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Modal, ModalBody, Row } from "reactstrap";
import Pagination from "../../Jobs/JobList/Pagination";
import { slugify } from "../../../Helpers";
import { AddOrRemoveBookmarkedJob } from "../../../Apis/apiCore";
import { toast } from "react-toastify";
import NoJobFound from "../../../components/NoJobFound";
//Import Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";

const BookmarkJobListing = ({ jobListing }) => {
  //Delete Modal
  const [deleteBookmarkId, setDeleteBookmarkId] = useState(null);
  const [modal, setModal] = useState(false);
  const openModal = (jobId) => {
    setModal(!modal);
    setDeleteBookmarkId(jobId);
  };
  const handleRemoveFromBookmarks = async () => {    
    const { data } = await AddOrRemoveBookmarkedJob({
      jobId: deleteBookmarkId,
      action: 0,
    });
    setModal(!modal)
    if (data.success) {
      return toast.success(data.message);
    }
    return toast.error(data.message);
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          {
         jobListing.length ? jobListing.map((jobListingDetails, key) => (
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
                      alt={slugify(jobListingDetails.job_title)}
                      className="img-fluid rounded-3"
                    />
                  </Link>
                </Col>

                <Col lg={9}>
                  <div className="mt-3 mt-lg-0">
                    <h5 className="fs-17 mb-1">
                      <Link
                        to={`/jobdetails/${slugify(
                          jobListingDetails.job_title
                        )}-${jobListingDetails.jobID}`}
                        className="text-dark"
                      >
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
                        <p className="text-muted badge bg-success-subtle text-success fs-13 mt-1 mx-1 mb-0">
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

                <Col lg={2} className="align-self-center">
                  <ul className="list-inline mt-3 mb-0">
                    <li
                      className="list-inline-item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View More"
                    >
                      <Link
                        to={`/jobdetails/${slugify(
                          jobListingDetails.job_title
                        )}-${jobListingDetails.jobID}`}
                        className="avatar-sm bg-success-subtle text-success d-inline-block text-center rounded-circle fs-18"
                      >
                        <i className="mdi mdi-eye"></i>
                      </Link>
                    </li>
                    <li
                      className="list-inline-item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                    >
                      <Link
                        onClick={() => {
                          openModal(jobListingDetails.jobID);
                        }}
                        to="#"
                        className="avatar-sm bg-danger-subtle text-danger d-inline-block text-center rounded-circle fs-18"
                      >
                        <i className="uil uil-trash-alt"></i>
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
          </Card>
        )):<NoJobFound />
          }
        </Col>
        {jobListing.length >8 && (
          <Pagination />
        )}
      </Row>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered>
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Remove this Job From Bookmarks ?
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
                  you sure you want to remove from bookmarks ?
                </h6>
                <p className="text-muted">
                  This jobs will be permenently removed from Your Bookmark
                  Section
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
              <button
                onClick={handleRemoveFromBookmarks}
                className="btn btn-danger btn-sm"
              >
                Yes, delete
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookmarkJobListing;
