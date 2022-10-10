import styles from './BookList.module.css'
import Sidemenu from './LibrarySideMenu'
import Modal from './BookListModal'





const BookList = ({
                    showmodal,
                    books,
                    idshow
                }) =>{

    if (!books){
        return(
            <>
            <h1>reload page</h1>
            </>
        )
    }

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
                                                <div className='col-md-6'>
                                                    <h4><u>Book List</u></h4>
                                                </div>
                                                <div className='col-md-6'>
                                                    <button type='button' className={`${styles.defaultBtn} float-end `} onClick={showmodal}>Add Book</button>
                                                </div>
                                            </div>
                                            <div className='search-option'>
                                                <form cation="#">
                                                    <div className='row'>
                                                        <div className="col-md-2 my-2">
                                                            <input type="text" className="form-control" placeholder="book number"/>
                                                        </div>
                                                        <div className="col-md-2 my-2">
                                                            <div className='input-group'>
                                                                <input type="text" className="form-control" placeholder="category"/>
                                                                <button type='button' className='btn btn-outline-secondary dropdown-toggle dropdown-toggle-split' data-bs-toggle="dropdown">
                                                                    <span className='visually-hidden'>Toggle dropdown</span>
                                                                </button>
                                                                <ul className='dropdown-menu dropdown-menu-end'>
                                                                    <li>
                                                                        <a className='dropdown-item'>cate one</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='dropdown-item'>cate two</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 my-2">
                                                            <div className='input-group'>
                                                                <input type="text" className="form-control" placeholder="Instock"/>
                                                                <button type='button' className='btn btn-outline-secondary dropdown-toggle dropdown-toggle-split' data-bs-toggle="dropdown">
                                                                    <span className='visually-hidden'>Toggle dropdown</span>
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
                                                        <div className="col-md-4 my-2">
                                                            <input type="text" className="form-control" placeholder="search input" />
                                                        </div>
                                                        <div className="col-md-2 my-1">
                                                            <button type="submit" className={styles.defaultBtn} >Search</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="book-list-table">
                                                <div className="table-responsive">
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Book Number</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Part</th>
                                                                <th scope="col">origin Writer</th>
                                                                <th scope="col">Language</th>
                                                                <th scope="col">Class</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {/* {books?.results.map((book)=> ( */}
                                                        {/* {books && books.results.map((book)=> ( */}
                                                        {books && books.results?.map((book)=> (
                                                            <tr key={book.id}>
                                                                <th scope="row">{book.id}</th>
                                                                <td>{book?.name}</td>
                                                                <td>{book?.category}</td>
                                                                <td>{book?.part}</td>
                                                                <td>{book?.original_writer}</td>
                                                                <td>{book?.language}</td>
                                                                <td>{book?.book_for_class}</td>
                                                                <td><a className="btn btn-primary" onClick={()=>idshow(book.id)} defaultValue={book.id}>Edit</a></td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <button type="button" className={`${styles.defaultBtn}`}>Download</button>
                                                    </div>
                                                    <div className="pagination-class col-md-4">
                                                        <nav aria-label="page navigation" className="">
                                                            <ul className="pagination float-end">
                                                                <li className="page-item">
                                                                    <a className="page-link" href="">Previous</a>
                                                                </li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="">
                                                                        1
                                                                    </a>
                                                                </li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                    <div className="page-size col-md-1">
                                                        <div className="float-end" style={{width:80}}>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="10"/>
                                                                <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span className="visually-hidden">Toggle dropdown</span>
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
            </section>
        </>
    )
}

export default BookList;