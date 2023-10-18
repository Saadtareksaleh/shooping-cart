import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/product-slice';
import cartSlice from './slices/cart-slice';

export const store = configureStore({
  reducer: {
    products: productsSlice, 
    cart:cartSlice,
  }
});
