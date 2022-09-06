import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './DarulEkam.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const StudentsOnLeave = () => {
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
                            <div className="sutirAbedon">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Students On Leave</h4>
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


export default StudentsOnLeave;




