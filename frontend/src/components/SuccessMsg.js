import React from "react";

function SuccessMsg({ message }) {
  return (
    <>
      <img src="https://img.icons8.com/color/248/ok--v1.png" alt="success" />
      <div>{message || "You Applied for this Job Successfully"}</div>
    </>
  );
}

export default SuccessMsg;
