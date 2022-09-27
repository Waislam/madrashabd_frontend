import React from "react";
import styles from './Boarding.module.css'
import BoardingSidebar from './BoardingSidebar'

const Boarding = (
    {
        bazerList,
        handleBazarListPageNum,
        setSearchBazerList,
        setBazerListRecords,
        nextPage,
        prevPage,
        handleSearchBtn,
        bazarListPageNum
    }) => {

    return (
        <>
            <section className={styles.boardingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-4">
                            <BoardingSidebar/>
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 mb-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4>Bazar List</h4>
                                    <hr/>
                                    <div className="boardingSearchAndDownload">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                                                <div className="search">
                                                    <form action="#">
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Search Here"
                                                                onChange={(event) => setSearchBazerList(event.target.value)}
                                                            />
                                                            <button
                                                                type="submit"
                                                                className={`${styles.boardingSearch} input-group-text`}
                                                                onClick={handleSearchBtn}>Search
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4"/>
                                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                                                <div className="row g-1">
                                                    <div className="col">
                                                        <button className={styles.boardingAddButton}>Add New Bazar
                                                        </button>
                                                    </div>
                                                    <div className="col">
                                                        <button className={styles.boardingDownloadButton}>Download PDF
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boardingManagement">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-bordered">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col" className="text-center">Date</th>
                                                    <th scope="col" className="text-center">Bazar item Name</th>
                                                    <th scope="col" className="text-center">Quantity (Kg)</th>
                                                    <th scope="col" className="text-center">Amount</th>
                                                    <th scope="col" className="text-center">Consumption</th>
                                                    <th scope="col" className="text-center">Current Stock</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {bazerList.results.map((bazar) => (
                                                    <tr className="text-center" key={bazar.id}>
                                                        <th scope="row">{bazar.id}</th>
                                                        <td>{bazar.date}</td>
                                                        <td className={styles.boardingText}>
                                                            {bazar.bazar_item_name}
                                                        </td>
                                                        <td>{bazar.quantity}</td>
                                                        <td>{bazar.amount}</td>
                                                        <td>{bazar.consumption}</td>
                                                        <td>0k</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={styles.paginationSection}>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className={bazerList.previous
                                                        ? "btn page-link"
                                                        : "btn page-link disabled"
                                                    }
                                                       onClick={prevPage} href="#">
                                                        Previous
                                                    </a>
                                                </li>
                                                {bazerList.previous &&
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        onClick={handleBazarListPageNum}
                                                    >
                                                        {bazarListPageNum - 1}
                                                    </a>
                                                </li>
                                                }
                                                <li className="page-item">
                                                    <a className="page-link" href="#"
                                                       onClick={handleBazarListPageNum}
                                                    >
                                                        {bazarListPageNum}
                                                    </a>
                                                </li>
                                                {bazerList.next &&
                                                <li className="page-item">
                                                    <a className="page-link" href="#"
                                                       onClick={handleBazarListPageNum}
                                                    >
                                                        {bazarListPageNum + 1}
                                                    </a>
                                                </li>
                                                }
                                                <li className="page-item">
                                                    <a className={bazerList.next
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

};


export default Boarding;




