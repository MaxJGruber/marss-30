import changeLanguage from "../redux/languageContent";

export default function TopPricing() {
  return (
    <div id="pricing" className="bg-white">
      <div className="max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-logo-amber sm:text-center">
            {changeLanguage().topPricingContent.headline}
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            {changeLanguage().topPricingContent.intro}
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {changeLanguage().topPricingContent.topPrices.map((tier) => (
            <div
              key={tier.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-2xl font-extrabold text-gray-900">
                    {tier.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
