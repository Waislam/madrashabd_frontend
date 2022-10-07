import React from "react";
import Image from "next/image";
import DarulEkmaNav from './DarulEkmaNav'
import styles from './DarulEkam.module.css'
import studentLogo from '../../public/assets/admission/students.png'

const SutirAbedon = () => {
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
                                {/* DarulEkma Nav*/}
                                <DarulEkmaNav/>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="sutirAbedon">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Sutir Abedon Form</h4>
                                        <hr/>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        name="to"
                                                        className="form-control"
                                                        placeholder="Date"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        name="to"
                                                        className="form-control"
                                                        placeholder="To Whom"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        name="institution_name"
                                                        className="form-control"
                                                        placeholder="Institution Name"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        className="form-control"
                                                        placeholder="Address"
                                                    />
                                                </div>
                                            </div>
                                            <button className={styles.pdfButton}>Download As PDF</button>
                                        </form>
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


export default SutirAbedon;




