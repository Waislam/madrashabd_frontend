import React from "react";
import styles from '../Account/Account.module.css'
import AccountSideBar from '../Account/AccountSidebar'
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {useRouter} from 'next/router'

const Expense = ({expenseList, approved, handleAddExpenseModal, handleIndividualObj}) => {
    const router = useRouter();

    const handleDetail = async (id) => {
        router.push(`expense/${id}`);
    };

    const columns = [
        {
            headerName: 'ID',
            field: 'id',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            width: 60,
            valueGetter: (params) =>
                `${params.row.id}`,
        },
        {
            headerName: 'Category',
            field: 'category',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.row.category.name}`,
        },

        {
            headerName: 'Sub Category',
            field: 'sub_category',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.row.sub_category.name}`,
        },
        {
            headerName: 'Description',
            field: 'description',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 2,
        },
        {
            headerName: 'Amount',
            field: 'amount',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            headerName: 'Date',
            field: 'date',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            headerName: 'Receipt Number',
            field: 'receipt_number',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            headerName: 'Expense By',
            field: 'expense_by',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            headerName: 'Approved By',
            field: 'approved_by',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            field: 'Action',
            headerName: 'Detail',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <button className="btn btn-primary primary mx-2"
                                onClick={() => handleIndividualObj(params.row.id)}>Edit
                        </button>
                        <button className="btn btn-warning primary"
                                onClick={() => handleDetail(params.row.id)}>Details
                        </button>
                    </div>
                );
            }
        },
    ];

    if (!expenseList) {
        return (
            <>
                <h1>Loading data.. please refresh your page</h1>
            </>
        )
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <AccountSideBar/>
                    </div>
                    <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h4 className="mt-2"><u>All Expense</u></h4>
                                    </div>
                                    <div className="col-md-4">
                                        {/*<button type="button" className={`${styles.defaultBtn} ms-2`}>Get*/}
                                        {/*Summary*/}
                                        {/*</button>*/}
                                        <button type="button"
                                                className={`${styles.defaultBtn} float-md-end`}
                                                onClick={handleAddExpenseModal}>Add Expense
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <Box sx={{height: 500, width: '100%'}}>
                                    <DataGrid
                                        rows={expenseList}
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
    )
};

export default Expense;