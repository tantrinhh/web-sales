import React from "react";
import Group from "../../assets/top-footer/Group.png";
import guarantee from "../../assets/top-footer/guarantee.png";
import Vector1 from "../../assets/top-footer/Vector1.png";

import Vector2 from "../../assets/top-footer/Vector2.png";

const Top_Footer = () => {
  return (
    <>
      <div className="bg-[#FAF3EA] py-24">
        <div className="flex justify-between mx-12">
          <div className="flex">
            <div className="mt-1">
              <img src={Group} alt="" />
            </div>
            <div className="ml-3">
              <div className=" font-semibold text-2xl leading-[38px] text-[#242424]">
                High Quality
              </div>

              <div className="text-[#898989] text-xl font-medium leading-[30px]">
                crafted from top materials
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mt-2">
              <img src={guarantee} alt="" />
            </div>
            <div className="ml-3">
              <div className=" font-semibold text-2xl leading-[38px] text-[#242424]">
                Warranty Protection
              </div>
              <div className="text-[#898989] text-xl font-medium leading-[30px]">
                Over 2 years
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mt-2">
              <img src={Vector1} alt="" />
            </div>
            <div className="ml-3">
              <div className=" font-semibold text-2xl leading-[38px] text-[#242424]">
                Free Shipping
              </div>
              <div className="text-[#898989] text-xl font-medium leading-[30px]">
                Order over 150 $
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mt-2">
              <img src={Vector2} alt="" />
            </div>
            <div className="ml-3">
              <div className=" font-semibold text-2xl leading-[38px] text-[#242424]">
                24 / 7 Support
              </div>
              <div className="text-[#898989] text-xl font-medium leading-[30px]">
                Dedicated support
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Top_Footer;
