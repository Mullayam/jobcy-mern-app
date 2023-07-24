import React from "react";
import { FormGroup, Label } from "reactstrap";

function Input() {
  return (
    <FormGroup className="mb-3">
      <Label htmlFor="emailInput" className="form-label">
        Email
      </Label>
      <Input
        type="email"
        className="form-control"
        id="emailInput"
        placeholder="Enter your email"
      />
    </FormGroup>
  );
}

export default Input;
