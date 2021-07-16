import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { deepClone } from '@sapphire/utilities';

export interface MapState {
	viewport: Viewport;
}

export interface Viewport {
	latitude: number;
	longitude: number;
	zoom: number;
}

export const initialState: MapState = {
	viewport: {
		latitude: 46.55472,
		longitude: 15.64667,
		zoom: 13
	}
};

export const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		setViewport: (state, action: PayloadAction<Viewport>) => {
			state.viewport = action.payload;
		},
		reset: (state) => {
			state.viewport = deepClone(initialState.viewport);
		}
	}
});

export const { setViewport, reset } = mapSlice.actions;

export const selectViewport = (state: RootState): Viewport => state.map.viewport;

export default mapSlice.reducer;
