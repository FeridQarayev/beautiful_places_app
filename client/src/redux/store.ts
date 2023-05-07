import { configureStore } from '@reduxjs/toolkit';
import { wishlistSlice } from './wishlistSlice/wishlistSlice';

export const store = configureStore({
  reducer: {
    wishlists: wishlistSlice.reducer,
  },
});
