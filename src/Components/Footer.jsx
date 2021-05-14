import goToSection from "../GoToSection";
import changeLanguage from "../redux/languageContent";

export default function Footer() {
  return (
    <footer className="bg-logo-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {changeLanguage().footer.navlinks.map((item) => (
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
          {changeLanguage().footer.social.map((item) => (
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
          &copy; {changeLanguage().footer.copyright}
        </p>
      </div>
    </footer>
  );
}
