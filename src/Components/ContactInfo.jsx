import React from "react";
import AppMap from "./Map";

const ContactInfo = () => {
  return (
    <div className="my-10 bg-white flex items-center flex-col">
      <h2 className="mb-10 text-5xl font-extrabold text-logo-amber sm:text-center">
        Times & Location
      </h2>
      <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl max-w-7xl font-extrabold text-gray-900 sm:text-4xl">
          <span className="block">Open</span>
          <span className="block">Tuesday to Friday</span>
          <span className="block text-indigo-600">9:30AM-6PM</span>
          <span className="block">Saturday</span>
          <span className="block text-indigo-600">9:30AM-5PM</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="mx-10 inline-flex rounded-md ">
            <AppMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
