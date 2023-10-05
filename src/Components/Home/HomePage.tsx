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
import image1 from "../../assets/home/image1.png";
import image2 from "../../assets/home/image2.png";
import { CiShare2 } from "react-icons/ci";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
const HomePage = () => {
  const products = [
    {
      image: Syltherine,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: 2500000,
      discount: 30,
      isNew: false
    },
    {
      image: Leviosa,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: 2500000,
      discount: 0,
      isNew: false
    },
    {
      image: Lolito,
      name: "Lolito",
      des: "Luxury big sofa",
      price: 7000000,
      discount: 50,
      isNew: false,
    },
    {
      image: Respira,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: 500000,
      discount: 0,
      isNew: true
    },
    {
      image: Grifo,
      name: "Grifo",
      des: "Night lamp",
      price: 1500000,
      discount: 0,
      isNew: false
    },
    {
      image: Muggo,
      name: "Muggo",
      des: "SSmall mug",
      price: 150000,
      discount: 0,
      isNew: true
    },
    {
      image: Pingky,
      name: "Pingky",
      des: "Cute bed set",
      price: 7000000,
      discount: 50,
      isNew: false
    },
    {
      image: Potty,
      name: "Potty",
      des: "Minimalist flower pot",
      price: 500000,
      discount: 0,
      isNew: true
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
          {products.map((product) => {
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
                        <img src={product.image} alt="" />
                        {product.discount > 0 && (
                          <div className="absolute top-6 right-20 text-white rounded-full w-10 h-10 items-center text-center pt-1.5 bg-[#E97171]">
                            -{product.discount}%
                          </div>
                        )}
                        {product.isNew && (
                          <div className="absolute top-6 right-20 bg-[#2EC1AC] text-white rounded-full w-10 h-10 items-center text-center pt-1.5">
                            New
                          </div>
                        )}
                        <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5">
                          <h2 className=" font-semibold leading-7 text-[#3A3A3A] pt-5 text-[24px]">
                            {product.name}
                          </h2>
                          <p className="text-[16px] font-medium leading-6 text-[#898989]">
                            {product.des}
                          </p>
                          {product.discount > 0 ? (
                            <div className="flex items-center">
                              <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                                Rp {product.price.toLocaleString()}
                              </h3>
                              <span className="text-[16px] text-[#B0B0B0] line-through ml-3">
                                Rp {(product.price + (product.price * (product.discount / 100))).toLocaleString()}
                              </span>
                            </div>
                          ) : (
                            <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                              Rp {product.price.toLocaleString()}
                            </h3>
                          )}
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
      <div className="bg-[#FCF8F3] mt-10 flex">
        <div className="ml-20 mt-10">
          <h1 className="w-[422px] h-[96px] leading-[48px] font-bold text-[40px]">50+ Beautiful rooms inspiration</h1>
          <p className="w-[368px] h-[48px] font-medium leading-[24px] text-[16px] mt-1">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button className='bg-[#B88E2F] text-[#FFFFFF] w-[176px] h-[48px] mt-10'>Explore More</button>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src={image1}/></SwiperSlide>
          <SwiperSlide><img src={image2}/></SwiperSlide>
          <SwiperSlide><img src={image2}/></SwiperSlide>
        </Swiper>
      </div>
      <p className="text-center text-[20px] leading-7 font-semibold mt-20">
        Share your setup with
      </p>
      <h1 className="text-center text-[40px] leading-10 font-bold">
        #FuniroFurniture
      </h1>
      <div className="flex gap-x-7 justify-between mb-20">
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
