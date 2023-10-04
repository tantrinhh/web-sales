import "../../index.css";
import MaskGroup from "../../assets/home/MaskGroup.jpg";
import Dining from "../../assets/home/Dining.png";
import Living from "../../assets/home/Image-living room.png";
import Bedroom from "../../assets/home/Bedroom.png";
import Syltherine from "../../assets/home/Syltherine.png";
import Leviosa from "../../assets/home/Leviosa.png";
import Lolito from "../../assets/home/Lolito.png";
import Respira from "../../assets/home/Respira.png";
import Grifo from "../../assets/home/Grifo.png";
import Muggo from "../../assets/home/Muggo.png";
import Pingky from "../../assets/home/Pingky.png";
import Potty from "../../assets/home/Potty.png";
import Rectangle36 from "../../assets/home/Rectangle36.png";
import Rectangle37 from "../../assets/home/Rectangle37.png";
import Rectangle38 from "../../assets/home/Rectangle38.png";
import Rectangle39 from "../../assets/home/Rectangle39.png";
import Rectangle40 from "../../assets/home/Rectangle40.png";
import Rectangle41 from "../../assets/home/Rectangle41.png";
import Rectangle43 from "../../assets/home/Rectangle43.png";
import Rectangle44 from "../../assets/home/Rectangle44.png";
import Rectangle45 from "../../assets/home/Rectangle45.png";
import { CiShare2 } from "react-icons/ci";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const HomePage = () => {
  const product = [
    {
      image: Syltherine,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Leviosa,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Lolito,
      name: "Lolito",
      des: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: Respira,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
    {
      image: Grifo,
      name: "Grifo",
      des: "Night lamp",
      price: "Rp 1.500.000",
    },
    {
      image: Muggo,
      name: "Muggo",
      des: "SSmall mug",
      price: "Rp 150.000",
    },
    {
      image: Pingky,
      name: "Pingky",
      des: "Cute bed set",
      price: "Rp 7.000.000",
    },
    {
      image: Potty,
      name: "Potty",
      des: "Minimalist flower pot",
      price: "Rp 500.000",
    },
  ];
  return (
    <>
      {/* Sub header */}
      <div>
        <img src={MaskGroup} className="w-screen" alt="" />

        <div className="absolute bg-[#FFF3E3] w-[643px] px-5 py-10  rounded-md top-[253px] left-[739px] space-y-3 space-x-5">
          <p className="text-[16px] mt-7 font-bold mx-5">New Arrival</p>
          <h1 className="text-[52px] text-[#B88E2F] font-bold">
            Discover Our
            <br /> New Collection
          </h1>
          <p className="text-lg leading-6 font-medium pb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="mt-20">
            {" "}
            <button className="bg-[#B88E2F] rounded-sm py-[25px] px-[72px]  text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Browse The Range */}
      <div className="mt-20 text-center justify-center items-center container space-y-5">
        <h1 className="text-[32px] font-bold">Browse The Range</h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex gap-20">
          <div>
            <img src={Dining} alt="" />
            <p className="font-bold mt-5 text-[24px]">Dining</p>
          </div>
          <div>
            <img src={Living} alt="" />
            <p className="font-bold mt-5 text-[24px]">Living</p>
          </div>
          <div>
            <img src={Bedroom} alt="" />
            <p className="font-bold mt-5 text-[24px]">Bedroom</p>
          </div>
        </div>
      </div>

      {/* Our product */}
      <div className="mt-20 container">
        <h1 className="text-center text-[40px] font-bold mb-5">Our Products</h1>
        <div className="grid grid-cols-4 gap-y-14 ">
          {product.map((products) => {
            return (
              <div>
                {" "}
                <Link to="single_product">
                  <div className="relative ">
                    <div className="w-[285px] absolute inset-0 z-10 bg-[#3A3A3A] text-center flex flex-col gap-8 items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                      <div className="px-8 py-2 rounded bg-[#FFFFFF] text-[#B88E2F] cursor-pointer">
                        <Link to="/cart">Add to cart</Link>
                      </div>
                      <div className="flex gap-5 text-[#FFFFFF] text-base leading-6 font-semibold">
                        <div className="flex">
                          <div className="mt-1">
                            <CiShare2 />
                          </div>
                          <div>Share</div>
                        </div>
                        <div className="flex">
                          <div className="mt-1">
                            <BiGitCompare />
                          </div>
                          <div className=" cursor-pointer">
                            {" "}
                            <Link to="/product_comparison">Compare</Link>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mt-1">
                            <AiOutlineHeart />
                          </div>
                          <div>Like</div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative">
                        <img src={products.image} alt="" />
                        <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5">
                          <h2 className="font-bold pt-5 text-[24px]">
                            {products.name}
                          </h2>
                          <p className="text-[16px] text-[#898989]">
                            {products.des}
                          </p>
                          <h3 className="font-bold text-[20px]">
                            {products.price}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <button className="w-[245px] h-[48px] text-[#B88E2F] text-[16px] mt-10 font-bold border-solid border-2 border-[#B88E2F] mx-[41%]">
        Show More
      </button>
      <div className="flex gap-x-7 justify-between">
        <div className="flex flex-col gap-7">
          <div className="flex gap-7">
            <div>
              <img src={Rectangle36} alt="" />
            </div>
            <div className=" flex items-end">
              <img src={Rectangle38} alt="" />
            </div>
          </div>
          <div className="flex gap-7">
            <div>
              <img src={Rectangle37} alt="" />
            </div>
            <div>
              <img src={Rectangle39} alt="" />
            </div>
          </div>
        </div>
        <div className=" flex items-center">
          <div className="">
            <img src={Rectangle40} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex gap-7">
            <div className=" flex items-end">
              <img src={Rectangle43} alt="" />
            </div>
            <div>
              <img src={Rectangle45} alt="" />
            </div>
          </div>
          <div className="flex gap-7">
            <div>
              <img src={Rectangle41} alt="" />
            </div>
            <div>
              <img src={Rectangle44} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
