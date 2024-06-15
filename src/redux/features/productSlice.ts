import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProduct = {
  _id: "",
  imgSrc: "",
  fileKey: "",
  name: "",
  price: "",
  category: "",
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
