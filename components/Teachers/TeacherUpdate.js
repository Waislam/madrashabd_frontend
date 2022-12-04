import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../pages/api/api";
import styles from './TeacherList.module.css';

const TeacherUpdate = ({data}) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const { data: session, status } = useSession();


    const {
        divisionList,
        districtList,
        postCodeList,
        postOfficeList,
        thanaList,
        departmentList,
        teacher,
        designationList
    } = data

    // console.log("teacher info to uddate detaila: ", teacher.data.user?.first_name)

    console.log('@@@ Teacher', session)

    const formDefaultValues = {
        "user": teacher.data.user.id,
        "first_name": teacher.data.user.first_name,
        "last_name": teacher.data.user.last_name,
        "madrasha": teacher.data.madrasha,
        "teacher_id": teacher.data.teacher_id,
        "father_name": teacher.data.father_name,
        "mother_name": teacher.data.mother_name,
        "date_of_birth": teacher.data.date_of_birth,
        "gender": teacher.data.gender,
        "religion": teacher.data.religion,
        "marital_status": teacher.data.marital_status,
        "present_address_division": teacher.data.present_address.division.pk,
        "present_address_district": teacher.data.present_address.district.pk,
        "present_address_thana": teacher.data.present_address.thana.pk,
        "present_address_post_office": teacher.data.present_address.post_office.pk,
        "present_address_post_code": teacher.data.present_address.post_code.pk,
        "present_address_info": teacher.data.present_address.address_info,

        "permanent_address_division": teacher.data.permanent_address.division.pk,
        "permanent_address_district": teacher.data.permanent_address.district.pk,
        "permanent_address_thana": teacher.data.permanent_address.thana.pk,
        "permanent_address_post_office": teacher.data.permanent_address.post_office.pk,
        "permanent_address_post_code": teacher.data.permanent_address.post_code.pk,
        "permanent_address_info": teacher.data.permanent_address.address_info,

        "degree_name": teacher.data.education.degree_name,
        "institution_name": teacher.data.education.institution_name,
        "passing_year": teacher.data.education.passing_year,
        "result": teacher.data.education.result,
        "skill": teacher.data.skill.skill_name,
        "experience_name": teacher.data.experience.experience_name,
        // "skill": {
        //     "skill_name": props.teacher.data.skill.skill_name
        // },
        // "experience": {
        //     "experience_name": "New experience"
        // },
        "phone_number": teacher.data.user.phone,
        "nid": teacher.data.nid,
        "birth_certificate": teacher.data.birth_certificate,
        "nationality": teacher.data.nationality,
        "blood_group": teacher.data.blood_group,
        "department": teacher.data.department.id,
        "designation": teacher.data.designation.id,
        "starting_date": teacher.data.starting_date,
        "ending_date": teacher.data.ending_date,
        "slug": teacher.data.slug,
        "email": teacher.data.user.email
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: formDefaultValues
    });

    const onSubmit = data => {
        let teacher_data = {
            "user": teacher.data.user.id,
            "madrasha": session.user.madrasha_id,
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
            "phone_home": data.phone_number,
            "nid": data.nid,
            "birth_certificate": data.birth_certificate,
            "nationality": data.nationality,
            "blood_group": data.blood_group,
            "department": data.department,
            "designation": data.designation,
            "starting_date": data.starting_date,
            "ending_date": data.ending_date
        }

        api.put(`/teachers/detail/${teacher.data.slug}/`, JSON.stringify(teacher_data))
            .then((res) => {
                res.data.status && toast.success('Teacher Successfully Updated!!')
            })
            .catch((error) => {
                error && toast.error('Something went wrong');
                console.log("error", error)
            })
    }


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
            <div className="container">
                <div className="row">
                    <section className="teacherStaffDetails mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h4>Teacher / Staff Details</h4>
                                <hr/>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/*Teacher*/}
                                    <div className="teacher mb-3">
                                        <div className="row">
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">First Name</label>
                                                <input type="text"
                                                       placeholder="first_name"
                                                       className="form-control"
                                                       name="first_name" // use obj field
                                                       {...register("first_name", {required: "this field is required"})}
                                                />
                                                <p className="text-danger">{errors.first_name?.message}</p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Last Name</label>
                                                <input type="text"
                                                       placeholder="last name"
                                                       className="form-control"
                                                       name="last_name" //user obj field
                                                       {...register("last_name", {required: "this field is required"})}
                                                />
                                                <p className="text-danger">{errors.last_name?.message}</p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Father Name</label>
                                                <input type="text"
                                                       placeholder="Father Name"
                                                       className="form-control"
                                                       name="father_name"
                                                       {...register("father_name", {required: "This field is required"})}
                                                />
                                                <p className="text-danger">{errors.father_name?.message}</p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Mother Name</label>
                                                <input type="text"
                                                       placeholder="Mother Name"
                                                       className="form-control"
                                                       name="mother_name"
                                                       {...register("mother_name", {required: "This field is required"})}
                                                />
                                                <p className="text-danger">{errors.mother_name?.message}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Date of Birth</label>
                                                <input type="text"
                                                       placeholder="date of birth"
                                                       className="form-control"
                                                       name="date_of_birth"
                                                       onFocus={(e) => (e.target.type = "date")}
                                                       onBlur={(e) => (e.target.type = "text")}
                                                       {...register("date_of_birth", {required: "This field is required"})}
                                                />
                                                <p className="text-danger">{errors.date_of_birth?.message}</p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Gender</label>
                                                <select className="form-select"
                                                        name="gender"
                                                        {...register("gender")}
                                                >
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Religion</label>
                                                <select className="form-select"
                                                        name="religion"
                                                        {...register("religion")}
                                                >
                                                    <option value="islam">Islam</option>
                                                    <option value="shonaton">Shonaton</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label className="mb-2">Marital Status</label>
                                                <select className="form-select"
                                                        name="marital_status"
                                                        {...register("marital_status")}
                                                >
                                                    <option value="married">Married</option>
                                                    <option value="unmarried">Unmarried</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-3">
                                                <label className="mb-2">Department</label>
                                                <select className="form-select"
                                                        name="department"
                                                        {...register("department")}
                                                >
                                                    <option value="">Select Department</option>
                                                    {
                                                        departmentList.map(department => <option
                                                            key={department.id}
                                                            value={department.id}
                                                        >{department.name}
                                                        </option>)
                                                    }
                                                </select>
                                            </div>

                                            <div className="col-md-3">
                                                <label className="mb-2">Designation</label>
                                                <select className="form-select"
                                                        name="designation"
                                                        {...register("designation", {required: "This field is required"})}
                                                >
                                                    <option value="">Select Department</option>
                                                    {
                                                        designationList.map(designation => <option
                                                            key={designation.id}
                                                            value={designation.id}
                                                        >{designation.name}
                                                        </option>)
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Present Address*/}
                                    <div className="presentAddress mb-3">
                                        <h4>Present Address</h4>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Division</label>
                                                <select
                                                    className="form-select"
                                                    name="present_address_division"
                                                    {...register("present_address_division", {required: "This field is required"})}
                                                >
                                                    <option value="">Select Division</option>
                                                    {divisionList && divisionList.map((division) => (
                                                        <option
                                                            value={division.pk}
                                                            key={division.pk}
                                                        >
                                                            {division.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.division?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">District</label>
                                                <select
                                                    className="form-select"
                                                    name="present_address_district"
                                                    {...register("present_address_district", {required: "This field is required"})}
                                                >
                                                    <option>District select</option>
                                                    {districtList && districtList.map((district) => (
                                                        <option
                                                            value={district.pk}
                                                            key={district.pk}
                                                        >
                                                            {district.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.district?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Thana</label>
                                                <select
                                                    className="form-select"
                                                    name="present_address_thana"
                                                    {...register("present_address_thana", {required: "This field is required"})}
                                                >
                                                    <option>Thana Name</option>
                                                    {thanaList && thanaList.map((thana) => (
                                                        <option
                                                            value={thana.pk}
                                                            key={thana.pk}
                                                        >
                                                            {thana.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.present_address_thana?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Post Office</label>
                                                <select
                                                    className="form-select"
                                                    name="present_address_post_office"
                                                    {...register("present_address_post_office", {required: "This field is required"})}
                                                >
                                                    <option>Post office name</option>
                                                    {postOfficeList && postOfficeList.map((post_office) => (
                                                        <option
                                                            value={post_office.pk}
                                                            key={post_office.pk}
                                                        >
                                                            {post_office.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.present_address_post_office?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Post Code</label>
                                                <select
                                                    className="form-select"
                                                    name="present_address_post_code"
                                                    {...register("present_address_post_code", {required: "This field is required"})}
                                                >
                                                    <option>Post code number</option>
                                                    {postCodeList && postCodeList.map((post_code) => (
                                                        <option
                                                            value={post_code.pk}
                                                            key={post_code.pk}
                                                        >
                                                            {post_code.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.present_address_post_code?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">House Address</label>
                                                <input type="text"
                                                       placeholder="Address"
                                                       className="form-control"
                                                       name="present_address_info"
                                                       {...register("present_address_info", {required: "This field is required"})}
                                                />
                                                <p className="text-danger">{errors.present_address_info?.message}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Permanent Address*/}
                                    <div className="permanentAddress mb-3">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h4>Permanent Address</h4>
                                            </div>
                                            {/* <div className="col-md-8">
                                                <input type='checkbox' className="form-check-input" checked={isChecked}
                                                       onChange={handleHidingEndDate}/>
                                                <label className="ms-3 text-success">Check the button If Permanent and
                                                    present Address are same</label>
                                            </div> */}
                                        </div>
                                        <hr/>
                                        <h1 className="d-none">permanent and present address are same</h1> :
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Division</label>
                                                <select
                                                    className="form-select"
                                                    name="permanent_address_division"
                                                    {...register("permanent_address_division", {required: "This field is required"})}
                                                    onChange={handleSetSingleDivisionValue}
                                                >
                                                    <option>Select Division</option>
                                                    {divisionList && divisionList.map((division) => (
                                                        <option
                                                            value={division.pk}
                                                            key={division.pk}
                                                        >
                                                            {division.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.permanent_address_division?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">District</label>
                                                <select
                                                    className="form-select"
                                                    name="permanent_address_district"
                                                    {...register("permanent_address_district", {required: "This field is required"})}
                                                >
                                                    <option>District select</option>
                                                    {districtList && districtList.map((district) => (
                                                        <option
                                                            value={district.pk}
                                                            key={district.pk}
                                                        >
                                                            {district.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.permanent_address_district?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Thana</label>
                                                <select
                                                    className="form-select"
                                                    name="permanent_address_thana"
                                                    {...register("permanent_address_thana", {required: "This field is required"})}
                                                >
                                                    <option>Thana Name</option>
                                                    {thanaList && thanaList.map((thana) => (
                                                        <option
                                                            value={thana.pk}
                                                            key={thana.pk}
                                                        >
                                                            {thana.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.permanent_address_thana?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Post Office</label>
                                                <select
                                                    className="form-select"
                                                    name="permanent_address_post_office"
                                                    {...register("permanent_address_post_office", {required: "This field is required"})}
                                                >
                                                    <option>Post office name</option>
                                                    {postOfficeList && postOfficeList.map((post_office) => (
                                                        <option
                                                            value={post_office.pk}
                                                            key={post_office.pk}
                                                        >
                                                            {post_office.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.permanent_address_post_office?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Post Code</label>
                                                <select
                                                    className="form-select"
                                                    name="permanent_address_post_code"
                                                    {...register("permanent_address_post_code", {required: "This field is required"})}
                                                >
                                                    <option>Post code number</option>
                                                    {postCodeList && postCodeList.map((post_code) => (
                                                        <option
                                                            value={post_code.pk}
                                                            key={post_code.pk}
                                                        >
                                                            {post_code.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <p className="text-danger">{errors.permanent_address_post_code?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">House Address</label>
                                                <input type="text"
                                                        placeholder="Address"
                                                        className="form-control"
                                                        name="permanent_address_info"
                                                        {...register("permanent_address_info", {required: "This field is required"})}
                                                />
                                                <p className="text-danger">{errors.permanent_address_info?.message}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Education*/}
                                    <div className="education mb-3">
                                        <h4>Education</h4>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Degree Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Degree Name "
                                                    className="form-control"
                                                    name="degree_name"
                                                    {...register("degree_name", {required: "This field is required"})}
                                                />
                                                <p className="text-danger">{errors.degree_name?.message}</p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Passing Year</label>
                                                <input
                                                    type="text"
                                                    placeholder="Passing year"
                                                    className="form-control"
                                                    name="passing_year"
                                                    {...register("passing_year")}
                                                />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Result</label>
                                                <input type="text"
                                                       placeholder="CGPA/GPA-5/First Class"
                                                       className="form-control"
                                                       name="result"
                                                       {...register("result")}
                                                />
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Institution Name</label>
                                                <input type="text"
                                                       placeholder="University/college/Madrasha"
                                                       className="form-control"
                                                       name="institution_name"
                                                       {...register("institution_name")}
                                                />
                                            </div>
                                            <div>
                                                {/* <button type="button"
                                                            className={`btn btn-secondary float-md-end mb-2 col-1`}
                                                            onClick={() => educationRemove(index)}>Remove
                                                    </button> */}
                                            </div>
                                        </div>
                                        {/* {educationFields.map((item, index) => (
                                            <div className="row" key={item.id}>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Degree Name</label>
                                                    <input type="text"
                                                           placeholder="Degree Name "
                                                           className="form-control"
                                                           name="degree_name"
                                                           {...register("degree_name", {required: "This field is required"})}
                                                    />
                                                    <p className="text-danger">{errors.degree_name?.message}</p>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Passing Year</label>
                                                    <input type="text"
                                                           placeholder="Passing year"
                                                           className="form-control"
                                                           name="passing_year"
                                                           {...register("passing_year")}
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Result</label>
                                                    <input type="text"
                                                           placeholder="CGPA/GPA-5/First Class"
                                                           className="form-control"
                                                           name="result"
                                                           {...register("result")}
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Institution Name</label>
                                                    <input type="text"
                                                           placeholder="University/college/Madrasha"
                                                           className="form-control"
                                                           name="institution_name"
                                                           {...register("institution_name")}
                                                    />
                                                </div>
                                                <div>
                                                    <button type="button"
                                                            className={`btn btn-secondary float-md-end mb-2 col-1`}
                                                            onClick={() => educationRemove(index)}>Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))} */}

                                        {/* <button type="Submit" className={styles.addButton}
                                                onClick={handleEducationAppend}>Add More
                                        </button> */}
                                    </div>
                                    {/*contact*/}
                                    <div className="contact mb-3 mt-5">
                                        <h4>Contact</h4>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <label className="mb-2">Phone Number</label>
                                                <input
                                                    type="text"
                                                    placeholder="Phone"
                                                    className="form-control"
                                                    name="phone_number" //user object field
                                                    {...register("phone_number", {required: "This number is required"})}
                                                />
                                                <p className="text-danger">{errors.phone?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <label className="mb-2">Scond Phone Number</label>
                                                <input
                                                    type="text"
                                                    placeholder="Scond Phone Number"
                                                    className="form-control"
                                                    name="second_phone_number"
                                                    {...register("second_phone_number")}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <label className="mb-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="E-mail"
                                                    className="form-control"
                                                    name="email" // user obj field
                                                    {...register("email")}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*Other Details*/}
                                    <div className="otherDetails mb-3">
                                        <h4>Other Details</h4>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-4 mb-2">
                                                <label className="mb-2">National ID</label>
                                                <input
                                                    type="text"
                                                    placeholder="NID"
                                                    className="form-control mb-3"
                                                    name="nid"
                                                    {...register("nid")}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label className="mb-2">Birth Certificate</label>
                                                <input
                                                    type="text"
                                                    placeholder="Birth Certificate"
                                                    className="form-control"
                                                    name="birth_certificate"
                                                    {...register("birth_certificate", {required: "This field is required"})}
                                                />
                                                <p className="text-danger">{errors.birth_certificate?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label className="mb-2">Nationality</label>
                                                <select
                                                    className="form-select"
                                                    name="nationality"
                                                    {...register("nationality")}
                                                >
                                                    <option value="bangladeshi">Bangladeshi</option>
                                                    <option value="Indian">Indian</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label className="mb-2">Blood Group</label>
                                                <input
                                                    type="text"
                                                    placeholder="o+"
                                                    className="form-control"
                                                    name="blood_group"
                                                    {...register("blood_group")}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*working duration*/}
                                    <div className="workingDuration mb-4">
                                        <h4>Working Duration</h4>
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox" checked={isChecked}
                                                onChange={handleHidingEndDate}
                                            />
                                            <label className="form-check-label">Check the box if you are working</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="mb-2">Start Date</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Date"
                                                    onFocus={(e) => (e.target.type = "date")}
                                                    onBlur={(e) => (e.target.type = "text")}
                                                    name="starting_date"
                                                    {...register("starting_date", {required: "This field is required"})}
                                                />
                                                <p className="text-danger">{errors.starting_date?.message}</p>
                                            </div>
                                            {isChecked ? <h1 className="d-none">End date is hidden</h1> :
                                                <div className="col-md-6">
                                                    <label className="mb-2">End Date</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Date"
                                                        onFocus={(e) => (e.target.type = "date")}
                                                        onBlur={(e) => (e.target.type = "text")}
                                                        name="ending_date"
                                                        {...register("ending_date")}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {/*Experience*/}
                                    <div className="experience mb-4">
                                        <h4>Experience</h4>
                                        <hr/>
                                        <div className="mb-3">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="White your Experinece Here"
                                                    name="experience_name"
                                                    {...register(`experience_name`)}
                                                >
                                                </textarea>
                                            {/* <button type="button" className={`btn btn-secondary float-md-end my-3`}
                                                        onClick={() => experienceRemove(index)}>Remove
                                                </button> */}
                                        </div>
                                        {/* {experienceField.map((item, index) => (
                                            // return (
                                            <div className="mb-3" key={item.id}>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="White your Experinece Here"
                                                    name="experience"
                                                    {...register(`Experience[${index}].experience`)}
                                                >
                                                </textarea>
                                                <button type="button" className={`btn btn-secondary float-md-end my-3`}
                                                        onClick={() => experienceRemove(index)}>Remove
                                                </button>
                                            </div>
                                            // )
                                        ))} */}

                                        {/* <button type="Submit" className={styles.addButton}
                                                onClick={handleExperienceAppend}>Add More
                                        </button> */}
                                    </div>
                                    {/* skill */}
                                    <div className="skill mb-4">
                                        <h4>Skill</h4>
                                        <hr/>
                                        <div className="mb-3">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="White your Experinece Here"
                                                    name="skill"
                                                    {...register("skill")}
                                                >
                                                </textarea>
                                            {/* <button type="button" className={`btn btn-secondary float-md-end my-3`}
                                                        onClick={() => skillRemove(index)}>Remove
                                                </button> */}
                                        </div>
                                        {/* {skillFields.map((item, index) => (
                                            <div className="mb-3" key={item.id}>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="White your Experinece Here"
                                                    name="skill"
                                                    {...register("skill")}
                                                >
                                                </textarea>
                                                <button type="button" className={`btn btn-secondary float-md-end my-3`}
                                                        onClick={() => skillRemove(index)}>Remove
                                                </button>
                                            </div>
                                        ))} */}
                                        {/* <button type="Submit" className={styles.addButton}
                                                onClick={handleSkillAppend}>Add More
                                        </button> */}
                                    </div>
                                    {/*imageUpload*/}
                                    {/* <div className="imageUpload mb-4">
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label">Image Upload</label>
                                            <input className="form-control" type="file" id="formFile" />
                                        </div>
                                    </div> */}
                                    <button className={styles.defaultBtn}>Save</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default TeacherUpdate;