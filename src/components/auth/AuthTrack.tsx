import { useSession } from 'next-auth/client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reset, setLoggedIn, setProfile } from 'state/reducers/user';
import type { Profile } from 'types/FacebookAuth';

const AuthTrack: React.FC = ({ children }) => {
	const dispatch = useDispatch();
	const [session] = useSession();

	useEffect(() => {
		const attachUser = async () => {
			const p = await fetch('/api/profile', { credentials: 'same-origin' });
			const profile = (await p.json()) as Profile;

			dispatch(setLoggedIn(true));
			dispatch(setProfile(profile));
		};

		if (!session || session === null) dispatch(reset());
		else void attachUser();
	}, [dispatch, session]);

	return <>{children}</>;
};

export default AuthTrack;
