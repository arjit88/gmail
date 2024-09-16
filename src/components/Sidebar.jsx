import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { BsFileEarmark } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { IoMdStarOutline } from "react-icons/io";
import {
  MdInbox,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [mailTypeSelected, setMailTypeSelected] = useState(0);

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
      icon: <BiSend size={"24px"} />,
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
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 p-4 rounded-2xl hover:shadow bg-[#C2E7FF]"
        >
          <HiPencil size={"24px"} />
          Compose
        </button>
      </div>

      <div className="text-gray-500">
        {sideBarItems.map((item, index) => (
          <div
            key={index}
            className={`my-2 ${
              mailTypeSelected === index
                ? "flex items-center gap-4 pl-6 py-1 rounded-r-full bg-blue-200 text-blue-950 hover:cursor-pointer"
                : "flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2"
            }`}
            onClick={() => setMailTypeSelected(index)}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
