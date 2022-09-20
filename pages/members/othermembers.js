import React from "react";

// Setting Component
import OtherMember from "../../components/Members/OtherMembers"
import Layout from "../../components/Layout/Layout";


const OtherMemberPage = () =>{
    return(
        <>
            <OtherMember/>
        </>
    )
}

export default OtherMemberPage;

OtherMemberPage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}