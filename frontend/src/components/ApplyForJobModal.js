import React from "react";
import { Modal, ModalBody,  Label } from "reactstrap";
import { ApplyForJob } from "../Apis/apiCore";
import { useAuth } from "../Hooks/useAuthContext";
import SuccessMsg from "./SuccessMsg";
import TagsInput from "./TagsInput";
import { toast } from "react-toastify";
function ApplyForJobModal({ data }) {
  let timer;
  const { modal, openModal, job_id, pid, cid,successMsg,setSuccessMsg} = data;
  const {
    Auth: { user },
  } = useAuth();
  const [tags, setTags] = React.useState([])
  const [msg, setMsg] = React.useState("")
  const handleApplyForJobModalSubmitbutton = async () => {
    console.log(tags)
    const { data } = await ApplyForJob({
      user_id: user.user_id,
      job_id,
      pid,
      cid,
      tags,
      msg
    });
    if (data.success) {
      toast.success(data.messsage);
       setSuccessMsg(true);
    }
    timer = setTimeout(() => openModal(), 2500);
  
  };
  React.useEffect(() => {
    clearTimeout(timer);
    
  }, [timer])
  
  return (
    <div
      className="modal fade"
      id="applyNow"
      tabIndex="-1"
      aria-labelledby="applyNow"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <Modal isOpen={modal} toggle={openModal} centered>
          <ModalBody className="modal-body p-5">
            {successMsg ? (
              <SuccessMsg />
            ) : (
              <>
                <div className="text-center mb-4">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Apply For This Job
                  </h5>
                </div>
                <div className="text-center"></div>                
              
                <div className="mb-3">
                  <Label for="emailControlInput2" className="form-label">
                    Update Skills <small className="text-muted">(optional)</small>
                  </Label>
                  <TagsInput id="Skills" tags={tags} setTags={setTags} />
                </div>
                <div className="mb-3">
                  <Label for="messageControlTextarea" className="form-label">
                    Message For Recruiter <small className="text-muted">(optional)</small>
                  </Label>
                  <textarea
                    className="form-control"
                    id="messageControlTextarea"
                    rows="4"
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  onClick={handleApplyForJobModalSubmitbutton}
                  className="btn btn-primary w-100"
                >
                  Send Application
                </button>
              </>
            )}
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}

export default ApplyForJobModal;
