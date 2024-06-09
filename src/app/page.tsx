import Footer from "@/components/footer";
import Header from "@/components/header";
import HomeSection from "@/components/sections/home";
import HeaderTop from "@/components/header-top";
import Contact from "@/components/sections/contact";
import Explore from "@/components/sections/explore";
import HowItWorks from "@/components/sections/how-it-works";
import News from "@/components/sections/news";
import Reviews from "@/components/sections/reviews";
import Statistics from "@/components/sections/statistics";
import Topics from "@/components/sections/topics";

export default function Home() {
  return (<>
    <HeaderTop/>
    <Header/>

    <HomeSection/>
    <Topics/>
    <HowItWorks/>
    <Explore/>
    <Reviews/>
    <Statistics/>
    <News/>
    <Contact/>
    <Footer/>
  </>);
}
