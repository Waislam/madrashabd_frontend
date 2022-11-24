import React from "react";
import Link from 'next/link'
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import styles from './TeacherList.module.css';

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'teacher_id',
        headerName: 'Teacher ID',
        width: 150,
        // editable: true,
    },
    {
        field: 'father_name',
        headerName: 'Father name',
        width: 150,
        // editable: true,
    },
    {
        field: 'mother_name',
        headerName: 'Mother Name',
        width: 110,
        // editable: true,
    },
    {
        field: 'department',
        headerName: 'Department',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.department.name || ''}`,
    },
    {
        field: 'Detail',
        headerName: 'Detail',
        sortable: false,
        width: 160,
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
                        <div className="card-body pb-0">
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <Link href="teachers/add-teacher">
                                        <a className={`btn ${styles.teacherStaffButton}`}>Add Teacher</a>
                                    </Link>
                                </div>
                                <div className="col-md-6"/>
                            </div>
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