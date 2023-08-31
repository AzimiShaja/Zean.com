import { MdOutlineDesignServices } from "react-icons/md";
import { BsCodeSquare } from "react-icons/bs";
import { SlLayers } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import bg from "/src/assets/working.jpg";
import { AiOutlineMobile } from "react-icons/ai";
import { useState, useEffect } from "react";
export default function About() {
  const [transition, setTransition] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  function hanldeScroll() {
    let windowScrollTop = window.scrollY;
    if (windowScrollTop > 300) {
      setTransition(true);
    } else {
      setTransition(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hanldeScroll);
    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  });
  return (
    <>
      <div
        className={`${transition ? "translate" : "not-translate"}
          bg-gray-50 py-10 flex items-center justify-center`}
      >
        <div className=" lg:w-9/12 flex items-center  flex-col gap-10 py-10 rounded-lg">
          <div className="max-w-fit border-b-4 py-2 border-red rounded-sm">
            <h1 className="text-4xl uppercase font-open font-bold">About us</h1>
          </div>
          <div className="flex w-full gap-10 max-md:flex-col justify-between lg:justify-between px-10 mt-20">
            <p className="flex flex-col items-center max-md:text-lg lg:text-xl font-open gap-2 hover:text-red duration-300 cursor-pointer text-center">
              <MdOutlineDesignServices className="text-5xl" />
              UI/UX Design
            </p>
            <p className="flex flex-col items-center text-xl font-open gap-2 max-md:text-lg hover:text-red duration-300 cursor-pointer text-center">
              <BsCodeSquare className="text-5xl " />
              Web Development
            </p>
            <p className="gap-2  flex flex-col items-center text-xl font-open max-md:text-lg  hover:text-red duration-300 cursor-pointer text-center">
              <SlLayers className="text-5xl" />
              Product Design
            </p>
            <p className="gap-2 flex flex-col items-center text-xl font-open max-md:text-lg hover:text-red duration-300 cursor-pointer text-center">
              <AiOutlineMobile className="text-5xl" />
              Mobile Apps
            </p>
            <p className="gap-2 flex flex-col items-center text-xl font-open max-md:text-lg hover:text-red duration-300 cursor-pointer text-center">
              <BsSearch className="text-5xl" />
              SEO
            </p>
          </div>
          <div className="flex px-10 gap-4 max-md:flex-col-reverse">
            <div className="flex flex-col gap-3 items-start justify-between">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl max-md:text-3xl font-bold font-open">
                  Welcome to Zean, A Personal Porfolio Web Agency
                </h1>
                <p className="text-md font-light font-roboto text-justify">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth.
                </p>
                <p className="text-md font-light font-roboto text-justify">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth.
                </p>
              </div>

              <button className="bg-red mt-10 text-white hover:text-black py-2 border border-red rounded-md px-4 text-center font-poppins hover:bg-transparent duration-300">
                View all projects
              </button>
            </div>
            <div className="lg:max-w-sm  ">
              <img className="rounded-lg" src={bg} />
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col w-full px-10 gap-10 mt-4">
            <div className="flex gap-4 items-start">
              <h1 className="text-4xl border-b text-red font-pacifico pb-1 font-bold">
                01
              </h1>
              <div>
                <p className="text-xl font-kanit">Search Engine Optimization</p>
                <p className="font-light text-sm font-roboto">
                  Far far away, behind the word mountains
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <h1 className="text-4xl border-b pb-1 text-red font-pacifico font-bold">
                02
              </h1>
              <div>
                <p className="text-xl font-kanit">Search Engine Optimization</p>
                <p className="font-light text-sm font-roboto">
                  Far far away, behind the word mountains
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <h1 className="text-4xl border-b pb-1 text-red font-pacifico font-bold">
                03
              </h1>
              <div>
                <p className="text-xl font-kanit">Search Engine Optimization</p>
                <p className="font-light text-sm font-roboto">
                  Far far away, behind the word mountains
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
