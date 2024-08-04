import CarouselSlider from "./Component/CarouselSlider";
import ContactUs from "./Component/ContactUs";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import OurServices from "./Component/OurSevices";
import Projects from "./Component/Projects";
import SolarInfoSection from "./Component/SolarInfoSection";
import SubsudyDetails from "./Component/SubsudyDetails";
import WhyChooseSolar from "./Component/whyChoose";
export default function Home() {
  return (
    <>
     <CarouselSlider/>
     <OurServices/>
     <SubsudyDetails/>
     <Projects/>
     <SolarInfoSection/>
     <WhyChooseSolar/>
     <ContactUs/>
    </>
  );
}
