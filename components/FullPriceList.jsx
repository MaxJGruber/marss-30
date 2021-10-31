import changeLanguage from "stores/languageContent";

const FullPriceList = () => (
  <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
    <div className="sm:flex sm:flex-col sm:align-center">
      <h1 className="text-5xl font-extrabold text-logo-amber sm:text-center">
        {changeLanguage().fullPriceListContent.headline}
      </h1>
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

export default FullPriceList;
