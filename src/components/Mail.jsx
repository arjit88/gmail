import React from "react";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoMdArrowBack size="20px" />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiArchiveIn size="20px" />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineReport size="20px" />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdDeleteOutline size="20px" />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkEmailUnread size="20px" />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineWatchLater size="20px" />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineAddTask size="20px" />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineDriveFileMove size="20px" />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size="20px" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size="24px" />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size="24px" />
          </button>
        </div>
      </div>

      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Subject</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>

          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>15-09-2024</p>
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          <h1>arjit88@gmail.com</h1>
          <span>to me</span>
        </div>

        <div className="my-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            reprehenderit odit, tempora repellat dignissimos exercitationem
            aliquam rerum accusamus modi sed nisi, non inventore, numquam
            architecto laborum consectetur maiores dolorum dolorem aspernatur
            doloremque ut nihil dicta quis! Veritatis minima omnis veniam!
            Voluptate, nisi dolorem quae unde tempore dicta quis consequuntur
            similique eaque sapiente reiciendis sunt quos delectus perferendis
            recusandae aliquam aspernatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mail;