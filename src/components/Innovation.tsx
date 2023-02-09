import React from "react";
import {
  LightBulbIcon,
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import Maunn from "../assets/maunn.png";
import { Link, Element } from "react-scroll";

interface InnovationProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Innovation: React.FC<InnovationProps> = ({ handleSetActive }) => {
  return (
    <Element name="innovation">
      <section
        className="container mx-auto align-middle lg:h-full justify-center py-12 items-center bg-white dark:bg-gray-800
        text-right text-gray-800 dark:text-white flex-row"
        style={{
          backgroundImage: `url(${Maunn})`,

          backgroundSize: "40%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="align-middle lg:h-full justify-center py-12 items-center">
          <div className="grid grid-cols-1 p-12 gap-32  align-middle sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="p-12 text-center backdrop-blur-xl  border-2 dark:border-gray-600
              border-gray-300 rounded-3xl items-center w-full"
            >
              <LightBulbIcon className="h-24 w-full" strokeWidth={2} />
              <h3 className="text-3xl p-12 font-bold">Innovation</h3>
              <p className="">
                MAUNN accompagne ses clients sur leurs projets d’innovation et
                de transformation digitale. MAUNN réalise de la veille
                technologique sur l’ensemble de ses actions.
              </p>
            </div>

            <div
              className="p-12 text-center backdrop-blur-xl  border-2 dark:border-gray-600
             border-gray-300 rounded-3xl items-center w-full"
            >
              <ClockIcon className="h-24 w-full" strokeWidth={2} />
              <h3 className="text-3xl p-12 font-bold">Disponibilité</h3>
              <p>
                Répondre à vos besoins nécessite d’être disponible et à
                l’écoute. Avec MAUNN nous vous assurons un service continu et
                des prestations respectant vos attentes.
              </p>
            </div>

            <div
              className="p-12 text-center backdrop-blur-xl border-2 dark:border-gray-600
             border-gray-300 rounded-3xl  items-center w-full"
            >
              <ChatBubbleBottomCenterTextIcon
                className="h-24  w-full"
                strokeWidth={2}
              />
              <h3 className="text-3xl lg:p-12 font-bold">Conseil</h3>
              <p>
                La réalisation de vos projets nécessite une expertise sur vos
                problématiques métiers. MAUNN et ses collaborateurs vous
                apportent conseils et solutions sur vos périmètres
                technologiques.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            activeClass="active"
            className="border-4 h-12 text-gray-800 dark:text-white 
            font-bold text-2xl hover:text-gray-300 
            transition duration-150 ease-in-out py-3 px-6 rounded-full bg-transparent
            border-gray-800 dark:border-white hover:bg-white hover:blur-2xl"
            to="client"
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
export default Innovation;
