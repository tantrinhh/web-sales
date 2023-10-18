import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Rectangle1 from "../../assets/shop/Rectangle1.png";
import Logo from "../../assets/Logo.png";

const SubBlog = () => {
  return (
    <>
      {" "}
      <div className="">
        <div className="relative">
          <img src={Rectangle1} className="w-screen" alt="" />
          <div className="absolute -translate-x-2/4 top-32 left-1/2   -mt-6  item-center">
            {" "}
            <img src={Logo} alt="" />
          </div>
          <div className="absolute -translate-x-2/4 top-1/2 left-1/2   -mt-6  item-center text-center  text-[#000000]  ">
            <p className="lg:text-5xl  leading-[72px] font-medium">Blog</p>
          </div>
          <div className="flex absolute  -translate-x-2/4  lg:bottom-24 max-md:-bottom-3 left-1/2   lg:py-4  justify-between  text-base   leading-6  ">
            <button className="text-[#000000] lg:font-medium mr-2">
              <Link to="/">Home</Link>
            </button>
            <div className="mt-2">
              {" "}
              <AiOutlineRight style={{ width: "12px", height: "12px" }} />
            </div>
            <button className=" font-light ml-2">Blog</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBlog;
