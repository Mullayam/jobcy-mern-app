import React from "react";
import { Input, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
function ModalSignUp() {
  return (
    <div className="auth-content">
      <div className="w-100">
        <div className="text-center mb-4">
          <h5>Sign Up</h5>
          <p className="text-muted">
            Sign Up and get access to all the features of Jobcy
          </p>
        </div>
        <Form action="#" className="auth-form">
          <FormGroup className="mb-3">
            <Label htmlFor="usernameInput" className="form-label">
              Username
            </Label>
            <Input
              type="text"
              className="form-control"
              id="usernameInput"
              placeholder="Enter your username"
            />
          </FormGroup>
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
          <FormGroup className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <Input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <Label className="form-check-label" htmlFor="flexCheckDefault">
                I agree to the{" "}
                <Link
                  to="/"
                  className="text-primary form-text text-decoration-underline"
                >
                  Terms and conditions
                </Link>
              </Label>
            </div>
          </FormGroup>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </div>
        </Form>
        <div className="mt-3 text-center">
          <p className="mb-0">
            Already a member ?{" "}
            <Link
              to="/signin"
              className="form-text text-primary text-decoration-underline"
            >
              {" "}
              Sign-in{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalSignUp;
