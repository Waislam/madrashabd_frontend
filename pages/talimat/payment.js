import React from "react";

// Payment Component
import Payment from "../../components/Talimat/Payment";
import Layout from "../../components/Layout/Layout";

const PaymentPage = () => {

    return (
        <>
            <Payment/>
        </>
    )
};


export default PaymentPage;


PaymentPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

