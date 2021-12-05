import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export interface SiteState {
	solidNavbar: boolean;
}

export const initialState: SiteState = {
	solidNavbar: true
};

export const siteSlice = createSlice({
	name: 'site',
	initialState,
	reducers: {
		setSolidNavbar: (state, action: PayloadAction<boolean>) => {
			state.solidNavbar = action.payload;
		},
		reset: (state) => {
			state.solidNavbar = true;
		}
	}
});

export const { setSolidNavbar, reset } = siteSlice.actions;

export const selectSolidNavbar = (state: RootState): boolean => state.site.solidNavbar;

export default siteSlice.reducer;
