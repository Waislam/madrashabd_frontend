import React from "react";

// StudentList Component
import OtherIncome from "../../components/Account/OtherIncome";
import Layout from "../../components/Layout/Layout";

const OtherIncomePage = () => {

    return (
        <>
            <OtherIncome/>
        </>
    )
};


export default OtherIncomePage;


OtherIncomePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};