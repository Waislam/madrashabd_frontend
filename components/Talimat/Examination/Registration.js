import SideMenu from './ExamSideMenu';
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'

const ExamARegistration = () =>{
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
                                                    <h2>Examination Registration</h2>
                                                    <div className="table-search mb-4 mt-3">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <input type="text" className="form-control" placeholder="Search" />
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control" placeholder="Exam Term" />
                                                                        <button type="button" className="btn btn-outline-secondary  dropdown-toggle dropdown-toggle-split"
                                                                            data-bs-toggle="dropdown">
                                                                            <span className="visually-hidden">Toggle Dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className="dropdown-item" href="#">Term 1</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className="dropdown-item" href="#">Term 2</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control" placeholder="Class" />
                                                                        <button type="button" className="btn btn-outline-secondary  dropdown-toggle dropdown-toggle-split"
                                                                            data-bs-toggle="dropdown">
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
                                                                <div className="col-md-2">
                                                                    <button type="submit" className={styles.searchButton}>Search</button>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <button type="button" className={`${styles.defaultBtnReg}`}>Register</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="row">
                                                        <div className="register-table">
                                                            <div className="table-responsive">
                                                                <table className="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>St id</th>
                                                                            <th>St Name</th>
                                                                            <th>Father Name</th>
                                                                            <th>Class</th>
                                                                            <th>Exam Term</th>
                                                                            <th>Fees Amount tk</th>
                                                                            <th>Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>st101</td>
                                                                            <td>Student Name</td>
                                                                            <td>Father Name</td>
                                                                            <td>Current Class</td>
                                                                            <td>2nd Term</td>
                                                                            <td>500</td>
                                                                            <td>Paid</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>st101</td>
                                                                            <td>Student Name</td>
                                                                            <td>Father Name</td>
                                                                            <td>Current Class</td>
                                                                            <td>2nd Term</td>
                                                                            <td>500</td>
                                                                            <td>Paid</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>st101</td>
                                                                            <td>Student Name</td>
                                                                            <td>Father Name</td>
                                                                            <td>Current Class</td>
                                                                            <td>2nd Term</td>
                                                                            <td>500</td>
                                                                            <td>Paid</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="downloadButton">
                                                                <button type='button' className={styles.defaultBtn}>Download</button>
                                                        </div>  
                                                    </div>
                                                    {/* exam register form */}
                                                    <div className="exam-register-form mt-5">
                                                        <form action="#" method="POST">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <input type="text" placeholder="st id" className="form-control" />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input type="text" placeholder="exam term" className="form-control" />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <input type="text" placeholder="Class" className="form-control" />
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <input type="text" placeholder="Amount" className="form-control" />
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <input type="text" placeholder="status" className="form-control" />
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

export default ExamARegistration;