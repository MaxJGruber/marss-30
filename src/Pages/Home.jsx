import React from "react";
import LandingPage from "../Components/LandingPage";
import TopPricing from "../Components/TopPricing";
import FAQ from "../Components/FAQ";
import Bio from "../Components/Bio";
import Services from "../Components/Services";
import ContactInfo from "../Components/ContactInfo";
import PhotoGallery from "../Components/PhotoGallery";
import Footer from "../Components/Footer";

const Home = (props) => {
  return (
    <div>
      <LandingPage
        language={props.language}
        landingPageContent={props.landingPageContent}
      />
      <Services
        language={props.language}
        servicesContent={props.servicesContent}
      />
      <TopPricing
        language={props.language}
        topPricingContent={props.topPricingContent}
      />
      <ContactInfo />
      <Bio language={props.language} />
      <PhotoGallery
        language={props.language}
        photoGalleryContent={props.photoGalleryContent}
      />
      <FAQ language={props.language} />
      <Footer language={props.language} />
    </div>
  );
};

export default Home;
