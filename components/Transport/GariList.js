import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from './Transport.module.css'
import TransportSideMenu from "./TransportSideMenu";
import {AmPm} from '../Utils/utils'


const GariList = ({gariList, handleAddGari, handleGariUpdate, handleGariDelete}) => {

    const columns = [
        {
            headerName: 'ID',
            field: 'id',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Car Number',
            field: 'car_number',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Driver Name',
            field: 'driver_name',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Driver Number',
            field: 'driver_number',
            width: 150,
            editable: true,
        },
        {
            headerName: 'route',
            field: 'route',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Start Time',
            field: 'start_time ',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Action',
            sortable: false,
            width: 160,

            renderCell: (params) => {
                return (
                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleGariUpdate(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleGariDelete(params.row.id)}>
                            Delete
                        </button>
                    </div>
                );
            }
        },
    ];

    return (
        <>
            <section className={styles.transportSection}>
                <div className="container-fluid">
                    <div className="row">
                        <TransportSideMenu/>
                        {/* ========== transport right side body start ============== */}
                        <div className="col-sm-12 cold-md-9 col-lg-9 col-xl-9">
                            <div className="transport">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className={styles.transportBody}>
                                                <div className="row">
                                                    <h2 className="col-md-6 mt-3"><u>Car Details</u></h2>
                                                    <div className="col-md-6 mb-4">
                                                        <button
                                                            type="button"
                                                            className={`${styles.defaultBtn} float-md-end`}
                                                            onClick={() => handleAddGari()}
                                                        >
                                                            Add
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cars-table">
                                                    <Box sx={{height: 500, width: '100%'}}>
                                                        <DataGrid
                                                            rows={gariList}
                                                            columns={columns}
                                                            pageSize={5}
                                                            rowsPerPageOptions={[5]}
                                                            checkboxSelection
                                                            disableSelectionOnClick
                                                            disableColumnFilter
                                                            disableColumnSelector
                                                            disableDensitySelector
                                                            components={{Toolbar: GridToolbar}}
                                                            experimentalFeatures={{newEditingApi: false}}
                                                            componentsProps={{
                                                                toolbar: {
                                                                    showQuickFilter: true,
                                                                    quickFilterProps: {debounceMs: 500},
                                                                },
                                                            }}
                                                        />
                                                    </Box>
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


export default GariList;




