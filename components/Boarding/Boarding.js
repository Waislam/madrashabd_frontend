import React from "react";
import styles from './Boarding.module.css'
import BoardingSidebar from './BoardingSidebar'

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";


const Boarding = ({ handleAddBazarListModal, bazarlist }) => {

    console.log("bazerList: ", bazarlist)


    const columns = [
        {
            field: "counting",
            headerName: "Counting",
            flex: 1,
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
        {
            field: "item.bazar_item_name",
            headerName: "Bazar Item",
            flex: 1,
            valueGetter: (parmas) => {
                return `${parmas?.row?.item?.bazar_item_name}`
            }
        },
        {
            field: "item.quantity",
            headerName: "Quantity",
            flex: 1,
            valueGetter: (parmas) => {
                return `${parmas?.row?.item?.quantity}`
            }
        },
        {
            field: "item.amount",
            headerName: "Amount",
            flex: 1,
            valueGetter: (parmas) => {
                return `${parmas?.row?.item?.quantity}`
            }
        },
        {
            field: "item.consumption",
            headerName: "Consumption",
            flex: 1,
            valueGetter: (parmas) => {
                return `${parmas?.row?.item?.consumption}`
            }
        },
        {
            field: "item.total_stock",
            headerName: "Current Stock",
            flex: 1,
            valueGetter: (parmas) => {
                return `${parmas?.row?.item?.total_stock}`
            }
        },
    ]

    return (
        <>
            <section className={styles.boardingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-4">
                            <BoardingSidebar />
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 mb-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4>Bazar List</h4>
                                    <hr />
                                    <div className="boardingSearchAndDownload">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                                                <div className="search">
                                                    <form action="#">
                                                        {/* <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Search Here"
                                                            />
                                                            <button
                                                                type="submit"
                                                                className={`${styles.boardingSearch} input-group-text`}
                                                            >Search
                                                            </button>
                                                        </div> */}
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4" />
                                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                                                <div className="row float-md-end">
                                                    <div className="col">
                                                        <button onClick={handleAddBazarListModal} className={styles.boardingAddButton}>Add New Bazar</button>
                                                    </div>
                                                    {/* <div className="col">
                                                        <button className={styles.boardingDownloadButton}>
                                                            Download PDF
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boardingManagement">

                                        <Box sx={{ height: 500, width: '100%' }}>
                                            <DataGrid
                                                rows={bazarlist.results}
                                                columns={columns}
                                                // ColumnWidth="flex"
                                                // pageSize={5}
                                                // rowsPerPageOptions={[5]}
                                                checkboxSelection
                                                disableSelectionOnClick
                                                disableColumnFilter
                                                disableColumnSelector
                                                disableDensitySelector
                                                components={{ Toolbar: GridToolbar }}
                                                experimentalFeatures={{ newEditingApi: false }}
                                                componentsProps={{
                                                    toolbar: {
                                                        showQuickFilter: true,
                                                        quickFilterProps: { debounceMs: 500 },
                                                    },
                                                }}
                                            />
                                        </Box>
                                        {/* <div className="table-responsive">
                                            <table className="table">
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
                                                <tr className="text-center">
                                                    <th scope="row"></th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>0k</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div> */}
                                    </div>
                                    <div className={styles.paginationSection}>
                                        <nav aria-label="Page navigation example">
                                            {/*<ul className="pagination">*/}
                                            {/*<li className="page-item">*/}
                                            {/*<a className={bazerList.previous*/}
                                            {/*? "btn page-link"*/}
                                            {/*: "btn page-link disabled"*/}
                                            {/*}*/}
                                            {/*onClick={prevPage} href="#">*/}
                                            {/*Previous*/}
                                            {/*</a>*/}
                                            {/*</li>*/}
                                            {/*{bazerList.previous &&*/}
                                            {/*<li className="page-item">*/}
                                            {/*<a*/}
                                            {/*className="page-link"*/}
                                            {/*href="#"*/}
                                            {/*onClick={handleBazarListPageNum}*/}
                                            {/*>*/}
                                            {/*{bazarListPageNum - 1}*/}
                                            {/*</a>*/}
                                            {/*</li>*/}
                                            {/*}*/}
                                            {/*<li className="page-item">*/}
                                            {/*<a className="page-link" href="#"*/}
                                            {/*onClick={handleBazarListPageNum}*/}
                                            {/*>*/}
                                            {/*{bazarListPageNum}*/}
                                            {/*</a>*/}
                                            {/*</li>*/}
                                            {/*{bazerList.next &&*/}
                                            {/*<li className="page-item">*/}
                                            {/*<a className="page-link" href="#"*/}
                                            {/*onClick={handleBazarListPageNum}*/}
                                            {/*>*/}
                                            {/*{bazarListPageNum + 1}*/}
                                            {/*</a>*/}
                                            {/*</li>*/}
                                            {/*}*/}
                                            {/*<li className="page-item">*/}
                                            {/*<a className={bazerList.next*/}
                                            {/*? "btn page-link"*/}
                                            {/*: "btn page-link disabled"*/}
                                            {/*}*/}
                                            {/*onClick={nextPage} href="#">*/}
                                            {/*Next*/}
                                            {/*</a>*/}
                                            {/*</li>*/}
                                            {/*</ul>*/}
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




