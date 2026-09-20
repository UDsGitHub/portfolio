"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import LinkList from "@/components/links/LinkList";

export default function Page() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

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
      <main className="pt-20.5 max-w-400 w-full mx-auto px-12.5 md:px-25 lg:px-37.5">
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
