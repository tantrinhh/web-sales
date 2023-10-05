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
            <button
              type="button"
              className="inline-flex w-[242px] gap-x-20 rounded-md bg-[#B88E2F] px-3 py-2 text-sm font-semibold text-[#FFFFFF] shadow-sm ring-1 ring-inset ring-gray-300 leading-[17.71px]"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Choose a Product
              <svg
                className="-mr-1 h-5 w-5 text-[#FFFFFF]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    <div className='grid grid-cols-4 divide-x divide-[#E8E8E8] mt-10'>
        <div className='col-span-1 ml-10'>
            
            <div className='mt-10 space-y-3'>
            <h1 className='text-[28px] font-bold'>General</h1>
                <ul className='space-y-5'>
                
                <li>Sales Package</li>
                <li>Model Number</li>
                <li>Secondary Material</li>
                <li>Configuration</li>
                <li>Upholstery Material</li>
                <li>Upholstery Color</li>
                </ul>
            </div>
            <div className='mt-10 space-y-3'>
            <h1 className='text-[28px] font-bold'>Product </h1>

                <ul className='space-y-5'>
                <li>Filling Material</li>
                <li>Finish Type</li>
                <li>Adjustable Headrest</li>
                <li>Maximum Load Capacity</li>
                <li>Origin of Manufacture</li>
                </ul>
            </div>
            <div className='mt-10 space-y-3'>
            <h1 className='text-[28px] font-bold'>Dimensions </h1>
                <ul className='space-y-5'>
                
                <li>Width</li>
                <li>Height</li>
                <li>Depth</li>
                <li>Weight</li>
                <li>Seat Height</li>
                <li>Leg Height</li>
                </ul>
            </div>
            <div className='mt-12 space-y-3'>
                
                <div className='space-y-3'>
                <h1 className='text-[28px] font-bold'>Warranty </h1>
                <ul>
                    <li>Warranty Summary</li>
                    <li className='mt-14'>Warranty Service Type</li>
                    <li className='mt-24'>Covered in Warranty</li>
                    <li className='mt-14'>Not Covered in Warranty</li>
                    <li className='mt-32'>Domestic Warranty</li>
                    </ul>
                </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='mt-24 space-y-3 ml-12'>
                <ul className='space-y-5'>
                <li>1 sectional sofa</li>
                <li>TFCBLIGRBL6SRHS</li>
                <li>Solid Wood</li>
                <li>L-shaped</li>
                <li>Fabric + Cotton</li>
                <li>Bright Grey & Lion</li>
                </ul>
            </div>
            <div className='mt-24 space-y-3 ml-12'>
                <ul className='space-y-5'>
                <li>Foam</li>
                <li>Bright Grey & Lion</li>
                <li>No</li>
                <li>280 KG</li>
                <li>India</li>
                </ul>
            </div>
            <div className='mt-24 space-y-3 ml-12'>
                <ul className='space-y-5'>
                <li>265.32 cm</li>
                <li>76 cm</li>
                <li>167.76 cm</li>
                <li>45 KG</li>
                <li>41.52 cm</li>
                <li>5.46 cm</li>
                </ul>
            </div>
            <div className='mt-24 ml-12'>
                <div >
                    <ul className='space-y-7'>
                    <li className='h-[50px] w-[226px]'>1 Year Manufacturing Warranty</li>
                    <li className=' w-[241px]'>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</li>
                    <li className='w-[241px]'>Warranty Against Manufacturing Defect</li>
                    <li className='w-[241px] mt-10'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
                    <li >1 Year</li>
                    </ul>
                </div>
                <button className='bg-[#B88E2F] text-[#FFFFFF] w-[215px] h-[64px] mt-10'>Add To Cart</button>
            </div>
        </div>
        <div className='col-span-1'>
            
            <div className='mt-24 space-y-3 ml-12'>
                <ul className='space-y-5'>
                
                <li>1 Three Seater, 2 Single Seater</li>
                <li>DTUBLIGRBL568</li>
                <li>Solid Wood</li>
                <li>L-shaped</li>
                <li>Fabric + Cotton</li>
                <li>Bright Grey & Lion</li>
                </ul>
            </div>
            <div className='mt-24 space-y-3 ml-12'>

                <ul className='space-y-5'>
                <li>Matte</li>
                <li>Bright Grey & Lion</li>
                <li>yes</li>
                <li>300 KG</li>
                <li>India</li>
                </ul>
            </div>
            <div className='mt-24 space-y-3 ml-12'>

                <ul className='space-y-5'>
                
                <li>265.32 cm</li>
                <li>76 cm</li>
                <li>167.76 cm</li>
                <li>65 KG</li>
                <li>41.52 cm</li>
                <li>5.46 cm</li>
                </ul>
            </div>
            <div className='mt-24 '>
                
                <div >
   
                <ul className='space-y-7 ml-12'>
                <li className='w-[226px] h-[50px]'>1.2 Year Manufacturing Warranty</li>
                    <li className='w-[241px] h-[100px]'>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</li>
                    <li className='w-[241px]'>Warranty of the product is limited to manufacturing defects only.</li>
                    <li className='w-[241px] '> The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
                    <li>3 Months</li>
                    </ul>
                </div>
                <button className='bg-[#B88E2F] text-[#FFFFFF] w-[215px] h-[64px] mt-9 ml-12'>Add To Cart</button>

            </div>
        </div>
        <div className='col-span-1'></div>
        </div>
      
    </div>
    </>
  );
};

export default ProductComparison;
