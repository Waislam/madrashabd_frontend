import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'
import SyllabuSideMenu from './SyllabusSideMenu';


const SyllabusCreationDetails = ({syllabus_detail}) => {

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
                                            <div className="sub-page">
                                                <h3 className="text-center">Syllabus Creation Details</h3>
                                                <hr/>
                                                <div className="col">
                                                    <h4>{syllabus_detail?.data?.session_year}</h4>
                                                    <p>{syllabus_detail?.data?.syllabus_details}</p>
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

export default SyllabusCreationDetails;