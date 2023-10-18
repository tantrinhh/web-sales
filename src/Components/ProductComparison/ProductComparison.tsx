import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import stars from "../../assets/ProductComparison/stars.png";
import Rectangle1 from "../../assets/shop/Rectangle1.png";
import { RootState } from "../../services/redux/RootReducer";

const ProductComparison = () => {
  const { comparedProducts } = useSelector((state: RootState) => state.compare);
  console.log(comparedProducts, "comparedProducts");
  return (
    <>
      <div className="">
        <div className="relative">
          <img src={Rectangle1} className="w-screen" alt="" />
          <div className="absolute -translate-x-2/4 top-1/2 left-1/2   -mt-6  item-center text-center  text-[#000000]  ">
            <p className="lg:text-5xl  leading-[72px] font-medium">
              Product Comparison
            </p>
          </div>
          <div className="flex absolute  -translate-x-2/4  lg:bottom-24 max-md:-bottom-3 left-1/2   lg:py-4  justify-between  text-base   leading-6  ">
            <button className="text-[#000000] lg:font-medium">Home </button>
            <div className="mt-2">
              {" "}
              <AiOutlineRight style={{ width: "12px", height: "12px" }} />
            </div>
            <button className=" font-light text-[16px]">Comparison</button>
          </div>
        </div>
      </div>
      <div className="divide-y divide-[#E8E8E8] container mb-20">
        <div className="flex flex-row mt-10">
          <div className=" basis-1/3">
            <h1 className="w-[223px] h-[105px] text-[28px] font-medium leading-9">
              Go to Product page for more Products
            </h1>
            <p className="text-[#727272] text-[20px] mt-7 leading-[30px] font-medium">
              View More
            </p>
            <div className="w-28 mb-16">
              <div className="border-b-2 border-b-[#727272]"></div>
            </div>
            <div className="mt-10 space-y-10">
              <h1 className="font-medium text-3xl">General</h1>
              <ul className="space-y-10">
                <li className="text-xl font-normal mt-14">Price</li>
                <li className="text-xl font-normal mt-5">Sizes</li>
                <li className="text-xl font-normal mt-5">Colors</li>
              </ul>
            </div>
          </div>
          <div className=""></div>
          {comparedProducts.map((item: any) => {
            const colors = item.colors;
            const sizes = item.sizes;

            return (
              <div className="basis-1/2 ">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-lg w-20 h-20 "
                />
                <h1 className="text-[24px] font-medium leading-[30px] mt-3">
                  {item.name}
                </h1>
                <p className="text-[18px] font-medium leading-[27px]">
                  Rs. {item.price.toLocaleString()}
                </p>
                <div className="flex gap-1">
                  <p className="text-18px font-medium leading-[27px]">4.7</p>
                  <img
                    src={stars}
                    alt=""
                    className="w-[124px] h-[20px] top-[718px] left-[428px] mt-1"
                  />
                  <div className="border-l-[1px] border-[#9F9F9F] text-[13px] text-[#9F9F9F] leading-[30px] font-normal">
                    <p className="ml-2">204 Review</p>
                  </div>
                </div>
                <div>
                  <div className="mt-28 ">
                    <ul>
                      <li className="text-xl font-normal mt-9">
                        Rs. {item.price.toLocaleString()}
                      </li>
                      <li className="text-xl font-normal mt-10 flex flex-row space-x-2">
                        {sizes?.map((item: any, index: any) => (
                          <div
                            key={index}
                            className={`cursor-pointer w-10 h-10 border rounded-full shadow-lg font-bold text-center uppercase p-2`}
                          >
                            {item}
                          </div>
                        ))}
                      </li>
                      <li className="text-xl font-normal mt-10 flex flex-row">
                        {colors?.map((item: any, index: any) => (
                          <div
                            style={{
                              backgroundColor: item,
                            }}
                            key={index}
                            className={`cursor-pointer w-10 h-10 border rounded-full `}
                          ></div>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

          <div className=" basis-1/3">
            <h1 className="text-[24px] font-bold leading-[30px]">
              Add A Product
            </h1>
            <div className="mt-2">
              <div className="inline-block relative w-full mb-6">
                <select className="block appearance-none w-full bg-[#B88E2F] border border-[#9F9F9F] px-4 py-3 pr-8 mb-3 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline text-[#FFFFFF] h-[39px]">
                  <option>Choose a Product</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mb-2 text-[#FFFFFF]">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComparison;
