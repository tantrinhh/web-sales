import Header from "./Header";
import Footer from "./Footer";

const LayoutPage = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
};

export default LayoutPage;
