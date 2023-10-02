const Footer = () => {
  return (
    <>
      <div>
        <div>
          <div className="border-t  border-[#D9D9D9] "></div>
          <div className="mx-20 mt-14 my-10">
            <div className="flex justify-between">
              <div className=" flex flex-col gap-y-8">
                <div className="text-[#000000] text-2xl font-bold leading-9">
                  Funiro.
                </div>
                <div className="text-[#9F9F9F] text-lg font-medium  leading-6">
                  400 University Drive Suite 200 Coral Gables,
                  <br />
                  FL 33134 USA
                </div>
              </div>
              <div className="flex flex-col gap-y-8 text-lg font-medium  leading-6 ">
                <div className="text-[#9F9F9F]">Links</div>

                <div className="flex flex-col gap-y-8 text-[#000000] ">
                  <div>Home</div>
                  <div>Shop</div>
                  <div>About</div>
                  <div>Contact</div>
                </div>
              </div>
              <div className=" flex flex-col gap-y-8">
                <div className="text-[#9F9F9F]">Help</div>
                <div className=" flex flex-col gap-y-8 text-[#000000] text-lg font-medium  leading-6">
                  <div>Payment Options</div>
                  <div>Returns</div>
                  <div>Privacy Policies</div>
                </div>
              </div>
              <div className=" flex flex-col gap-y-8">
                <div>
                  <div className="text-[#9F9F9F]">Newsletter</div>
                </div>
                <div className="flex gap-x-5">
                  <div className="border-b  border-[#000000] ">
                    Enter Your Email Address
                  </div>
                  <div className="border-b  border-[#000000] text-[#000000] text-lg font-medium  leading-6">
                    SUBSCRIBE
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t mt-10 border-[#D9D9D9]"></div>

            <div className="mt-10 text-[#000000] text-lg font-normal  leading-6">
              <p>2023 furino. All rights reverved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
