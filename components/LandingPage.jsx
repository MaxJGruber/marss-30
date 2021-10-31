import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { connect } from "react-redux";
import { goToSection } from "helpers/goToSection";
import changeLanguage from "stores/languageContent";

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (language) => dispatch({ type: "SET_LANGUAGE", language }),
});
const mapStateToProps = (state) => {
  return { language: state.language };
};

const LandingPage = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
    props.setLanguage(event.target.value);
  };

  const content = changeLanguage();
  return (
    <div id="landingpage" className="relative bg-white">
      <Popover className="relative bg-logo-dark shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="/" title="Home">
                    <img
                      className="h-10 w-auto sm:h-20 rounded-md logo"
                      src="static/marss_logo.png"
                      alt="logo Marss N30"
                    />
                  </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <div
                    onClick={() => goToSection("#services")}
                    className="text-base font-medium text-logo-white cursor-pointer"
                  >
                    {content.landingPageContent.navlinks.services}
                  </div>

                  <div
                    onClick={() => goToSection("#pricing")}
                    className="text-base font-medium text-logo-white cursor-pointer"
                  >
                    {content.landingPageContent.navlinks.pricing}
                  </div>
                  <div
                    onClick={() => goToSection("#pricing")}
                    className="text-base font-medium text-logo-white cursor-pointer"
                  >
                    {content.landingPageContent.navlinks.timesLoca}
                  </div>
                  <div
                    onClick={() => goToSection("#bio")}
                    className="text-base font-medium text-logo-white cursor-pointer"
                  >
                    {content.landingPageContent.navlinks.bio}
                  </div>
                  <div
                    onClick={() => goToSection("#faq")}
                    className="text-base font-medium text-logo-white cursor-pointer"
                  >
                    {content.landingPageContent.navlinks.faq}
                  </div>
                  <div
                    onClick={() => goToSection("#gallery")}
                    className="text-base font-medium text-logo-white cursor-pointer"
                  >
                    {content.landingPageContent.navlinks.gallery}
                  </div>
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <button
                    onClick={handleChange}
                    value="en"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-logo-white bg-logo-amber hover:bg-amber-700 focus:outline-none"
                  >
                    English
                  </button>
                  <button
                    onClick={handleChange}
                    value="fr"
                    className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-logo-white bg-logo-amber hover:bg-amber-700 focus:outline-none"
                  >
                    Français
                  </button>
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
                          src="static/marss_logo.png"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <div
                        onClick={() => goToSection("#services")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {content.landingPageContent.navlinks.services}
                      </div>
                      <div
                        onClick={() => goToSection("#pricing")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {content.landingPageContent.navlinks.pricing}
                      </div>
                      <div
                        onClick={() => goToSection("#times")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {content.landingPageContent.navlinks.timesLoca}
                      </div>
                      <div
                        onClick={() => goToSection("#bio")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {content.landingPageContent.navlinks.bio}
                      </div>
                      <div
                        onClick={() => goToSection("#faq")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {content.landingPageContent.navlinks.faq}
                      </div>
                      <div
                        onClick={() => goToSection("#gallery")}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                      >
                        {content.landingPageContent.navlinks.gallery}
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                      <button
                        onClick={handleChange}
                        value="en"
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-logo-white bg-logo-amber hover:bg-amber-700 "
                      >
                        English
                      </button>
                      <button
                        onClick={handleChange}
                        value="fr"
                        className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-logo-white bg-logo-amber hover:bg-amber-700"
                      >
                        Français
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <main className="lg:relative min-h-screen">
        <div className="mx-auto max-w-7xl w-full pt-20 pb-20 text-center lg:py-45 lg:text-left">
          <div className="px-4 md:py-12 sm:py-0 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                {content.landingPageContent.taglinePart1}
              </span>
              <span className="block text-logo-amber xl:inline">
                &nbsp;{content.landingPageContent.taglinePart2}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl pre-formatted">
              {content.landingPageContent.introPart1}
            </p>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl pre-formatted">
              {content.landingPageContent.introPart2}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="tel:05 53 88 68 35"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-logo-amber hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
                >
                  {content.landingPageContent.button1}
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://www.google.fr/maps/place/30+Avenue+de+Miramont,+47800+Allemans-du-Dropt/@44.6277956,0.2895088,17z/data=!3m1!4b1!4m5!3m4!1s0x12aa94a8f144786b:0x3d55a626d8c6d00f!8m2!3d44.6277918!4d0.2916975"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  {content.landingPageContent.button2}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="static/homepage_pic.jpg"
            alt="styling by Marss"
          />
        </div>
      </main>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
