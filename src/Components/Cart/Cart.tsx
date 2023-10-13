import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/redux";
import { RootState } from "../../services/redux/RootReducer";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../../services/redux/slices/cart";
const Main_Cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const removeFromCart = (productId: any) => {
    console.log(productId);
    dispatch(removeProduct(productId));
  };

  const handleDecrementQuantity = (productId: any) => {
    console.log(productId, "handleDecrementQuantity");
    dispatch(decrementQuantity(productId));
  };

  const handleIncrementQuantity = (productId: any) => {
    console.log(productId, "handleIncrementQuantity");
    dispatch(incrementQuantity(productId));
  };

  const priceTotal = () => {
    let totalPrice = 0;

    if (cartItems.length > 0) {
      cartItems.map((item: any) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  };

  return (
    <>
      <div className="flex justify-between my-20 mx-24">
        {cartItems.length > 0 ? (
          <div className="">
            <div className="flex flex-row py-5 space-x-20   justify-between bg-[#F9F1E7] font-semibold text-base text-[#000000] ">
              <div></div>
              <div className="">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total price</div>
              <div></div>
            </div>
            {cartItems.map((item: any) => {
              const priceItem = item.price * item.count;
              return (
                <div
                  key={item.id}
                  className="flex flex-row  space-x-20 mt-10  items-center font-medium text-base "
                >
                  <div>
                    <img
                      src={item.image}
                      className="bg-[#F9F1E7] rounded-md w-10 h-10"
                      alt=""
                    />
                  </div>
                  <div className=" text-[#9F9F9F]">{item.name}</div>
                  <div className=" text-[#9F9F9F]">
                    Rs. {item.price.toLocaleString()}
                  </div>
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
                  <div className="">Rs. {priceItem.toLocaleString()}</div>
                  <div onClick={() => removeFromCart(item.id)}>
                    <AiTwotoneDelete
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#B88E2F",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Quay lại shopping</div>
        )}

        <div className="items-center text-center bg-[#F9F1E7] px-20 pb-24 pt-10 rounded">
          <div className=" font-semibold text-[32px] leading-[48px] text-[#000000] mb-14">
            Cart Totals
          </div>
          <div className="flex justify-between max-w-[256px]">
            <div className="text-base font-medium text-[#000000]">
              Total Item
            </div>
            <div className="text-[#9F9F9F] text-base font-normal">
              {cartItems.length}
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

export default Main_Cart;
