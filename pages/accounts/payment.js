import React from "react";

// Expense Component
import PaymentPage from "../../components/Account/PaymentPage";
import Layout from "../../components/Layout/Layout";

const Payment = () =>{
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