import React, {useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

import SutirAbedon from "../../components/DarulEkama/SutirAbedon";
import Layout from '../../layouts/Layout';

const SutirAbedonPage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <div>
            <SutirAbedon/>
        </div>
    )
};


export default SutirAbedonPage;


SutirAbedonPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};