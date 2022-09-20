import axios from "axios";
import React from "react";
import api from "../api/api";
import { useState, useEffect } from "react";


// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";
import Layout from '../../layouts/Layout';


const index = () => {
    
    const [teachers, setTeachers]=useState(null)

    const getTeachers=()=>{
        api.get(`teachers/`)
        .then((response)=>{
            // console.log(response.data)
            setTeachers(response.data)
        })
    }

    useEffect(()=>{
        getTeachers()
    },[])
    


    // useEffect(() => {
    //     const getPost= async()=> {
    //       const response = await api.get("teachers/");
    //       setTeahers(response.data);
    //     }
    //     getPost();
    //   }, []);


    return (
        <>
           <TeacherLists 
                teachers={teachers}
           />
        </>
    )
};

export default index;

index.getLayout = (page) => {
    return(
        <Layout>
            { page }
        </Layout>
    )
};

