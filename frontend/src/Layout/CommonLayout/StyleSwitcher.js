import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StyleSwitcher = () => {
  const [switcher, setSwitcher] = useState(false);

  const toggleSwitcher = () => {
    setSwitcher(!switcher);
  };

  const setColor = (color) => {
    document.body.setAttribute("data-theme", color);
  };

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", "light");
    document.body.setAttribute("data-theme", "green"); 
  });

  // Dark/Light mode
  const toggleMode = () => {
    var layoutMode = document.body.getAttribute("data-bs-theme");
    if (layoutMode === "dark") {
      document.body.setAttribute("data-bs-theme", "light");
    } else {
      document.body.setAttribute("data-bs-theme", "dark");
    }
  };

  return (
    <React.Fragment>
      <div id="style-switcher" style={{ left: switcher ? "0px" : "-165px" }}>
        <div>
          <h6>Select your color</h6>
          <ul className="pattern list-unstyled mb-0">
            <li>
              <Link
                className="color-list color1"
                onClick={() => setColor("purple")}
                to="#"
              ></Link>
            </li>
            <li>
              <Link
                className="color-list color2"
                onClick={() => setColor("blue")}
                to="#"
              ></Link>
            </li>
            <li>
              <Link
                className="color-list color3"
                onClick={() => setColor("green")}
                to="#"
              ></Link>
            </li>
          </ul>
          <div className="mt-3">
            <h6>Light/dark Layout</h6>
            <div className="text-center mt-3">
              <Link
                id="mode"
                onClick={toggleMode}
                className="mode-btn text-white rounded-3"
              >
                <i className="uil uil-brightness mode-dark mx-auto"></i>
                <i className="uil uil-moon mode-light"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom">
          <Link onClick={toggleSwitcher} className="settings rounded-end">
            <i className="mdi mdi-cog mdi-spin"></i>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StyleSwitcher;
