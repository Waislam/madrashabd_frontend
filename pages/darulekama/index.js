import React, {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

import DarulEkama from "../../components/DarulEkama/DarulEkam";
import Layout from '../../layouts/Layout';

const DarulEkamaPage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <div>
            <DarulEkama/>
        </div>
    )
};


export default DarulEkamaPage;


DarulEkamaPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};