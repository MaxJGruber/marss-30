import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import introPic from "../Assets/homepage_pic.jpg";
import logo from "../Assets/marss_logo.png";
import goToSection from "../GoToSection";

export default function LandingPage(props) {
  return (
    <div className="relative bg-logo-white">
      <Popover className="relative bg-logo-dark shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <img
                    className="h-10 w-auto sm:h-12 rounded-md logo"
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
                  <div
                    onClick={() => goToSection("#services")}
                    className="text-base font-medium text-logo-white "
                  >
                    {props.landingPageContent.navlinks.services}
                  </div>

                  <div
                    onClick={() => goToSection("#pricing")}
                    className="text-base font-medium text-logo-white "
                  >
                    {props.landingPageContent.navlinks.pricing}
                  </div>
                  <div
                    onClick={() => goToSection("#pricing")}
                    className="text-base font-medium text-logo-white"
                  >
                    {props.landingPageContent.navlinks.timesLoca}
                  </div>
                  <div
                    onClick={() => goToSection("#bio")}
                    className="text-base font-medium text-logo-white"
                  >
                    {props.landingPageContent.navlinks.bio}
                  </div>
                  <div
                    onClick={() => goToSection("#faq")}
                    className="text-base font-medium text-logo-white"
                  >
                    {props.landingPageContent.navlinks.faq}
                  </div>
                  <div
                    onClick={() => goToSection("#gallery")}
                    className="text-base font-medium text-logo-white"
                  >
                    {props.landingPageContent.navlinks.gallery}
                  </div>
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <NavLink
                    exact
                    to="/"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-logo-white bg-logo-amber hover:bg-amber-700"
                  >
                    English
                  </NavLink>
                  <NavLink
                    to="/fr"
                    className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-logo-white bg-logo-amber hover:bg-amber-700"
                  >
                    Français
                  </NavLink>
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
                        {props.landingPageContent.services &&
                          props.landingPageContent.services.map((item) => (
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
                        {props.landingPageContent.navlinks.pricing}
                      </div>
                      <div
                        onClick={() => goToSection("#pricing")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {props.landingPageContent.navlinks.timesLoca}
                      </div>
                      <div
                        onClick={() => goToSection("#bio")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {props.landingPageContent.navlinks.bio}
                      </div>
                      <div
                        onClick={() => goToSection("#faq")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {props.landingPageContent.navlinks.faq}
                      </div>
                      <div
                        onClick={() => goToSection("#gallery")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {props.landingPageContent.navlinks.gallery}
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
                {props.landingPageContent.taglinePart1}
              </span>{" "}
              <span className="block text-logo-amber xl:inline">
                {props.landingPageContent.taglinePart2}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl pre-formatted">
              {props.landingPageContent.introPart1}
            </p>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl pre-formatted">
              {" "}
              {props.landingPageContent.introPart2}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="tel:05 53 88 68 35"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-logo-amber hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
                >
                  {props.landingPageContent.button1}
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://www.google.fr/maps/place/30+Avenue+de+Miramont,+47800+Allemans-du-Dropt/@44.6277956,0.2895088,17z/data=!3m1!4b1!4m5!3m4!1s0x12aa94a8f144786b:0x3d55a626d8c6d00f!8m2!3d44.6277918!4d0.2916975"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  {props.landingPageContent.button2}
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
