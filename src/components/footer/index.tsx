import useMediaQuery from "../../shared/useMediaQuery";
import {useRef} from 'react'

type Props = {};

const Footer = (props: Props) => {
  const currDate = useRef<Date>(new Date())
  
  return (
    <footer className="text-center text-xs py-10">
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
