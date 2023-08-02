import React from "react";

export default function OverviewTab({ Profile }) {
  return (
    <>
      
      <div>
        <h5 className="fs-18 fw-bold">About</h5>
        <p className="text-muted mt-2">{Profile.about_me}</p>
      </div>
      <div className="candidate-education-details mt-4">
        <h6 className="fs-18 fw-bold mb-0">Education</h6>
        {Profile?.education?.map((item, index) => (
          <div className="candidate-education-content mt-4 d-flex" key={index}>
            <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
              {index + 1}
            </div>
            <div className="ms-4">
              <h6 className="fs-16 mb-1">
                {item.courseName} {item.courseName}
              </h6>
              <p className="mb-2 text-muted">
                {item.instituteName} - {item.duration}({item.batchDuration}{" "}
                Years )
              </p>
              <p className="text-muted">
                There are many variations of passages of available, but the
                majority alteration in some form. As a highly skilled and
                successfull product development and design specialist with more
                than 4 Years of My experience.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="candidate-education-details mt-4">
        <h6 className="fs-18 fw-bold mb-0">Experiences</h6>
        {Profile?.experiences?.map((item, index) => (
          <div className="candidate-education-content mt-4 d-flex" key={index}>
            <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
              {index + 1}
            </div>
            <div className="ms-4">
              <h6 className="fs-16 mb-1">
                {item.currentPosition} ({item.employmentType})
              </h6>
              <p className="mb-2 text-muted">
                {item.currentCompany}{item.currentEmployment === "yes" ?? " - Present"}               
              </p>
              <p className="text-muted">
              Served Time {item.totalExpereinceInYear}.{item.totalExpereinceInMonth} Years
              </p>
              <p className="text-muted">
              {item.jobProfile}
              </p>
            </div>
          </div>
        ))}
         
      </div>
      <div className="mt-4">
        <h5 className="fs-18 fw-bold">Skills</h5>
      </div>
      <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
      {Profile?.skills?.map((item, index) => (
          <span
          className="badge fs-13 bg-info-subtle text-blue mt-2"
            key={index}
          >
            {item}
          </span>
        ))}
        
      </div>
      <div className="mt-4">
        <h5 className="fs-18 fw-bold">Spoken languages</h5>
      </div>
      <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
        {Profile?.languages?.map((item, index) => (
          <span
            className="badge fs-13 bg-success-subtle text-success mt-2"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
}
