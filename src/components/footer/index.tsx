import useMediaQuery from "../../shared/useMediaQuery";
import {useRef} from 'react'

type Props = {};

const Footer = (props: Props) => {
  const currDate = useRef<Date>(new Date())
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  let linkStyles = isAboveMediumScreens ? "hover:ml-4" : "hover:-translate-y-4";
  return (
    <footer className="text-center text-xs py-10">
      <ul
        className={`flex justfiy-center items-center gap-2 md:gap-8 w-fit mx-auto mb-4 ${
          isAboveMediumScreens &&
          "fixed bottom-0 left-0 flex-col bg-primary-100 text-black py-6 mb-0 rounded-tr-md"
        }`}
      >
        <li className={"duration-300 " + linkStyles}>
          <a
            href="https://github.com/UDsGitHub"
            target={"_blank"}
            className="inline-block w-full px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </li>
        <li className={"duration-300 " + linkStyles}>
          <a
            href="https://www.instagram.com/d.ud.e_gram/"
            target={"_blank"}
            className="inline-block w-full px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <title>Instagram</title>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </li>
        <li className={"duration-300 " + linkStyles}>
          <a
            href="https://www.linkedin.com/in/udochukwu-amaefule/"
            target={"_blank"}
            className="inline-block w-full px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </li>
        <li className={"duration-300 " + linkStyles}>
          <a
            href="https://www.frontendmentor.io/profile/UDsGitHub"
            target={"_blank"}
            className="inline-block w-full px-4"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              stroke="currentColor"
              strokeWidth={12}
              fill="currentColor"
              viewBox="136.85 110.11 225.33 222.9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Frontend Mentor</title>
              <path d="m254.2 123v155.67" fill="#fff" />
              <path d="m244.2 123v155.67c0 12.87 20 12.89 20 0v-155.67c0-12.87-20-12.89-20 0zm112.54 44.79c-20 9.33-40 18.67-60 28-1.67.78-1.6 3.52 0 4.32 19.33 9.67 38.67 19.33 58 29 2.87 1.43 5.41-2.88 2.52-4.32-19.33-9.67-38.67-19.33-58-29v4.32c20-9.33 40-18.67 60-28 2.92-1.36.38-5.67-2.52-4.32z" />
              <path d="m138.18 223.14c11.34 53.74 54.41 96.35 108.32 107.04 9.04 1.79 18.28 2.8 27.5 2.82 6.43.01 6.44-9.99 0-10-50.08-.06-96.35-29.49-117.24-75.11-4.01-8.75-6.96-18-8.94-27.41-1.33-6.29-10.97-3.63-9.64 2.66z" />
            </svg>
          </a>
        </li>
      </ul>
      <span>
        © Copyright {currDate.current.getFullYear()}. Made by{" "}
        <a href="https://www.linkedin.com/in/udochukwu-amaefule/">
          Udochukwu Amaefule
        </a>
      </span>
    </footer>
  );
};

export default Footer;
