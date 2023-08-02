import React from "react";
import { Link } from "react-router-dom";
import { CardBody, Col, Row } from "reactstrap";
import { TotalApplicantsAppliedForJob } from "../../../Apis/apiCore";
import { FromNowDate, slugify } from "../../../Helpers";

//Import images

const CandidateDetails = () => {
  const [applicants, setApplicants] = React.useState([]);
  const getApplicants = async () => {
    const { data } = await TotalApplicantsAppliedForJob(9);
    if (data.success) return setApplicants(data.data.Applicants);
  };
  React.useEffect(() => {
    
    getApplicants()
  }, [])
  
  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col lg={8}>
          <div className="mb-3 mb-lg-0">
            <h6 className="fs-16 mb-0"> Showing 1 – 8 of 11 results </h6>
          </div>
        </Col>

        <Col lg={4}>
          <div className="candidate-list-widgets">
            <Row>
              <Col lg={6}>
                <div className="selection-widget">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-single-filter-orderby"
                    id="choices-single-filter-orderby"
                    aria-label="Default select example"
                  >
                    <option value="df">Default</option>
                    <option value="ne">Newest</option>
                    <option value="od">Oldest</option>
                    <option value="rd">Random</option>
                  </select>
                </div>
              </Col>
              <Col lg={6}>
                <div className="selection-widget mt-2 mt-lg-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-candidate-page"
                    id="choices-candidate-page"
                    aria-label="Default select example"
                  >
                    <option value="df">All</option>
                    <option value="ne">8 per Page</option>
                    <option value="ne">12 per Page</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="candidate-list">
        {applicants?.map((candidateDetailsNew, key) => (
          <div
            key={key}
            className="candidate-list-box card mt-4"
          >
            <CardBody className="p-4">
              <Row className="align-items-center">
                <div className="col-auto">
                  <div className="candidate-list-images">
                    <Link to="#">
                      <img
                        src={`${process.env.REACT_APP_STATIC_URL}/_static/jobcy/user/profile/profileImg/${candidateDetailsNew.image}`}
                        alt=""
                        className="avatar-md img-thumbnail rounded-circle"
                      />
                    </Link>
                  </div>
                </div>
                <Col lg={5}>
                  <div className="candidate-list-content mt-3 mt-lg-0">
                    <h5 className="fs-19 mb-0">
                      <Link to={`/candidatedetails/${slugify(candidateDetailsNew.fullname)}/${candidateDetailsNew.user_id}`} className="primary-link">
                        {candidateDetailsNew.fullname}
                      </Link>
                      <span className={"badge bg-success   mx-2"}>
                        <i className="mdi mdi-star align-middle"></i>
                        {((candidateDetailsNew.ratings)/1).toFixed(1)}
                      </span>
                    </h5>
                    <p className="text-muted mb-2">
                      {" "}
                      {candidateDetailsNew.info}
                    </p>
                    <ul className="list-inline mb-0 text-muted">
                      <li className="list-inline-item">
                        <i className="mdi mdi-map-marker"></i>{" "}
                        {candidateDetailsNew.location}
                      </li>
                     
                    </ul>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                    {(candidateDetailsNew.badges || []).map(
                      (badgesInner, key) => (
                        <span
                          className={`badge bg-${badgesInner.classname}-subtle text-${badgesInner.classname} fs-14 mt-1`}
                          key={key}
                        >
                          {badgesInner.badgeName}
                        </span>
                      )
                    )}
                  </div>
                </Col>
              </Row>
              <div className="favorite-icon">
               {FromNowDate(candidateDetailsNew.applied_on)}
              </div>
            </CardBody>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CandidateDetails;
