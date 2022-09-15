import React from "react";
import styles from './OldAdmission.module.css'
import AdmissionSidebar from './AdmissionSidebar'


const OldAdmission = () => {
    return (
        <div>
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
                                        <form action="#">
                                            <div className="part-b-admission-information mb-5">
                                                <h4>Part A</h4>
                                                <h5>Admission Information</h5>
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <input type="text" placeholder="Department"
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="text" placeholder="Class"
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="text"
                                                               placeholder="Group / Section"
                                                               className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <input type="text" placeholder="Session"
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="text" placeholder="Class Roll"
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="text" placeholder="Shift"
                                                               className="form-control"/>
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
                                                            <small>Food bill / boarding</small>
                                                            <div className="input-group mb-3">
                                                                <select className="form-select">
                                                                    <option selected>Percent
                                                                    </option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <small>Monthly tution fee</small>
                                                            <div className="input-group mb-3">
                                                                <select className="form-select">
                                                                    <option selected>Percent
                                                                    </option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <small>Scholarship</small>
                                                            <div className="input-group mb-3">
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
                                                <div className="talimi mb-3">
                                                    <h4>Part C</h4>
                                                    <h4>Talimat Morobbi, Eslahi Mourobbi</h4>
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <div className="input-group mb-3">
                                                                <select className="form-select">
                                                                    <option selected>Mourobbi Name
                                                                    </option>
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
                                                    <input type="file" className="form-control"
                                                           placeholder="Upload Image Here"/>
                                                </div>
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
        </div>
    )

};


export default OldAdmission;




