import styles from '../Teachertraining.module.css';
import taliamatstyles from '../../Talimat.module.css'
import SyllabusHeader from '../SyllabusHeader'
import SyllabuSideMenu from '../SyllabusSideMenu';
import {useState, useEffect} from 'react';
import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

const TeacherTrainingDetail = ({teacher_training_detail}) => {
    const componentRef = useRef();
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
                                        <h2 className="text-center">Teachers Training</h2>
                                        <hr/>
                                        <div className="sub-page p-3" ref={componentRef}>
                                            <div className="print-banner">
                                                <h6>Madrasha Name</h6>
                                                <p>Address</p>
                                            </div>
                                            <div className={styles.syllabus}>
                                                <h3 className="text-center">{teacher_training_detail?.data?.training_title}</h3>
                                                <p className="text-justify">
                                                    {teacher_training_detail?.data?.training_description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end my-2">
                                    <ReactToPrint
                                        trigger={() => <button className="btn btn-primary primary">Print this
                                            out!</button>}
                                        content={() => componentRef.current}
                                    />
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