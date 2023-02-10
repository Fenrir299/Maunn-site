import React from "react";
import { Element } from "react-scroll";
import Maunn from "../assets/maunn-title.png";

interface PresentationProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Presentation: React.FC<PresentationProps> = ({ handleSetActive }) => {
  return (
    <Element name="Presentation">
      <section className="container mx-auto w-full lg:h-screen bg-white dark:bg-gray-800 text text-gray-800 dark:text-white">
        <div className="sm:w-1/2 sm:text-center">
          <img className="rounded-2xl h-64 sm:h-auto" alt="" src={Maunn} />
        </div>
        <div className="flex items-center justify-center sm:flex-row sm:justify-between p-12">
          <div className="text-center sm:w-1/2 p-12">
            <h2 className="lg:text-6xl text-4xl pb-12 font-bold">
              Qu'est-ce que MAUNN ?
            </h2>
            <p className="lg:text-xl text-sm font-semibold">
              MAUNN est une filiale du groupe UMANN, nous accompagnons nos
              clients sûrs de grands projets d'infrastructure dans le monde
              entier. Plus de 25 grands chantiers (aéroports, tramways,
              métro,..) dans le monde sont équipés de nos systèmes
              d'informations voyageurs (SIV) OpenGate et Open way.Récemment
              lancés dans le secteur de la prestation informatique, nous avons
              pour objectif d'offrir la même qualité de service dans un secteur
              qui est en constant renouveau. Nous recherchons continuellement
              des collaborateurs, forts d'expériences significatives ou juniors
              avec de l'ambition qui ont un attrait dans le domaine de la
              prestation informatique.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};
export default Presentation;
