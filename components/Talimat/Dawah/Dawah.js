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
            headerAlign: 'center',
            align: 'center',
            editable: true,
        },
        {
            headerName: 'Program Name',
            field: 'program_name',
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
            headerName: 'Date',
            field: 'date',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Managed By',
            field: 'managed_by',
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
                            onClick={() => handleUpdateDawahModal(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger primary"
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
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <h4 className="mt-2"><u>Dawah details</u></h4>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <button
                                                    type="button"
                                                    className={`float-end brand-btn`}
                                                    onClick={handleDawahModal}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
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
            </section>
        </>
    )

};


export default Dawah;




