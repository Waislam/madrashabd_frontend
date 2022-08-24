import '../styles/globals.css'

import Head from "next/head";
import Script from "next/script";

import { AuthContextProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
				crossOrigin="anonymous"
			/>

			<AuthContextProvider>
				<Component {...pageProps} />
			</AuthContextProvider>
		</>
	);
}
export default MyApp;
