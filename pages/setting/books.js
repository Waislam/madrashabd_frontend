import React from "react";

// Setting Component
import Books from "../../components/Setting/Books"
import Layout from "../../components/Layout/Layout";


const BooksPage = () =>{
    return(
        <>
            <Books/>
        </>
    )
}

export default BooksPage;

BooksPage.getLayout=(page)=>{
    return(
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}