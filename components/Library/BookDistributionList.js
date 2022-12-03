import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Sidemenu from './LibrarySideMenu'
import Modal from './BookDistributionListModal'

const BookList = ({showmodal, shown, bookDistribution, handleDelete}) => {
    const columns = [
        {
            headerName: 'Student ID',
            field: 'id',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Student Name',
            field: 'first_name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
            valueGetter: (params) =>
                `${params.row.student_roll_id?.user?.first_name} ${params.row.student_roll_id?.user?.last_name}`,
        },
        {
            headerName: 'Class',
            field: 'name',
            sortable: false,
            valueGetter: (params) =>
                `${params.row.student_roll_id?.admitted_class?.name}`,
        },
        {
            headerName: 'Phone',
            field: 'phone',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,
            valueGetter: (params) =>
                `${params.row.student_roll_id?.user?.phone}`,
        },
        {
            headerName: 'Book Number',
            field: 'number',
            sortable: false,
            width: 130,
            valueGetter: (params) =>
                `${params.row.student_roll_id?.book_number?.number}`,
        },
        {

            headerName: 'Book Name',
            headerAlign: 'center',
            align: 'center',
            field: 'name',
            width: 100,
            sortable: false,
            valueGetter: (params) =>
                `${params.row?.book_number?.name}`,
        },
        {
            headerName: 'Taken Date',
            field: 'taken_date',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            sortable: false,

            valueGetter: (params) =>
                `${params.row?.taken_date}`,
        },
        {
            headerName: 'Action',
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            width: 150,

            renderCell: (params) => {
                return (
                    <div>
                        <button
                            className="btn btn-primary primary mx-1">
                            Edit
                        </button>
                        <button
                            className="btn btn-danger primary"
                            onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </button>
                    </div>
                );
            }
        },
    ];

    return (
        <>
            <section>
                {/* <div className={styles.booklistSection}> */}
                <div className="">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                <Sidemenu/>
                            </div>
                            <div className='col-sm-12 col-md-10 col-lg-10 col-xl-10'>
                                <div className="right-section">
                                    <div className='card'>
                                        <div className="card-header">
                                            <h4><u>Book Distribution List</u></h4>
                                        </div>
                                        <div className='card-body p-0'>
                                            <div className="book-list-table">
                                                <Box sx={{height: 500, width: '100%'}}>
                                                    <DataGrid
                                                        rows={bookDistribution}
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
                                            <Modal show={shown}/>
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

export default BookList;