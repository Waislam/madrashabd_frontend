import React, {useEffect} from 'react'
import {useRouter} from "next/router";

// components
import Layout from "../components/Layout/Layout";

// third party
import {signIn, signOut, useSession} from 'next-auth/react'


export default function Home() {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

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
            <>
                {!session && <>
                    <h1>You are not signed in</h1> <br/>
                    <button onClick={signIn}>Sign in</button>
                </>}

                {session && <>
                    <h1>user token {session.user.madrasha_slug} </h1> <br/>
                    {/*<h1>madrasha user {session.useInfo.user} </h1> <br/>*/}
                    {/*<h1>madrasha slug {session.useInfo.user_madrasha_slug} </h1> <br/>*/}
                    <button className="btn btn-primary" onClick={signOut}>Sign out</button>
                </>}

                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <h2 className="card-header text-center">
                                    <span style={{fontStyle: "italic"}}>Students</span>
                                </h2>
                                <div className="card-body">
                                    <h5 className="mb-3">
                                        Total Student
                                        <span className="mx-3">:</span>
                                        100
                                    </h5>
                                    <h5 className="mb-3">
                                        Present Student
                                        <span className="mx-3">:</span>
                                        80
                                    </h5>
                                    <h5 className="mb-3">
                                        Absent Student
                                        <span className="mx-3">:</span>
                                        10
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <h2 className="card-header text-center">
                                    <span style={{fontStyle: "italic"}}>Teacher</span>
                                </h2>
                                <div className="card-body">
                                    <h5 className="mb-3">Link</h5>
                                    <h5 className="mb-3">Link</h5>
                                    <h5 className="mb-3">Link</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <h2 className="card-header text-center">
                                    <span style={{fontStyle: "italic"}}>SMS</span>
                                </h2>
                                <div className="card-body">
                                    <h5 className="mb-3">Link</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <h2 className="card-header text-center">
                                    <span style={{fontStyle: "italic"}}>Accounts</span>
                                </h2>
                                <div className="card-body">
                                    <h5 className="mb-3">Link</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
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

