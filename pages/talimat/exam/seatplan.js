import React from "react";

// Talimat Component
import SeatPlan from "../../../components/Talimat/Examination/SeatPlan";
import Layout from "../../../components/Layout/Layout";

const SeatPlanPage = () => {

    return (
        <>
            <SeatPlan/>
        </>
    )
};


export default SeatPlanPage;


SeatPlanPage.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

