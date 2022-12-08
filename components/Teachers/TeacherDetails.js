import React from "react";
import Link from 'next/link';
import styles from './TeacherDetails.module.css';
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../pages/api/api";
import { console } from "next/dist/compiled/@edge-runtime/primitives/console";
import Image from "next/image";
import { useRouter } from "next/router";
import teacherImg from '../../public/assets/login/teacher-2.jpg'

const TeacherDetail = ({ teacher }) => {
    const router = useRouter()

    const { handleSubmit, register, formState: { errors }, control } = useForm()

    const onSubmit = (values) => {
        let formdata = new FormData();
        formdata.append("avatar", values.avatar[0], values.avatar[0].name);

        let requestOptions = {
            method: 'PUT',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${BASE_URL}/accounts/avatar/${teacher.data.user.id}/`, requestOptions)
            .then(response => response.text(
                router.reload()
            ))
            .then((result) => {
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <section className={styles.mainSection}>
                <div className="container">
                    <div className="row mb-3 text-end">
                        <div className="col">
                            <Link href={`/teachers/update-teacher/${teacher.data.slug}`}>
                                <a className={`btn ${styles.teacherStaffButton}`}>Update</a>
                            </Link>
                            <Link href={`/teachers/update-teacher/${teacher.data.slug}`}>
                                <a className={`btn ${styles.teacherStaffButton}`}>Print</a>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div>
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
                                                <div className="col-md-2">
                                                    <div className="text-center">
                                                        {teacher?.data?.user?.avatar ?
                                                            <img
                                                                src={`${BASE_URL}` + teacher?.data?.user?.avatar}
                                                                className="img-thumbnail"
                                                                alt="Oops image missing"
                                                                width={125}
                                                                height={130}

                                                            />
                                                            :
                                                            <Image
                                                                className="img-thumbnail"
                                                                alt="avatar2"
                                                                src={teacherImg}
                                                                width={90}
                                                                height={90}
                                                            />
                                                        }
                                                    </div>
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="form-group mb-2">
                                                            <input
                                                                className="inputfile col-md-7 ms-5"
                                                                type="file"
                                                                // style ={{display:"none"}}
                                                                id="avatar"
                                                                name='avatar'
                                                                {...register("avatar")}
                                                            />
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary mb-2 ms-5">
                                                            Save
                                                        </button>
                                                    </form>
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
                                            <hr />
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
                                            <hr />
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
                                <div className="col-md-6 mb-4">
                                    <div className="card">

                                        <div className="card-body">
                                            <h4>Contact </h4>
                                            <hr />
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
                                            <hr />
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
                                    <h4>Experience</h4>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{teacher.data.experience?.experience_name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-4">
                                    <h4>Skills </h4>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{teacher.data.skill.skill_name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card pb-0 mb-2">
                                <div className="card-body pb-0">
                                    <h4>Working Duration </h4>
                                    <hr />
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default TeacherDetail;