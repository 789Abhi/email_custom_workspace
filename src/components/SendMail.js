import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

function SendMail() {
  return (
    <div className="sendmail absolute bottom-0 right-[50px] bg-[#404040] w-[40%] h-[40%]
     max-w-[500px] flex flex-col rounded-t-l-[10px] rounded-t-r-[10px]">
      <div className="sendmail__header">
        <h3>New Message</h3>
        <CloseIcon />
      </div>
      <div className="sendmail__body">
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />

          <div className="sendmail__buttons">
            <Button>SEND</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendMail;
