import React, {useEffect, useState} from "react";


// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";
import Layout from '../../layouts/Layout';


// Call base urls
import api, {BASE_URL} from "../api/api";
import {getStudentDetailApi} from "../api/StudentAPI/students_api";
import {getAllTeachers} from "../api/TeacherApi/teachers_api";


const Teachers = ({teachers}) => {

    console.log("teachers", teachers)
    // const [teachers, setTeachers] = useState(null);
    // const [isLoading, setLoading] = useState(false);
    //
    // const getTeachers = () => {
    //     setLoading(true);
    //     api.get(`teachers/`)
    //         .then((response) => {
    //             setTeachers(response.data);
    //             setLoading(false)
    //         })
    //         .catch((error) => {
    //             console.log("error", error);
    //             setLoading(false)
    //         })
    // };
    //
    // useEffect(() => {
    //     getTeachers()
    // }, []);


    // if (isLoading) {
    //     return (
    //         <div className="text-center">
    //             <div className="spinner-border" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     )
    // }

    // if (!teachers) {
    //     return (
    //         <h1 className="text-center">No teachers data found</h1>
    //     )
    // }


    return (
        <>
            <h1>Data</h1>
            <TeacherLists teachers={teachers}/>
        </>
    )
};

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const teachers = await getAllTeachers()

    console.log("teachers", teachers)

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            teachers,
        },
    }
}


export default Teachers;


Teachers.getLayout = (page) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
};

