import React from "react";
import { Col, Container, Row } from "reactstrap";
import Section from "./Section";
import JobSearchOptions from "./JobSearchOptions";
import Popular from "./Popular";
import Sidebar from "./Sidebar";
import JobVacancyPost from "./JobVacancyPost";
import Pagination from "./Pagination";
import { useParams, useSearchParams } from "react-router-dom";
import { GetJobFromCategoryIdAndQueryFilters } from "../../../Apis/apiCore";
import { toast } from "react-toastify";
import { ObjectQueryToSearchString } from "../../../Helpers";
const JobList2 = () => {
  document.title = "Job List| Jobcy - Job Listing";
  let [searchParams, setSearchParams] = useSearchParams();
  const [jobsArray, setJobsArray] = React.useState([]);
  const [totalJobs, setTotalJobs] = React.useState(0)
  const categoryID = useParams().category_slug?.split("-").pop();
  const QueryParams = ObjectQueryToSearchString(
    Object.fromEntries([...searchParams])
  );
 
  const FetchJobs = async () => {
    const { data } = await GetJobFromCategoryIdAndQueryFilters(
      categoryID,
      QueryParams
    );
     
    if (data.success) {
      setTotalJobs(data.data.AvailableJobs)
      return setJobsArray(data.data.Jobs);
    }
    return toast.error("Unable To Refresh Jobs");
  };
  React.useEffect(() => {
    FetchJobs();
   
  }, [searchParams, categoryID]);
 
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
                <JobVacancyPost jobs={jobsArray} />
                {jobsArray.length > 10 && <Pagination totalJobs={totalJobs}/>}
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
