import React from "react";
import Image from "next/image";
import DarulEkmaNav from './DarulEkmaNav'
import styles from './DarulEkam.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const Nigranidetail = () => {
    return (
        <>
            <section className={styles.darulEkamSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.darulEkamRightSide}>
                                <div className={`${styles.customCard} card shadow`}>
                                    <div className={`${styles.customCardHeader} card-header`}>
                                        <Image src={studentLogo} className="img-responsive"
                                               alt="Logo missing" height={40} width={40}/>
                                    </div>
                                    {/* DarulEkma Nav*/}
                                    <DarulEkmaNav/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="darulEkam">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Nigrani Detail</h4>
                                        <hr/>
                                        <div className="search mb-5">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                                        <div className="row">
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="id"
                                                                    placeholder="Student ID"
                                                                    className="form-control"

                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    placeholder="Name"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="building"
                                                                    placeholder="Building"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="floor"
                                                                    placeholder="Floor"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="room"
                                                                    placeholder="Room"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="seat"
                                                                    placeholder="Seat"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="class"
                                                                    placeholder="Start Date"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="present"
                                                                    placeholder="End Date"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-8 col-lg-8 col-xl-8 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="cost"
                                                                    placeholder="Karon / reason of leave"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2">
                                                        <button className={styles.search}>Search</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="darulEkamTable">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered table-striped">
                                                            <thead className="bg-dark text-white">
                                                            <tr className="text-center">
                                                                <th scope="col">#</th>
                                                                <th scope="col">Teacher Name</th>
                                                                <th scope="col">Building</th>
                                                                <th scope="col">Floor</th>
                                                                <th scope="col">Room</th>
                                                                <th scope="col">Jamat</th>
                                                                <th scope="col">Start Time</th>
                                                                <th scope="col">End Time</th>
                                                                <th scope="col">Status</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr className="text-center">
                                                                <th scope="row">1</th>
                                                                <td>Masuk</td>
                                                                <td>Ad Buailding</td>
                                                                <td>3rd Floor</td>
                                                                <td>208</td>
                                                                <td>Dawra</td>
                                                                <td>9.30</td>
                                                                <td>6.30</td>
                                                                <td>Yes</td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <th scope="row">1</th>
                                                                <td>Masuk</td>
                                                                <td>Ad Buailding</td>
                                                                <td>3rd Floor</td>
                                                                <td>208</td>
                                                                <td>Dawra</td>
                                                                <td>9.30</td>
                                                                <td>6.30</td>
                                                                <td>Yes</td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <th scope="row">1</th>
                                                                <td>Masuk</td>
                                                                <td>Ad Buailding</td>
                                                                <td>3rd Floor</td>
                                                                <td>208</td>
                                                                <td>Dawra</td>
                                                                <td>9.30</td>
                                                                <td>6.30</td>
                                                                <td>Yes</td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <th scope="row">1</th>
                                                                <td>Masuk</td>
                                                                <td>Ad Buailding</td>
                                                                <td>3rd Floor</td>
                                                                <td>208</td>
                                                                <td>Dawra</td>
                                                                <td>9.30</td>
                                                                <td>6.30</td>
                                                                <td>Yes</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
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
        </>
    )


};


export default Nigranidetail;




