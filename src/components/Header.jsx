import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(props.navLink);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white flex flex-col ">
      <header className="flex justify-between md:justify-around py-3 max-md:px-5 items-center max-md:flex-row-reverse">
        <div>
          <a href="/">
            <h1 className="text-4xl md:text-5xl font-indie hover:text-red duration-300">
              ZEAN
            </h1>
          </a>
        </div>
        <div className="nav_links flex gap-4 max-md:hidden">
          <a
            className={` ${activeNav === 0 ? "active-page" : ""} `}
            href="/"
            onClick={() => setActiveNav(0)}
          >
            HOME
          </a>
          <a
            className={` ${activeNav === 1 ? "active-page" : ""} `}
            onClick={() => setActiveNav(1)}
            href="/about"
          >
            ABOUT
          </a>
          <a
            className={` ${activeNav === 2 ? "active-page" : ""} `}
            onClick={() => setActiveNav(2)}
            href="/work"
          >
            WORK
          </a>
          <a
            className={` ${activeNav === 2 ? "active-page" : ""} `}
            onClick={() => setActiveNav(2)}
            href="/blog"
          >
            BLOG
          </a>
          <a
            className={` ${activeNav === 3 ? "active-page" : ""} `}
            onClick={() => setActiveNav(3)}
            href="/contact"
          >
            CONTACT
          </a>
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
        } nav_links flex flex-col rounded-b-xl items-center py-4 bg-black text-white md:hidden gap-4`}
      >
        <a className="active-page" href="">
          HOME
        </a>
        <a href="/about">ABOUT</a>
        <a href="/contact">WORK</a>
        <a href="/blog">BLOG</a>
        <a href="/contact">CONTACT</a>
      </div>
    </div>
  );
}
