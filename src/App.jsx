import { AdvertisementSection } from "./Components/AdvertisementSection/AdSection";
import { DesignImages } from "./Components/DesignImages";
import { FeaturesSection } from "./Components/FeatureSection/FeaturesSection";
import { Footer } from "./Components/Footer/Footer";
import { HomePage } from "./Components/HomePage/Home";
import { LogoCarousel } from "./Components/LogoCarousel/LogoCarousel";
import { MotivationSection } from "./Components/Motivation/MotivationComponent";
import { NavBar } from "./Components/Navbar/Nav";
import { PortfolioSection } from "./Components/PortfolioSection";
import { ProgressSection } from "./Components/Progress/Progress";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <FeaturesSection />
      <PortfolioSection />
      <DesignImages />
      <ProgressSection />
      <MotivationSection />
      <AdvertisementSection />
      <LogoCarousel />
      <Footer />
    </>
  );
}

export default App;
