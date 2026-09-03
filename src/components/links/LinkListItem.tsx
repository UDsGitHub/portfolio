import useMediaQuery from "../../hooks/useMediaQuery";
import type { LinkItem } from "./types";

export default function LinkListItem({ linkItem }: { linkItem: LinkItem }) {
  const { title, url, icon } = linkItem;
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  let linkStyles = isAboveMediumScreens ? "hover:ml-4" : "hover:-translate-y-4";

  return (
    <li
      className={`cursor-pointer duration-300 flex bg-primary-100 rounded-3xl ${linkStyles} ${isAboveMediumScreens ? "w-24 pr-4 py-4 justify-end" : "h-24 p-4 items-start"}`}
      title={title}
    >
      <a
        href={url}
        target={"_blank"}
        className={`w-full flex justify-end items-center ${isAboveMediumScreens ? "h-full" : ""}`}
      >
        {icon}
      </a>
    </li>
  );
}
