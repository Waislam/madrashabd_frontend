import styles from './Boarding.module.css'
import Image from "next/image";
import Link from 'next/link'
import {useRouter} from "next/router";

import studentLogo from '../../public/assets/admission/students.png'

const BoardingSidebar = () => {
    const router = useRouter();

    return (
        <>
            <div className={styles.listRightSide}>
                <div className="card pb-0">
                    <div className="pb-0 mt-2 text-center">
                        <Image
                            src={studentLogo}
                            className="card-img-top"
                            alt="..."
                            width="40"
                            height="40"
                        />
                    </div>
                    <hr/>
                    <div className="card-body p-0">
                        <div
                            className={router.pathname == "/boarding" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                            <Link href="/boarding">
                                <a className="ps-3">Bazar List</a>
                            </Link>
                        </div>
                        {/* <div
                            className={router.pathname == "/boarding/khabar-distribution" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                            <Link href="/boarding/khabar-distribution">
                                <a className="ps-3">Khabar Distribution</a>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
};

export default BoardingSidebar;