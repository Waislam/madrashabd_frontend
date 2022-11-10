import * as React from 'react';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import api from "./api/api";

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'teacher_id',
        headerName: 'Teacher ID',
        width: 150,
        editable: true,
    },
    {
        field: 'father_name',
        headerName: 'Father name',
        width: 150,
        editable: true,
    },
    {
        field: 'mother_name',
        headerName: 'Mother Name',
        width: 110,
        editable: true,
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
];


const BasicExampleDataGrid = (props) => {
    return (
        <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
                rows={props.teacher_list.results}
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
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await api.get(`/teachers/100/`)
    const teacher_list = await res.data

    // Pass data to the page via props
    return {
        props: {
            teacher_list
        }
    }
}

export default BasicExampleDataGrid