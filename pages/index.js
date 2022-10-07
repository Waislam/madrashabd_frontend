import React, {useContext} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import AuthContext from '../context/AuthContext'

import {signIn, signOut, useSession} from 'next-auth/react'
import Layout from "../components/Layout/Layout";

export default function Home() {
    const {user, login} = useContext(AuthContext);
    console.log(user);

    const {data: session} = useSession();

    const handleLogin = () => {
        // let username = 'kminchelle'
        // let password = '0lelplR'

        let username = '01725563915';
        let password = 'admin12345';

        login(username, password)
    };

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='text-thin'>
                            MH Masuk
                        </p>

                        {!session && <>
                            <h1>You are not signed in</h1> <br/>
                            <button onClick={signIn}>Sign in</button>
                        </>}

                        {session && <>
                            {/* <h1>Signed in as {session.user.name} </h1> <br/> */}
                            <button onClick={signOut}>Sign out</button>
                        </>}

                        <button onClick={handleLogin}>
                            Login
                        </button>

                        <h3 className="text-center">Dashboard is coming soon ......</h3>
                        <hr/>

                    </div>
                </div>
            </div>
        </div>
    )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

