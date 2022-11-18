import React from "react";
import Image from "next/image";
import styles from "./Setting.module.css";
import studentLogo from '../../public/assets/admission/students.png'
import Link from "next/link";
import {useRouter} from "next/router";

const SettingSideMenu = () => {
    const router = useRouter()
    return (
        <>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className={styles.settingRightSide}>
                <div className="card">
                    <h4 className="text-center mt-3">
                        <Image src={studentLogo} className="img-responsive" alt="missing img" height={40} width={40} />
                    </h4>
                    <hr/>
                    <div className="card-body p-0">
                        <div className="left-menu">
                            <div className={router.pathname=="/setting" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting">
                                    <a className="ps-5">Department</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/setting/designation" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting/designation">
                                    <a className="ps-5">Post/Designation</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/setting/classs" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting/classs">
                                    <a className="ps-5">Class</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/setting/books" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting/books">
                                    <a className="ps-5">Books</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/setting/session" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting/session">
                                    <a className="ps-5">Session</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/setting/groups" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting/groups">
                                    <a className="ps-5">Group</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/setting/shift" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting/shift">
                                    <a className="ps-5">Shift</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/setting/fees" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting/fees">
                                    <a className="ps-5">Fees</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/setting/exam-rules" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting/exam-rules">
                                    <a className="ps-5">Examination Rules</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/setting/building" ? `${styles.activeLink}`: `${styles.inActiveLink}`}>
                                <Link href="/setting/building">
                                    <a className="ps-5">Building</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SettingSideMenu;