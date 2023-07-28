import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Pagination = ({ totalJobs }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page") || 1;

  const MaxPages = Math.ceil(totalJobs / 5 ||1);
  const MaxPageArray = new Array(MaxPages);
  const HandlePaginationSubmit = (value) => {
    if (!searchParams.has("page")) {
      searchParams.append("page", value);
      setSearchParams(searchParams);
      return;
    }
    searchParams.set("page", value);
    setSearchParams(searchParams);
  };
 
  return (
    <React.Fragment>
      <Row>
        <Col lg={12} className="mt-4 pt-2">
          <nav aria-label="Page navigation example">
            <div className="pagination job-pagination mb-0 justify-content-center">
              {currentPage > 1 && (
                <li className={`page-item ${currentPage === 1 ?? "disabled"}`}>
                  <span
                    className="page-link cursor-pointer"
                    onClick={() => HandlePaginationSubmit(currentPage - 1)}
                    tabIndex="-1"
                  >
                    <i className="mdi mdi-chevron-double-left fs-15"></i>
                  </span>
                </li>
              )}
              {Array.from(MaxPageArray).map((page, Index) => {
                return (
                  <li key={Index}  
                    className={`page-item ${
                      Number(currentPage) === 1 + Number(Index) && "active"
                    }`}
                  >
                    <span
                      className="page-link"
                      onClick={() => HandlePaginationSubmit(Index + 1)}
                    >
                      {Index + 1}
                    </span>
                  </li>
                );
              })}

              {Number(currentPage) !== Number(MaxPages) && (
                <li className={`page-item`}>
                  <Link className="page-link" to="#">
                    <i className="mdi mdi-chevron-double-right fs-15"></i>
                  </Link>
                </li>
              )}
            </div>
          </nav>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Pagination;
