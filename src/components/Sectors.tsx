import React from "react";
import {
  CodeBracketIcon,
  BuildingOffice2Icon,
  RocketLaunchIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  LightBulbIcon,
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import Maunn from "../assets/maunn.png";
import { Link, Element } from "react-scroll";

interface SectorProps {
  handleSetActive: (to: React.SetStateAction<string>) => void;
}

const Sector: React.FC<SectorProps> = ({ handleSetActive }) => {
  return (
    <Element name="Sector">
      <section
        className="align-middle lg:h-full justify-center py-12 items-center bg-white dark:bg-gray-800
        text-right text-gray-800 dark:text-white flex-row"
        style={{
          backgroundImage: `url(${Maunn})`,

          backgroundSize: "40%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="align-middle lg:h-full justify-center py-12 items-center">
          <div className="grid grid-cols-1 p-12 gap-9 align-middle sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="p-12 text-center backdrop-blur-xl  border-2 dark:border-gray-600
             border-gray-300 rounded-3xl items-center w-full"
            >
              <CodeBracketIcon className="h-24 w-full" strokeWidth={2} />
              <h3 className="text-3xl p-12 font-bold">Informatique</h3>
            </div>
            <div
              className="p-12 text-center backdrop-blur-xl  border-2 dark:border-gray-600
             border-gray-300 rounded-3xl items-center w-full"
            >
              <BuildingOffice2Icon className="h-24 w-full" strokeWidth={2} />
              <h3 className="text-3xl p-12 font-bold">Génie civil</h3>
            </div>
            <div
              className="p-12 text-center backdrop-blur-xl  border-2 dark:border-gray-600
             border-gray-300 rounded-3xl items-center w-full"
            >
              <RocketLaunchIcon className="h-24 w-full" strokeWidth={2} />
              <h3 className="text-3xl p-12 font-bold">Aéro</h3>
            </div>
            <div
              className="p-12 text-center backdrop-blur-xl  border-2 dark:border-gray-600
             border-gray-300 rounded-3xl items-center w-full"
            >
              <BeakerIcon className="h-24 w-full" strokeWidth={2} />
              <h3 className="text-3xl p-12 font-bold">Recherche</h3>
            </div>
            <div
              className="p-12 text-center backdrop-blur-xl  border-2 dark:border-gray-600
             border-gray-300 rounded-3xl items-center w-full"
            >
              <BuildingLibraryIcon className="h-24 w-full" strokeWidth={2} />
              <h3 className="text-3xl p-12 font-bold">Bancaire</h3>
            </div>

            <div className="p-12 text-center backdrop-blur-xl  border-2 dark:border-gray-600 border-gray-300 rounded-3xl items-center w-full">
              <ShoppingCartIcon className="h-24 w-full" strokeWidth={2} />
              <h3 className="text-3xl p-12 font-bold">Grande Distribution</h3>
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
export default Sector;
