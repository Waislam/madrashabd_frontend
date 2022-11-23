import React from "react";
import styles from '../Account/Account.module.css'
import AccountSideBar from '../Account/AccountSidebar'
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const Expense = ({expenseList, approved, handleAddExpenseModal, handleIndividualObj}) => {

    const columns = [
        {
            headerName: 'ID',
            field: 'id',
            sortable: false,
            width: 60
        },
        {
            headerName: 'Category',
            field: 'category',
            sortable: false,
            width: 110,
            valueGetter: (params) =>
                `${params.row.category.name}`,
        },

        {
            headerName: 'Sub Category',
            field: 'sub_category',
            sortable: false,
            width: 130,
            valueGetter: (params) =>
                `${params.row.sub_category.name}`,
        },
        {
            headerName: 'Description',
            field: 'description',
            sortable: false,
            width: 140
        },
        {
            headerName: 'Amount',
            field: 'amount',
            sortable: false,
            width: 100
        },
        {
            headerName: 'Date',
            field: 'date',
            sortable: false,
            width: 100
        },
        {
            headerName: 'Receipt Number',
            field: 'receipt_number',
            sortable: false,
            width: 100
        },
        {
            headerName: 'Expense By',
            field: 'expense_by',
            sortable: false,
            width: 100
        },
        {
            headerName: 'Approved By',
            field: 'approved_by',
            sortable: false,
            width: 100
        },
        {
            field: 'Action',
            headerName: 'Detail',
            sortable: false,
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <button className="btn btn-primary"
                                onClick={() => handleIndividualObj(params.row.id)}>Edit
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
            <section className={styles.expenseListSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <AccountSideBar/>
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                            <div className="card">
                                <div className="card-body">
                                    <div className="expense mb-4">
                                        <div className="get-list">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <h4>All Expense</h4>
                                                </div>
                                                <div className="col-md-4">
                                                    <button type="button" className={`${styles.defaultBtn} ms-2`}>Get
                                                        Summary
                                                    </button>
                                                    <button type="button"
                                                            className={`${styles.defaultBtn} float-md-end`}
                                                            onClick={handleAddExpenseModal}>Add Expense
                                                    </button>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="search-section">
                                                {/*<form action="#">*/}
                                                {/*<div className="row">*/}
                                                {/*<div className="col-md-10">*/}
                                                {/*<div className="row">*/}
                                                {/*<div className="col-md-3 mb-3">*/}
                                                {/*<div className="input-group">*/}
                                                {/*<input*/}
                                                {/*type="text"*/}
                                                {/*name="category"*/}
                                                {/*placeholder="Category"*/}
                                                {/*className="form-control"*/}
                                                {/*/>*/}
                                                {/*<button type="text"*/}
                                                {/*className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"*/}
                                                {/*data-bs-toggle="dropdown"*/}
                                                {/*aria-expanded="false">*/}
                                                {/*<span className="visually-hidden">Toggle dropdown</span>*/}
                                                {/*</button>*/}
                                                {/*<ul className="dropdown-menu dropdown-menu-end">*/}
                                                {/*<li>*/}
                                                {/*<a className="dropdown-item">category*/}
                                                {/*one</a>*/}
                                                {/*</li>*/}
                                                {/*<li>*/}
                                                {/*<a className="dropdown-item">category*/}
                                                {/*two</a>*/}
                                                {/*</li>*/}
                                                {/*</ul>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="col-md-3 mb-3">*/}
                                                {/*<div className="input-group">*/}
                                                {/*<input*/}
                                                {/*type="text"*/}
                                                {/*name="subcategory"*/}
                                                {/*placeholder="Sub Category"*/}
                                                {/*className="form-control"*/}
                                                {/*/>*/}
                                                {/*<button type="text"*/}
                                                {/*className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"*/}
                                                {/*data-bs-toggle="dropdown"*/}
                                                {/*aria-expanded="false">*/}
                                                {/*<span className="visually-hidden">Toggle dropdown</span>*/}
                                                {/*</button>*/}
                                                {/*<ul className="dropdown-menu dropdown-menu-end">*/}
                                                {/*<li>*/}
                                                {/*<a className="dropdown-item">category*/}
                                                {/*one</a>*/}
                                                {/*</li>*/}
                                                {/*<li>*/}
                                                {/*<a className="dropdown-item">category*/}
                                                {/*two</a>*/}
                                                {/*</li>*/}
                                                {/*</ul>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="col-md-3 mb-3">*/}
                                                {/*<input*/}
                                                {/*type="text"*/}
                                                {/*name="from_date"*/}
                                                {/*placeholder="From date"*/}
                                                {/*onChange={(e) => console.log(e.target.value)}*/}
                                                {/*onFocus={(e) => (e.target.type = "date")}*/}
                                                {/*onBlur={(e) => (e.target.type = "text")}*/}
                                                {/*className="form-control"*/}
                                                {/*/>*/}
                                                {/*</div>*/}
                                                {/*<div className="col-md-3 mb-3">*/}
                                                {/*<input*/}
                                                {/*type="text"*/}
                                                {/*name="from_date"*/}
                                                {/*placeholder="To date"*/}
                                                {/*onChange={(e) => console.log(e.target.value)}*/}
                                                {/*onFocus={(e) => (e.target.type = "date")}*/}
                                                {/*onBlur={(e) => (e.target.type = "text")}*/}
                                                {/*className="form-control"*/}
                                                {/*/>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*<div className="col-md-2">*/}
                                                {/*<button className={`${styles.defaultBtn} float-md-end`}>Search</button>*/}
                                                {/*</div>*/}
                                                {/*</div>*/}
                                                {/*</form>*/}
                                            </div>
                                            <div className="get-list mt-4">
                                                <div className="table-responsive">
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
                                                <div className="row">
                                                    {/*<div className="col-md-7">*/}
                                                    {/*<button className={styles.defaultBtn}>Download PDF</button>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="pagination-class col-md-4">*/}
                                                    {/*<nav aria-label="page navigation" className="">*/}
                                                    {/*<ul className="pagination float-end">*/}
                                                    {/*<li className="page-item">*/}
                                                    {/*<a className="page-link" href="">Previous</a>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="page-item">*/}
                                                    {/*<a className="page-link" href="">1</a>*/}
                                                    {/*</li>*/}
                                                    {/*<li className="page-item">*/}
                                                    {/*<a className="page-link" href="">Next</a>*/}
                                                    {/*</li>*/}
                                                    {/*</ul>*/}
                                                    {/*</nav>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="page-size col-md-1">*/}
                                                    {/*<div className="float-end" style={{width: 80}}>*/}
                                                    {/*<div className="input-group">*/}
                                                    {/*<input type="text" className="form-control"*/}
                                                    {/*placeholder="10"/>*/}
                                                    {/*<button type="button"*/}
                                                    {/*className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"*/}
                                                    {/*data-bs-toggle="dropdown" aria-expanded="false">*/}
                                                    {/*<span*/}
                                                    {/*className="visually-hidden">Toggle dropdown</span>*/}
                                                    {/*</button>*/}
                                                    {/*<ul className="dropdown-menu dropdown-menu-end">*/}
                                                    {/*<li>*/}
                                                    {/*<a className="dropdown-item">10</a>*/}
                                                    {/*</li>*/}
                                                    {/*<li>*/}
                                                    {/*<a className="dropdown-item">20</a>*/}
                                                    {/*</li>*/}
                                                    {/*</ul>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                            {/* Add section */}
                                            {/* <div className="expense-form my-4">
                                                <form action="" method="post">
                                                    <div className="row">
                                                        <div className="col-md-4 mb-3">
                                                            <div className="form-group">
                                                                <label className="mb-2">Category</label>
                                                                <select className="form-control form-select">
                                                                    <option>Category one</option>
                                                                    <option>Category two</option>
                                                                    <option>Category three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <div className="form-group">
                                                                <label className="mb-2">Sub-Category</label>
                                                                <select className="form-control form-select">
                                                                    <option>sub-Category one</option>
                                                                    <option>sub-Category two</option>
                                                                    <option>sub-Category three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="mb-2">Expense By</label>
                                                            <input type="text" className="form-control"
                                                                   placeholder="Expense By"/>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="mb-2">Amount</label>
                                                            <input type="text" className="form-control"
                                                                   placeholder="5000"/>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <div className="form-group">
                                                                <label className="mb-2">For Month</label>
                                                                <select className="form-control form-select"
                                                                        defaultValue={'DEFAULT'}>
                                                                    <option value="DEFAULT" disabled>Select Month
                                                                    </option>
                                                                    <option>January</option>
                                                                    <option>February</option>
                                                                    <option>March</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="mb-2">For Months</label>
                                                            <input type="text" className="form-control"
                                                                   placeholder="january - march"/>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="mb-2">Description</label>
                                                            <input type="text" className="form-control"
                                                                   placeholder="Building construction"/>
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="mb-2">Expense By</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Expense by"
                                                            />
                                                        </div>
                                                        <div className="col-md-4 mb-3">
                                                            <label className="mb-2">Date</label>
                                                            <input
                                                                type="text"
                                                                name="date"
                                                                placeholder="date"
                                                                onChange={(e) => console.log(e.target.value)}
                                                                onFocus={(e) => (e.target.type = "date")}
                                                                onBlur={(e) => (e.target.type = "text")}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="submit" className={`${styles.defaultBtn}`}>Save
                                                            and print
                                                        </button>
                                                    </div>
                                                </form>
                                            </div> */}

                                            {/*Get Summary*/}
                                            {/* <div className="get-summary mb-4">
                                                <h4>Get Summary</h4>
                                                <hr/>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-10">
                                                            <div className="row">
                                                                <div className="col-md-3 mb-3">
                                                                    <div className="input-group">
                                                                        <input
                                                                            type="text"
                                                                            name="category"
                                                                            placeholder="Category"
                                                                            className="form-control"
                                                                        />
                                                                        <button type="text"
                                                                                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                                data-bs-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                            <span className="visually-hidden">Toggle dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className="dropdown-item">category
                                                                                    one</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className="dropdown-item">category
                                                                                    two</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3 mb-3">
                                                                    <div className="input-group">
                                                                        <input
                                                                            type="text"
                                                                            name="subcategory"
                                                                            placeholder="Sub Category"
                                                                            className="form-control"
                                                                        />
                                                                        <button type="text"
                                                                                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                                                                data-bs-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                            <span className="visually-hidden">Toggle dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li>
                                                                                <a className="dropdown-item">category
                                                                                    one</a>
                                                                            </li>
                                                                            <li>
                                                                                <a className="dropdown-item">category
                                                                                    two</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3 mb-3">
                                                                    <input
                                                                        type="text"
                                                                        name="from_date"
                                                                        placeholder="From date"
                                                                        onChange={(e) => console.log(e.target.value)}
                                                                        onFocus={(e) => (e.target.type = "date")}
                                                                        onBlur={(e) => (e.target.type = "text")}
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                                <div className="col-md-3 mb-3">
                                                                    <input
                                                                        type="text"
                                                                        name="to_date"
                                                                        placeholder="To date"
                                                                        onChange={(e) => console.log(e.target.value)}
                                                                        onFocus={(e) => (e.target.type = "date")}
                                                                        onBlur={(e) => (e.target.type = "text")}
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <button className={styles.searchButton}>Search</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div> */}
                                            {/*institute-name*/}
                                            {/* <div className={styles.instituteNamePdf}>
                                                <div className={styles.instituteList}>
                                                    <h4>Get Name</h4>
                                                    <ul className="list-unstyled">
                                                        <li>From date - to date</li>
                                                        <li>Category Name</li>
                                                        <li>Total amount : 10 Taka</li>
                                                    </ul>
                                                </div>
                                                <div style={{float: "right"}}>
                                                    <button className={styles.institutePrintBtn}>Print as PDF</button>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Expense;