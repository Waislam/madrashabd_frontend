import React from "react";
import styles from './Admission.module.css'

import {useForm} from "react-hook-form";
import {useAdmissionFormData} from "../../context/AdmissionFormProvider";

const StudentDetailForm = ({nextStep}) => {

    const {setAdmissionFormValues} = useAdmissionFormData()

    const {
        handleSubmit,
        formState: {errors},
        register,
    } = useForm({mode: "all"});

    const onSubmit = (values) => {
        setAdmissionFormValues(values);
    };

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    console.log("error", errors)

    // const Previous = e => {
    //     e.preventDefault();
    //     prevStep();
    // }
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

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        id="full_name"
                                        {...register("full_name", {required: true})}
                                    />
                                    {errors.full_name && (
                                        <p className="text-danger">Shipping address is required</p>
                                    )}
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <input
                                            type="name"
                                            className="form-control mb-3"
                                            placeholder="Date of Birth"
                                            id="date_of_birth"
                                            {...register("date_of_birth", {required: true})}
                                        />
                                        {errors.full_name && (
                                            <p className="text-danger">Date of birth is required</p>
                                        )}
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            type="name"
                                            className="form-control mb-3"
                                            placeholder="Age"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Birth Certificate"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Passport"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="NID"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Nationality "/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Religion"/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Gender"/>
                                    </div>
                                </div>
                            </div>
                            {/* Present Address ****************** */}
                            <div className="present mt-3">
                                <h5>Present Address</h5>
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Division "/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="District"/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Thana"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Post Office "/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Post Code"/>
                                    </div>
                                </div>
                                <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a comment here"
                                                          id="floatingTextarea"/>
                                    <label
                                        htmlFor="floatingTextarea">Village/Town/Road/House/Flat </label>
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
                                            <input className="form-check-input" type="checkbox"
                                                   value=""
                                                   id="flexCheckDefault"/>
                                            <label className="form-check-label"
                                                   htmlFor="flexCheckDefault">Save as present
                                                address
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Division "/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="District"/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Thana"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Post Office "/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="name" className="form-control mb-3"
                                               placeholder="Post Code"/>
                                    </div>
                                </div>
                                <div className="form-floating">
                                                    <textarea className="form-control"
                                                              placeholder="Leave a comment here" id="floatingTextarea"/>
                                    <label
                                        htmlFor="floatingTextarea">Village/Town/Road/House/Flat </label>
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




