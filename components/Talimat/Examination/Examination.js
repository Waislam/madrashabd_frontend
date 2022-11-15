import {useState} from "react";
import SideMenu from './ExamSideMenu';

import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'

import ExamAnnouncementModal from './Modal/ExamAnnouncementModal'
import ExamAnnouncementDeleteModal from "./Modal/ExamAnnouncementDeleteModal";
import ExamAnnouncementEditModal from "./Modal/ExamAnnouncmentEditModal";

import api from "../../../pages/api/api";


const ExamAnnouncement = ({examAnnouncementList, setExamAnnouncementList}) => {
    const [show, setShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [examAnnouncementId, setExamAnnouncementId] = useState(null);

    const [examAnnouncementData, setExamAnnouncementData] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // delete functionality
    const handleDeleteAnnouncementClose = () => setShowDeleteModal(false);
    const handleDeleteAnnouncementShow = () => setShowDeleteModal(true);

    const handleExamAnnouncementDelete = (examAnnouncementIdValue) => {
        setExamAnnouncementId(examAnnouncementIdValue)
        handleDeleteAnnouncementShow()

    }

    // edit functionality
    const handleEditAnnouncementClose = () => setShowEditModal(false);
    const handleEditAnnouncementShow = () => setShowEditModal(true);

    const getExamAnnouncementData = (examAnnouncementIdValue) => {
        setLoading(true)
        api.get(`/talimat/exam-announcement/detail/${examAnnouncementIdValue}/`)
            .then((response) => {
                console.log("response", response.data)
                setExamAnnouncementData(response.data.data)
                setLoading(false)
            }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }

    const handleExamAnnouncementEdit = (examAnnouncementIdValue) => {
        getExamAnnouncementData(examAnnouncementIdValue)
        setExamAnnouncementId(examAnnouncementIdValue)
        handleEditAnnouncementShow()

    }

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
                                                    <div className="row">
                                                        <h2 className="col-md-7 mt-1">Examination ExamAnnouncement</h2>
                                                        <div className="col-md-5">
                                                            <button
                                                                type="button"
                                                                className={`${styles.defaultBtn} float-md-end`}
                                                                onClick={handleShow}
                                                            >
                                                                Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead className={styles.hearderCustom}>
                                                            <tr>
                                                                <th scope="col">Exam</th>
                                                                <th scope="col">Details</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody className={styles.tbodyCustom}>
                                                            {examAnnouncementList && examAnnouncementList.map((exam) => (
                                                                <tr key={exam.id}>
                                                                    <td className="text-sm">{exam.exam_title}</td>
                                                                    <td className="text-sm">{exam.exam_description}</td>
                                                                    <td>
                                                                        <button
                                                                            type='button'
                                                                            className="btn btn-primary"
                                                                            onClick={() => handleExamAnnouncementEdit(exam.id)}

                                                                        >
                                                                            Edit
                                                                        </button>
                                                                        <button
                                                                            type='button'
                                                                            className="btn btn-danger ms-2"
                                                                            onClick={() => handleExamAnnouncementDelete(exam.id)}
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                {/* === Announcement body add ====== */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            // Exam announcement modal
            <ExamAnnouncementModal
                show={show}
                handleClose={handleClose}
            />
            <ExamAnnouncementDeleteModal
                show={showDeleteModal}
                handleClose={handleDeleteAnnouncementClose}
                examAnnouncementId={examAnnouncementId}
                setExamAnnouncementList={setExamAnnouncementList}
                examAnnouncementList={examAnnouncementList}
            />

            { !loading &&
                <ExamAnnouncementEditModal
                show={showEditModal}
                handleClose={handleEditAnnouncementClose}
                examAnnouncementId={examAnnouncementId}
                examAnnouncementData={examAnnouncementData}
            />
            }

        </>
    )
}

export default ExamAnnouncement;