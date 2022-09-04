import React from "react";

// PromotedStudent Components
import PromotedStudent from "../../components/PromotedStudent/PromotedStudent";
import Layout from "../../components/Layout/Layout";
import Students from "./index";

const promotedStudent = () => {
    return (
        <>
            <PromotedStudent/>
        </>
    )
};

export default promotedStudent;

promotedStudent.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
}