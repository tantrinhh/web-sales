import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/redux";
import { RootState } from "../../services/redux/RootReducer";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../../services/redux/slices/cart";
const Cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const removeFromCart = (productId: any) => {
    dispatch(removeProduct(productId));
  };

  const handleDecrementQuantity = (productId: any) => {
    dispatch(decrementQuantity(productId));
  };

  const handleIncrementQuantity = (productId: any) => {
    dispatch(incrementQuantity(productId));
  };

  const priceTotal = () => {
    let totalPrice = 0;

    if (cartItems.length > 0) {
      cartItems.map((item: any) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  };
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };

  return (
    <>
      <div className="flex justify-between my-20 mx-24">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase  bg-[#F9F1E7] dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 "></th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                const totalPrice = item.price * item.count;
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={item.image}
                        className="bg-[#F9F1E7] rounded-md w-10 h-10"
                        alt=""
                      />
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">
                      <div
                        style={{
                          backgroundColor: item.colors,
                        }}
                        className={`cursor-pointer p-4 border rounded-md `}
                      ></div>
                    </td>
                    <td className="px-6 py-4 uppercase">{item.sizes}</td>
                    <td className="px-6 py-4">
                      Rs.{item.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="quantity-buttons">
                        <div className="quantity-button flex flex-row rounded-md space-x-2">
                          <button
                            type="button"
                            onClick={() => handleDecrementQuantity(item.id)}
                            className="quantity-button__btn"
                          >
                            -
                          </button>
                          <span>{item.count}</span>
                          <button
                            type="button"
                            onClick={() => handleIncrementQuantity(item.id)}
                            className="quantity-button__btn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>Rs.{totalPrice.toLocaleString()}</td>
                    <td>
                      {" "}
                      <AiTwotoneDelete
                        onClick={() => {
                          removeFromCart(item);
                        }}
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "#B88E2F",
                          cursor: "pointer",
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="items-center text-center bg-[#F9F1E7] px-20 pb-24 pt-10 rounded">
          <div className=" font-semibold text-[32px] leading-[48px] text-[#000000] mb-14">
            Cart Totals
          </div>
          <div className="flex justify-between max-w-[256px]">
            <div className="text-base font-medium text-[#000000]">
              Total Item
            </div>
            <div className="text-[#9F9F9F] text-base font-normal">
              {calculateTotalQuantity()}
            </div>
          </div>
          <div className="flex justify-between max-w-[256px] my-6">
            <div className="text-base font-medium text-[#000000]">
              Total Price
            </div>
            <div className="font-mediun text-xl leading-[30px] text-[#B88E2F]">
              Rs. {priceTotal().toLocaleString()}
            </div>
          </div>
          <div>
            <button className="border border-black rounded-[15px] px-20 h-14 font-normal text-xl mt-2 ">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;