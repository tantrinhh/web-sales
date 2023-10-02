import Vector1 from "../../assets/shop/Vector1.png";
import Vector2 from "../../assets/shop/Vector2.png";
import Vector3 from "../../assets/shop/Vector3.png";
import image1 from "../../assets/shop/image1.png";
import Images from "../../assets/shop/Images.png";
import image3 from "../../assets/shop/image3.png";
import image4 from "../../assets/shop/image4.png";

const Main = () => {
  const product = [
    {
      image: image1,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Images,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: image3,
      name: "Lolito",
      des: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: image4,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
    {
      image: image1,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Images,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: image3,
      name: "Lolito",
      des: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: image4,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
    {
      image: image1,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Images,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: image3,
      name: "Lolito",
      des: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: image4,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
    {
      image: image1,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Images,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: image3,
      name: "Lolito",
      des: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: image4,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
  ];
  return (
    <>
      <div className="bg-[#FAF3EA] py-5 px-16 mb-10">
        <div className="flex justify-between items-center text-center">
          <div className="flex gap-x-5 items-center text-center">
            <div className="mt-1">
              <img src={Vector1} alt="" />
            </div>
            <p className="text-xl font-normal leading-[30px] text-[#000000]">
              Filter
            </p>
            <div className="mt-1">
              <img src={Vector2} alt="" />
            </div>
            <div className="">
              <img src={Vector3} alt="" />
            </div>
            <div>|</div>
            <div className="text-base font-normal leading-6 text-[#000000]">
              Showing 1–16 of 32 results
            </div>
          </div>
          <div className="flex gap-x-5  ">
            <div className="flex items-center gap-x-2">
              <label className="  text-xl font-normal leading-[30px] text-[#000000]">
                Show
              </label>
              <div className="mt-2">
                <input
                  className=" w-14 h-14 px-2 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex items-center gap-x-2 ">
              <label className="   text-xl font-normal leading-[30px] text-[#000000]">
                Short by
              </label>
              <div className="mt-2">
                <input
                  className=" w-[188px] px-4 h-14 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#9F9F9F] placeholder:text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 container gap-x-5 gap-y-7 ">
        <div className="grid grid-cols-4  gap-y-14 ">
          {product.map((products) => {
            return (
              <div>
                <img src={products.image} alt="" />
                <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5">
                  <h2 className="font-bold pt-5 text-[24px]">
                    {products.name}
                  </h2>
                  <p className="text-[16px] text-[#898989]">{products.des}</p>
                  <h3 className="font-bold text-[20px]">{products.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
