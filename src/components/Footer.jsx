import { FaTwitter } from "react-icons/fa";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { FiMap } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="py-10 flex items-center justify-center bg-black">
      <div className="lg:w-9/12 flex items-center  flex-col gap-10 py-10 rounded-lg px-10">
        <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-1 gap-20">
          <div className="text-white flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-indie text-white">ZEAN</h1>
            <p className="text-md md:text-lg font-light font-roboto">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex gap-4">
              <FaTwitter />
              <BsFacebook />
              <BsInstagram />
            </div>
          </div>
          <div className="text-white flex flex-col gap-3">
            <h1 className="text-xl font-bold font-open">Community</h1>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> Projects
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> Team
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> Reviews
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> FAQs
            </p>
          </div>
          <div className="text-white flex flex-col gap-3">
            <h1 className="text-xl font-bold font-open">About Us</h1>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> Our story
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> Meet the team
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> Carrers
            </p>
          </div>
          <div className="text-white flex flex-col gap-3">
            <h1 className="text-xl font-bold font-open">Company</h1>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> About Us
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> Press
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> Contact
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <FiArrowRight /> Carrers
            </p>
          </div>
          <div className="text-white flex flex-col gap-3">
            <h1 className="text-xl font-bold font-open">Have a question?</h1>
            <p className="flex flex-col gap-1 font-light text-gray-400">
              <FiMap /> 123 Main Street, Anytown, CA 12345
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <BiPhoneCall className="text-xl" /> +90 123 123 12
            </p>
            <p className="flex items-center gap-1 font-light text-gray-400">
              <AiOutlineMail className="text-xl" /> info@zean.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
