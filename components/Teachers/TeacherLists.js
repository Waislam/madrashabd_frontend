import React from "react";
import Link from 'next/link'
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from './TeacherList.module.css';

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
        field: 'teacher_id',
        headerName: 'Teacher ID',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'father_name',
        headerName: 'Father name',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'mother_name',
        headerName: 'Mother Name',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'department',
        headerName: 'Department',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        valueGetter: (params) =>
            `${params.row.department.name || ''}`,
    },
    {
        field: 'Detail',
        headerName: 'Detail',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        sortable: false,
        renderCell: (params) => {
            return <a href={`/teachers/${params.row.slug}`}>Details</a>;
        }
    },
];

const TeacherList = ({teachers}) => {
    return (
        <div>
            <div className="teacherListSection">
                <div className="container">
                    <div className="card pb-0 mb-4">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <h4 className="mt-2"><u>Teacher & Staff</u></h4>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <Link href={`teachers/add-teacher`}>
                                        <a className={`btn ${styles.teacherStaffButton} float-end`}>Add Teacher</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col">
                                    <Box sx={{height: 500, width: '100%'}}>
                                        <DataGrid
                                            rows={teachers.results}
                                            columns={columns}
                                            pageSize={5}
                                            rowsPerPageOptions={[5]}
                                            checkboxSelection
                                            disableSelectionOnClick
                                            disableColumnFilter
                                            disableColumnSelector
                                            disableDensitySelector
                                            components={{Toolbar: GridToolbar}}
                                            // experimentalFeatures={{newEditingApi: false}}
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
    )
};

export default TeacherList;