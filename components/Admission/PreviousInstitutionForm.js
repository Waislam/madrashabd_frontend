import React from "react";
import styles from './Admission.module.css'

const PreviousInstitutionForm = () => {
    return (
        <>
            <div className="previous-institution-wrap">
                <div className="card">
                    <div className="card-body">
                        <form action="#">
                            {/*Previous Institution ************************************/}
                            <div className="previous-institution mb-5">
                                <h4>Part B</h4>
                                <h5>Previous Institution</h5>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Name of institution"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Institution Contact Number"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Start Date"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Finished Date"
                                               className="form-control "/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Finished Class"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Results/Marks"
                                               className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            {/*Board exam information **********************************/}
                            <div className="board-exam-information mb-5">
                                <h4>Board exam information</h4>
                                <div className="row">
                                    <div className="col-md-3">
                                        <input type="text" placeholder="Exam Name"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" placeholder="Registration No"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" placeholder="Roll No"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" placeholder="GPA"
                                               className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            {/*Admission Information ***********************************/}
                            <div className="admission-information mb-5">
                                <h4>Part C</h4>
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
                                        <input type="text" placeholder="Group/Section"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <input type="text" placeholder="Session"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" placeholder="Class Roll"
                                               className="form-control mb-3"/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" placeholder="Shift"
                                               className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            {/*Others Information **************************************/}
                            <div className="others-information mb-5">
                                <h4>Part D</h4>
                                <h5>Others Information</h5>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Blood Group"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Special Body Identity Sign"
                                               className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Contact"
                                               className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="E-mail"
                                               className="form-control"/>
                                    </div>
                                </div>
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
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

};


export default PreviousInstitutionForm;




