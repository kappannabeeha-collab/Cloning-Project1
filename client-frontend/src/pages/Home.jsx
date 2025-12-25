import Navbar from "../components/Navbar/Navbar";
import HeroCarousel from "../components/Hero/HeroCarousel";
import Sales from "../components/Sections/Sales";
import BestSellers from "../components/Sections/BestSellers";
import BigDeals  from "../components/Sections/BigDeals";
import Blogs from "../components/Sections/Blogs";
import MiniHero from "../components/Sections/MiniHero";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
      <HeroCarousel />
      <Sales />
      <BigDeals/>
      <MiniHero/>
      <BestSellers/>
      <Blogs/>
      <Footer/>


    </>
  );
};

export default Home;
