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
      <div className="  ">
        <div className="  fixed z-50 w-full bg-[#FFFFFF]  justify-between h-[100px] flex items-center px-10 ">
          <div className="flex">
            <div className="mt-1">
              <img src={Logo} alt="" />
            </div>
            <div className=" ml-1 font-bold text-[34px] leading-10">
              <Link to="#">Furniro</Link>
            </div>
          </div>
          <div>
            <ul className="list-none  flex gap-x-10 justify-between font-medium text-lg leading-6">
              <div className="hover:text-[#B88E2F]">
                <Link to="/">Home</Link>
              </div>
              <div className="hover:text-[#B88E2F]">
                <Link to="/shop">Shop</Link>
              </div>
              <div className="hover:text-[#B88E2F]">
                {" "}
                <Link to="/blog">Blog</Link>
              </div>

              <div className="hover:text-[#B88E2F]">
                {" "}
                <Link to="/contact">Contact</Link>
              </div>
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
