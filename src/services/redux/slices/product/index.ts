import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
} from "@reduxjs/toolkit";
import { RootState } from "../../RootReducer";
import { AppThunkConfig } from "../../store/thunk-extras";
import { Product } from "./type";

type ProductState = EntityState<Product> & { allProducts: Product[] };

// Create an entity adapter for managing products
const productEntity = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});

// Define the initial state using the entity adapter
const initialState: ProductState = {
  ...productEntity.getInitialState(),
  allProducts: [], // Khởi tạo danh sách tất cả sản phẩm trống
};

// Create a product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProduct: productEntity.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      productEntity.setAll(state, action.payload);
    });
  },
});

export default productSlice.reducer;

// Define selectors
export const productSelectors = productEntity.getSelectors(
  (state: RootState) => state.product
);
//Search
export const selectProductsBySearchTerm =
  (searchTerm: string) => (state: RootState) => {
    const products = productSelectors.selectAll(state);
    if (!searchTerm) {
      return products;
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

// Define an async thunk to fetch products
export const getProduct = createAsyncThunk<Product[], void, AppThunkConfig>(
  "product/getProducts",
  async (_, { extra: { api } }) => {
    const res = await api.get<Product[], any>("product");
    return res;
  }
);
