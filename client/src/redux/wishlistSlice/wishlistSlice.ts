import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import IRegion from '../../interfaces/region';

const localRegions: IRegion[] | null = JSON.parse(String(localStorage.getItem('wishlist')));

export const wishlistSlice = createSlice({
  name: 'wishlists',
  initialState: {
    items: localRegions !== null ? localRegions : [],
    activeFilter: 'all',
    allComplated: false,
  },
  reducers: {
    addWishlist: (state, action: PayloadAction<IRegion>) => {
      const prevRegion = state.items.find((x) => x.id === action.payload.id);
      if (prevRegion !== undefined) {
        const prevNumber = state.items.indexOf(prevRegion);
        prevNumber !== undefined && state.items.splice(prevNumber, 1);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
  },
});

export const { addWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
