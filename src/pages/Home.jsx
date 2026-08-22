import UGCGallery from "../components/UGCGallery";
import FeedbackSection from "../components/FeedbackSection";
import HeroSection from "../components/home/HeroSection";
import TrustBadges from "../components/common/TrustBadges";
import OurInfrastuctureSection from "../components/OurInfrastructureSection";
import OurServicesCarousel from "../components/OurServicesCarousel";

 export default function Home() {
   return (
     <>
      <HeroSection />
      <TrustBadges />
      <OurInfrastuctureSection />
      <OurServicesCarousel />
      <FeedbackSection />
    </>
   );
 }