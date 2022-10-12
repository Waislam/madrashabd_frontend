import styles from './BookList.module.css'
import Sidemenu from './LibrarySideMenu'
import Modal from './BookDistributionListModal'
import Link from 'next/link'

const BookList = ({showmodal, shown}) =>{
    return(
        <>
            <section>
                {/* <div className={styles.booklistSection}> */}
                <div className="">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                <Sidemenu/>
                            </div>
                            <div className='col-sm-12 col-md-10 col-lg-10 col-xl-10'>
                                <div className="right-section">
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <h4><u>Book Distribution List</u></h4>
                                                </div>
                                            </div>
                                            <div className='search-option'>
                                                <form>
                                                    <div className='row'>
                                                        <div className="col-md-6 my-2">
                                                            <input type="text" className="form-control" placeholder="search input" />
                                                        </div>
                                                        <div className="col-md-3 my-1">
                                                            <button type="submit" className={styles.defaultBtn} >Search</button>
                                                        </div>
                                                        <div className='col-md-3'>
                                                    <button type='button' className={`${styles.defaultBtn} float-end `} onClick={showmodal}>Add</button>
                                                </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="book-list-table">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Student ID</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Class</th>
                                                                <th scope="col">Contact</th>
                                                                <th scope="col">Book Number</th>
                                                                <th scope="col">Book Name</th>
                                                                <th scope="col">Taken Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <Link href="" style={{color:"#5CBD67"}}>
                                                                        132121
                                                                    </Link>
                                                                </th>
                                                                <td>Waliul Islam</td>
                                                                <td>Dawrah/takmil</td>
                                                                <td>017255xxx</td>
                                                                <td>54654</td>
                                                                <td>bokhari shorif</td>
                                                                <td>Dawrah/takmil</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <Link href="" style={{color:"#5CBD67"}}>
                                                                        132121
                                                                    </Link>
                                                                </th>
                                                                <td>Waliul Islam</td>
                                                                <td>Dawrah/takmil</td>
                                                                <td>017255xxx</td>
                                                                <td>54654</td>
                                                                <td>bokhari shorif</td>
                                                                <td>Dawrah/takmil</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <Link href="" style={{color:"#5CBD67"}}>
                                                                        132121
                                                                    </Link>
                                                                </th>
                                                                <td>Waliul Islam</td>
                                                                <td>Dawrah/takmil</td>
                                                                <td>017255xxx</td>
                                                                <td>54654</td>
                                                                <td>bokhari shorif</td>
                                                                <td>Dawrah/takmil</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <Link href="" style={{color:"#5CBD67"}}>
                                                                        132121
                                                                    </Link>
                                                                </th>
                                                                <td>Waliul Islam</td>
                                                                <td>Dawrah/takmil</td>
                                                                <td>017255xxx</td>
                                                                <td>54654</td>
                                                                <td>bokhari shorif</td>
                                                                <td>Dawrah/takmil</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div>
                                                    <button type="button" className={`${styles.defaultBtn}`}>Download</button>
                                                </div>
                                            </div>
                                            
                                            <Modal show={shown}/>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookList;