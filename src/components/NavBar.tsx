import { faBars, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import NavBarItem from 'components/NavBarItem';
import { FacebookPictureProxy } from 'core/constants';
import { signIn, signOut } from 'next-auth/client';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Else, If, Then, Unless } from 'react-if';
import { useSelector } from 'react-redux';
import { selectLoggedIn, selectUserProfile } from 'state/reducers/user';

// Based on https://tailwindui.com/components/application-ui/navigation/navbars
const NavBar: React.FC = () => {
	const { t } = useTranslation('common');
	const linkStyle = '';
	const navItemStyle = `px-3 py-2 rounded-md text-sm font-medium select-none cursor-pointer ${linkStyle}`;
	const navItemMobileStyle = `block px-3 py-2 rounded-md text-base font-medium select-none cursor-pointer ${linkStyle}`;

	const status = useSelector(selectLoggedIn);
	const profile = useSelector(selectUserProfile);

	// TODO: tidy up
	let imageURL = profile.picture.data.url;
	const { hostname, searchParams } = new URL(imageURL);
	if (hostname === 'platform-lookaside.fbsbx.com') {
		imageURL = `${FacebookPictureProxy}?asid=${searchParams.get('asid')}&height=${searchParams.get('height')}&width=${searchParams.get(
			'width'
		)}&ext=${searchParams.get('ext')}&hash=${searchParams.get('hash')}`;
	}

	return (
		<div className="w-full fixed z-50">
			<Disclosure as="nav" className="mt-4 mx-4 rounded-md shadow-xl bg-bittersweet text-white">
				{({ open }) => (
					<>
						<div className="w-full mx-auto px-2 md:px-6 xl:px-8">
							<div className="relative flex items-center justify-between h-16">
								<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
									<Disclosure.Button
										className={`inline-flex items-center justify-center p-2 rounded-md ${linkStyle} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
									>
										<span className="sr-only">Open main menu</span>
										{open ? (
											<FontAwesomeIcon icon={faTimes} className="block h-6 w-6" aria-hidden="true" />
										) : (
											<FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex-1 flex items-center pl-4 md:pl-0 md:items-stretch justify-center md:justify-start">
									<div className="flex-shrink-0 flex items-center">
										<Link href="/">Sportaj.ga</Link>
									</div>
									<div className="hidden md:block md:ml-6">
										<div className="flex space-x-4">
											<NavBarItem href="/" className={`${navItemStyle}`} content={t('paths.home')} />
											<NavBarItem href="/zemljevid" className={`${navItemStyle}`} content={t('paths.map')} />
										</div>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
									<If condition={status === true}>
										<Then>
											<Menu as="div" className="ml-3 relative">
												{({ open }) => (
													<>
														<div>
															<Menu.Button className="flex text-sm rounded-full focus:outline-none">
																<span className="sr-only">Open User Menu</span>
																<img className="h-8 w-8 rounded-full" src={imageURL} alt={`${profile.name} Avatar`} />
																<p className="self-center hidden lg:block ml-2">{profile.name}</p>
																<FontAwesomeIcon icon={faChevronDown} className="self-center ml-2" />
															</Menu.Button>
														</div>
														<Transition
															show={open}
															as={Fragment}
															enter="transition ease-out duration-100"
															enterFrom="transform opacity-0 scale-95"
															enterTo="transform opacity-100 scale-100"
															leave="transition ease-in duration-75"
															leaveFrom="transform opacity-100 scale-100"
															leaveTo="transform opacity-0 scale-95"
														>
															<Menu.Items
																static
																className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 text-black bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
															>
																<Menu.Item>
																	<div className="py-1">
																		<button
																			onClick={() => void signOut()}
																			className="block w-full px-2 py-1 text-sm select-none cursor-pointer duration-150"
																		>
																			{t('paths.auth.signout')}
																		</button>
																	</div>
																</Menu.Item>
															</Menu.Items>
														</Transition>
													</>
												)}
											</Menu>
										</Then>
										<Else>
											<div className="w-full hidden md:block md:ml-6 content-center">
												<div className="flex space-x-4 justify-end">
													<button onClick={() => void signIn()}>
														<span className="px-3 py-2 duration-150 text-sm font-medium select-none cursor-pointer rounded-md">
															{t('paths.auth.signin')}
														</span>
													</button>
												</div>
											</div>
										</Else>
									</If>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="md:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1 shadow-lg">
								<NavBarItem href="/zemljevid" className={`${navItemMobileStyle}`} content={t('paths.map')} />
								<Unless condition={status === true}>
									<button onClick={() => void signIn()}>
										<span className={`${navItemMobileStyle}`}>{t('paths.auth.signin')}</span>
									</button>
								</Unless>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};

export default NavBar;
