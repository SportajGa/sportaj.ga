import type { NextPage } from 'next';
import React from 'react';
import { Formik, Form } from 'formik';
import Offset from 'components/Offset';
import * as Yup from 'yup';
import FormError from 'components/forms/FormError';
import FormInfo from 'components/forms/FormInfo';

export interface FormFields {
	name: string;
	slug: string;
	description: string;
	address: string;
	phonenumber: string;
	email: string;
	website: string;
	instagram: string;
	facebook: string;
	gcal: string;
	ics: string;
	notes: string;
}

const ClubSchema = Yup.object().shape({
	name: Yup.string().min(1).required(),
	slug: Yup.string().min(1).max(5).required(),
	description: Yup.string().min(1).required(),
	address: Yup.string().min(1).required(),
	phonenumber: Yup.string().optional(),
	email: Yup.string().email().min(1).required(),
	website: Yup.string().url().optional(),
	instagram: Yup.string().min(1).max(30).optional(),
	facebook: Yup.string().optional(),
	gcal: Yup.string().url().optional(),
	ics: Yup.string().url().optional(),
	notes: Yup.string().optional()
});

const KlubPrijavaFormPage: NextPage = () => {
	return (
		<>
			<Offset />
			<div className="container shadow-lg lg:w-16/24 w-11/12">
				<div className="bg-element rounded-lg shadow-md">
					<div className="p-8">
						<h1 className="text-text font-bold text-2xl">Prijava kluba</h1>
						<p className="py-2">
							Prosimo izpolnite obrazec za prijavo vašega športnega kluba/društva. Iz vnešenih podatkov bomo vam ustvarili stran za vaš
							klub in ga dodali v iskalnik. <br />
							Za pripombe, predloge in dodatne informacije nam pišite na{' '}
							<a href="mailto:info@sportaj.ga" className="underline">
								info@sportaj.ga
							</a>
						</p>
						<hr />
						<Formik
							initialValues={{
								name: '',
								slug: '',
								description: '',
								address: '',
								phonenumber: '',
								email: '',
								website: '',
								instagram: '',
								facebook: '',
								gcal: '',
								ics: '',
								notes: ''
							}}
							validationSchema={ClubSchema}
							onSubmit={(values) => fetch('api/prijava/submit', { method: 'POST', body: JSON.stringify(values) })}
						>
							{(props) => (
								<Form>
									<div className="pt-6">
										<label htmlFor="name" className="font-bold text-text text-lg mb-2">
											Ime kluba:
										</label>
										<FormInfo message="Celotno ime vašega kluba" />
										<input
											id="name"
											name="name"
											type="text"
											onChange={props.handleChange}
											value={props.values.name}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										<FormError message={props.errors.name} />
									</div>
									<div className="pt-6">
										<label htmlFor="slug" className="font-bold text-text text-lg mb-2">
											URL kratica (slug):
										</label>
										<FormInfo message="Besedilo, ki bo uporabljeno v URL naslovu za vašo stran" />
										<input
											id="slug"
											name="slug"
											type="text"
											onChange={props.handleChange}
											value={props.values.slug}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										<FormError message={props.errors.slug} />
									</div>
									<div className="pt-6">
										<label htmlFor="description" className="font-bold text-text text-lg mb-2">
											Opis kluba:
										</label>
										<FormInfo message="Opišete vaš klub, poveste..." />
										<textarea
											id="description"
											name="description"
											onChange={props.handleChange}
											value={props.values.description}
											className="rounded-lg w-full border border-element-secondary block py-1 px-2"
										></textarea>
										<FormError message={props.errors.description} />
									</div>
									<div className="pt-6">
										<label htmlFor="address" className="font-bold text-text text-lg mb-2">
											Naslov kraja vadbe:
										</label>
										<FormInfo message="Naslov in poštna številka objekta, kjer se izvajajo treningi" />
										<input
											id="address"
											name="address"
											type="text"
											onChange={props.handleChange}
											value={props.values.address}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										<FormError message={props.errors.address} />
									</div>
									<div className="pt-6">
										<span className="font-bold text-text text-lg mb-2">Kontakt:</span>
										<FormInfo message="Kontaktni podatki in socialna omrežja, kjer vas lahko uporabniki kontaktirajo" />
										<label htmlFor="phonenumber" className="italic text-text-secondary text-sm mt-1 block">
											Telefonska številka:
										</label>
										<input
											id="phonenumber"
											name="phonenumber"
											type="text"
											onChange={props.handleChange}
											value={props.values.phonenumber}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										<label htmlFor="email" className="italic text-text-secondary text-sm mt-1 block">
											E-pošta:
										</label>
										<input
											id="email"
											name="email"
											type="email"
											onChange={props.handleChange}
											value={props.values.email}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										<FormError message={props.errors.email} />
										<label htmlFor="website" className="italic text-text-secondary text-sm mt-1 block">
											Spletna stran:
										</label>
										<input
											id="website"
											name="website"
											type="url"
											onChange={props.handleChange}
											value={props.values.website}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										<FormError message={props.errors.website} />
										<label htmlFor="instagram" className="italic text-text-secondary text-sm mt-1 block">
											Instagram:
										</label>
										<input
											id="instagram"
											name="instagram"
											type="text"
											onChange={props.handleChange}
											value={props.values.instagram}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										<FormError message={props.errors.instagram} />
										<label htmlFor="facebook" className="italic text-text-secondary text-sm mt-1 block">
											Facebook:
										</label>
										<input
											id="facebook"
											name="facebook"
											type="text"
											onChange={props.handleChange}
											value={props.values.facebook}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
									</div>
									<div className="pt-6">
										<span className="font-bold text-text text-lg mb-2">Povezava do urnika treningov:</span>
										<FormInfo message="Povezava do urnika treningov katere vodite " />
										<label htmlFor="gcal" className="italic text-text-secondary text-sm mt-1 block">
											Google Calendar link:
										</label>
										<input
											id="gcal"
											name="gcal"
											type="url"
											onChange={props.handleChange}
											value={props.values.gcal}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										<FormError message={props.errors.gcal} />
										<label htmlFor="ics" className="italic text-text-secondary text-sm mt-1 block">
											ICS link:
										</label>
										<input
											id="ics"
											name="ics"
											type="url"
											onChange={props.handleChange}
											value={props.values.ics}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										<FormError message={props.errors.ics} />
									</div>
									<div className="pt-6">
										<label htmlFor="notes" className="font-bold text-text text-lg mb-2">
											Opombe:
										</label>
										<textarea
											id="notes"
											name="notes"
											onChange={props.handleChange}
											value={props.values.notes}
											className="rounded-lg w-full border border-element-secondary block py-1 px-2"
										></textarea>
									</div>
									<div className="pt-6 flex justify-center items-center">
										<button type="submit" className="btn bg-brand border-brand font-bold">
											Oddaj
										</button>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
			<Offset />
		</>
	);
};

export default KlubPrijavaFormPage;
