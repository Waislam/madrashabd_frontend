import axios from "axios";
import React, {useEffect, useState} from "react";

// TeacherList Component
import TeacherLists from "../../components/Teachers/TeacherLists";
import Layout from '../../layouts/Layout';
import api, {BASE_URL} from '../api/api'

const Index = (props) => {

    return (
        <>
            <div>
                <TeacherLists
                    teachers={props.teacher_list}
                />
            </div>
        </>
    )
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await api.get(`/teachers/100/`)
    const teacher_list = await res.data

    console.log("teacher_list", teacher_list)

    // Pass data to the page via props
    return {
        props: {
            teacher_list
        }
    }
}


export default Index;


Index.getLayout = (page) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
};

