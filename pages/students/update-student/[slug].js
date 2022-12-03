import React from "react";
import {useRouter} from 'next/router'
import StudentUpdateForm from "../../../components/Students/StudentUpdateForm";
import { getStudentDetailApi } from "../../api/StudentAPI/students_api";
import Layout from "../../../components/Layout/Layout";
import { getSession } from "next-auth/react";
import {BASE_URL} from "../../api/api";
import {getClassList, getDepartmentList, getDesignationList, getGroupList, getSessionList, getShiftList} from "../../api/settings_api";

const StudentDetail = (props) => {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <h1>Loading....</h1>
        )
    }

    return (
        <div className="container">
            <StudentUpdateForm
                data={props}
            />
        </div>
    )
};


export async function getServerSideProps({ req, params }) {
    const studentDetails = await getStudentDetailApi(params.slug);

    const session = await getSession({ req })
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
    const designationList = await getDesignationList(madrasha_slug).then(data => data)
    const classList = await getClassList(madrasha_slug).then(data => data)
    const groupList = await getGroupList(madrasha_slug).then(data => data)
    const shiftList = await getShiftList(madrasha_slug).then(data => data)
    const sessionList = await getSessionList(madrasha_slug).then(data => data)
    

    return {
        props: {
            studentDetails,
            divisionList,
            districtList,
            postCodeList,
            postOfficeList,
            thanaList,
            designationList,
            departmentList,
            classList,
            groupList,
            shiftList,
            sessionList
        },
    };
}

export default StudentDetail;

StudentDetail.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};
