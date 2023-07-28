import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
function Experiences() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  function tog_modal() {
    setModal(!modal);
  }
  return (
    <React.Fragment>
      <Card id="modals">
        <div className="p-4 border-bottom">
          <button
            onClick={openModal}
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Add New Experience
          </button>
        </div>
        <div className="px-2 mb-2">
          <Card className="job-box card mt-2">
            <CardBody className="p-4">
              <Row>
                <Col lg={1}></Col>

                <Col lg={9}>
                  <div className="mt-3 mt-lg-0">
                    <h5 className="fs-17 mb-1">
                      <span className="text-dark">Experiences Title</span>
                    </h5>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <p className="text-muted fs-14 mb-0">Details</p>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted fs-14 mb-0">Year</p>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted fs-13 mb-0 badge bg-success-subtle text-success mt-1 mx-1">
                          <i className="uil uil-wallet"></i> info
                        </p>
                      </li>
                    </ul>
                    <div className="mt-2">
                      <span className="badge bg-danger-subtle text-success fs-13 mt-1 mx-1">
                        extraaa
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg={2} className="align-self-center">
                  <ul className="list-inline mt-3 mb-0">
                    <li
                      className="list-inline-item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit"
                    >
                      <span className="avatar-sm bg-success-subtle text-success d-inline-block text-center rounded-circle fs-18">
                        <i className="uil uil-edit"></i>
                      </span>
                    </li>
                    <li
                      className="list-inline-item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                    >
                      <span
                        onClick={() => openModal()}
                        to="#"
                        className="avatar-sm bg-danger-subtle text-danger d-inline-block text-center rounded-circle fs-18"
                      >
                        <i className="uil uil-trash-alt"></i>
                      </span>
                    </li>
                  </ul>
                </Col>
              </Row>

              <div
                id="myModal"
                className="modal fade"
                tabIndex="-1"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <Modal isOpen={modal} toggle={openModal} role="dialog" centered>
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title mt-0" id="myModalLabel">
                        Modal Heading
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={openModal}
                      ></button>
                    </div>
                    <ModalBody>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <button
                        type="button"
                        onClick={() => {
                          tog_modal();
                        }}
                        className="btn btn-secondary waves-effect"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Save changes
                      </button>
                    </ModalFooter>
                  </div>
                </Modal>
              </div>
            </CardBody>
          </Card>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default Experiences;
