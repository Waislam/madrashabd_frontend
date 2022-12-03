import React from "react";
import Layout from "../../../components/Layout/Layout";
import {BASE_URL} from "../../api/api";
import {getSession} from "next-auth/react";
import {getDepartmentList, getDesignationList} from "../../api/settings_api";
import {getTeacherDetailApi} from "../../api/TeacherAPI/teacher_api";
import TeacherUpdate from "../../../components/Teachers/TeacherUpdate";

const UpdateTeacherPage = (props) => {
    return (
        <>
            <TeacherUpdate data={props}/>
        </>
    )
};


export async function getServerSideProps({req, params}) {
    const session = await getSession({req})
    const madrasha_slug = session?.user.madrasha_slug

    const divisionListRes = await fetch(`${BASE_URL}/accounts/division/`)
    const divisionList = await divisionListRes.json()

    const districtListRes = await fetch(`${BASE_URL}/accounts/district/`)
    const districtList = await districtListRes.json()

    const postCodeListRes = await fetch(`${BASE_URL}/accounts/post-code/`)
    const postCodeList = await postCodeListRes.json()

    const postOfficeListRes = await fetch(`${BASE_URL}/accounts/post-office/`)
    const postOfficeList = await postOfficeListRes.json()

    const thanaListRes = await fetch(`${BASE_URL}/accounts/thana/`)
    const thanaList = await thanaListRes.json()

    const departmentList = await getDepartmentList(madrasha_slug).then(data => data)

    const teacher = await getTeacherDetailApi(params.slug).then(data => data);

    const designationList = await getDesignationList(madrasha_slug).then(data => data);


    // will receive `posts` as a prop at build time
    return {
        props: {
            divisionList,
            districtList,
            postCodeList,
            postOfficeList,
            thanaList,
            departmentList,
            teacher,
            designationList
        },
    }
}


export default UpdateTeacherPage;


UpdateTeacherPage.getLayout = (page) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
};

