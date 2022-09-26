import React from "react";

// StudentList Component
import Account from "../../components/Account/StudentIncome";
import Layout from "../../components/Layout/Layout";

const Accounts = () => {

    return (
        <>
            <Account/>
        </>
    )
};


export default Accounts;


Accounts.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};