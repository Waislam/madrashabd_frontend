import React from "react";
import Link from 'next/link'
import styles from './DarulEkam.module.css'


const DarulEkmaNav = () => {
    return (
        <div>
            <nav className="nav flex-column">
                <Link href={`/darulekama`}>
                    <a className={`${styles.customNavLink} nav-link`}>
                        Darul Ekma
                    </a>
                </Link>
                <Link href={`/darulekama/seatbooking`}>
                    <a className={`${styles.customNavLink} nav-link`}>
                        Seat Booking
                    </a>
                </Link>
                <Link href={`/darulekama/nigranidetail`}>
                    <a className={`${styles.customNavLink} nav-link`}>
                        Nigrani Detail
                    </a>
                </Link>
                <Link href={`/darulekama/sutirabedon`}>
                    <a className={`${styles.customNavLink} nav-link`}>
                        Sutir Abedon Form
                    </a>
                </Link>
            </nav>
        </div>
    )
};

export default DarulEkmaNav;