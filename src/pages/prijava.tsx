import type { NextPage } from 'next';
import React from 'react';
import { Formik, Form } from 'formik';
import Offset from 'components/Offset';
import * as Yup from 'yup';

const ClubSchema = Yup.object().shape({
	name: Yup.string().required(),
	slug: Yup.string().min(1).max(5).required(),
	description: Yup.string().required(),
	phonenumber: Yup.string().optional(),
	email: Yup.string().email().required(),
	website: Yup.string().url().optional(),
	instagram: Yup.string().min(1).max(30).optional(),
	facebook: Yup.string().optional(),
	gcal: Yup.string().url().optional(),
	caldav: Yup.string().url().optional(),
	notes: Yup.string().required()
});

const InitialClubFormPage: NextPage = () => {
	return (
		<>
			<Offset />
			<div className="container shadow-lg">
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
								phonenumber: '',
								email: '',
								website: '',
								instagram: '',
								facebook: '',
								gcal: '',
								caldav: '',
								notes: ''
							}}
							validationSchema={ClubSchema}
							onSubmit={(values) => {
								// eslint-disable-next-line no-alert
								alert(JSON.stringify(values, null, 2));
							}}
						>
							{(props) => (
								<Form>
									<div className="pt-6">
										<label htmlFor="name" className="font-bold text-text text-lg mb-2">
											Ime kluba:
										</label>
										<input
											id="name"
											name="name"
											type="text"
											onChange={props.handleChange}
											value={props.values.name}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
									</div>
									<div className="pt-6">
										<label htmlFor="slug" className="font-bold text-text text-lg mb-2">
											URL kratica (slug):
										</label>
										<input
											id="slug"
											name="slug"
											type="text"
											onChange={props.handleChange}
											value={props.values.slug}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										{props.errors.slug}
									</div>
									<div className="pt-6">
										<label htmlFor="description" className="font-bold text-text text-lg mb-2">
											Opis kluba:
										</label>
										<textarea
											id="description"
											name="description"
											onChange={props.handleChange}
											value={props.values.description}
											className="rounded-lg w-full border border-element-secondary block py-1 px-2"
										></textarea>
									</div>
									<div className="pt-6">
										<span className="font-bold text-text text-lg mb-2">Kontakt:</span>
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
										{props.errors.email}
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
										{props.errors.instagram}
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
										{props.errors.gcal}
										<label htmlFor="caldav" className="italic text-text-secondary text-sm mt-1 block">
											CalDAV/ICS link:
										</label>
										<input
											id="caldav"
											name="caldav"
											type="url"
											onChange={props.handleChange}
											value={props.values.caldav}
											className="block border-b border-dotted border-element-secondary w-1/4 outline-none"
										></input>
										{props.errors.caldav}
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

export default InitialClubFormPage;
