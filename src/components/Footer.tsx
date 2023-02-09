import React from "react";
import { Link, Element } from "react-scroll";
import LogoBlack from "../assets/logo-uni-black.png";
import LogoWhite from "../assets/logo-uni-blanc.png";

interface FooterProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Footer: React.FC<FooterProps> = ({ handleSetActive }) => {
  return (
    <Element name="footer">
      <section
        className="p-32 lg:px-96 items-center w-full justify-center h
       text-gray-800 dark:text-white grid grid-cols-1 gap-12 align-middle bg-gray-300 
        sm:grid-cols-2 lg:grid-cols-3"
      >
        <img className="h-24  dark:invert" src={LogoBlack} alt="" />

        <div className="">
          <Link
            activeClass="active"
            className="h-12
            font-bold text-2xl
            transition duration-150 ease-in-out py-3 px-6 rounded-full bg-transparent
         hover:text-gray-500"
            to="main"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            Présentation
          </Link>
        </div>
        <div className="">
          <Link
            activeClass="active"
            className="h-12
            font-bold text-2xl
            transition duration-150 ease-in-out py-3 px-6 rounded-full bg-transparent
         hover:text-gray-500"
            to="main"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            Innovations
          </Link>
        </div>
        <div className="">
          <Link
            activeClass="active"
            className="h-12
            font-bold text-2xl
            transition duration-150 ease-in-out py-3 px-6 rounded-full bg-transparent
         hover:text-maunn-prune"
            to="main"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            Partenaire
          </Link>
        </div>
        <div className="">
          <Link
            activeClass="active"
            className="h-12
            font-bold text-2xl
            transition duration-150 ease-in-out py-3 px-6 rounded-full bg-transparent
         hover:text-gray-500"
            to="main"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            Nos secteurs
          </Link>
        </div>
      </section>
    </Element>
  );
};
export default Footer;
