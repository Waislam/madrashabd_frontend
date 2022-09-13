import React from "react";

// Setting Component
import PermanentMember from "../../components/Members/Permanentm"
import Layout from "../../components/Layout/Layout";


const PermanentMemberPage = () =>{
    return(
        <>
            <PermanentMember/>
        </>
    )
}

export default PermanentMemberPage;

PermanentMemberPage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}