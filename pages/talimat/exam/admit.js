import React, {useState} from 'react'
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
    const [studentId, setStudentId] = useState('')
    const [registeredInfo, setRegisteredInfo] = useState(null)

    const getStudentRegistrationInfo = (student_id) => {
        api.get(`talimat/100/exam-registration/?search=${student_id}`)
            .then((response) => {
                console.log("response", response.data.results[0])
                setRegisteredInfo(response.data.results[0])
            })
            .catch((error) => {
                console.log("error", error.text)
            })
    }

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
                                                        <div className="row">
                                                            <h1>Inside</h1>
                                                            {
                                                                registeredInfo ?
                                                                    <div>
                                                                        <p>Student ID: {registeredInfo.student.student_id}</p>
                                                                        <p>Session: {registeredInfo.session.name}</p>
                                                                        <p>Term: {registeredInfo.exam_term.term_name}</p>
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