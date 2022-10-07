import styles from './Account.module.css'
import Image from "next/image";
import Link from 'next/link'
import {useRouter} from "next/router";

import studentLogo from '../../public/assets/admission/students.png'

const AccountSidebar = () => {
    const router = useRouter();

    return (
        <>
            <div className={styles.listRightSide}>
                <div className="card">
                    <h4 className="text-center mt-3">
                        <Image src={studentLogo} className="img-responsive"
                               alt="Logo missing" height={40} width={40}/>
                    </h4>
                    <hr/>
                    <div className="card-body p-0">
                        <div className={router.pathname == "/accounts" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                            <Link href="/accounts">
                                <a className="text-left ps-4">Income</a>
                            </Link>
                        </div>

                        <div className={router.pathname == "/accounts/expense" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                            <Link href="/accounts/expense">
                                <a className="text-left ps-4">Expense</a>
                            </Link>
                        </div>
                        <div className={router.pathname == "/accounts/payment" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                            <Link href="/accounts/payment">
                                <a className="text-left ps-4">Payment</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AccountSidebar;