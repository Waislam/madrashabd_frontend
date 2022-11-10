import React, {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

import Nigranidetail from "../../components/DarulEkama/Nigranidetail";
import Layout from '../../layouts/Layout';

const NigranidetailPage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    return (
        <div>
            <Nigranidetail/>
        </div>
    )
};


export default NigranidetailPage;


NigranidetailPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};