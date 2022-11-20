import Link from 'next/link';
import styles from './Building.module.css';

const BuildingHeader = () =>{
    return (
        <>
            <div className={styles.breadcumCustom}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link href="/setting/building/">
                                <a>
                                    Building
                                </a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link href="/setting/building-room/">
                                <a>
                                    Building Room
                                </a>
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    )
};

export default BuildingHeader;