import '../styles/globals.css'

import Head from "next/head";
import Script from "next/script";

import {AuthContextProvider} from '../context/AuthContext'

import Header from '/layouts/Header/Header'

import { SessionProvider } from "next-auth/react"

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {
	const getLayout = Component.getLayout || ((page) => page)
	return getLayout(
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
				crossOrigin="anonymous"
			/>
			<SessionProvider session={session}>
				<AuthContextProvider>
					{/*<Header />*/}
					<Component {...pageProps} />
				</AuthContextProvider>
			</SessionProvider>
		</>
	);
}

export default MyApp;
