import React, {useState, useEffect} from "react"
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// Expense Component
import PaymentPage from "../../components/Account/PaymentPage";
import Layout from "../../components/Layout/Layout";

const Payment = () =>{
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    return(
        <div>
            <PaymentPage/>
        </div>
    )
};

export default  Payment;

Payment.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};