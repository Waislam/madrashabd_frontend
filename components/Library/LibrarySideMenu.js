import styles from './BookList.module.css'
import librarylogo from '../../public/assets/admission/admission.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


const SideMenu = () =>{
    const router = useRouter()
    return(
        <>
            <div className={styles.leftSide}>
                <div className='card'>
                    <div className='card-header'>
                        <div className='text-center'>
                            <Image src={librarylogo} className="img-responsive" alt="libary img" height={30} width={30}/>
                        </div>
                    </div>
                    <div className='card-body p-0'>
                        <div className="leftSide">
                            <div className={router.pathname=="/library" ? `${styles.activeLink}`:`${styles.inActiveLink}`}>
                                <Link href="/library">
                                    <a className="ps-3">Book List</a>
                                </Link>
                            </div>
                            <div className={router.pathname=="/library/bookdistribution"? `${styles.activeLink}`:`${styles.inActiveLink}`}>
                                <Link href="/library/bookdistribution">
                                    <a className="ps-3">Book Distribution</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SideMenu;