import useMediaQuery from "../../shared/useMediaQuery";
import { useRef } from "react";

type Props = {};

const Footer = (props: Props) => {
  const currDate = useRef<Date>(new Date());

  return (
    <footer className="text-center text-xs text-neutral-400 py-10 pb-20">
      <span>
        <a href="https://www.linkedin.com/in/udochukwu-amaefule/">
          Udochukwu Amaefule
        </a>{" "}
        © Copyright {currDate.current.getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
