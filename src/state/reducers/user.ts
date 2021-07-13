import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { deepClone } from '@sapphire/utilities';

export interface UserState {
	email: string;
	loggedIn: boolean;
}

export const initialState: UserState = {
	email: '',
	loggedIn: false
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoggedIn: (state, action: PayloadAction<boolean>) => {
			state.loggedIn = action.payload;
		},
		toggleLoggedIn: (state) => {
			state.loggedIn = !state.loggedIn;
		},
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		reset: (state) => {
			const clonedState = deepClone(initialState);
			state.loggedIn = clonedState.loggedIn;
			state.email = clonedState.email;
		}
	}
});

export const { setLoggedIn, toggleLoggedIn, setEmail, reset } = userSlice.actions;

export const selectLoggedIn = (state: RootState): boolean => state.user.loggedIn;
export const selectEmail = (state: RootState): string => state.user.email;

export default userSlice.reducer;
