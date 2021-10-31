import LandingPage from "components/LandingPage";
import TopPricing from "components/TopPricing";
import FullPriceList from "components/FullPriceList";
import FAQ from "components/FAQ";
import Bio from "components/Bio";
import Services from "components/Services";
import ContactInfo from "components/ContactInfo";
import PhotoGallery from "components/PhotoGallery";
import CookiesBanner from "components/CookiesBanner";
import CookiesPolicyPopup from "components/CookiesPolicyPopup";
import Footer from "components/Footer";

const Home = () => (
  <>
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
  </>
);

export default Home;
