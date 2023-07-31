import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import jobImages2 from "../../../assets/images/featured-job/img-02.png";
import { FormatDate, FromNowDate, slugify } from "../../../Helpers";
import ApplyForJobModal from "../../../components/ApplyForJobModal";
import { AddOrRemoveBookmarkedJob } from "../../../Apis/apiCore";
import { toast } from "react-toastify";
import { useAuth } from "../../../Hooks/useAuthContext";
const RightSideContent = ({ currentJob }) => {
  const {
    Auth: { user },
  } = useAuth();
  const [modal, setModal] = useState(false);
  const [successMsg, setSuccessMsg] = React.useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const openModal = () => setModal(!modal);
  const handleAddBookmarks = async () => {
    const newValue = !bookmarked;
    setBookmarked(newValue);
    const { data } = await AddOrRemoveBookmarkedJob({
      userId: user.user_id,
      jobId: currentJob.jobID,
      action: newValue,
    });
    if (data.success) {
      toast.success(data.message);
      return setBookmarked(newValue);
    }
    toast.error(data.message);
  };
  React.useEffect(() => {
    if (currentJob.is_applied === 1) {
      setSuccessMsg(true);
    }
  }, [handleAddBookmarks]);

  return (
    <React.Fragment>
      <div className="side-bar ms-lg-4">
        <Card className="job-overview">
          <CardBody className="p-4">
            <h6 className="fs-17">Job Overview</h6>
            <ul className="list-unstyled mt-4 mb-0">
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-user icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Job Title</h6>
                    <p className="text-muted mb-0">{currentJob.job_title}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Experience</h6>
                    <p className="text-muted mb-0"> {currentJob.min_exp}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Location</h6>
                    <p className="text-muted mb-0">
                      {" "}
                      {currentJob.job_location}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Offered Salary</h6>
                    <p className="text-muted mb-0">
                      {currentJob.offered_salary}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Qualification</h6>
                    <p className="text-muted mb-0">Bachelor Degree</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-building icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Industry</h6>
                    <p className="text-muted mb-0">
                      {currentJob.industry_type}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-history icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Date Posted</h6>
                    <p className="text-muted mb-0">
                      {FromNowDate(currentJob.posted_on)}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-3">
              <span
                onClick={openModal}
                className="btn btn-primary btn-hover w-100 mt-2"
              >
                {successMsg ? (
                  "Applied"
                ) : (
                  <>
                    {" "}
                    Apply Now <i className="uil uil-arrow-right"></i>
                  </>
                )}
              </span>
              <span
                onClick={handleAddBookmarks}
                className="btn btn-soft-warning btn-hover w-100 mt-2"
              >
                <i className="uil uil-bookmark"></i>
                {bookmarked ? "UnBookmarked" : "Add Bookmark"}
              </span>
            </div>
          </CardBody>
        </Card>

        <Card className="company-profile mt-4">
          <CardBody className="p-4">
            <div className="text-center">
              <img src={jobImages2} alt="" className="img-fluid rounded-3" />

              <div className="mt-4">
                <h6 className="fs-17 mb-1">Jobcy Technology Pvt.Ltd</h6>
                <p className="text-muted">
                  Since{" "}
                  {FormatDate(currentJob.established_on) || "Not Available"}{" "}
                </p>
              </div>
            </div>
            <ul className="list-unstyled mt-4">
              <li>
                <div className="d-flex">
                  <i className="uil uil-phone-volume text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Phone</h6>
                    <p className="text-muted fs-14 mb-0">+589 560 56555</p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-envelope text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Email</h6>
                    <p className="text-muted fs-14 mb-0">
                      pixltechnology@info.com
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-globe text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Website</h6>
                    <p className="text-muted fs-14 text-break mb-0">
                      {currentJob.website || "Not Avaiable"}
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-map-marker text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Location</h6>
                    <p className="text-muted fs-14 mb-0">
                      {currentJob.location}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to={`/companydetails/${slugify(`${currentJob.name}`)}-${
                  currentJob.cid
                }`}
                className="btn btn-primary btn-hover w-100 rounded"
              >
                <i className="mdi mdi-eye"></i> View Profile
              </Link>
            </div>
          </CardBody>
        </Card>

        <div className="mt-4">
          <h6 className="fs-16 mb-3">Job location</h6>
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin"
            style={{ width: `100%`, height: `250` }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <ApplyForJobModal
          data={{
            job_id: currentJob.jobID,
            pid: currentJob.pid,
            cid: currentJob.cid,
            modal,
            openModal,
            successMsg,
            setSuccessMsg,
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default RightSideContent;
