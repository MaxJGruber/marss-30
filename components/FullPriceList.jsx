import changeLanguage from "stores/languageContent";

export default function FullPriceList() {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h1 className="text-5xl font-extrabold text-logo-amber sm:text-center">
          {changeLanguage().fullPriceListContent.headline}
        </h1>
        {/* <p className="my-5 text-xl text-gray-500 sm:text-center">
          {changeLanguage().fullPriceListContent.intro}
        </p> */}
      </div>

      <ul className="space-y-3">
        {changeLanguage().fullPriceListContent.otherServices.map((item) => (
          <li
            key={item.id}
            className="flex bg-white shadow justify-between overflow-hidden rounded-md px-6 py-4"
          >
            <span>{item.text}</span>
            <span className="font-extrabold">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
