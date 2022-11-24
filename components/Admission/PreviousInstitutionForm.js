import React, {useState} from "react";
import styles from './Admission.module.css'
import {useForm} from "react-hook-form";
import {useAdmissionFormData} from "../../context/AdmissionFormProvider";

// api call
import api, {BASE_URL} from "../../pages/api/api";
import {toast} from "react-toastify";

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const PreviousInstitutionForm = (props) => {
    const [loading, setLoading] = useState(false)
    const {nextStep, prevStep} = props

    const {setAdmissionFormValues, admissionData} = useAdmissionFormData();

    console.log(props.session.user?.madrasha_id)

    const {
        handleSubmit,
        formState: {errors},
        register,
    } = useForm({mode: "all"});


    const onSubmit = (values) => {
        setLoading(true)
        setAdmissionFormValues(values);

        const user_data = {
            "phone": admissionData.student_phone_number,
            "password": admissionData.student_phone_number,
            "password2": admissionData.student_phone_number,
            "madrasha_id": props.session.user?.madrasha_id
        }

        // create a user
        // api.post('/accounts/madrasha-admin/', JSON.stringify(user_data))
        //     .then((res) => {
        //         if (res.data.user_id) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let studentRawData = JSON.stringify({
            "user": {
                "username": values.phone_number_new,
                "first_name": values.first_name,
                "last_name": values.last_name,
                "phone": values.phone_number_new
            },
            "madrasha": props.session.user?.madrasha_id,
            "student_roll_id": getRandomNumberBetween(34, 656546543455),
            "date_of_birth": admissionData.date_of_birth,
            "age": admissionData.age,
            "birth_certificate": admissionData.birth_certificate,
            "student_nid": admissionData.student_nid,
            "passport_number": admissionData.passport_number,
            "nationality": admissionData.nationality,
            "religion": admissionData.religion,
            "gender": admissionData.gender,
            "present_address": {
                "division": parseInt(admissionData.present_address_division),
                "district": parseInt(admissionData.present_address_district),
                "thana": parseInt(admissionData.present_address_thana),
                "post_office": parseInt(admissionData.present_address_post_office),
                "post_code": parseInt(admissionData.present_address_code),
                "address_info": admissionData.student_present_address_info
            },
            "permanent_address": {
                "division": parseInt(admissionData.permanent_address_division),
                "district": parseInt(admissionData.permanent_address_district),
                "thana": parseInt(admissionData.permanent_address_thana),
                "post_office": parseInt(admissionData.permanent_address_post_office),
                "post_code": parseInt(admissionData.permanent_address_code),
                "address_info": admissionData.student_permanent_address_info
            },
            "father_info": {
                "parent_name": admissionData.parents_information_father_name,
                "parent_date_of_birth": admissionData.parents_information_father_date_of_birth,
                "occupation": admissionData.parents_information_father_occupation,
                "organization_with_designation": admissionData.parents_information_father_organization_with_designation,
                "education": admissionData.parents_information_father_education,
                "contact_number": admissionData.parents_information_father_contact,
                "parent_email": admissionData.father_email,
                "parent_nid": admissionData.parents_information_father_nid
            },
            "mother_info": {
                "parent_name": admissionData.parents_information_mother_name,
                "parent_date_of_birth": admissionData.parents_information_mother_date_of_birth,
                "parent_nid": admissionData.parents_information_mother_nid,
                "occupation": admissionData.parents_information_mother_occupation,
                "organization_with_designation": admissionData.parents_information_mother_organization_with_designation,
                "education": admissionData.parents_information_mother_education,
                "contact_number": admissionData.parents_information_mother_contact,
                "parent_email": admissionData.mother_email
            },
            "guardian_name": admissionData.guardian_name,
            "guardian_relation": admissionData.guardian_relation,
            "guardian_occupation": admissionData.guardian_occupation,
            "yearly_income": admissionData.guardian_yearly_income,
            "guardian_contact": admissionData.guardian_contact,
            "guardian_email": admissionData.guardian_email,
            "other_contact_person": admissionData.other_contact_person,
            "other_contact_person_relation": admissionData.other_contact_person_relation,
            "other_contact_person_contact": admissionData.other_contact_person_contact,
            "sibling_id": admissionData.sibling_id,
            "previous_institution_name": values.previous_institution_name,
            "previous_institution_contact": values.previous_institution_contact,
            "previous_started_at": values.previous_started_at,
            "previous_ending_at": values.previous_ending_at,
            "previous_ending_class": values.previous_ending_class,
            "previous_ending_result": values.previous_ending_result,
            "board_exam_name": values.board_exam_name,
            "board_exam_registration": values.board_exam_registration,
            "board_exam_roll": values.board_exam_roll,
            "board_exam_result": values.board_exam_result,
            "admitted_department": values.admitted_department,
            "admitted_class": values.admitted_class,
            "admitted_group": values.admitted_group,
            "admitted_shift": values.admitted_shift,
            "admitted_roll": "120",
            "admitted_session": values.admitted_session,
            "student_blood_group": values.student_blood_group,
            "special_body_sign": values.special_body_sign,
            "academic_fees": null,
            "talimi_murobbi_name": "class teacher"
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: studentRawData,
            redirect: 'follow'
        };

        fetch(`${BASE_URL}/students/${props.session.user.madrasha_slug}/`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log("data submited result", result)

                setLoading(false)
                return result && toast.success('Student has been created!')
            })
            .catch((error) => {
                console.log('error', error)
                setLoading(false)
                return toast.error('Something went wrong! Please try again!')
            })
                // } else {
                //     console.log("User is not created.")
                //     return toast.error('User is not created.')
                // }

            // })
            // .catch((err) => {
            //     console.log("user create err", err)
            // })
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    };

    return (
        <>
            <div className="previous-institution-wrap">
                <div className="card">
                    <div className="card-body">
                        <form action="#" onSubmit={handleSubmit(onSubmit)}>
                            {/*Previous Institution ************************************/}
                            <div className="previous-institution mb-5">
                                <h4>Part B</h4>
                                <h5>Previous Institution</h5>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.phone_number_new}
                                            placeholder="New phone number"
                                            className="form-control"
                                            id="phone_number_new"
                                            {...register("phone_number_new")}
                                        />
                                    </div>
                                    {errors.phone_number_new && (
                                        <p className="text-danger">Phone number is required</p>
                                    )}
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.first_name}
                                            placeholder="First name"
                                            className="form-control"
                                            id="first_name"
                                            {...register("first_name")}
                                        />
                                    </div>
                                    {errors.first_name && (
                                        <p className="text-danger">First name is required</p>
                                    )}

                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.last_name}
                                            placeholder="Last name"
                                            className="form-control"
                                            id="last_name"
                                            {...register("last_name")}
                                        />
                                    </div>
                                    {errors.last_name && (
                                        <p className="text-danger">Last name is required</p>
                                    )}
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.previous_institution_name}
                                            placeholder="Name of institution"
                                            className="form-control"
                                            id="previous_institution_name"
                                            {...register("previous_institution_name")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.previous_institution_contact}
                                            placeholder="Institution Contact Number"
                                            className="form-control"
                                            id="previous_institution_contact"
                                            {...register("previous_institution_contact")}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input
                                            type="date"
                                            defaultValue={admissionData.previous_started_at}
                                            placeholder="Start Date"
                                            className="form-control"
                                            id="previous_started_at"
                                            {...register("previous_started_at")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="date"
                                            defaultValue={admissionData.previous_ending_at}
                                            placeholder="Finished Date"
                                            className="form-control"
                                            id="previous_ending_at"
                                            {...register("previous_ending_at")}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.previous_ending_class}
                                            placeholder="Finished Class"
                                            className="form-control"
                                            id="previous_ending_class"
                                            {...register("previous_ending_class")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.previous_ending_result}
                                            placeholder="Results/Marks"
                                            className="form-control"
                                            id="previous_ending_result"
                                            {...register("previous_ending_result")}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*Board exam information **********************************/}
                            <div className="board-exam-information mb-5">
                                <h4>Board exam information</h4>
                                <div className="row">
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.board_exam_name}
                                            placeholder="Exam Name"
                                            className="form-control"
                                            id="board_exam_name"
                                            {...register("board_exam_name")}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.board_exam_registration}
                                            placeholder="Registration No"
                                            className="form-control"
                                            id="board_exam_registration"
                                            {...register("board_exam_registration")}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.board_exam_roll}
                                            placeholder="Roll No"
                                            className="form-control"
                                            id="board_exam_roll"
                                            {...register("board_exam_roll")}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.board_exam_result}
                                            placeholder="GPA"
                                            className="form-control"
                                            id="board_exam_result"
                                            {...register("board_exam_result")}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*Admission Information ***********************************/}
                            <div className="admission-information mb-5">
                                <h4>Part C</h4>
                                <h5>Admission Information</h5>
                                <div className="row mb-3">
                                    <div className="col-md-3">
                                        {/*<input*/}
                                        {/*    type="text"*/}
                                        {/*    defaultValue={admissionData.admitted_department}*/}
                                        {/*    placeholder="Department"*/}
                                        {/*    className="form-control"*/}
                                        {/*    id="admitted_department"*/}
                                        {/*    {...register("admitted_department")}*/}
                                        {/*/>*/}
                                        <select
                                            name="admitted_department"
                                            defaultValue={admissionData.admitted_department}
                                            className="form-select"
                                            id="admitted_department"
                                            {...register("admitted_department", {required: true})}
                                        >
                                            <option value=''>Choose department...</option>
                                            {
                                                props.departmentList.map((department) => (
                                                    <option value={department.id}>{department.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.admitted_department && (
                                            <p className="text-danger">Nationality is required</p>
                                        )}
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            name="admitted_class"
                                            defaultValue={admissionData.admitted_class}
                                            className="form-select"
                                            id="admitted_class"
                                            {...register("admitted_class", {required: true})}
                                        >
                                            <option value=''>Choose class...</option>
                                            {
                                                props.classList.map((classData) => (
                                                    <option value={classData.id}>{classData.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.admitted_class && (
                                            <p className="text-danger">Class in required !!</p>
                                        )}
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            name="admitted_group"
                                            defaultValue={admissionData.admitted_group}
                                            className="form-select"
                                            id="admitted_group"
                                            {...register("admitted_group", {required: true})}
                                        >
                                            <option value=''>Choose class...</option>
                                            {
                                                props.groupList.map((group) => (
                                                    <option value={group.id}>{group.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.admitted_group && (
                                            <p className="text-danger">Group in required !!</p>
                                        )}
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            name="admitted_shift"
                                            defaultValue={admissionData.admitted_shift}
                                            className="form-select"
                                            id="admitted_shift"
                                            {...register("admitted_shift", {required: true})}
                                        >
                                            <option value=''>Choose class...</option>
                                            {
                                                props.shiftList.map((shift) => (
                                                    <option value={shift.id}>{shift.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.admitted_shift && (
                                            <p className="text-danger">Shift in required !!</p>
                                        )}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <select
                                            name="admitted_session"
                                            defaultValue={admissionData.admitted_shift}
                                            className="form-select"
                                            id="admitted_session"
                                            {...register("admitted_session", {required: true})}
                                        >
                                            <option value=''>Choose class...</option>
                                            {
                                                props.sessionList.map((sessionData) => (
                                                    <option value={sessionData.id}>{sessionData.name}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.admitted_session && (
                                            <p className="text-danger">Session in required !!</p>
                                        )}
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.admitted_roll}
                                            placeholder="Class Roll"
                                            className="form-control mb-3"
                                            id="admitted_roll"
                                            {...register("admitted_roll")}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*Others Information **************************************/}
                            <div className="others-information mb-5">
                                <h4>Part D</h4>
                                <h5>Others Information</h5>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.student_blood_group}
                                            placeholder="Blood Group"
                                            className="form-control"
                                            id="student_blood_group"
                                            {...register("student_blood_group")}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            defaultValue={admissionData.special_body_sign}
                                            placeholder="Special Body Identity Sign"
                                            className="form-control"
                                            id="special_body_sign"
                                            {...register("special_body_sign")}
                                        />
                                    </div>
                                </div>
                                {/*<div className="row mb-3">*/}
                                {/*    <div className="col-md-6">*/}
                                {/*        <input*/}
                                {/*            type="text"*/}
                                {/*            defaultValue={admissionData.student_contact}*/}
                                {/*            placeholder="Contact"*/}
                                {/*            className="form-control"*/}
                                {/*            id="student_contact"*/}
                                {/*            {...register("student_contact")}*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*    <div className="col-md-6">*/}
                                {/*        <input*/}
                                {/*            type="text"*/}
                                {/*            defaultValue={admissionData.student_email}*/}
                                {/*            placeholder="E-mail"*/}
                                {/*            className="form-control"*/}
                                {/*            id="student_email"*/}
                                {/*            {...register("student_email")}*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            {/*Academic Fees *******************************************/}
                            <div className="academic-fees mb-5">
                                <h4>Part E</h4>
                                <h5>Academic Fees</h5>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <small>Food bill / boarding</small>
                                        <div className="input-group">
                                            <select className="form-select">
                                                <option selected>Percent</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <small>Monthly tution fee</small>
                                        <div className="input-group">
                                            <select className="form-select">
                                                <option selected>Percent</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <small>Scholarship</small>
                                        <div className="input-group">
                                            <select className="form-select">
                                                <option selected>Taka</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Talimat**************************************************/}
                            <div className="talimi mb-5">
                                <h4>Part E</h4>
                                <h5>Talimat Morobbi, Eslahi Mourobbi</h5>
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="input-group mb-3">
                                            <select className="form-select">
                                                <option selected>Mourobbi Name</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="student-image mb-3">
                                <h4>Student image upload</h4>
                                <input type="file" className="form-control"/>
                            </div>
                            <button className={styles.defaultBtn}>Save</button>
                            <button className={styles.defaultBtn} onClick={prevStep}>Previous Step</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

};


export default PreviousInstitutionForm;




