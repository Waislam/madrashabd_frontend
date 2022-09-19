import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './StudentDetails.module.css'
import studentLogo from '../../public/assets/admission/students.png'
import teacher from '../../public/assets/login/teacher-2.jpg'

const StudentDetails = ({student}) => {
    console.log("student", student)
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
                                            <h4>Student Information</h4>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="row">
                                                        <div className="col-md-7">
                                                            <dl className="row">
                                                                <dt className="col-sm-6">
                                                                    Name of student
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    Maksud Reza
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Date of birth
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    5th june, 2010
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Father name
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    Sk abul kashem
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Motheer name
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    Momotaz begum
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Blood group
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    o(+)
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                        <div className="col-md-5">
                                                            <dl className="row">
                                                                <dt className="col-sm-6">
                                                                    Religion
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    Islam
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Marital status
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    Married
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Gender
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    PPP
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Contact
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    01923726372
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <Image src={teacher} className="img-responsive" width={400}
                                                           height={300}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-body pb-0">
                                            <h4>Present Address</h4>
                                            <hr/>
                                            <dl className="row">
                                                <dt className="col-sm-3">Address</dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Shiromini abashik, Shiromoni, Khulna
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Post Office
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Shiromoni
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Post Code
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    9204
                                                </dd>
                                                <dt className="col-sm-3">
                                                    P.S./Upazilla
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Fultala
                                                </dd>
                                                <dt className="col-sm-3">
                                                    District
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Khulna
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Division
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Khulna
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-body pb-0">
                                            <h4>Permanent Address</h4>
                                            <hr/>
                                            <dl className="row">
                                                <dt className="col-sm-3">Address</dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Shiromini abashik, Shiromoni, Khulna
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Post Office
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Shiromoni
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Post Code
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    9204
                                                </dd>
                                                <dt className="col-sm-3">
                                                    P.S./Upazilla
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Fultala
                                                </dd>
                                                <dt className="col-sm-3">
                                                    District
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Khulna
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Division
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    Khulna
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="guardianInformation">
                                <h4>Guardian Information</h4>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card">
                                            <div className="card-body  pb-0">
                                                <h4>Father</h4>
                                                <hr/>
                                                <dl className="row">
                                                    <dt className="col-sm-3">Name</dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        Maksud Reza
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Occupation
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        Business Man
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        NID
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        9204
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Birth Certificate
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        12345678
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Education
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        No
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Contact
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        12345678
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Email
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        no@gmail.com
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card">
                                            <div className="card-body pb-0">
                                                <h4>Mother</h4>
                                                <hr/>
                                                <dl className="row">
                                                    <dt className="col-sm-3">Name</dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        Momotaz Begum
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Occupation
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        Business Man
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        NID
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        9204
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Birth Certificate
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        12345678
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Education
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        No
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Contact
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        12345678
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Email
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        no@gmail.com
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <h4>Guardian</h4>
                                    <hr/>
                                    <div className="col-md-6 mb-4">
                                        <div className="card">
                                            <div className="card-body pb-0">
                                                <dl className="row">
                                                    <dt className="col-sm-4">Name</dt>
                                                    <dd className="col-sm-8">
                                                        <span className="mx-2">:</span>
                                                        Maksud Reza
                                                    </dd>
                                                    <dt className="col-sm-4">
                                                        Relation
                                                    </dt>
                                                    <dd className="col-sm-8">
                                                        <span className="mx-2">:</span>
                                                        Brother
                                                    </dd>
                                                    <dt className="col-sm-4">
                                                        Birth Certificate
                                                    </dt>
                                                    <dd className="col-sm-8">
                                                        <span className="mx-2">:</span>
                                                        9204122123132132
                                                    </dd>
                                                    <dt className="col-sm-4">
                                                        Occupation
                                                    </dt>
                                                    <dd className="col-sm-8">
                                                        <span className="mx-2">:</span>
                                                        Business Man
                                                    </dd>
                                                    <dt className="col-sm-4">
                                                        Yearly Income
                                                    </dt>
                                                    <dd className="col-sm-8">
                                                        <span className="mx-2">:</span>
                                                        1,0000000 Taka
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card">
                                            <div className="card-body pb-0">
                                                <dl className="row">
                                                    <dt className="col-sm-5">Contact</dt>
                                                    <dd className="col-sm-7">
                                                        <span className="mx-2">:</span>
                                                        019992323
                                                    </dd>
                                                    <dt className="col-sm-5">
                                                        Email
                                                    </dt>
                                                    <dd className="col-sm-7">
                                                        <span className="mx-2">:</span>
                                                        email@gmail.com
                                                    </dd>
                                                    <dt className="col-sm-5">
                                                        2nd Contact Person
                                                    </dt>
                                                    <dd className="col-sm-7">
                                                        <span className="mx-2">:</span>
                                                        9204122123132132
                                                    </dd>
                                                    <dt className="col-sm-5">
                                                        2nd Contact relation
                                                    </dt>
                                                    <dd className="col-sm-7">
                                                        <span className="mx-2">:</span>
                                                        Brother
                                                    </dd>
                                                    <dt className="col-sm-5">
                                                        2nd Contact number
                                                    </dt>
                                                    <dd className="col-sm-7">
                                                        <span className="mx-2">:</span>
                                                        017400000000
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="academicInformation mb-4">
                                <div className="card">
                                    <div className="card-body pb-0">
                                        <h4>Academic Information</h4>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p>Class : Six</p>
                                                <p>Session : 2022</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p>Section : A</p>
                                                <p>Class Roll : 2022</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p>Group : None</p>
                                                <p>Shift : Day</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="attendance mb-4">
                                <div className="card">
                                    <div className="card-body pb-0">
                                        <h4>Attendance</h4>
                                        <hr/>
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
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
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


export default StudentDetails;




