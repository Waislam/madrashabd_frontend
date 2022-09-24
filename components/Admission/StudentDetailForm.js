import React from "react";
import styles from './Admission.module.css'

import {useForm} from "react-hook-form";
import {useAdmissionFormData} from "../../context/AdmissionFormProvider";

const StudentDetailForm = ({nextStep}) => {
    const {setAdmissionFormValues, admissionData} = useAdmissionFormData();

    console.log('admissionData', admissionData);

    const {
        handleSubmit,
        formState: {errors},
        register,
    } = useForm({mode: "all"});

    const onSubmit = (values) => {
        setAdmissionFormValues(values);
        nextStep();
    };

    const Continue = e => {
        e.preventDefault();
        nextStep();
    };

    console.log("error", errors);

    return (
        <>
            <div className="student-details">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Student Details ****************** */}
                            <div className="student-detail">
                                <h4>Student Details</h4>
                                <hr/>
                                <div className="mb-4">
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                            id="full_name"
                                            {...register("full_name", {required: true})}
                                        />
                                    </div>
                                    <div>
                                        {errors.full_name && (
                                            <p className="text-danger">Full Name is required</p>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Date of Birth"
                                                id="date_of_birth"
                                                {...register("date_of_birth", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.date_of_birth && (
                                                <p className="text-danger">Date of birth is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="name"
                                                className="form-control"
                                                placeholder="Age"
                                                id="age"
                                                {...register("age", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.age && (
                                                <p className="text-danger">Age is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Birth Certificate"
                                                id="birth_certificate"
                                                {...register("birth_certificate", {required: true})}
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
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Passport"
                                                id="passport_number"
                                                {...register("passport_number", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.passport_number && (
                                                <p className="text-danger">Passport Number is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="NID"
                                                id="student_nid"
                                                {...register("student_nid", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.student_nid && (
                                                <p className="text-danger">NID is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nationality"
                                            id="nationality"
                                            {...register("nationality", {required: true})}
                                        />
                                        {errors.nationality && (
                                            <p className="text-danger">Nationality is required</p>
                                        )}
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="name"
                                                className="form-control"
                                                placeholder="Religion"
                                                id="religion"
                                                {...register("religion", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.religion && (
                                                <p className="text-danger">Religion is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Gender"
                                                id="gender"
                                                {...register("gender", {required: true})}
                                            />
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
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Division"
                                                id="present_address_division"
                                                {...register("present_address_division", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.present_address_division && (
                                                <p className="text-danger">Division is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="name"
                                                className="form-control"
                                                placeholder="District"
                                                id="present_address_district"
                                                {...register("present_address_district", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.present_address_district && (
                                                <p className="text-danger">District is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="name"
                                                className="form-control"
                                                placeholder="Thana"
                                                id="present_address_thana"
                                                {...register("present_address_thana", {required: true})}
                                            />
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
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Post Office"
                                                id="present_address_post_office"
                                                {...register("present_address_post_office", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.present_address_post_office && (
                                                <p className="text-danger">Post Office is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <input
                                                type="name"
                                                className="form-control"
                                                placeholder="Post Code"
                                                id="present_address_post_code"
                                                {...register("present_address_post_code", {required: true})}
                                            />
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
                                        <textarea
                                            className="form-control"
                                            placeholder=" Village/Town/Road/House/Flat"
                                            id="village_town_road_house_flat"
                                            {...register("village_town_road_house_flat", {required: false})}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Permanent Address ****************** */}
                            <div className="permanent-address mt-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5 className="mt-3">Permanent Address</h5>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="form-check mt-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefault">
                                                Save as present address
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Division"
                                                id="permanent_address_division"
                                                {...register("permanent_address_division", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.permanent_address_division && (
                                                <p className="text-danger">Division is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4  mb-4">
                                        <div>
                                            <input
                                                type="name"
                                                className="form-control"
                                                placeholder="District"
                                                id="permanent_address_district"
                                                {...register("permanent_address_district", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.permanent_address_district && (
                                                <p className="text-danger">District is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div>
                                            <input
                                                type="name"
                                                className="form-control"
                                                placeholder="Thana"
                                                id="permanent_address_thana"
                                                {...register("permanent_address_thana", {required: true})}
                                            />
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
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Post Office"
                                                id="permanent_address_post_office"
                                                {...register("permanent_address_post_office", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.permanent_address_post_office && (
                                                <p className="text-danger">Post Office is required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div>
                                            <input
                                                type="name"
                                                className="form-control"
                                                placeholder="Post Code"
                                                id="permanent_address_post_code"
                                                {...register("permanent_address_post_code", {required: true})}
                                            />
                                        </div>
                                        <div>
                                            {errors.permanent_address_post_code && (
                                                <p className="text-danger">Post Code is required</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Village/Town/Road/House/Flat"
                                        id="floatingTextarea"
                                    />
                                    <label htmlFor="floatingTextarea">
                                        Village/Town/Road/House/Flat
                                    </label>
                                </div>
                            </div>
                            <button className={styles.defaultBtn}>Next Step</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

};


export default StudentDetailForm;




