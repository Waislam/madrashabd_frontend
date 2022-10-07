import React from "react";

// Setting Component
import Session from "../../components/Setting/Session"
import Layout from "../../components/Layout/Layout";


const SessionPage = () =>{
    return(
        <>
            <Session/>
        </>
    )
}

export default SessionPage;

SessionPage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}