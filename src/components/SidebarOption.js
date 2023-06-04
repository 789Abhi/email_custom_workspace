import React, { useState } from "react";

function SidebarOption({ Icon, title, number, active }) {
  const [Ishoverd, setIshoverd] = useState(false);

  const Hover = () => {
    setIshoverd(true);
  };
  const NoHover = () => {
    setIshoverd(false);
  };

  return (
    <div
      className={`${
        active ? "bg-[#fcecec] text-[#c04b37] font-bold" : ""
      }  flex items-center mx-[15px] mt-[10px] h-10 text-[#818181] cursor-pointer hover:bg-[#fcecec] hover:text-[#c04b37] hover:font-bold group rounded-[30px] px-4`}
      onMouseEnter={Hover}
      onMouseLeave={NoHover}
    >
      <Icon />

      <h3
        className={` ${
          active ? "font-bold" : ""
        } flex-1 ml-10 text-sm font-normal group-hover:bg-[#fcecec] group-hover:text-[#c04b37] group-hover:font-bold`}
      >
        {title}
      </h3>

      {(active || Ishoverd) && (
        <span className="inline group-hover:bg-[#fcecec]  group-hover:text-[#c04b37] group-hover:font-bold">
          {number}
        </span>
      )}
    </div>
  );
}

export default SidebarOption;
