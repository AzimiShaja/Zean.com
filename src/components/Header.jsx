import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white flex flex-col ">
      <header className="flex justify-between md:justify-around py-3 max-md:px-5 items-center">
        <div>
          <a href="/">
            <h1 className="text-4xl md:text-5xl font-indie hover:text-red duration-300">
              ZEAN
            </h1>
          </a>
        </div>
        <div className="nav_links flex gap-4 max-md:hidden">
          <a className="active-page" href="">
            HOME
          </a>
          <a href="">ABOUT</a>
          <a href="">WORK</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
        </div>
        <div
          onClick={handleToggle}
          className="flex items-center gap-1 md:hidden"
        >
          <h1 className="text-xl">MENU</h1>
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </header>
      <div
        className={` ${
          isOpen ? "expanded" : "not-expanded"
        } nav_links flex flex-col items-center py-4 bg-black text-white md:hidden gap-4`}
      >
        <a className="active-page" href="">
          HOME
        </a>
        <a href="">ABOUT</a>
        <a href="">WORK</a>
        <a href="">BLOG</a>
        <a href="">CONTACT</a>
      </div>
    </div>
  );
}
