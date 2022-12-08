import React from "react";
import styles from '../Account/Account.module.css'
import AccountSideBar from '../Account/AccountSidebar'
import Header from '../IncomeHeader'
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {useRouter} from 'next/router'


const StudentIncome = ({studentIncomeList, addStudentIncomekModalShow, handleModalShowandId}) => {
    const router = useRouter();

    const handleDetail = async (id) => {
        router.push(`accounts/${id}`);
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
            valueGetter: (params) =>
                `${params.row.id}`,
        },

        {
            headerName: 'Student Class',
            field: 'student_class_id',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.row?.student_class_id}`,
        },
        {
            headerName: 'Category',
            field: 'category',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.row?.category.name}`,
        },

        {
            headerName: 'Sub Category',
            field: 'sub_category',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.row?.sub_category.name}`,
        },

        {
            headerName: 'Amount',
            field: 'amount',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.row?.amount?.amount}`,
        },

        {
            headerName: 'Date',
            field: 'paid_date',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.row?.paid_date}`,
        },

        {
            headerName: 'Money Receipt',
            field: 'receipt_number',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            valueGetter: (params) =>
                `${params.row?.receipt_number}`,
        },

        {
            headerName: 'Action',
            field: 'Action',
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <button className="btn btn-primary primary mx-2"
                                onClick={() => handleModalShowandId(params.row.id)}>Edit
                        </button>
                        <button className="btn btn-danger primary" onClick={() => handleDetail(params.row.id)}>Details</button>
                    </div>
                );
            }
        },
    ];


    if (!studentIncomeList) {
        return (
            <>
                <h1>Loading.. please refresh the page</h1>
            </>
        )
    }

    return (
        <div>
            <section className={styles.accountListSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <AccountSideBar/>
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                            <div className="card">
                                <div className="card-header">
                                    <Header/>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-8 mb-2">
                                            <h4>Income From Student</h4>
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            {/*<button*/}
                                            {/*type="button"*/}
                                            {/*className={`brand-btn ms-2`}>*/}
                                            {/*Get Summary*/}
                                            {/*</button>*/}
                                            <button
                                                type="button"
                                                className={`brand-btn float-md-end`}
                                                onClick={addStudentIncomekModalShow}>Add Income
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <Box sx={{height: 500, width: '100%'}}>
                                        <DataGrid
                                            rows={studentIncomeList}
                                            columns={columns}
                                            pageSize={5}
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
        </div>
    )

};


export default StudentIncome;




