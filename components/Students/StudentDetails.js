import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './StudentDetails.module.css'
import studentLogo from '../../public/assets/admission/students.png'
import teacher from '../../public/assets/login/teacher-2.jpg'

const StudentDetails = () => {
        return (
            <>
                <section className={styles.mainSection}>
                    <div className="container-fluid">
                        <h3 className={styles.mainTitle}>Student List</h3>
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
                                <div className="row">
                                    <div className="col">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <div className="row">
                                                            <div className="col-md-7">
                                                                <ul className="list-unstyled">
                                                                    <li className="list-item mb-2">
                                                                        Name of teacher/stuff
                                                                        <span className="mx-2">:</span>
                                                                        Maksud Reza
                                                                    </li>
                                                                    <li className="list-item mb-2">
                                                                        Date of birth
                                                                        <span className="mx-2">:</span>
                                                                        5th june, 2010
                                                                    </li>
                                                                    <li className="list-item mb-2">
                                                                        Father name
                                                                        <span className="mx-2">:</span>
                                                                        Sk abul kashem
                                                                    </li>
                                                                    <li className="list-item mb-2">
                                                                        Motheer name
                                                                        <span className="mx-2">:</span>
                                                                        Momotaz begum
                                                                    </li>
                                                                    <li className="list-item mb-2">
                                                                        Blood group
                                                                        <span className="mx-2">:</span>
                                                                        o(+)
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <ul className="list-unstyled">
                                                                    <li className="list-item mb-2">
                                                                        Religion
                                                                        <span className="mx-2">:</span>
                                                                        Islam
                                                                    </li>
                                                                    <li className="list-item mb-2">
                                                                        Marital status
                                                                        <span className="mx-2">:</span>
                                                                        Married
                                                                    </li>
                                                                    <li className="list-item mb-2">
                                                                        Gender
                                                                        <span className="mx-2">:</span>
                                                                        PPP
                                                                    </li>
                                                                    <li className="list-item mb-2">
                                                                        Contact
                                                                        <span className="mx-2">:</span>
                                                                        01923726372
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Image src={teacher} className="img-responsive"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card">
                                            <h4 className="card-header">Present Address</h4>
                                            <div className="card-body">
                                                <h5>Hello</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card">
                                            <h4 className="card-header">Present Address</h4>
                                            <div className="card-body">
                                                <h5>Hello</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th scope="row">Institution Name</th>
                                                        <th scope="col">Degree</th>
                                                        <th scope="col">Session</th>
                                                        <th scope="col">Result (GPA)</th>
                                                        <th scope="col">Result (marks)</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Cantonment public collage</td>
                                                        <td>Hsc</td>
                                                        <td>08-09</td>
                                                        <td>GPA</td>
                                                        <td>-----------</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cantonment public collage</td>
                                                        <td>Hsc</td>
                                                        <td>08-09</td>
                                                        <td>GPA</td>
                                                        <td>-----------</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cantonment public collage</td>
                                                        <td>Hsc</td>
                                                        <td>08-09</td>
                                                        <td>GPA</td>
                                                        <td>-----------</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <h4>Experience </h4>
                                        <p># In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-4">
                                        <h4>Skills </h4>
                                        <p># In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
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




