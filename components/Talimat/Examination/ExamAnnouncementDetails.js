import taliamatstyles from '../Talimat.module.css'
import styles from './Examination.module.css'

// components
import ExamHeader from './ExamHeader'
import SideMenu from './ExamSideMenu';

const ExamAnnouncementDetails = ({exam_announcement}) => {

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
                                            <h3 className="text-center">Exam Announcement Details</h3>
                                            <hr/>
                                            <div className="sub-page">
                                                <div className={styles.exam}>
                                                    <div className="row">
                                                        <div className="col mt-1">
                                                            <h4>{exam_announcement?.data?.exam_title}</h4>
                                                            <p className="text-justify">
                                                                {exam_announcement?.data?.exam_description}
                                                            </p>
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
        </>
    )
};

export default ExamAnnouncementDetails;