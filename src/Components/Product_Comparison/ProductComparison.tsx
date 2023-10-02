import React from 'react'
import sofa1 from '../../assets/ProductComparison/sofa1.png'
import sofa2 from '../../assets/ProductComparison/sofa2.png'
import stars from '../../assets/ProductComparison/stars.png'

const ProductComparison = () => {
  return (
    <>
    <div className='grid grid-cols-4'>
        <div className='col-span-1 mt-9'>
            <h1 className='w-[223px] h-[105px] text-[28px] font-bold'>Go to Product page for more Products</h1>
            <p className='text-[#727272] text-[20px] border-b-2 border-b-[#727272] mt-10'>View More</p>
        </div>
        <div className='col-span-1 mt-9'>
            <img src={sofa1}/>
            <h1 className='text-[24px] font-bold'>Asgaard Sofa</h1>
            <p className='text-[18px] font-bold'>Rs. 250,000.00</p>
            <div className='flex'>
                <p className='text-18px font-bold'>4.7</p>
                <img src={stars}/>
                <p className='border-l-[1px] border-[#9F9F9F] text-[13px] text-[#9F9F9F]'>204 Review</p>
            </div>
        </div>
        <div className='col-span-1'>
            <img src={sofa2}/>
            <h1 className='text-[24px] font-bold'>Outdoor Sofa Set</h1>
            <p className='text-[18px] font-bold'>Rs. 224,000.00</p>
            <div className='flex'>
                <p className='text-18px font-bold'>4.2</p>
                <img src={stars}/>
                <p className='border-l-[1px] border-[#9F9F9F] text-[13px] text-[#9F9F9F]'>145 Review</p>
            </div>
        </div>
        <div className='col-span-1 mt-9'>
            <h1 className='text-[24px] font-bold'>Add A Product</h1>
            <div>
                <button type="button" className="inline-flex w-[242px] gap-x-20 rounded-md bg-[#B88E2F] px-3 py-2 text-sm font-semibold text-[#FFFFFF] shadow-sm ring-1 ring-inset ring-gray-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Choose a Product
                <svg className="-mr-1 h-5 w-5 text-[#FFFFFF]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
                </button>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-4 divide-x-2 divide-y-2 divide-[#E8E8E8]'>
        <div className='col-span-1'>
            <div className='mt-10 space-y-3'>
                <h1 className='text-[28px] font-bold'>General</h1>
                <p>Sales Package</p>
                <p>Model Number</p>
                <p>Secondary Material</p>
                <p>Configuration</p>
                <p>Upholstery Material</p>
                <p>Upholstery Color</p>
            </div>
            <div className='mt-10 space-y-3'>
                <h1 className='text-[28px] font-bold'>Product </h1>
                <p>Filling Material</p>
                <p>Finish Type</p>
                <p>Adjustable Headrest</p>
                <p>Maximum Load Capacity</p>
                <p>Origin of Manufacture</p>
            </div>
            <div className='mt-10 space-y-3'>
                <h1 className='text-[28px] font-bold'>Dimensions </h1>
                <p>Width</p>
                <p>Height</p>
                <p>Depth</p>
                <p>Weight</p>
                <p>Seat Height</p>
                <p>Leg Height</p>
            </div>
            <div className='mt-10 space-y-3'>
                <h1 className='text-[28px] font-bold'>Warranty </h1>
                <div className='space-y-10'>
                    <p>Warranty Summary</p>
                    <p>Warranty Service Type</p>
                    <p>Covered in Warranty</p>
                    <p>Not Covered in Warranty</p>
                    <p>Domestic Warranty</p>
                </div>
            </div>
        </div>
        <div className='col-span-1'>
            <div className='mt-24 space-y-3'>
                <p>1 sectional sofa</p>
                <p>TFCBLIGRBL6SRHS</p>
                <p>Solid Wood</p>
                <p>L-shaped</p>
                <p>Fabric + Cotton</p>
                <p>Bright Grey & Lion</p>
            </div>
            <div className='mt-24 space-y-3'>
                <p>Foam</p>
                <p>Bright Grey & Lion</p>
                <p>No</p>
                <p>280 KG</p>
                <p>India</p>
            </div>
            <div className='mt-10 space-y-3'>
                <h1 className='text-[28px] font-bold'>Dimensions </h1>
                <p>265.32 cm</p>
                <p>76 cm</p>
                <p>167.76 cm</p>
                <p>45 KG</p>
                <p>41.52 cm</p>
                <p>5.46 cm</p>
            </div>
            <div className='mt-10 space-y-3'>
                <h1 className='text-[28px] font-bold'>Warranty </h1>
                <div className='space-y-10'>
                    <p>Warranty Summary</p>
                    <p>Warranty Service Type</p>
                    <p>Covered in Warranty</p>
                    <p>Not Covered in Warranty</p>
                    <p>Domestic Warranty</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductComparison