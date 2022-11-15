import React from "react";
import Link from 'next/link'
import Image from "next/image";
import studentLogo from '../../public/assets/admission/students.png'
import { useRouter } from "next/router";
import styles from './Transport.module.css'


const TransportSideMenu = () => {
    const router = useRouter()
    return (
        
        <>

            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div className={styles.transportRightSide}>
                    <div className="card">
                        <h4 className="text-center mt-3">
                            <Image src={studentLogo} className="img-responsive" alt="Logo missing" height={40} width={40} />
                        </h4>
                        <hr/>
                        <div className="card-body p-0">
                            <div className={router.pathname == "/transport" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                                <Link href="/transport">
                                    <a className="text-center">Transport Details</a>
                                </Link>
                            </div>
                            <div className={router.pathname == "/transport/gari" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                                <Link href="/transport/gari">
                                <a className="text-center">Car details</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

};


export default TransportSideMenu;




