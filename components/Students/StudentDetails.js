import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './StudentDetails.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const StudentDetails = () => {
        return (
            <>
                <section className={styles.mainSection}>
                    <div className="container-fluid">
                        <h3 className={styles.mainTitle}>Student List</h3>
                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <div className={styles.sidebarList}>
                                    <div className="card">
                                        <h4 className={styles.sideBarLogo}>
                                            <Image src={studentLogo} className="img-responsive"
                                                   alt="Logo missing" height={40} width={40}/>
                                        </h4>
                                        <div className="card-body p-0">
                                            <div className={styles.studentLink}>
                                                <Link href="/">
                                                    <a className="text-center">Student List</a>
                                                </Link>
                                            </div>
                                            <div className={styles.promotedLink}>
                                                <Link href="/">
                                                    <a className="text-center">Promoted List</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                                <div className="card">
                                    <div className="card-body mt-3">
                                        <h3>Added Content Here</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
;


export default StudentDetails;




