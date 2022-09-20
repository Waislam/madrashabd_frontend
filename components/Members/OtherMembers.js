import styles from "./Members.module.css";
import MemberSideMenu from "./MembersSideMenu";


const OtherMembers = () =>{
    return (
        <>
            <section className={styles.settingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <MemberSideMenu/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col-md-3 mt-3">
                                                    <h2><u>Other Members</u></h2>
                                                </div>
                                                <div className="col-md-3">
                                                    <input  type="text" className="form-control" placeholder="Phone number" />
                                                </div>
                                                <div className="col-md-2">
                                                    <button  type="button" className={styles.searchButton}>Search</button>
                                                </div>
                                                <div className="col-md-4">
                                                    <button type="button" className={`${styles.defaultBtn} float-end`}>Add</button>
                                                </div>
                                            </div>
                                            <div className="books-table mt-3">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Member's Name</th>
                                                                <th scope="col">Address</th>
                                                                <th scope="col">Phone</th>
                                                                <th scope="col" className="text-center">Edit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Abdullah</td>
                                                                <td className="text-sm">dhaka dhaka</td>
                                                                <td className="text-sm">55414545</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Abdullah</td>
                                                                <td className="text-sm">dhaka dhaka</td>
                                                                <td className="text-sm">55414545</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Abdullah</td>
                                                                <td className="text-sm">dhaka dhaka</td>
                                                                <td className="text-sm">55414545</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Abdullah</td>
                                                                <td className="text-sm">dhaka dhaka</td>
                                                                <td className="text-sm">55414545</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Abdullah</td>
                                                                <td className="text-sm">dhaka dhaka</td>
                                                                <td className="text-sm">55414545</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* ========= add department form ======== */}
                                            <div className="add-class mt-4">
                                                <h2><u>Add Other Members</u></h2>
                                                <form action="#" method="POST">
                                                    <div className="row">
                                                        <div className="col-md-7 mt-4">
                                                            <input type="text" className="form-control" placeholder="Member's Name" />
                                                        </div>
                                                        <div className="col-md-7 mt-4">
                                                            <input type="text" className="form-control" placeholder="Member's Addres" />
                                                        </div>
                                                        <div className="col-md-7 mt-4">
                                                            <input type="text" className="form-control" placeholder="phone Number" />
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

export default OtherMembers;