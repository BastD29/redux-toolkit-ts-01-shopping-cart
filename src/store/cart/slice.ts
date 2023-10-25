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
    removeItem: (state, action: PayloadAction<string>) => {
      const removedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = removedItems;
    },
    // incrementQuantity: (state, action: PayloadAction<string>) => {
    //   const item = state.items.find((item) => item.id === action.payload);
    //   item?.quantity++
    // },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 0) item.quantity -= 1;
    },
  },
});

export const { actions, reducer } = slice;
