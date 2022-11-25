import React, { useEffect } from "react";

// Dawah Component
import CalendarPage from "../../../components/Talimat/Syllabus/Calendar";
import Layout from "../../../components/Layout/Layout";
//import calendar


const AcademicCalendarPage = () => {

    return (
        <>
            <CalendarPage />
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

