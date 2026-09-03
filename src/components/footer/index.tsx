const currDate = new Date();

const Footer = () => {
  return (
    <footer className="text-center text-xs text-neutral-400 py-10 pb-20">
      <span>
        <a href="https://www.linkedin.com/in/udochukwu-amaefule/">
          Udochukwu Amaefule
        </a>{" "}
        © Copyright {currDate.getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
