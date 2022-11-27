import React from "react";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from "./Members.module.css";
import MemberSideMenu from "./MembersSideMenu";

const PermanentMembers = ({permanentMember, handleAddPermanentMemberModal, handleDeletePermanentMemberModal, handleUpdatePermanentMemberModal}) => {

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
            field: 'address',
            headerName: 'Address',
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
            headerName: 'Action',
            headerAlign: 'center',
            align: 'center',
            flex: 2,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div>
                        <button
                            className="brand-btn"
                            onClick={() => handleUpdatePermanentMemberModal(params.row.id)}>
                            Edit
                        </button>
                        <button
                            className="brand-btn"
                            onClick={() => handleDeletePermanentMemberModal(params.row.id)}>
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
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="mt-2"><u>Permanent Members</u></h4>
                                        </div>
                                        <div className="col-md-6">
                                            <button
                                                type="button"
                                                className={`brand-btn float-end mb-2`}
                                                onClick={() => handleAddPermanentMemberModal()}
                                            >Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <Box sx={{height: 500, width: '100%'}}>
                                        <DataGrid
                                            rows={permanentMember}
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

export default PermanentMembers;