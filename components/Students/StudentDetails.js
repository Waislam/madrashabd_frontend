import React from "react";
import Link from 'next/link'

// styles
import Image from "next/image";
import styles from './StudentDetails.module.css'

// components
import studentLogo from '../../public/assets/admission/students.png'
import teacher from '../../public/assets/login/teacher-2.jpg'
import {useForm} from "react-hook-form";
import {BASE_URL} from "../../pages/api/api";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";


const StudentDetails = ({student}) => {
    console.log("student data", student.data.user.id)
    const {handleSubmit, register, formState: {errors}, control} = useForm()

    const onSubmit = (values) => {
        let formdata = new FormData();
        formdata.append("avatar", values.avatar[0], values.avatar[0].name);

        let requestOptions = {
            method: 'PUT',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${BASE_URL}/accounts/avatar/${student.data.user.id}/`, requestOptions)
            .then(response => response.text())
            .then((result) => {
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }

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
                            <div>
                                <div className="row">
                                    <div className="col">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <h4>Student Information</h4>
                                                <hr/>
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                            <div className="mb-3">
                                                                <label htmlFor="avatar" className="form-label">
                                                                    Image upload</label>
                                                                <input
                                                                    className="form-control"
                                                                    type="file"
                                                                    id="avatar"
                                                                    name='avatar'
                                                                    {...register("avatar")}
                                                                />
                                                            </div>
                                                            <button>Save</button>
                                                        </form>
                                                        <div className="row">
                                                            <div className="col-md-7">
                                                                <dl className="row">
                                                                    <dt className="col-sm-6">
                                                                        Name of student
                                                                    </dt>
                                                                    <dd className="col-sm-6">
                                                                        <span className="mx-2">:</span>
                                                                        <span className="text-capitalize">
                                                                            {student.data.user?.username}
                                                                        </span>
                                                                    </dd>
                                                                    <dt className="col-sm-6">
                                                                        Date of birth
                                                                    </dt>
                                                                    <dd className="col-sm-6">
                                                                        <span className="mx-2">:</span>
                                                                        {student.data?.date_of_birth}
                                                                    </dd>
                                                                    <dt className="col-sm-6">
                                                                        Father name
                                                                    </dt>
                                                                    <dd className="col-sm-6">
                                                                        <span className="mx-2">:</span>
                                                                        <span className="text-capitalize">
                                                                            {student.data.father_info?.parent_name}
                                                                        </span>
                                                                    </dd>
                                                                    <dt className="col-sm-6">
                                                                        Mother name
                                                                    </dt>
                                                                    <dd className="col-sm-6">
                                                                        <span className="mx-2">:</span>
                                                                        <span className="text-capitalize">
                                                                            {student.data.mother_info?.parent_name}
                                                                        </span>
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
                                                                            className="text-capitalize">{student.data?.religion}</span>
                                                                    </dd>
                                                                    <dt className="col-sm-6">
                                                                        Gender
                                                                    </dt>
                                                                    <dd className="col-sm-6">
                                                                        <span className="mx-2">:</span>
                                                                        <span className="text-capitalize">
                                                                            {student.data?.gender}
                                                                        </span>
                                                                    </dd>
                                                                    <dt className="col-sm-6">
                                                                        Contact
                                                                    </dt>
                                                                    <dd className="col-sm-6">
                                                                        <span className="mx-2">:</span>
                                                                        {student.data.user?.phone}
                                                                    </dd>
                                                                    <dt className="col-sm-6">
                                                                        Blood group
                                                                    </dt>
                                                                    <dd className="col-sm-6">
                                                                        <span className="mx-2">:</span>
                                                                        {student.data?.student_blood_group}
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
                                                        <span className="text-capitalize">
                                                            {student.data.present_address?.address_info}
                                                            </span>
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Post Office
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.present_address?.post_office?.name}
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Post Code
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.present_address?.post_code?.name}
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        P.S./Upazilla
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.present_address?.thana?.name}
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        District
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.present_address?.district?.name}
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Division
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.present_address?.division?.name}
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
                                                        <span className="text-capitalize">
                                                            {student.data.permanent_address?.address_info}
                                                            </span>
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Post Office
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.permanent_address?.post_office?.name}
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Post Code
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.permanent_address?.post_code?.name}
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        P.S./Upazilla
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.permanent_address?.thana?.name}
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        District
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.permanent_address?.district?.name}
                                                    </dd>
                                                    <dt className="col-sm-3">
                                                        Division
                                                    </dt>
                                                    <dd className="col-sm-9">
                                                        <span className="mx-2">:</span>
                                                        {student.data.permanent_address?.division?.name}
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
                                                        <dt className="col-sm-4">Name</dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            <span className="text-capitalize">
                                                                {student.data.father_info?.parent_name}
                                                            </span>
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Occupation
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            <span className="text-capitalize">
                                                                {student.data.father_info?.occupation}
                                                            </span>
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            NID
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.father_info?.parent_nid}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Birth of Birth
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.father_info?.parent_date_of_birth}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Education
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.father_info?.education}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Contact
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.father_info?.contact_number}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Email
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.father_info?.parent_email}
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
                                                        <dt className="col-sm-4">Name</dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            <span className="text-capitalize">
                                                                {student.data.mother_info?.parent_name}
                                                            </span>
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Occupation
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            <span className="text-capitalize">
                                                                {student.data.mother_info?.occupation}
                                                            </span>
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            NID
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.mother_info?.parent_nid}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Birth of Birth
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.mother_info?.parent_date_of_birth}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Education
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.mother_info?.education}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Contact
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.mother_info?.contact_number}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Email
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.mother_info?.parent_email}
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
                                                    <dl className="row text-capitalize">
                                                        <dt className="col-sm-4">Name</dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data.guardian_name}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Relation
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data?.guardian_relation}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Occupation
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data?.guardian_occupation}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            Yearly Income
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2">:</span>
                                                            {student.data?.yearly_income}
                                                        </dd>
                                                        <dt className="col-sm-4">
                                                            <span className="mx-2"/>
                                                        </dt>
                                                        <dd className="col-sm-8">
                                                            <span className="mx-2"/>
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
                                                            {student.data?.guardian_contact}
                                                        </dd>
                                                        <dt className="col-sm-5">
                                                            Email
                                                        </dt>
                                                        <dd className="col-sm-7">
                                                            <span className="mx-2">:</span>
                                                            {student.data.guardian_email}
                                                        </dd>
                                                        <dt className="col-sm-5">
                                                            2nd Contact Person
                                                        </dt>
                                                        <dd className="col-sm-7">
                                                            <span className="mx-2">:</span>
                                                            {student.data.other_contact_person}
                                                        </dd>
                                                        <dt className="col-sm-5">
                                                            2nd Contact relation
                                                        </dt>
                                                        <dd className="col-sm-7">
                                                            <span className="mx-2">:</span>
                                                            {student.data.other_contact_person_relation}
                                                        </dd>
                                                        <dt className="col-sm-5">
                                                            2nd Contact number
                                                        </dt>
                                                        <dd className="col-sm-7">
                                                            <span className="mx-2">:</span>
                                                            {student.data.other_contact_person_contact}
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
                                            <div className="row text-capitalize">
                                                <div className="col-md-4">
                                                    <p>Class : {student.data.admitted_class?.name}</p>
                                                    <p>Session : {student.data?.admitted_session?.name}</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p>Section : No attribute found</p>
                                                    {/*<p>Class Roll : {student.data?.admitted_roll}</p>*/}
                                                </div>
                                                <div className="col-md-4">
                                                    {/*<p>Group : {student.data?.admitted_group}</p>*/}
                                                    {/*<p>Shift : {student.data?.admitted_shift}</p>*/}
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
                </div>
            </section>
        </>
    )
};


export default StudentDetails;




