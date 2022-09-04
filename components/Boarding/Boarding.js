import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './Boarding.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const Boarding = () => {
    return (
        <>
            <section className={styles.boardingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.boardingRightSide}>
                                <div className="card">
                                    <span className="text-center mt-2">
                                        <Image src={studentLogo} height={30} width={30}/>
                                    </span>
                                    <hr/>
                                    <div className="card-body pb-0">
                                        <div className={styles.activeLink}>
                                            <Link href={`/boarding/`}>
                                                <a className="text-center">Bazar List</a>
                                            </Link>
                                        </div>

                                        <div className={styles.inActiveLink}>
                                            <Link href={`boarding/khabar-distribution`}>
                                                <a className="text-center">Khabar Distribution Hazira</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="card">
                                <div className="card-body">
                                    <h4>Boarding management</h4>
                                    <hr/>
                                    <div className="boardingManagement mb-4">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-bordered">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col" className="text-center">Date</th>
                                                    <th scope="col" className="text-center">Bazar item Name</th>
                                                    <th scope="col" className="text-center">Quantity (Kg)</th>
                                                    <th scope="col" className="text-center">Amount</th>
                                                    <th scope="col" className="text-center">Consumption</th>
                                                    <th scope="col" className="text-center">Current Stock</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="text-center">
                                                    <th scope="row">1</th>
                                                    <td>04-09-2022</td>
                                                    <td>Patoto</td>
                                                    <td>20k</td>
                                                    <td>400</td>
                                                    <td>20k</td>
                                                    <td>0k</td>
                                                </tr>
                                                <tr className="text-center">
                                                    <th scope="row">2</th>
                                                    <td>04-09-2022</td>
                                                    <td>Patoto</td>
                                                    <td>20k</td>
                                                    <td>400</td>
                                                    <td>20k</td>
                                                    <td>0k</td>
                                                </tr>
                                                <tr className="text-center">
                                                    <th scope="row">3</th>
                                                    <td>04-09-2022</td>
                                                    <td>Patoto</td>
                                                    <td>20k</td>
                                                    <td>400</td>
                                                    <td>20k</td>
                                                    <td>0k</td>
                                                </tr>
                                                <tr className="text-center">
                                                    <th scope="row">4</th>
                                                    <td>04-09-2022</td>
                                                    <td>Patoto</td>
                                                    <td>20k</td>
                                                    <td>400</td>
                                                    <td>20k</td>
                                                    <td>0k</td>
                                                </tr>
                                                <tr className="text-center">
                                                    <th scope="row">5</th>
                                                    <td>04-09-2022</td>
                                                    <td>Patoto</td>
                                                    <td>20k</td>
                                                    <td>400</td>
                                                    <td>20k</td>
                                                    <td>0k</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button className={styles.defaultBtn}>Download PDF</button>
                                    </div>
                                    <div className="BoardingForm">
                                        <form action="#" method="POST">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <input
                                                        type="text"
                                                        name="date"
                                                        placeholder="Date"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-2">
                                                    <input
                                                        type="text"
                                                        name="bazar_item"
                                                        placeholder="Bazar item Name"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-2">
                                                    <input
                                                        type="text"
                                                        name="quantity"
                                                        placeholder="Quantity "
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-2">
                                                    <input
                                                        type="text"
                                                        name="amount"
                                                        placeholder="Amount"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-2">
                                                    <input
                                                        type="text"
                                                        name="consumption"
                                                        placeholder="Consumption"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="col-md-2">
                                                    <input
                                                        type="text"
                                                        name="current_stock"
                                                        placeholder="Current Stock"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <button className={`${styles.defaultBtn} my-3`}>Add</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

};


export default Boarding;




