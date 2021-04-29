import photo1 from "../../Assets/PhotoGallery_Pics/photo1.jpeg";
import photo2 from "../../Assets/PhotoGallery_Pics/photo2.jpeg";
import photo3 from "../../Assets/PhotoGallery_Pics/photo3.jpeg";
import photo4 from "../../Assets/PhotoGallery_Pics/photo4.jpeg";
import photo5 from "../../Assets/PhotoGallery_Pics/photo5.jpeg";

const images = [
  {
    index: 1,
    imageUrl: photo1,
  },
  {
    index: 2,
    imageUrl: photo2,
  },
  {
    index: 3,
    imageUrl: photo3,
  },
  {
    index: 4,
    imageUrl: photo4,
  },
  {
    index: 5,
    imageUrl: photo5,
  },
  // More people...
];

export default function Example() {
  return (
    <div id="gallery" className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-500">
              Check out Martial in action & some of the amazing hairstyles he
              created!
            </p>
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {images.map((image) => (
              <li key={image.index}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={image.imageUrl}
                      alt=""
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
}
