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
    !isTopOfPage && !isMenuToggled ? "backdrop-blur-md" : "";

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
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-30 py-4 w-11/12 duration-300 ${navbarBackground}`}
      >
        <div className="flex w-5/6 mx-auto">
          <>
            {isAboveMediumScreens ? (
              <ol className="w-full flex justify-between gap-6 text-primary-100">
                <li className="navbar-item">
                  <a href="#home">Home</a>
                </li>
                <li className="navbar-item">
                  <a href="#about">About</a>
                </li>
                <li className="navbar-item">
                  <a href="#projects">Projects</a>
                </li>
                <li className="navbar-item">
                  <a href="#contact">Contact</a>
                </li>
              </ol>
            ) : (
              <button
                onClick={() => setIsMenuToggled(true)}
                ref={menuOpenBtn}
                className="ml-auto"
              >
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
          </>
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
