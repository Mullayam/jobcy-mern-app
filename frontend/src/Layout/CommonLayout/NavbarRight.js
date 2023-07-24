import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

import { Link } from "react-router-dom";
import userImage2 from "../../assets/images/user/img-02.jpg";
import jobImage4 from "../../assets/images/featured-job/img-04.png";
import userImage1 from "../../assets/images/user/img-01.jpg";
import jobImage from "../../assets/images/featured-job/img-01.png";
 
export default function NavbarRight(props) {
  const {user,HandleLogout} = props
  
  //Notification Dropdown
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState); 
  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  return (
    <ul className="header-menu list-inline d-flex align-items-center mb-0">
      <Dropdown
        isOpen={notification}
        toggle={dropDownnotification}
        className="list-inline-item  me-4"
      >
        <DropdownToggle
          href="#"
          className="header-item noti-icon position-relative"
          id="notification"
          type="button"
          tag="a"
        >
          <i className="mdi mdi-bell fs-22"></i>
          <div className="count position-absolute">3</div>
        </DropdownToggle>
        <DropdownMenu
          className="dropdown-menu-sm dropdown-menu-end p-0"
          aria-labelledby="notification"
          end
        >
          <div className="notification-header border-bottom bg-light">
            <h6 className="mb-1"> Notification </h6>
            <p className="text-muted fs-13 mb-0">
              You have 4 unread Notification
            </p>
          </div>
          <div className="notification-wrapper dropdown-scroll">
            <Link to="#" className="text-dark notification-item d-block active">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-xs bg-primary text-white rounded-circle text-center">
                    <i className="uil uil-user-check"></i>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1 fs-14">22 verified registrations</h6>
                  <p className="mb-0 fs-12 text-muted">
                    <i className="mdi mdi-clock-outline"></i>{" "}
                    <span>3 min ago</span>
                  </p>
                </div>
              </div>
            </Link>
            <Link to="#" className="text-dark notification-item d-block">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <img
                    src={userImage2}
                    className="rounded-circle avatar-xs"
                    alt="user-pic"
                  />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1 fs-14">James Lemire</h6>
                  <p className="text-muted fs-12 mb-0">
                    <i className="mdi mdi-clock-outline"></i>{" "}
                    <span>15 min ago</span>
                  </p>
                </div>
              </div>
            </Link>
            <Link to="#" className="text-dark notification-item d-block">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <img
                    src={jobImage4}
                    className="rounded-circle avatar-xs"
                    alt="user-pic"
                  />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1 fs-14">
                    Applications has been approved
                  </h6>
                  <p className="text-muted mb-0 fs-12">
                    <i className="mdi mdi-clock-outline"></i>{" "}
                    <span>45 min ago</span>
                  </p>
                </div>
              </div>
            </Link>
            <Link to="#" className="text-dark notification-item d-block">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <img
                    src={userImage1}
                    className="rounded-circle avatar-xs"
                    alt="user-pic"
                  />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1 fs-14">Kevin Stewart</h6>
                  <p className="text-muted mb-0 fs-12">
                    <i className="mdi mdi-clock-outline"></i>{" "}
                    <span>1 hour ago</span>
                  </p>
                </div>
              </div>
            </Link>
            <Link to="#" className="text-dark notification-item d-block">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <img
                    src={jobImage}
                    className="rounded-circle avatar-xs"
                    alt="user-pic"
                  />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1 fs-15">Creative Agency</h6>
                  <p className="text-muted mb-0 fs-12">
                    <i className="mdi mdi-clock-outline"></i>{" "}
                    <span>2 hour ago</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="notification-footer border-top text-center">
            <Link className="primary-link fs-13" to="#">
              <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
              <span>View More..</span>
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
      <Dropdown
        onClick={() => setUserProfile(!userProfile)}
        isOpen={userProfile}
        toggle={dropDownuserprofile}
        className="list-inline-item"
      >
        <DropdownToggle
          to="#"
          className="header-item"
          id="userdropdown"
          type="button"
          tag="a"
          aria-expanded="false"
        >
          <img
            src={"http://localhost:7132/_static/jobcy/images/account-icon.png"}
            alt="mdo"
            width="35"
            height="35"
            className="rounded-circle me-1"
          /> 
          <span className="d-none d-md-inline-block fw-medium">
            Hi, {user.username}
          </span>
        </DropdownToggle>
        <DropdownMenu
          className="dropdown-menu-end"
          aria-labelledby="userdropdown"
          end
        >
          <li>
            <Link className="dropdown-item" to="/managejobs">
              Manage Jobs
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/bookmarkjobs">
              Bookmarks Jobs
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/myprofile">
              My Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/signout" onClick={HandleLogout}>
              Logout
            </Link>
          </li>
        </DropdownMenu>
      </Dropdown>
    </ul>
  );
}
