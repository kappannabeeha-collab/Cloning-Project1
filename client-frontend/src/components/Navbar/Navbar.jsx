import { FiUser, FiShoppingBag } from "react-icons/fi";
import boatlogo from "../../assets/boatlogo.png";

const categories = [
  "True Wireless Earbuds",
  "Personalised Products",
  "Neckbands",
  "Smart Watches",
  "Wireless Headphones",
  "Wireless Speakers",
  "Wired Headphones",
  "Wired Earphones",
  "Soundbars",
  "Gaming Series",
  "Party Speakers",
  "Chargers",
  "Power Banks",
  "Cables",
  "Superhero Collection",
  "Trebel for Women",
  "Limited Edition",
  "boAt Tag",
  "Mobile Accessories",
];

const moreLinks = [
  "Daily Deals",
  "Blogs",
  "Refer & Earn",
  "Careers",
  "Social Responsibility",
  "Store Locator",
  "boAt Community",
  "boAt Lifestyle",
  "Search Smartwatches",
];

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-8">
          <img src={boatlogo} alt="boAt Logo" className="h-7 w-auto object-contain" />

          {/* Categories Dropdown */}
          <div className="relative group">
            <button className="font-normal text-[14px]">Categories</button>
            <div className="absolute left-0 top-full mt-4 hidden group-hover:block bg-white shadow-xl p-6 w-[720px]">
              <div className="grid grid-cols-3 gap-3 text-sm">
                {categories.map((item, index) => (
                  <p
                    key={index}
                    className="hover:text-red-600 cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Static Nav Items */}
          <span className="cursor-pointer font-normal text-[14px]">boAt Personalization</span>
          <span className="cursor-pointer font-normal text-[14px]">Corporate Orders</span>
          <span className="cursor-pointer font-normal text-[14px]">Gifting Store</span>

          {/* More Dropdown */}
          <div className="relative group">
            <button className="font-normal text-[14px]">More</button>
            <div className="absolute left-0 top-full mt-4 hidden group-hover:block bg-white shadow-xl p-4 w-64">
              <ul className="space-y-2 text-sm">
                {moreLinks.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-red-600 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-5">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-4 py-1 text-sm hidden md:block"
          />
          <FiUser className="text-xl cursor-pointer" />
          <FiShoppingBag className="text-xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
