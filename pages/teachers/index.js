import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";
import Layout from '../../layouts/Layout';
import api, {BASE_URL} from '../api/api'

const Index = () => {
    const router = useRouter();
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    });

    const [isLoading, setLoading] = useState(null);
    const [teachers, setTeachers] = useState(null);
    const [searchTeacher, setSearchTeacher] = useState('');
    const [teacherListPageNum, setTeacherListPageNum] = useState(1);

    //get teacher list
    const getTeacher = async () => {
        const list = await api.get(`teachers/${session.user?.madrasha_slug}/?search=${searchTeacher && searchTeacher}&page=${teacherListPageNum}`);
        const data = list.data;
        setTeachers(data);
        setLoading(false);
    };

    useEffect(() => {
        getTeacher().then((res) => {
            console.log(res)
        })
    }, [teacherListPageNum]);


    // Search
    const handleSearch = () => {
        getTeacher()
    };

    // Pagination
    const handleTeacherListPageNum = () => {
        setTeacherListPageNum(teacherListPageNum + 1)
    };

    const nextPage = () => {
        setTeacherListPageNum(teacherListPageNum + 1)
    };

    const prevPage = () => {
        setTeacherListPageNum(teacherListPageNum - 1)
    };


    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }


    if (teachers) {
        return (
            <>
                <div>
                    <TeacherLists
                        teachers={teachers}
                        setSearchTeacher={setSearchTeacher}
                        handleSearch={handleSearch}
                        handleTeacherListPageNum={handleTeacherListPageNum}
                        teacherListPageNum={teacherListPageNum}
                        nextPage={nextPage}
                        prevPage={prevPage}
                    />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-5">
                            <p className='text-center'>
                                No Teacher Information Found
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

};


export default Index;


Index.getLayout = (page) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
};

