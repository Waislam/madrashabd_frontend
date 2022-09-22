import React from "react";
import {useRouter} from 'next/router'


// TeacherDetails
import TeacherDetails from "../../components/Teachers/TeacherDetails";
import {getTeacherDetailApi, getAllTeacher} from "../api/TeacherAPI/teacher_api";

const TeacherDetail = () => {

    return (
        <>
            <TeacherDetails />
        </>
    )
};



export default TeacherDetail;
