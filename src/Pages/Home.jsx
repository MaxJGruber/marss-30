import React from "react";
import LandingPage from "../Components/LandingPage";
import TopPricing from "../Components/TopPricing";
import FullPriceList from "../Components/FullPriceList";
import FAQ from "../Components/FAQ";
import Bio from "../Components/Bio";
import Services from "../Components/Services";
import ContactInfo from "../Components/ContactInfo";
import PhotoGallery from "../Components/PhotoGallery";
import CookiesBanner from "../Components/CookiesBanner";
import CookiesPolicyPopup from "../Components/CookiesPolicyPopup";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <CookiesPolicyPopup />
      <LandingPage />
      <Services />
      <TopPricing />
      <FullPriceList />
      <ContactInfo />
      <Bio />
      <PhotoGallery />
      <FAQ />
      <Footer />
      <CookiesBanner />
    </div>
  );
};

export default Home;
