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
  const sameProduct = (product: ProductType) => product.id === action.id;

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
  },
  extraReducers: (builder) => {},
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;

// // Define selectors
export const cartSelectors = cartEntity.getSelectors((state: any) => state);
