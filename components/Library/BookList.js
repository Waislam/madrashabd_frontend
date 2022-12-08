import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Sidemenu from './LibrarySideMenu'

const BookList = ({books, handleBookUpdate, addBookModalShow, assignBookDistributionModal}) => {

    const columns = [
        {
            headerName: 'ID',
            field: 'id',
            headerAlign: 'center',
            align: 'center',
            width: 50,
            editable: true,
        },
        {
            headerName: 'Number',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            field: 'number',
            editable: true,
        },
        {
            headerName: 'Name',
            field: 'name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Category',
            field: 'category',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Part',
            field: 'part',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Original Writer',
            field: 'original_writer',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Language',
            field: 'language',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },
        {
            headerName: 'Book For Class',
            field: 'book_for_class',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: true,
        },

        {
            field: 'is_available',
            headerName: 'Status',
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        {
                            params.is_available ?

                                <button
                                    className="btn btn-success pe-none">Yes
                                </button>
                                :
                                <button
                                    className="btn btn-danger pe-none">No
                                </button>
                        }
                    </div>
                );
            }
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
                        {
                            params.is_available ?
                                <button
                                    className="btn btn-success ms-1"
                                    onClick={() => assignBookDistributionModal(params.row.id)}>&nbsp;Assign&nbsp;
                                </button>
                                :
                                <button
                                    className="btn btn-secondary ms-1 pe-none">Booked
                                </button>
                        }
                        <button className="btn btn-primary ms-2"
                                onClick={() => handleBookUpdate(params.row.id)}>Edit
                        </button>
                    </div>
                );
            }
        },

    ];

    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <Sidemenu/>
                        </div>
                        <div className='col-sm-12 col-md-10 col-lg-10 col-xl-10'>
                            <div className="right-section">
                                <div className='card'>
                                    <div className="card-header">
                                        <div className="book-list">
                                            <h4><u>Book List</u></h4>
                                        </div>
                                    </div>
                                    <div className='card-body p-0'>
                                        <div className="book-list-table">
                                            <Box sx={{height: 500, width: '100%'}}>
                                                <DataGrid
                                                    rows={books}
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
            </section>
        </>
    )
};

export default BookList;