import Link from 'next/link';
import styles from './Createsyllabus.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import SyllabusHeader from './SyllabusHeader'

const SyllabusCreation = () =>{
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
                                                <h2>Syllabus Creation</h2>
                                                <div className="search-table">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-md-3 mb-3 px-0 ms-2">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="Department"/>
                                                                    <button type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <span className="visually-hidden">Toggle Dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">Name 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">Name 2</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 mb-3 px-0 ms-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="Class"/>
                                                                    <button type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <span className="visually-hidden">Toggle Dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">Class 1</a>
                                                                        </li>
                                                                        <li><
                                                                            a className="dropdown-item" href="#">Class 2</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 mb-3">
                                                                <button type="submit" className={styles.searchButton}>Search</button>
                                                            </div>
                                                            <div className="col-md-3 mb-3">
                                                                <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="syllabus-table">
                                                    <div class="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Kitab Name</th>
                                                                    <th>First Term</th>
                                                                    <th>Second Term</th>
                                                                    <th>Third Term</th>
                                                                    <th>Session</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Bokhari Sharif</td>
                                                                    <td>description </td>
                                                                    <td>description</td>
                                                                    <td>description</td>
                                                                    <td>2022-2023</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Bokhari Sharif</td>
                                                                    <td>description </td>
                                                                    <td>description</td>
                                                                    <td>description</td>
                                                                    <td>2022-2023</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Bokhari Sharif</td>
                                                                    <td>description </td>
                                                                    <td>description</td>
                                                                    <td>description</td>
                                                                    <td>2022-2023</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="button" className={styles.defaultBtn}>Download pdf</button>
                                                </div>
                                            </div>
                                            {/* === add syllabus start ====== */}
                                            <div className="add-syllabus mt-5">
                                                <form action="#" method="POST">
                                                    <div className="row">
                                                        <div className="col-md-3 mb-3">
                                                            <input type="text" className="form-control" placeholder="Department" />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="Class" />
                                                            </div>
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="Kitab Name" />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="First Term" />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="Second" />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="Third" />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="Session" />
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

export default SyllabusCreation;