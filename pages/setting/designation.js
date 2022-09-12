import React from "react";

// Setting Component
import Designation from "../../components/Setting/Designation"
import Layout from "../../components/Layout/Layout";


const DesignationPage = () =>{
    return(
        <>
            <Designation/>
        </>
    )
}

export default DesignationPage;

DesignationPage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}