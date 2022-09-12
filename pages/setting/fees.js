import React from "react";

// Shift component
import Fees from "../../components/Setting/Fees"
import Layout from "../../components/Layout/Layout";

const FeesPage = () =>{
    return (
        <>
            <Fees/>
        </>
    )
}

export default FeesPage;

FeesPage.getLayout = (page) =>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}