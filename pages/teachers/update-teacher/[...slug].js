import React, {useState, useEffect} from "react";
import Layout from "../../../components/Layout/Layout";
import styles from '../../../components/Teachers/TeacherList.module.css'
import {useForm, useFieldArray} from "react-hook-form"
import api, {BASE_URL} from "../../api/api";
import {getSession, useSession} from "next-auth/react";
import {getDepartmentList} from "../../api/settings_api";
import {getTeacherDetailApi} from "../../api/TeacherAPI/teacher_api";
import TeacherUpdate from "../../../components/Teachers/TeacherUpdate";

const UpdateTeacherPage = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    // const [divisionList, setDivisionList] = useState(null);
    const [singleDivision, setSingleDivision] = useState('');
    const [disctrictList, setDistrictList] = useState(null);
    const [singleDistrict, setSingleDristrict] = useState('');
    const [departmentList, setDepartmentList] = useState('');

    console.log("@@ props teacher present_address_division", props.teacher)
    console.log("@@ props teacher present_address_district", props.teacher.data.present_address.id)


    const preLoadedData = {
        "user": 1,
        "fast_name": props.teacher.data.user.first_name,
        "last_name": props.teacher.data.user.last_name,
        "madrasha": props.teacher.data.madrasha,
        "teacher_id": props.teacher.data.teacher_id,
        "father_name": props.teacher.data.father_name,
        "mother_name": props.teacher.data.mother_name,
        "date_of_birth": props.teacher.data.date_of_birth,
        "gender": props.teacher.data.gender,
        "religion": props.teacher.data.religion,
        "marital_status": props.teacher.data.marital_status,
        "present_address_division": props.teacher.data.present_address.division,
        "present_address_district": props.teacher.data.present_address.district,
        "present_address_thana": props.teacher.data.present_address.thana,
        "present_address_post_office": props.teacher.data.present_address.post_office,
        "present_address_post_code": props.teacher.data.present_address.post_code,
        "present_address_info": props.teacher.data.present_address.address_info,

        "permanent_address_division": props.teacher.data.permanent_address.division,
        "permanent_address_district": props.teacher.data.permanent_address.district,
        "permanent_address_thana": props.teacher.data.permanent_address.thana,
        "permanent_address_post_office": props.teacher.data.permanent_address.post_office,
        "permanent_address_post_code": props.teacher.data.permanent_address.post_code,
        "permanent_address_info": props.teacher.data.permanent_address.address_info,

        "degree_name": props.teacher.data.education.degree_name,
        "institution_name": props.teacher.data.education.institution_name,
        "passing_year": props.teacher.data.education.passing_year,
        "result": props.teacher.data.education.result,
        "skill": props.teacher.data.skill.skill_name,
        "experience_name": "New experience",
        // "skill": {
        //     "skill_name": props.teacher.data.skill.skill_name
        // },
        // "experience": {
        //     "experience_name": "New experience"
        // },
        "phone_home": "00000",
        "nid": props.teacher.data.nid,
        "birth_certificate": props.teacher.data.birth_certificate,
        "nationality": props.teacher.data.nationality,
        "blood_group": props.teacher.data.blood_group,
        "department": props.teacher.data.department.id,
        "designation": props.teacher.data.designation.id,
        "starting_date": props.teacher.data.starting_date,
        "ending_date": props.teacher.data.ending_date,
        "slug": props.teacher.data.slug
    }

    const {
        handleSubmit,
        register,
        formState: {errors}, control
    } = useForm({
        defaultValues: preLoadedData
    })

    const onSubmit = data => {
        console.log(data);

        let teacher_data = {
            "user": 1,
            "madrasha": 1,
            "father_name": data.father_name,
            "mother_name": data.mother_name,
            "date_of_birth": data.date_of_birth,
            "gender": data.gender,
            "religion": data.religion,
            "marital_status": data.marital_status,
            "present_address": {
                "division": data.present_address_division,
                "district": data.present_address_district,
                "thana": data.present_address_thana,
                "post_office": data.present_address_post_office,
                "post_code": data.present_address_post_code,
                "address_info": data.present_address_info,
            },
            "permanent_address": {
                "division": data.permanent_address_division,
                "district": data.permanent_address_district,
                "thana": data.permanent_address_thana,
                "post_office": data.permanent_address_post_office,
                "post_code": data.permanent_address_post_code,
                "address_info": data.permanent_address_info
            },
            "education": {
                "degree_name": data.degree_name,
                "institution_name": data.institution_name,
                "passing_year": data.passing_year,
                "result": data.result
            },
            "experience": {
                "experience_name": data.experience_name,
            },
            "skill": {
                "skill_name": data.skill_name
            },
            "phone_home": data.second_phone_number,
            "nid": data.nid,
            "birth_certificate": data.birth_certificate,
            "nationality": data.nationality,
            "blood_group": data.blood_group,
            "department": data.department,
            "designation": 1,
            "starting_date": data.starting_date,
            "ending_date": data.ending_date
        }

        api.put(`/teachers/detail/t101/`, JSON.stringify(teacher_data))
            .then((res) => {
                console.log("res", res.data)
            })
            .catch((error) => {
                console.log("error", error)
            })
    }

    const {fields: skillFields, remove: skillRemove, append: skillAppend} = useFieldArray({
        control,
        name: "Skill"
    })

    const {fields: educationFields, remove: educationRemove, append: educationAppend} = useFieldArray({
        control,
        name: "Education"
    })


    // Extending field on click / that means add more working by using below
    const handleExperienceAppend = (e) => {
        e.preventDefault()
        experienceAppend({name: ""})
    }

    const handleSkillAppend = (e) => {
        e.preventDefault()
        skillAppend({name: ""})
    }

    const handleEducationAppend = (e) => {
        e.preventDefault()
        educationAppend({name: ""})
    }

    //get and handle dependable address section
    // const getDivision = async () => {
    //     const list = await axios.get(`${BASE_URL}/accounts/division/`)
    //     const division = list.data
    //     setDivisionList(division)
    // }

    const handleSetSingleDivisionValue = (e) => {
        e.stopPropagation()
        e.preventDefault()
        const pk_value = e.target.value
        setSingleDivision(pk_value)
    }

    useEffect(() => {
        // getDivision()
    }, [])

    // const getDistrict = async () => {
    //     const list = await axios.get(`${BASE_URL}/accounts/district/${singleDivision}/`)
    //     const district = list.data
    //     setDistrictList(district)
    // }

    // useEffect(() => {
    //     getDistrict()
    // }, [singleDivision])


    const handleHidingEndDate = (e) => {
        const checkValue = e.target.checked
        setIsChecked(checkValue)
    }

    return (
        <>
            <TeacherUpdate data={props}/>
        </>
    )
};


export async function getServerSideProps({req}) {
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

    const teacher = await getTeacherDetailApi("t101").then(data => data)


    // will receive `posts` as a prop at build time
    return {
        props: {
            divisionList,
            districtList,
            postCodeList,
            postOfficeList,
            thanaList,
            departmentList,
            teacher
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

