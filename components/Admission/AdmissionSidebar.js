import styles from './Admission.module.css'
import Image from "next/image";
import Link from 'next/link'
import {useRouter} from "next/router";

import studentLogo from '../../public/assets/admission/students.png'

const AdmissionSidebar = () => {
    const router = useRouter();

    return (
        <>
            <div className={styles.admissionRightSide}>
                <div className="card">
                    <h4 className="text-center mt-3">
                        <Image src={studentLogo} className="img-responsive"
                               alt="Logo missing" height={40} width={40}/>
                    </h4>
                    <hr/>
                    <div className="card-body p-0">
                        <div className={router.pathname == "/admission" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                            <Link href="/admission">
                                <a className="text-center">New Student</a>
                            </Link>
                        </div>

                        <div className={router.pathname == "/admission/old-admission" ? `${styles.activeLink}` : `${styles.inActiveLink}`}>
                            <Link href="/admission/old-admission">
                                <a className="text-center">Old Student</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AdmissionSidebar;