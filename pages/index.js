import CarouselSlider from "./Component/CarouselSlider";
import ContactUs from "./Component/ContactUs";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import OurServices from "./Component/OurSevices";
import Projects from "./Component/Projects";
export default function Home() {
  return (
    <>
     <CarouselSlider/>
     <OurServices/>
     <Projects/>
     <ContactUs/>
    </>
  );
}
