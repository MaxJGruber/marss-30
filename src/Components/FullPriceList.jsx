import React, { useState, useEffect } from "react";
import changeLanguage from "../redux/languageContent";

export default function FullPriceList(props) {
  // eslint-disable-next-line
  let [selected, setSelected] = useState("women");
  // eslint-disable-next-line
  useEffect(() => setSelected((element) => (selected = element)));

  return (
    <div className="max-w-7xl mx-auto py-15 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h1 className="text-5xl font-extrabold text-logo-amber sm:text-center">
          {changeLanguage().fullPriceListContent.headline}
        </h1>
        <p className="my-5 text-xl text-gray-500 sm:text-center">
          {changeLanguage().fullPriceListContent.intro}
        </p>
        <span className="relative z-0 mb-5 rounded-md">
          <button
            type="button"
            onClick={() => setSelected("women")}
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
          >
            {changeLanguage().fullPriceListContent.button1}
          </button>
          <button
            type="button"
            onClick={() => setSelected("men")}
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
          >
            {changeLanguage().fullPriceListContent.button2}
          </button>
          <button
            type="button"
            onClick={() => setSelected("children")}
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
          >
            {changeLanguage().fullPriceListContent.button3}
          </button>
        </span>
      </div>

      <ul className="space-y-3">
        {selected === "women" &&
          changeLanguage().fullPriceListContent.basicHaircutsWomen.map(
            (item) => (
              <li
                key={item.text}
                className={`${
                  !Object.keys(item).includes("price")
                    ? "font-extrabold"
                    : "flex"
                } bg-white shadow justify-between overflow-hidden rounded-md px-6 py-4 `}
              >
                <span>{item.text}</span>
                <span className="font-extrabold">
                  {item.price}
                  {typeof item.price === "number" ? "€" : ""}
                </span>
              </li>
            )
          )}
        {selected === "women" &&
          changeLanguage().fullPriceListContent.hairColorWomen.map((item) => (
            <li
              key={item.text}
              className={`${
                !Object.keys(item).includes("price") ? "font-extrabold" : "flex"
              } bg-white shadow justify-between overflow-hidden rounded-md px-6 py-4 `}
            >
              <span>{item.text}</span>
              <span className="font-extrabold">
                {item.price}
                {typeof item.price === "number" ? "€" : ""}
              </span>
            </li>
          ))}
        {selected === "women" &&
          changeLanguage().fullPriceListContent.hairFormWomen.map((item) => (
            <li
              key={item.text}
              className={`${
                !Object.keys(item).includes("price") ? "font-extrabold" : "flex"
              } bg-white shadow justify-between overflow-hidden rounded-md px-6 py-4 `}
            >
              <span>{item.text}</span>
              <span className="font-extrabold">
                {item.price}
                {typeof item.price === "number" ? "€" : ""}
              </span>
            </li>
          ))}
        {selected === "women" &&
          changeLanguage().fullPriceListContent.hairStyleWomen.map((item) => (
            <li
              key={item.text}
              className={`${
                !Object.keys(item).includes("price") ? "font-extrabold" : "flex"
              } bg-white shadow justify-between overflow-hidden rounded-md px-6 py-4 `}
            >
              <span>{item.text}</span>
              <span className="font-extrabold">
                {item.price}
                {typeof item.price === "number" ? "€" : ""}
              </span>
            </li>
          ))}
        {selected === "women" &&
          changeLanguage().fullPriceListContent.meches.map((item) => (
            <li
              key={item.text}
              className={`${
                !Object.keys(item).includes("price") ? "font-extrabold" : "flex"
              } bg-white shadow justify-between overflow-hidden rounded-md px-6 py-4 `}
            >
              <span>{item.text}</span>
              <span className="font-extrabold">
                {item.price}
                {typeof item.price === "number" ? "€" : ""}
              </span>
            </li>
          ))}
        {selected === "women" &&
          changeLanguage().fullPriceListContent.other.map((item) => (
            <li
              key={item.text}
              className=" bg-white flex shadow justify-between overflow-hidden rounded-md px-6 py-4"
            >
              <span>{item.text}</span>
              <span className="font-extrabold">
                {item.price}
                {typeof item.price === "number" ? "€" : ""}
              </span>
            </li>
          ))}
        {selected === "men" &&
          changeLanguage().fullPriceListContent.basicHaircutsMen.map((item) => (
            <li
              key={item.text}
              className={`${
                !Object.keys(item).includes("price") ? "font-extrabold" : "flex"
              } bg-white shadow justify-between overflow-hidden rounded-md px-6 py-4 `}
            >
              <span>{item.text}</span>
              <span className="font-extrabold">
                {item.price}
                {typeof item.price === "number" ? "€" : ""}
              </span>
            </li>
          ))}
        {selected === "men" &&
          changeLanguage().fullPriceListContent.hairColorMen.map((item) => (
            <li
              key={item.text}
              className={`${
                !Object.keys(item).includes("price") ? "font-extrabold" : "flex"
              } bg-white shadow justify-between overflow-hidden rounded-md px-6 py-4 `}
            >
              <span>{item.text}</span>
              <span className="font-extrabold">
                {item.price}
                {typeof item.price === "number" ? "€" : ""}
              </span>
            </li>
          ))}
        {selected === "children" &&
          changeLanguage().fullPriceListContent.haircutChildren.map((item) => (
            <li
              key={item.text}
              className={`${
                !Object.keys(item).includes("price") ? "font-extrabold" : "flex"
              } bg-white shadow justify-between overflow-hidden rounded-md px-6 py-4 `}
            >
              <span>{item.text}</span>
              <span className="font-extrabold">
                {item.price}
                {typeof item.price === "number" ? "€" : ""}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
