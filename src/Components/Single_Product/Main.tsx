import sofa from "../../assets/single_product/sofa.png";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineHeart,
  AiOutlineRight,
} from "react-icons/ai";
import Syltherine from "../../assets/shop/image1.png";
import Leviosa from "../../assets/shop/Images.png";
import Lolito from "../../assets/shop/image3.png";
import Respira from "../../assets/shop/image4.png";
import { Link } from "react-router-dom";
import { BiGitCompare } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import stars from "../../assets/ProductComparison/stars.png";
import sofa3 from "../../assets/single_product/sofa1.png";
import Group96 from "../../assets/single_product/Group96.png";
import Group97 from "../../assets/single_product/Group97.png";
import Group98 from "../../assets/single_product/Group98.png";
import Group94 from "../../assets/single_product/Group94.png";
import { FaFacebook } from "react-icons/fa";

const Main = () => {
  const fakeData = [
    {
      image: Syltherine,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: 2500000,
      discount: 30,
      isNew: false,
    },
    {
      image: Leviosa,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: 2500000,
      discount: 0,
      isNew: false,
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
      isNew: true,
    },
  ];
  return (
    <>
      <div>
        <div className="bg-[#FAF3EA] py-5 px-20 mb-10">
          <div className="flex gap-8 items-center text-center">
            <div className="text-[#9F9F9F] font-normal text-base leading-6">
              Home
            </div>
            <div className="mt-2 text-[#000000]">
              {" "}
              <AiOutlineRight style={{ width: "12px", height: "12px" }} />
            </div>
            <div className="text-[#9F9F9F] font-normal text-base leading-6">
              Shop
            </div>
            <div className="mt-2 text-[#000000]">
              {" "}
              <AiOutlineRight style={{ width: "12px", height: "12px" }} />
            </div>
            <div className="text-[#9F9F9F] font-normal text-base leading-6">
              |
            </div>
            <div className="text-[#000000] font-medium text-base leading-6">
              Asgaard sofa
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-20">
          <div className="flex gap-8">
            <div className="flex flex-col gap-10">
              <div>
                {" "}
                <img src={Group94} alt="" />
              </div>
              <div>
                {" "}
                <img src={Group96} alt="" />
              </div>
              <div>
                {" "}
                <img src={Group97} alt="" />
              </div>
              <div>
                {" "}
                <img src={Group98} alt="" />
              </div>
            </div>
            <div className="">
              {" "}
              <img src={sofa3} alt="" className="bg-[#F9F1E7]" />
            </div>
          </div>
          <div className="max-w-[610px] px-10">
            <div className=" font-medium text-[42px] leading-[63px] text-[#000000]">
              Asgaard sofa
            </div>
            <div className="text-[#9F9F9F] font-medium text-2xl leading-9">
              Rs. 250,000.00
            </div>
            <div className="flex gap-4 my-5">
              <div>
                <img
                  src={stars}
                  alt=""
                  className="w-[124px] h-[20px] top-[718px] left-[428px] mt-1"
                />
              </div>
              <div className="text-[13px] text-[#9F9F9F] leading-[30px]">|</div>
              <div className="text-[13px] text-[#9F9F9F] leading-[30px]">
                5 Customer Review
              </div>
            </div>
            <div>
              <p className="max-w-[424px]">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>{" "}
            </div>
            <div>
              <div className=" font-normal text-sm text-[#9F9F9F] mt-6 mb-3">
                Size
              </div>
              <div className="flex gap-3">
                <button className="px-3 py-1 bg-[#F9F1E7] rounded hover:bg-[#B88E2F]">
                  L
                </button>
                <button className="px-3 py-1 bg-[#F9F1E7] rounded hover:bg-[#B88E2F]">
                  XL
                </button>
                <button className="px-3 py-1 bg-[#F9F1E7] rounded hover:bg-[#B88E2F]">
                  XS
                </button>
              </div>
            </div>
            <div>
              <div className="font-normal text-sm text-[#9F9F9F] mt-6 mb-3">
                Color
              </div>
              <div className="flex gap-3 mb-6">
                <div className=" rounded-full bg-[#816DFA] w-[30px] h-[30px]"></div>
                <div className=" rounded-full bg-[#000000] w-[30px] h-[30px]"></div>
                <div className=" rounded-full bg-[#B88E2F] w-[30px] h-[30px]"></div>
              </div>
            </div>
            <div className="flex items-center gap-14 font-normal text-xl leading-[30px] text-[#000000]">
              <div>
                {" "}
                <input
                  type="number" // Sử dụng type="number"
                  className="w-24 h-10 px-3 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder=""
                />
              </div>
              <div className="h-10 px-5 border border-[#000000] pt-1.5 rounded-md">
                {" "}
                <Link to="/cart">
                  <button>Add To Cart</button>
                </Link>
              </div>
              <div className="h-10 px-5 border border-[#000000] pt-1.5 rounded-md">
                {" "}
                <Link to="/product_comparison">+ Compare</Link>
              </div>
            </div>
            <div>
              <div className="border-t border border-[#9F9F9F] mt-20"></div>
            </div>
            <div className="flex  my-10">
              <div className="mr-5 font-normal text-base text-[#9F9F9F] flex flex-col gap-y-2 ">
                <div>SKU</div>
                <div>Category</div>
                <div>Tags</div>
                <div>Share</div>
              </div>
              <div className="gap-5  flex flex-col gap-y-2 ">
                <div className="font-normal text-base text-[#9F9F9F]">
                  : SS001
                </div>
                <div className="font-normal text-base text-[#9F9F9F]">
                  : Sofas
                </div>
                <div className="font-normal text-base text-[#9F9F9F]">
                  : Sofa, Chair, Home, Shop
                </div>
                <div className="flex">
                  :
                  <div className="ml-2">
                    <FaFacebook style={{ width: "20px", height: "20px" }} />
                  </div>
                  <div className="mx-5">
                    <AiFillInstagram
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <div>
                    <AiFillTwitterCircle
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="border-t border border-[#9F9F9F]"></div>
        <div className=" ">
          <div className="flex max-w-[650px] mx-auto gap-10 justify-between font-medium text-2xl leading-9 my-14">
            <div className="text-[#000000]">Description</div>
            <div className="text-[#9F9F9F]">Additional Information</div>
            <div className="text-[#9F9F9F]">Reviews [5]</div>
          </div>
          <div className="max-w-[1026px] mx-auto mb-10 text-[#9F9F9F] font-normal  text-base leading-6">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <br />
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-14">
            <div className="bg-[#F9F1E7]">
              <img src={sofa} alt="" />
            </div>
            <div className="bg-[#F9F1E7]">
              <img src={sofa} alt="" />
            </div>
          </div>
        </div>
        <div className="border-t border border-[#9F9F9F]"></div>
        <div>
          <div className="text-center font-medium text-4xl leading-[54px] text-[#000000] mb-5 mt-14">
            Related Products
          </div>
          <div>
            {" "}
            <div className="mb-20 container">
              <div className="grid grid-cols-4 gap-y-14 ">
                {fakeData.map((fakeData) => {
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
                              <img src={fakeData.image} alt="" />
                              {fakeData.discount > 0 && (
                                <div className="absolute top-6 right-20 text-white rounded-full w-10 h-10 items-center text-center pt-1.5 bg-[#E97171]">
                                  -{fakeData.discount}%
                                </div>
                              )}
                              {fakeData.isNew && (
                                <div className="absolute top-6 right-20 bg-[#2EC1AC] text-white rounded-full w-10 h-10 items-center text-center pt-1.5">
                                  New
                                </div>
                              )}
                              <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5">
                                <h2 className=" font-semibold leading-7 text-[#3A3A3A] pt-5 text-[24px]">
                                  {fakeData.name}
                                </h2>
                                <p className="text-[16px] font-medium leading-6 text-[#898989]">
                                  {fakeData.des}
                                </p>
                                {fakeData.discount > 0 ? (
                                  <div className="flex items-center">
                                    <h3 className="font-bold text-[20px] leading-[30px] text-[#3A3A3A]">
                                      Rp {fakeData.price.toLocaleString()}
                                    </h3>
                                    <span className="text-[16px] text-[#B0B0B0] line-through ml-3">
                                      Rp{" "}
                                      {(
                                        fakeData.price +
                                        fakeData.price *
                                          (fakeData.discount / 100)
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                ) : (
                                  <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                                    Rp {fakeData.price.toLocaleString()}
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
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Main;
