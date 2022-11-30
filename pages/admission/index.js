import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// components
import Layout from '../../layouts/Layout';
import Admission from "../../components/Admission/Admission";


const AdmissionPage = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return (
        <div>
            <Admission
                session={session}
            />
        </div>
    )
};


export default AdmissionPage;


AdmissionPage.getLayout = (page) => {
    return (
        <Layout>{page}</Layout>
    )
};