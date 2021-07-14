import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { deepClone } from '@sapphire/utilities';
import type { Profile } from 'types/FacebookAuth';

export interface UserState {
	profile: Profile;
	loggedIn: boolean;
}

export const initialState: UserState = {
	profile: {
		email: 'placeholder@sportaj.ga',
		id: '0',
		name: 'Sportaj Ga',
		picture: {
			data: {
				height: 128,
				width: 128,
				is_silhouette: false,
				url: 'https://sportaj.ga/logo-transparent.png'
			}
		}
	},
	loggedIn: false
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setProfile: (state, action: PayloadAction<Profile>) => {
			state.profile = action.payload;
		},
		setLoggedIn: (state, action: PayloadAction<boolean>) => {
			state.loggedIn = action.payload;
		},
		toggleLoggedIn: (state) => {
			state.loggedIn = !state.loggedIn;
		},
		reset: (state) => {
			const clonedState = deepClone(initialState);
			state.loggedIn = clonedState.loggedIn;
			state.profile = clonedState.profile;
		}
	}
});

export const { setProfile, setLoggedIn, toggleLoggedIn, reset } = userSlice.actions;

export const selectUserProfile = (state: RootState): Profile => state.user.profile;
export const selectLoggedIn = (state: RootState): boolean => state.user.loggedIn;

export default userSlice.reducer;
