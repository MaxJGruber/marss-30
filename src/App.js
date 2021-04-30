
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { landingPageContentEN } from "./Content/English/LandingPage";
import { servicesContentEN } from "./Content/English/Services";
import { topPricingContentEN } from "./Content/English/TopPricing";
import { photoGalleryContentEN } from "./Content/English/PhotoGallery";
import { landingPageContentFR } from "./Content/French/LandingPage";
import { servicesContentFR } from "./Content/French/Services";
import { topPricingContentFR } from "./Content/French/TopPricing";
import { photoGalleryContentFR } from "./Content/French/PhotoGallery";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              language="en"
              landingPageContent={landingPageContentEN}
              servicesContent={servicesContentEN}
              topPricingContent={topPricingContentEN}
              photoGalleryContent={photoGalleryContentEN}
            />
          )}
        />
        <Route
          exact
          path="/fr"
          component={() => (
            <Home
              language="fr"
              landingPageContent={landingPageContentFR}
              servicesContent={servicesContentFR}
              topPricingContent={topPricingContentFR}
              photoGalleryContent={photoGalleryContentFR}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
