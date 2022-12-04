import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from '../Talimat.module.css'
import studentLogo from '../../../public/assets/admission/students.png'


const ExamSideMenu = () => {
    return (
        <>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div className={styles.talimatRightSide}>
                    <div className="card">
                        <h4 className="text-center mt-3">
                            <Image
                                src={studentLogo}
                                className="img-responsive"
                                alt="Logo missing"
                                height={40} width={40}
                            />
                        </h4>
                        <hr/>
                        <div className="card-body p-0">
                            <div className={styles.inActiveLink}>
                                <Link href={`/talimat/syllabus`}>
                                    <a className="ps-5">Syllabus</a>
                                </Link>
                            </div>
                            <div className={styles.activeLink}>
                                <Link href={`/talimat/exam/announcement`}>
                                    <a className="ps-5">Examination</a>
                                </Link>
                            </div>
                            <div className={styles.inActiveLink}>
                                <Link href={`/talimat/dawah`}>
                                    <a className="ps-5">Dawah</a>
                                </Link>
                            </div>
                            <div className={styles.inActiveLink}>
                                <Link href={`/talimat/extra-activity`}>
                                    <a className="ps-5">Extra-Activity</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};


export default ExamSideMenu;




