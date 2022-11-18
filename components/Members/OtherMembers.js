import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from "./Members.module.css";
import MemberSideMenu from "./MembersSideMenu";


const OtherMembers = ({otherMember, handleAddOtherMemberModal, handleUpdateOtherMemberModal, handleDeleteOtherMemberModal}) => {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
            editable: true,
        },
        {
            field: 'member_name',
            headerName: 'Member Name',
            width: 150,
            editable: true,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 110,
            editable: true,
        },
        {
            field: 'phone_number',
            headerName: 'Phone',
            sortable: false,
            width: 160
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
                            onClick={() => handleUpdateOtherMemberModal(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteOtherMemberModal(params.row.id)}>
                            Delete
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
                        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                            <div className="department-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className={styles.department}>
                                            <div className="row">
                                                <div className="col-md-6 mt-3">
                                                    <h2><u>Other Members</u></h2>
                                                </div>
                                                <div className="col-md-6">
                                                    <button
                                                        type="button"
                                                        className={`${styles.defaultBtn} float-end`}
                                                        onClick={() => handleAddOtherMemberModal()}
                                                    >Add
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="books-table mt-3">

                                                <Box sx={{height: 500, width: '100%'}}>
                                                    <DataGrid
                                                        rows={otherMember}
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
}

export default OtherMembers;