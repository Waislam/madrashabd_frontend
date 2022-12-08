import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';
import taliamatstyles from '../Talimat.module.css'
import styles from './Examination.module.css'
import PrintBanner from '../../PrintBanner/PrintBanner'

// components
import ExamHeader from './ExamHeader'
import SideMenu from './ExamSideMenu';

const ExamAnnouncementDetails = ({exam_announcement}) => {
    const componentRef = useRef();
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
                                            <div className="print-container" ref={componentRef}>
                                                <PrintBanner data="Exam Announcement Details"/>
                                                <h4 className="text-center">{exam_announcement?.data?.exam_title}</h4>
                                                <p className="text-justify">
                                                    {exam_announcement?.data?.exam_description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center my-2">
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

export default ExamAnnouncementDetails;