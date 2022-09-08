import Link from 'next/link';
import styles from './ExamHeader.module.css';
import Talimat from '../Talimat';
import taliamatstyles from '../Talimat.module.css'

const ExamHeader = () =>{
    return (
        <>
            <div className={styles.breadcumCustom}>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/talimat/exam">
                                <a>
                                    Announcement
                                </a> 
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/talimat/exam/registration">
                                <a>
                                    Registration
                                </a> 
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/talimat/exam/admit">
                                <a>
                                    Admit Card
                                </a> 
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/talimat/exam/seatplan">
                                <a>
                                    Seat plan
                                </a> 
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/talimat/exam/routine">
                                <a>
                                    Exam. Routine
                                </a> 
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/talimat/exam/hallnigran">
                                <a>
                                    Hall Nigran plan
                                </a> 
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/talimat/exam/papermonitoring">
                                <a>
                                    Answer paper Monitoring
                                </a> 
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/talimat/exam/result">
                                <a>
                                    Result sheet 
                                </a> 
                            </Link>
                        </li>

                    </ol>
                </nav>
            </div>
        </>
    )
}

export default ExamHeader;