import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from './Transport.module.css'
import TransportSideMenu from "./TransportSideMenu";
import {AmPm} from '../Utils/utils'


const Transport = ({transport, handleAddTransportModal, handleDeleteTransportModel, handleTransportUpdate}) => {

    const columns = [
        {
            headerName: 'ID',
            field: 'id',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Student Name',
            field: 'first_name',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.student_id?.user?.first_name} ${params.row.student_id?.user?.last_name}`,
        },
        {
            headerName: 'Guardian Name',
            field: 'guardian_name',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.student_id?.guardian_name}`,
        },
        {
            headerName: 'Gari Number',
            field: 'car_number',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.vehicle?.car_number}`,
        },
        {
            headerName: 'Driver Name',
            field: 'driver_name',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.vehicle?.driver_name}`,
        },
        {
            headerName: 'Driver Number',
            field: 'driver_number',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.vehicle?.driver_number}`,
        },
        {
            headerName: 'Route',
            field: 'route',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.vehicle?.route}`,
        },
        {
            headerName: 'Time',
            field: 'start_time',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.vehicle?.start_time}`,
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
                            onClick={() => handleTransportUpdate(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteTransportModel(params.row.id)}>
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
                        <div className="col-sm-12 cold-md-10 col-lg-10 col-xl-10">
                            <div className="transport">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <h2 className="col-md-6 mt-3"><u>Transport Details</u></h2>
                                            <div className="col-md-6 mb-4">
                                                <button
                                                    type="button"
                                                    className={`${styles.defaultBtn} float-md-end`}
                                                    onClick={() => handleAddTransportModal()}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Box sx={{height: 500, width: '100%'}}>
                                                    <DataGrid
                                                        rows={transport}
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
            </section>

        </>
    )

};


export default Transport;




