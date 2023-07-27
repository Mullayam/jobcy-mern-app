import React, { useState } from "react";
import ReactQuill from "react-quill";
import "../assets/css/TextEditor.css";
import "react-quill/dist/quill.snow.css";

function TextEditor({ id, jobDetails, setJobDetails }) {
  const Quill = ReactQuill.Quill;
  var Font = Quill.import("formats/font");
  Font.whitelist = ["Nunito"];
  Quill.register(Font, true);

  const [value, setValue] = useState("");
  const QuillNoSSRWrapper = import("react-quill");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const HandleTextEditor = (data) => {
    setValue(data);
    setJobDetails({ ...jobDetails, id: data });
  };
  return (
    <ReactQuill
      modules={modules}
      id={id}
      theme="snow"
      value={value}
      onChange={HandleTextEditor}
    />
  );
}

export default TextEditor;
