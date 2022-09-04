import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './Payment.module.css'
import studentLogo from '../../public/assets/admission/students.png'
import icon from '../../public/assets/login/icon.png'

const PaymentPage = () => {
    return (
        <div>
            <section className={styles.paymentSection}>
                <div className="container-fluid">
                    <h3 className={styles.paymentTitle}>Accounts</h3>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.paymentRightSide}>
                                <div className="card">
                                    <h4 className="text-center mt-3">
                                        <Image src={studentLogo} className="img-responsive"
                                               alt="Logo missing" height={40} width={40}/>
                                    </h4>
                                    <hr/>
                                    <div className="card-body p-0">
                                        <div className={styles.inActiveLink}>
                                            <Link href="/">
                                                <a className="text-center">Income</a>
                                            </Link>
                                        </div>

                                        <div className={styles.inActiveLink}>
                                            <Link href="/">
                                                <a className="text-center">Expense</a>
                                            </Link>
                                        </div>
                                        <div className={styles.activeLink}>
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
                                        <h4>Payment</h4>
                                        <hr/>
                                        <form action="#" method="post">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Search"
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="From Date"
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="To Date"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <button type="submit" className={styles.defaultBtn}>Pay
                                                                Now
                                                            </button>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <button type="submit" className={styles.defaultBtn}>Pay
                                                                Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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


export default PaymentPage;




