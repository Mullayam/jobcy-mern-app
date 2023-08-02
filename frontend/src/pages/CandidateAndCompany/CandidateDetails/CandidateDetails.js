import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import {  CreateTitle} from "../../../Helpers";
import {  GetJobApplicantDetails} from "../../../Apis/apiCore";
import { useParams } from "react-router-dom";
const CandidateDetails = () => {
  const {username,user_id}= useParams()
  const [applicant, setApplicant] =React.useState({})
  document.title =`Applicant ${CreateTitle(username)} Details | Jobcy`
     const GetApplicantDetails =async ()=>{
      const {data} = await GetJobApplicantDetails(user_id)
      if (data.success) {
        return setApplicant(data.data.Profile)
      }
     }
  React.useEffect(() => {
    GetApplicantDetails()
  }, [user_id])
  
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent applicant={applicant}/>
            <RightSideContent applicant={applicant}/>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateDetails;
