import React, { useState } from "react";
import Vector1 from "../../assets/shop/Vector1.png";
import Vector2 from "../../assets/shop/Vector2.png";
import Vector3 from "../../assets/shop/Vector3.png";
import image1 from "../../assets/shop/image1.png";
import Images from "../../assets/shop/Images.png";
import image3 from "../../assets/shop/image3.png";
import image4 from "../../assets/shop/image4.png";

const Main = () => {
  const products = [
    {
      image: image1,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Images,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: image3,
      name: "Lolito",
      des: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: image4,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
    {
      image: image1,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Images,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: image3,
      name: "Lolito",
      des: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: image4,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
    {
      image: image1,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Images,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: image3,
      name: "Lolito",
      des: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: image4,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
    {
      image: image1,
      name: "Syltherine",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Images,
      name: "Leviosa",
      des: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: image3,
      name: "Lolito",
      des: "Luxury big sofa",
      price: "Rp 7.000.000",
    },
    {
      image: image4,
      name: "Respira",
      des: "Outdoor bar table and stool",
      price: "Rp 500.000",
    },
  ];
  const [productPerPage, setProductPerPage] = useState<number | string>(4); // Số sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const totalPages = Math.ceil(products.length / (+productPerPage || 1));

  // Cập nhật indexOfLastProduct và indexOfFirstProduct
  const productPerPageNumber = +productPerPage || 1; // Chuyển đổi productPerPage thành số và mặc định là 1 nếu không hợp lệ
  const indexOfLastProduct = currentPage * productPerPageNumber;
  const indexOfFirstProduct = indexOfLastProduct - productPerPageNumber;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Xử lý khi người dùng chuyển trang
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Xử lý nút "Previous"
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className="bg-[#FAF3EA] py-5 px-16 mb-10">
        <div className="flex justify-between items-center text-center">
          <div className="flex gap-x-5 items-center text-center">
            <div className="mt-1">
              <img src={Vector1} alt="" />
            </div>
            <p className="text-xl font-normal leading-[30px] text-[#000000]">
              Filter
            </p>
            <div className="mt-1">
              <img src={Vector2} alt="" />
            </div>
            <div className="">
              <img src={Vector3} alt="" />
            </div>
            <div>|</div>
            <div className="text-base font-normal leading-6 text-[#000000]">
              Showing 1–16 of 32 results
            </div>
          </div>
          <div className="flex gap-x-5  ">
            <div className="flex items-center gap-x-2">
              <label className="  text-xl font-normal leading-[30px] text-[#000000]">
                Show
              </label>
              <div className="mt-2">
                <input
                  type="number" // Sử dụng type="number"
                  className="w-14 h-14 px-2 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder=""
                  value={productPerPage}
                  onChange={(e) => {
                    const inputValue = parseInt(e.target.value, 10); // Chuyển đổi giá trị nhập thành số nguyên
                    if (!isNaN(inputValue)) {
                      // Nếu giá trị là một số hợp lệ
                      const maxProductPerPage = products.length; // Giới hạn tối đa là tổng số sản phẩm
                      let newProductPerPage = Math.min(
                        inputValue,
                        maxProductPerPage
                      ); // Chọn giá trị nhỏ hơn hoặc bằng tổng số sản phẩm
                      if (newProductPerPage < 1) {
                        // Nếu giá trị nhỏ hơn 1, đặt giá trị mới thành 1
                        newProductPerPage = 1;
                      }
                      setProductPerPage(newProductPerPage);
                    }
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-x-2 ">
              <label className="   text-xl font-normal leading-[30px] text-[#000000]">
                Short by
              </label>
              <div className="mt-2">
                <input
                  className=" w-[188px] px-4 h-14 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#9F9F9F] placeholder:text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 container gap-x-5 gap-y-7 ">
        <div className="grid grid-cols-4  gap-y-14 ">
          {currentProducts.map((product, index) => (
            <div key={index}>
              <img src={product.image} alt="" />
              <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5">
                <h2 className="font-bold pt-5 text-[24px]">{product.name}</h2>
                <p className="text-[16px] text-[#898989]">{product.des}</p>
                <h3 className="font-bold text-[20px]">{product.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 mx-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[#B88E2F] text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* Hiển thị các nút trang */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#B88E2F] text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 mx-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[#B88E2F] text-white"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="max-w-[400px]">
        {" "}
        <div className="relative ">
          <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-10 duration-300">
            <h1 className="tracking-wider">Title</h1>
            <p className="mx-auto">Description</p>
          </a>
          <a href="#" className="relative">
            <div className="h-48 flex flex-wrap content-center">
              <img src={image3} alt="" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
