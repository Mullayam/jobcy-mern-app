import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import {GetAllCategories} from '../../../Apis/apiCore'

const Categories = () => {
  const [jobCatogaries, setjobCatogaries] = React.useState([])
  const HomeComponentData = async () => {
    const {data}= await GetAllCategories()
    if (data.success) {
    return setjobCatogaries(data.data.Categories)
    }
  }
  React.useEffect(() => {
    HomeComponentData()
  }, [])
   
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mb-5">
                <p className="badge bg-warning fs-14 mb-2">Jobs Live Today</p>
                <h4>Browse Job By Categories</h4>
                <p className="text-muted">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {jobCatogaries.map((category, key) => (
              <Col lg={4} key={category.id}>
                <Card className="job-Categories-box bg-light border-0">
                  <CardBody className="p-4">
                    <ul className="list-unstyled job-Categories-list mb-0">
                    <li key={key}>
                            <Link to={`/joblist/${category.slug}-${category.id}`} className="primary-link">
                              {category.name}
                              <span className="badge bg-info-subtle text-info fs-6 fw-bolder float-end">
                                {category.total_jobs}
                              </span>
                            </Link>
                          </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Categories;
