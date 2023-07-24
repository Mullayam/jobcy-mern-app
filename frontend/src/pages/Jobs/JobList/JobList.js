import React from "react";
import { Col, Container, Row } from "reactstrap";
import Section from "./Section";
import JobSearchOptions from "./JobSearchOptions";
import Popular from "./Popular";
import Sidebar from "./Sidebar";
import JobVacancyPost from "./JobVacancyPost";
import Pagination from "./Pagination";

const JobList2 = () => {
  document.title = "Job List| Jobcy - Job Listing";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="me-lg-5">
                <JobSearchOptions />
                <Popular />
                <JobVacancyPost />
                <Pagination />
              </div>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobList2;
