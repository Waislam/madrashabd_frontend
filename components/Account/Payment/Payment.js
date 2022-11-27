import React from "react";
import styles from './Payment.module.css'
import AccountSideBar from '../Account/AccountSidebar'

const Payment = () => {
    return (
        <div>
            <section className={styles.paymentSection}>
                <div className="container-fluid">
                    <h3 className={styles.paymentTitle}>Accounts</h3>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <AccountSideBar/>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="income">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Payment</h4>
                                    </div>
                                    <div className="card-body">
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
                                                    <div className="col">
                                                        <button type="submit" className={styles.defaultBtn}>Pay
                                                            Now
                                                        </button>
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


export default Payment;




