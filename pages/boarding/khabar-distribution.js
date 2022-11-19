import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Layout from "../../components/Layout/Layout";
import KhabarDistribution from "../../components/Boarding/KhabarDistribution";

const KhabarDistributionPage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <>
            <KhabarDistribution/>
        </>
    )
};

export default KhabarDistributionPage;


KhabarDistributionPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};