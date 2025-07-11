import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#83122A] dark:bg-[#1C1A27] text-white py-4 px-5 lg:px-14 flex items-center justify-between">
      <div className="flex items-center gap-1.5 text-2xl font-bold text-white">
        <MdOutlineRestaurant />
        <span>QuickBites</span>
      </div>

      <nav className="hidden md:flex space-x-8 font-medium">
        <button onClick={() => navigateToSection("home")} className="hover:text-orange-400">Home</button>
        <button onClick={() => navigateToSection("dishes")} className="hover:text-orange-400">Dishes</button>
        <button onClick={() => navigateToSection("about")} className="hover:text-orange-400">About</button>
        <button onClick={() => navigateToSection("menu")} className="hover:text-orange-400">Menu</button>
        <button onClick={() => navigateToSection("review")} className="hover:text-orange-400">
  Reviews
</button>

      </nav>

      <div className="flex items-center space-x-4">
        <button className="hidden md:flex text-gray-400 hover:text-orange-400 text-xl">
          <FaShoppingCart />
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-gray-400 hover:bg-orange-600 transition text-white py-2 px-4 rounded-full text-sm font-medium"
        >
          Register Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;



