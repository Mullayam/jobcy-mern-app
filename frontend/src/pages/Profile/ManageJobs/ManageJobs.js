import React from "react";
import { Container } from "reactstrap";
import JobListing from "./JobListing";
import Section from "./Section";
import Selected from "./Selected";
import { useAuth } from "../../../Hooks/useAuthContext";
import { GetJobsPostedByMember } from "../../../Apis/apiCore";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
const ManageJobs = () => {
  document.title = "Manage Jobs | Jobcy ";
  const { Auth } = useAuth();
  const [jobList, setJobList] = React.useState([]);
const [searchParams,setSearchParams] = useSearchParams()
  const MyListing = async () => {
    const { data } = await GetJobsPostedByMember(Auth.user.user_id);
    if (data.success) {
      setJobList(data.data.MyJobs);
    }
    toast.error(data.success) 
  }; 
  React.useEffect(() => {
    MyListing();
  }, [searchParams]);
 
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Selected />
          <JobListing jobList={jobList} />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ManageJobs;
