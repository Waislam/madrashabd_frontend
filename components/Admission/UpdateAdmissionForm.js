import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updateStudentDetail } from "../../pages/api/StudentAPI/students_api";
import styles from './OldAdmission.module.css'

const UpdateAdmissionForm = ({madrashaData, studentDetails}) => {
    // Destructuring madrashaData
    const {departmentList, classes, groups, sessionList, shifts} = madrashaData;
    const {data: session} = useSession()

    // Set form default value
    const formDefaultValues = {
        admitted_department: studentDetails.admitted_department?.id,
        admitted_class: studentDetails.admitted_class?.id,
        admitted_group: studentDetails.admitted_group?.id,
        admitted_session: studentDetails.admitted_session?.id,
        student_roll_id: studentDetails.student_roll_id,
        admitted_shift: studentDetails.admitted_shift?.id,
        food_bill_percent: studentDetails.academic_fees?.food_bill_percent,
        monthly_tution_percent: studentDetails.academic_fees?.monthly_tution_percent,
        scholarship_amount: studentDetails.academic_fees?.scholarship_amount,
        eslahi_murobbi_name: studentDetails.eslahi_murobbi_name,
        talimi_murobbi_name: studentDetails.talimi_murobbi_name,
    }

    console.log('@@ eslahi', studentDetails.eslahi_murobbi_name)

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: formDefaultValues
    });

    // Function for update student details
    const handleUpdateStudent = data => {
        const updatedData = {
            // user: studentDetails?.user?.id,
            madrasha: session.user.madrasha_id,
            student_id: studentDetails?.student_id,
            student_roll_id: data?.student_roll_id,
            date_of_birth: studentDetails?.date_of_birth,
            age: studentDetails?.age,
            birth_certificate: studentDetails?.birth_certificate,
            student_nid: studentDetails?.student_nid,
            passport_number: studentDetails?.passport_number,
            nationality: studentDetails?.nationality,
            religion: studentDetails?.religion,
            gender: studentDetails?.gender,
            present_address: {
                id: studentDetails?.present_address?.id,
                division: studentDetails?.present_address?.division?.pk,
                district: studentDetails?.present_address?.district?.pk,
                thana: studentDetails?.present_address?.thana?.pk,
                post_office: studentDetails?.present_address?.post_office?.pk,
                post_code: studentDetails?.present_address?.post_code?.pk,
                address_info: studentDetails?.present_address?.address_info,
            },
            permanent_address: {
                id: studentDetails?.permanent_address?.id,
                division: studentDetails?.permanent_address?.division?.pk,
                district: studentDetails?.permanent_address?.district?.pk,
                thana: studentDetails?.permanent_address?.thana?.pk,
                post_office: studentDetails?.permanent_address?.post_office?.pk,
                post_code: studentDetails?.permanent_address?.post_code?.pk,
                address_info: studentDetails?.permanent_address?.address_info,
            },
            father_info: {
                id: studentDetails?.father_info?.id,
                parent_name: studentDetails?.father_info?.parent_name,
                parent_date_of_birth: studentDetails?.father_info?.parent_date_of_birth,
                parent_nid: studentDetails?.father_info?.parent_nid,
                occupation: studentDetails?.father_info?.occupation,
                organization_with_designation: studentDetails?.father_info?.organization_with_designation,
                education: studentDetails?.father_info?.education,
                contact_number: studentDetails?.father_info?.contact_number,
                parent_email: studentDetails?.father_info?.parent_email,
            },
            mother_info: {
                id: studentDetails?.mother_info?.id,
                parent_name: studentDetails?.mother_info?.parent_name,
                parent_date_of_birth: studentDetails?.mother_info?.parent_date_of_birth,
                parent_nid: studentDetails?.mother_info?.parent_nid,
                occupation: studentDetails?.mother_info?.occupation,
                organization_with_designation: studentDetails?.mother_info?.organization_with_designation,
                education: studentDetails?.mother_info?.education,
                contact_number: studentDetails?.mother_info?.contact_number,
                parent_email: studentDetails?.mother_info?.parent_email,
            },
            guardian_name: studentDetails?.guardian_name,
            guardian_relation: studentDetails?.guardian_relation,
            guardian_occupation: studentDetails?.guardian_occupation,
            yearly_income: studentDetails?.yearly_income,
            guardian_contact: studentDetails?.guardian_contact,
            guardian_email: studentDetails?.guardian_email,
            other_contact_person: studentDetails?.other_contact_person,
            other_contact_person_relation: studentDetails?.other_contact_person_relation,
            other_contact_person_contact: studentDetails?.other_contact_person_contact,
            sibling_id: studentDetails?.sibling_id,
            previous_institution_name: studentDetails?.previous_institution_name,
            previous_institution_contact: studentDetails?.previous_institution_contact,
            previous_started_at: studentDetails?.previous_started_at,
            previous_ending_at: studentDetails?.previous_ending_at,
            previous_ending_class: studentDetails?.previous_ending_class,
            previous_ending_result: studentDetails?.previous_ending_result,
            board_exam_name: studentDetails?.board_exam_name,
            board_exam_registration: studentDetails?.board_exam_registration,
            board_exam_roll: studentDetails?.board_exam_roll,
            board_exam_result: studentDetails?.board_exam_result,
            admitted_department: data?.admitted_department,
            admitted_class: data?.admitted_class,
            admitted_group: data?.admitted_group,
            admitted_shift: data?.admitted_shift,
            admitted_roll: data?.admitted_roll,
            admitted_session: data?.admitted_session,
            // student_blood_group: "A0+",
            special_body_sign: null,
            academic_fees: null,
            talimi_murobbi_name: data?.talimi_murobbi_name,
            eslahi_murobbi_name: data?.eslahi_murobbi_name,
            slug: data?.slug
        }
        updateStudentDetail(studentDetails.student_id, updatedData)
            .then(data =>  data.status && toast.success(
                `Student information is successfully updated!`,
                    {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    }
                ))
            .catch(error => console.log(error));
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <form onSubmit={handleSubmit(handleUpdateStudent)}>
                    <div className="part-b-admission-information mb-5">
                        <h4>Part A</h4>
                        <h5>Admission Information</h5>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="admitted_department" className="form-label">Department</label>
                                <select
                                    name="admitted_department"
                                    className="form-select"
                                    id="admitted_department"
                                    {
                                        ...register("admitted_department", {required: true})
                                    }
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
                                {errors.admitted_department && (
                                    <p className="text-danger">Department is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="admitted_class" className="form-label">Class</label>
                                <select
                                    name="admitted_class"
                                    className="form-select"
                                    id="admitted_class"
                                    {
                                        ...register("admitted_class", {required: true})
                                    }
                                >
                                    <option value="">Select Class</option>
                                    {
                                        classes.map(NameOfClass => <option
                                            key={NameOfClass.id}
                                            value={NameOfClass.id}
                                            >{NameOfClass.name}
                                            </option>)
                                    }
                                </select>
                                {errors.admitted_class && (
                                    <p className="text-danger">Class is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="admitted_group" className="form-label">Group</label>
                                <select
                                    name="admitted_group"
                                    className="form-select"
                                    id="admitted_group"
                                    {
                                        ...register("admitted_group", {required: true})
                                    }
                                >
                                    <option value="">Select Group</option>
                                    {
                                        groups.map(group => <option
                                            key={group.id}
                                            value={group.id}
                                            >{group.name}
                                            </option>)
                                    }
                                </select>
                                {errors.admitted_group && (
                                    <p className="text-danger">Group is required</p>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="admitted_session" className="form-label">Session</label>
                                <select
                                    name="admitted_session"
                                    className="form-select"
                                    id="admitted_session"
                                    {
                                        ...register("admitted_session", {required: true})
                                    }
                                >
                                    <option value="">Select Session</option>
                                    {
                                        sessionList.map(session => <option
                                            key={session.id}
                                            value={session.id}
                                            >{session.actual_year}
                                            </option>)
                                    }
                                </select>
                                {errors.admitted_session && (
                                    <p className="text-danger">Session is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="student_roll_id" className="form-label">Class Roll</label>
                                <input
                                    type="text"
                                    name="student_roll_id"
                                    placeholder="Class Roll"
                                    id="student_roll_id"
                                    className="form-control"
                                    {...register("student_roll_id", {required: true})}
                                />
                                {errors.student_roll_id && (
                                    <p className="text-danger">Class Roll is required</p>
                                )}
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="admitted_shift" className="form-label">Shift</label>
                                <select
                                    name="admitted_shift"
                                    className="form-select"
                                    id="admitted_shift"
                                    {
                                        ...register("admitted_shift", {required: true})
                                    }
                                >
                                    <option value="">Select Shift</option>
                                    {
                                        shifts.map(shifts => <option
                                            key={shifts.id}
                                            value={shifts.id}
                                            >{shifts.name}
                                            </option>)
                                    }
                                </select>
                                {errors.admitted_shift && (
                                    <p className="text-danger">Shift is required</p>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Academic Fees*/}
                    <div className="part-b-admission-information">
                        {/* <div className="academic-fees mb-4">
                            <h4>Part B</h4>
                            <h5>Academic Fees</h5>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                <label htmlFor="food_bill_percent" className="form-label">Food bill / boarding</label>
                                <input
                                    type="text"
                                    name="food_bill_percent"
                                    placeholder="Food bill / Boarding"
                                    id="food_bill_percent"
                                    className="form-control"
                                    defaultValue=""
                                    {...register("food_bill_percent", {required: true})}
                                />
                                {errors.food_bill_percent && (
                                    <p className="text-danger">Food bill / Boarding is required</p>
                                )}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="monthly_tution_percent" className="form-label">Monthly tuition fees</label>
                                    <input
                                        type="text"
                                        name="monthly_tution_percent"
                                        placeholder="Monthly tuition fees"
                                        id="monthly_tution_percent"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("monthly_tution_percent", {required: true})}
                                    />
                                    {errors.monthly_tution_percent && (
                                        <p className="text-danger">Monthly tuition fees is required</p>
                                    )}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="scholarship_amount" className="form-label">Scholarship</label>
                                    <input
                                        type="text"
                                        name="scholarship_amount"
                                        placeholder="Scholarship"
                                        id="scholarship_amount"
                                        className="form-control"
                                        defaultValue=""
                                        {...register("scholarship_amount")}
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div className="talimi mb-3">
                            <h4>Part C</h4>
                            <h5>Murubbi</h5>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="talimi_murobbi_name" className="form-label">Talimat Murubbi</label>
                                    <input
                                        type="text"
                                        name="talimi_murobbi_name"
                                        placeholder="Talimat Murubbi"
                                        id="talimi_murobbi_name"
                                        className="form-control"
                                        {...register("talimi_murobbi_name", {required: true})}
                                    />
                                    {errors.talimi_murobbi_name && (
                                        <p className="text-danger">Talimat murubbi is required</p>
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="eslahi_murobbi_name" className="form-label">Eslahi Murubbi</label>
                                    <input
                                        type="text"
                                        name="eslahi_murobbi_name"
                                        placeholder="Eslahi Murubbi"
                                        id="eslahi_murobbi_name"
                                        className="form-control"
                                        {...register("eslahi_murobbi_name", {required: true})}
                                    />
                                    {errors.eslahi_murobbi_name && (
                                        <p className="text-danger">Eslahi murubbi is required</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="student-image mb-3">
                            <h4>Student image upload</h4>
                            <input type="file" className="form-control"
                                    placeholder="Upload Image Here"/>
                        </div>
                        <button className={styles.defaultBtn}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateAdmissionForm;