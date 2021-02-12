import React, { useState } from "react";
import { Button } from "@material-ui/core";

function Fileupload({ username }) {
  const [progress, setProgress] = useState(0);

  return (
    <div className="imageupload">
      <progress className="imageupload__progress" value={progress} max="100" />
      <br />
      <br />

      <input type="file" />
      <Button>{"Upload"}</Button>
    </div>
  );
}

export default Fileupload;
