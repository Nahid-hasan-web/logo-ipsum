import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full pt-[83px] absolute top-0 left-0">
        <div className="container">
          <div className="menu_row flex justify-between items-center">
            <div className="menu_logo">
              <img src="images/logo.png" alt="" />
            </div>
            <div>
              <ul className="text-2xl font-normal font-abeezee text-[#000] flex gap-[30px]">
                <li><Link to={'/'}>All Recipes</Link></li>
                <li><Link to={'/'}>Vegan</Link></li>
                <li><Link to={'/'}>Gluten-Free</Link></li>
                <li><Link to={'/'}>Shop</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
