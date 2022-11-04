import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import styles from '../../components/Teachers/TeacherList.module.css'
import { useForm, useFieldArray } from "react-hook-form"
import { StyleRegistry } from "styled-jsx";
import axios from "axios";
import api, { BASE_URL } from "../api/api";

const AddTeacherPage = (props) => {

    const [isChecked, setIsChecked] = useState(false)
    const [divisionList, setDivisionList] = useState(null)
    const [singleDivision, setSingleDivision] = useState('')
    const [disctrictList, setDistrictList] = useState(null)
    const [singleDistrict, setSingleDristrict] = useState('')


    const { handleSubmit, register, formState: { errors }, control } = useForm({
        defaultValues: {
            Experience: [{}],
            Skill: [{}],
            Education: [{}],
            // division:""
        }
    })



    // Extending field on click / that means add more working by using below
    const { fields: experienceField, remove: experienceRemove, append: experienceAppend } = useFieldArray({
        control,
        name: "Experience"
    })

    const { fields: skillFields, remove: skillRemove, append: skillAppend } = useFieldArray({
        control,
        name: "Skill"
    })
    const { fields: educationFields, remove: educationRemove, append: educationAppend } = useFieldArray({
        control,
        name: "Education"
    })


    // Extending field on click / that means add more working by using below
    const handleExperienceAppend = (e) => {
        e.preventDefault()
        experienceAppend({ name: "" })
    }

    const handleSkillAppend = (e) => {
        e.preventDefault()
        skillAppend({ name: "" })
    }

    const handleEducationAppend = (e) => {
        e.preventDefault()
        educationAppend({ name: "" })
    }


    //get and handle dependable address section
    const getDivision = async () => {
        const list = await axios.get(`${BASE_URL}/accounts/division/`)
        const division = await list.data
        setDivisionList(division)
    }


    const handleSetSingleDivisionValue = (e) => {
        e.stopPropagation()
        e.preventDefault()
        const pk_value = e.target.value
        setSingleDivision(pk_value)
    }

    useEffect(() => {
        getDivision()
    }, [])

    const getDistrict = async () => {
        const list = await axios.get(`${BASE_URL}/accounts/district/${singleDivision}/`)
        const district = await list.data
        setDistrictList(district)
    }
    
    useEffect(() => {
        getDistrict()
    }, [singleDivision])


    const getThana = async () => {
        const list = await axios.get(`${BASE_URL}/accounts/thana/${singleDistrict}/`)
        const district = await list.data
        setDistrictList(district)
    }

    useEffect(() => {
        getThana()
    }, [singleDistrict])



    // user(F)
    // madrasha
    // teacher_id
    // father_name
    // mother_name
    // date_of_birth
    // gender
    // religion
    // marital_status
    // present_address(F) 
    // permanent_address(F) 
    // education (F)
    // skill =(F) 
    // experience(F)
    // phone_home 
    // nid 
    // birth_certificate 
    // nationality 
    // blood_group 
    // department 
    // designation 
    // starting_date 
    // ending_date 




    // permanent address and working hour hiding function 
    const handleHidingEndDate = (e) => {
        // e.preventDefault()
        const checkValue = e.target.checked
        setIsChecked(checkValue)
    }

    console.log("@@@@@disctrictList",disctrictList);



    return (
        <>
            <div className="container">
                <div className="row">
                    <section className="teacherStaffDetails mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h4>Teacher / Staff Details</h4>
                                <hr />
                                <form>
                                    {/*Teacher*/}
                                    <div className="teacher mb-3">
                                        <div className="row">
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">First Name</label>
                                                <input type="text"
                                                    placeholder="first_name"
                                                    className="form-control"
                                                    name="first_name" // use obj field
                                                    {...register("first_name", { required: "this field is required" })}
                                                />
                                                <p className="text-danger">{errors.first_name?.message}</p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Last Name</label>
                                                <input type="text"
                                                    placeholder="last name"
                                                    className="form-control"
                                                    name="last_name" //user obj field
                                                    {...register("last_name", { required: "this field is required" })}
                                                />
                                                <p className="text-danger">{errors.last_name?.message}</p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Father Name</label>
                                                <input type="text"
                                                    placeholder="Father Name"
                                                    className="form-control"
                                                    name="father_name"
                                                    {...register("father_name", { required: "This field is required" })}
                                                />
                                                <p className="text-danger">{errors.father_name?.message}</p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="mb-2">Mother Name</label>
                                                <input type="text"
                                                    placeholder="Mother Name"
                                                    className="form-control"
                                                    name="mother_name"
                                                    {...register("mother_name", { required: "This field is required" })}
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
                                                    {...register("date_of_birth", { required: "This field is required" })}
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
                                    </div>

                                    {/*Present Address*/}
                                    <div className="presentAddress mb-3">
                                        <h4>Present Address</h4>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Division</label>
                                                <select className="form-select"
                                                    name="division"
                                                    {...register("division", { required: "This field is required" })}
                                                    onChange={handleSetSingleDivisionValue}  
                                                >
                                                    <option>Select Division</option>
                                                    {divisionList && divisionList.map((division) => (
                                                        <option value={division.pk} key={division.name}>{division.name}</option>
                                                    ))}

                                                </select>
                                                <p className="text-danger">{errors.division?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">District</label>
                                                <select className="form-select"
                                                    name="district"
                                                    {...register("district", { required: "This field is required" })}
                                                    onChange={(e)=>setSingleDristrict(e.target.value)}  
                                                >
                                                    <option>District select</option>
                                                    {disctrictList && disctrictList.map((district)=>(
                                                        <option value={district.pk} key={district.name}>{district.name}</option>
                                                    ))}

                                                </select>
                                                <p className="text-danger">{errors.district?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Thana</label>
                                                <select className="form-select"
                                                    name="thana"
                                                    {...register("thana", { required: "This field is required" })}
                                                >
                                                    <option>Thana Name</option>
                                                </select>
                                                <p className="text-danger">{errors.thana?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Post Office</label>
                                                <select className="form-select"
                                                    name="post_office"
                                                    {...register("post_office", { required: "This field is required" })}
                                                >
                                                    <option>Post office name</option>
                                                </select>
                                                <p className="text-danger">{errors.post_office?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">Post Code</label>
                                                <select className="form-select"
                                                    name="post_code"
                                                    {...register("post_code", { required: "This field is required" })}
                                                >
                                                    <option>Post code number</option>
                                                </select>
                                                <p className="text-danger">{errors.post_code?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label className="mb-2">House Address</label>
                                                <input type="text"
                                                    placeholder="Address"
                                                    className="form-control"
                                                    name="address_info"
                                                    {...register("address_info", { required: "This field is required" })}
                                                />
                                                <p className="text-danger">{errors.address_info?.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Permanent Address*/}
                                    <div className="permanentAddress mb-3">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h4>Permanent Address</h4>
                                            </div>
                                            <div className="col-md-8">
                                                <input type='checkbox' className="form-check-input" checked={isChecked} onChange={handleHidingEndDate} />
                                                <label className="ms-3 text-success">Check the button If Permanent and present Address are same</label>
                                            </div>
                                        </div>
                                        <hr />
                                        {isChecked ? <h1 className="d-none">permanent and present addrss are same</h1> :
                                            <div className="row">
                                                <div className="col-md-4 mb-3">
                                                    <label className="mb-2">Division</label>
                                                    <select className="form-select"
                                                        name="division"
                                                        {...register("division", { required: "This field is required" })}
                                                    >
                                                        <option>Select Division</option>
                                                        <option>Division Name</option>
                                                    </select>
                                                    <p className="text-danger">{errors.division?.message}</p>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label className="mb-2">District</label>
                                                    <select className="form-select"
                                                        name="district"
                                                        {...register("district", { required: "This field is required" })}
                                                    >
                                                        <option>District Name</option>
                                                    </select>
                                                    <p className="text-danger">{errors.district?.message}</p>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label className="mb-2">Thana</label>
                                                    <select className="form-select"
                                                        name="thana"
                                                        {...register("thana", { required: "This field is required" })}
                                                    >
                                                        <option>Thana Name</option>
                                                    </select>
                                                    <p className="text-danger">{errors.thana?.message}</p>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label className="mb-2">Post Office</label>
                                                    <select className="form-select"
                                                        name="post_office"
                                                        {...register("post_office", { required: "This field is required" })}
                                                    >
                                                        <option>Post office name</option>
                                                    </select>
                                                    <p className="text-danger">{errors.post_office?.message}</p>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label className="mb-2">Post Code</label>
                                                    <select className="form-select"
                                                        name="post_code"
                                                        {...register("post_code", { required: "This field is required" })}
                                                    >
                                                        <option>Post code number</option>
                                                    </select>
                                                    <p className="text-danger">{errors.post_code?.message}</p>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label className="mb-2">House Address</label>
                                                    <input type="text"
                                                        placeholder="Address"
                                                        className="form-control"
                                                        name="address_info"
                                                        {...register("address_info", { required: "This field is required" })}
                                                    />
                                                    <p className="text-danger">{errors.address_info?.message}</p>
                                                </div>
                                            </div>
                                        }
                                    </div>

                                    {/*Education*/}
                                    <div className="education mb-3">
                                        <h4>Education</h4>
                                        <hr />
                                        {educationFields.map((item, index) => (
                                            <div className="row" key={item.id}>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Degree Name</label>
                                                    <input type="text"
                                                        placeholder="Degree Name "
                                                        className="form-control"
                                                        name="degree_name"
                                                        {...register("degree_name")}
                                                    // {...register(`Education[${index}].degree_name`)}
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Passing Year</label>
                                                    <input type="text"
                                                        placeholder="Passing year"
                                                        className="form-control"
                                                        name="passing_year"
                                                        {...register("passing_year")}
                                                    // {...register(`Education[${index}].passing_year`)}
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Result</label>
                                                    <input type="text"
                                                        placeholder="CGPA/GPA-5/First Class"
                                                        className="form-control"
                                                        name="result"
                                                        {...register("result")}
                                                    // {...register(`Education[${index}].result`)}
                                                    />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="mb-2">Institution Name</label>
                                                    <input type="text"
                                                        placeholder="University/college/Madrasha"
                                                        className="form-control"
                                                        name="institution_name"
                                                        {...register("institution_name")}
                                                    // {...register(`Education[${index}].institution_name`)}   
                                                    />
                                                </div>
                                                <div>
                                                    <button type="button" className={`btn btn-secondary float-md-end mb-2 col-1`}
                                                        onClick={() => educationRemove(index)}>Remove</button>
                                                </div>
                                            </div>
                                        ))}

                                        <button type="Submit" className={styles.addButton} onClick={handleEducationAppend}>Add More</button>
                                    </div>
                                    {/*contact*/}
                                    <div className="contact mb-3 mt-5">
                                        <h4>Contact</h4>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <label className="mb-2">Phone Number</label>
                                                <input type="tel"
                                                    placeholder="Phone"
                                                    className="form-control"
                                                    name="phone" //user object field
                                                    {...register("phone", { required: "This number is required" })}
                                                />
                                                <p className="text-danger">{errors.phone?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <label className="mb-2">Scond Phone Number</label>
                                                <input type="tel"
                                                    placeholder="Home Phone"
                                                    className="form-control"
                                                    name="phone_home"
                                                    {...register("phone_home")}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-4">
                                                <label className="mb-2">Email Address</label>
                                                <input type="email"
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
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-4 mb-2">
                                                <label className="mb-2">National ID</label>
                                                <input type="text"
                                                    placeholder="NID"
                                                    className="form-control mb-3"
                                                    name="nid"
                                                    {...register("nid")}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label className="mb-2">Birth Certificate</label>
                                                <input type="text"
                                                    placeholder="Birth Certificate"
                                                    className="form-control"
                                                    name="birth_certificate"
                                                    {...register("birth_certificate", { required: "This field is required" })}
                                                />
                                                <p className="text-danger">{errors.birth_certificate?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label className="mb-2">Nationality</label>
                                                <select className="form-select"
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
                                                <input type="text"
                                                    placeholder="o+"
                                                    className="form-control"
                                                    name="blood_group"
                                                    {...register("blood_group")}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label className="mb-2">Department</label>
                                                <input type="text"
                                                    placeholder="Department"
                                                    className="form-control"
                                                    name="department"
                                                    {...register("department", { required: "This field is required" })}
                                                />
                                                <p className="text-danger">{errors.department?.message}</p>
                                            </div>
                                            <div className="col-md-4 mb-2">
                                                <label className="mb-2">Designation</label>
                                                <input type="text"
                                                    placeholder="Designation"
                                                    className="form-control"
                                                    name="designation"
                                                    {...register("designation", { required: "This field is required" })}
                                                />
                                                <p className="text-danger">{errors.designation?.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*working duration*/}
                                    <div className="workingDuration mb-4">
                                        <h4>Working Duration</h4>
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" checked={isChecked} onChange={handleHidingEndDate} />
                                            <label className="form-check-label" >Check the box if you are working</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="mb-2">Start Date</label>
                                                <input type="text"
                                                    className="form-control"
                                                    placeholder="Date"
                                                    onFocus={(e) => (e.target.type = "date")}
                                                    onBlur={(e) => (e.target.type = "text")}
                                                    name="starting_date"
                                                    {...register("starting_date", { required: "This field is required" })}
                                                />
                                                <p className="text-danger">{errors.starting_date?.message}</p>
                                            </div>
                                            {isChecked ? <h1 className="d-none">End date is hidden</h1> :
                                                <div className="col-md-6">
                                                    <label className="mb-2">End Date</label>
                                                    <input type="text"
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
                                        <hr />
                                        {experienceField.map((item, index) => (
                                            // return (
                                            <div className="mb-3" key={item.id}>
                                                <textarea className="form-control"
                                                    placeholder="White your Experinece Here"
                                                    name="experience"
                                                    {...register(`Experience[${index}].experience`)}
                                                >
                                                </textarea>
                                                <button type="button" className={`btn btn-secondary float-md-end my-3`}
                                                    onClick={() => experienceRemove(index)}>Remove</button>
                                            </div>
                                            // )
                                        ))}

                                        <button type="Submit" className={styles.addButton} onClick={handleExperienceAppend}>Add More</button>
                                    </div>
                                    {/* skill */}
                                    <div className="skill mb-4">
                                        <h4>Skill</h4>
                                        <hr />
                                        {skillFields.map((item, index) => (
                                            <div className="mb-3" key={item.id}>
                                                <textarea className="form-control"
                                                    placeholder="White your Experinece Here"
                                                    name="skill"
                                                    {...register("skill")}
                                                >
                                                </textarea>
                                                <button type="button" className={`btn btn-secondary float-md-end my-3`}
                                                    onClick={() => skillRemove(index)}>Remove</button>
                                            </div>
                                        ))}
                                        <button type="Submit" className={styles.addButton} onClick={handleSkillAppend}>Add More</button>
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
        </>
    )
};


export default AddTeacherPage;


AddTeacherPage.getLayout = (page) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
};

