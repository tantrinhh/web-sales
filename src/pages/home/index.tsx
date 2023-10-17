import GoToTop from "../../Components/Common/GoToTop";
import HomePage from "../../Components/Home/HomePage";
import LayoutChildren from "../../Components/Layout/LayoutChildren";
const home = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <GoToTop />
      <LayoutChildren>
        <HomePage />
      </LayoutChildren>
    </div>
  );
};

export default home;
