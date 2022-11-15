import styles from './Calendar.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'
import SyllabuSideMenu from './SyllabusSideMenu';



const AcademicCalendar = () => {
    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SyllabuSideMenu />
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <SyllabusHeader />
                                        <hr />
                                        <div className="row">
                                            <div className="sub-page">
                                                <div className={styles.syllabus}>
                                                    <div className="row">
                                                        <h2 className="col-md-7 mt-1">Academic Calendar</h2>
                                                        <div className="col-md-5">
                                                            <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* === Calendar ====== */}
                                                <h1>sdlkfjlsdflkdsjf</h1>
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
}

export default AcademicCalendar;