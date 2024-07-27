import Image from "next/image";
import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import StepsSectionSection from "./Components/StepsSection"
import FundSection from './Components/FundSection'
import TopicsSection from './Components/TopicSection'
import CategoriesSection from './Components/CategoriesSection'
import Footer from "./Components/Footer"


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StepsSectionSection />
      <CategoriesSection />
      <TopicsSection />
      <FundSection />
      <Footer />
    </div>
  );  
}
