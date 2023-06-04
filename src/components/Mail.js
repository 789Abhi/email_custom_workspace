import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

function Mail() {
  const Navigate=useNavigate();
  return (
    <div className='mail flex-1 bg-yellow-50' >
      <div className="mail__tools flex justify-between bg-white">
        <div className="mail_toolleft">
          <IconButton onClick={()=>Navigate('/')}>
          <ArrowBackIcon/>
          </IconButton>
          <IconButton>
          <MoveToInboxIcon/>
          </IconButton>
          <IconButton>
          <ErrorIcon/>
          </IconButton>
          <IconButton>
          <DeleteIcon/>
          </IconButton>
          <IconButton>
          <EmailIcon/>
          </IconButton>
          <IconButton>
          <WatchLaterIcon/>
          </IconButton>
          <IconButton>
          <CheckCircleIcon/>
          </IconButton>
          <IconButton>
          <LabelImportantIcon/>
          </IconButton>
          <IconButton>
          <MoreVertIcon/>
          </IconButton>
        </div>
        <div className="mail_toolright">
        <IconButton>
          <UnfoldMoreIcon/>
          </IconButton>
        <IconButton>
          <PrintIcon/>
          </IconButton>
        <IconButton>
          <ExitToAppIcon/>
          </IconButton>
        </div>
      </div>
      <div className="mail__body flex flex-col m-[30px] p-[20px] h-[100vh] bg-white">
        <div className="mail_header relative flex items-center border-b-[1px] border-b-slate-100 p-5">
      <h2 className='mr-5 font-bold'>SUBJECT</h2>
      <LabelImportantIcon className='text-[#e8ab02]'/>
      <p className='mr-5 p-[10px] break-words '>NEW MESSAGE</p>
      <p className='ml-5 absolute right-0 top-[24px] font-bold text-[12px] text-gray-500 '>10 PM</p>
    </div>
    <div className="mail_meassge">
      <p className='ml-5'>This is message</p>
    </div>
        </div>
    </div>
  )
}

export default Mail