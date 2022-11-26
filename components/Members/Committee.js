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
            field: 'member_name',
            headerName: 'Member Name',
            headerAlign: 'center',
            width: 200,
            align: 'center',
            editable: true,
        },

        {
            field: 'member_designation',
            headerName: 'Podobi',
            headerAlign: 'center',
            align: 'center',
            width: 200,
            editable: true,
        },
        {
            field: 'phone_number',
            headerName: 'Phone',
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            width: 200,
        },

        {
            field: 'Detail',
            headerName: 'Detail',
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            width: 250,
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
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col col-md-6 mt-3 mb-2">
                                                    <h2>
                                                        <u>
                                                            Committee Members
                                                        </u>
                                                    </h2>
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommitteeMembers;