import React from "react";
import Image from "next/image";
import DarulEkmaNav from './DarulEkmaNav'
import styles from './DarulEkam.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const DarulEkam = () => {
    return (
        <>
            <section className={styles.darulEkamSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-3">
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
                                                                    placeholder="ID"
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
                                                                    placeholder="Class"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="present"
                                                                    placeholder="Present"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="cost"
                                                                    placeholder="Cost"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="leave"
                                                                    placeholder="Leave"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="boading"
                                                                    placeholder="Boading"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 p-1">
                                                                <input
                                                                    type="text"
                                                                    name="others"
                                                                    placeholder="Others"
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
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Building</th>
                                                                <th scope="col">Floor</th>
                                                                <th scope="col">Room</th>
                                                                <th scope="col">Seat</th>
                                                                <th scope="col">Class</th>
                                                                <th scope="col">Cost Per Bed</th>
                                                                <th scope="col">Present</th>
                                                                <th scope="col">Leave</th>
                                                                <th scope="col">Boading</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr className="text-center">
                                                                <th scope="row">1</th>
                                                                <td>Masuk</td>
                                                                <td>Ad Buailding</td>
                                                                <td>3rd Floor</td>
                                                                <td>208</td>
                                                                <td>20</td>
                                                                <td>Six</td>
                                                                <td>200</td>
                                                                <td>Yes</td>
                                                                <td>Yes</td>
                                                                <td>No</td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <th scope="row">2</th>
                                                                <td>Masuk</td>
                                                                <td>Ad Buailding</td>
                                                                <td>3rd Floor</td>
                                                                <td>208</td>
                                                                <td>20</td>
                                                                <td>Six</td>
                                                                <td>200</td>
                                                                <td>Yes</td>
                                                                <td>Yes</td>
                                                                <td>No</td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <th scope="row">3</th>
                                                                <td>Masuk</td>
                                                                <td>Ad Buailding</td>
                                                                <td>3rd Floor</td>
                                                                <td>208</td>
                                                                <td>20</td>
                                                                <td>Six</td>
                                                                <td>200</td>
                                                                <td>Yes</td>
                                                                <td>Yes</td>
                                                                <td>No</td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <th scope="row">4</th>
                                                                <td>Masuk</td>
                                                                <td>Ad Buailding</td>
                                                                <td>3rd Floor</td>
                                                                <td>208</td>
                                                                <td>20</td>
                                                                <td>Six</td>
                                                                <td>200</td>
                                                                <td>Yes</td>
                                                                <td>Yes</td>
                                                                <td>No</td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <th scope="row">5</th>
                                                                <td>Masuk</td>
                                                                <td>Ad Buailding</td>
                                                                <td>3rd Floor</td>
                                                                <td>208</td>
                                                                <td>20</td>
                                                                <td>Six</td>
                                                                <td>200</td>
                                                                <td>Yes</td>
                                                                <td>Yes</td>
                                                                <td>No</td>
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


export default DarulEkam;




