import Link from 'next/link';
import styles from './SyllabusHeader.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'

const SyllabusHeader = () =>{
    return (
        <>
            <div className={styles.breadcumCustom}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link href={`talimat/syllabus`}>
                                <a>
                                    Book distribution to Teacher
                                </a> 
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link href={`/talimat/syllabus/training`}>
                                <a>
                                    Teacher’s Training
                                </a> 
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link href={`/talimat/syllabus/syllabus-creation`}>
                                <a>
                                    Syllabus Creation
                                </a> 
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link href={`/talimat/syllabus/responsibility`}>
                                <a>
                                    Teacher and staff responsibility distribution
                                </a> 
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link href={`/talimat/syllabus/calendar`}>
                                <a>
                                    Academic calender
                                </a> 
                            </Link>
                        </li>

                    </ol>
                </nav>
            </div>
        </>
    )
}

export default SyllabusHeader;