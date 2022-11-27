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

                {/*{!session && <>*/}
                    {/*<h1>You are not signed in</h1> <br/>*/}
                    {/*<button onClick={signIn}>Sign in</button>*/}
                {/*</>}*/}

                {/*{session && <>*/}
                    {/*<h1>user token {session.user.madrasha_slug} </h1> <br/>*/}
                    {/*/!*<h1>madrasha user {session.useInfo.user} </h1> <br/>*!/*/}
                    {/*/!*<h1>madrasha slug {session.useInfo.user_madrasha_slug} </h1> <br/>*!/*/}
                    {/*<button className="btn btn-primary" onClick={signOut}>Sign out</button>*/}
                {/*</>}*/}

                <div className="container">
                    <h3 className="text-center" style={{fontStyle: "italic"}}>Welcome to Dashboard</h3>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4 mb-4 ">
                            <div className="card bg-primary">
                                <h4 className="card-header text-center">
                                    <i className="fa fa-user mx-2"/>
                                    Teacher & Staff
                                </h4>
                                <div className="card-body">
                                    <h5>Coming soon ....</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card bg-warning">
                                <h4 className="card-header text-center">
                                    <i className="fa fa-user mx-2"/>
                                    Students
                                </h4>
                                <div className="card-body">
                                    <h5>Coming soon ....</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card bg-success">
                                <h4 className="card-header text-center">
                                    <i className="fa fa-user mx-2"/>
                                    Accounts
                                </h4>
                                <div className="card-body">
                                    <h5>Coming soon ....</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card bg-danger">
                                <h4 className="card-header text-center">
                                    <i className="fa fa-user mx-1"/>
                                    SMS
                                </h4>
                                <div className="card-body">
                                    <h5>Coming soon ....</h5>
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

