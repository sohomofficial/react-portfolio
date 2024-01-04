import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import pfp from "../avatar.png";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const navigation = [
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact Me", id: "contact" },
];

export default function Hero() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleToggle = (e) => {
    e.target.checked ? setTheme("dark") : setTheme("light");
  };
  return (
    <div>
      <header className="fixed bg-base-300 shadow-2xl shadow-neutral inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <p className="-m-1.5 p-1.5 font-semibold">React Portfolio</p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-semibold leading-6 cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="hidden"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />

              <SunIcon className="swap-off fill-current w-6 h-6" />
              <MoonIcon className="swap-on fill-current w-6 h-6" />
            </label>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/3 overflow-y-auto backdrop-brightness-90 backdrop-blur-2xl bg-transparent px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5">
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={handleToggle}
                    checked={theme === "light" ? false : true}
                  />
                  <SunIcon className="swap-off fill-current w-6 h-6" />
                  <MoonIcon className="swap-on fill-current w-6 h-6" />
                </label>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 btn btn-ghost"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-32"
            data-aos="zoom-in"
          >
            <div className="grid justify-center items-center">
              <img
                src={pfp}
                alt="Sohom Mondal"
                className="w-72 rounded-full drop-shadow-2xl"
              />
            </div>
            <div className="grid justify-center items-center mt-3">
              <div className="text-center">
                <div className="text-2xl tracking-tight sm:text-3xl">
                  Hello, I'm
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Sohom Mondal
                </h1>
                <p className="mt-6 text-2xl leading-8">
                  <TypeAnimation
                    sequence={[
                      "I'm a Frontend Developer",
                      2000,
                      "I'm a UI/UX Designer",
                      2000,
                      "I'm a Web Developer",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla venenatis quis nibh ut laoreet. Sed imperdiet leo nec
                    ex dapibus mollis.
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                  <button className="btn btn-outline btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-8 w-8"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </button>
                  <button className="btn btn-outline btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
