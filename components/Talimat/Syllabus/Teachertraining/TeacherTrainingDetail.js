import styles from '../Teachertraining.module.css';
import taliamatstyles from '../../Talimat.module.css'
import SyllabusHeader from '../SyllabusHeader'
import SyllabuSideMenu from '../SyllabusSideMenu';
import {useState, useEffect} from 'react';

const TeacherTrainingDetail = ({teacher_training_detail}) => {

    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SyllabuSideMenu/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <SyllabusHeader/>
                                        <hr/>
                                        <div className="row">
                                            <h2 className="text-center">Teachers Training</h2>
                                            <hr/>
                                            <div className="sub-page">
                                                <div className={styles.syllabus}>
                                                    <div className="row">
                                                        <div className="col">
                                                            <h3 className="text-center">{teacher_training_detail?.data?.training_title}</h3>
                                                            <p className="text-justify">
                                                                {teacher_training_detail?.data?.training_description}
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

export default TeacherTrainingDetail;