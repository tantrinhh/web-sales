import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ProductType } from "../cart/type";

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

// Create a cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Thêm  sản phẩm
    addProduct: (state: any, action: PayloadAction<ProductType>) => {
      console.log(action, "action");
      const itemInCart = state.cartItems.find(
        (item: any) => item.id === action.payload.id
      );
      console.log(itemInCart, "itemInCart");
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
    },
    //Xóa  sản phẩm
    removeProduct(state: any, action: PayloadAction<ProductType>) {
      const removeItem = state.cartItems.filter(
        (item: any) => item.id !== action.payload
      );

      state.cartItems = removeItem;
    },
  },
  extraReducers: (builder) => {},
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

// // Define selectors
export const cartSelectors = cartEntity.getSelectors(
  (state: any) => state.cartItems
);
