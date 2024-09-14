import React from "react";
import { BsFileEarmark } from "react-icons/bs";
import { IoMdStarOutline } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import {
  MdInbox,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from "react-icons/md";
import { TbSend2 } from "react-icons/tb";

const Sidebar = () => {
  const sideBarItems = [
    {
      icon: <MdInbox size={"24px"} />,
      text: "Inbox",
    },
    {
      icon: <IoMdStarOutline size={"24px"} />,
      text: "Starred",
    },
    {
      icon: <MdOutlineWatchLater size={"24px"} />,
      text: "Snoozed",
    },
    {
      icon: <TbSend2 size={"24px"} />,
      text: "Sent",
    },
    {
      icon: <BsFileEarmark size={"24px"} />,
      text: "Drafts",
    },
    {
      icon: <MdOutlineKeyboardArrowDown size={"24px"} />,
      text: "More",
    },
  ];

  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow bg-[#C2E7FF]">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>

      <div className="text-gray-500">
        {sideBarItems.map((item, index) => (
          <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2">
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
