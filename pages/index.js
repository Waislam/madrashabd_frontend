import React, {useEffect} from 'react'
import {useRouter} from "next/router";

import {signIn, signOut, useSession} from 'next-auth/react'
import Layout from "../components/Layout/Layout";


export default function Home() {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    })

    if (status === "loading") {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='text-thin'>
                                Loading.......
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (status === "unauthenticated") {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='text-thin'>
                                Access Denied
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (session) {
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
                                <h1>user token {session.user.madrasha_slug} </h1> <br/>
                                {/*<h1>madrasha user {session.useInfo.user} </h1> <br/>*/}
                                {/*<h1>madrasha slug {session.useInfo.user_madrasha_slug} </h1> <br/>*/}
                                <button onClick={signOut}>Sign out</button>
                            </>}

                            <h3 className="text-center">Dashboard is coming soon ......</h3>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

