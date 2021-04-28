import React from "react";
import LandingPage from "../../Components/English/LandingPage";
import TopPricing from "../../Components/English/TopPricing";
import FAQ from "../../Components/English/FAQ";
import Bio from "../../Components/English/Bio";
import Services from "../../Components/English/Services";
const Home = () => {
  return (
    <div>
      <LandingPage />
      <Services />
      <TopPricing />
      <Bio />
      <FAQ />
    </div>
  );
};

export default Home;
