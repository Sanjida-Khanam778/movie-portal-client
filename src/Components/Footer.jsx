import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <footer
        className={`footer flex flex-col rounded p-5 lg:p-20 lg:pb-10 ${
          theme === "dark"
            ? "text-white bg-opacity-95 bg-base-300"
            : "text-black bg-gray-200"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center md:w-10/12 mx-auto md:mb-10">
          <div className="space-y-4 md:w-1/3">
            <a className="font-bold flex items-center justify-center md:justify-start text-xl md:text-2xl xl:text-4xl text-[#e02929]">
              FILMYSCOPE
            </a>
            <p className="w-10/12 md:w-full mx-auto text-center md:text-start">
              Your ultimate destination for exploring, discovering, and
              celebrating the magic of movies.
            </p>
          </div>

          <div>
            <p className="text-xl mb-4 font-semibold">Contact Information</p>
            <p>
              Location: av. Washington 165, NY CA 54003 <br />
              Phone: +31 85 964 47 25 <br />
              Email: info@filmyscope.com <br />
            </p>
          </div>
          <nav>
            <div className="grid grid-flow-col gap-8">
              <a className="text-4xl text-blue-500">
                <FaTwitter></FaTwitter>
              </a>
              <a>
                <BsYoutube className="text-4xl text-red-600 "></BsYoutube>
              </a>
              <a>
                <FaFacebook className="text-4xl text-blue-600"></FaFacebook>
              </a>
            </div>
          </nav>
        </div>
        <div className="border-t w-full p-5 flex justify-center ">
          <p className="text-center">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
