import "./BigDeals.css";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";

const categories = [
  "All Deals",
  "True Wireless",
  "Earbuds",
  "Smartwatches",
  "Speakers",
  "Neckbands",
  "Headphones",
];

const products = [
  { id: 1, name: "Airdopes 141", price: "₹1,299", img: product1 },
  { id: 2, name: "Wave Call", price: "₹1,799", img: product2 },
  { id: 3, name: "Stone 350", price: "₹1,499", img: product3 }
];

const BigDeals = () => {
  return (
    <section className="big-deals">
      <h2 className="big-title">Big Deals</h2>

      {/* Categories */}
      <div className="deal-categories">
        {categories.map((cat, index) => (
          <span key={index} className="deal-tab">
            {cat}
          </span>
        ))}
      </div>

      {/* Products */}
      <div className="deal-products">
        {products.map((item) => (
          <div className="deal-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BigDeals;
