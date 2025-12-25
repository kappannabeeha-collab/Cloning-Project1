import { useEffect, useState } from "react";
import axios from "axios";
import "./Sales.css";

const Sales = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/sales");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching sales:", err);
      }
    };

    fetchSales();
  }, []);

  return (
    <div className="sales-section">
      <h2>Sale Is Live</h2>

      <div className="sales-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
