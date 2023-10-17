import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Product } from "../product/type";
import { ProductType } from "./type";

interface CartTypes {
  cartItems: ProductType[];
}
// Create an entity adapter for managing products
const cartEntity = createEntityAdapter<ProductType>({
  selectId: (product) => product.id,
});

// Define the initial state using the entity adapter
const initialState = {
  cartItems: [],
} as CartTypes;

const indexSameProduct = (state: CartTypes, action: ProductType) => {
  const sameProduct = (product: ProductType) => product.id === action.id;
  return state.cartItems.findIndex(sameProduct);
};
type AddProductType = {
  product: ProductType;
  // count: number;
};
// Create a cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Thêm  sản phẩm
    addProduct: (state: any, action: PayloadAction<Product>) => {
      const itemInCart = state.cartItems.find(
        (item: any) =>
          item.id === action.payload.id &&
          item.colors === action.payload.colors &&
          item.sizes === action.payload.sizes
      );

      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.cartItems.push({ ...action.payload });
      }
    },
    //Xóa  sản phẩm
    removeProduct(state: any, action: PayloadAction<ProductType>) {
      const removeItem = state.cartItems.filter(
        (item: any) => item.id !== action.payload
      );

      state.cartItems = removeItem;
    },
    //Giảm số lượng sản phẩm
    incrementQuantity: (state: any, action) => {
      const item = state.cartItems.find(
        (item: any) => item.id === action.payload
      );
      item.count++;
      console.log(item);
    },
    //Tăng số lượng sản phẩm
    decrementQuantity: (state: any, action) => {
      const item = state.cartItems.find(
        (item: any) => item.id === action.payload
      );
      if (item.count === 1) {
        item.count = 1;
      } else {
        item.count--;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

// // Define selectors
export const cartSelectors = cartEntity.getSelectors(
  (state: any) => state.cartItems
);
