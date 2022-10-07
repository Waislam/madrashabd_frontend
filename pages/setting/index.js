import React from "react";

// Setting Component
import Department from "../../components/Setting/Department"
import Layout from "../../components/Layout/Layout";


const DepartmentPage = () =>{
    return(
        <>
            <Department/>
        </>
    )
}

export default DepartmentPage;

DepartmentPage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}