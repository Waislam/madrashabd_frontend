import React from "react";

// Talimat Component
import Registration from "../../../components/Talimat/Examination/Registration";
import Layout from "../../../components/Layout/Layout";

const RegistrationPage = () => {

    return (
        <>
            <Registration/>
        </>
    )
};


export default RegistrationPage;


RegistrationPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

