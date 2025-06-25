import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  unit: string;
  image: any;
  quantity: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id && item.title === action.payload.title
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },

    decreaseQuantity(state, action: PayloadAction<{ id: number; title: string }>) {
      const item = state.items.find(
        (i) => i.id === action.payload.id && i.title === action.payload.title
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (i) => !(i.id === action.payload.id && i.title === action.payload.title)
          );
        }
      }
    },

    removeFromCart(state, action: PayloadAction<{ id: number; title: string }>) {
      state.items = state.items.filter(
        (item) => !(item.id === action.payload.id && item.title === action.payload.title)
      );
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
