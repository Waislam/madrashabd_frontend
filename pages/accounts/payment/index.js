import React, {useState, useEffect} from "react"
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// Expense Component
import Payment from "../../../components/Account/Payment/Payment";
import Layout from "../../../components/Layout/Layout";

const PaymentPage = () =>{
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return(
        <div>
            <Payment/>
        </div>
    )
};

export default  PaymentPage;

PaymentPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};