import axios from "axios";
import React from "react";
import api from "../api/api";
import { useState, useEffect } from "react";


// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";
import Layout from '../../layouts/Layout';


const index = () => {
    
    const [teachers, setTeahers] = useState(null)

    const getTeacherData = () => {
        api.get(`teachers/`)
            .then((response)=>{
                // console.log(response.data)
                setTeahers(response.data)
                
            }).catch((error)=>{
                console.log(error)
            })
    }

    useEffect(()=>{
        getTeacherData();

    },[]);
    

    // useEffect(() => {
    //     const getPost= async()=> {
    //       const response = await api.get("teachers/");
    //       setTeahers(response.data);
    //     }
    //     getPost();
    //   }, []);

    // console.log(teachers) //result null

    return (
        <>
           <TeacherLists 
           teachers={teachers}/>
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

