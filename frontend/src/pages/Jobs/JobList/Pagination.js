import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useAppContext } from "../../../Hooks/useAppContext";

const Pagination = ({ totalJobs }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const UrlQueryObject = Object.fromEntries([...searchParams]);
  const { filters, setFilters } = useAppContext();
  const [disabled, setDisabled] = useState(false);
  // if (!searchParams.has("page")) {
  //  return setDisabled(true);
  // }

  return (
    <React.Fragment>
      <Row>
        <Col lg={12} className="mt-4 pt-2">
          <nav aria-label="Page navigation example">
            <div className="pagination job-pagination mb-0 justify-content-center">
              <li className="page-item disabled">
                <Link className="page-link" to="#" tabIndex="-1">
                  <i className="mdi mdi-chevron-double-left fs-15"></i>
                </Link>
              </li>
              <li className="page-item active">
                <span className="page-link"
                //  onClick={()=>setSearchParams({page: 1})}
                 >
                  1
                </span>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  5
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  <i className="mdi mdi-chevron-double-right fs-15"></i>
                </Link>
              </li>
            </div>
          </nav>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Pagination;
