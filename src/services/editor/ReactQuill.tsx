import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { showToast } from "../../components/shared/ToastAlert";
import { checkImage, uploadImage } from "../validImage/imageUpload";

const ReactQuillEditor = () => {
  const quillRef = useRef<ReactQuill>(null);

  const modules = {
    toolbar: { container },
  };

  //
  const handleChange = () => {
    console.clear();
    // console.log("change imge :>> ");
  };

  const handleChangeImage = useCallback(() => {
    console.clear();
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    // console.log("input :>> ", input);
    input.click();

    input.onchange = async () => {
      const files: FileList | any = input.files;

      if (!files)
        return showToast({
          message: "File does not exist ",
          typeToast: "dark",
        });

      const file = files[0];
      const check: string = checkImage(file);
      if (check.trim() !== "")
        return showToast({ message: check, typeToast: "dark" });
      //
      showToast({ message: "Uploading image in progress", typeToast: "dark" });
      const photo = await uploadImage(file);
      //
      console.log(`photo`, photo)
      const quill = quillRef.current;
      const range = quill?.getEditor().getSelection()?.index;
      if (range !== undefined) {
        quill?.getEditor().insertEmbed(range, "image", `${photo.url}`);
        showToast({ message: "Uploading finished ", typeToast: "success" });
      }
    };
  }, []);

  //custom image
  useEffect(() => {
    const quill = quillRef.current;
    if (!quill) return;

    let toolbar = quill.getEditor().getModule("toolbar");
    toolbar.addHandler("image", handleChangeImage);
  }, [handleChangeImage]);

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        placeholder="tape some thing"
        onChange={handleChange}
        ref={quillRef}
      />
    </div>
  );
};
let container = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["clean", "link", "image", "video"],
];

export default ReactQuillEditor;
