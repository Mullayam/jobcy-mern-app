import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";
import classname from "classnames";
import withRouter from "../../components/withRouter";
import NavbarRight from "./NavbarRight";
import { useAuth } from "../../Hooks/useAuthContext";

import darkLogo from "../../assets/images/logo-dark.png";
import lightLogo from "../../assets/images/logo-light.png";
import { SetisLoggedin, SetUser } from "../../Store/Events";
import { EmptyLocalStorage } from "../../Apis/api.instance";

const NavBar = (props) => {  
  const { Auth ,dispatch} = useAuth(); 
 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [home, setHome] = useState(false);
  const [company, setCompany] = useState(false);
  const [jobs, setPages] = useState(false);

  //scroll navbar
  const [navClass, setnavClass] = useState(false);
  const HandleLogout = () => {
    EmptyLocalStorage()
    dispatch(SetisLoggedin(false));
    dispatch(SetUser(null));
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = window.pageYOffset;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }
  //menu activation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const pathName = props.router.location.pathname;
    var matchingMenuItem = null;
    var ul = document.getElementById("navbarCollapse");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [props.router.location.pathname]);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement.parentElement.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <nav
        className={"navbar navbar-expand-lg fixed-top sticky p-0 " + navClass}
        id="navigation"
      >
        <Container fluid className="custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={darkLogo} height="22" alt="" className="logo-dark" />
            <img src={lightLogo} height="22" alt="" className="logo-light" />
          </Link>
          <div>
            <NavbarToggler
              className="me-3"
              type="button"
              onClick={() => toggle()}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
          </div>
          <Collapse
            isOpen={isOpen}
            className="navbar-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mx-auto navbar-center">
              <NavItem>
                <Link
                  className="nav-link"
                  to="/#"
                  id="homedrop"
                  onClick={() => setHome(!home)}
                >
                  Home
                </Link>
              </NavItem>

              <li className="nav-item dropdown dropdown-hover">
                <Link
                  to="/joblist"
                  id="pagesdoropdown"
                  className="nav-link dropdown-toggle arrow-none"
                  onClick={() => setPages(!jobs)}
                >
                  Jobs
                </Link>
              </li>

              <NavItem>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </NavItem>
              <NavItem className="dropdown dropdown-hover">
                <NavLink
                  to="/#"
                  id="jobsdropdown"
                  role="button"
                  onClick={() => setCompany(!company)}
                >
                  Company <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: company,
                  })}
                  aria-labelledby="jobsdropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/team">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <Link className="dropdown-item" to="/privacyandpolicy">
                    Priacy & Policy
                  </Link>
                  <li>
                    <Link className="dropdown-item" to="/faqs">
                      Faqs
                    </Link>
                  </li>
                </ul>
              </NavItem>
            </ul>
          </Collapse>
          {Auth.isLoggedIn ? (
            <NavbarRight user={Auth.user} HandleLogout={HandleLogout}  />
          ) : (
            <Button
            className="rounded-pill"
              color="primary"
              onClick={() => props.router.navigate("/signin")}
            >
              Login
            </Button>
          )}
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
