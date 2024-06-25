import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";




function LeftSidebar() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:pb-10 sm:static ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.google.com/">
            {" "}
            <FaFacebook className="text-blue cursor-pointer hover:text-mint"></FaFacebook>
          </a>

          <FaLinkedin className="text-blue cursor-pointer hover:text-mint" />
          
          <BiLogoGmail className="text-blue cursor-pointer hover:text-mint" />
          <FaGithub  className="text-blue cursor-pointer hover:text-mint" />
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSidebar;
