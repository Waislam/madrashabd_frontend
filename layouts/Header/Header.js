import Link from 'next/link'
import Image from "next/future/image";
import styles from './Header.module.css'
import logo from '../../public/assets/header-icon/logo.png';
import admission from '../../public/assets/header-icon/admission.png';
import teacherStaff from '../../public/assets/header-icon/teacher-student.png';
import students from '../../public/assets/header-icon/students.png';
import talimat from '../../public/assets/header-icon/talimat.png';
import darulEkhma from '../../public/assets/header-icon/darul-ekma.png';
import boarding from '../../public/assets/header-icon/boarding.png';
import members from '../../public/assets/header-icon/members.png';
import accounts from '../../public/assets/header-icon/accounts.png';


const Header = () => {
    return (
        <>
            <section className={styles.headerSection}>
                <div className="container p-0">
                    <div className={styles.mainHeader}>
                        <header
                            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom">
                            <Link href="#">
                                <a className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                                    <Image
                                        src={logo}
                                        width="50"
                                        height="50"
                                        className="img-responsive bi me-2"
                                        alt="Logo missing"
                                    />
                                    <span
                                        style={{fontWeight: "bold", color: "#3AB54A"}}
                                        className="h5">
                                        Ikhwan Bangladesh
                                    </span>
                                </a>
                            </Link>
                            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                                <li className={styles.navLinkDesign}>
                                    <Link href="#">
                                        <a className="nav-link px-2 link-dark" style={{fontSize: 18}}>
                                            <i className="fa fa-file" aria-hidden="true"/> Attendance
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.navLinkDesign}>
                                    <Link href={`/transport`}>
                                        <a className="nav-link px-2 link-dark" style={{fontSize: 18}}>
                                            <i className="fa fa-bus" aria-hidden="true"/> Transport
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.navLinkDesign}>
                                    <Link href={`/`}>
                                        <a className="nav-link px-2 link-dark" style={{fontSize: 18}}>
                                            <i className="fa fa-paper-plane" aria-hidden="true"/> SMS
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.navLinkDesign}>
                                    <Link href={`/setting`}>
                                        <a className="nav-link px-2 link-dark" style={{fontSize: 18}}>
                                            <i className="fa fa-gear"/> Setting
                                        </a>
                                    </Link>
                                </li>
                                <div className={styles.navLinkDesign}>
                                    <li className="nav-item dropdown">
                                        <a
                                            style={{fontSize: 18}}
                                            className="nav-link dropdown-toggle link-dark"
                                            data-bs-toggle="dropdown"
                                            role="button" aria-expanded="false">
                                            <i className="fa fa-language" aria-hidden="true"/>
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
                                            style={{fontSize: 18}}
                                            className="nav-link dropdown-toggle link-dark"
                                            data-bs-toggle="dropdown"
                                            role="button" aria-expanded="false">
                                            <i className="fa fa-user-circle-o"/>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="mb-2">
                                                <Link href={`/change-password`}>
                                                    <a className="dropdown-item">
                                                        Change Password
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </div>
                            </ul>
                        </header>
                         <nav
                            className={`${styles.navbarExpand} navbar navbar-expand-lg navbar-light border-bottom`}
                            aria-label="Ninth navbar example">
                            <div className="container-xl">
                                <div className={`${styles.smallDevice}`}>
                                    <Link href="/">
                                        <a className={`${styles.customNavbarBrand} navbar-brand`}
                                           style={{fontWeight: "bold"}}>
                                            <i className="fa fa-home" style={{fontSize: 24}}/>
                                        </a>
                                    </Link>
                                </div>
                                <div className={`${styles.largeDevice}`}>
                                    <Link href="/">
                                        <a className={`${styles.customNavbarBrand} navbar-brand text-light`}
                                           style={{fontWeight: "bold"}}>
                                            Dashboard
                                        </a>
                                    </Link>
                                </div>
                                <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse justify-content-md-center"
                                     id="navbarsExample07XL">
                                    <ul className="navbar-nav">
                                        <li className={`${styles.customNavLink} nav-item mx-1 mb-2`}>
                                            <Link href={`/admission`}>
                                                <a>
                                                    <Image
                                                        src={admission}
                                                        alt="admission"
                                                        className={styles.imgClass}
                                                    />
                                                    Admission
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={`${styles.customNavLink} nav-item mx-1 mb-2`}>
                                            <Link href={`/teachers`}>
                                                <a>
                                                    <Image
                                                        src={teacherStaff}
                                                        alt="teacherStaff"
                                                        className={styles.imgClass}
                                                    />
                                                    TeacherStaff
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={`${styles.customNavLink} nav-item mx-1 mb-2`}>
                                            <Link href={`/students`}>
                                                <a>
                                                    <Image
                                                        src={students}
                                                        alt="Image is missing"
                                                        className={styles.imgClass}
                                                    />
                                                    Students
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={`${styles.customNavLink} nav-item mx-1 mb-2`}>
                                            <Link href={`/talimat/syllabus`}>
                                                <a>
                                                    <Image
                                                        src={talimat}
                                                        alt="Image is missing"
                                                        className={styles.imgClass}/>
                                                    Talimat
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={`${styles.customNavLink} nav-item mx-1 mb-2`}>
                                            <Link href={`/darulekama`}>
                                                <a>
                                                    <Image
                                                        src={darulEkhma}
                                                        alt="Image is missing"
                                                        className={styles.imgClass}
                                                    />
                                                    DarulEkama
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={`${styles.customNavLink} nav-item mx-1 mb-2`}>
                                            <Link href={`/accounts/accounts`}>
                                                <a>
                                                    <Image
                                                        src={accounts}
                                                        alt="Image is missing"
                                                        className={styles.imgClass}/>
                                                    Accounts
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={`${styles.customNavLink} nav-item mx-1 mb-2`}>
                                            <Link href={`/library`}>
                                                <a>
                                                    <Image
                                                        src={accounts}
                                                        alt="Image is missing"
                                                        className={styles.imgClass}/>
                                                    Library
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={`${styles.customNavLink} nav-item mx-1 mb-2`}>
                                            <Link href={`/boarding`}>
                                                <a>
                                                    <Image
                                                        src={boarding}
                                                        alt="Image is missing"
                                                        className={styles.imgClass}
                                                    />
                                                    Boarding
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={`${styles.customNavLink} nav-item mx-1 mb-2`}>
                                            <Link href={`/members`}>
                                                <a>
                                                    <Image
                                                        src={members}
                                                        alt="Image is missing"
                                                        className={styles.imgClass}/>
                                                    Members
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Header;