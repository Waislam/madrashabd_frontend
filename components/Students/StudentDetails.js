import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './StudentDetails.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const StudentDetails = () => {
        return (
            <>
                <section className={styles.mainSection}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3"/>
                            <div className="col-md-9 col-lg-9 col-xl-9">
                                <h3 className={styles.mainTitle}>Student List</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <div className={styles.sidebarList}>
                                    <div className="card">
                                        <h4 className={styles.sideBarLogo}>
                                            <Image src={studentLogo} className="img-responsive"
                                                   alt="Logo missing" height={40} width={40}/>
                                        </h4>
                                        <div className="card-body p-0">
                                            <div className={styles.studentLink}>
                                                <Link href="/">
                                                    <a className="text-center">Student List</a>
                                                </Link>
                                            </div>
                                            <div className={styles.promotedLink}>
                                                <Link href="/">
                                                    <a className="text-center">Promoted List</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                                <div className="card mb-5">
                                    <div className="card-body">
                                        {/*Student Information*/}
                                        <div className="studentInformation mb-3">
                                            <h3 className="mb-2">Student Information</h3>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-9">
                                                    <div className="studentDetail">
                                                        <h6>Name of student : Jibon Ahmed</h6>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p>Birth Certificate : test</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>NID : test</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p>Date of Birth : 22-03-1996</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>Nationality : Bangladeshi</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p>Religion : Islam</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <p>Gender : PPP</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <p>Blood Group 0(+)</p>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <p>Contact : 01987132107</p>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <p>Age : 27</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-3">Image</div>
                                            </div>
                                        </div>
                                        {/*studentAddress*/}
                                        <div className="studentAddress mb-3">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <div className="presentAddress">
                                                        <h4>Present Address</h4>
                                                        <p>Address : 69/A, Dhaka, Bangladesh</p>
                                                        <p>Post Office : Dhaka</p>
                                                        <p>Post Code : Dhaka</p>
                                                        <p>P.S/Upazila : Dhaka</p>
                                                        <p>District : Dhaka</p>
                                                        <p>Division : Dhaka</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <div className="permanentAddress">
                                                        <h4>Permanent Address</h4>
                                                        <p>Address : 69/A, Dhaka, Bangladesh</p>
                                                        <p>Post Office : Dhaka</p>
                                                        <p>Post Code : Dhaka</p>
                                                        <p>P.S/Upazila : Dhaka</p>
                                                        <p>District : Dhaka</p>
                                                        <p>Division : Dhaka</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*guardiansInformation*/}
                                        <div className="guardiansInformation">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                                                    <div className="studentFatherInformation">
                                                        <h4>Father</h4>
                                                        <p>Name : Ahmed</p>
                                                        <p>Occupation : Business Man</p>
                                                        <p>NID : </p>
                                                        <p>Birth Certificate : </p>
                                                        <p>Education : </p>
                                                        <p>Contact : 01987132107</p>
                                                        <p>Email : help@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                                                    <div className="studentMotherInformation">
                                                        <h4>Mother</h4>
                                                        <p>Name : </p>
                                                        <p>Occupation : Business Man</p>
                                                        <p>NID : </p>
                                                        <p>Birth Certificate : </p>
                                                        <p>Education : </p>
                                                        <p>Contact : 0198000000</p>
                                                        <p>Email : help@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                                                    <h4>Guardian</h4>
                                                    <p>Name : Waliul Islam</p>
                                                    <p>Relation : Brother</p>
                                                    <p>Birth Certificate : </p>
                                                    <p>Occupation : Business Man</p>
                                                    <p>Yearly Income : 1k</p>
                                                    <p>Contact : 0198000000</p>
                                                    <p>Email : help@gmail.com</p>
                                                    <p>2nd contact person : </p>
                                                    <p>2nd contact relation : </p>
                                                    <p>2nd contact number : 0198000000</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Academic Information*/}
                                        <div className="academicInformation mb-3">
                                            <h4>Academic Information</h4>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p>Class : Six</p>
                                                    <p>Session : 2022</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p>Section : A</p>
                                                    <p>Class Roll : 9</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p>Group : None</p>
                                                    <p>Shift : Day</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Attendance*/}
                                        <div className="attendance mb-5">
                                            <h4 className="mb-3">Attendance</h4>
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th scope="col">Year</th>
                                                    <th scope="col">Month</th>
                                                    <th scope="col">Total Class</th>
                                                    <th scope="col">Present</th>
                                                    <th scope="col">Absent</th>
                                                    <th scope="col">Comment</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>2022</td>
                                                    <td>March</td>
                                                    <td>30</td>
                                                    <td>25</td>
                                                    <td>05</td>
                                                    <td>Bad</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
;


export default StudentDetails;




