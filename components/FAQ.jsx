import changeLanguage from "stores/languageContent";

export default function Faq() {
  return (
    <div id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {changeLanguage().faq.title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {changeLanguage().faq.hook}
              <a
                href="tel:05 53 88 68 35"
                title="telephone number"
                className="font-medium text-logo-amber hover:text-amber-700"
              >
                {" "}
                0033 (0) 5 53 88 68 35
              </a>
              .
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {changeLanguage().faq.questions.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
