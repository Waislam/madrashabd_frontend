import React from "react";
import Image from "next/image";
import styles from './Account.module.css'
import icon from '../../public/assets/login/icon.png'
import AccountSideBar from './AccountSidebar'
import Header from './IncomeHeader'
import Link from "next/link";

const StudentIncome = ({
    studentIncomeList,
    addStudentIncomekModalShow,
    handleModalShowandId
}) => {

    if(!studentIncomeList){
        return(
            <>
            <h1>Loading.. please refresh the page</h1>
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
                            <AccountSideBar/>
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
                                                    <h4>Income From Student</h4>
                                                </div>
                                                <div className="col-md-4">
                                                    <button type="button" className={`${styles.defaultBtn} ms-2`}>Get Summary</button>
                                                    <button type="button" className={`${styles.defaultBtn} float-md-end`} onClick={addStudentIncomekModalShow}>Add Income</button>
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
                                                        <button className={`${styles.defaultBtn} float-md-end`}>Search</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="get-list mt-4">
                                                <div className="table-responsive">
                                                    <table className="table table-striped table-bordered">
                                                        <thead className="bg-gray text-dark">
                                                        <tr>
                                                            <th scope="col">Student ID</th>
                                                            <th scope="col">Category</th>
                                                            <th scope="col">Sub-cat</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Money Receipt</th>
                                                            <th scope="col">Taken by</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            {studentIncomeList && studentIncomeList.results.map((stincome)=>(
                                                            <tr key={stincome.id}>
                                                                <th scope="row" style={{color: "#5CBD67"}}>
                                                                <Link href="">
                                                                    {stincome.student_class_id}
                                                                </Link>
                                                                </th>
                                                                <td>{stincome.category.name}</td>
                                                                <td>{stincome.sub_category.name}</td>
                                                                <td>{stincome.amount.amount}</td>
                                                                <td>{stincome.paid_date}</td>
                                                                <td>{stincome.receipt_number}</td>
                                                                <td>let it</td>
                                                                <td className="text-center">
                                                                    <a className="btn btn-primary" onClick={() => handleModalShowandId(stincome.id)}>Edit</a>
                                                                </td>
                                                            </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <button className={styles.defaultBtn}>Download PDF</button>
                                                    </div>
                                                    <div className="pagination-page col-md-4">
                                                        <nav aria-label="page navigation" className="">
                                                            <ul className="pagination float-end">
                                                                <li className="page-item">
                                                                    <a className="page-link" href="">Previous</a>
                                                                </li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="">1</a>
                                                                </li>
                                                                <li className="page-item">
                                                                    <a className="page-link" href="">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                    <div className="page-size col-md-1">
                                                        <div className="float-end" style={{width:80}}>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="10"/>
                                                                <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <span className="visually-hidden">Toggle dropdown</span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item">10</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item">20</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*/!* Add form *!/*/}
                                        {/*<div className="Student-income-form my-4">*/}
                                            {/*<form action="" method="post">*/}
                                                {/*<div className="row">*/}

                                                {/*</div>*/}
                                                {/*<div>*/}
                                                    {/*<button type="submit" className={`${styles.defaultBtn}`}>Save and print</button>*/}
                                                {/*</div>*/}
                                            {/*</form>*/}
                                        {/*</div>*/}

                                        {/*/!*Get Summary*!/*/}
                                        {/*<div className="get-summary mb-4">*/}
                                            {/*<h4>Get Summary</h4>*/}
                                            {/*<hr/>*/}
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
                                                                    {/*<button type="text" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">*/}
                                                                        {/*<span className="visually-hidden">Toggle dropdown</span>*/}
                                                                    {/*</button>*/}
                                                                    {/*<ul className="dropdown-menu dropdown-menu-end">*/}
                                                                        {/*<li>*/}
                                                                            {/*<a className="dropdown-item">category one</a>*/}
                                                                        {/*</li>*/}
                                                                        {/*<li>*/}
                                                                            {/*<a className="dropdown-item">category two</a>*/}
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
                                                                    {/*<button type="text" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">*/}
                                                                        {/*<span className="visually-hidden">Toggle dropdown</span>*/}
                                                                    {/*</button>*/}
                                                                    {/*<ul className="dropdown-menu dropdown-menu-end">*/}
                                                                        {/*<li>*/}
                                                                            {/*<a className="dropdown-item">category one</a>*/}
                                                                        {/*</li>*/}
                                                                        {/*<li>*/}
                                                                            {/*<a className="dropdown-item">category two</a>*/}
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
                                                                    {/*name="to_date"*/}
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
                                                        {/*<button className={styles.searchButton}>Search</button>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</form>*/}
                                        {/*</div>*/}
                                        {/*/!*institute-name*!/*/}
                                        {/*<div className={styles.instituteNamePdf}>*/}
                                            {/*<div className={styles.instituteList}>*/}
                                                {/*<h4>Get Name</h4>*/}
                                                {/*<ul className="list-unstyled">*/}
                                                    {/*<li>From date - to date</li>*/}
                                                    {/*<li>Category Name</li>*/}
                                                    {/*<li>Total amount : 10 Taka</li>*/}
                                                {/*</ul>*/}
                                            {/*</div>*/}
                                            {/*<div style={{float: "right"}}>*/}
                                                {/*<button className={styles.institutePrintBtn}>Print as PDF</button>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
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




