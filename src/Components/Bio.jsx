import React from "react";
import { CameraIcon } from "@heroicons/react/solid";
import aboutPic from "../Assets/about_pic.jpeg";
import changeLanguage from "../redux/languageContent";

const Bio = () => {
  return (
    <div id="bio" className="bg-amber overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-logo-dark absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="#ff914d"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={aboutPic}
                    alt="Marss smoking on bike"
                    width={500}
                    height={800}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    {changeLanguage().bio.picDescription}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mb-6">
              <h2 className="text-base text-logo-amber font-semibold tracking-wide uppercase">
                {changeLanguage().bio.headline}
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {changeLanguage().bio.title}
              </h3>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p className="text-md text-gray-500 my-5">
                {changeLanguage().bio.intro}
              </p>
              <p className="text-md text-gray-500 my-5">
                {changeLanguage().bio.textPart1}
              </p>

              <p className="text-md text-gray-500 my-5">
                {changeLanguage().bio.textPart2}
              </p>
              <p className="text-md text-gray-500 my-5">
                {changeLanguage().bio.textPart3}
              </p>
              <p className="text-md text-gray-500 my-5">
                {changeLanguage().bio.textPart4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
