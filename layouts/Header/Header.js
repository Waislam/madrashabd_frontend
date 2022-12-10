import Link from 'next/link'
import { signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router';
// import Image from "next/image";
import Image from "next/future/image";
import styles from './Header.module.css'

// Header Icon
import logo from '../../public/assets/header-icon/logo.png';
import setting from '../../public/assets/header-icon/settings.png';
import massage from '../../public/assets/header-icon/e-mail.png';
import transport from '../../public/assets/header-icon/transport.png';
import phone from '../../public/assets/header-icon/phone.png';
import user from '../../public/assets/header-icon/user.png';
import admission from '../../public/assets/header-icon/admission.png';
import teacherStaff from '../../public/assets/header-icon/teacher-student.png';
import students from '../../public/assets/header-icon/students.png';
import talimat from '../../public/assets/header-icon/talimat.png';
import darulEkhma from '../../public/assets/header-icon/darul-ekma.png';
import boarding from '../../public/assets/header-icon/boarding.png';
import userManager from '../../public/assets/header-icon/user-manager.png';
import members from '../../public/assets/header-icon/members.png';
import accounts from '../../public/assets/header-icon/accounts.png';
import payments from '../../public/assets/header-icon/payments.png';
import { Main } from "next/document";


const Header = () => {

    // const { data: session, status } = useSession();

    const router = useRouter()

    return (
        <>
            <section className={styles.headerSection}>
                <div className={styles.headerTop}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="row">
                                    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                        <div className={styles.headerLogo}>
                                            <Image src={logo} className="img-responsive" alt="Logo missing" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                        <div className="header-info">
                                            <h3>
                                                Welcome to <span style={{ color: "#3AB54A" }}> Darul Ulum Madrasha</span>
                                            </h3>
                                            <h5 className="text-center">220 Malibug, Dhaka</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                                    <li className={styles.navLinkDesign}>
                                        <Link href="#">
                                            <a className={`text-dark nav-link px-2`}>
                                                <i className="fa fa-file" aria-hidden="true" /> Attendance
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={styles.navLinkDesign}>
                                        <Link href={`/transport`}>
                                            <a className={`link-dark nav-link px-2`}>
                                                <i className="fa fa-bus" aria-hidden="true" /> Transport
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={styles.navLinkDesign}>
                                        <Link href={`/`}>
                                            <a className={`link-dark nav-link px-2`}>
                                                <i className="fa fa-paper-plane" aria-hidden="true" /> SMS
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={styles.navLinkDesign}>
                                        <Link href={`/setting`}>
                                            <a className={`link-dark nav-link px-2`}>
                                                <i className="fa fa-gear" /> Setting
                                            </a>
                                        </Link>
                                    </li>
                                    <div className={styles.navLinkDesign}>
                                        <li className="nav-item dropdown">
                                            <a
                                                style={{ fontSize: 18 }}
                                                className="nav-link dropdown-toggle link-dark"
                                                data-bs-toggle="dropdown"
                                                role="button" aria-expanded="false">
                                                {/* <i className="fa fa-language pe-2" aria-hidden="true"/> */}
                                                Language
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="mb-2">
                                                    <Link href="#">
                                                        <a className="dropdown-item">
                                                            Bangla
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="mb-2">
                                                    <Link href="#">
                                                        <a className="dropdown-item">
                                                            English
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>
                                    <div className={styles.navLinkDesign}>
                                        <li className="nav-item dropdown">
                                            <a
                                                style={{ fontSize: 18 }}
                                                className="nav-link dropdown-toggle link-dark"
                                                data-bs-toggle="dropdown"
                                                role="button" aria-expanded="false">
                                                <i className="fa fa-user-circle-o" />
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="mb-2">
                                                    <Link href={`/change-password`}>
                                                        <a className="dropdown-item">
                                                            Change Password
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="mb-2 ms-3">
                                                    <a href="#" onClick={() => signOut()}>Sign out</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mainHeader}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link href="/">
                                <a className={`${styles.customNavbarBrand} navbar-brand text-light mb-2`}>
                                    Dashboard
                                </a>
                            </Link>
                            <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className={`collapse navbar-collapse ${styles.linknav}`} id="navbarNav">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className={`${styles.customNavLink} nav-item mb-2`}>
                                        <Link href="/admission">
                                            <a>
                                                <Image src={admission} alt="admission" className={styles.imgclass} />
                                                Admission
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item mb-2`}>
                                        <Link href="/teachers">
                                            <a>
                                                <Image src={teacherStaff} alt="teacherStaff"
                                                    className={styles.imgclass} />
                                                TeacherStaff
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item mb-2`}>
                                        <Link href="/students">
                                            <a>
                                                <Image src={students} alt="Students" className={styles.imgclass} />
                                                Students
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item mb-2`}>
                                        <Link href="/talimat/syllabus">
                                            <a>
                                                <Image src={talimat} alt="good" className={styles.imgclass} />
                                                Talimat
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item mb-2`}>
                                        <Link href="/darulekama">
                                            <a>
                                                <Image src={darulEkhma} alt="good" className={styles.imgclass} />
                                                DarulEkama
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item mb-2`}>
                                        <Link href="/accounts/accounts">
                                            <a>
                                                <Image src={accounts} alt="good" className={styles.imgclass} />
                                                Accounts
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item mb-2`}>
                                        <Link href="/library">
                                            <a>
                                                <Image src={accounts} alt="good" className={styles.imgclass} />
                                                Library
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item mb-2`}>
                                        <Link href="/boarding">
                                            <a>
                                                <Image src={boarding} alt="good" className={styles.imgclass} />
                                                Boarding
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item mb-2`}>
                                        <Link href="/members">
                                            <a>
                                                <Image src={members} alt="good" className={styles.imgclass} />
                                                Members
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
};

export default Header;