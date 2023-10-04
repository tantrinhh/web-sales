import { useState } from "react";
import going from '../../assets/blog/Rectangle 68.png'
import exploring from '../../assets/blog/Rectangle 68 (1).png'
import handmade from '../../assets/blog/Rectangle 68 (2).png'
import admin from '../../assets/blog/dashicons_admin-users.png'
import calendar from '../../assets/blog/uis_calender.png'
import tag from '../../assets/blog/ci_tag.png'
import post1 from '../../assets/blog/Rectangle 69.png'
import post2 from '../../assets/blog/Rectangle 69 (1).png'
import post3 from '../../assets/blog/Rectangle 69 (2).png'
import post4 from '../../assets/blog/Rectangle 69 (4).png'
import post5 from '../../assets/blog/Rectangle 69 (5).png'
const Blog = () => {
  const posts = [
    {
      image: post1,
      content: 'Going all-in with millennial design',
      time: '03 Aug 2022'
    },
    {
      image: post2,
      content: 'Exploring new ways of decorating',
      time: '03 Aug 2022'
    },
    {
      image: post3,
      content: 'Handmade pieces that took time to make',
      time: '03 Aug 2022'
    },
    {
      image: post4,
      content: 'Modern home in Milan',
      time: '03 Aug 2022'
    },
    {
      image: post5,
      content: 'Colorful office redesign',
      time: '03 Aug 2022'
    }
  ]
  const blogs = [
    {
      image: going,
      icon1: admin,
      name1: "Admin",
      icon2: calendar,
      name2: "14 Oct 2022",
      icon3: tag,
      name3: "Wood",
      title: "Going all-in with millennial design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      read: "Read more"
    },
    {
      image: exploring,
      icon1: admin,
      name1: "Admin",
      icon2: calendar,
      name2: "14 Oct 2022",
      icon3: tag,
      name3: "Handmade",
      title: "Exploring new ways of decorating",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      read: "Read more"
    },
    {
      image: handmade,
      icon1: admin,
      name1: "Admin",
      icon2: calendar,
      name2: "14 Oct 2022",
      icon3: tag,
      name3: "Wood",
      title: "Handmade pieces that took time to make",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      read: "Read more"
    },
    {
      image: going,
      icon1: admin,
      name1: "Admin",
      icon2: calendar,
      name2: "14 Oct 2022",
      icon3: tag,
      name3: "Wood",
      title: "Going all-in with millennial design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      read: "Read more"
    },
    {
      image: exploring,
      icon1: admin,
      name1: "Admin",
      icon2: calendar,
      name2: "14 Oct 2022",
      icon3: tag,
      name3: "Handmade",
      title: "Exploring new ways of decorating",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      read: "Read more"
    },
    {
      image: handmade,
      icon1: admin,
      name1: "Admin",
      icon2: calendar,
      name2: "14 Oct 2022",
      icon3: tag,
      name3: "Wood",
      title: "Handmade pieces that took time to make",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
      read: "Read more"
    }
  ]
  const [blogPerPage, setBlogPerPage] = useState<number | string>(3); // Số sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const totalPages = Math.ceil(blogs.length / (+blogPerPage || 1));

  // Cập nhật indexOfLastblog và indexOfFirstblog
  const blogPerPageNumber = +blogPerPage || 1; // Chuyển đổi blogPerPage thành số và mặc định là 1 nếu không hợp lệ
  const indexOfLastblog = currentPage * blogPerPageNumber;
  const indexOfFirstblog = indexOfLastblog - blogPerPageNumber;
  const currentblogs = blogs.slice(
    indexOfFirstblog,
    indexOfLastblog
  );

  // Xử lý khi người dùng chuyển trang
  const handlePageChange = (page: any) => {
    setCurrentPage(page.selected + 1);
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
    <div className="grid grid-cols-3 container mt-24">
      <div className="col-span-2">
        {currentblogs.map((blog, index) =>{
          return(
            <>
            <img src={blog.image} alt={`Blog ${index}`} />
        <div className="grid grid-cols-2">
          <div className="col-span-1 mt-5">
            <div className="flex gap-10">
              <div className="flex">
                <img src={blog.icon1}/>
                <p className="text-[#9F9F9F] text-[16px]">{blog.name1}</p>
              </div>
              <div className="flex">
                <img src={blog.icon2}/>
                <p className="text-[#9F9F9F] text-[16px]">{blog.name2}</p>
              </div>
              <div className="flex">
                <img src={blog.icon3}/>
                <p className="text-[#9F9F9F] text-[16px]">{blog.name3}</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[30px] mt-3">{blog.title}</h1>
        <p className="text-[#9F9F9F] w-[817px] mt-3">{blog.content}</p>
        <p className="text-[16px] mt-5 ">{blog.read}</p>
        <div className="w-20 mb-16 mt-3"> 
          <div className=" border-b border-[#000000] w-16 mx-auto"></div>
        </div>

            </>
          )
        })}
      </div>
      <div className="col-span-1 space-y-7">
        <div className='max-w-md mx-auto'>
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-gray-300">
              <div className="flex items-center justify-end w-full">
                  <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pl-2"
                  type="text"
                  id="search"
                  /> 

                  <div className="text-[#000000] ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                  </div>
              </div>
          </div>
        </div>
        <div className="space-y-5 mx-[10%]">
          <h1 className="text-[24px] font-bold">Categories</h1>
          <div className="grid grid-cols-12">
            <div className="col-span-11">
              <ul className="space-y-5">
                <li className="text-[#9F9F9F]">Crafts</li>
                <li className="text-[#9F9F9F]">Design</li>
                <li className="text-[#9F9F9F]">Handmade</li>
                <li className="text-[#9F9F9F]">Interior</li>
                <li className="text-[#9F9F9F]">Wood</li>
              </ul>
            </div>
            <div className="col-span-1 ml-7">
              <ul className="space-y-5">
                <li className="text-[#9F9F9F]">2</li>
                <li className="text-[#9F9F9F]">8</li>
                <li className="text-[#9F9F9F]">7</li>
                <li className="text-[#9F9F9F]">1</li>
                <li className="text-[#9F9F9F]">6</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-[10%]">
          <h1 className="text-[24px] font-bold">Recent Posts</h1>
          {posts.map((post) =>{
            return(
              <div className="grid grid-cols-3">
                <div className="col-span-1 mt-5">
                  <img src={post.image}/>
                </div>
                <div className="col-span-2 mt-7">
                  <p className="text-[14px] w-[119px]">{post.content}</p>
                  <p className="text-[#9F9F9F] text-[12px]">{post.time}</p>
                </div>
              </div>
            )
          })}
        </div>
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
    </>
  )
};

export default Blog;
