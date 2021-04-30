const faqs = [
  {
    question:
      "What Covid-19 prevention/sanitary measures is the salon practicing?",
    answer:
      "The staff wears masks at all times. The salon has sanitizer at the entrance for all guests. Due to the small size of the salon, a maximum of 2 people (excluding staff) can be permitted inside.",
  },
  {
    question: "Is the salon open on Sundays?",
    answer: "No, the salon is closed all day on Sundays & Mondays.",
  },
  {
    question: "Can I get a haircut without an appointment?",
    answer:
      "This depends solely on the schedule of the staff. It is recommended to book ahead to make for a more comfortable and safer visit for both staff and guest.",
  },
  // More questions...
];

export default function Faq() {
  return (
    <div id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Call the salon directly
              at
              <a
                href="tel:05 53 88 68 35"
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
              {faqs.map((faq) => (
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
