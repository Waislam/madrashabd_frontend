import Link from 'next/link';
import styles from './Account/Account.module.css';

const IncomeHeader = () =>{
    return (
        <>
            <div className={styles.breadcumCustom}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link href="/accounts/accounts">
                                <a>
                                    Student Income
                                </a> 
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link href="/accounts/other-income">
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
};

export default IncomeHeader;