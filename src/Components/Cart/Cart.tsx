import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/redux";
import { RootState } from "../../services/redux/RootReducer";
import { removeProduct, setCount } from "../../services/redux/slices/cart";
import { ProductType } from "../../services/redux/slices/cart/type";
const Main_Cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const removeFromCart = (product: any) => {
    dispatch(removeProduct(product));
  };

  const setProductCount = (count: number, product: ProductType) => {
    if (count <= 0) {
      return;
    }
    const payload = {
      count,
      product,
    };
    dispatch(setCount(payload));
  };

  return (
    <>
      <div className="flex justify-between my-20 mx-24">
        <div>
          <div className="flex px-32 py-10 justify-between bg-[#F9F1E7] font-semibold text-base text-[#000000] ">
            <div className="mr-28 ml-10">Product</div>
            <div className="mr-40">Price</div>
            <div className="mr-14">Quantity</div>
            <div>Subtatotal</div>
          </div>
          {cartItems.map((item: any) => {
            return (
              <div
                key={item.product.id}
                className="flex mt-10 items-center font-medium text-base "
              >
                <div>
                  <img
                    src={item.product.image}
                    className="bg-[#F9F1E7] rounded-xl w-20"
                    alt=""
                  />
                </div>
                <div className="mr-20 ml-14 text-[#9F9F9F]">
                  {item.product.name}
                </div>
                <div className="mr-[105px] text-[#9F9F9F]">
                  Rs. {item.product.price.toLocaleString()}
                </div>
                <div className="quantity-buttons">
                  <div className="quantity-button">
                    <button
                      type="button"
                      onClick={() =>
                        setProductCount(item.count - 1, item.product)
                      }
                      className="quantity-button__btn"
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setProductCount(item.count + 1, item.product)
                      }
                      className="quantity-button__btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="ml-14 mr-10">
                  Rs. {item.product.price.toLocaleString()}
                </div>
                <div onClick={() => removeFromCart(item.product)}>
                  <AiTwotoneDelete
                    style={{ width: "20px", height: "20px", color: "#B88E2F" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="items-center text-center bg-[#F9F1E7] px-20 pb-24 pt-10 rounded">
          <div className=" font-semibold text-[32px] leading-[48px] text-[#000000] mb-14">
            Cart Totals
          </div>
          <div className="flex justify-between max-w-[256px]">
            <div className="text-base font-medium text-[#000000]">Subtotal</div>
            <div className="text-[#9F9F9F] text-base font-normal">
              Rs. 250,000.00
            </div>
          </div>
          <div className="flex justify-between max-w-[256px] my-6">
            <div className="text-base font-medium text-[#000000]">Total</div>
            <div className="font-mediun text-xl leading-[30px] text-[#B88E2F]">
              Rs. 250,000.00
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
