import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import api, { BASE_URL } from "../../api/api";
import { getSession } from "next-auth/react";
import { getDepartmentList, getDesignationList } from "../../api/settings_api";
import { getTeacherDetailApi } from "../../api/TeacherAPI/teacher_api";
import TeacherUpdate from "../../../components/Teachers/TeacherUpdate";

const UpdateTeacherPage = (props) => {
    console.log("division list inside updat teacher page: ", props.divisionList)

    const [districtList, setDistrictList] = useState(null)
    const [thanaList, setThanaList] = useState(null);
    const [postOfficeList, setPostOfficeList] = useState(null);
    const [postCode, setPostCode] = useState('')

    const [pdisctrictList, setpDistrictList] = useState(null);
    const [pthanaList, setpThanaList] = useState(null);
    const [ppostOfficeList, setpPostOfficeList] = useState(null);
    const [ppostCode, setpPostCode] = useState('')


    //handle dependable address collection
    const getDivision = async (e) => {
        e.preventDefault()
        const division_value = e.target.value
        const response = await api.get(`/accounts/district/${division_value}/`)
        const districts = response.data
        setDistrictList(districts)
    }

    const getDistrict = async (e) => {
        e.preventDefault()
        const district = e.target.value
        const response = await api.get(`/accounts/thana/${district}/`)
        const postOffice = await api.get(`/accounts/post-office/${district}/`)
        const thanas = response.data
        const postOffices = postOffice.data
        setThanaList(thanas)
        setPostOfficeList(postOffices)
    }

    const getPostOffice = async (e) => {
        e.preventDefault()
        const post_office = e.target.value
        const response = await api.get(`/accounts/post-code/${post_office}/`)
        const postCodes = response.data
        setPostCode(postCodes)
    }

    // handle permanent address section
    const handlepSetDistrict = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        const division = e.target.value
        const response = await api.get(`/accounts/district/${division}/`)
        const districts = response.data
        setpDistrictList(districts)

    }

    const getpThanaandPostOfficeList = async (e) => {
        e.preventDefault()
        const district = e.target.value
        const response = await api.get(`/accounts/thana/${district}/`)
        const postOffice = await api.get(`/accounts/post-office/${district}/`)
        const thanas = response.data
        const postOffices = postOffice.data
        setpThanaList(thanas)
        setpPostOfficeList(postOffices)
    }

    const getpPostcodes = async (e) => {
        e.preventDefault()
        const post_office = e.target.value
        const response = await api.get(`/accounts/post-code/${post_office}/`)
        const postCodes = response.data
        setpPostCode(postCodes)
    }


    return (
        <>
            <TeacherUpdate
                data={props}
                getDivision={getDivision}
                districtList={districtList}
                getDistrict={getDistrict}
                thanaList={thanaList}
                postOfficeList={postOfficeList}
                getPostOffice={getPostOffice}
                postCodeList={postCode}

                handlepSetDistrict={handlepSetDistrict}
                getpThanaandPostOfficeList={getpThanaandPostOfficeList}
                getpPostcodes={getpPostcodes}
                pdisctrictList={pdisctrictList}
                pthanaList={pthanaList}
                ppostOfficeList={ppostOfficeList}
                ppostCode={ppostCode}
            />
        </>
    )
};


export async function getServerSideProps({ req, params }) {
    const session = await getSession({ req })
    const madrasha_slug = session?.user.madrasha_slug

    const divisionListRes = await fetch(`${BASE_URL}/accounts/division/`)
    const divisionList = await divisionListRes.json()

    // const districtListRes = await fetch(`${BASE_URL}/accounts/district/`)
    // const districtList = await districtListRes.json()

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
            // districtList,
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

