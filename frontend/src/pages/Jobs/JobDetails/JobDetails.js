import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import JobDetailsDescription from "./JobDetailsDescription";
import JobVacancyPost from "./JobVacancyPost";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { GetJobDetailsFromJobId } from "../../../Apis/apiCore";
import { useParams } from "react-router-dom";
import { CreateTitle, LastElement } from "../../../Helpers";

const JobDetails = () => {
  const { job_id } = useParams()
  const [jobDetail, setjobDetail] = useState({})
  document.title = `${CreateTitle(job_id)} Job Details | Jobcy`;
     const ExtractJobIdFromUrl = LastElement(job_id)
  const GetJobDetails = async()  =>{
    const {data} = await GetJobDetailsFromJobId(ExtractJobIdFromUrl)
    if (data.success) {       
      setjobDetail(data.data.Job)
    }
  }
  React.useEffect(() => {
    GetJobDetails()
  }, [job_id]) 
 
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={8}>
              <JobDetailsDescription currentJob={jobDetail} />
              <JobVacancyPost />
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <RightSideContent currentJob={jobDetail}/>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobDetails;
