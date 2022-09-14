import Link from 'next/link'
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
import {Main} from "next/document";


const Header = () => {
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
                                            <Image src={logo} className="img-responsive" alt="Logo missing"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                        <div className="header-info">
                                            <h3 className="header-title">
                                                Welcome to <span style={{color: "#3AB54A"}}> Darul Ulum Madrasha</span>
                                            </h3>
                                            <h5 className="text-center">220 Malibug, Dhaka</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="setting">
                                    <ul className="nav nav-pills justify-content-end">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <Image src={phone} alt="" className="img-responsive" width={30}
                                                       height={30}/>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/transport">
                                                <Image src={transport} alt="" className="img-responsive" width={30}
                                                       height={30}/>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <Image src={massage} alt="" className="img-responsive" width={30}
                                                       height={30}/>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/setting">
                                                <Image src={setting} alt="" className="img-responsive" width={30}
                                                       height={30}/>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown"
                                            style={{border: "1px solid #FFFFFF", padding: 0}}>
                                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                                               role="button" aria-expanded="false">
                                                <Image src={user} alt="" className="img-responsive" width={30}
                                                       height={30}/> Language
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Bangla</a></li>
                                                <li><a className="dropdown-item" href="#">English</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <Image src={user} alt="" className="img-responsive" width={30}
                                                       height={30}/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mainHeader}>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className={`${styles.customNavbarBrand} navbar-brand `} href="#">
                                Dashboard
                            </a>
                            <button className="navbar-toggler bg-info text-danger" type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon bg-black"></span>
                            </button>
                            <div className={`collapse navbar-collapse ${styles.linknav}`} id="navbarNavAltMarkup">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className={`${styles.customNavLink} nav-item`}>
                                        <Link href="/">
                                            <a>
                                                <Image src={admission} alt="admission" className={styles.imgclass}/>
                                                Admission
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item`}>
                                        <Link href="/teachers">
                                            <a>
                                                <Image src={teacherStaff} alt="teacherStaff"
                                                       className={styles.imgclass}/>
                                                TeacherStaff
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item`}>
                                        <Link href="/students">
                                            <a>
                                                <Image src={students} alt="Students" className={styles.imgclass}/>
                                                Students
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item`}>
                                        <Link href="/talimat/syllabus">
                                            <a>
                                                <Image src={talimat} alt="good" className={styles.imgclass}/>
                                                Talimat
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item`}>
                                        <Link href="/darulekama">
                                            <a>
                                                <Image src={darulEkhma} alt="good" className={styles.imgclass}/>
                                                DarulEkama
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item`}>
                                        <Link href="/accounts">
                                            <a>
                                                <Image src={accounts} alt="good" className={styles.imgclass}/>
                                                Accounts
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item`}>
                                        <Link href="">
                                            <a>
                                                <Image src={accounts} alt="good" className={styles.imgclass}/>
                                                Library
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item`}>
                                        <Link href="/boarding">
                                            <a>
                                                <Image src={boarding} alt="good" className={styles.imgclass}/>
                                                Boarding
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`${styles.customNavLink} nav-item`}>
                                        <Link href="/members">
                                            <a>
                                                <Image src={members} alt="good" className={styles.imgclass}/>
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