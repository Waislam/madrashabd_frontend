import { useRouter } from "next/router"
import styles from "./Members.module.css"
import studentLogo from '../../public/assets/admission/students.png'
import Link from "next/link";
import Image from "next/image";

const MemberSideMenu = () =>{
    const router = useRouter()
    return (
        <>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div className={styles.settingRightSide}>
                    <div className="card">
                        <h4 className="text-center mt-3">
                            <Image src={studentLogo} className="img-responsive" alt="missing img" height={40} width={40} />
                        </h4>
                        <hr/>
                        <div className="card-body p-0">
                            <div className="left-menu">
                                <div className={router.pathname == "/members"? `${styles.activeLink}`:`${styles.inActiveLink}`}>
                                    <Link href="/members">
                                        <a className="ps-5">Committee</a>
                                    </Link>
                                </div>
                                <div className={router.pathname == "/members/permanentm"? `${styles.activeLink}`:`${styles.inActiveLink}`}>
                                    <Link href="/members/permanentm">
                                        <a className="ps-5">Bodri/Permanent Members</a>
                                    </Link>
                                </div>
                                <div className={router.pathname == "/members/othermembers"? `${styles.activeLink}`:`${styles.inActiveLink}`}>
                                    <Link href="/members/othermembers">
                                        <a className="ps-5">Other Members</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberSideMenu;