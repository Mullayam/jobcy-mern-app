import React from "react";
import { Col, Row, Input,  Label } from "reactstrap";
import { toast } from "react-toastify";
 
import { useAuth } from "../../Hooks/useAuthContext";
//Images Import
import userImage2 from "../../assets/images/user/img-02.jpg";
import TagsInput from "../../components/TagsInput"
import {  UpdateMemberProfile } from "../../Apis/apiCore";
function SettingsForm() {
  const { Auth:{user} } = useAuth(); 
  const [inputs, setInputs] = React.useState({});
  const [links, setLinks] = React.useState({});
  const [textarea, setTextarea] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [cvFile, setCvFile] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(userImage2||null);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  }
  const handleCVeChange = (e) => {
    setCvFile(e.target.files[0])  
  }
  const HandleInputsChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };
  const HandleLinksChange=(e)=>{
    setLinks({ ...links, [e.target.id]: e.target.value });
  }
  const HandleUpdateButton = async() => {
    const filesData = new FormData();
    filesData.append("image",file);
    filesData.append("attachmentscv",cvFile);
    
     const { data } = await UpdateMemberProfile({userId:user.user_id,inputs,filesData,links});  
 
    if (data.success) {
       return toast.success(data.message)

    }
   return toast.error(data.message)
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
              <Label
                htmlFor="image"
                className="profile-photo-edit avatar-xs"
              >
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
              <Input type="text" className="form-control" id="fullname" value={inputs.firstName} onChange={HandleInputsChange} />
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
                <option  defaultValue value="candidate">Candidate</option>
                
              </select>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="email" className="form-label">
                Email
              </Label>
              <Input type="text" className="form-control" id="email" value={inputs.email} onChange={HandleInputsChange} readOnly   />
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
              <textarea className="form-control" rows="5" value={textarea} onChange={e => setTextarea(e.target.value)}/>               
               
            </div>
          </Col>

          <Col lg={12}>
            <div className="mb-3">
              <Label htmlFor="languages" className="form-label">
                Languages
              </Label>
              <TagsInput id="languages" info={inputs}setinfo={setInputs} />
           
            </div>
          </Col>

          <Col lg={12}>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
              Currrent Location
              </label>
              <Input className="form-control" type="text" id="location" value={inputs.location} onChange={HandleInputsChange} />

            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="attachmentscv" className="form-label">
                Attachment CV
              </Label>
              <Input className="form-control" accept="application/pdf" type="file" id="attachmentscv" onChange={handleCVeChange} />
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
                value={links.facebook} onChange={HandleLinksChange}
                to="https://www.facebook.com"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="github" className="form-label">
                Twitter
              </Label>
              <Input
                type="text"
                className="form-control"
                id="github"
                value={links.github} onChange={HandleLinksChange}

                to="https://www.twitter.com"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="linkedin" className="form-label">
                Linkedin
              </Label>
              <Input
                type="text"
                className="form-control"
                id="linkedin"
                value={links.linkedin} onChange={HandleLinksChange}

                to="https://www.linkedin.com"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="whatsapp" className="form-label">
                Whatsapp
              </Label>
              <Input
                type="text"
                className="form-control"
                id="whatsapp"
                value={links.whatsapp} onChange={HandleLinksChange}

                to="https://www.whatsapp.com"
              />
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
