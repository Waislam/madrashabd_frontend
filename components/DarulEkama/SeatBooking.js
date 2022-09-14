import React from "react";
import Image from "next/image";
import DarulEkmaNav from './DarulEkmaNav'
import styles from './DarulEkam.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const SeatBooking = () => {
    return (
        <>
            <section className={styles.darulEkamSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={`${styles.customCard} card shadow`}>
                                <div className={`${styles.customCardHeader} card-header`}>
                                    <Image src={studentLogo} className="img-responsive"
                                           alt="Logo missing" height={40} width={40}/>
                                </div>
                                {/* DarulEkma Nav*/}
                                <DarulEkmaNav/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="seatBooking">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="seatBookingForm mb-4">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example">
                                                            <option selected>Select Building</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <select className="form-select"
                                                                aria-label="Default select example">
                                                            <option selected>Select Floor</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <select className="form-select"
                                                                aria-label="Default select example">
                                                            <option selected>Select Room</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <button className={styles.defaultBtn}>Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="seatNumber">
                                            <form action="#">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h4 className="mb-4 text-center">Seat Booking</h4>
                                                        <hr/>
                                                        <div className="row">
                                                            <div className="col-md-3 mb-4">
                                                                <button type="button" className={styles.seatBookingBox}>
                                                                    1
                                                                </button>
                                                            </div><div className="col-md-3 mb-4">
                                                                <button type="button" className={styles.seatBookingBox}>
                                                                    2
                                                                </button>
                                                            </div><div className="col-md-3 mb-4">
                                                                <button type="button" className={styles.seatBookingBox}>
                                                                    3
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 mb-4">
                                                                <button type="button" className={styles.seatBookingBox}>
                                                                    4
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3 mb-4">
                                                                <button type="button" className={styles.seatBookingBox}>
                                                                    5
                                                                </button>
                                                            </div><div className="col-md-3 mb-4">
                                                                <button type="button" className={styles.seatBookingBox}>
                                                                    6
                                                                </button>
                                                            </div><div className="col-md-3 mb-4">
                                                                <button type="button" className={styles.seatBookingBox}>
                                                                    7
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 mb-4">
                                                                <button type="button" className={styles.seatBookingBox}>
                                                                    8
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
                </div>
            </section>
        </>
    )


};


export default SeatBooking;




