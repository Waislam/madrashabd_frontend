import React from "react";

// Shift component
import Shift from "../../components/Setting/Shift"
import Layout from "../../components/Layout/Layout";

const ShiftPage = () =>{
    return (
        <>
            <Shift/>
        </>
    )
}

export default ShiftPage;

ShiftPage.getLayout = (page) =>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}