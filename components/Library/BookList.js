import styles from './BookList.module.css'
import Sidemenu from './LibrarySideMenu'

const BookList = ({
                      books, handleBookUpdate,
                      addBookModalShow,

                      libraryListPageNum,
                      handleLibraryListPageNum,
                      nextPage,
                      prevPage
                  }) => {

    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <Sidemenu/>
                        </div>
                        <div className='col-sm-12 col-md-10 col-lg-10 col-xl-10'>
                            <div className="right-section">
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className="book-list">
                                            <h4><u>Book List</u></h4>
                                            <div className="row">
                                                <div className="col-md-2 my-2">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Book Number"
                                                    />
                                                </div>
                                                <div className="col-md-2 my-2">
                                                    <div className='input-group'>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Category"
                                                        />
                                                        <button
                                                            type='button'
                                                            className='btn btn-outline-secondary dropdown-toggle dropdown-toggle-split'
                                                            data-bs-toggle="dropdown">
                                                            <span className='visually-hidden'>
                                                                Toggle dropdown
                                                            </span>
                                                        </button>
                                                        <ul className='dropdown-menu dropdown-menu-end'>
                                                            <li>
                                                                <a className='dropdown-item'>Cate one</a>
                                                            </li>
                                                            <li>
                                                                <a className='dropdown-item'>Cate two</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 my-2">
                                                    <div className='input-group'>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="In stock"
                                                        />
                                                        <button
                                                            type='button'
                                                            className='btn btn-outline-secondary dropdown-toggle dropdown-toggle-split'
                                                            data-bs-toggle="dropdown">
                                                            <span className='visually-hidden'>
                                                                Toggle dropdown
                                                            </span>
                                                        </button>
                                                        <ul className='dropdown-menu dropdown-menu-end'>
                                                            <li>
                                                                <a className='dropdown-item'>In stock</a>
                                                            </li>
                                                            <li>
                                                                <a className='dropdown-item'>Not in stock</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 my-2">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search Form"
                                                    />
                                                </div>
                                                <div className="col-md-2 my-1">
                                                    <button
                                                        type="submit"
                                                        className={styles.modalBtn}>
                                                        Search
                                                    </button>
                                                </div>
                                                <div className="col-md-2 my-1 float-right-end">
                                                    <button
                                                        type='button'
                                                        className={`${styles.modalBtn} float-md-end`}
                                                        onClick={addBookModalShow}>
                                                        Add Book
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="book-list-table">
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Book Number</th>
                                                        <th scope="col">Book Name</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Part</th>
                                                        <th scope="col">Origin Writer</th>
                                                        <th scope="col">Language</th>
                                                        <th scope="col">Class</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {books && books.results?.map((book) => (
                                                        <tr key={book.id}>
                                                            <th scope="row">{book.id}</th>
                                                            <td>{book?.number}</td>
                                                            <td>{book?.name}</td>
                                                            <td>{book?.category}</td>
                                                            <td>{book?.part}</td>
                                                            <td>{book?.original_writer}</td>
                                                            <td>{book?.language}</td>
                                                            <td>{book?.book_for_class}</td>
                                                            <td>
                                                                {
                                                                    book.is_available ? 'Yes'
                                                                        :
                                                                        "No"
                                                                }
                                                            </td>
                                                            <td className="text-center">
                                                                <a className="btn btn-primary"
                                                                   onClick={() => handleBookUpdate(book.id)}>
                                                                    Edit
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="pagination-download">
                                                <div className="row">
                                                    <div className="col-md-4 mb-2">
                                                        <button
                                                            type="button"
                                                            className={`${styles.modalBtn}`}>
                                                            Download
                                                        </button>
                                                    </div>
                                                    <div className="col-md-4"/>
                                                    <div className="col-md-4 mb-2">
                                                        <div className="row">
                                                            <div className="col">
                                                                <nav aria-label="Page navigation example">
                                                                    <ul className="pagination">
                                                                        <li className="page-item">
                                                                            <a className={books && books.previous
                                                                                ? "btn page-link"
                                                                                : "btn page-link disabled"
                                                                            }
                                                                               onClick={prevPage} href="#">
                                                                                Previous
                                                                            </a>
                                                                        </li>
                                                                        {books && books.previous &&
                                                                        <li className="page-item">
                                                                            <a
                                                                                className="page-link"
                                                                                href="#"
                                                                                onClick={handleLibraryListPageNum}
                                                                            >
                                                                                {libraryListPageNum - 1}
                                                                            </a>
                                                                        </li>
                                                                        }
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#"
                                                                               onClick={handleLibraryListPageNum}
                                                                            >
                                                                                {libraryListPageNum}
                                                                            </a>
                                                                        </li>
                                                                        {books && books.next &&
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#"
                                                                               onClick={handleLibraryListPageNum}
                                                                            >
                                                                                {libraryListPageNum + 1}
                                                                            </a>
                                                                        </li>
                                                                        }
                                                                        <li className="page-item">
                                                                            <a className={books && books.next
                                                                                ? "btn page-link"
                                                                                : "btn page-link disabled"
                                                                            }
                                                                               onClick={nextPage} href="#">
                                                                                Next
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                            </div>
                                                            <div className="col">
                                                                <div className="float-end" style={{width: 80}}>
                                                                    <div className="input-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="10"
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false">
                                                                            <span className="visually-hidden">
                                                                                Toggle dropdown
                                                                            </span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className="dropdown-item">10</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className="dropdown-item">20</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
};

export default BookList;