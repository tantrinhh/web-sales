import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
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
  // const sameProduct = (product: ProductType) => product.id === action.id;
  const sameProduct = (product: ProductType) => console.log(product, action);
  console.log(sameProduct, "sameProduct");
  return state.cartItems.findIndex(sameProduct);
};
type AddProductType = {
  product: ProductType;
  count: number;
};
// Create a cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: any, action: PayloadAction<AddProductType>) => {
      const cartItems = state.cartItems;

      // find index of product
      const index = indexSameProduct(state, action.payload.product);

      if (index !== -1) {
        cartItems[index].count += action.payload.count;
        return;
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },
    removeProduct(state, action: PayloadAction<ProductType>) {
      // find index of product
      state.cartItems.splice(indexSameProduct(state, action.payload), 1);
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      console.log(item);
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      console.log(item);
      // if (item.quantity === 1) {
      //   item.quantity = 1;
      // } else {
      //   item.quantity--;
      // }
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
export const cartSelectors = cartEntity.getSelectors((state: any) => state);
