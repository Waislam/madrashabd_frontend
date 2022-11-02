import SideMenu from './ExamSideMenu';
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'
import {useState} from "react";

// Modals
import RegistrationCreateModal from "./RegistrationModal/RegistrationModalCreate";

const ExamARegistration = (props) => {
    const {examRegistrationList, classList, termList} = props

    const [registrationModalShow, setRegistrationModalShow] = useState(false);

    const handleRegistrationModalClose = () => setRegistrationModalShow(false);
    const handleRegistrationModalShow = () => setRegistrationModalShow(true);

    return (
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
                                                    <h2>Examination Registration</h2>
                                                    <div className="table-search mb-4 mt-3">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <input type="text" className="form-control"
                                                                           placeholder="Search"/>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control"
                                                                               placeholder="Exam Term"/>
                                                                        <button type="button"
                                                                                className="btn btn-outline-secondary  dropdown-toggle dropdown-toggle-split"
                                                                                data-bs-toggle="dropdown">
                                                                            <span className="visually-hidden">Toggle Dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className="dropdown-item" href="#">Term
                                                                                    1</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className="dropdown-item" href="#">Term
                                                                                    2</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="input-group">
                                                                        <input
                                                                            type="text" className="form-control"
                                                                            placeholder="Class"
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                            data-bs-toggle="dropdown"
                                                                        >
                                                                            <span className="visually-hidden">Toggle Dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className="dropdown-item" href="#">Name
                                                                                    1</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className="dropdown-item" href="#">Name
                                                                                    2</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <button type="submit"
                                                                            className={styles.searchButton}>Search
                                                                    </button>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <button
                                                                        type="button"
                                                                        className={`${styles.defaultBtnReg}`}
                                                                        onClick={handleRegistrationModalShow}
                                                                    >
                                                                        Register
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="row">
                                                        <div className="register-table">
                                                            <div className="table-responsive">
                                                                <table className="table table-striped">
                                                                    <thead>
                                                                    <tr>
                                                                        <th>St id</th>
                                                                        <th>St Name</th>
                                                                        <th>Father Name</th>
                                                                        <th>Class</th>
                                                                        <th>Exam Term</th>
                                                                        <th>Fees Amount tk</th>
                                                                        <th>Status</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {examRegistrationList.results.map((examRegistration) => (
                                                                        <tr key={examRegistration.id}>
                                                                            <td>{examRegistration.student.student_id}</td>
                                                                            <td>{examRegistration.student?.user.first_name}</td>
                                                                            <td>{examRegistration.exam_term.term_name}</td>
                                                                            <td>{examRegistration.student.admitted_class.name}</td>
                                                                            <td>{examRegistration.exam_term.term_name}</td>
                                                                            <td>{examRegistration.amount}</td>
                                                                            <td>{examRegistration.is_registered ? "Pain" : "Unpaid"}</td>
                                                                        </tr>
                                                                    ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="downloadButton">
                                                            <button type='button'
                                                                    className={styles.defaultBtn}>Download
                                                            </button>
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
                </div>
            </section>

            // all modals
            <RegistrationCreateModal
                show={registrationModalShow}
                handleClose={handleRegistrationModalClose}
                classList={classList}
                termList={termList}
            />
        </>
    )
}

export default ExamARegistration;