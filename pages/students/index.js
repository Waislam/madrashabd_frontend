import React, { useEffect, useState } from "react";

// StudentList Component
import StudentList from "../../components/Students/StudentList";
import Layout from "../../components/Layout/Layout";
import api from "../api/api";

const Index = () => {
    const [students, setStudents] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // fetch('/api/profile-data')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setData(data)
        //         setLoading(false)
        //     })

        api.get('students/')
            .then((response) => {
                console.log("response", response.data)
                setStudents(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log("error", error)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!students) {
        return (
            <h1>No students data found</h1>
        )
    }

    return (
        <>
            <StudentList students={students.results}/>
        </>
    )
};


export default Index;


Index.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export async function getStaticProps() {
    // const categories = await ();
    const categories =  []

    return {
        props: {categories},
    };
}

