import "./MiniHero.css";
import blog1 from "../../assets/blog1.png"; // Replace with your actual image

const MiniHero = () => {
  return (
    <section className="mini-hero">
      <h2 className="mini-hero-title">Explore Nirvana</h2>
      <div className="mini-hero-image">
        <img src={blog1} alt="Explore Nirvana Earphones" />
      </div>
    </section>
  );
};

export default MiniHero;
