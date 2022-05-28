import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ReactQuillEditor from "../../services/editor/ReactQuill";

export default function CreateNewBlog() {
  // if(! )
  const [img, setImg] = useState<any>("");
  const handleChangeImg = (e: any) => {
    const target = e.target;
    const files = target.files;
    if (files) {
      console.clear();
      console.log("files :>> ", files);
      const file = files[0];
      setImg(file);
    }
  };

  return (
    <div className="margin-2">
    
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          oo
        
          <input
            type="file"
            className=""
            accept="image/*"
            onChange={handleChangeImg}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <div style={{ border: "1px solid blue" }} className="">
            {typeof img === "string" ? (
              <img
                src={img}
                alt="..."
                style={{ width: "80px", height: "80px" }}
              />
            ) : (
              <img
                src={URL.createObjectURL(img)}
                alt="..."
                style={{ width: "80px", height: "80px" }}
              />
            )}
          </div>
        </Grid>
      </Grid>

      <div className="margin-2">
        <ReactQuillEditor />
      </div>
    </div>
  );
}
