import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import Select from "react-select";
import {
  GetAllCategories,
  GetAllJobTypes,
  GetCompaniesWithJobs,
} from "../../../Apis/apiCore";
import TextEditor from "../../../components/TextEditor";
import { LabelAndValueFormat,CovertArraytoSelectFormat } from "../../../Helpers";
import { Countries } from "../../../Constants/Countries";
import SelectBox from "../../../components/Shared/Select";
import TagsInput from "../../../components/TagsInput";
import {JobSchema  } from "../../../Constants";
const JobPostEdit = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [skills, setSkills] = useState([]);
  const [keywords, setkeywords] = useState([]);
  const [info, setinfo] = useState({});
  const handleInputChange = (e) => {
    setinfo({ ...info, [e.target.id]: e.target.value });
  };
  const handleSubmitNewPost = () => {
    console.log(info);
  };
  const FetchRequiredData = async () => {
    const { data } = await GetAllCategories();
    if (data.success) {
      setCategoriesList(data.data.Categories);
    }
    const { data: JobType } = await GetAllJobTypes();
    if (JobType.success) {
      setJobTypes(JobType.data.JobTypeArray);
    }
    const { data: All } = await GetCompaniesWithJobs();
    if (All.success) {
      setCompanies(All.data.Companies);
    }
  };

  useEffect(() => {
    FetchRequiredData();
    console.log(info);
  }, []);
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-primary-subtle text-primary p-3">
                <h5 className="mb-0 fs-17">Post a New Job!</h5>
              </div>
            </Col>
          </Row>
          <div className="job-post-form shadow mt-4">
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      Job Title
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      value={info.jobtitle}
                      onChange={handleInputChange}
                      placeholder="Title"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="image" className="form-label">
                      Cover Image
                    </Label>
                    <Input type="file" className="form-control" id="image" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="email" className="form-label">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      value={info.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      value={info.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <SelectBox
                    label="Categories"
                    id="categories"
                    info={info}
                    setinfo={setinfo}
                    options={categoriesList}
                  />
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="designation" className="form-label">
                      Hiring Designation/Position
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="designation"
                      value={info.designation}
                      onChange={handleInputChange}
                      placeholder="Designation"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="salary" className="form-label">
                      Salary($)
                    </label>
                    <Input
                      type="number"
                      className="form-control"
                      id="salary"
                      value={info.salary}
                      onChange={handleInputChange}
                      placeholder="Salary"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="skills" className="form-label">
                      Minimum Experience
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="minimum_experience"
                      value={info.minimum_experience}
                      onChange={handleInputChange}
                      placeholder="Minimum Experience"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobdescription" className="form-label">
                      Job Description
                    </Label>
                    <TextEditor
                      id={"jobdescription"}
                      info={info}
                      setinfo={setinfo}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobresponsiblities" className="form-label">
                      Job Responsiblities
                    </Label>
                    <TextEditor
                      id={"jobresponsiblities"}
                      info={info}
                      setinfo={setinfo}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <label htmlFor="qualification" className="form-label">
                      Qualifications
                    </label>
                    <TextEditor
                      id={"qualification"}
                      info={info}
                      setinfo={setinfo}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="mb-4">
                    <SelectBox
                      options={companies}
                      id="company_id"
                      label="Company"
                      info={info}
                      setinfo={setinfo}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="lastdate" className="form-label">
                      Application Deadline Date
                    </label>
                    <Input
                      type="date"
                      defaultValue={info.lastdate}
                      onChange={handleInputChange}
                      className="form-control"
                      id="lastdate"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <SelectBox
                      options={Countries}
                      id="country_name"
                      label="Country"
                      info={info}
                      setinfo={setinfo}
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="city"
                      defaultValue={info.city}
                      onChange={handleInputChange}
                      placeholder="City"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <label htmlFor="zipcode" className="form-label">
                      Zipcode
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      defaultValue={info.zipcode}
                      onChange={handleInputChange}
                      placeholder="Zipcode"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <label htmlFor="jobSchema" className="form-label">
                    Job Schema
                  </label>
                  <div className="mb-4">
                    <Select
                      options={CovertArraytoSelectFormat(JobSchema)}
                      id="jobSchema"
                      isMulti
                      placeholder="Work From Home,Remote,Hybrid,Work From Office"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <label htmlFor="jobSchema" className="form-label">
                    Job Type
                  </label>
                  <div className="mb-4">
                    <Select
                      options={LabelAndValueFormat(jobTypes)}
                      id="jobType"
                      label="Job Type"
                      isMulti
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="skills" className="form-label">
                      Required Job Skills
                    </label>
                    <TagsInput id="Skills" tags={skills} setTags={setSkills} />
                    <small>
                      {" "}
                      e.g Java,SpringBoot,Node,Excel,React,C++,PHP,SQL,Python
                    </small>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="keywords" className="form-label">
                      Keywords
                    </label>
                    <TagsInput
                      id="Keywords"
                      tags={keywords}
                      setTags={setkeywords}
                    />
                    <small>
                      {" "}
                      e.g Designer,MERN,Dev Ops, Marketing, business,UI/UX, Dev
                    </small>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="#" className="btn btn-success">
                      Back
                    </Link>
                    <Button
                      onClick={handleSubmitNewPost}
                      className="btn btn-primary"
                    >
                      Post Now <i className="mdi mdi-send"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobPostEdit;
