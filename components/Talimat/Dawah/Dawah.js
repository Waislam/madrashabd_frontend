import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from './Dawah.module.css'
import Talimat from "../Talimat";

const Dawah = ({dawah, handleDawahModal, handleDeleteDawahModal, handleUpdateDawahModal}) => {

    const columns = [
        {
            headerName: 'ID',
            field: 'id',
            width: 50,
            editable: true,
        },
        {
            headerName: 'Program Name',
            field: 'program_name',
            width: 120,
            editable: true,
        },
        {
            headerName: 'Duration',
            field: 'duration',
            width: 100,
            editable: true,
        },
        {
            headerName: 'Start Time',
            field: 'start_time',
            width: 100,
            editable: true,
        },
        {
            headerName: 'Place',
            field: 'place',
            width: 110,
            editable: true,
        },
        {
            headerName: 'Date',
            field: 'date',
            width: 110,
            editable: true,
        },
        {
            headerName: 'Managed By',
            field: 'managed_by',
            width: 110,
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
                            onClick={() => handleUpdateDawahModal(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteDawahModal(params.row.id)}>
                            Delete
                        </button>
                    </div>
                );
            }
        },
    ];

    return (
        <>
            <section className={styles.dawahSection}>
                <div className="container-fluid">
                    <div className="row">
                        <Talimat/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.dawahBody}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2>Dawah details</h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button
                                                        type="button"
                                                        className={`${styles.defaultBtn} float-md-end`}
                                                        onClick={handleDawahModal}>Add
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="details-table mt-4">
                                                <Box sx={{height: 500, width: '100%'}}>
                                                    <DataGrid
                                                        rows={dawah}
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


export default Dawah;




