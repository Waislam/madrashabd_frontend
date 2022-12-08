import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'
import SyllabuSideMenu from './SyllabusSideMenu';
import PrintBanner from '../../PrintBanner/PrintBanner'


const SyllabusCreationDetails = ({syllabus_detail}) => {
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
                                        <h3 className="text-center mb-2">Syllabus Creation Details</h3>
                                        <hr/>
                                        <div className="print-container" ref={componentRef}>
                                            <PrintBanner data="Syllabus Creation Details"/>
                                            <div className="p-2">
                                                <h4 className="text-center">{syllabus_detail?.data?.session_year}</h4>
                                                <p className="text-justify">{syllabus_detail?.data?.syllabus_details}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center my-2">
                                    <ReactToPrint
                                        trigger={() => <button className="btn btn-primary primary">Print </button>}
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

export default SyllabusCreationDetails;