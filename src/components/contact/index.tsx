type Props = {};

const Contact = (props: Props) => {
  return (
    <section
      id="contact"
      className="text-center py-[60px] sm:py-[80px] md:py-[100px] max-w-[600px]"
    >
      <h2 className="text-lg justify-center">Whats up?</h2>
      <h3 className="">Lets talk about it</h3>
      <p className="text-[#7f7467] py-5">
        Feel free to reach out to me using the link below and i'll get back to
        you at my earliest convenience.
      </p>
      <a
        href="mailto:ud.amaefule@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
        className="inline-block w-[max-content] text-base mt-8 border border-primary-100 py-4 px-7 rounded-md text-primary-100 bg-primary-100 bg-opacity-0 hover:bg-opacity-25 hover:border-white hover:text-white duration-300"
      >
        Lets hear it
      </a>
    </section>
  );
};

export default Contact;
