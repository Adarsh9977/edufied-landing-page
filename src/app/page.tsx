
import { Navbar } from "./sections/Navbar";
import { BackgroundBeamsWithCollisionDemo } from "./sections/Background-effect";
import { StakeHolders } from "./sections/Stakeholders";
import { Advantages } from "./sections/Advantages";
import { Below } from "./sections/Below";
import { Contact } from "./sections/Contact";
import { News } from "./sections/News";
import { Testimonials } from "./sections/Testimonials";
import { About } from "./sections/About";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BackgroundBeamsWithCollisionDemo/>
      <StakeHolders/>
      <Advantages/>
      <Below/>
      <Contact/>
      <News/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}
