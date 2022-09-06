import React from "react";
import Link from 'next/link'
import Image from "next/image";
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
                                <nav className="nav flex-column">
                                    <Link href="/">
                                        <a className={`${styles.customNavLink} nav-link`}>
                                            Darul Ekma
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a className={`${styles.customNavLink} nav-link`}>
                                            Seat Booking
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a className={`${styles.customNavLink} nav-link`}>
                                            Nigrani Detail
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a className={`${styles.customNavLink} nav-link`}>
                                            Sutir Abedon Form
                                        </a>
                                    </Link>
                                </nav>
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
                                                    <div className="col-md-4">
                                                        <select className="form-select"
                                                                aria-label="Default select example">
                                                            <option selected>Select Floor</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <select className="form-select"
                                                                aria-label="Default select example">
                                                            <option selected>Select Room</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="seatNumber">
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-striped">
                                                    <thead className="bg-dark text-white">
                                                    <tr className="text-center">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Building</th>
                                                        <th scope="col">Floor</th>
                                                        <th scope="col">Room</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="text-center">
                                                        <th scope="row">1</th>
                                                        <td>Buailding</td>
                                                        <td>3rd Floor</td>
                                                        <td>208</td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <th scope="row">2</th>
                                                        <td>Buailding</td>
                                                        <td>3rd Floor</td>
                                                        <td>208</td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <th scope="row">3</th>
                                                        <td>Buailding</td>
                                                        <td>3rd Floor</td>
                                                        <td>208</td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <th scope="row">4</th>
                                                        <td>Buailding</td>
                                                        <td>3rd Floor</td>
                                                        <td>208</td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <th scope="row">5</th>
                                                        <td>Buailding</td>
                                                        <td>3rd Floor</td>
                                                        <td>208</td>
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
            </section>
        </>
    )


};


export default SeatBooking;




