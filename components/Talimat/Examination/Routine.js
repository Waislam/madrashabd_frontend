import SideMenu from './ExamSideMenu';
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'

const ExamRoutine = () =>{
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
                                                    <div className="col-md-6 mt-1">
                                                        <h2>Examination Routine</h2>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="register-table mt-4">
                                                        <div className="table-responsive">
                                                            <table className="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Jamat</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                        <th>Date</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>shore bekaya</td>
                                                                        <td>subject1</td>
                                                                        <td>subject2</td>
                                                                        <td>subject2</td>
                                                                        <td>subject3</td>
                                                                        <td>subject4</td>
                                                                        <td>subject5</td>
                                                                        <td>subject5</td>
                                                                        <td>subject5</td>
                                                                        <td>subject5</td>
                                                                        <td>subject5</td>
                                                                        <td>subject5</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>shore bekaya</td>
                                                                        <td>subject1</td>
                                                                        <td>subject2</td>
                                                                        <td>subject2</td>
                                                                        <td>subject3</td>
                                                                        <td>subject4</td>
                                                                        <td>subject5</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>shore bekaya</td>
                                                                        <td>subject1</td>
                                                                        <td>subject2</td>
                                                                        <td>subject2</td>
                                                                        <td>subject3</td>
                                                                        <td>subject4</td>
                                                                        <td>subject5</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="downloadButton">
                                                            <button type='button' className={styles.defaultBtn}>Download</button>
                                                    </div>  
                                                </div>
                                                {/* exam routine create form */}
                                                <div className="exam-routine-form mt-5">
                                                    <form action="#" method="POST">
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <input type="text" placeholder="Jamat" className="form-control" />
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input type="text" placeholder="date" className="form-control" />
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

export default ExamRoutine;