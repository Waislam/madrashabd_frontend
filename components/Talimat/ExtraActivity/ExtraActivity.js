import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from './ExtraActivity.module.css'
import Talimat from "../Talimat";

const ExtraActivity = ({extraActivity, handleAddExtraActivity, handleDeleteExtraActivity, handleUpdateExtraActivityModal}) => {

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Date',
            field: 'date',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Category',
            field: 'category',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Duration',
            field: 'duration',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Start Time',
            field: 'start_time',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Place',
            field: 'place',
            width: 150,
            editable: true,
        },
        {
            headerName: 'Managed By',
            field: 'managed_by',
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
                            onClick={() => handleUpdateExtraActivityModal(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteExtraActivity(params.row.id)}>
                            Delete
                        </button>
                    </div>
                );
            }
        },
    ];

    return (
        <>
            <section className={styles.extraActivitySection}>
                <div className="container-fluid">
                    <div className="row">
                        <Talimat/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="talimat">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.extraActivityBody}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2>Extra Activity details</h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button
                                                        type="button"
                                                        className={`${styles.defaultBtn} float-md-end`}
                                                        onClick={() => handleAddExtraActivity()}
                                                    >Add
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="details-table mt-4">
                                                <Box sx={{height: 500, width: '100%'}}>
                                                    <DataGrid
                                                        rows={extraActivity}
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


export default ExtraActivity;




