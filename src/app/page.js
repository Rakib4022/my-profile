import About from "@/components/About";
import Banner from "@/components/Banner";
import Porfolio from "@/components/Porfolio";
import Qualification from "@/components/Qualification";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";



export default function Home() {
  return (
    <main>
      <Banner></Banner>
      
      <About></About>
      
      <Skills></Skills>
     
      <Qualification></Qualification>
      <Porfolio></Porfolio>
      <Reviews></Reviews>
    </main>
  );
}
