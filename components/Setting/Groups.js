import styles from "./Setting.module.css";
import SettingSideMenu from "./SettingSideMenu";


const Groups = () =>{
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
                                                    <h2><u>Class' Group</u></h2>
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
                                                                <th scope="col">Group Name</th>
                                                                <th scope="col">Class</th>
                                                                <th scope="col">Department</th>
                                                                <th scope="col" className="text-center">Edit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Goup-1</td>
                                                                <td className="text-sm">Dar-ul Hadis</td>
                                                                <td className="text-sm">Jamat khana</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Goup-1</td>
                                                                <td className="text-sm">Dar-ul Hadis</td>
                                                                <td className="text-sm">Jamat khana</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Goup-1</td>
                                                                <td className="text-sm">Dar-ul Hadis</td>
                                                                <td className="text-sm">Jamat khana</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Goup-1</td>
                                                                <td className="text-sm">Dar-ul Hadis</td>
                                                                <td className="text-sm">Jamat khana</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* ========= add department form ======== */}
                                            <div className="add-class mt-4">
                                                <h2><u>Add Group</u></h2>
                                                <form action="#" method="POST">
                                                    <div className="row">
                                                        <div className="col-md-7 mt-4">
                                                            <input type="text" className="form-control" placeholder="Name of group" />
                                                        </div>
                                                        <div className="col-md-7 mt-3">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="Select department" />
                                                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                                                    <span className="visually-hidden">Toggle dropdown</span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item">department 1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item">department 1</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7 mt-3">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="Select Class" />
                                                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                                                    <span className="visually-hidden">Toggle dropdown</span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item">Class 1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item">Class 2</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
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

export default Groups;