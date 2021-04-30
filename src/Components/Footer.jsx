import goToSection from "../GoToSection";
const navigation = {
  main: [
    { name: "Home", href: "#landingpage" },
    { name: "Pricing", href: "#pricing" },
    { name: "Bio", href: "#bio" },
    { name: "Photo Gallery", href: "#gallery" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/Marssno30",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-logo-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <div
                onClick={() => goToSection(item.href)}
                className="text-base text-logo-white hover:text-gray-900 cursor-pointer"
              >
                {item.name}
              </div>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-logo-white">
          &copy; 2021 by Max Gruber. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
