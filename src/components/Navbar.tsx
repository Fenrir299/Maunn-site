import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, MoonIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import Logo from "../assets/maunn-title.png";
import Band from "./Band";

const navigation = [
  { name: "Présentation", href: "/", current: true },
  { name: "À propos", href: "About", current: false },
  { name: "Contact", href: "Contact", current: false },
  { name: "On recrute", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const [theme, setTheme] = React.useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [current, setCurrent] = React.useState<Boolean>(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-colors-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeCurrent = (current: boolean) => {
    setCurrent(current === false ? true : false);
  };

  return (
    <Disclosure
      as="nav"
      className="bg-white border-y-2 sticky top-0 border-gray-300 dark:border-gray-600 dark:bg-gray-800 
      h-auto align-middle items-center justify-center"
    >
      {({ open }) => (
        <>
          <Band />

          <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
            <div className="relative flex h-full justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700
                 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={Logo}
                    alt="maunn"
                  />
                  <img
                    className="hidden h-10 w-auto lg:block"
                    src={Logo}
                    alt="maunn"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-maunn-prune hover:bg-gray-600 text-white"
                            : "text-gray-800 hover:bg-gray-700 hover:text-white dark:text-white",
                          "px-3 py-2 rounded-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <button onClick={() => changeCurrent(item.current)}>
                          {item.name}
                        </button>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-y-0 right-0 flex items-center
               pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
              >
                <button
                  className="rounded-full text-gray-400 hover:text-white"
                  onClick={handleThemeSwitch}
                >
                  <span className="sr-only">Night Mode</span>
                  <MoonIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-700 hover:text-white",
                    "block rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
