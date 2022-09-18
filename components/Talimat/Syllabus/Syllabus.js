import Link from 'next/link';
import styles from './Syllabus.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'

const Syllabus = () =>{
    return (
        <>
            <section className={taliamatstyles.talimatSection}>
                <div className="container-fluid">
                    <div className="row">
                        <Talimat/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <SyllabusHeader/>
                                        <hr/>
                                        <div className="row">
                                            <div className="sub-page">
                                                <div className={styles.syllabus}>
                                                    <h2>Book distribution to Teacher</h2>
                                                    <div className="styllabus-table">
                                                        <div className={`${styles.searchTable} mb-5`}>
                                                            <form action="#">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <input type="text" className="form-control" placeholder="Search" />
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <button type="submit" className={styles.searchButton}>Search</button>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <button type="button" className={`${styles.defaultBtn}`}>Add</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="table-responsive">
                                                                <table className="table table-striped">
                                                                    <thead className={styles.hearderCustom}>
                                                                        <tr>
                                                                            <th scope="col">Teacher</th>
                                                                            <th scope="col">Kitab Name</th>
                                                                            <th scope="col">Class</th>
                                                                            <th scope="col">Class Time</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className={styles.tbodyCustom}>
                                                                        <tr>
                                                                            <td className="text-sm">Waliul Islam</td>
                                                                            <td className="text-sm">Bokhari part 1</td>
                                                                            <td className="text-sm">Dawra</td>
                                                                            <td className="text-sm">7.45 am</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-sm">Waliul Islam</td>
                                                                            <td className="text-sm">Bokhari part 1</td>
                                                                            <td className="text-sm">Dawra</td>
                                                                            <td className="text-sm">7.45 am</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-sm">Waliul Islam</td>
                                                                            <td className="text-sm">Bokhari part 1</td>
                                                                            <td className="text-sm">Dawra</td>
                                                                            <td className="text-sm">7.45 am</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                        </div>
                                                        <div className="downloadButton">
                                                                <button type='button' className={styles.defaultBtn}>Download</button>
                                                        </div>
                                                    </div>

                                                    {/* ========= add syllabus start =========== */}
                                                    <div className="syllabus-add-form mt-5">
                                                        <form action="#" method="POST">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <input type="text" placeholder="Teacher Name" className="form-control" />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input type="text" placeholder="Kitab Name" className="form-control" />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input type="text" placeholder="Class Name" className="form-control" />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input type="text" placeholder="Class Time" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <button type="submit" className={`${styles.defaultBtn} my-3`}>Save</button>
                                                        </form>
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
}

export default Syllabus;