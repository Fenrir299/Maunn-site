import React, { useState, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";

const About: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: React.SetStateAction<string>) => {
    setActiveSection(to);
  };

  return (
    <div className="bg-white dark:bg-gray-800">
      <Navbar />
      <Presentation handleSetActive={handleSetActive} />
      <Footer handleSetActive={handleSetActive} />
    </div>
  );
};

export default About;
