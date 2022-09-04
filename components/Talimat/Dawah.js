import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './Dawah.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const Dawah = () => {
    return (
        <>
            <section className={styles.dawahSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.dawahRightSide}>
                                <div className="card">
                                    <h4 className="text-center mt-3">
                                        <Image src={studentLogo} className="img-responsive"
                                               alt="Logo missing" height={40} width={40}/>
                                    </h4>
                                    <hr/>
                                    <div className="card-body p-0">
                                        <div className={styles.inActiveLink}>
                                            <Link href="/">
                                                <a className="text-center">Syllabus</a>
                                            </Link>
                                        </div>
                                        <div className={styles.inActiveLink}>
                                            <Link href="">
                                                <a className="text-center">Examination</a>
                                            </Link>
                                        </div>
                                        <div className={styles.activeLink}>
                                            <Link href="">
                                                <a className="text-center">Dawah</a>
                                            </Link>
                                        </div>
                                        <div className={styles.inActiveLink}>
                                            <Link href="">
                                                <a className="text-center">Extra-Activity</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Books Distribution to teacher</h4>
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


export default Dawah;




