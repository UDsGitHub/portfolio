import { useState, useEffect, CSSProperties } from "react";
import Navbar from "../src/components/navbar";
import Home from "../src/components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BounceLoader from "react-spinners/BounceLoader";
import LinkList from "./components/links/LinkList";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="bg-[#1e1e1e] absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center animate-[fadeOut_1500ms_ease-out_1500ms]">
          <BounceLoader color="#BBB4AB" size={150} loading={loading} />
        </div>
      ) : (
        <>
          <Navbar isTopOfPage={isTopOfPage} />
          <main className="pt-[82px] max-w-[1600px] w-full mx-auto px-[50px] md:px-[100px] lg:px-[150px]">
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
            <LinkList />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
