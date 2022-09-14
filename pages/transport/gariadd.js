import React from "react";

// Transport Componenet
import AddCars from "../../components/Transport/GariAdd"
import Layout from "../../components/Layout/Layout";

const AddCarsPage = () =>{
    return(
        <>
            <AddCars/>
        </>
    )
}

export default AddCarsPage;

AddCarsPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}