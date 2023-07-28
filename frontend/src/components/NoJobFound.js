import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NoJobFound() {
  const navigate =useNavigate()
  return (
    <div className="card text-center mt-5">
      <div className="card-body">
        <h5 class="card-title">Oops! We are Sorry</h5>
        <p class="card-text">
         There is no Job Found for you
        </p>
        <span onClick={()=>navigate(-1)} class="btn btn-primary">
          Go Back
        </span>
      </div>
    </div>
  );
}

export default NoJobFound;
