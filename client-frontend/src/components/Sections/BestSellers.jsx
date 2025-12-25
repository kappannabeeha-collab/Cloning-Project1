import "./BestSellers.css";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";

const products = [
  {
    id: 1,
    name: "Airdopes 141",
    price: "₹1,299",
    img: product1,
  },
  {
    id: 2,
    name: "Rockerz 255 Pro+",
    price: "₹1,499",
    img: product2,
  },
  {
    id: 3,
    name: "Stone 350",
    price: "₹1,799",
    img: product3,
  }
];

const BestSellers = () => {
  return (
    <section className="explore-section">
      <h2 className="section-title">Explore Bestsellers</h2>

      <div className="explore-wrapper">
        {products.map((item) => (
          <div className="explore-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
