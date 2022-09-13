import React from "react";
import Link from 'next/link'
import Image from "next/image";
import styles from './Transport.module.css'
import studentLogo from '../../public/assets/admission/students.png'


const Transport = () => {
    return (
        <>

            <section className={styles.transportSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className={styles.transportRightSide}>
                                <div className="card">
                                    <h4 className="text-center mt-3">
                                        <Image src={studentLogo} className="img-responsive" alt="Logo missing" height={40} width={40} />
                                    </h4>
                                    <hr/>
                                    <div className="card-body p-0">
                                        <div className={styles.activeLink}>
                                            <Link href="/transport">
                                                <a className="text-center">Transport Details</a>
                                            </Link>
                                        </div>
                                        <div className={styles.inActiveLink}>
                                            <Link href="/transport/gariadd">
                                                <a className="text-center">Car details</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========== transport right side body start ============== */}
                        <div className="col-sm-12 cold-md-9 col-lg-9 col-xl-9">
                            <div className="transport">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className={styles.transportBody}>
                                                <h2>Transport Details</h2>
                                                <div className="search-section my-3">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <input type="text" className="form-control" placeholder="search"/>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="input-group">
                                                                    <input type="text"  className="form-control" placeholder="time"/>
                                                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item">9.20</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item">11.20</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <button type="button" className={styles.searchButton}>Search</button>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <button type="button" className={`${styles.defaultBtn} float-md-end`}>Add</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* ===== add form ========== */}

                                                <div className="add-to-transport mt-5">
                                                    <h2 className="mb-3">Add student to transport</h2>
                                                    <form action="#" method="POST">
                                                        <div className="row">
                                                            <div className="col-md-7 mb-3">
                                                                <input type="text" className="form-control" placeholder="student id"/>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <input type="text" className="form-control" placeholder="gurdian number"/>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="gariNumber"/>
                                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">gari one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">gari two</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">gari three</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="driver"/>
                                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">driver one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">driver two</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">driver three</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <input type="text" className="form-control" placeholder="number"/>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="route"/>
                                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">route one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">route two</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">route three</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 mb-3">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" placeholder="time"/>
                                                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">time one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">time two</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item" href="#">time three</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <button type="submit" className={styles.defaultBtn} >Save</button>
                                                        </div>
                                                    </form>
                                                </div>
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


export default Transport;




