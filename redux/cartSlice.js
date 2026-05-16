import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }

      state.totalQty += 1;
    },

    removeFromCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);

      if (item) {
        state.totalQty -= item.qty;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },

    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.qty += 1;
        state.totalQty += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);

      if (item && item.qty > 1) {
        item.qty -= 1;
        state.totalQty -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQty = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;