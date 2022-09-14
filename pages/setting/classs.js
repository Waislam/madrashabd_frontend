import React from "react";

// Setting Component
import Classs from "../../components/Setting/Classs"
import Layout from "../../components/Layout/Layout";


const ClasssPage = () =>{
    return(
        <>
            <Classs/>
        </>
    )
}

export default ClasssPage;

ClasssPage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}