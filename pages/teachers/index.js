import React, {useEffect, useState} from "react";

// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";
import Layout from '../../layouts/Layout';
import api from '../api/api'


const Index = () => {
    const [isLoading, setLoading] = useState(null);
    const [teachers, setTeachers] = useState(null);
    const [teacherId, setTeacherId] = useState('');
    const [searchTeacher, setSearchTeacher] = useState('');
    const [teacherListPageNum, setTeacherListPageNum] = useState(1);


    const getTeacher = () => {
        api.get(`http://10.160.23.87:8086/teachers/?teacher_id=${teacherId && teacherId}&search=${searchTeacher && searchTeacher}&page=${teacherListPageNum}`)
            .then((response) => {
                console.log("response", response.data);
                setTeachers(response.data)
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            })
    };

    useEffect(() => {
        getTeacher()
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
                <TeacherLists
                    teachers={teachers}
                    setSearchTeacher={setSearchTeacher}
                    handleSearch={handleSearch}
                    handleTeacherListPageNum={handleTeacherListPageNum}
                    teacherListPageNum={teacherListPageNum}
                    nextPage={nextPage}
                    prevPage={prevPage}

                />
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

