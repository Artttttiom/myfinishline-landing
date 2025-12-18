import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActiveChallenge, IProduct } from "@/app/types";

interface IInitialState {
  products: IProduct[];
}

const initialState: IInitialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
