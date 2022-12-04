import { useState } from "react";
import taliamatstyles from '../Talimat.module.css'
import styles from './Examination.module.css'
import Link from 'next/link'
import ExamAnnouncementModal from './Modal/ExamAnnouncementModal'
import ExamAnnouncementDeleteModal from "./Modal/ExamAnnouncementDeleteModal";
import ExamAnnouncementEditModal from "./Modal/ExamAnnouncmentEditModal";
import SideMenu from './ExamSideMenu';
import ExamHeader from './ExamHeader'
import api from "../../../pages/api/api";


const ExamAnnouncement = ({ examAnnouncementList, setExamAnnouncementList }) => {
    const [show, setShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [examAnnouncementId, setExamAnnouncementId] = useState(null);

    const [examAnnouncementData, setExamAnnouncementData] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // delete functionality
    const handleDeleteAnnouncementClose = () => setShowDeleteModal(false);
    const handleDeleteAnnouncementShow = () => setShowDeleteModal(true);

    const handleExamAnnouncementDelete = (examAnnouncementIdValue) => {
        setExamAnnouncementId(examAnnouncementIdValue);
        handleDeleteAnnouncementShow()

    };

    // edit functionality
    const handleEditAnnouncementClose = () => setShowEditModal(false);
    const handleEditAnnouncementShow = () => setShowEditModal(true);

    const getExamAnnouncementData = (examAnnouncementIdValue) => {
        setLoading(true);
        api.get(`/talimat/exam-announcement/detail/${examAnnouncementIdValue}/`)
            .then((response) => {
                setExamAnnouncementData(response.data.data);
                setLoading(false)
            }).catch((error) => {
                console.log(error);
                setLoading(false)
            })
    };

    const handleExamAnnouncementEdit = (examAnnouncementIdValue) => {
        getExamAnnouncementData(examAnnouncementIdValue);
        setExamAnnouncementId(examAnnouncementIdValue);
        handleEditAnnouncementShow()
    };

    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SideMenu />
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <ExamHeader />
                                        <hr />
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
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">ID</th>
                                                                    <th scope="col">Exam</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col" className="text-center">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {examAnnouncementList && examAnnouncementList.map((exam, index) => (
                                                                    <tr key={exam.id}>
                                                                        <th scope="row">{index + 1}</th>
                                                                        <td>{exam.exam_title}</td>
                                                                        <td>{exam.exam_description}</td>
                                                                        <td className="text-end">
                                                                            <button
                                                                                type='button'
                                                                                className="btn btn-primary primary"
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
                                                                            <Link
                                                                                href={`/talimat/exam/announcement/${exam.id}`}>
                                                                                <a className="btn btn-secondary primary ms-2 ms-2">Details</a>
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
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

            {!loading &&
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