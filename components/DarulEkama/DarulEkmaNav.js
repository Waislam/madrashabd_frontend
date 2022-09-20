import React from "react";
import Link from 'next/link'
import styles from './DarulEkam.module.css'

import {useRouter} from "next/router";


const DarulEkmaNav = () => {
    const router = useRouter();

    return (
        <div>
            <nav className="nav flex-column">
                {/*Darul Ekma*/}
                <div className={router.pathname == "/darulekama" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                    <Link href="/darulekama">
                        <a className={`${styles.customNavLink} nav-link`}>Darul Ekma</a>
                    </Link>
                </div>
                {/*Seat Booking*/}
                <div
                    className={router.pathname == "/darulekama/seatbooking" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                    <Link href="/darulekama/seatbooking">
                        <a className={`${styles.customNavLink} nav-link`}>Seat Booking</a>
                    </Link>
                </div>
                {/*Nigrani Detail*/}
                <div
                    className={router.pathname == "/darulekama/nigranidetail" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                    <Link href="/darulekama/nigranidetail">
                        <a className={`${styles.customNavLink} nav-link`}>Nigrani Detail</a>
                    </Link>
                </div>
                {/*Sutir Abedon Form*/}
                <div
                    className={router.pathname == "/darulekama/sutirabedon" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                    <Link href="/darulekama/sutirabedon">
                        <a className={`${styles.customNavLink} nav-link`}>Sutir Abedon Form</a>
                    </Link>
                </div>
            </nav>
        </div>
    )
};

export default DarulEkmaNav;