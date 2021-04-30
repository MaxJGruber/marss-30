import React from "react";
import AppMap from "./Map";

const ContactInfo = () => {
  return (
    <div id="times" className="my-10 bg-white flex items-center flex-col">
      <h2 className="mb-10 text-5xl font-extrabold text-logo-amber sm:text-center">
        Times & Location
      </h2>
      <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl max-w-7xl font-extrabold text-gray-900 sm:text-4xl">
          <span className="block">Open</span>
          <span className="block text-3xl">From Tuesday to Friday</span>
          <span className="block text-logo-amber">9:30AM-6PM</span>
          <span className="block text-3xl">Saturday</span>
          <span className="block text-logo-amber">9:30AM-5PM</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 ">
          <div className="map-frame">
            <div className=" rounded-md map-container">
              <AppMap />
            </div>
          </div>
        </div>
        <h2 className="text-3xl max-w-7xl font-extrabold text-gray-900 sm:text-4xl">
          {" "}
          <span className="block">Address:</span>{" "}
          <span className="block text-logo-amber text-3xl">
            30 avenue de Miramont
          </span>
          <span className="block text-3xl">47800</span>{" "}
          <span className="block text-logo-amber text-3xl">
            Allemans-du-Dropt
          </span>{" "}
          <a
            href="https://www.google.fr/maps/place/30+Avenue+de+Miramont,+47800+Allemans-du-Dropt/@44.6277956,0.2895088,17z/data=!3m1!4b1!4m5!3m4!1s0x12aa94a8f144786b:0x3d55a626d8c6d00f!8m2!3d44.6277918!4d0.2916975"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-logo-white bg-amber-600 hover:bg-amber-300 hover:text-gray-900 md:py-4 md:text-lg md:px-10"
          >
            Get Directions
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ContactInfo;
