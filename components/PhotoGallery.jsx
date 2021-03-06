import changeLanguage from "stores/languageContent";

const images = [
  {
    index: 1,
    imageUrl: "static/PhotoGallery_Pics/photo1.jpeg",
    alt: "haircut man",
  },
  {
    index: 2,
    imageUrl: "static/PhotoGallery_Pics/photo2.jpeg",
    alt: "blond lady outside Marss N30",
  },
  {
    index: 3,
    imageUrl: "static/PhotoGallery_Pics/photo3.jpeg",
    alt: "blond boy after haircut",
  },
  // More people...
];

const PhotoGallery = () => (
  <div id="gallery" className="bg-white">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-logo-amber">
            {changeLanguage().photoGalleryContent.headline}
          </h2>
          <p className="text-xl text-gray-500">
            {changeLanguage().photoGalleryContent.intro}
          </p>
          <p className="text-lg leading-6 font-medium text-logo-amber">
            {changeLanguage().photoGalleryContent.hook}
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            {changeLanguage().photoGalleryContent.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                title={item.name}
                className="text-gray-400 hover:text-amber-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          {images.map((image) => (
            <li key={image.index}>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2 flex justify-center">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src={image.imageUrl}
                    alt={image.alt}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default PhotoGallery;
