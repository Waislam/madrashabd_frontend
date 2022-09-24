import React, {useEffect, useState} from "react";

// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";
import Layout from '../../layouts/Layout';


// Call base urls
import api, {BASE_URL} from "../api/api";


const Index = () => {
    const [teachers, setTeachers] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const getTeachers = () => {
        setLoading(true);
        api.get(`teachers/`)
            .then((response) => {
                setTeachers(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            })
    };

    useEffect(() => {
        getTeachers()
    }, []);


    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!teachers) {
        return (
            <h1 className="text-center">No teachers data found</h1>
        )
    }


    return (
        <>
            <TeacherLists teachers={teachers}/>
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
};

