import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './TeacherDetails.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const TeacherDetail = ({teacher}) => {

    return (
        <>
            <section className={styles.mainSection}>
                <div className="container-fluid">
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
                                                            <dl className="row">
                                                                <dt className="col-sm-6">
                                                                    Name of teacher/stuff
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    {teacher.data.user.first_name}
                                                                    <span
                                                                        className="mx-1">{teacher.data.user.last_name}</span>
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Date of birth
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    {teacher.data.date_of_birth}
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Father name
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    {teacher.data.father_name}
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Mother name
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    {teacher.data.mother_name}
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Blood group
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    {teacher.data.blood_group}
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
                                                                    <span
                                                                        className="text-capitalize">{teacher.data.religion}</span>
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Marital status
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    <span className="text-capitalize">
                                                                        {teacher.data.marital_status}
                                                                    </span>
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Gender
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    <span className="text-capitalize">
                                                                        {teacher.data.gender}
                                                                    </span>
                                                                </dd>
                                                                <dt className="col-sm-6">
                                                                    Contact
                                                                </dt>
                                                                <dd className="col-sm-6">
                                                                    <span className="mx-2">:</span>
                                                                    {teacher.data.user.phone}
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
                                        <div className="card-body">
                                            <h4>Present Address</h4>
                                            <hr/>
                                            <dl className="row">
                                                <dt className="col-sm-3">Address</dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    <span className="text-capitalize">
                                                        {teacher.data.present_address?.address_info}
                                                    </span>
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Post Office
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.present_address?.post_office.name}
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Post Code
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.present_address?.post_code.name}
                                                </dd>
                                                <dt className="col-sm-3">
                                                    P.S./Upazilla
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.present_address?.thana.name}
                                                </dd>
                                                <dt className="col-sm-3">
                                                    District
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.present_address?.district.name}
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Division
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.present_address?.division.name}
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>Permanent Address</h4>
                                            <hr/>
                                            <dl className="row">
                                                <dt className="col-sm-3">Address</dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    <span className="text-capitalize">
                                                        {teacher.data.permanent_address?.address_info}
                                                    </span>
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Post Office
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.permanent_address?.post_office.name}
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Post Code
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.permanent_address?.post_code.name}
                                                </dd>
                                                <dt className="col-sm-3">
                                                    P.S./Upazilla
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.permanent_address?.thana.name}
                                                </dd>
                                                <dt className="col-sm-3">
                                                    District
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.permanent_address?.district.name}
                                                </dd>
                                                <dt className="col-sm-3">
                                                    Division
                                                </dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.permanent_address?.division.name}
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h4 className="mb-2">Education</h4>
                                <div className="col mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="table-responsive">
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
                                                        <td>{teacher.data.education.institution_name}</td>
                                                        <td>{teacher.data.education.degree_name}</td>
                                                        <td>{teacher.data.education.passing_year}</td>
                                                        <td>{teacher.data.education.result}</td>
                                                        <td>-----------</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <h4>Experience </h4>
                                    <p># In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                        used to demonstrate the visual form of a document
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-4">
                                    <h4>Skills </h4>
                                    <p>{teacher.data.skill.skill_name}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card">

                                        <div className="card-body">
                                            <h4>Contact </h4>
                                            <hr/>
                                            <dl className="row">
                                                <dt className="col-sm-4">Phone</dt>
                                                <dd className="col-sm-8">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.user.phone}
                                                </dd>
                                                <dt className="col-sm-4">Phone Home</dt>
                                                <dd className="col-sm-8">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.phone_home}
                                                </dd>
                                                <dt className="col-sm-4">Email</dt>
                                                <dd className="col-sm-8">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.user.email}
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4>Others information</h4>
                                            <hr/>
                                            <dl className="row">
                                                <dt className="col-sm-3">NID</dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.nid}
                                                </dd>

                                                <dt className="col-sm-3">Birth:</dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    {teacher.data.date_of_birth}
                                                </dd>
                                                <dt className="col-sm-3">Nationality</dt>
                                                <dd className="col-sm-9">
                                                    <span className="mx-2">:</span>
                                                    <span className="text-capitalize">
                                                        {teacher.data.nationality}
                                                    </span>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card pb-0 mb-2">
                                <div className="card-body pb-0">
                                    <h4>Working Duration </h4>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                                            <p>
                                                <span className="mx-2">Starting date : </span>
                                                {teacher.data.starting_date}
                                            </p>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
                                            <p>
                                                <span className="mx-2">Ending date : </span>
                                                {teacher.data.ending_date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col">
                                    <button type="submit" className={styles.teacherStaffButton}>Edit</button>
                                    <button type="submit" className={styles.teacherStaffButton}>Print</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default TeacherDetail;