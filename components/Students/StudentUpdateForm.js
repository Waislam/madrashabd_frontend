import { useState } from "react";
import { useForm } from "react-hook-form";

const StudentUpdateForm = ({data}) => {
    // Destructuring Props
    const {
        studentDetails,
        divisionList,
        districtList,
        postCodeList,
        postOfficeList,
        thanaList,
        designationList
    } = data;

    // Destructuring student Details
    const {data: student} = studentDetails;

    console.log("I am student details object",student)

    // Object for set default value in react hook form for update
    const formDefaultValues ={
            first_name: student.user.first_name,
            last_name: student.user.last_name,
            date_of_birth: student.date_of_birth,
            age: student.age,
            birth_certificate: student.birth_certificate,
            passport_number: student?.passport_number,
            student_nid: student?.student_nid,
            nationality: student?.nationality,
            religion: student?.religion,
            gender: student?.gender,
            present_address_division: student?.present_address?.division.pk,
            present_address_district: student?.present_address?.district.pk,
            present_address_thana: student?.present_address?.thana.pk,
            present_address_post_office: student?.present_address?.post_office.pk,
            present_address_post_code: student?.present_address?.post_code.pk,
            student_present_address_info: student?.present_address?.address_info,
            permanent_address_division: student?.permanent_address?.division.pk,
            permanent_address_district: student?.permanent_address?.district.pk,
            permanent_address_thana: student?.permanent_address?.thana.pk,
            permanent_address_post_office: student?.permanent_address?.post_office.pk,
            permanent_address_post_code: student?.permanent_address?.post_code.pk,
            student_permanent_address_info: student?.permanent_address?.address_info,
        }

    // Use react-hook-form
    const { register, handleSubmit, loading, formState: { errors } } = useForm(
        {
            mode: "onChange",
            defaultValues: formDefaultValues
        }
    );

    // Function for updating student
    const onSubmit = () => {
        console.log("Hello I'm clicked")
    }

    return (
        <>
            <div className="student-details">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Student Details ****************** */}
                            <div className="student-detail">
                                <h4>Student Details</h4>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="first_name" className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="Student's First name"
                                            className="form-control"
                                            id="first_name"
                                            {...register("first_name", { required: "First name is required" })}
                                        />
                                        <p className="text-danger">{errors?.first_name?.message}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="last_name" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            className="form-control"
                                            id="last_name"
                                            {...register("last_name", { required: "Last name is required" })}
                                        />
                                        <p className="text-danger">{errors?.last_name?.message}</p>
                                    </div>


                                    <div className="col-md-4 mb-4 mt-4">
                                        <div>
                                            <label htmlFor="date_of_birth" className="form-label">Date Of Birth</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Date of Birth"
                                                id="date_of_birth"
                                                {...register("date_of_birth", { required: true })}
                                                // onChange={setAgeonChangeofdateOfBirth}
                                            />
                                        </div>
                                        <div>
                                            {errors.date_of_birth && (
                                                <p className="text-danger">{errors.date_of_birth?.message ? errors.date_of_birth?.message : "Date of Birth is Required"}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4 mt-4">
                                        <div>
                                            <label htmlFor="age" className="form-label">Age</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Age"
                                                name="age"
                                                id="age"
                                                {...register("age", { required: true })}
                                            />
                                        </div>
                                        <div>
                                            {errors.age && (
                                                <p className="text-danger">Age is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4 mt-4">
                                        <div>
                                            <label htmlFor="birth_certificate" className="form-label">Barth Certificate Number</label>
                                            <input
                                                type="text"

                                                className="form-control"
                                                placeholder="Birth Certificate"
                                                id="birth_certificate"
                                                {...register("birth_certificate", { required: true })}
                                            />
                                        </div>
                                        <div>
                                            {errors.birth_certificate && (
                                                <p className="text-danger">Birth Certificate is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <label htmlFor="passport_number" className="form-label">Passport Number</label>
                                            <input
                                                type="text"

                                                className="form-control"
                                                placeholder="Passport"
                                                id="passport_number"
                                                {...register("passport_number")}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <label htmlFor="student_nid" className="form-label">Student NID (If Has)</label>
                                            <input
                                                type="text"

                                                className="form-control"
                                                placeholder="Give Student NID number if has"
                                                id="student_nid"
                                                {...register("student_nid")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <label htmlFor="nationality" className="form-label">Nationality</label>
                                        <select
                                            name="nationality"
                                            className="form-select"
                                            id="nationality"
                                            {...register("nationality", { required: true })}
                                        >
                                            <option value='' disabled>Select nationality...</option>
                                            <option value="bangladeshi">Bangladeshi</option>
                                        </select>
                                        {errors.nationality && (
                                            <p className="text-danger">Nationality is required</p>
                                        )}
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <label htmlFor="religion" className="form-label">Religion</label>
                                            <select
                                                name="religion"

                                                className="form-select"
                                                id="religion"
                                                {...register("religion", { required: true })}
                                            >
                                                <option value='' disabled>Select religion...</option>
                                                <option value="islam">
                                                    Islam
                                                </option>
                                            </select>
                                        </div>
                                        <div>
                                            {errors.religion && (
                                                <p className="text-danger">Religion is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <label htmlFor="gender" className="form-label">Gender</label>
                                            <select
                                                name="gender"

                                                className="form-select"
                                                id="gender"
                                                {...register("gender", { required: true })}
                                            >
                                                <option value='' disabled >Select Gender...</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div>
                                            {errors.gender && (
                                                <p className="text-danger">Gender is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Present Address ****************** */}
                            <div className="present mt-3">
                                <h5>Present Address</h5>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <label htmlFor="present_address_division" className="form-label">Division</label>
                                            <select
                                                name="present_address_division"

                                                id="present_address_division"
                                                className="form-select"
                                                {...register("present_address_division", { required: true })}
                                            >
                                                <option>Select Division</option>
                                                {
                                                    divisionList && divisionList.map((division) => (
                                                        <option key={division.pk} value={division.pk}>
                                                            {division.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.present_address_division && (
                                                <p className="text-danger">Division is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <label htmlFor="present_address_district" className="form-label">District</label>
                                            <select
                                                name="present_address_district"

                                                id="present_address_district"
                                                className="form-select"
                                                {...register("present_address_district", { required: true })}                                                
                                            >
                                                <option>Select District</option>
                                                {
                                                    districtList.map((district) => (
                                                        <option key={district.pk} value={district.pk}>
                                                            {district.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>

                                        </div>
                                        <div>
                                            {errors.present_address_district && (
                                                <p className="text-danger">District is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <label htmlFor="present_address_thana" className="form-label">Thana</label>
                                            <select
                                                name="present_address_thana"

                                                id="present_address_thana"
                                                className="form-select"
                                                {...register("present_address_thana", { required: true })}
                                            >
                                                <option>Select Thana</option>
                                                {
                                                    thanaList.map((thana) => (
                                                        <option key={thana.pk} value={thana.pk}>
                                                            {thana.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.present_address_thana && (
                                                <p className="text-danger">Thana is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6  mb-4">
                                        <div>
                                            <label htmlFor="present_address_post_office" className="form-label">Post Office</label>
                                            <select
                                                name="present_address_post_office"

                                                id="present_address_post_office"
                                                className="form-select"
                                                {...register("present_address_post_office", { required: true })}                                                
                                            >
                                                <option>Select Post Office</option>
                                                {
                                                    postOfficeList.map((post_office) => (
                                                        <option key={post_office.pk} value={post_office.pk}>
                                                            {post_office.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.present_address_post_office && (
                                                <p className="text-danger">Post Office is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <label htmlFor="present_address_post_code" className="form-label">Post Code</label>
                                            <select
                                                name="present_address_post_code"

                                                id="present_address_post_code"
                                                className="form-select"
                                                {...register("present_address_post_code", { required: true })}                                                
                                            >
                                                <option>Select Post Code ...</option>
                                                {
                                                    postCodeList.map((post_code) => (
                                                        <option key={post_code.pk} value={post_code.pk}>
                                                            {post_code.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.present_address_post_code && (
                                                <p className="text-danger">Post Code is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <div>
                                        <label htmlFor="student_present_address_info" className="form-label">Address Details</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="House/Flat/Road/Town/Village"
                                            id="student_present_address_info"
                                            {...register("student_present_address_info", { required: true })}
                                        />
                                    </div>
                                    <div>
                                        {errors.student_present_address_info && (
                                            <p className="text-danger">Address Details is Required</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Permanent Address ****************** */}
                            <div className="permanent-address mt-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5 className="mt-3">Permanent Address</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <label htmlFor="permanent_address_division" className="form-label">Division</label>
                                            <select
                                                name="permanent_address_division"

                                                id="permanent_address_division"
                                                className="form-select"
                                                {...register("permanent_address_division", { required: true })}
                                            >
                                                <option>Select Division</option>
                                                {
                                                    divisionList.map((division) => (
                                                        <option key={division.pk} value={division.pk}>
                                                            {division.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_division && (
                                                <p className="text-danger">Division is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div>
                                            <label htmlFor="permanent_address_district" className="form-label">District</label>
                                            <select
                                                name="permanent_address_district"

                                                id="permanent_address_district"
                                                className="form-select"
                                                {...register("permanent_address_district", { required: true })}        
                                            >
                                                <option>Select District</option>
                                                {
                                                    districtList && districtList.map((district) => (
                                                        <option key={district.pk} value={district.pk}>
                                                            {district.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_district && (
                                                <p className="text-danger">District is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <label htmlFor="permanent_address_thana" className="form-label">Thana</label>
                                            <select
                                                name="permanent_address_thana"

                                                id="permanent_address_thana"
                                                className="form-select"
                                                {...register("permanent_address_thana", { required: true })}                                                
                                            >
                                                <option>Select Thana</option>
                                                {
                                                    thanaList && thanaList.map((thana) => (
                                                        <option key={thana.pk} value={thana.pk}>
                                                            {thana.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_thana && (
                                                <p className="text-danger">Thana is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <label htmlFor="permanent_address_post_office" className="form-label">Post Office</label>
                                            <select
                                                name="permanent_address_post_office"

                                                id="permanent_address_post_office"
                                                className="form-select"
                                                {...register("permanent_address_post_office", { required: true })}                                                
                                            >
                                                <option>Select Post Office</option>
                                                {
                                                    postOfficeList && postOfficeList.map((post_office) => (
                                                        <option key={post_office.pk} value={post_office.pk}>
                                                            {post_office.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_post_office && (
                                                <p className="text-danger">Post Office is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <label htmlFor="permanent_address_post_code" className="form-label">Post Code</label>
                                            <select
                                                name="permanent_address_post_code"

                                                id="permanent_address_post_code"
                                                className="form-select"
                                                {...register("permanent_address_post_code", { required: true })}                                                
                                            >
                                                <option>Select Post Code</option>
                                                {
                                                    postCodeList && postCodeList.map((post_code) => (
                                                        <option key={post_code.pk} value={post_code.pk}>
                                                            {post_code.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            {errors.permanent_address_post_code && (
                                                <p className="text-danger">Post Code is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <div>
                                        <label htmlFor="student_permanent_address_info" className="form-label">Address Details</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="House/Flat/Road/Town/Village"
                                            id="student_permanent_address_info"
                                            {...register("student_permanent_address_info", { required: true })}
                                        />
                                    </div>
                                    <div>
                                        {errors.student_permanent_address_info && (
                                            <p className="text-danger">Address Details is Required</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentUpdateForm;