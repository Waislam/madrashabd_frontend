import styles from "./Setting.module.css";
import SettingSideMenu from "./SettingSideMenu";

const Sessions = () =>{
    return (
        <>
            <section className={styles.settingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <SettingSideMenu/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2><u>Eduction Sessions</u></h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className={`${styles.defaultBtn} float-end`}>Add</button>
                                                </div>
                                            </div>
                                            <div className="books-table mt-3">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Session year</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col" className="text-center">Edit Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">2021-2022</td>
                                                                <td className="text-sm">Inactive</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">2022-2023</td>
                                                                <td className="text-sm">active</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">2023-2024</td>
                                                                <td className="text-sm">Inactive</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* ========= add department form ======== */}
                                            <div className="add-class mt-4">
                                                <h2><u>Add Educaion year</u></h2>
                                                <form action="#" method="POST">
                                                    <div className="row">
                                                        <div className="col-md-7 mt-4">
                                                            <input type="text" className="form-control" placeholder="Session Year" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 mt-3">
                                                        <button type="submit" className={styles.defaultBtn}>Save</button>
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
            </section>
        </>
    )
}

export default Sessions;