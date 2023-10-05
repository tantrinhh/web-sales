import GoToTop from "../../Components/Common/GoToTop";
import HomePage from "../../Components/Home/HomePage";
import LayoutChildren from "../../Components/Layout/Layout_Children";

const index = () => {
  return (
    <>
      <GoToTop />
      <LayoutChildren>
        <HomePage />
      </LayoutChildren>
    </>
  );
};

export default index;
