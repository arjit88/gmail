import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import gmail from "../assets/gmail.png";
import profile from "../assets/profile.png";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { GrCircleQuestion } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/appSlice";

const NavBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input]);

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img className="w-9" src={gmail} alt="Gmail_logo" />
          <h1 className="text-2xl text-gray-600 font-normal">Gmail</h1>
        </div>
      </div>

      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"22px"} className="text-gray-700 mx-1" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-full w-full bg-transparent outline-none px-1"
            placeholder="Search Mail"
          />
        </div>
      </div>

      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <GrCircleQuestion size={"24px"} />
          </div>

          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoSettingsOutline size={"24px"} />
          </div>

          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <PiDotsNineBold size={"24px"} />
          </div>

          <div className="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
            <Avatar src={profile} size="24" round={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
