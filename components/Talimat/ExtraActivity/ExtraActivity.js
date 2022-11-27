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
            headerAlign: 'center',
            align: 'center',
            width: 100,
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
            headerName: 'Date',
            field: 'date',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Category',
            field: 'category',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Duration',
            field: 'duration',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Start Time',
            field: 'start_time',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Place',
            field: 'place',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Managed By',
            field: 'managed_by',
            width: 100,
            editable: true,
        },

        {
            headerName: 'Action',
            sortable: false,
            width: 150,
            headerAlign: 'center',
            align: 'center',

            renderCell: (params) => {
                return (
                    <div>
                        <button
                            className="btn btn-primary primary mx-1"
                            onClick={() => handleUpdateExtraActivityModal(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger primary"
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
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4 className="mt-3">
                                                    <ul>Extra Activity details</ul>
                                                </h4>
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
                                    </div>
                                    <div className="card-body p-0">
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
            </section>
        </>
    )

};


export default ExtraActivity;




