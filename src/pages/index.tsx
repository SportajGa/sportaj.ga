import Offset from 'components/Offset';
import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSolidNavbar } from 'state/reducers/site';

const IndexPage: NextPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSolidNavbar(false));

		return () => {
			dispatch(setSolidNavbar(true));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Offset />
			<h1>Hello</h1>
		</>
	);
};

export default IndexPage;
