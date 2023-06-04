import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import IconButton from "@mui/material/IconButton";

function Sidebar() {
  return (
    <div className="sidebar flex-[0.3]">
      <Button
        className="mt-[15px] ml-[15px] capitalize p-[15px] rounded-[30px] shadow-2.5"
        startIcon={<AddIcon fontSize="large" />}
        style={{ color: "black", fontSize: "16px" }}
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} active={true} />
      <SidebarOption Icon={StarBorderIcon} title="Starred" number={30} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={24} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={14} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={8} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={3} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" active={true} />

      <div className="sidebar__footer mx-[15px] mt-[10px] flex items-center justify-center">
        <div className="sidebar_footer__icons ">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
