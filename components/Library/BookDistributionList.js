import styles from './BookList.module.css'
import Sidemenu from './LibrarySideMenu'
import Modal from './BookDistributionListModal'
import Link from 'next/link'

const BookList = ({showmodal, shown, bookDistribution, setSearchBookDistribution, handleSearchBtn}) => {

    return (
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
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Search"
                                                                onChange={(event) => setSearchBookDistribution(event.target.value)}
                                                            />
                                                        </div>
                                                        <div className="col-md-3 my-1">
                                                            <button type="button"
                                                                className={styles.defaultBtn}
                                                                onClick={handleSearchBtn}
                                                        >
                                                            Search
                                                        </button>
                                                        </div>
                                                        <div className='col-md-3'>
                                                            <button type='button'
                                                                    className={`${styles.defaultBtn} float-end `}
                                                                    onClick={showmodal}>Add
                                                            </button>
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
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>

                                                        {
                                                            bookDistribution && bookDistribution.results?.map((book) => (
                                                                <tr key={book.id}>
                                                                    <th scope="row">
                                                                        <Link href="" style={{color: "#5CBD67"}}>
                                                                            {book.student_roll_id?.student_id}
                                                                        </Link>
                                                                    </th>
                                                                    <td>{book.student_roll_id.user?.username}</td>
                                                                    <td>{book.student_roll_id.admitted_class?.name}</td>
                                                                    <td>{book.student_roll_id.user?.phone}</td>
                                                                    <td>{book.book_number?.number}</td>
                                                                    <td>{book.book_number?.name}</td>
                                                                    <td>{book.taken_date}</td>
                                                                    <td>
                                                                        <button className="btn btn-primary">Edit
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div>
                                                    <button type="button" className={`${styles.defaultBtn}`}>Download
                                                    </button>
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