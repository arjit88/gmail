import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const navigate = useNavigate();

  const openMail = () => {
    navigate("/mail/12364r6734r");
  };

  return (
    <div
      className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
      onClick={openMail}
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>

        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
      </div>

      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          eligendi autem incidunt error dicta commodi a, debitis ea explicabo
          dignissimos.
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">13:28</div>
    </div>
  );
};

export default Message;
