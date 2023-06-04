import React from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from "./Section";
import EmailRow from "./EmailRow";
import Mail from "./Mail";
function EmailList() {
  return (
    <div className="emaiList flex-[1px] overflow-auto">
      <div className="emaiList__settings flex justify-between sticky top-0 border-b-[1px] border-b-gray-300 bg-white z-[999px] pr-[10px] ">
        <div className="emailList__settingleft  ">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingright ">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections flex gap-2 sticky top-0">
        <Section Icon={InboxIcon} title='Primary' color='red' selected />
        <Section Icon={PeopleIcon} title='Social' color='#1A73E8'/>
        <Section Icon={LocalOfferIcon} title='Promotions' color='green'/>
      </div>
      <div className="emailList__list">
        <EmailRow title="New Mail" subject="Hey Abhishek" description="You have New Text Messages" time="10 PM"/>
        <EmailRow title="New Mail" subject="Hey Abhishek" description="You have New Text Messages" time="10 PM"/>
        <EmailRow title="New Mail" subject="Hey Abhishek" description="You have New Text Messages" time="10 PM"/>
        <EmailRow title="New Mail" subject="Hey Abhishek" description="You have New Text Messages" time="10 PM"/>
        <EmailRow title="New Mail" subject="Hey Abhishek" description="You have New Text Messages" time="10 PM"/>
        <EmailRow title="New Mail" subject="Hey Abhishek" description="You have New Text Messages" time="10 PM"/>
        <EmailRow title="New Mail" subject="Hey Abhishek" description="You have New Text Messages from client side" time="10 PM"/>
      
      </div>
    </div>
  );
}

export default EmailList;
