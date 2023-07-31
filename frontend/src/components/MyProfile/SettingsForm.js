import React from "react";
import { Col, Row, Input, Label } from "reactstrap";
import { toast } from "react-toastify";

import { useAuth } from "../../Hooks/useAuthContext";
//Images Import
import userImage2 from "../../assets/images/user/img-02.jpg";
import TagsInput from "../../components/TagsInput";
import {
  UpdateMemberProfile,
  UpdateMemberProfilePicture,
  UpdateMemberResume,
} from "../../Apis/apiCore";
function SettingsForm() {
  const {
    Auth: { user },
  } = useAuth();

  const [tags, setTags] = React.useState([]);

  const [previewImage, setPreviewImage] = React.useState(userImage2 || null);

  const handleFileChange = async (e) => {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);
    imgData.append("user_id", user.user_id);
    const { data } = await UpdateMemberProfilePicture(imgData);
    if (data.success) {
      toast.success(data.message);
      return setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
    return toast.error(data.message);
  };
  const handleCVeChange = async (e) => {
    const cvData = new FormData();
    cvData.append("resume", e.target.files[0]);
    cvData.append("user_id", user.user_id);

    const { data } = await UpdateMemberResume(cvData);
    if (data.success) {
      return toast.success(data.message);
    }
    return toast.error(data.message);
  };

  const HandleUpdateButton = async () => {
    const location = document.getElementById("location").value;
    const fullname = document.getElementById("fullname").value;
    const aboutme = document.getElementById("aboutme").value;
    const facebook = document.getElementById("facebook").value;
    const github = document.getElementById("github").value;
    const linkedin = document.getElementById("linkedin").value;
    const whatsapp = document.getElementById("whatsapp").value;

    const { data } = await UpdateMemberProfile({
      userId: user.user_id,

      location,
      fullname,
      aboutme,
      tags,
      facebook,
      linkedin,
      github,
      whatsapp,
    });

    if (data.success) {
      return toast.success(data.message);
    }
    return toast.error(data.message);
  };

  return (
    <div>
      <div>
        <h5 className="fs-17 fw-semibold mb-3 mb-0">My Account</h5>
        <div className="text-center">
          <div className="mb-4 profile-user">
            <img
              src={previewImage}
              className="rounded-circle img-thumbnail profile-img"
              id="profile-img"
              alt=""
            />
            <div className="p-0 rounded-circle profile-photo-edit">
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="profile-img-file-input"
              />
              <Label htmlFor="image" className="profile-photo-edit avatar-xs">
                <i className="uil uil-edit"></i>
              </Label>
            </div>
          </div>
        </div>
        <Row>
          <Col lg={12}>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <Input type="text" className="form-control" id="fullname" />
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <label htmlFor="choices-single-categories" className="form-label">
                Account Type
              </label>
              <select
                className="form-select"
                data-trigger
                name="choices-single-categories"
                id="account_type"
                aria-label="Default select example"
                disabled
                aria-readonly
              >
                <option defaultValue value="candidate">
                  Candidate
                </option>
              </select>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="email" className="form-label">
                Email
              </Label>
              <Input type="text" className="form-control" id="email" readOnly />
            </div>
          </Col>
        </Row>
      </div>

      <div className="mt-4">
        <h5 className="fs-17 fw-semibold mb-3">Profile</h5>
        <Row>
          <Col lg={12}>
            <div className="mb-3">
              <Label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Introduce Yourself
              </Label>
              <textarea className="form-control" rows="5" id="aboutme" />
            </div>
          </Col>

          <Col lg={12}>
            <div className="mb-3">
              <Label htmlFor="languages" className="form-label">
                Languages
              </Label>
              <TagsInput id="languages" tags={tags} setTags={setTags} />
            </div>
          </Col>

          <Col lg={12}>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Currrent Location
              </label>
              <Input className="form-control" type="text" id="location" />
              <div className="autocom-box"> </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="attachmentscv" className="form-label">
                Attachment CV
              </Label>
              <Input
                className="form-control"
                accept="application/pdf"
                type="file"
                id="attachmentscv"
                onChange={handleCVeChange}
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="mt-4">
        <h5 className="fs-17 fw-semibold mb-3">Social Media</h5>
        <Row>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="facebook" className="form-label">
                Facebook
              </Label>
              <Input
                type="text"
                className="form-control"
                id="facebook"
                to="https://www.facebook.com"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="github" className="form-label">
                Github
              </Label>
              <Input
                type="text"
                className="form-control"
                id="github"
                to="https://www.twitter.com"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="linkedin" className="form-label">
                Linkedin
              </Label>
              <Input type="text" className="form-control" id="linkedin" />
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="whatsapp" className="form-label">
                Whatsapp
              </Label>
              <Input type="text" className="form-control" id="whatsapp" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="mt-4">
        <h5 className="fs-17 fw-semibold mb-3 mb-3">Change Password</h5>
        <Row>
          <Col lg={12}>
            <div className="mb-3">
              <Label htmlFor="current-password-input" className="form-label">
                Current password
              </Label>
              <Input
                type="password"
                className="form-control"
                placeholder="Enter Current password"
                id="current-password-input"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="new-password-input" className="form-label">
                New password
              </Label>
              <Input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                id="new-password-input"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="confirm-password-input" className="form-label">
                Confirm Password
              </Label>
              <Input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                id="confirm-password-input"
              />
            </div>
          </Col>

          <Col lg={12}>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="checkbox"
                id="verification"
              />
              <Label className="form-check-label" htmlFor="verification">
                Enable Two-Step Verification via email
              </Label>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-4 text-end">
        <span
          onClick={HandleUpdateButton}
          className="btn btn-danger rounded-pill"
        >
          Update
        </span>
      </div>
    </div>
  );
}

export default SettingsForm;
