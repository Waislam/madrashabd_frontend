import Link from 'next/link';
import styles from './TeacherAndStaffResponsibility.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'
import SyllabuSideMenu from './SyllabusSideMenu';

const TeacherAndStaffResponsibility = () =>{
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
                                            <div className={styles.syllabus}>
                                                <h2>Syllabus Creation</h2>
                                                <div className="search-table mt-2">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-md-5 my-3">
                                                                <input type="text" className="form-control" placeholder="input search item"/>
                                                            </div>
                                                            <div className="col-md-2 my-3">
                                                                <button type="submit" className={styles.searchButton}>Search</button>
                                                            </div>
                                                            <div className="col-md-5 my-3">
                                                                <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="responsibility-table">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Designation</th>
                                                                    <th>Responsiblity</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Waliul Islam</td>
                                                                    <td>Khadem </td>
                                                                    <td>Back and call to all Teacher</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Waliul Islam</td>
                                                                    <td>Khadem </td>
                                                                    <td>Back and call to all Teacher</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Waliul Islam</td>
                                                                    <td>Khadem </td>
                                                                    <td>Back and call to all Teacher</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Waliul Islam</td>
                                                                    <td>Khadem </td>
                                                                    <td>Back and call to all Teacher</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="button" className={styles.defaultBtn}>Download pdf</button>
                                                </div>
                                            </div>
                                            {/* === add Responsibility start ====== */}
                                            <div className="responsiblity-add mt-4">
                                                <form action="#" method="POST">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <input type="text" className="form-control" placeholder="Staf/Teacher Name" />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <input type="text" className="form-control" placeholder="Designation" />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <input type="text" className="form-control" placeholder="Responsiblity" />
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
            </section>
            
        </>
    )
}

export default TeacherAndStaffResponsibility;