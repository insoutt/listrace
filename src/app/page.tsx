import Header from "@/components/header";
import HeaderTop from "@/components/header-top";
import Contact from "@/components/sections/contact";
import HowItWorks from "@/components/sections/how-it-works";

export default function Home() {
  return (<>
    <HeaderTop/>
    <Header/>
    <HowItWorks/>
    <Contact/>
  </>);
}
