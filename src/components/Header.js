import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


function Header() {
  return (
    <div className="header flex  items-center justify-between border-b-2 border-b-gray-100 pt-[10px] pb-[10px]">
      <div className="header__left flex items-center pl-2  ">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img className="md:w-32 w-20 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAswpZ3olxGke1rcfTqIhyE3c1frR7wIrS0DPqoyPeDbDX0zqhOwHgrV918VlJ05407e4&usqp=CAU" alt="" />
      </div>
      <div className="header__middle flex items-center  bg-gray-300 border-1 p-[10px] md:flex-[0.6] flex-[0.97] rounded-[10px]">
     <SearchIcon color="gray"/>
    <input className="p-[5px] border-none w-full outline-none bg-transparent text-sm " placeholder="Search Mail" type="text" name="" id="" />
    <ArrowDropDownIcon/>

      </div>
      <div className="header__right flex items-center pr-5 justify-around ">
      <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton  >
          <NotificationsIcon />
        </IconButton>
        <Avatar sx={{ width: 24, height: 24 }} />
      </div>
    </div>
  );
}

export default Header;
