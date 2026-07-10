import ResumePDF from "/src/assets/resume.pdf";

type Props = {};

const Home = (props: Props) => {
  return (
    <section
      id="home"
      className="min-h-[100vh] md:h-full flex flex-col justify-center"
    >
      <div>
        <h1 className="cursor-default text-primary-100 mb-8">Hi, my name is</h1>
      </div>
      <div>
        <h2 className="cursor-default bg-gradient-to-r from-[#c6c0b9] to-[#1e1e1e] bg-clip-text text-transparent">Udochukwu Amaefule.</h2>
      </div>
      <div>
        <h3 className="cursor-default bg-gradient-to-br from-[#c6c0b9] to-[#1e1e1e] bg-clip-text text-transparent">
          I build things with code...
        </h3>
      </div>
      <div className="text-[#7f7467]">
        <p className="cursor-default mt-8 mb-4 text-xl">
          I'm a software developer focused on building{" "}
          <span className="font-semibold text-[#c6c0b9]">Digital Solutions</span>{" "}
          that drive business success.
        </p>
        <p className="text-base">
          &mdash; On the side, I engage in artistic antics... more on that when
          I update this page
        </p>
      </div>
      <div>
        <a
          href={ResumePDF}
          target="_blank"
          className="inline-block w-[max-content] text-base mt-12 border border-primary-100 py-4 px-7 rounded-md text-primary-100 bg-primary-100 bg-opacity-0 hover:bg-opacity-25 hover:border-white hover:text-white duration-300"
        >
          Resume!
        </a>
      </div>
    </section>
  );
};

export default Home;
