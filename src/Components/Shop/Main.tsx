import React, { useEffect, useState } from "react";
import Vector1 from "../../assets/shop/Vector1.png";
import Vector2 from "../../assets/shop/Vector2.png";
import Vector3 from "../../assets/shop/Vector3.png";
import { CiShare2 } from "react-icons/ci";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Data } from "../Interface";

const Main: React.FC = () => {
  const [listUsers, setListUsers] = useState<Data[]>([]);

  const dispatch = useDispatch();



  const today: Date = new Date();
  function isProductNew(product: Data): boolean {
    const productAddedDate: Date = new Date(product.dateAdded); // Chuyển đổi chuỗi thành Date
    const daysDifference: number = Math.ceil(
      (today.getTime() - productAddedDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysDifference <= 7;
  }
  const [productPerPage, setProductPerPage] = useState<number | string>(8); // Số sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const totalPages = Math.ceil(listUsers.length / (+productPerPage || 1));

  // Cập nhật indexOfLastProduct và indexOfFirstProduct
  const productPerPageNumber = +productPerPage || 1; // Chuyển đổi productPerPage thành số và mặc định là 1 nếu không hợp lệ
  const indexOfLastProduct = currentPage * productPerPageNumber;
  const indexOfFirstProduct = indexOfLastProduct - productPerPageNumber;
  const currentdata = listUsers.slice(indexOfFirstProduct, indexOfLastProduct);

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
                  className="w-14 h-14 px-3 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder=""
                  value={productPerPage}
                  onChange={(e) => {
                    const inputValue = parseInt(e.target.value, 10); // Chuyển đổi giá trị nhập thành số nguyên
                    if (!isNaN(inputValue)) {
                      // Nếu giá trị là một số hợp lệ
                      const maxProductPerPage = listUsers.length; // Giới hạn tối đa là tổng số sản phẩm
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
        <div className="grid max-md: justify-center md:grid-cols-4  gap-y-14 ">
          {currentdata.map((item: Data, index) => (
            <div key={index}>
              <div>
                {" "}
                <Link to={`/singleProduct/${item.id}`}>
                  <div className="relative ">
                    <div className="w-[285px] absolute inset-0 z-10 bg-[#3A3A3A] text-center flex flex-col gap-8 items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                      <div className="px-8 py-2 rounded bg-[#FFFFFF] text-[#B88E2F] cursor-pointer">
                        <Link
                          to="/cart"
                          onClick={() =>
                         {}
                          }
                        >
                          Add to cart
                        </Link>
                      </div>
                      <div className="flex gap-5 text-[#FFFFFF] text-base leading-6 font-semibold">
                        <div className="flex">
                          <div className="mt-1">
                            <CiShare2 />
                          </div>
                          <div>Share</div>
                        </div>
                        <div className="flex">
                          <div className="mt-1">
                            <BiGitCompare />
                          </div>
                          <div className=" cursor-pointer">
                            {" "}
                            <Link to="/item_comparison">Compare</Link>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mt-1">
                            <AiOutlineHeart />
                          </div>
                          <div>Like</div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative">
                        <img src={item.image} alt="" />
                        {item.discount > 0 && (
                          <div className="absolute top-6 right-20 text-white rounded-full w-10 h-10 items-center text-center pt-1.5 bg-[#E97171]">
                            -{item.discount}%
                          </div>
                        )}
                        {isProductNew(item) && (
                          <div className="absolute top-6 right-20 bg-[#2EC1AC] text-white rounded-full w-10 h-10 items-center text-center pt-2">
                            New
                          </div>
                        )}
                        <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5">
                          <h2 className=" font-semibold leading-7 text-[#3A3A3A] pt-5 text-[24px]">
                            {item.name}
                          </h2>
                          <p className="text-[16px] font-medium leading-6 text-[#898989]">
                            {item.des}
                          </p>
                          {item.discount > 0 ? (
                            <div className="flex items-center">
                              <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                                Rp{" "}
                                {(
                                  item.price -
                                  item.price * (item.discount / 100)
                                ).toLocaleString()}
                              </h3>
                              <span className="text-[16px] text-[#B0B0B0] line-through ml-3">
                                Rp {item.price.toLocaleString()}
                              </span>
                            </div>
                          ) : (
                            <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                              Rp {item.price.toLocaleString()}
                            </h3>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 my-20">
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
    </>
  );
};

export default Main;
