import React from "react";

// Expense Component
import Expense from "../../components/Talimat/Expense";
import Layout from "../../components/Layout/Layout";

const ExpensePage = () => {

    return (
        <>
            <Expense/>
        </>
    )
};


export default ExpensePage;


ExpensePage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

