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

        <div className="absolute bg-[#FFF3E3] w-[643px] h-[443px] top-[253px] left-[739px] space-y-3 space-x-5">
          <p className="text-[16px] mt-7 font-bold mx-5">New Arrival</p>
          <h1 className="text-[52px] text-[#B88E2F] font-bold">
            Discover Our
            <br />
            New Collection
          </h1>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] py-[25px] px-[72px] text-white">
            BUY NOW
          </button>
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
        <div className="grid grid-cols-4 gap-5 ">
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
      <div className="border-solid border-2 border-[#B88E2F] mt-5 w-[245px] h-[48px] mx-[41%]">
        <p className="text-center text-[#B88E2F] text-[16px] mt-2 font-bold">
          Show More
        </p>
      </div>
    </>
  );
};

export default HomePage;
