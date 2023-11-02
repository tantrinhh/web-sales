
import LayoutPage from "../../Components/Layout/Layout_Page";
import GoToTop from "../../Components/Common/GoToTop";
import Favorite from "../../Components/Favorite/Favorite";
const index = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <GoToTop />
      <LayoutPage>
        <Favorite/>
      </LayoutPage>
    </div>
  )
}

export default index