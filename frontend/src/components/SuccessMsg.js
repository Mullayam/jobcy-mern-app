import React from "react";

function SuccessMsg({ message }) {
  return (
    <>
      <img src="https://img.icons8.com/color/248/ok--v1.png" alt="success" />
      <div>{message || "Success"}</div>
    </>
  );
}

export default SuccessMsg;
