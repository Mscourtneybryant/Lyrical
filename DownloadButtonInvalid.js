import React from "react";

function DownloadButtonInvalid() {
  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ color: "red" }}>Invalid Url</h1>
      <br />
      <p>Your url link does not work. You may have a spelling error or are pasting a link that is not directly from youtube. Please copy your url link directly from the youtube browser, then paste it in the box above and try again.</p>
    </div>
  );
}

export default DownloadButtonInvalid;