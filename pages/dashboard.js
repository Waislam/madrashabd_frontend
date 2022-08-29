import React from 'react'
// import Head from '../components/Head.js'
import Router from 'next/router'
import useSWR, { mutate } from 'swr'
import api from './api/api'
import useAuth, { ProtectRoute } from '../context/AuthContext'
import Skeleton from 'react-loading-skeleton';

function Dashboard() {

    return (
        <>
            {/* <Head>
                <title>
                    Dashboard | MarsJupyter
                </title>
            </Head> */}

            <div>
                {/* <DashboardLayout> */}
                    <div className="row">
                        <div className="col-md-12">
                            <h1 test-id="dashboard-title">
                                These are your pages
                            </h1>
                            <br />
                            <table className="table table-responsive-md">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Shareable Link</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Responses</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>

                            </table>
                        </div>
                    </div>
        
                {/* </DashboardLayout> */}
            </div>
        </>
    )
}




export default Dashboard;