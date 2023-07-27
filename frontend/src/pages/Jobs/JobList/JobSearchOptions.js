import React from "react";
import { Col, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Input, Row } from "reactstrap";
import CountryOptions from "../../Home/SubSection/CountryOptions";
import JobType from "../../Home/SubSection/JobType";
import { useAppContext } from "../../../Hooks/useAppContext";
import { toast } from "react-toastify";

const JobSearchOptions = () => {
  const [searchParams, setSearchParms] = useSearchParams();
  const { filters } = useAppContext();

  const handleSearchSubmit = () => {
    const { Category, JobLocation, SearchTerm } = filters;
    if (JobLocation) {
      if (!searchParams.has("JobLocation")) {
        searchParams.append("JobLocation", JobLocation);
      }
    }
    if (Category) {
      if (!searchParams.has("category")) {
        searchParams.append("category", Category);
      }       
    }
    if (SearchTerm) {
      if (!searchParams.has("SearchTerm")) {
        searchParams.append("SearchTerm", Category);
      }
    
    }
    setSearchParms(searchParams);
  };
  return (
    <React.Fragment>
      <div className="job-list-header">
        <Form action="#">
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
              <span
                onClick={handleSearchSubmit}
                className="btn btn-primary w-100"
              >
                <i className="uil uil-filter"></i> Fliter
              </span>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default JobSearchOptions;
