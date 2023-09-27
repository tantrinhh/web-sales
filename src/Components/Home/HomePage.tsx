
import "../../index.css"
import MaskGroup from "../../assets/home/MaskGroup.jpg"
import Dining from "../../assets/home/Dining.png"
import Living from "../../assets/home/Image-living room.png"
import Bedroom from "../../assets/home/Bedroom.png"
const HomePage = () => {
  const product = [
    {
      
    }
  ]
  return( 
    <>
      <div>
          <img src={MaskGroup} className="w-screen"/>   
          <div className="absolute bg-[#FFF3E3] w-[643px] h-[443px] top-[253px] left-[739px] space-y-3 space-x-5">
            <p className="text-[16px] mt-7 font-bold mx-5">New Arrival</p>
            <h1 className="text-[52px] text-[#B88E2F] font-bold">Discover Our<br/>New Collection</h1>
            <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="bg-[#B88E2F] py-[25px] px-[72px] text-white">BUY NOW</button>
          </div>
      </div>
      <div className="mt-20 text-center justify-center items-center container space-y-5">
        <h1 className="text-[32px] font-bold">Browse The Range</h1>
        <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex gap-20">
          <div >
            <img src={Dining}/>
            <p className="font-bold mt-5 text-[24px]">Dining</p>
          </div>
          <div>
            <img src={Living}/>
            <p className="font-bold mt-5 text-[24px]">Living</p>
          </div>
          <div>
            <img src={Bedroom}/>
            <p className="font-bold mt-5 text-[24px]">Bedroom</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </>
  )
};

export default HomePage;
