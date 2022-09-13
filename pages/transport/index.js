import React from "react";

// Transport Componenet
import Transport from "../../components/Transport/Transport"
import Layout from "../../components/Layout/Layout";

const TransportPage = () =>{
    return(
        <>
            <Transport/>
        </>
    )
}

export default TransportPage;

TransportPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}