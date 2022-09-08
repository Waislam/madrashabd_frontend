import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'

const ExamSeatPlan = () =>{
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
                                    <ExamHeader/>
                                    <hr/>
                                    <div className="row">
                                        <div className="sub-page">
                                            <div className={styles.exam}>
                                                <h2>Examination Seat Plan</h2>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" placeholder="Select class" />
                                                            <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                                                <span className="visually-hidden">toggle dropdown</span>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a className="dropdown-item" href="#">Class 1</a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#">Class 2</a>
                                                                </li>
                                                            </ul>            
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <button type="button" className={`${styles.searchButton}`}>Search</button>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <button type="button" className={`${styles.defaultBtnReg} float-md-end`}>Add</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Building name</th>
                                                                    <th>Room Number</th>
                                                                    <th>Total column</th>
                                                                    <th>Bench per column</th>
                                                                    <th>Student per bench</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Madani Building</td>
                                                                    <td>105</td>
                                                                    <td>2</td>
                                                                    <td>10</td>
                                                                    <td>2</td>
                                                                    <td>edit/add student</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Madani Building</td>
                                                                    <td>105</td>
                                                                    <td>2</td>
                                                                    <td>10</td>
                                                                    <td>2</td>
                                                                    <td>edit/studen</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Madani Building</td>
                                                                    <td>105</td>
                                                                    <td>2</td>
                                                                    <td>10</td>
                                                                    <td>2</td>
                                                                    <td>edit/add student</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div>
                                                        <button type="button" className={`${styles.defaultBtn}`}>Download</button>
                                                    </div>
                                                </div>
                                                {/* exam Seat Plan form */}
                                                <div className="add-seat-plan mt-5">
                                                    <form action="#" method="POST">
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <input type="text" className="form-control" placeholder="Building name"/>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <input type="text" className="form-control" placeholder="Room Number"/>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <input type="text" className="form-control" placeholder="total column"/>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <input type="text" className="form-control" placeholder="total bench per column"/>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <input type="text" className="form-control" placeholder="student per bench"/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button type="submit" className={styles.defaultBtn}>Save</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* add student form */}
                                                <div className="add-student-t0-column mt-5">
                                                    <h2>Add student form</h2>
                                                    <form action="#" method="POST">
                                                        <div className="row">
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="select column" />
                                                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">class 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">class 2</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="select left/right" />
                                                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">class 1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">class 2</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="select class" />
                                                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item">1</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item">2</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <button type="button" className={styles.defaultBtn}>Show Reg Number</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* addd register number to st form */}
                                                <div className="add-regNumber mt-5">
                                                    <h2>Register Number add page</h2>
                                                    <div className="reg-number-table">
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th><input class="form-check-input" type="checkbox" /></th>
                                                                    <th>Registration Number</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><input type="checkbox" className="form-check-input me-2" id="regCheckBox" /></td>
                                                                    <td><label className="form-check-label" for="regCheckBox">146141646984</label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input type="checkbox" className="form-check-input me-2" id="regCheckBox" /></td>
                                                                    <td><label className="form-check-label" for="regCheckBox">146141646984</label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input type="checkbox" className="form-check-input me-2" id="regCheckBox" /></td>
                                                                    <td><label className="form-check-label" for="regCheckBox">146141646984</label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input type="checkbox" className="form-check-input me-2" id="regCheckBox" /></td>
                                                                    <td><label className="form-check-label" for="regCheckBox">146141646984</label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input type="checkbox" className="form-check-input me-2" id="regCheckBox" /></td>
                                                                    <td><label className="form-check-label" for="regCheckBox">146141646984</label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input type="checkbox" className="form-check-input me-2" id="regCheckBox" /></td>
                                                                    <td><label className="form-check-label" for="regCheckBox">146141646984</label></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input type="checkbox" className="form-check-input me-2" id="regCheckBox" /></td>
                                                                    <td><label className="form-check-label" for="regCheckBox">146141646984</label></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div>
                                                            <button type="submit" className={`${styles.defaultBtn}`}>Save</button>
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
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default ExamSeatPlan;