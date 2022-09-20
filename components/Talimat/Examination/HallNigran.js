import SideMenu from './ExamSideMenu';
import taliamatstyles from '../Talimat.module.css'
import ExamHeader from './ExamHeader'
import styles from './Examination.module.css'

const HallNigran = () =>{
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
                                                    <h2 className="col-md-6"><u>Hall Nigranir Detail</u></h2>
                                                    <div className="col-md-6">
                                                        <button type="button" className={`${styles.defaultBtn} float-md-end`} >Add</button>
                                                    </div>
                                                </div>
                                                <div className="nigrani-table mt-4">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date</th>
                                                                    <th>Chief of Nigran</th>
                                                                    <th>Assistant Nigran</th>
                                                                    <th>Room/Hall</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th>09/10/2022</th>
                                                                    <th>Hazrat Ji</th>
                                                                    <th>Amader teacher</th>
                                                                    <th>9</th>
                                                                </tr>
                                                                <tr>
                                                                    <th>09/10/2022</th>
                                                                    <th>Hazrat Ji</th>
                                                                    <th>Amader teacher</th>
                                                                    <th>9</th>
                                                                </tr>
                                                                <tr>
                                                                    <th>09/10/2022</th>
                                                                    <th>Hazrat Ji</th>
                                                                    <th>Amader teacher</th>
                                                                    <th>9</th>
                                                                </tr>
                                                                <tr>
                                                                    <th>09/10/2022</th>
                                                                    <th>Hazrat Ji</th>
                                                                    <th>Amader teacher</th>
                                                                    <th>9</th>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="button" className={styles.defaultBtn} >download</button>
                                                </div>
                                            </div>
                                            <div className="add-hall-nigran mt-5">
                                                <form action="#" method="POST">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="date" />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="Chief of Nigran Name" />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="Assitant Nigran/s" />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input type="text" className="form-control" placeholder="Room/Hall number" />
                                                        </div>
                                                        <div className="mt-3">
                                                            <button type="submit" className={styles.defaultBtn}>Save</button>
                                                        </div>
                                                    </div>
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

export default HallNigran;