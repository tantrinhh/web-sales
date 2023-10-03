import React from "react";
import Logo from "../../assets/Logo.png";
import { BiUserPlus } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" bg-[#FFFFFF]  ">
        <div className=" justify-between h-[100px] flex items-center  ml-[4%] mr-[5%]">
          <div className="flex">
            <div className="mt-1">
              <img src={Logo} alt="" />
            </div>
            <div className=" ml-1 font-bold text-[34px] leading-10">
              Furniro
            </div>
          </div>
          <div>
            <ul className="list-none flex gap-x-10 justify-between font-medium text-lg leading-6">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/blog">Blog</Link>

              <Link to="/contact">Contact</Link>
            </ul>
          </div>
          <div className="flex gap-x-8">
            <div>
              <BiUserPlus style={{ width: "23px", height: "23px" }} />
            </div>
            <div>
              <FiSearch style={{ width: "23px", height: "23px" }} />
            </div>
            <div>
              <AiOutlineHeart style={{ width: "23px", height: "23px" }} />
            </div>
            <div>
              <Link to="/cart">
                {" "}
                <AiOutlineShoppingCart
                  style={{ width: "23px", height: "23px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
