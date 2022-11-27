import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from './Transport.module.css'
import TransportSideMenu from "./TransportSideMenu";
import {AmPm} from '../Utils/utils'


const Transport = ({transport, handleAddTransportModal, handleDeleteTransportModel, handleTransportUpdate}) => {

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
            headerName: 'Student Name',
            field: 'first_name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
            valueGetter: (params) =>
                `${params.row.student_id?.user?.first_name} ${params.row.student_id?.user?.last_name}`,
        },
        {
            headerName: 'Guardian Name',
            field: 'guardian_name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
            valueGetter: (params) =>
                `${params.row.student_id?.guardian_name}`,
        },
        {
            headerName: 'Gari Number',
            field: 'car_number',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.row.vehicle?.car_number}`,
        },
        {
            headerName: 'Driver Name',
            field: 'driver_name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
            valueGetter: (params) =>
                `${params.row.vehicle?.driver_name}`,
        },
        {
            headerName: 'Driver Number',
            field: 'driver_number',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
            valueGetter: (params) =>
                `${params.row.vehicle?.driver_number}`,
        },
        {
            headerName: 'Route',
            field: 'route',
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            flex: 1,
            valueGetter: (params) =>
                `${params.row.vehicle?.route}`,
        },
        {
            headerName: 'Time',
            field: 'start_time',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
            valueGetter: (params) =>
                `${params.row.vehicle?.start_time}`,
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
                        <button className="btn btn-primary mx-1 primary"
                                onClick={() => handleTransportUpdate(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger primary"
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
                        <div className="col-sm-12 cold-md-9 col-lg-9 col-xl-9">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <h4 className="col-md-6 mt-2">
                                                <u>Transport Details</u>
                                            </h4>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <button
                                                type="button"
                                                className={`brand-btn float-md-end`}
                                                onClick={() => handleAddTransportModal()}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
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
            </section>

        </>
    )

};


export default Transport;




