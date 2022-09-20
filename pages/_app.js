import '../styles/globals.css'

import Head from "next/head";
import Script from "next/script";

import NextNProgress from "nextjs-progressbar";
import {useRouter} from 'next/router'
import {AuthContextProvider} from '../context/AuthContext'

import {SessionProvider} from "next-auth/react"
import AdmissionFormProvider from "../context/AdmissionFormProvider";

function MyApp({
                   Component,
                   pageProps: {session, ...pageProps},
               }) {
    const getLayout = Component.getLayout || ((page) => page)
    const router = useRouter()
    return getLayout(
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"
            />
            <SessionProvider session={session}>
                <AuthContextProvider>
                    <AdmissionFormProvider>
                        <NextNProgress color="#5B68E4" options={{showSpinner: false}}/>
                        <Component key={router.asPath} {...pageProps} />
                    </AdmissionFormProvider>
                </AuthContextProvider>
            </SessionProvider>
        </>
    );
}

export default MyApp;
