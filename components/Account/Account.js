import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './Account.module.css'
import studentLogo from '../../public/assets/admission/students.png'
import icon from '../../public/assets/login/icon.png'

const Account = () => {
    return (
        <div>
            <section className={styles.accountListSection}>
                <div className="container-fluid">
                    <h3 className={styles.accountListTitle}>Accounts</h3>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.listRightSide}>
                                <div className="card">
                                    <h4 className="text-center mt-3">
                                        <Image src={studentLogo} className="img-responsive"
                                               alt="Logo missing" height={40} width={40}/>
                                    </h4>
                                    <hr/>
                                    <div className="card-body p-0">
                                        <div className={styles.activeLink}>
                                            <Link href="/">
                                                <a className="text-center">Income</a>
                                            </Link>
                                        </div>

                                        <div className={styles.inActiveLink}>
                                            <Link href="/">
                                                <a className="text-center">Expense</a>
                                            </Link>
                                        </div>
                                        <div className={styles.inActiveLink}>
                                            <Link href="/">
                                                <a className="text-center">Payment</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="income">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="receiveMoney mb-4">
                                            <h4>Receive Money</h4>
                                            <hr/>
                                            <form action="" method="POST">
                                                <div className="row">
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="subcategory"
                                                            className="form-control"
                                                            placeholder="Category"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="subcategory"
                                                            className="form-control"
                                                            placeholder="Sub Category"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="amount"
                                                            className="form-control"
                                                            placeholder="Amount"

                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="date"
                                                            className="form-control"
                                                            placeholder="Date"

                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="subcategory"
                                                            className="form-control"
                                                            placeholder="Category"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="subcategory"
                                                            className="form-control"
                                                            placeholder="Sub Category"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="amount"
                                                            className="form-control"
                                                            placeholder="Amount"

                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="date"
                                                            className="form-control"
                                                            placeholder="Date"

                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckChecked"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexCheckChecked">
                                                        Case of student payment
                                                    </label>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="category"
                                                            className="form-control"
                                                            placeholder="Category"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="subcategory"
                                                            className="form-control"
                                                            placeholder="Sub Category"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="amount"
                                                            className="form-control"
                                                            placeholder="Amount"

                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="date"
                                                            className="form-control"
                                                            placeholder="Date"

                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="student_id"
                                                            className="form-control"
                                                            placeholder="Student ID"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="subcategory"
                                                            className="form-control"
                                                            placeholder="Purpose"
                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="month"
                                                            className="form-control"
                                                            placeholder="Month"

                                                        />
                                                    </div>
                                                    <div className="col-md-3 mb-4">
                                                        <input
                                                            type="text"
                                                            name="status"
                                                            className="form-control"
                                                            placeholder="status"

                                                        />
                                                    </div>
                                                </div>
                                                <button type="submit" className={`${styles.submitBtn}`}>Submit</button>
                                                <button type="submit" className={`${styles.printBtn} mx-4`}>Print
                                                </button>
                                            </form>
                                        </div>
                                        <div className={`${styles.instituteName} mb-4`}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="institute">
                                                        <dl className="row">
                                                            <dt className="col-sm-4">Student ID</dt>
                                                            <dd className="col-sm-8">
                                                                <span className="mx-2">:</span>
                                                                102
                                                            </dd>
                                                            <dt className="col-sm-4">Student Name :</dt>
                                                            <dd className="col-sm-8">
                                                                <span className="mx-2">:</span>
                                                                Masuk Ahmed
                                                            </dd>
                                                            <dt className="col-sm-4">Class </dt>
                                                            <dd className="col-sm-8">
                                                                <span className="mx-2">:</span>
                                                                Six
                                                            </dd>
                                                            <dt className="col-sm-4">Purpose </dt>
                                                            <dd className="col-sm-8">
                                                                <span className="mx-2">:</span>
                                                                Tuition Free
                                                            </dd>
                                                            <dt className="col-sm-4">Month </dt>
                                                            <dd className="col-sm-8">
                                                                <span className="mx-2">:</span>
                                                                July
                                                            </dd>
                                                            <dt className="col-sm-4">Amount </dt>
                                                            <dd className="col-sm-8">
                                                                <span className="mx-2">:</span>
                                                                500
                                                            </dd>
                                                            <dt className="col-sm-4">Status </dt>
                                                            <dd className="col-sm-8">
                                                                <span className="mx-2">:</span>
                                                                Paid
                                                            </dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className={`${styles.instituteLogo} text-center`}>
                                                        <h4 className="text-center">Institute Name</h4>
                                                        <p className="text-center">Address</p>
                                                        <Image src={icon} width={120} height={120} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="received-money">
                                                        <h6 className="text-center">Money receipt number, it will generate by auto</h6>
                                                        <div className={styles.receivedSign}>
                                                            <h6>Received By Name</h6>
                                                            <p>Date : 12 Jun 2022</p>
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
        </div>
    )

};


export default Account;



