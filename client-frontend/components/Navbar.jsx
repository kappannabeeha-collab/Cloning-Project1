import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold tracking-wide">
        boAt
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link to="/cart" className="hover:text-gray-300">
          Cart
        </Link>
        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
