import React from 'react';
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from "./Members.module.css";
import MemberSideMenu from "./MembersSideMenu";


const CommitteeMembers = ({committee, handleCommitteeModal, handleUpdateCommitteeModal}) => {


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
            field: 'member_name',
            headerName: 'Member Name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },

        {
            field: 'member_designation',
            headerName: 'Podobi',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            field: 'phone_number',
            headerName: 'Phone',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
        },

        {
            field: 'Detail',
            headerName: 'Detail',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div>
                        <button className={`brand-btn`}
                                onClick={() => handleUpdateCommitteeModal(params.row.id)}>Edit
                        </button>
                    </div>
                );
            }
        },
    ];

    return (
        <>
            <section className={styles.settingSection}>
                <div className="container-fluid">
                    <div className="row">
                        <MemberSideMenu/>
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col col-md-6 mb-2">
                                            <h4 className="mt-2"><u>Committee Members</u></h4>
                                        </div>
                                        <div className="col col-md-6  mb-2">
                                            <button
                                                type="button"
                                                className={`float-end brand-btn`}
                                                onClick={() => handleCommitteeModal()}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <Box sx={{height: 500, width: '100%'}}>
                                                <DataGrid
                                                    rows={committee}
                                                    columns={columns}
                                                    pageSize={5}
                                                    rowsPerPageOptions={[5, 25, 100]}
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
            </section>
        </>
    )
};

export default CommitteeMembers;