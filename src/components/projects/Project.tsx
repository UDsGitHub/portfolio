import type { ProjectType } from "./types";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  proj: ProjectType;
};

// TODO add readmore to cards that links to another page with markdown docs info about the project

const Project = ({ proj }: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 640px)");
  return (
    // IMAGE AND TEXT
    <div className="project flex mb-[100px]">
      {/* IMAGE */}
      {isAboveSmallScreens && (
        <div className="proj-img basis-1/2 overflow-hidden rounded-md">
          <a className="relative" href={proj.external} target="_blank">
            <img className="w-full" src={proj.img} alt="project snippet" />
          </a>
        </div>
      )}
      {/* TEXT */}
      <div
        className={`proj-content ${
          isAboveSmallScreens && "basis-1/2"
        } text-primary-100 z-10 -mr-[30px]`}
      >
        {/* TITLE */}
        <a className="proj-title inline-block mb-5" href={proj.external}>
          {proj.title}
        </a>
        {/* DESC */}
        <div className="bg-neutral-800 p-6 mb-6 rounded-md">
          <p className="text-sm md:text-lg">{proj.desc}</p>
        </div>
        {/* TECH STACK */}
        <ul className="flex gap-5 mb-5">
          {proj.tech.map((techItem) => (
            <li key={techItem}>
              <p className="text-sm">{techItem}</p>
            </li>
          ))}
        </ul>
        <ul className="flex gap-5 text-white">
          <li>
            <a href={proj.git} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href={proj.external} target="_blank">
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
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
