import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// Talimat Component
import Talimat from "../../components/Talimat/Talimat";
import Layout from "../../components/Layout/Layout";

const TalimatPage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <>
            <Talimat />
        </>
    )
};


export default TalimatPage;


TalimatPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

