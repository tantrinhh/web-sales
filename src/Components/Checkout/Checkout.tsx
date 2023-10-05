

const Checkout = () => {
  return (
    <div className='container grid grid-cols-2 mt-10'>
        <div className='col-span-1 space-y-5'>
            <h1 className='text-[36px] font-semibold leading-[54px]'>Billing details</h1>
            <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2"
        htmlFor="grid-first-name"
      >
        First Name
      </label>
      <input
        className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
      />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label
        className="block uppercase tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2"
        htmlFor="grid-last-name"
      >
        Last Name
      </label>
      <input
        className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
        Company Name (Optional)
      </label>
      <input
        className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
    </div>
  </div>
  <div className="inline-block relative w-full mb-6">
  <label
        className="block uppercase tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
        Country / Region
      </label>
  <select className="block appearance-none w-full h-[75px] bg-[#FFFFFF] border border-[#9F9F9F] px-4 py-3 pr-8 mb-3 rounded-[10px] shadow leading-tight focus:outline-none focus:shadow-outline">
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#000000] mt-3">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
<div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-[#000000] text-[16px] text-base font-medium mb-2">
        Street address
      </label>
      <input
        className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
        Town / City
      </label>
      <input
        className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
    </div>
  </div>
  <div className="inline-block relative w-full mb-6">
  <label
        className="block uppercase tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
        Province
      </label>
  <select className="block appearance-none w-full h-[75px] bg-[#FFFFFF] border border-[#9F9F9F] px-4 py-3 pr-8 mb-3 rounded-[10px] shadow leading-tight focus:outline-none focus:shadow-outline">
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#000000] mt-3">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
<div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
        ZIP code
      </label>
      <input
        className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
        Phone
      </label>
      <input
        className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-[#000000] text-base text-[16px] font-medium mb-2">
        Email address
      </label>
      <input
        className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <input
        className="appearance-none block w-full h-[75px] bg-[#FFFFFF] text-[#000000] border border-[#9F9F9F] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='Additional information'/>
    </div>
  </div>
</form>
        </div>
        <div className="col-span-1 mt-12 space-y-2">
          <div className="flex justify-between">
            <p className="text-[24px] font-medium leading-[36px]">Product</p>
            <p className="text-[24px] font-medium leading-[36px]">Subtotal</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#9F9F9F] text-[16px] leading-[24px] font-normal">Asgaard sofa</p>
            <p className="font-light leading-[24px] text-[16px]">Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-[16px] leading-[24px]">Subtotal</p>
            <p className="font-light leading-[24px] text-[16px]">Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-[16px] leading-[24px]">Total</p>
            <p className="font-medium leading-[36px] text-[24px] text-[#B88E2F]">Rs. 250,000.00</p>
          </div>
          <div className="border-b-2 border-[#D9D9D9]"></div>
        </div>
    </div>
  )
}

export default Checkout