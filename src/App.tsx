import { useState, useEffect } from "react";
import Navbar from "../src/components/navbar";
import Home from "../src/components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import LinkList from "./components/links/LinkList";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

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
    <div className="app text-white">
      <Navbar isTopOfPage={isTopOfPage} />
      <main className="pt-[82px] max-w-[1600px] w-full mx-auto px-[50px] md:px-[100px] lg:px-[150px]">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <LinkList />
      </main>
    </div>
  );
}

export default App;
