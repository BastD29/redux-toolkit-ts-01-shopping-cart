import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "../../models/Cart";
import { CartItem } from "../../models/CartItem";

const initialState: CartState = {
  items: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
    },
  },
});

export const { actions, reducer } = slice;
