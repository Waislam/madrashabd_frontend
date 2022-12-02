import SideMenu from './ExamSideMenu';
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'

const ExamPaperMonitoring = () =>{
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
                                                    <h2 className="col-md-6"><u>Answer Paper Monitoring</u></h2>
                                                    <h1>Comming Soon.....</h1>
                                                    {/* <div className="col-md-6">
                                                        <button type="button" className={`${styles.defaultBtn} float-md-end`} >Add</button>
                                                    </div> */}
                                                </div>
                                                {/* <div className="motoring-table">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Subject</th>
                                                                    <th>Examinar Name</th>
                                                                    <th>Designation</th>
                                                                    <th>Phone Number</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Bukhari part-1</td>
                                                                    <td>Mawlna....</td>
                                                                    <td>Muhaddis</td>
                                                                    <td>012484684654</td>
                                                                    <td><button type="button" className={`${styles.defaultBtn} float-md-end`}>download format</button></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Bukhari part-1</td>
                                                                    <td>Mawlna....</td>
                                                                    <td>Muhaddis</td>
                                                                    <td>012484684654</td>
                                                                    <td><button type="button" className={`${styles.defaultBtn} float-md-end`}>download format</button></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Bukhari part-1</td>
                                                                    <td>Mawlna....</td>
                                                                    <td>Muhaddis</td>
                                                                    <td>012484684654</td>
                                                                    <td><button type="button" className={`${styles.defaultBtn} float-md-end`}>download format</button></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Bukhari part-1</td>
                                                                    <td>Mawlna....</td>
                                                                    <td>Muhaddis</td>
                                                                    <td>012484684654</td>
                                                                    <td><button type="button" className={`${styles.defaultBtn} float-md-end`}>download format</button></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div> */}
                                                {/* <div>
                                                    <button type="button" className={styles.defaultBtn}> download</button>
                                                </div> */}
                                                {/* add motor list */}
                                                {/* <div className="add-moitors mt-5">
                                                    <form action="#" method="POST">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control" placeholder="Subject Name" />
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control" placeholder="Teacher Name" />
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control" placeholder="Designation" />
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control" placeholder="Phone Number" />
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <button type="submit" className={styles.defaultBtn}>Save</button>
                                                        </div>
                                                    </form>
                                                </div> */}
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

export default ExamPaperMonitoring;