import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import gmail from "../assets/gmail.png";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { GrCircleQuestion } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const NavBar = () => {
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const { user } = useSelector((store) => store.appSlice);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

          <div className="relative cursor-pointer">
            <Avatar
              onClick={() => setToggle(!toggle)}
              src={user?.photoURL}
              size="24"
              round={true}
            />
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
                >
                  <p
                    onClick={signOutHandler}
                    className="p-2 text-gray-500 hover:text-black"
                  >
                    Logout
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
