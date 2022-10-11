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
        api.get(`http://192.168.0.108:8087/teachers/100/?teacher_id=${teacherId && teacherId}&search=${searchTeacher && searchTeacher}&page=${teacherListPageNum}`)
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
    const handleSearch = ()=>{
         getTeacher()
    };

    // Pagination
    const handleTeacherListPageNum  = () =>{
        setTeacherListPageNum(teacherListPageNum + 1)
    };

    const nextPage = ()=>{
      setTeacherListPageNum(teacherListPageNum + 1)
    };

    const prevPage =()=>{
        setTeacherListPageNum(teacherListPageNum - 1)
    };


    return (
        <>
            <TeacherLists
                teachers={teachers}
                setSearchTeacher={setSearchTeacher}
                handleSearch={handleSearch}
                handleTeacherListPageNum={handleTeacherListPageNum}
                nextPage={nextPage}
                prevPage={prevPage}

            />
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

