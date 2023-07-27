import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
 
import { useAppContext } from "../../Hooks/useAppContext";

const Jobcatogaries = () => {
  const { categories } = useAppContext();
 const CategoriesWithIconOnly =categories.filter((c) => c.icon !== "")
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title">Browser Jobs Categories </h3>
                <p className="text-muted">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {(CategoriesWithIconOnly || []).map((item, key) => (
              <Col lg={3} md={6} mt={4} pt={2} key={key}>
                <div className="popu-category-box rounded text-center">
                  <div className="popu-category-icon icons-md">
                    <Icon icon={item.icon} className="text-primary" />
                  </div>
                  <div className="popu-category-content mt-4">
                    <Link
                      to={`/joblist/${item.slug}-${item.id}`}
                      className="text-dark stretched-link"
                    >
                      <h5 className="fs-18">{item.name}</h5>
                    </Link>
                    <p className="text-muted mb-0">{item.total_jobs} Jobs</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12}>
              <div className="mt-5 text-center">
                <Link
                  to="/jobscategories"
                  className="btn btn-primary btn-hover"
                >
                  Browse All Categories <i className="uil uil-arrow-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Jobcatogaries;
