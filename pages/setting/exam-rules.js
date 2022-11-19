import axios from "axios";
import api, {BASE_URL} from "../../pages/api/api"
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Layout from "../../components/Layout/Layout";

import ExamRule from "../../components/Setting/ExamRule"


const ExamRulePage = () => {

    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });


    return (
        <>
            <ExamRule/>
        </>
    )
};

export default ExamRulePage;

ExamRulePage.getLayout = (page) => {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
};