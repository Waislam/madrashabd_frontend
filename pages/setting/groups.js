import React from "react";

// Setting Component
import Groups from "../../components/Setting/Groups"
import Layout from "../../components/Layout/Layout";


const GroupsPage = () =>{
    return(
        <>
            <Groups/>
        </>
    )
}

export default GroupsPage;

GroupsPage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}