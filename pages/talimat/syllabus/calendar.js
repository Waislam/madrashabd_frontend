import React from "react";

// Dawah Component
import Calendar from "../../../components/Talimat/Syllabus/Calendar";
import Layout from "../../../components/Layout/Layout";
//import Modals

const AcademicCalendarPage = () => {

    return (
        <>
            <Calendar />
        </>
    )
};


export default AcademicCalendarPage;


AcademicCalendarPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

