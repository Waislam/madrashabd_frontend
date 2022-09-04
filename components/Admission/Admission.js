import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './Admission.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const Admission = () => {
    return (
        <>
            <section className={styles.admissionSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.admissionRightSide}>
                                <div className="card">
                                    <h4 className="text-center mt-3">
                                        <Image src={studentLogo} className="img-responsive"
                                               alt="Logo missing" height={40} width={40}/>
                                    </h4>
                                    <hr/>
                                    <div className="card-body p-0">
                                        <div className={styles.activeLink}>
                                            <Link href="/">
                                                <a className="text-center">New Student</a>
                                            </Link>
                                        </div>

                                        <div className={styles.inActiveLink}>
                                            <Link href="/">
                                                <a className="text-center">Old Student</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            {/*Student Details*/}
                            <div className="student-details">
                                <div className="card">
                                    <div className="card-body">
                                        <form action="#">
                                            {/* Student Details ****************** */}
                                            <div className="student-detail">
                                                <h4>Student Details</h4>
                                                <hr/>
                                                <input type="name" className="form-control mb-3"
                                                       placeholder="Full Name"/>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input type="name" className="form-control mb-3"
                                                               placeholder="Date of Birth"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="name" className="form-control mb-3"
                                                               placeholder="Age"/>
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
                            <br/>
                            <br/>
                            {/*parents-information **************************/}
                            <div id="parents-information-wrap">
                                <div className="card">
                                    <div className="card-body">
                                        <form action="#">
                                            {/*Parents Information ***********************************************/}
                                            <div className="parents-information">
                                                <h4>Parents Information</h4>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Father's Name"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Mother's Name"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Date of birth"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Date of birth"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Father's NID"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Mother's NID"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Father's Occupation"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Mother's Occupation"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text"
                                                               placeholder="Organization name, Designation"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text"
                                                               placeholder="Organization name, Designation"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Father's Education"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Mother's Education"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Father's Contact"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Mother's Contact"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Father's E-mail"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input type="text" placeholder="Mother's E-mail"
                                                               className="form-control mb-3"/>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*Guardian Information **********************************************/}
                                            <div className="guardian-information">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <h5 className="mt-3">Guardian Information</h5>
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
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <input type="text" placeholder="Name"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <input type="text" placeholder="Relation"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <input type="text" placeholder="Occupation"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <input type="text" placeholder="Yearly Income"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <input type="text" placeholder="Contact"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <input type="text" placeholder="E-mail"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <input type="text" placeholder="Second contact person"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <input type="text" placeholder="Relation"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <input type="text" placeholder="Number"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <input type="text" placeholder="Yearly Income"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" placeholder="Second contact person"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" placeholder="Relation"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" placeholder="Number"
                                                                   className="form-control mb-3"/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p>Siblings Information (if any)</p>
                                                            <input type="text" placeholder="Student ID"
                                                                   className="form-control mb-3"/>
                                                            <button className={styles.defaultBtn}>Next Step</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            {/*previous-institution *************************/}
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

};


export default Admission;




