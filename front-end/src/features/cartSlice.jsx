import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 191,
      title: "Product 1",
      image: "/src/assets/banner-image1.png",
      color: "Gray",
      price: 29,
      quantity: 1,
    },
    {
      id: 192,
      title: "Product 2",
      image: "/src/assets/banner-image2.png",
      color: "Black",
      price: 39,
      quantity: 2,
    },
    {
      id: 193,
      title: "Product 3",
      image: "/src/assets/banner-image3.png",
      color: "Red",
      price: 99,
      quantity: 1,
    },
    {
      id: 194,
      title: "Product 4",
      image: "/src/assets/product1.png",
      color: "Green",
      price: 59,
      quantity: 3,
    },
    {
      id: 195,
      title: "Product 5",
      image: "/src/assets/banner-image1.png",
      color: "Blue",
      price: 29,
      quantity: 2,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
