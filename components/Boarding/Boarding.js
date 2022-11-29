import React, { useState } from "react";
import styles from './Boarding.module.css'
import BoardingSidebar from './BoardingSidebar'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import api from "../../pages/api/api";
import { useRouter } from "next/router";



const Boarding = ({ handleAddBazarListModal, bazarlist, madrasha_slug, madrasha_id, handlePutRequest }) => {

    const router = useRouter()

    //handle post request


    const [showInputForm, setShowInputForm] = useState(false)

    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "all" })


    const handleBazarListModal = (e) => {
        e.preventDefault()
        setShowInputForm(true)
    }

    const onSubmit = async (values) => {
        // console.log("values: ", values)
        const data = {
            "bazar_item_name": values?.bazar_item_name,
            "quantity": values?.quantity,
            "measurement": values?.measurement,
            "amount": values?.amount,
            "consumption": values?.consumption,
            "total_stock": values?.total_stock,
            "date": values?.date,
            "madrasha": madrasha_id
        }
        await api.post(`/boarding/bazarlist/${madrasha_slug}/`, data)
            .then((response) => (
                console.log(response.data)
            )).catch((errors) => {
                console.log("errors: ", errors)
            })
        setShowInputForm(false)
        router.reload()
    }



    //handle get request
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
            field: "bazar_item_name",
            headerName: "Bazar Item",
            flex: 1,
            // valueGetter: (parmas) => {
            //     return `${parmas?.row?.item?.bazar_item_name}`
            // }
        },
        {
            field: "quantity",
            headerName: "Quantity",
            flex: 1,
            // valueGetter: (parmas) => {
            //     return `${parmas?.row?.item?.quantity}`
            // }
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 1,
            // valueGetter: (parmas) => {
            //     return `${parmas?.row?.item?.quantity}`
            // }
        },
        {
            field: "consumption",
            headerName: "Consumption",
            flex: 1,
            // valueGetter: (parmas) => {
            //     return `${parmas?.row?.item?.consumption}`
            // }
        },
        {
            field: "total_stock",
            headerName: "Current Stock",
            flex: 1,
            // valueGetter: (parmas) => {
            //     return `${parmas?.row?.item?.total_stock}`
            // }
        },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            renderCell: (params) => {
                console.log("parama:", params)
                return (
                    < div className = "float-md-end" >
                        <button className="btn btn-primary me-3"
                            onClick={(e) => handlePutRequest(e, params.id)}
                        >
                            Edit
                        </button>
                    </div >
                )
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
                                                    <button onClick={handleBazarListModal} className={styles.boardingAddButton}>Add New Bazar</button>
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
                                            rows={
                                                // bazarlist?.results? bazarlist?.results :"no data"
                                                bazarlist
                                            }
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
                        {/* Add bazar */}
                        <div className="add-bazar">
                            <Modal show={showInputForm} onHide={() => setShowInputForm(false)} size="lg"
                                dialogClassName={`${styles.customDialog}`}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Add Bazar
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="my-4 col-md-4">
                                                <label className="mb-2">Date</label>
                                                <input type="text"
                                                    className="form-control"
                                                    placeholder="input Date"
                                                    onFocus={(e) => e.target.type = "date"}
                                                    name="date"
                                                    {...register("date", { required: "Date is required" })}
                                                />
                                                <p className="text-danger">{errors?.dat?.message}</p>
                                            </div>
                                            <div className="my-4 col-md-4">
                                                <label className="mb-2">Item Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    placeholder="Item name"
                                                    name="bazar_item_name"
                                                    {...register("bazar_item_name", { required: "Item Name is required" })}
                                                />
                                                <p className="text-danger">{errors?.bazar_item_name?.message}</p>
                                            </div>
                                            <div className="my-4 col-md-4">
                                                <label className="mb-2">Qunatity</label>
                                                <input type="text"
                                                    className="form-control"
                                                    placeholder="Quantity"
                                                    name="quantity"
                                                    {...register("quantity", { required: "Item Quantity is required" })}
                                                />
                                                <p className="text-danger">{errors?.quantity?.message}</p>
                                            </div>
                                            <div className="my-4 col-md-4">
                                                <label className="mb-2">Taka</label>
                                                <input type="text"
                                                    className="form-control"
                                                    placeholder="Amount"
                                                    name="amount"
                                                    {...register("amount", { required: "Amount is required" })}
                                                />
                                                <p className="text-danger">{errors?.amount?.message}</p>
                                            </div>
                                            <div className="my-4 col-md-4">
                                                <label className="mb-2">Measurement</label>
                                                <select
                                                    className="form-select"
                                                    name="measurement"
                                                    {...register("measurement", { required: "Amount is required" })}
                                                >
                                                    <option>Select One</option>
                                                    <option value="litre">Kg</option>
                                                    <option value="gm">Litre</option>
                                                    <option value="kg">Gm</option>
                                                </select>
                                                <p className="text-danger">{errors?.measurement?.message}</p>
                                            </div>
                                            <div className="my-4 col-md-4">
                                                <label className="mb-2">Consumption</label>
                                                <input type="text"
                                                    className="form-control"
                                                    placeholder="20 kg"
                                                    name="consumption"
                                                    {...register("consumption", { required: "Consumption Amount is required" })}
                                                />
                                                <p className="text-danger">{errors?.consumption?.message}</p>
                                            </div>
                                            <div className="my-4">
                                                <label className="mb-2">Current Stock</label>
                                                <input type="text"
                                                    className="form-control"
                                                    placeholder="30 kg"
                                                    name="total_stock"
                                                    {...register("total_stock")}
                                                />
                                                <p className="text-danger">{errors?.total_stock?.message}</p>
                                            </div>


                                            <div className="col-md-4">
                                                <button className={styles.defaultBtn}>Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)

};


export default Boarding;




