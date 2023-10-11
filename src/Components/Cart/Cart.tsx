import { AiTwotoneDelete } from "react-icons/ai";
import Asgaardsofa from "../../assets/cart/Asgaardsofa.png";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

const Main_Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, item) => {
    // Tính tổng giá trị của từng sản phẩm và cộng vào biến acc
    return acc + (item.quantity);
  }, 0); // Giá trị khởi tạo của biến total
  return (
    <>
      <div className="grid grid-cols-3 justify-between my-20 mx-24 gap-10">
        <div className="col-span-2">
          <div className="flex px-32 py-10 justify-between bg-[#F9F1E7] font-semibold text-base text-[#000000] ">
            <div className="mr-28 ml-10">Product</div>
            <div className="mr-40">Price</div>
            <div className="mr-14">Quantity</div>
            <div>Subtotal</div>
          </div>
           <div className="mt-10 font-medium text-base space-y-5">
            {cartItems.map((item) =>(
              <div key={item.productId} className="row-span-1 flex space-y-7">
                <div>
                <img
                  src={Asgaardsofa}
                  className="bg-[#F9F1E7] rounded-xl"
                  alt=""
                />
                </div>
                <div className="mr-20 ml-14 text-[#9F9F9F]">Asgaardsofa</div>
                <div className="mr-[105px] text-[#9F9F9F]">Rs. 250,000.00</div>
                <div>
                  <input
                    type="number" // Sử dụng
                    className="w-14 h-10  px-2 rounded-md border-0 py-0.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="ml-14 mr-10">Rs. 250,000.00</div>
                  <button onClick={() => dispatch(removeFromCart(item.productId))}>
              <AiTwotoneDelete className="mb-10"
                style={{ width: "20px", height: "20px", color: "#B88E2F" }}
              />
                  </button>
              </div>
            ))}
          </div> 
        </div>
        <div className="col-span-1 items-center text-center bg-[#F9F1E7] px-20 pb-24 pt-10 rounded">
          <div className=" font-semibold text-[32px] leading-[48px] text-[#000000] mb-14">
            Cart Totals
          </div>
          <div className="flex justify-between max-w-[256px]">
            <div className="text-base font-medium text-[#000000]">Subtotal</div>
            <div className="text-[#9F9F9F] text-base font-normal">
            Rs. {total.toLocaleString()}
            </div>
          </div>
          <div className="flex justify-between max-w-[256px] my-6">
            <div className="text-base font-medium text-[#000000]">Total</div>
            <div className="font-mediun text-xl leading-[30px] text-[#B88E2F]">
            Rs. {total.toLocaleString()}
            </div>
          </div>
          <div>
            <button className="border border-black rounded-[15px] px-16 h-14 font-normal text-xl mt-2 ">
              <Link to="/checkout"> Check Out</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_Cart;
