
import { Carousel } from "../../components/Carousel/carousel";
import HeroSection from "../../components/Herosection/herosection";
import { FinalSlider } from "../../components/Slider/slider";
import { SliderVideo } from "../../components/SliderVideo/slidervideo";
import MovingText from "../../components/BelowHeroSection/belowhero";

import Doctor from "../../components/DOCTOR/doctor";
import Footer from "../../components/Footer/footer";
import FooterImage from "../../components/AboveFooterSlider/fooimage";
import Bar from"../../components/NAV-BAR/Bar";
import { Flogo } from "../../components/Whatsap-phone Icon/footerlogo";
import MovingSlider from "../../components/MovingSlider/movingSlider";

 
 export function Home() {
 
  return (
    <div>
    
   <Bar/>
   <HeroSection />
   <MovingText/>
   <FinalSlider />
     <Doctor/>
     <MovingSlider/>
      <Carousel />
      <SliderVideo />
      <FooterImage/>
      <Footer/>
      <Flogo/>    
    </div>
  );
}




