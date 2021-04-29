import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import introPic from "../../Assets/homepage_pic.jpg";
import logo from "../../Assets/marss_logo.png";
import goToSection from "../../GoToSection";

const features = [
  {
    name: "Women",
    href: "#services",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Men",
    href: "#services",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
  },
  {
    name: "Children",
    href: "#services",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Hair Products",
    href: "#services",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
];
const callsToAction = [{ name: "Contact Sales", href: "#", icon: PhoneIcon }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-amber-50 shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <img
                    className="h-10 w-auto sm:h-12 rounded-md"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-amber rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          )}
                        >
                          <span>Services</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {features.map((item) => (
                                  <div
                                    key={item.name}
                                    onClick={() => goToSection(item.href)}
                                    className="-m-3 p-3 flex items-center justify-center rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex justify-center sm:space-y-0 sm:space-x-10 sm:px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <div
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <span className="ml-3">{item.name}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <div
                    onClick={() => goToSection("#pricing")}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </div>
                  <div
                    onClick={() => goToSection("#pricing")}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Times & Location
                  </div>
                  <div
                    onClick={() => goToSection("#bio")}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Bio
                  </div>
                  <div
                    onClick={() => goToSection("#faq")}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    F.A.Q
                  </div>
                  <div
                    onClick={() => goToSection("#gallery")}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Photo Gallery
                  </div>
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <div className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700">
                    English
                  </div>
                  <div className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700">
                    Français
                  </div>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {features.map((item) => (
                          <div
                            key={item.name}
                            onClick={() => goToSection(item.href)}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <div
                        onClick={() => goToSection("#pricing")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        Pricing
                      </div>
                      <div
                        onClick={() => goToSection("#pricing")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        Times & Location
                      </div>
                      <div
                        onClick={() => goToSection("#bio")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        Bio
                      </div>
                      <div
                        onClick={() => goToSection("#faq")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        F.A.Q
                      </div>
                      <div
                        onClick={() => goToSection("#gallery")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        Photo Gallery
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
              <span className="block xl:inline">
                Enjoy the South-West of France
              </span>{" "}
              <span className="block text-amber-600 xl:inline">in style!</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl pre-formatted">
              From a trim to a hair-dye, Martial Beaugrand makes sure you get
              the hairstyle that YOU deserve.{"\n\n"} Located at Allemans du
              Dropt, Marss N°30 is open 4 and half days a week to take care of
              your hair.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="tel:05 53 88 68 35"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
                >
                  Call Now
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://www.google.fr/maps/place/30+Avenue+de+Miramont,+47800+Allemans-du-Dropt/@44.6277956,0.2895088,17z/data=!3m1!4b1!4m5!3m4!1s0x12aa94a8f144786b:0x3d55a626d8c6d00f!8m2!3d44.6277918!4d0.2916975"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={introPic}
            alt="intro-pic"
          />
        </div>
      </main>
    </div>
  );
}
