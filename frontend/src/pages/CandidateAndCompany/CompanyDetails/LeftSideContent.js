import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

//Import images
import featureImage from "../../../assets/images/featured-job/img-01.png";
import { FormatDate } from "../../../Helpers";

const LeftSideContent = ({ company }) => {
  let WorkingDays = {};

  if (typeof company.working_days !== "undefined") {
    WorkingDays =
      company.working_days !== null ? JSON.parse(company.working_days) : {};
  } else {
    WorkingDays = {};
  }
  const ListOfDays = () => {
    return Object.keys(WorkingDays).map((day, index) => {
      return (
        <li key={index}>
          {day}<span className={WorkingDays[day].toLowerCase() === "close" ? "text-danger" : "text-success"}>{WorkingDays[day]}</span>
        </li>
      );
    });
  };
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="side-bar">
          <CardBody className="p-4">
            <div className="candidate-profile text-center">
              <img
                src={featureImage}
                alt=""
                className="avatar-lg rounded-circle"
              />
              <h6 className="fs-18 mb-1 mt-4">{company.name}</h6>
              <p className="text-muted mb-4">
                Since {FormatDate(company.established_on)}
              </p>
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-twitter-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-phone-alt"></i>
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
                  <label className="text-dark">Owner</label>
                  <div>
                    <p className="text-muted mb-0">{company.owner}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Employees</label>
                  <div>
                    <p className="text-muted mb-0">{company.employees}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Location</label>
                  <div>
                    <p className="text-muted mb-0">{company.location}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Website</label>
                  <div>
                    <p className="text-muted text-break mb-0">
                      {company.website}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Established</label>
                  <div>
                    <p className="text-muted mb-0">
                      {FormatDate(company.established_on)}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-3">
              <Link to="#" className="btn btn-danger btn-hover w-100">
                <i className="uil uil-phone"></i> Contact
              </Link>
            </div>
          </CardBody>
          {Object.keys(WorkingDays).length > 0 && (
              <CardBody className="p-4 border-top">
              <div className="ur-detail-wrap">
                <div className="ur-detail-wrap-header">
                  <h6 className="fs-17 fw-semibold mb-3">Working Days</h6>
                </div>
                <div className="ur-detail-wrap-body">
                  <ul className="working-days">
                    <ListOfDays />
                  </ul>
                </div>
              </div>
            </CardBody>
          )}
        
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
