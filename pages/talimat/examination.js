import {useEffect, useState, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// Examination Component
import Examination from "../../components/Talimat/Examination/Examination";
import Layout from "../../components/Layout/Layout";

const ExaminationPage = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    return (
        <>
            <Examination />
        </>
    )
};

export default ExaminationPage;


ExaminationPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

