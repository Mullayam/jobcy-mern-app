import React from "react";
import { Card, CardBody, CardTitle, UncontrolledAlert } from "reactstrap";

const Alerts = () => {
  return (
    <React.Fragment>
      <Card className="mt-4" id="alerts">
        <div className="p-4 border-bottom">
          <h5 className="mb-0">Alerts</h5>
        </div>
        <CardBody className="p-4">
          <h6 className="card-title">Basic</h6>
          <p className="text-muted">
            Alerts are available for any length of text, as well as an optional
            close button.
          </p>
          <div>
            <div className="alert bg-primary-subtle text-primary" role="alert">
              A simple primary alert—check it out!
            </div>
            <div
              className="alert bg-secondary-subtle text-secondary"
              role="alert"
            >
              A simple secondary alert—check it out!
            </div>
            <div className="alert bg-success-subtle text-success" role="alert">
              A simple success alert—check it out!
            </div>
            <div className="alert bg-primary-subtle text-primary" role="alert">
              A simple purple alert—check it out!
            </div>
            <div className="alert bg-danger-subtle text-danger" role="alert">
              A simple danger alert—check it out!
            </div>
            <div className="alert bg-warning-subtle text-warning" role="alert">
              A simple warning alert—check it out!
            </div>
            <div className="alert bg-info-subtle text-info" role="alert">
              A simple info alert—check it out!
            </div>
          </div>
          <div className="mt-5">
            <CardTitle className="card-title">Dismissing Alerts</CardTitle>
            <p className="text-muted">
              Alerts are available for any length of text, as well as an
              optional close button.
            </p>
            <div className="">
              <UncontrolledAlert color="primary">
                A simple primary alert—check it out!
              </UncontrolledAlert>
              <UncontrolledAlert color="secondary" role="alert">
                A simple secondary alert—check it out!
              </UncontrolledAlert>
              <UncontrolledAlert color="success" role="alert">
                A simple success alert—check it out!
              </UncontrolledAlert>
              <UncontrolledAlert color="danger" role="alert">
                A simple danger alert—check it out!
              </UncontrolledAlert>
              <UncontrolledAlert color="warning" role="alert">
                A simple warning alert—check it out!
              </UncontrolledAlert>
              <UncontrolledAlert color="info" className="mb-0" role="alert">
                A simple info alert—check it out!
              </UncontrolledAlert>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Alerts;
