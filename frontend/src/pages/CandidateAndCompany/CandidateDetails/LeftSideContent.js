import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

//Import userImage
import userImage1 from "../../../assets/images/user/img-01.jpg";
import { WhatsappTemplate } from "../../../Constants";

const LeftSideContent = ({ applicant }) => {
  const Stars = ({ stars, reviews }) => {
    const starArray = Array.from({ length:parseInt(applicant?.ratings) }, (_, index) => {
      const number = index + 0.5;
      return (
        <span key={index}>
          {stars >= index + 1 ? (
            <i className="mdi mdi-star-outline"></i>
          ) : stars >= number ? (
            <i className="mdi mdi-star-half-full"></i>
          ) : (
            <i className="mdi mdi-star"></i>
          )}
        </span>
      );
    });
    return (
      <li className="list-inline-item text-warning review-rating">
        {starArray}
      </li>
    );
  };

  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="side-bar">
          <CardBody className="p-4">
            <div className="candidate-profile text-center">
              <img
                src={userImage1}
                alt=""
                className="avatar-lg rounded-circle"
              />
              <h6 className="fs-18 mb-0 mt-4">{applicant.fullname}</h6>
              <p className="text-muted mb-4">{applicant.info}</p>
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link
                    to={`${applicant?.links?.facebook}`}
                    className="social-link"
                  >
                    <i className="uil uil-facebook-f"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to={`${WhatsappTemplate(
                      applicant.links?.whatsapp,
                      applicant.fullname
                    )}`}
                    className="social-link"
                  >
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to={`${applicant?.links?.facebook}`}
                    className="social-link"
                  >
                    <i className="uil uil-linkedin-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to={`${applicant?.links?.github}`}
                    className="social-link"
                  >
                    <i className="uil uil-github-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>

          <CardBody className="candidate-profile-overview border-top p-4">
            <h6 className="fs-17 fw-semibold mb-3">Profile Overview</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex">
                  <label className="text-dark">Categories</label>
                  <div>
                    <p className="text-muted mb-0">Accounting / Finance</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Expected Salary</label>
                  <div>
                    <p className="text-muted mb-0 mx-1">
                      Rs. {applicant.expected_ctc}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Languages</label>
                  <div>
                    <p className="text-muted mb-0">
                      {applicant?.languages?.join(",")}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Experience</label>
                  <div>
                    <p className="text-muted mb-0">3 Years</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Qualification</label>
                  <div>
                    <p className="text-muted mb-0">Associate Degree</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Views</label>
                  <div>
                    <p className="text-muted mb-0">2574</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-3">
              <Link to="#" className="btn btn-danger btn-hover w-100">
                <i className="uil uil-phone"></i> Contact Me
              </Link>
              <Link
                to={`${process.env.REACT_APP_STATIC_URL}/_static/jobcy/user/profile/resumes/${applicant?.cv}`}
                target="_blank"
                className="btn btn-primary btn-hover w-100 mt-2"
              >
                <i className="uil uil-import"></i> Download CV
              </Link>
            </div>
            <ul className="list-inline d-flex justify-content-between align-items-center mb-0 mt-2">
              <Stars/>
              <li className="list-inline-item">
                <div className="favorite-icon">
                  <Link to="#">
                    <i className="uil uil-heart-alt fs-18"></i>
                  </Link>
                </div>
              </li>
            </ul>
          </CardBody>
          <CardBody className="p-4 border-top">
            <h6 className="fs-17 fw-semibold mb-3">Professional Skills</h6>
            <div className="d-flex flex-wrap align-items-start gap-1">
              {applicant?.skills?.map((item, index) => (
                <span
                  className="badge bg-success-subtle text-success fs-13 mt-1"
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          </CardBody>
          <CardBody className="candidate-contact-details p-4 border-top">
            <h6 className="fs-17 fw-semibold mb-3">Contact Details</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-envelope-alt"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Email</h6>
                    <p className="text-muted mb-0">{applicant.email}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-map-marker"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Address</h6>
                    <p className="text-muted mb-0">{applicant.email}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-phone"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Phone</h6>
                    <p className="text-muted mb-0">{applicant.phone}</p>
                  </div>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
