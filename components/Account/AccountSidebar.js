import styles from './Account.module.css'
import Image from "next/image";
import Link from 'next/link'
import studentLogo from '../../public/assets/admission/students.png'

const AccountSidebar = () => {
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
                        <div className={styles.activeLink}>
                            <Link href="/accounts">
                                <a className="text-center">Income</a>
                            </Link>
                        </div>

                        <div className={styles.inActiveLink}>
                            <Link href="/accounts/expense">
                                <a className="text-center">Expense</a>
                            </Link>
                        </div>
                        <div className={styles.inActiveLink}>
                            <Link href="/accounts/payment">
                                <a className="text-center">Payment</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AccountSidebar;