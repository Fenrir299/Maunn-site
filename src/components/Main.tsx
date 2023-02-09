import React from "react";
import { Link, Element } from "react-scroll";

interface MainProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Main: React.FC<MainProps> = ({ handleSetActive }) => {
  return (
    <Element name="main">
      <section className="container mx-auto lg:h-screen bg-white dark:bg-gray-800 text-right text-gray-800 dark:text-white">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between p-12">
          <div className="text-left sm:text-right sm:w-1/2 p-12">
            <h2 className="lg:text-6xl text-4xl pb-12 font-bold">
              Mise à disposition de concepteurs et développeurs de logiciels.
            </h2>
            <p className="lg:text-xl text-sm font-semibold">
              MAUNN est spécialisé dans le conseil, l’expertise et vous assiste
              dans réalisation de l’ensemble de vos projets digitaux. De
              l’expression du besoin au déploiement de la solution, MAUNN vous
              assiste sur l’ensemble des étapes d’un projet informatique. MAUNN
              intervient également en tant que manager de transition. Innovation
              technique , disponibilité , et conseil sont les valeurs autour
              desquelles s’articule notre vision.
            </p>
          </div>
          <div className="sm:w-1/2 sm:text-center">
            <img
              className="rounded-2xl h-64 sm:h-auto"
              alt=""
              src="https://source.unsplash.com/800x600/?consulting"
            />
          </div>
        </div>

        <div className="text-center pb-12">
          <Link
            activeClass="active"
            className="border-4 h-12 text-gray-800 dark:text-white mt-4 font-bold text-2xl hover:text-gray-300 transition duration-150 ease-in-out py-3 px-6 rounded-full bg-transparent border-gray-800 dark:border-white hover:bg-white hover:blur-2xl"
            to="innovation"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
          >
            Découvrir
          </Link>
        </div>
      </section>
    </Element>
  );
};
export default Main;
