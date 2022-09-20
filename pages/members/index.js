import React from "react";

// Setting Component
import Committee from "../../components/Members/Committee"
import Layout from "../../components/Layout/Layout";


const CommitteePage = () =>{
    return(
        <>
            <Committee/>
        </>
    )
}

export default CommitteePage;

CommitteePage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}