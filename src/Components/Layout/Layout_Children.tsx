import Header from "./Header";
import Footer from "./Footer";

const LayoutChildren = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
};

export default LayoutChildren;
