import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

//Import images 
import { WhatsappTemplate} from "../../../Constants"
const LeftSideContent = ({profile}) => {
  const Img =  typeof (profile?.image) ==="undefined"? "default.png":profile?.image
  console.log()
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="profile-sidebar me-lg-4">
          <CardBody className="p-4">
            <div className="text-center pb-4 border-bottom">
              <img
                src={`${process.env.REACT_APP_STATIC_URL}/_static/jobcy/user/profile/profileImg/${Img}`}
                alt=""
                className="avatar-lg img-thumbnail rounded-circle mb-4"
              />
              <h5 className="mb-0">{profile.fullname}</h5>
              <p className="text-muted">{profile.info}</p>
              <ul className="list-inline d-flex justify-content-center align-items-center ">
                <li className="list-inline-item text-warning fs-19">
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star-half-full"></i>
                </li>
              </ul>
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link
                    to={`${profile.links?.facebook}`}
                    target="_blank"
                    className="social-link rounded-3 btn-soft-primary"
                  >
                    <i className="uil uil-facebook-f"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link 
                   target="_blank"
                    to={`${profile.links?.github}`}
                  className="social-link rounded-3 btn-soft-info">
                    <i className="uil uil-github-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                   target="_blank"
                     to={`${WhatsappTemplate(profile.links?.whatsapp, profile.fullname)}`}
                    className="social-link rounded-3 btn-soft-success"
                  >
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                   target="_blank"
                     to={`${profile.links?.linkedin}`}
                    className="social-link rounded-3 btn-soft-danger"
                  >
                    <i className="uil uil-linkedin-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-4 border-bottom pb-4">
              <h5 className="fs-17 fw-bold mb-3">Documents</h5>
              <ul className="profile-document list-unstyled mb-0">
                <li>
                  <div className="profile-document-list d-flex align-items-center mt-4 ">
                    <div className="icon flex-shrink-0">
                      <i className="uil uil-file"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fs-16 mb-0">{profile?.cv?.cvfile.name}</h6>
                      <p className="text-muted mb-0">{((profile?.cv?.cvfile?.size)/1000000).toFixed(2)} MB</p>
                    </div>
                  
                    <div className="ms-auto">
                      <Link to={`http://localhost:7132/_static/jobcy/user/profile/resumes/${profile?.cv?.cvfile.name}`} download className="fs-20 text-muted">
                        <i className="uil uil-import"></i>
                      </Link>
                    </div>
                  </div>
                </li>
                {profile?.cv?.coverletter &&  <li>
                  <div className="profile-document-list d-flex align-items-center mt-4 ">
                    <div className="icon flex-shrink-0">
                      <i className="uil uil-file"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fs-16 mb-0"> {profile?.cv?.coverletter.name}</h6>
                      <p className="text-muted mb-0">{((profile?.cv?.coverletter?.size)/1000000).toFixed(2)} MB</p>
                    </div>
                    <div className="ms-auto">
                    <Link to={`http://localhost:7132/_static/jobcy/user/profile/resumes/${profile?.cv?.coverletter.name}`} download className="fs-20 text-muted">

                         
                        <i className="uil uil-import"></i>
                      </Link>
                    </div>
                  </div>
                </li>}
              
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="fs-17 fw-bold mb-3">Contacts</h5>
              <div className="profile-contact">
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="d-flex">
                      <label>Email</label>
                      <div>
                        <p className="text-muted text-break mb-0">
                        {profile.email}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>Phone Number</label>
                      <div>
                        <p className="text-muted mb-0">{profile.phone}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>Location</label>
                      <div>
                        <p className="text-muted mb-0">{profile.location}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
