import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GetServerSideProps, NextPage } from 'next';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

export interface AuthSignInProps {
	providers: Record<string, ClientSafeProvider> | null;
}

const AuthSignIn: NextPage<AuthSignInProps> = () => {
	const { t } = useTranslation('auth');

	return (
		<>
			<div className="flex h-screen">
				<div className="m-auto">
					<button
						className="btn btn-xs md:btn-sm lg:btn-md xl:btn-lg bg-brands-facebook border-brands-facebook"
						onClick={() => void signIn('facebook')}
					>
						<FontAwesomeIcon icon={faFacebook} /> <span className="px-2" /> {t('facebook')}
					</button>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps<AuthSignInProps> = async () => {
	const providers = await getProviders();

	return {
		props: {
			providers
		}
	};
};

export default AuthSignIn;
