import React from "react";
import sofa1 from "../../assets/ProductComparison/sofa1.png";
import sofa2 from "../../assets/ProductComparison/sofa2.png";
import stars from "../../assets/ProductComparison/stars.png";
import Rectangle1 from "../../assets/shop/Rectangle1.png";
import { AiOutlineRight } from "react-icons/ai";

const ProductComparison = () => {
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
<div className='divide-y divide-[#E8E8E8] container mb-20'>
<div className='grid grid-cols-4 ml-10'>
        <div className='col-span-1 mt-12'>
            <h1 className='w-[223px] h-[105px] text-[28px] font-medium leading-9'>Go to Product page for more Products</h1>
            <p className='text-[#727272] text-[20px] mt-7 leading-[30px] font-medium'>View More</p>
            <div className='w-28 mb-16'>
                <div className='border-b-2 border-b-[#727272]'></div>
            </div>
        </div>
        <div className="col-span-1 mt-9 space-y-2">
          <img src={sofa1} alt="" />
          <h1 className="text-[24px] font-medium leading-[30px] mt-3">
            Asgaard Sofa
          </h1>
          <p className="text-[18px] font-medium leading-[27px]">
            Rs. 250,000.00
          </p>
          <div className="flex gap-1">
            <p className="text-18px font-medium leading-[27px]">4.7</p>
            <img src={stars} alt="" className="w-[124px] h-[20px] top-[718px] left-[428px] mt-1"/>
            <div className="border-l-[1px] border-[#9F9F9F] text-[13px] text-[#9F9F9F] leading-[30px] font-normal">
              <p className="ml-2">204 Review</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-2">
          <img src={sofa2} alt="" />
          <h1 className="text-[24px] font-medium leading-[30px] mt-3">
          Outdoor Sofa Set
          </h1>
          <p className="text-[18px] font-medium leading-[27px]">
          Rs. 224,000.00
          </p>
          <div className="flex gap-1">
            <p className="text-18px font-medium leading-[27px]">4.2</p>
            <img src={stars} alt="" className="w-[124px] h-[20px] top-[718px] left-[428px] mt-1"/>
            <div className="border-l-[1px] border-[#9F9F9F] text-[13px] text-[#9F9F9F] leading-[30px] font-normal">
              <p className="ml-2">145 Review</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-20">
          <h1 className="text-[24px] font-bold leading-[30px]">Add A Product</h1>
          <div className="mt-2">
            <div className="inline-block relative w-full mb-6">
              <select className="block appearance-none w-full bg-[#B88E2F] border border-[#9F9F9F] px-4 py-3 pr-8 mb-3 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline text-[#FFFFFF] h-[39px]">
                <option>Choose a Product</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mb-2 text-[#FFFFFF]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className='grid grid-cols-4 divide-x divide-[#E8E8E8] mt-10'>
        <div className='col-span-1 ml-10'>
            
            <div className='mt-10 space-y-10'>
            <h1 className='font-medium text-3xl'>General</h1>
                <ul className="space-y-10">
                
                <li className="text-xl font-normal">Sales Package</li>
                <li className="text-xl font-normal mt-14">Model Number</li>
                <li className="text-xl font-normal mt-5">Secondary Material</li>
                <li className="text-xl font-normal mt-5">Configuration</li>
                <li className="text-xl font-normal mt-5">Upholstery Material</li>
                <li className="text-xl font-normal mt-5">Upholstery Color</li>
                </ul>
            </div>
            <div className='mt-20 space-y-10'>
            <h1 className='font-medium text-3xl'>Product </h1>

                <ul className='space-y-10'>
                <li className="text-xl font-normal">Filling Material</li>
                <li className="text-xl font-normal">Finish Type</li>
                <li className="text-xl font-normal">Adjustable Headrest</li>
                <li className="text-xl font-normal">Maximum Load Capacity</li>
                <li className="text-xl font-normal">Origin of Manufacture</li>
                </ul>
            </div>
            <div className='mt-20 space-y-10'>
            <h1 className='font-medium text-3xl'>Dimensions </h1>
                <ul className='space-y-10'>
                
                <li className="text-xl font-normal">Width</li>
                <li className="text-xl font-normal">Height</li>
                <li className="text-xl font-normal">Depth</li>
                <li className="text-xl font-normal">Weight</li>
                <li className="text-xl font-normal">Seat Height</li>
                <li className="text-xl font-normal">Leg Height</li>
                </ul>
            </div>
            <div className='mt-20 space-y-10'>
                
                <div className='space-y-10'>
                <h1 className='font-medium text-3xl'>Warranty </h1>
                <ul>
                    <li className="text-xl font-normal">Warranty Summary</li>
                    <li className="text-xl font-normal mt-14">Warranty Service Type</li>
                    <li className="text-xl font-normal mt-32">Covered in Warranty</li>
                    <li className="text-xl font-normal mt-20">Not Covered in Warranty</li>
                    <li className="text-xl font-normal mt-52">Domestic Warranty</li>
                    </ul>
                </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='mt-28 ml-12'>
                <ul>
                <li className="text-xl font-normal">1 sectional sofa</li>
                <li className="text-xl font-normal mt-12">TFCBLIGRBL6SRHS</li>
                <li className="text-xl font-normal mt-9">Solid Wood</li>
                <li className="text-xl font-normal mt-10">L-shaped</li>
                <li className="text-xl font-normal mt-10">Fabric + Cotton</li>
                <li className="text-xl font-normal mt-10">Bright Grey & Lion</li>
                </ul>
            </div>
            <div className='mt-40 ml-12'>
                <ul className='space-y-10'>
                <li className="text-xl font-normal">Foam</li>
                <li className="text-xl font-normal">Bright Grey & Lion</li>
                <li className="text-xl font-normal">No</li>
                <li className="text-xl font-normal">280 KG</li>
                <li className="text-xl font-normal">India</li>
                </ul>
            </div>
            <div className='mt-40 ml-12'>
                <ul className='space-y-10'>
                <li className="text-xl font-normal">265.32 cm</li>
                <li className="text-xl font-normal">76 cm</li>
                <li className="text-xl font-normal">167.76 cm</li>
                <li className="text-xl font-normal">45 KG</li>
                <li className="text-xl font-normal">41.52 cm</li>
                <li className="text-xl font-normal">5.46 cm</li>
                </ul>
            </div>
            <div className='mt-36 ml-12'>
                <div >
                    <ul>
                    <li className="text-xl font-normal w-[226px]">1 Year Manufacturing Warranty</li>
                    <li className="text-xl font-normal  w-[241px] mt-9">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</li>
                    <li className="text-xl font-normal w-[241px] mt-10">Warranty Against Manufacturing Defect</li>
                    <li className="text-xl font-normal w-[241px] mt-16">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
                    <li className="text-xl font-normal mt-8">1 Year</li>
                    </ul>
                </div>
                <button className='bg-[#B88E2F] text-[#FFFFFF] w-[215px] h-[64px] mt-10'>Add To Cart</button>
            </div>
        </div>
        <div className='col-span-1'>
            
            <div className='mt-20 ml-7'>
                <ul className=' ml-7'>
                
                <li className="text-xl font-normal w-[226px] mt-28">1 Three Seater, 2 Single Seater</li>
                <li className="text-xl font-normal mt-5">DTUBLIGRBL568</li>
                <li className="text-xl font-normal mt-9">Solid Wood</li>
                <li className="text-xl font-normal mt-10">L-shaped</li>
                <li className="text-xl font-normal mt-10">Fabric + Cotton</li>
                <li className="text-xl font-normal mt-10">Bright Grey & Lion</li>
                </ul>
            </div>
            <div className='mt-40 ml-12'>

                <ul className='space-y-10 ml-2'>
                <li className="text-xl font-normal">Matte</li>
                <li className="text-xl font-normal">Bright Grey & Lion</li>
                <li className="text-xl font-normal">yes</li>
                <li className="text-xl font-normal">300 KG</li>
                <li className="text-xl font-normal">India</li>
                </ul>
            </div>
            <div className='mt-40 ml-12'>

                <ul className='space-y-10 ml-2'>
                
                <li className="text-xl font-normal">265.32 cm</li>
                <li className="text-xl font-normal">76 cm</li>
                <li className="text-xl font-normal">167.76 cm</li>
                <li className="text-xl font-normal">65 KG</li>
                <li className="text-xl font-normal">41.52 cm</li>
                <li className="text-xl font-normal">5.46 cm</li>
                </ul>
            </div>
            <div className='mt-36 '>
                <ul className='space-y-9 ml-12'>
                <li className="text-xl font-normal w-[226px]">1.2 Year Manufacturing Warranty</li>
                    <li className="text-xl font-normal w-[241px] ">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</li>
                    <li className="text-xl font-normal w-[241px]">Warranty of the product is limited to manufacturing defects only.</li>
                    <li className="text-xl font-normal w-[241px] "> The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
                    <li className="text-xl font-normal">3 Months</li>
                    </ul>
                <button className='bg-[#B88E2F] text-[#FFFFFF] w-[215px] h-[64px] mt-10 ml-12'>Add To Cart</button>
            </div>
        </div>
        <div className='col-span-1'></div>
        </div>
      
    </div>
    </>
  );
};

export default ProductComparison;
