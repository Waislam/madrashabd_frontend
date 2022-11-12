import React, {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

import StudentsOnLeave from "../../components/DarulEkama/StudentsOnLeave";
import Layout from '../../layouts/Layout';

const StudentsOnLeavePage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <div>
            <StudentsOnLeave/>
        </div>
    )
};


export default StudentsOnLeavePage;


StudentsOnLeavePage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};