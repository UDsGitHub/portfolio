import { ReactNode } from "react";
import useMediaQuery from "../../shared/useMediaQuery";

type Props = {
  url: string;
  icon: ReactNode;
};

export default function LinkListItem({
  url,
  icon,
}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  let linkStyles = isAboveMediumScreens ? "hover:ml-4" : "hover:-translate-y-4";

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <li
      className={
        "cursor-pointer duration-300 flex justify-end pr-4 w-24 bg-primary-100 py-1 md:py-4 rounded-3xl " +
        linkStyles
      }
      onClick={handleClick}
    >
      <a href={url} target={"_blank"} className="inline-block">
        {icon}
      </a>
    </li>
  );
}
