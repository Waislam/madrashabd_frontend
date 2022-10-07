import Link from 'next/link';
import styles from './Account.module.css';

const IncomeHeader = () =>{
    return (
        <>
            <div className={styles.breadcumCustom}>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/accounts">
                                <a>
                                    Student Income
                                </a> 
                            </Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <Link href="/accounts/other_income">
                                <a>
                                    Other Income
                                </a> 
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    )
}

export default IncomeHeader;