import { useSession } from 'next-auth/client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reset, setLoggedIn } from 'state/reducers/user';

const AuthTrack: React.FC = ({ children }) => {
	const dispatch = useDispatch();
	const [session] = useSession();

	useEffect(() => {
		const attachUser = () => {
			dispatch(setLoggedIn(true));
		};

		if (!session || session === null) dispatch(reset());
		else void attachUser();
	}, [dispatch, session]);

	return <>{children}</>;
};

export default AuthTrack;
