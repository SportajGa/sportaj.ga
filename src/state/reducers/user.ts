import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export interface UserState {
	email: string;
}

export const initialState: UserState = {
	email: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		}
	}
});

export const { setEmail } = userSlice.actions;

export const selectEmail = (state: RootState): string => state.user.email;

export default userSlice.reducer;
