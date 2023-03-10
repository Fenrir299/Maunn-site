import React, { useState, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import Navbar from "../components/Navbar";
import Clients from "../components/Clients";
import Innovation from "../components/Innovation";
import Sector from "../components/Sectors";
import International from "../components/Internationnal";
import Main from "../components/Main";
import Maunn from "../assets/maunn-title.png";
import Pfizer from "../assets/Pfizer.png";
import Airbus from "../assets/Airbus.png";
import Aventis from "../assets/aventis.png";
import Footer from "../components/Footer";
import Dassault from "../assets/dassault.png";
import Merck from "../assets/merck.png";
import Sante from "../assets/Ministère_de_la_Santé_et_de_la_Prévention.png";

const Hero: React.FC = () => {
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
      <Main handleSetActive={handleSetActive} />
      <International
        logos={[Maunn, Aventis, Pfizer, Airbus, Dassault, Merck, Sante]}
      />
      <Innovation handleSetActive={handleSetActive} />
      <Clients handleSetActive={handleSetActive} />
      <Sector handleSetActive={handleSetActive} />
      <Footer handleSetActive={handleSetActive} />
    </div>
  );
};

export default Hero;
