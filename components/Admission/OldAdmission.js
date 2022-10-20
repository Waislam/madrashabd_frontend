import React, { useEffect, useState } from "react";
import styles from './OldAdmission.module.css'
import AdmissionSidebar from './AdmissionSidebar'
import { useForm } from "react-hook-form";


const OldAdmission = ({departmentList}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // console.log("departmentList",departmentList);
    
    const onSubmit = data => console.log(data);

    return (
        <section className={styles.oldAdmissionSection}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <AdmissionSidebar/>
                    </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="admission-form">
                                    <div className="card">
                                    <div className="card-body">
                                    <div className="input-group my-3">
                                        <input type="text" className="form-control" placeholder="Input search value" aria-label="Recipient's username" aria-describedby="search-btn"/>
                                        <button className="btn btn-outline-secondary" type="button" id="search-btn">Search</button>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="part-b-admission-information mb-5">
                                            <h4>Part A</h4>
                                            <h5>Admission Information</h5>
                                            <div className="row mb-3">
                                                <div className="col-md-4">
                                                    <label htmlFor="department" className="form-label">Department</label>
                                                    <select
                                                        name="department"
                                                        className="form-select"
                                                        id="department"
                                                        {
                                                            ...register("department", {required: true})
                                                        }
                                                    >
                                                        <option value="">Select Department</option>
                                                        {
                                                            departmentList.map(department => <option
                                                                value={department.name}
                                                                >{department.name}
                                                                </option>)
                                                        }
                                                    </select>
                                                    {errors.department && (
                                                        <p className="text-danger">Department is required</p>
                                                    )}
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="class" className="form-label">Class</label>
                                                    <select
                                                        name="class"
                                                        className="form-select"
                                                        id="class"
                                                        {
                                                            ...register("class", {required: true})
                                                        }
                                                    >
                                                        <option value="">Select Class</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    {errors.class && (
                                                        <p className="text-danger">Class is required</p>
                                                    )}
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="group" className="form-label">Group</label>
                                                    <select
                                                        name="group"
                                                        className="form-select"
                                                        id="group"
                                                        {
                                                            ...register("group", {required: true})
                                                        }
                                                    >
                                                        <option value="">Select Group</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    {errors.group && (
                                                        <p className="text-danger">Group is required</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-4">
                                                    <label htmlFor="session" className="form-label">Session</label>
                                                    <select
                                                        name="session"
                                                        className="form-select"
                                                        id="session"
                                                        {
                                                            ...register("session", {required: true})
                                                        }
                                                    >
                                                        <option value="">Select Session</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    {errors.session && (
                                                        <p className="text-danger">Session is required</p>
                                                    )}
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="classRoll" className="form-label">Class Roll</label>
                                                    <input
                                                        type="text"
                                                        name="classRoll"
                                                        placeholder="Class Roll"
                                                        id="class-roll"
                                                        className="form-control"
                                                        defaultValue=""
                                                        {...register("classRoll", {required: true})}
                                                    />
                                                    {errors.classRoll && (
                                                        <p className="text-danger">Class Roll is required</p>
                                                    )}
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="shift" className="form-label">Shift</label>
                                                    <select
                                                        name="shift"
                                                        className="form-select"
                                                        id="shift"
                                                        {
                                                            ...register("shift", {required: true})
                                                        }
                                                    >
                                                        <option value="">Select Shift</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    {errors.shift && (
                                                        <p className="text-danger">Shift is required</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {/*Academic Fees*/}
                                        <div className="part-b-admission-information">
                                            <div className="academic-fees mb-4">
                                                <h4>Part B</h4>
                                                <h5>Academic Fees</h5>
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                    <label htmlFor="food-boarding" className="form-label">Food bill / boarding</label>
                                                    <input
                                                        type="text"
                                                        name="foodOrBoarding"
                                                        placeholder="Food bill / Boarding"
                                                        id="food-boarding"
                                                        className="form-control"
                                                        defaultValue=""
                                                        {...register("foodOrBoarding", {required: true})}
                                                    />
                                                    {errors.foodOrBoarding && (
                                                        <p className="text-danger">Food bill / Boarding is required</p>
                                                    )}
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="tuition" className="form-label">Monthly tuition fees</label>
                                                        <input
                                                            type="text"
                                                            name="tuition"
                                                            placeholder="Monthly tuition fees"
                                                            id="tuition"
                                                            className="form-control"
                                                            defaultValue=""
                                                            {...register("tuition", {required: true})}
                                                        />
                                                        {errors.tuition && (
                                                            <p className="text-danger">Monthly tuition fees is required</p>
                                                        )}
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="tuition" className="form-label">Scholarship</label>
                                                        <input
                                                            type="text"
                                                            name="scholarship"
                                                            placeholder="Scholarship"
                                                            id="scholarship"
                                                            className="form-control"
                                                            defaultValue=""
                                                            {...register("scholarship")}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="talimi mb-3">
                                                <h4>Part C</h4>
                                                <h5>Murubbi</h5>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <label htmlFor="talimat-murubbi" className="form-label">Talimat Murubbi</label>
                                                        <input
                                                            type="text"
                                                            name="talimatMurubbi"
                                                            placeholder="Talimat Murubbi"
                                                            id="talimat-murubbi"
                                                            className="form-control"
                                                            defaultValue=""
                                                            {...register("talimatMurubbi", {required: true})}
                                                        />
                                                        {errors.talimatMurubbi && (
                                                            <p className="text-danger">Talimat murubbi is required</p>
                                                        )}
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="eslahi-murubbi" className="form-label">Eslahi Murubbi</label>
                                                        <input
                                                            type="text"
                                                            name="eslahiMurubbi"
                                                            placeholder="Eslahi Murubbi"
                                                            id="eslahi-murubbi"
                                                            className="form-control"
                                                            defaultValue=""
                                                            {...register("eslahiMurubbi", {required: true})}
                                                        />
                                                        {errors.tuition && (
                                                            <p className="text-danger">Eslahi murubbi is required</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="student-image mb-3">
                                                <h4>Student image upload</h4>
                                                <input type="file" className="form-control"
                                                        placeholder="Upload Image Here"/>
                                            </div> */}
                                            <button className={styles.defaultBtn}>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default OldAdmission;




