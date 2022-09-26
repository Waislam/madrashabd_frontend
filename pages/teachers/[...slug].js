import React from "react";
import {useRouter} from 'next/router'

// TeacherDetail
import TeacherDetails from "../../components/Teachers/TeacherDetails";
import Layout from "../../components/Layout/Layout";
import {getTeacherDetailApi} from "../api/TeacherAPI/teacher_api";



const TeacherDetail = ({teacher}) => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <h1>Loading....</h1>
        )
    }
    return (
        <>
            <TeacherDetails teacher={teacher} />
        </>
    )
    }
};

export async function getServerSideProps(context) {
    const teacher = await getTeacherDetailApi(context.params.slug);
    return {
        props: {
            teacher,
        },
    };
}





export async function getServerSideProps(context) {
    const teacher = await getTeacherDetailApi(context.params.slug);
    return {
        props: {
            teacher,
        },
    };
}





export default TeacherDetail;

TeacherDetail.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};
