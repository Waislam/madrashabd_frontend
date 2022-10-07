import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './ExtraActivity.module.css'
import studentLogo from '../../public/assets/admission/students.png'
import Talimat from "./Talimat";

const ExtraActivity = () => {
    return (
        <>
            <section className={styles.extraActivitySection}>
                <div className="container-fluid">
                    <div className="row">
                        <Talimat/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.extraActivityBody}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2>Extra Activity details</h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add</button>
                                                </div>
                                            </div>
                                            <div className="details-table mt-4">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Duration</th>
                                                                <th scope="col">start Time</th>
                                                                <th scope="col">place</th>
                                                                <th scope="col">Managed By</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">10/10/2022</th>
                                                                <td className="text-sm">Tablig</td>
                                                                <td className="text-sm">3 days</td>
                                                                <td className="text-sm">9.00 am</td>
                                                                <td className="text-sm">Malibug Mosque</td>
                                                                <td className="text-sm">Amir Shaheb</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">10/10/2022</th>
                                                                <td className="text-sm">Tablig</td>
                                                                <td className="text-sm">3 days</td>
                                                                <td className="text-sm">9.00 am</td>
                                                                <td className="text-sm">Malibug Mosque</td>
                                                                <td className="text-sm">Amir Shaheb</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">10/10/2022</th>
                                                                <td className="text-sm">Tablig</td>
                                                                <td className="text-sm">3 days</td>
                                                                <td className="text-sm">9.00 am</td>
                                                                <td className="text-sm">Malibug Mosque</td>
                                                                <td className="text-sm">Amir Shaheb</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">10/10/2022</th>
                                                                <td className="text-sm">Tablig</td>
                                                                <td className="text-sm">3 days</td>
                                                                <td className="text-sm">9.00 am</td>
                                                                <td className="text-sm">Malibug Mosque</td>
                                                                <td className="text-sm">Amir Shaheb</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* === extraActivityBody add form ==== */}
                                            <div className="extraActivity-add mt-5">
                                                <h2>Extra Activity info add</h2>
                                                <form action="#" method="POST">
                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="date"/>
                                                    </div>

                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="Category"/>
                                                    </div>

                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="Duration"/>
                                                    </div>

                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="Start Time"/>
                                                    </div>

                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="Location"/>
                                                    </div>

                                                    <div className="col-md-7 mt-3">
                                                        <input type="text" className="form-control" placeholder="Managed by"/>
                                                    </div>
                                                    <div className="mt-3">
                                                        <button type="submit" className={styles.defaultBtn}>Save</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <hr/>
                                        
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


export default ExtraActivity;




