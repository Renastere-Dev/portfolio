import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiChat2, CiLinkedin, CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact Me</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
      <li className="flex gap-1 items-center">
          <CiPhone />
          +2348051051994
        </li>
        <li className="flex gap-1 items-center">
          <CiChat2 />
          +2348170227812
        </li>
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          ariyojoey@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkedin.com/in/ariyo-ayodeji/
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/ariyojoey
        </li>
      </ul>
    </div>
  );
};

export default Footer;
