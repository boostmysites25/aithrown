import GetInTouch from "../Components/GetInTouch";
// import LogoSlider from "../Components/LogoSlider";
import TestComponent from "../Components/TestComponent";
import ServicesList from "../Components/ServicesList";
import BestServicesSlider from "./HomePageSection/BestServicesSlider";
import HomepageBanner from "./HomePageSection/HomepageBanner";
import IndustriesWeServe from "./HomePageSection/IndustriesWeServe";
import CompanyAchievements from "../Components/CompanyAchievements";
import WhyChooseUs from "../Components/WhyChooseUs";
import AwardsShowcase from "../Components/AwardsShowcase";
import Testimonials from "../Components/Testimonials";
import SEO from "../Components/SEO";
import SocialShare from "../Components/SocialShare";

const HomePage = () => {
  return (
    <div>
      <SEO 
        title="Aithrown | AI Solutions for Business Growth"
        description="Aithrown provides cutting-edge AI solutions to help businesses grow, optimize operations, and drive innovation. Discover AI tailored for you."
        keywords="AI solutions, business growth, artificial intelligence, automation, predictive analytics, AI services"
        canonical="https://www.aithrown.com/"
      />
      <HomepageBanner />
        <TestComponent />
      <ServicesList />
      <CompanyAchievements />
      <IndustriesWeServe />
      <BestServicesSlider />
      <AwardsShowcase />
      <WhyChooseUs />
      <Testimonials />
      
      {/* Social Sharing Section */}
      <div className="wrapper py-8">
        <SocialShare 
          url="https://www.aithrown.com/"
          title="Aithrown | AI Solutions for Business Growth"
          description="Aithrown provides cutting-edge AI solutions to help businesses grow, optimize operations, and drive innovation. Discover AI tailored for you."
        />
      </div>
      
      <GetInTouch />
    </div>
  );
};

export default HomePage;
