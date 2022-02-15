import Offset from 'components/Offset';
import type { NextPage } from 'next';
import React from 'react';

const KlubPrijavaNavodilaPage: NextPage = () => {
	return (
		<>
			<Offset />
			<div className="container lg:w-16/24 w-11/12">
				<div className="p-8 text-text">
					<h1 className="font-bold text-3xl">Navodila za prijavo kluba</h1>
					<div className="ml-2">
						<p className="py-4">
							<h2 className="text-2xl font-semibold">Ime kluba</h2>
							<p>V polje vnesete celotno uradno ime vašega športnega kluba/društva.</p>
							<p>Vnešeno ime bo uporabljeno v iskalniku in kot imeter naslov vaše strani.</p>
						</p>
						<p className="py-4">
							<h2 className="text-2xl font-semibold">URL-kratica(slug)</h2>
							<p>V polje vnesete želeno kratico, ki se bo uporabila v URL naslovu strani.</p>
							<p>
								Primer: https://sportaj.ga/klub/<span className="font-bold">akp {'-->'}</span> Besedilo “akp” predstavlja vnešeno
								kratico v naslovu.
							</p>
						</p>
						<p className="py-4">
							<h2 className="text-2xl font-semibold">Opis kluba</h2>
							<p>V polje vnesete kratek opis vašega športnega kluba/društva. </p>
						</p>
						<p className="py-4">
							<h2 className="text-2xl font-semibold">GPS lokacija</h2>
							<p>V polje vnesete GPS koordinate objekta, kjer se izvajajo treningi.</p>
							<p>Če tega podatka ne veste pustite prazno ali preverite s pomočjo Google Maps.</p>
							<p>
								Podatke vnesite v <span className="underline">DMS</span> ali <span className="underline">DD</span> formatu.
							</p>
						</p>
						<p className="py-4">
							<h2 className="text-2xl font-semibold">Naslov in poštna številka</h2>
							<p>V polje vnesete naslov, kraj in poštno številko kraja, kjer se izvajajo treningi.</p>
							<p className="text-sm">
								Če imate več naslovov nam pišite na{' '}
								<a href="mailto:info@sportaj.ga" className="underline">
									info@sportaj.ga
								</a>
								.
							</p>
						</p>
						<p className="py-4">
							<h2 className="text-2xl font-semibold">Kontakti</h2>
							<p>V polja vnesete pripadajoče kontaktne podatke.</p>
							<p>Za Facebook, Instagram in drugo prilepite povezavo do uradno strani na pripadajoči platformi.</p>
						</p>
						<p className="py-4">
							<h2 className="text-2xl font-semibold">Povezava do urnika treningov</h2>
							<p>V polje prilepite javno povezavo do urnika treningov.</p>
							<p className="py-2">
								Navodila za Google Calendar:
								<ol className="ml-8 list-decimal">
									<li>
										Na računalniku odprite{' '}
										<a href="https://calendar.google.com/calendar" className="underline">
											Google Calendar
										</a>
									</li>
									<li>Na levi poiščite predel “Moji koledarji”</li>
									<li>
										Miško postavite nad koledar, katerega želite delite in pritisnite Več “U+22EE” {'>'} Nastavitve in skupna raba
									</li>
									<li>Pod “Dovoljena za dostop za dogodke” izberite “Omogoči dostop za javnost”</li>
									<li>Nastavite Prikaži samo informacije “prost/zaseden” (skrij podrobnosti)</li>
								</ol>
							</p>
							<p className="py-2">
								Navodila za CalDAV/ICS:
								<p>
									Ker so konfiguracije različne od ponudnika do ponudnika nam prosim pišite na{' '}
									<a href="mailto:info@sportaj.ga" className="underline">
										info@sportaj.ga
									</a>
									.
								</p>
							</p>
						</p>
					</div>
					<hr />
				</div>
			</div>
			<Offset />
		</>
	);
};

export default KlubPrijavaNavodilaPage;
