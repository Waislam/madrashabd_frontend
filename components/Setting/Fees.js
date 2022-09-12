import Link from "next/link";
import Image from "next/image";
import styles from "./Setting.module.css";
import studentLogo from '../../public/assets/admission/students.png'
const Fees = () =>{
    return (
        <>
            <section className={styles.settingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.settingRightSide}>
                                <div className="card">
                                    <h4 className="text-center mt-3">
                                        <Image src={studentLogo} className="img-responsive" alt="missing img" height={40} width={40} />
                                    </h4>
                                    <hr/>
                                    <div className="card-body p-0">
                                        <div className="left-menu">
                                            <div className={styles.inActiveLink}>
                                                <Link href="/setting">
                                                    <a className="ps-5">Department</a>
                                                </Link>
                                            </div>
                                            <div className={styles.inActiveLink}>
                                                <Link href="/setting/designation">
                                                    <a className="ps-5">Post/Designation</a>
                                                </Link>
                                            </div>
                                            <div className={styles.inActiveLink}>
                                                <Link href="/setting/classs">
                                                    <a className="ps-5">Class</a>
                                                </Link>
                                            </div>
                                            <div className={styles.inActiveLink}>
                                                <Link href="/setting/books">
                                                    <a className="ps-5">Books</a>
                                                </Link>
                                            </div>
                                            <div className={styles.inActiveLink}>
                                                <Link href="/setting/session">
                                                    <a className="ps-5">Session</a>
                                                </Link>
                                            </div>
                                            <div className={styles.inActiveLink}>
                                                <Link href="/setting/groups">
                                                    <a className="ps-5">Group</a>
                                                </Link>
                                            </div>
                                            <div className={styles.inActiveLink}>
                                                <Link href="/setting/shift">
                                                    <a className="ps-5">Shift</a>
                                                </Link>
                                            </div>
                                            <div className={styles.activeLink}>
                                                <Link href="/setting/fees">
                                                    <a className="ps-5">Fees</a>
                                                </Link>
                                            </div>
                                            <div className={styles.inActiveLink}>
                                                <Link href="/setting/exam-rules">
                                                    <a className="ps-5">Examination Rules</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2><u>Different Fees</u></h2>
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
                                                                <th scope="col">Fees Name</th>
                                                                <th scope="col">Class</th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col" className="text-center">Edit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Monthly Fees</td>
                                                                <td className="text-sm">Dar-ul Hadis</td>
                                                                <td className="text-sm">500</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Boarding Fees</td>
                                                                <td className="text-sm">Dar-ul Hadis</td>
                                                                <td className="text-sm">500</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Monthly Fees</td>
                                                                <td className="text-sm">Dar-ul Hadis</td>
                                                                <td className="text-sm">500</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="text-sm">Boarding Fees</td>
                                                                <td className="text-sm">Dar-ul Hadis</td>
                                                                <td className="text-sm">500</td>
                                                                <td className="p-0"><button type="button" className={`${styles.editButton} float-md-end`}>Edit</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* ========= add department form ======== */}
                                            <div className="add-class mt-4">
                                                <h2><u>Add Shift</u></h2>
                                                <form action="#" method="POST">
                                                    <div className="row">
                                                        <div className="col-md-7 mt-4">
                                                            <input type="text" className="form-control" placeholder="Fees Name" />
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
                                                        <div className="col-md-7 mt-4">
                                                            <input type="text" className="form-control" placeholder="Amount" />
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

export default Fees;