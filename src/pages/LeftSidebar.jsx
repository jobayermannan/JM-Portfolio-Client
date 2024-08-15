import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function LeftSidebar() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:pb-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/JobayerMn" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue cursor-pointer hover:text-mint" />
          </a>
          <a href="https://www.linkedin.com/in/jobayermannan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue cursor-pointer hover:text-mint" />
          </a>
          <a href="mailto:jobayermannan777@gmail.com">
            <BiLogoGmail className="text-blue cursor-pointer hover:text-mint" />
          </a>
          <a href="https://github.com/jobayermannan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-blue cursor-pointer hover:text-mint" />
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSidebar;