import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { useParams } from "react-router-dom";
import { CreateTitle, LastElement } from "../../../Helpers";
import { GetCompany, GetCompanyJobs } from "../../../Apis/apiCore";

const CompanyDetails = () => {
  const { company_id } = useParams();
  document.title = `${CreateTitle(company_id)} -  Details | Jobcy`;
  const [company, setCompany] = React.useState([]);
  const [companyJobs, setCompanyJobs] = React.useState([]);

  const getCompanyDetails = React.useCallback(async () => {
    const { data } = await GetCompany(LastElement(company_id));
    const {data:response} = await GetCompanyJobs(LastElement(company_id));
    if (data.success) {
       setCompany(data.data.Company);
    }    
    if (response.success) {
       setCompanyJobs(response.data.CompanyJobs);
    }
  }, [company_id]);
  React.useEffect(() => {
    getCompanyDetails();
  }, [getCompanyDetails]);
    
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent company={company} />
            <RightSideContent company={company} companyJobs={companyJobs} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CompanyDetails;
