import React, { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../shared/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const menuRef = useRef<HTMLElement>(null);
  const menuOpenBtn = useRef<HTMLButtonElement>(null);

  const navbarBackground =
    !isTopOfPage && !isMenuToggled
      ? "backdrop-blur-md"
      : "";

  useEffect(() => {
    function closeMenu(e: MouseEvent) {
      if (isMenuToggled) {
        if (
          !menuOpenBtn?.current?.contains(e.target as Node) &&
          !menuRef?.current?.contains(e.target as Node)
        )
          setIsMenuToggled(false);
      }
    }
    document.body.addEventListener("click", closeMenu);
    return () => document.body.removeEventListener("click", closeMenu);
  }, [isMenuToggled]);

  return (
    <>
      <nav className={`fixed top-0 z-30 py-8 w-full ${navbarBackground} rounded-bl-lg rounded-br-lg`}>
        <div className="flex justify-between items-center w-5/6 mx-auto">
          <div>
            <a
              href="/"
              className="logo relative flex justify-center items-center font-medium text-xl duration-300 before:bg-primary-100 before:bg-opacity-0 hover:before:bg-opacity-25"
            >
              U
            </a>
          </div>
          <div>
            {isAboveMediumScreens ? (
              <ol className="flex gap-6 text-primary-100">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ol>
            ) : (
              <button onClick={() => setIsMenuToggled(true)} ref={menuOpenBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>
      <aside
        ref={menuRef}
        className={`p-8 top-0 bottom-0 bg-[#696158] fixed z-40 duration-300 flex justify-center items-center ${
          !isAboveMediumScreens && isMenuToggled
            ? "right-0 opacity-100"
            : "opacity-0 -right-[250px] pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsMenuToggled(false)}
          className="absolute top-6 right-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ol className="flex flex-col gap-4 [&>li>a]:text-xl">
          <li>
            <a href="#home" className="duration-300 hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="duration-300 hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="duration-300 hover:text-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="duration-300 hover:text-black">
              Contact
            </a>
          </li>
        </ol>
      </aside>
    </>
  );
};

export default Navbar;
