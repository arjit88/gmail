import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Messages from "./Messages";

const Inbox = () => {
  const [mailTypeSelected, setMailTypeSelected] = useState(0);

  const maiType = [
    {
      icon: <MdInbox size={"24px"} />,
      text: "Primary",
    },
    {
      icon: <GoTag size={"24px"} />,
      text: "Promotions",
    },
    {
      icon: <FaUserFriends size={"24px"} />,
      text: "Social",
    },
  ];

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center">
            <MdCropSquare
              size={"25px"}
              className="hover:bg-gray-100 cursor-pointer"
            />
            <FaCaretDown
              size={"18px"}
              className="hover:bg-gray-100 cursor-pointer"
            />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"24px"} />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"24px"} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">1-50 of 1000</p>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size="24px" />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size="24px" />
          </button>
        </div>
      </div>

      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {maiType.map((item, index) => (
            <button
              key={index}
              className={`${
                mailTypeSelected === index
                  ? "border-b-4 border-b-blue-600 text-blue-600"
                  : "border-b-4 border-b-transparent"
              } flex items-center gap-5 p-4 w-60 hover:bg-gray-100`}
              onClick={() => setMailTypeSelected(index)}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>

        <Messages />
      </div>
    </div>
  );
};

export default Inbox;