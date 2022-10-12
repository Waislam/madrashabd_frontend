import SideMenu from './ExamSideMenu';;
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'

const ExamAnnouncement = () =>{
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
                                                        <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className={`${styles.textBox} p-3`}>
                                                        <p>
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                                            It has survived not only five centuries, but also the leap into electronic typesetting,
                                                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                                                            Letraset sheets containing Lorem Ipsum passages, and more recently with 
                                                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                        </p>
                                                    </div>
                                                    <div className={`${styles.customButton} col-md-12`}>
                                                        <button type="button" className={styles.defaultBtn}>Downoad Pdf</button>
                                                    </div>
                                                </div>
                                                <div className={styles.trainingAdd}>
                                                    <form action="#" method="POST">
                                                        <div className="row">
                                                            <textarea></textarea>
                                                            <button type="submit" className={`${styles.defaultBtn} my-3`}>Save</button>
                                                        </div>
                                                    </form>
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
            
        </>
    )
}

export default ExamAnnouncement;