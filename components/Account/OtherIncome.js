import React from "react";
import Image from "next/image";
import styles from './Account.module.css'
import Header from './IncomeHeader'
import studentLogo from '../../public/assets/admission/students.png'
import Link from "next/link";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Box from "@mui/material/Box";


const StudentIncome = ({otherIncomeList, openPostRequestModal, passOtherIncomeId}) => {

    const columns = [
        {
            headerName: 'ID',
            field: 'id',
            sortable: false,
            width: 160
        },
        {
            headerName: 'Category',
            field: 'category',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.category.name}`,
        },

        {
            headerName: 'Sub_Category',
            field: 'sub_category',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.sub_category.name}`,
        },

        {
            headerName: 'Amount',
            field: 'amount',
            sortable: false,
            width: 160
        },

        {
            headerName: 'Date',
            field: 'paid_date',
            sortable: false,
            width: 160
        },
        {
            headerName: 'Donar Name',
            field: 'donar_name',
            sortable: false,
            width: 160
        },

        {
            headerName: 'Receipt Page Number',
            field: 'receipt_page_number',
            sortable: false,
            width: 160
        },

        {
            headerName: 'Receipt Book Number',
            field: 'receipt_book_number',
            sortable: false,
            width: 160
        },

        {
            field: 'Detail',
            headerName: 'Detail',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <div>
                        <button className="btn btn-primary"
                                onClick={() => passOtherIncomeId(params.row.id)}>Edit
                        </button>
                    </div>
                );
            }
        },
    ];

    if (!otherIncomeList) {
        return (

            <>
                <h1>Loading... please refresh your page</h1>
            </>
        )
    }
    return (
        <div>
            <section className={styles.accountListSection}>
                <div className="container-fluid">
                    {/* <h3 className={styles.accountListTitle}>Accounts</h3> */}
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <div className={styles.listRightSide}>
                                <div className="card">
                                    <h4 className="text-center mt-3">
                                        <Image src={studentLogo} className="img-responsive"
                                               alt="Logo missing" height={40} width={40}/>
                                    </h4>
                                    <hr/>
                                    <div className="card-body p-0">
                                        <div className={`${styles.activeLink}`}>
                                            <Link href="/accounts/other_income">
                                                <a className="text-left ps-4">Income</a>
                                            </Link>
                                        </div>

                                        <div className={`${styles.inActiveLink}`}>
                                            <Link href="/accounts/expense">
                                                <a className="text-left ps-4">Expense</a>
                                            </Link>
                                        </div>
                                        <div className={`${styles.inActiveLink}`}>
                                            <Link href="/accounts/payment">
                                                <a className="text-left ps-4">Payment</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                            <div className="income">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="receiveMoney mb-4">
                                            <Header/>
                                            <hr/>
                                        </div>
                                        {/*Get List*/}
                                        <div className="get-list">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <h4>Income From Others</h4>
                                                </div>
                                                <div className="col-md-4">
                                                    <button type="button" className={`${styles.defaultBtn} ms-2`}>Get
                                                        Summary
                                                    </button>
                                                    <button type="button"
                                                            className={`${styles.defaultBtn} float-md-end`}
                                                            onClick={openPostRequestModal}>Add Income
                                                    </button>
                                                </div>
                                            </div>
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
                                                                    onFocus={(e) => (e.target.type = "date")}
                                                                    onBlur={(e) => (e.target.type = "text")}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-md-3 mb-3">
                                                                <input
                                                                    type="text"
                                                                    name="from_date"
                                                                    placeholder="To date"
                                                                    onFocus={(e) => (e.target.type = "date")}
                                                                    onBlur={(e) => (e.target.type = "text")}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <button className={`${styles.defaultBtn} float-md-end`}>Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="get-list mt-4">
                                                <div className="table-responsive">
                                                    <Box sx={{height: 500, width: '100%'}}>
                                                        <DataGrid
                                                            rows={otherIncomeList}
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
                                        </div>


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
                                                                    <button type="text" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item">category one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item">category two</a>
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
                                                                    <button type="text" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <span className="visually-hidden">Toggle dropdown</span>
                                                                    </button>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a className="dropdown-item">category one</a>
                                                                        </li>
                                                                        <li>
                                                                            <a className="dropdown-item">category two</a>
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
            </section>
        </div>
    )

};


export default StudentIncome;




