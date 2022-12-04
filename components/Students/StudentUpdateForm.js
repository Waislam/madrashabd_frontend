import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updateStudentDetail } from "../../pages/api/StudentAPI/students_api";

const StudentUpdateForm = ({data}) => {
    const {data:session} = useSession();

    // Destructuring Props
    const {
        studentDetails,
        divisionList,
        districtList,
        postCodeList,
        postOfficeList,
        thanaList,
        departmentList,
        classList,
        groupList,
        shiftList,
        sessionList
    } = data;

    // Destructuring student Details
    const {data: student} = studentDetails;

    // Object for set default value in react hook form for update
    const formDefaultValues ={
            first_name: student?.user?.first_name,
            last_name: student?.user?.last_name,
            date_of_birth: student?.date_of_birth,
            age: student?.age,
            birth_certificate: student?.birth_certificate,
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
            parents_information_father_name: student?.father_info?.parent_name,
            parents_information_father_date_of_birth: student?.father_info?.parent_date_of_birth,
            parents_information_father_nid: student?.father_info?.parent_nid,
            parents_information_father_occupation: student?.father_info?.occupation,
            parents_information_father_organization_with_designation: student?.father_info?.occupation,
            parents_information_father_education: student?.father_info?.education,
            parents_information_father_contact: student?.father_info?.contact_number,
            father_email: student?.father_info?.parent_email,
            parents_information_mother_name: student?.mother_info?.parent_name,
            parents_information_mother_date_of_birth: student?.mother_info?.parent_date_of_birth,
            parents_information_mother_nid: student?.mother_info?.parent_nid,
            parents_information_mother_occupation: student?.mother_info?.occupation,
            parents_information_mother_organization_with_designation: student?.mother_info?.occupation,
            parents_information_mother_education: student?.mother_info?.education,
            parents_information_mother_contact: student?.mother_info?.contact_number,
            mother_email: student?.mother_info?.parent_email,
            guardian_name: student?.guardian_name,
            guardian_relation: student?.guardian_relation,
            guardian_occupation: student?.guardian_occupation,
            guardian_yearly_income: student?.yearly_income,
            guardian_contact: student?.guardian_contact,
            guardian_email: student?.guardian_email,
            other_contact_person: student?.other_contact_person,
            other_contact_person_relation: student?.other_contact_person_relation,
            other_contact_person_contact: student?.other_contact_person_contact,
            sibling_id: student?.sibling_id,
            previous_institution_name: student?.previous_institution_name,
            previous_institution_contact: student?.previous_institution_contact,
            previous_started_at: student?.previous_started_at,
            previous_ending_at: student?.previous_ending_at,
            previous_ending_class: student?.previous_ending_class,
            previous_ending_result: student?.previous_ending_result,
            board_exam_name: student?.board_exam_name,
            board_exam_registration: student?.board_exam_registration,
            board_exam_roll: student?.board_exam_roll,
            board_exam_result: student?.board_exam_result,
            admitted_department: student?.admitted_department.id,
            admitted_class: student?.admitted_class.id,
            admitted_group: student?.admitted_group.id,
            admitted_shift: student?.admitted_shift.id,
            admitted_roll: student?.admitted_roll,
            admitted_session: student?.admitted_session.id,
            student_blood_group: student?.student_blood_group,
            special_body_sign: student?.special_body_sign,
            talimi_murobbi_name: student?.talimi_murobbi_name,
            eslahi_murobbi_name: student?.eslahi_murobbi_name,
        }

    // Use react-hook-form
    const { register, handleSubmit, loading, formState: { errors } } = useForm(
        {
            mode: "onChange",
            defaultValues: formDefaultValues
        }
    );

    // Function for updating student
    const onSubmit = (data) => {
        console.log("Hello I'm clicked", data)

        // Prepare Object for update data
        const updatedData = {
            madrasha: session?.user?.madrasha_id,
            student_id: student?.student_id,
            student_roll_id: student?.student_roll_id,
            date_of_birth: student?.date_of_birth,
            age: data?.age,
            birth_certificate: data?.birth_certificate,
            student_nid: data?.student_nid,
            passport_number: data?.passport_number,
            nationality: data?.nationality,
            religion: data?.religion,
            gender: data?.gender,
            present_address: {
                id: student?.present_address?.id,
                division: parseInt(data?.present_address_division),
                district: parseInt(data?.present_address_district),
                thana: parseInt(data?.present_address_thana),
                post_office: parseInt(data?.present_address_post_office),
                post_code: parseInt(data?.present_address_post_code),
                address_info: data?.student_present_address_info,
            },
            permanent_address: {
                id: student?.permanent_address?.id,
                division: parseInt(data?.permanent_address_division),
                district: parseInt(data?.permanent_address_district),
                thana: parseInt(data?.permanent_address_thana),
                post_office: parseInt(data?.permanent_address_post_office),
                post_code: parseInt(data?.permanent_address_post_code),
                address_info: data?.student_permanent_address_info,
            },
            father_info: {
                id: student?.father_info?.id,
                parent_name: data?.parents_information_father_name,
                parent_date_of_birth: data?.parents_information_father_date_of_birth || null,
                parent_nid: data?.parents_information_father_nid,
                occupation: data?.parents_information_father_occupation,
                organization_with_designation: data?.parents_information_father_organization_with_designation,
                education: data?.parents_information_father_education,
                contact_number: data?.parents_information_father_contact,
                parent_email: data?.father_email
            },
            mother_info: {
                id: student?.mother_info?.id,
                parent_name: data?.parents_information_mother_name,
                parent_date_of_birth: data?.parents_information_mother_date_of_birth || null,
                parent_nid: data?.parents_information_mother_nid,
                occupation: data?.parents_information_mother_occupation,
                organization_with_designation: data?.parents_information_mother_organization_with_designation,
                education: data?.parents_information_mother_education,
                contact_number: data?.parents_information_mother_contact,
                parent_email: data?.mother_email
            },
            guardian_name: data?.guardian_name,
            guardian_relation: data?.guardian_relation,
            guardian_occupation: data?.guardian_occupation,
            yearly_income: data?.guardian_yearly_income,
            guardian_contact: data?.guardian_contact,
            guardian_email: data?.guardian_email,
            other_contact_person: data?.other_contact_person,
            other_contact_person_relation: data?.other_contact_person_relation,
            other_contact_person_contact: data?.other_contact_person_contact,
            sibling_id: data?.sibling_id,
            previous_institution_name: data?.previous_institution_name,
            previous_institution_contact: data?.previous_institution_contact,
            previous_started_at: data?.previous_started_at,
            previous_ending_at: data?.previous_ending_at,
            previous_ending_class: data?.previous_ending_class,
            previous_ending_result: data?.previous_ending_result,
            board_exam_name: data?.board_exam_name,
            board_exam_registration: data?.board_exam_registration,
            board_exam_roll: data?.board_exam_roll,
            board_exam_result: data?.board_exam_result,
            admitted_department: data?.admitted_department,
            admitted_class: data?.admitted_class,
            admitted_group: data?.admitted_group,
            admitted_shift: data?.admitted_shift,
            admitted_roll: data?.admitted_roll,
            admitted_session: data?.admitted_session,
            student_blood_group: data?.student_blood_group,
            special_body_sign: null,
            academic_fees: null,
            talimi_murobbi_name: data?.talimi_murobbi_name,
            eslahi_murobbi_name: data?.eslahi_murobbi_name,
            slug: data?.slug
        }

        updateStudentDetail(student.student_id, updatedData)
        .then(data => {
            return data.message && toast.success(data.message)
        })
        .catch(error => console.log(error));
    }

    return (
        <>
            <div className="student-details">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Student Details ****************** */}
                            <div className="student-detail">
                                <h4>Student Update</h4>
                                <hr />
                                <div className="row">
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

                            {/* ========Start Student's Parent and Guardian Information section ======= */}
                            {/*Parents Information ***********************************************/}
                            <div className="parents-information mt-5">
                                <h4>Parents Information</h4>
                                <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div>
                                        <label htmlFor="parents_information_father_name" className="form-label">Father's Name</label>
                                        <input
                                            type="text"                                                
                                            placeholder="Father Name"
                                            className="form-control"
                                            id="parents_information_father_name"
                                            {...register("parents_information_father_name", {required: true})}
                                        />
                                    </div>
                                    <div>
                                        {errors.parents_information_father_name && (
                                            <p className="text-danger">Father name is required</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <label htmlFor="parents_information_mother_name" className="form-label">Mother's Name</label>
                                        <input
                                            type="text"                                                
                                            placeholder="Mother Name"
                                            className="form-control"
                                            id="parents_information_mother_name"
                                            {...register("parents_information_mother_name", {required: true})}
                                        />
                                    </div>
                                    <div>
                                        {errors.parents_information_mother_name && (
                                            <p className="text-danger">Mother name is required</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <label htmlFor="parents_information_father_date_of_birth" className="form-label">Father's Date of birth</label>
                                        <input
                                            type="date"                                                
                                            placeholder="Father Date of birth"
                                            className="form-control"
                                            id="parents_information_father_date_of_birth"
                                            {...register("parents_information_father_date_of_birth")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <label htmlFor="parents_information_mother_date_of_birth" className="form-label">Mother's Date of birth</label>
                                        <input
                                            type="date"                                                
                                            placeholder="Mother Date Of Birth"
                                            className="form-control"
                                            id="parents_information_mother_date_of_birth"
                                            {...register("parents_information_mother_date_of_birth")}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <label htmlFor="parents_information_father_nid" className="form-label">Father's NID</label>
                                        <input
                                            type="name"
                                            placeholder="Father NID"
                                            className="form-control"
                                            id="parents_information_father_nid"
                                            {...register("parents_information_father_nid", {required: true})}
                                        />
                                    </div>
                                    <div>
                                        {errors.parents_information_father_nid && (
                                            <p className="text-danger">Father's NID is Required</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <label htmlFor="parents_information_mother_nid" className="form-label">Mother's NID</label>
                                        <input
                                            type="name"                                                
                                            placeholder="Mothers NID"
                                            className="form-control"
                                            id="parents_information_mother_nid"
                                            {...register("parents_information_mother_nid", {required: true})}
                                        />
                                    </div>
                                    <div>
                                        {errors.parents_information_mother_nid && (
                                            <p className="text-danger">Mother's NID is Required</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <label htmlFor="parents_information_father_occupation" className="form-label">Father's Occupation</label>
                                        <select
                                            name="parents_information_father_occupation"                                                
                                            className="form-select"
                                            id="parents_information_father_occupation"
                                            {...register("parents_information_father_occupation", {required: true})}
                                        >
                                            <option value=''>Choose Father occupation ...</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="farmer">Farmer</option>
                                            <option value="doctor">Doctor</option>
                                            <option value="police">Police</option>
                                            <option value="businessman">Businessman</option>
                                            <option value="non-govt-employee">Non govt. employee</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        {errors.parents_information_father_occupation && (
                                            <p className="text-danger">Father occupation is required</p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <label htmlFor="parents_information_mother_occupation" className="form-label">Mother's Occupation</label>
                                        <select
                                            name="parents_information_mother_occupation"                                                
                                            className="form-select"
                                            id="parents_information_mother_occupation"
                                            {...register("parents_information_mother_occupation", {required: true})}
                                        >
                                            <option value=''>Choose Mother occupation ...</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="farmer">Farmer</option>
                                            <option value="doctor">Doctor</option>
                                            <option value="police">Police</option>
                                            <option value="businessman">Businessman</option>
                                            <option value="non-govt-employee">Non govt. employee</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        {errors.parents_information_mother_occupation && (
                                            <p className="text-danger">Mother occupation is required</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="parents_information_father_organization_with_designation" className="form-label">Father's Organization</label>
                                    <input
                                        type="text"
                                        placeholder="Organization name, Designation"
                                        className="form-control"
                                        id="parents_information_father_organization_with_designation"
                                        {...register("parents_information_father_organization_with_designation")}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="parents_information_father_organization_with_designation" className="form-label">Mother's Organization</label>
                                    <input
                                        type="text"
                                        placeholder="Organization name, Designation"
                                        className="form-control"
                                        id="parents_information_mother_organization_with_designation"
                                        {...register("parents_information_mother_organization_with_designation")}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6  mb-3">
                                    <label htmlFor="parents_information_father_education" className="form-label">Father's Education</label>
                                    <select
                                        name="parents_information_father_education"                                            
                                        className="form-select"
                                        id="parents_information_father_education"
                                        {...register("parents_information_father_education")}
                                    >
                                        <option value="">Choose Father Education</option>
                                        <option value="literate">Literate</option>
                                        <option value="ssc/equivalent">SSC/equivalent</option>
                                        <option value="hsc/equivalent">HSC/equivalent</option>
                                        <option value="hons/equivalent">Hons/equivalent</option>
                                        <option value="m.a./equivalent">M.A./equivalent</option>
                                        <option value="higher/equivalent">Higher/equivalent</option>
                                    </select>
                                </div>
                                <div className="col-md-6  mb-3">
                                    <label htmlFor="parents_information_mother_education" className="form-label">Mother's Education</label>
                                    <select
                                        name="parents_information_mother_education"                                            
                                        className="form-select"
                                        id="parents_information_mother_education"
                                        {...register("parents_information_mother_education")}
                                    >
                                        <option value="">Choose Mother Education</option>
                                        <option value="literate">Literate</option>
                                        <option value="ssc/equivalent">SSC/equivalent</option>
                                        <option value="hsc/equivalent">HSC/equivalent</option>
                                        <option value="hons/equivalent">Hons/equivalent</option>
                                        <option value="m.a./equivalent">M.A./equivalent</option>
                                        <option value="higher/equivalent">Higher/equivalent</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6  mb-3">
                                    <div>
                                        <label htmlFor="parents_information_father_contact" className="form-label">Father's Contact</label>
                                        <input
                                            type="text"                                                
                                            placeholder="Father Contact"
                                            className="form-control"
                                            id="parents_information_father_contact"
                                            {...register("parents_information_father_contact", {required: true})}
                                        />
                                    </div>
                                    <div>
                                        {errors.parents_information_father_contact && (
                                            <p className="text-danger">Father Contact is required</p>
                                        )}
                                    </div>

                                </div>
                                <div className="col-md-6  mb-3">
                                    <div>
                                        <label htmlFor="parents_information_mother_contact" className="form-label">Mother's Contact</label>
                                        <input
                                            type="text"                                                
                                            placeholder="Mother Contact"
                                            className="form-control"
                                            id="parents_information_mother_contact"
                                            {...register("parents_information_mother_contact")}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="father_email" className="form-label">Father's Email</label>
                                    <input
                                        type="text"                                            
                                        placeholder="Father E-mail"
                                        className="form-control"
                                        id="father_email"
                                        {...register("father_email")}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="mother_email" className="form-label">Mother's Email</label>
                                    <input
                                        type="text"                                            
                                        placeholder="Mother E-mail"
                                        className="form-control"
                                        id="mother_email"
                                        {...register("mother_email")}
                                    />
                                </div>
                            </div>
                            </div>
                            {/*Guardian Information **********************************************/}
                            <div className="guardian-information">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5 className="mt-3">Guardian Information</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4  mb-3">
                                            <label htmlFor="guardian_name" className="form-label">Guardian Name</label>
                                            <input
                                                type="text"                                                
                                                placeholder="Guardian Name"
                                                className="form-control"
                                                id="guardian_name"
                                                {...register("guardian_name", {required: "Guarding Name is required"})}
                                            />
                                            <p className="text-danger">{errors?.guardian_name?.message}</p>
                                        </div>
                                        <div className="col-md-4  mb-3">
                                            <label htmlFor="guardian_relation" className="form-label">Guardian Relation</label>
                                            <select
                                                name="guardian_relation"                                                
                                                className="form-select"
                                                id="guardian_relation"
                                                {...register("guardian_relation", {required: "This field is required"})}
                                            >
                                                <option value="null">Choose guardian relation ...</option>
                                                <option value="father">Father</option>
                                                <option value="mother">Mother</option>
                                                <option value="brother">Brother</option>
                                                <option value="sister">Sister</option>
                                                <option value="uncle">Uncle</option>
                                                <option value="cousine">Cousine</option>
                                            </select>
                                            <p className="text-danger">{errors?.guardian_relation?.message}</p>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="guardian_occupation" className="form-label">Guardian Occupation</label>
                                            <select
                                                name="guardian_occupation"                                                
                                                className="form-select"
                                                id="guardian_occupation"
                                                {...register("guardian_occupation")}
                                            >
                                                <option value="null">Guardian occupation</option>
                                                <option value="teacher">Teacher</option>
                                                <option value="farmer">Farmer</option>
                                                <option value="doctor">Doctor</option>
                                                <option value="police">Police</option>
                                                <option value="businessman">Businessman</option>
                                                <option value="non-govt-employee">Non govt. employee</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="guardian_yearly_income" className="form-label">Guardian Annual Income</label>
                                            <input
                                                type="text"                                                
                                                placeholder="Yearly Income"
                                                className="form-control"
                                                id="guardian_yearly_income"
                                                {...register("guardian_yearly_income")}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <label htmlFor="guardian_contact" className="form-label">Guardian Contact</label>
                                                <input
                                                    type="text"                                                    
                                                    placeholder="Guardian Contact"
                                                    className="form-control"
                                                    id="guardian_contact"
                                                    {...register("guardian_contact", {required: true})}
                                                />
                                            </div>
                                            <div>
                                                {errors.guardian_contact && (
                                                    <p className="text-danger">Guardian Contact is required</p>
                                                )}

                                            </div>
                                        </div>
                                        <div className="col-md-4  mb-3">
                                            <label htmlFor="guardian_email" className="form-label">Guardian Email</label>
                                            <input
                                                type="email"                                                
                                                placeholder="E-mail"
                                                className="form-control"
                                                id="guardian_email"
                                                {...register("guardian_email")}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="other_contact_person" className="form-label">Other Contact</label>
                                            <input
                                                type="text"                                                
                                                placeholder="Other contact person"
                                                className="form-control"
                                                id="other_contact_person"
                                                {...register("other_contact_person")}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="other_contact_person_relation" className="form-label">Other Guardian Relation</label>
                                            <select
                                                name="other_contact_person_relation"                                                
                                                className="form-select"
                                                id="other_contact_person_relation"
                                                {...register("other_contact_person_relation")}
                                            >
                                                <option value=''>Other Guardian Relation ...</option>
                                                <option value="father">Father</option>
                                                <option value="mother">Mother</option>
                                                <option value="brother">Brother</option>
                                                <option value="sister">Sister</option>
                                                <option value="uncle">Uncle</option>
                                                <option value="cousine">Cousine</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="other_contact_person_contact" className="form-label">Other Guardian Another Contact</label>
                                            <input
                                                type="text"                                                
                                                placeholder="Other person contact"
                                                className="form-control"
                                                id="other_contact_person_contact"
                                                {...register("other_contact_person_contact")}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="sibling_id" className="form-label">Sibling</label>
                                            <input
                                                type="text"                                                
                                                placeholder="Sibling ID"
                                                className="form-control mb-3"
                                                id="sibling_id"
                                                {...register("sibling_id")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ========End Student's Parent and Guardian Information section ======= */}

                            {/* ========Start Student's Previous Institute Information section ======= */}
                            {/*Previous Institution ************************************/}
                            <div className="previous-institution mt-5">
                                <h4>Previous Institution Information</h4>
                                <div className="row mb-3 mt-3">
                                    <div className="col-md-6">
                                        <label htmlFor="previous_institution_name" className="form-label">Previous Institution Name</label>
                                        <input
                                            type="text"                                            
                                            placeholder="Name of institution"
                                            className="form-control"
                                            id="previous_institution_name"
                                            {...register("previous_institution_name")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="previous_institution_contact" className="form-label">Previous Institution Contact</label>
                                        <input
                                            type="text"                                            
                                            placeholder="Institution Contact Number"
                                            className="form-control"
                                            id="previous_institution_contact"
                                            {...register("previous_institution_contact")}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="previous_started_at" className="form-label">Previous Institution Start To</label>
                                        <input
                                            type="date"                                            
                                            placeholder="Start Date"
                                            className="form-control"
                                            id="previous_started_at"
                                            {...register("previous_started_at")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="previous_ending_at" className="form-label">Previous Institution Start From</label>
                                        <input
                                            type="date"                                            
                                            placeholder="Finished Date"
                                            className="form-control"
                                            id="previous_ending_at"
                                            {...register("previous_ending_at")}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="previous_ending_class" className="form-label">Previous Institution Ending Class</label>
                                        <input
                                            type="text"                                            
                                            placeholder="Finished Class"
                                            className="form-control"
                                            id="previous_ending_class"
                                            {...register("previous_ending_class")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="previous_ending_result" className="form-label">Previous Institution Result</label>
                                        <input
                                            type="text"                                            
                                            placeholder="Results/Marks"
                                            className="form-control"
                                            id="previous_ending_result"
                                            {...register("previous_ending_result")}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*Board exam information **********************************/}
                            <div className="board-exam-information mt-4">
                                <h4>Board exam information</h4>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="board_exam_name" className="form-label">Board Exam Name</label>
                                        <select
                                            type="text"                                            
                                            placeholder="Exam Name"
                                            className="form-select"
                                            id="board_exam_name"
                                            {...register("board_exam_name")}
                                        >
                                            <option value="null">Select Board Exam</option>
                                            <option value="befak">Befak</option>
                                            <option value="haya">Haya</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="board_exam_registration" className="form-label">Board Exam Registration</label>
                                        <input
                                            type="text"                                            
                                            placeholder="Registration No"
                                            className="form-control"
                                            id="board_exam_registration"
                                            {...register("board_exam_registration")}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="board_exam_roll" className="form-label">Board Exam Roll</label>
                                        <input
                                            type="text"                                            
                                            placeholder="Roll No"
                                            className="form-control"
                                            id="board_exam_roll"
                                            {...register("board_exam_roll")}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="board_exam_result" className="form-label">Board Exam Result</label>
                                        <input
                                            type="text"                                            
                                            placeholder="GPA"
                                            className="form-control"
                                            id="board_exam_result"
                                            {...register("board_exam_result")}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*Admission Information ***********************************/}
                            <div className="admission-information mt-4">
                                <h4>Admission Information</h4>
                                <div className="row mb-3">
                                    <div className="col-md-3">
                                        <label htmlFor="admitted_department" className="form-label">Admitted Department</label>
                                        <select
                                            name="admitted_department"                                            
                                            className="form-select"
                                            id="admitted_department"
                                            {...register("admitted_department", { required: true })}
                                        >
                                            <option value=''>Choose department...</option>
                                            {
                                               departmentList && departmentList.map((department) => (
                                                    <option key={department.id} value={department.id}>{department.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.admitted_department && (
                                            <p className="text-danger">Select Department please</p>
                                        )}
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="admitted_class" className="form-label">Admitted Class</label>
                                        <select
                                            name="admitted_class"                                            
                                            className="form-select"
                                            id="admitted_class"
                                            {...register("admitted_class", { required: true })}
                                        >
                                            <option value=''>Choose class...</option>
                                            {
                                                classList.map((classData) => (
                                                    <option key={classData.id} value={classData.id}>{classData.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.admitted_class && (
                                            <p className="text-danger">Class in required !!</p>
                                        )}
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="admitted_group" className="form-label">Admitted Group</label>
                                        <select
                                            name="admitted_group"                                            
                                            className="form-select"
                                            id="admitted_group"
                                            {...register("admitted_group")}
                                        >
                                            <option value=''>Choose class...</option>
                                            {
                                                groupList.map((group) => (
                                                    <option key={group.id} value={group.id}>{group.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="admitted_shift" className="form-label">Admitted Shift</label>
                                        <select
                                            name="admitted_shift"                                            
                                            className="form-select"
                                            id="admitted_shift"
                                            {...register("admitted_shift")}
                                        >
                                            <option value=''>Choose class...</option>
                                            {
                                                shiftList.map((shift) => (
                                                    <option key={shift.id} value={shift.id}>{shift.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label htmlFor="admitted_session" className="form-label">Admitted Session</label>
                                        <select
                                            name="admitted_session"                                            
                                            className="form-select"
                                            id="admitted_session"
                                            {...register("admitted_session", { required: true })}
                                        >
                                            <option value=''>Choose class...</option>
                                            {
                                                sessionList.map((sessionData) => (
                                                    <option key={sessionData.id} value={sessionData.id}>{sessionData.actual_year}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.admitted_session && (
                                            <p className="text-danger">Session in required !!</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/*Others Information **************************************/}
                            <div className="others-information mt-4">
                                <h4>Others Information</h4>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label htmlFor="student_blood_group" className="form-label">Blood Group</label>
                                        <input
                                            type="text"                                            
                                            placeholder="Blood Group"
                                            className="form-control"
                                            id="student_blood_group"
                                            {...register("student_blood_group")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="special_body_sign" className="form-label">Special Body Sign</label>
                                        <input
                                            type="text"                                            
                                            placeholder="Special Body Identity Sign"
                                            className="form-control"
                                            id="special_body_sign"
                                            {...register("special_body_sign")}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/*Talimat**************************************************/}
                            <div className="talimi mt-4 mb-3">
                                <h4>Murobbi Selection</h4>
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col">
                                        <h5>Talimat Murobbi</h5>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="talimi_murobbi_name"
                                                    placeholder="Talimat Murobbi"
                                                    {...register("talimi_murobbi_name")}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h5>Eslahi Murobbi</h5>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="eslahi_murobbi_name"
                                                    placeholder="Eslahi Murobbi"
                                                    {...register("eslahi_murobbi_name")}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ========End Student's Previous Institute Information section ======= */}

                            <button type="submit" className="default-btn">Save Updates</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentUpdateForm;