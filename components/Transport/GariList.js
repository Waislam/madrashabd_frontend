import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from './Transport.module.css'
import TransportSideMenu from "./TransportSideMenu";
import {AmPm} from '../Utils/utils'


const GariList = ({gariList, handleAddGari, handleGariUpdate, handleGariDelete}) => {

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
            renderCell: (params) => {
                return (
                    <div>
                        {params.id}
                    </div>
                );
            }
        },
        {
            headerName: 'Car Number',
            field: 'car_number',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Driver Name',
            field: 'driver_name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Driver Number',
            field: 'driver_number',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'route',
            field: 'route',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Start Time',
            field: 'start_time ',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Action',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <button
                            className="btn btn-primary primary mx-1"
                            onClick={() => handleGariUpdate(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger primary"
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
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <h4 className="mt-2"><u>Car Details</u></h4>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <button
                                                type="button"
                                                className={`brand-btn float-md-end`}
                                                onClick={() => handleAddGari()}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
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
            </section>
        </>
    )

};


export default GariList;




