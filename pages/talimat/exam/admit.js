import React, {useState} from 'react'
import Image from 'next/image';
import adminCardImage from '../../../public/assets/admit-card/sakib.jpg'
import Layout from "../../../components/Layout/Layout";

// css
import taliamatstyles from "../../../components/Talimat/Talimat.module.css";
import styles from "../../../components/Talimat/Examination/Examination.module.css";

// components
import SideMenu from "../../../components/Talimat/Examination/ExamSideMenu";
import ExamHeader from "../../../components/Talimat/Examination/ExamHeader";

// api
import api from "../../api/api";


const AdmitCard = () => {
    const [studentId, setStudentId] = useState('');
    const [registeredInfo, setRegisteredInfo] = useState(null);

    const getStudentRegistrationInfo = (student_id) => {
        api.get(`talimat/100/exam-registration/?search=${student_id}`)
            .then((response) => {
                console.log("response", response.data.results[0]);
                setRegisteredInfo(response.data.results[0])
            })
            .catch((error) => {
                console.log("error", error.text)
            })
    };


    return (
        <>
            <>
                <section className={taliamatstyles.talimatSection}>
                    <div className="container-fluid">
                        <div className="row">
                            <SideMenu/>
                            <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                                <div className="talimat">
                                    <div className="card">
                                        <div className="card-body">
                                            <ExamHeader/>
                                            <hr/>
                                            <div className="row">
                                                <div className="sub-page">
                                                    <div className={styles.exam}>
                                                        <h1>Admit Card</h1>
                                                        <div className="table-search mb-4 mt-3">
                                                            <form action="#">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="student_id"
                                                                            placeholder="Search"
                                                                            value={studentId}
                                                                            onChange={(event) => setStudentId(event.target.value)}
                                                                        />
                                                                    </div>

                                                                    <div className="col-md-2">
                                                                        <button
                                                                            type="button"
                                                                            className={styles.searchButton}
                                                                            onClick={() => getStudentRegistrationInfo(studentId)}
                                                                        >
                                                                            Search
                                                                        </button>
                                                                    </div>

                                                                </div>
                                                            </form>
                                                        </div>
                                                        <h1>Inside</h1>
                                                        {
                                                            registeredInfo ?
                                                                <div className="admit-card">
                                                                    <div className="card">
                                                                        <div className="card-body">
                                                                            <div className="row">
                                                                                <div className="col-md-9"/>
                                                                                <div className="col-md-3">
                                                                                    <div className="float-end">
                                                                                        <Image
                                                                                            src={adminCardImage}
                                                                                            alt="Picture of the author"
                                                                                            width={100}
                                                                                            height={90}
                                                                                            style={{borderRadius: 4}}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <div className="left-section mt-4">
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Student ID
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                                {registeredInfo.student.student_id}
                                                                                            </h6>
                                                                                        </div>
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Student Name
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                                {registeredInfo.student.user?.first_name}
                                                                                                {registeredInfo.student.user?.last_name}
                                                                                            </h6>
                                                                                        </div>
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Fathers Name
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                                {registeredInfo.student.father_info?.name}
                                                                                            </h6>
                                                                                        </div>
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Center Name
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                                {registeredInfo.madrasha?.name}
                                                                                            </h6>
                                                                                        </div>
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Session
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                                {registeredInfo.session.name}
                                                                                            </h6>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div className="right-section mt-4">
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Registration No
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                            </h6>
                                                                                        </div>
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Student Roll
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                                {registeredInfo.student.student_roll_id}
                                                                                            </h6>
                                                                                        </div>
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Date of birth
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                                {registeredInfo.student.date_of_birth}
                                                                                            </h6>
                                                                                        </div>
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Class Name
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                                {registeredInfo.student.admitted_class.name}
                                                                                            </h6>
                                                                                        </div>
                                                                                        <div className="mb-4">
                                                                                            <h6>
                                                                                                Term
                                                                                                <span className="mx-2">
                                                                                                    :
                                                                                                </span>
                                                                                                {registeredInfo.exam_term.term_name}
                                                                                            </h6>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className="card-issues">
                                                                                <div className="row">
                                                                                    <div className="col-md-4">
                                                                                        <h6>Date : 12-10-2022</h6>
                                                                                    </div>
                                                                                    <div className="col-md-4">
                                                                                        <h6 className="text-center">Admit
                                                                                            Card Issues Date </h6>
                                                                                    </div>
                                                                                    <div className="col-md-4">
                                                                                        <h6 className="text-center">Signature
                                                                                            Here</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr/>
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <h3 className="text-center">
                                                                                <button
                                                                                    className="btn btn-outline-secondary">
                                                                                    Print Admit Card
                                                                                </button>
                                                                            </h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <p>You are not registered yet !!</p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default AdmitCard;


AdmitCard.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};