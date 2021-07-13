import { HostAddress } from 'core/constants';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const PrivacyPage: NextPage = () => {
	const { t } = useTranslation('privacy');

	return (
		<>
			<NextSeo title={t('title')} />

			<div className="container">
				<div className="p-16 mt-8">
					<div className="grid grid-flow-row">
						<h1 className="text-3xl font-bold text-center">{t('title')}</h1>
						<p className="text-center">Last updated on the 12th of July 2021. Effective as of the 13th of July 2021</p>
					</div>
				</div>
			</div>

			<div className="p-8">
				<div className="container prose prose-md">
					{/* <p>
						PenguBot provides a chat bot for the <a href="https://discord.com">Discord</a> chat platform, (the "Bot"), a website that
						serves as a dashboard (the "Site") and various related services (collectively, the "Service(s)"). The Services are operated by
						PenguBot (the "Company", "we" or "us") for users of the Service ("you" or the "user(s)"). This privacy policy sets forth our
						policy with respect to information that is collected from visitors to the Site and users of the Bot and/or the Services. Under
						applicable law, PenguBot is the "data controller" of user data collected through the Services.
					</p> */}

					<h2>{t('dataCollection.title')}</h2>
					<p>
						{t('dataCollection.interaction')}
						{/* Information we collect may include but is not be limited to cookies, usage data and, usernames, or other content
						you send via the chat feature in Discord when interacting with the Bot. */}
					</p>
					<p>{t('dataCollection.analytics')}</p>
					<p>{t('dataCollection.services')}</p>
					<p>{t('dataCollection.cookies')}</p>

					<h2>{t('dataRetention.title')}</h2>
					<p>{t('dataRetention.body')}</p>

					<h2>{t('disclosure.title')}</h2>
					<p>
						{t('disclosure.disclaimer')} <li>{t('disclosure.points', {}, { returnObjects: true })[0]}</li>
						<li>{t('disclosure.points', {}, { returnObjects: true })[1]}</li>
						<li>{t('disclosure.points', {}, { returnObjects: true })[2]}</li>
						<h3>{t('disclosure.subpoints.unsolicited.title')}</h3>
						<p>{t('disclosure.subpoints.unsolicited.body')}</p>
						<h3>{t('disclosure.subpoints.processing.title')}</h3>
						<p>{t('disclosure.subpoints.processing.body', { HostAddress })}</p>
						<h3>{t('disclosure.subpoints.children.title')}</h3>
						<p>
							<Trans
								i18nKey="privacy:disclosure.subpoints.children.body"
								// eslint-disable-next-line jsx-a11y/anchor-has-content
								components={[<a href="mailto:contact@sportaj.ga" />]}
								values={{ email: 'contact@sportaj.ga' }}
							/>
						</p>
						<h3>{t('disclosure.subpoints.use.title')}</h3>
						<p>{t('disclosure.subpoints.use.body')}</p>
						<h3>{t('disclosure.subpoints.security.title')}</h3>
						<p>{t('disclosure.subpoints.security.body')}</p>
						<h3>{t('disclosure.subpoints.rights.title')}</h3>
						<p>{t('disclosure.subpoints.rights.body')}</p>
						<p>
							<Trans
								i18nKey="privacy:disclosure.subpoints.rights.request"
								// eslint-disable-next-line jsx-a11y/anchor-has-content
								components={[<a href="mailto:contact@sportaj.ga" />]}
								values={{ email: 'contact@sportaj.ga' }}
							/>
						</p>
						<p>
							<Trans
								i18nKey="privacy:disclosure.subpoints.rights.modifications"
								// eslint-disable-next-line jsx-a11y/anchor-has-content
								components={[<a href="mailto:contact@sportaj.ga" />]}
								values={{ email: 'contact@sportaj.ga' }}
							/>
						</p>
						<h3>{t('disclosure.subpoints.ccpa.title')}</h3>
						<p>{t('disclosure.subpoints.ccpa.pre')}</p>
						<h4>{t('disclosure.subpoints.ccpa.title')}</h4>
						<p>{t('disclosure.subpoints.ccpa.collection')}</p>
						<p>{t('disclosure.subpoints.ccpa.disclosure')}</p>
						<p>{t('disclosure.subpoints.ccpa.sale')}</p>
						<p>{t('disclosure.subpoints.ccpa.rights')}</p>
						<h3>{t('disclosure.subpoints.protection.title')}</h3>
						<p>
							<Trans
								i18nKey="privacy:disclosure.subpoints.protection.body"
								// eslint-disable-next-line jsx-a11y/anchor-has-content
								components={[<a href="mailto:nejc@sportaj.ga" />]}
								values={{ email: 'nejc@sportaj.ga' }}
							/>
						</p>
						<h3>{t('disclosure.subpoints.external.title')}</h3>
						<p>{t('disclosure.subpoints.external.body')}</p>
						<h3>{t('disclosure.subpoints.3rd.title')}</h3>
						<p>
							The Services are built collectively from the use of third-party tools and thus enforces their own policies to be
							applicable to the users along with this one. We use Google's Services for which the policy can be found{' '}
							<a href="https://policies.google.com/privacy">here</a>.
						</p>
						<h3>{t('disclosure.subpoints.policy.title')}</h3>
						<p>{t('disclosure.subpoints.policy.body')}</p>
						<h3>{t('disclosure.subpoints.contact.title')}</h3>
						<p>
							<Trans
								i18nKey="privacy:disclosure.subpoints.contact.body"
								// eslint-disable-next-line jsx-a11y/anchor-has-content
								components={[<a href="mailto:contact@sportaj.ga" />]}
								values={{ email: 'contact@sportaj.ga' }}
							/>
						</p>
					</p>
				</div>
			</div>
		</>
	);
};

export default PrivacyPage;
