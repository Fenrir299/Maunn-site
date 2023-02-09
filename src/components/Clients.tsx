import React from "react";
import { Link, Element } from "react-scroll";

interface ClientProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Client: React.FC<ClientProps> = ({ handleSetActive }) => {
  return (
    <Element name="client">
      <section className="container mx-auto lg:h-screen bg-white dark:bg-gray-800  text-gray-800 dark:text-white">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between p-12">
          <div className="sm:w-1/2 sm:text-center">
            <img
              className="rounded-2xl h-64 sm:h-auto"
              alt=""
              src="https://source.unsplash.com/800x600/?computing"
            />
          </div>
          <div className="lg:text-left text-center sm:w-1/2 p-12">
            <h2 className="lg:text-6xl text-4xl pb-12 font-bold">
              Plus qu'un prestataire, un partenaire sur l'ensemble de vos
              projets.
            </h2>
            <p className="lg:text-xl text-sm font-semibold">
              MAUNN se veut être un partenaire de choix vous accompagnant sur
              vos projets de l’étude à la réalisation, de la Clienttenance à
              l’évolution . Soucieux et à l’écoute, nos experts sont disposés à
              trouver des solutions et des compromis à vos problématiques
              métiers. Se formant continuellement aux nouvelles technologies,
              nos développeurs sont à même de prendre en charge tout ou partie
              de vos projets.
            </p>
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
export default Client;
