import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { BiUserPlus } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";

import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="md:mb-[100px] mb-20">
        <div className="fixed z-50 w-full bg-[#FFFFFF] justify-between md:h-[100px] h-20 top-0 flex items-center px-10 ">
          <div className="flex">
            <div className="mt-1">
              <img src={Logo} alt="" />
            </div>
            <div className="ml-1 font-bold text-[34px] leading-10">Furniro</div>
          </div>

          <div className="hidden md:flex">
            <ul className="list-none flex gap-x-10 justify-between font-medium text-lg leading-6">
              <div className="hover:text-[#B88E2F]">
                <Link to="/">Home</Link>
              </div>
              <div className="hover:text-[#B88E2F]">
                <Link to="/shop">Shop</Link>
              </div>
              <div className="hover:text-[#B88E2F]">
                <Link to="/blog">Blog</Link>
              </div>

              <div className="hover:text-[#B88E2F]">
                <Link to="/contact">Contact</Link>
              </div>
            </ul>
          </div>

          <div className="hidden md:flex gap-x-8">
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

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`transform ${
                isMobileMenuOpen ? "rotate-90" : "rotate-0"
              } transition-transform duration-300 ease-in-out`}
            >
              <HiOutlinePlus
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute z-50   right-0 flex flex-col items-end h-full">
            <div className=" pb-5 pt-3 h-full w-64 rounded-l-lg text-white  bg-black">
              <div className="flex justify-between mx-2">
                {" "}
                <div className="flex">
                  <div className="mt-1">
                    <img src={Logo} alt="" />
                  </div>
                  <div className="ml-1 font-bold text-3xl leading-10">
                    Furniro
                  </div>
                </div>
                <div className="text-end mt-2">
                  <button
                    onClick={toggleMobileMenu}
                    className={`transform ${
                      isMobileMenuOpen ? "rotate-90" : "rotate-0"
                    } transition-transform duration-300 ease-in-out`}
                  >
                    <HiOutlinePlus
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </button>
                </div>
              </div>
              <ul className="list-none pt-5 flex flex-col items-center gap-y-7 font-medium text-lg leading-6">
                <div className="hover:text-[#B88E2F]">
                  <Link to="/">Home</Link>
                </div>
                <div className="hover:text-[#B88E2F]">
                  <Link to="/shop">Shop</Link>
                </div>
                <div className="hover:text-[#B88E2F]">
                  <Link to="/blog">Blog</Link>
                </div>
                <div className="hover:text-[#B88E2F]">
                  <Link to="/contact">Contact</Link>
                </div>
              </ul>
              <div className=" flex flex-col items-center gap-y-7 mt-4">
                {" "}
                <div>
                  <BiUserPlus style={{ width: "26px", height: "26px" }} />
                </div>
                <div>
                  <FiSearch style={{ width: "23px", height: "23px" }} />
                </div>
                <div>
                  <AiOutlineHeart style={{ width: "26px", height: "26px" }} />
                </div>
                <div>
                  <Link to="/cart">
                    {" "}
                    <AiOutlineShoppingCart
                      style={{ width: "26px", height: "26px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
