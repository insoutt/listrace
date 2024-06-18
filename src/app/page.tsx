// import Footer from "@/components/footer";
import Header from "@/components/header";
import HomeSection from "@/components/sections/home";
import HeaderTop from "@/components/header-top";
// import Contact from "@/components/sections/contact";
import Explore from "@/components/sections/explore";
import HowItWorks from "@/components/sections/how-it-works";
// import News from "@/components/sections/news";
import Reviews from "@/components/sections/reviews";
// import Statistics from "@/components/sections/statistics";
import Topics from "@/components/sections/topics";
// import ScrollTop from "@/components/scroll-top";
import dynamic from 'next/dynamic'

const Statistics = dynamic(() => import('../components/sections/statistics'));
const News = dynamic(() => import('../components/sections/news'));
const Contact = dynamic(() => import('../components/sections/contact'));
const Footer = dynamic(() => import('../components/footer'));
const ScrollTop = dynamic(() => import('../components/scroll-top'));



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
    <ScrollTop/>
  </>);
}
