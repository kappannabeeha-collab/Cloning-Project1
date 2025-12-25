import "./Footer.css";

const footerData = [
  {
    title: "True Wireless Earbuds",
    links: [
      "Shop by Features",
      "Noise Cancellation Earbuds",
      "Best Immortal and Airdopes",
      "Large Playback Earbuds",
      "Shop by Price",
      "Earbuds Under 1000",
      "Earbuds Under 2000",
      "Earbuds Under 3000",
      "Earbuds Under 4000",
      "Earbuds Under 5000",
    ],
  },
  {
    title: "Smart Watches",
    links: [
      "Shop by Features",
      "Bluetooth Calling Smartwatches",
      "Fitness Tracker Smartwatch",
      "Big Display Smartwatch",
      "Shop by Identity",
      "Smartwatches For Women",
      "Smartwatches For Men",
      "Shop by Price",
      "Smartwatch Under 2000",
      "Smartwatch Under 3000",
      "Smartwatch Under 4000",
      "Smartwatch Under 5000",
      "Smartwatch Under 10000",
    ],
  },
  {
    title: "Wireless Speakers",
    links: [
      "Shop by Features",
      "Portable Speakers",
      "Long Playback Speakers",
      "Party Speaker with RGB Lights",
      "Speaker with Karaoke Mic",
      "Shop by Price",
      "Bluetooth Speakers Under 1000",
      "Bluetooth Speakers Under 2000",
      "Bluetooth Speakers Under 3000",
      "Bluetooth Speakers Under 5000",
      "Bluetooth Speakers Under 8000",
    ],
  },
  // Add remaining categories similarly
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>
          Imagine Marketing Limited, Unit no. 204 & 205, 2nd floor, D-wing & E-wing,
          Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
        </p>
      </div>

      <div className="footer-columns">
        {footerData.map((col, index) => (
          <div className="footer-column" key={index}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>Privacy Policy | Terms of Use | Warranty Policy | D2D Paid Repair Service Policy</p>
        <p>© 2025 Imagine Marketing Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
