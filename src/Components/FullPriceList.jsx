import React, { useState, useEffect } from "react";

const basicHaircutsWomen = [
  {
    id: 1,
    text:
      "Forfait coupe coiffage (shampooing, soin, coupe, brushing/mis en plis",
  },
  {
    id: 2,
    text: "Cheveux court coiffage",
    price: 32,
  },
  {
    id: 3,
    text: "Cheveux mi-long coiffage (carré)",
    price: 37,
  },
  {
    id: 4,
    text: "Cheveux long coiffage (épaule)",
    price: 41,
  },
  {
    id: 5,
    text: "Cheveux très long (après épaule)",
    price: 47,
  },
  // More items...
];

const basicHaircutsMen = [
  {
    id: 1,
    text: "Forfait coupe coiffage (shampooing, soin, coupe, coiffage)",
  },
  {
    id: 2,
    text: "Cheveux court séchage",
    price: "15€ à 19€",
  },
  // More items...
];

const hairColorMen = [
  {
    id: 1,
    text:
      "Forfait couleur (couleur (cover 5’ L’oréal) shampooing, coupe, coiffage)",
  },
  {
    id: 2,
    text: "Cheveux court",
    price: 30,
  },
  {
    id: 2,
    text: "Coupe tondeuse sans shampoing",
    price: 11,
  },
  {
    id: 2,
    text: "Barbe tondeuse",
    price: 5,
  },
  {
    id: 2,
    text: "Soin profond (sous chaleur)",
    price: 10,
  },
  // More items...
];

const haircutChildren = [
  {
    id: 1,
    text: "Tarif Services Enfant",
  },
  {
    id: 2,
    text: "Coupe enfant jusqu’à 3 ans",
    price: 13,
  },
  {
    id: 2,
    text: "Coupe fillette de 4 à 10 ans",
    price: 20,
  },
  {
    id: 2,
    text: "Coupe garçon de 4 à 11 ans",
    price: 15,
  },
  // More items...
];

const hairColorWomen = [
  {
    id: 6,
    text: "Forfait couleur (couleur, shampooing, soin, coupe, brushing)",
  },
  {
    id: 7,
    text: "Cheveux court coiffage",
    price: 58,
  },
  {
    id: 8,
    text: "Cheveux mi-long coiffage à partir de",
    price: 66,
  },
  {
    id: 9,
    text: "Cheveux long coiffage à partir de",
    price: 71,
  },
  // More items...
];

const hairFormWomen = [
  {
    id: 10,
    text: "Forfait mise en forme (perm, shampooing, soin, coupe, brushing)",
  },
  {
    id: 11,
    text: "Cheveux court",
    price: 59,
  },
  {
    id: 12,
    text: "Cheveux mi-long coiffage & long",
    price: "sur devis",
  },

  // More items...
];

const hairStyleWomen = [
  {
    id: 13,
    text: "Forfait coiffage (shampooing brushing ou mis en plis)",
  },
  {
    id: 14,
    text: "Cheveux court coiffage à partir de",
    price: 20,
  },
  {
    id: 15,
    text: "Cheveux mi-long coiffage soin à partir de",
    price: 23,
  },
  {
    id: 16,
    text: "Cheveux long coiffage à partir de",
    price: 29,
  },

  // More items...
];

const meches = [
  {
    id: 17,
    text: "Mêches",
  },
  {
    id: 18,
    text: "Mêches ½ tête mêches papier",
    price: "50€ à 60€",
  },
  {
    id: 19,
    text: "Tête entière mêches papier",
    price: "70€ à 90€",
  },
  {
    id: 20,
    text: "Décoloration",
    price: "30€ à 90€",
  },
  {
    id: 21,
    text: "Démaquillage couleur",
    price: 25,
  },

  // More items...
];
const other = [
  {
    id: 22,
    text: "Chignons",
    price: "sur devis",
  },
  {
    id: 23,
    text: "Soin profond (sous chaleur)",
    price: 12,
  },
  // More items...
];
export default function FullPriceList(props) {
  let [selected, setSelected] = useState("women");

  useEffect(() => setSelected((element) => (selected = element)));

  return (
    <div className="max-w-7xl mx-auto py-15 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h1 className="text-5xl font-extrabold text-logo-amber sm:text-center">
          The complete catalogue
        </h1>
        <p className="my-5 text-xl text-gray-500 sm:text-center">
          Select which listing you want
        </p>
        <span className="relative z-0 mb-5 rounded-md">
          <button
            type="button"
            onClick={() => setSelected("women")}
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
          >
            Women
          </button>
          <button
            type="button"
            onClick={() => setSelected("men")}
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
          >
            Men
          </button>
          <button
            type="button"
            onClick={() => setSelected("children")}
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
          >
            Children
          </button>
        </span>
      </div>

      <ul className="space-y-3">
        {selected === "women" &&
          basicHaircutsWomen.map((item) => (
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
          hairColorWomen.map((item) => (
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
          hairFormWomen.map((item) => (
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
          hairStyleWomen.map((item) => (
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
          meches.map((item) => (
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
          other.map((item) => (
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
          basicHaircutsMen.map((item) => (
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
          hairColorMen.map((item) => (
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
          haircutChildren.map((item) => (
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
