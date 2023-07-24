import React from "react";
import { Link } from "react-router-dom";
import { Col, Input, Row } from "reactstrap";
import CountryOptions from "../../Home/SubSection/CountryOptions";
import JobType from "../../Home/SubSection/JobType";

const JobGridHeader = () => {
  return (
    <React.Fragment>
      <form action="#">
        <Row className="g-2">
          <Col lg={3} md={6}>
            <div className="filler-job-form">
              <i className="uil uil-briefcase-alt"></i>
              <Input
                type="search"
                className="form-control filter-input-box"
                id="exampleFormControlInput1"
                placeholder="Job, company... "
                style={{ marginTop: "-10px" }}
              />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="filler-job-form">
              <i className="uil uil-location-point"></i>
              <CountryOptions />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="filler-job-form">
              <i className="uil uil-clipboard-notes"></i>
              <JobType />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <Link to="#" className="btn btn-primary w-100">
              <i className="uil uil-filter"></i> Fliter
            </Link>
          </Col>
        </Row>
      </form>
    </React.Fragment>
  );
};

export default JobGridHeader;
