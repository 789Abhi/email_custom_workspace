import React from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useNavigate } from 'react-router-dom';

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();


  return (
    <div onClick={()=>navigate('/email')} className="email_row mt-2 flex items-center px-5 cursor-pointer border-b-2 border-b-gray-100 hover:border-t-[1px] hover:border-t-white hover:shadow-md ">
      <div className="email__options ">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="font-bold text-base flex-[0.3]">{title}</h3>
      <div className="flex flex-[0.8] items-center text-[14px] ">
        <h4 className="w-[350px] whitespace-nowrap overflow-hidden text-ellipsis px-[5px] font-bold text-black">
          {subject}{" - "}
          <span className="text-gray-500 font-thin ">{description}</span>
        </h4>
      </div>
      <div className="time text-[12px] font-bold">{time}</div>
    </div>
  );
}

export default EmailRow;
