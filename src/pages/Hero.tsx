import React, { useState, useEffect } from "react";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import Navbar from "../components/Navbar";
import Band from "../components/Band";
import Clients from "../components/Clients";
import Innovation from "../components/Innovation";
import Sector from "../components/Sectors";
import International from "../components/Internationnal";
import Main from "../components/Main";
import logo1 from "../assets/maunn-title.png";
import logo2 from "../assets/maunn.png";
import Qonto from "../assets/qonto.png";
import Cdiscount from "../assets/cdiscount.png";
import Pfizer from "../assets/Pfizer.png";
import Airbus from "../assets/Airbus.png";
import Aventis from "../assets/aventis.png";

const Hero: React.FC = () => {
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
    <div>
      <Band />
      <Navbar />
      <div className="dark:bg-gray-800 bg-white">
        <Main handleSetActive={handleSetActive} />
        <Innovation handleSetActive={handleSetActive} />
        <Clients handleSetActive={handleSetActive} />
        <Sector handleSetActive={handleSetActive} />
        <International
          logos={[logo1, logo2, Aventis, Cdiscount, Pfizer, Airbus]}
        />
      </div>
    </div>
  );
};

export default Hero;
