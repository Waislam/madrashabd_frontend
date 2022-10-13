import React from "react";
import styles from './Account.module.css'
import AccountSideBar from './AccountSidebar'
import Header from './IncomeHeader'

const StudentIncome = () => {

    return (
        <div>
            <section className={styles.accountListSection}>
                <div className="container-fluid">
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <AccountSideBar/>
                        </div>
                        <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                            <div className="income">
                                <div className="card bg-gray">
                                    <div className="card-body bg-gray">
                                        <div className="receiveMoney mb-4">
                                            <Header/>
                                        </div>
                                        <div className="student-income">
                                            <div className="row">
                                                <div className="col">
                                                    <button
                                                        type="button"
                                                        className={`${styles.defaultBtn}`}>
                                                        Add Income
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <div className="float-md-end">
                                                        <button type="button"
                                                                className={`${styles.defaultBtn} ms-2`}>Get
                                                            Summary
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="student-search-form mb-3">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-2">
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
                                                                    <span
                                                                        className="visually-hidden">Toggle dropdown</span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item">categoryone</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item">categorytwo</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
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
                                                                    <span
                                                                        className="visually-hidden">Toggle dropdown</span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item">
                                                                            category one
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item">
                                                                            category two
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
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
                                                        <div className="col-md-2">
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
                                                        <div className="col-md-2">
                                                            <input
                                                                type="text"
                                                                name="receipt_number"
                                                                placeholder="Receipt number"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col-md-2">
                                                            <button className={`${styles.searchButton} form-control`}>
                                                                Search
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="student-income-table">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                        <div className="table-responsive">
                                                            <table className="table table-striped table-bordered">
                                                                <thead className="bg-gray text-dark">
                                                                <tr className="text-center">
                                                                    <th scope="col">Student ID</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Sub-cat</th>
                                                                    <th scope="col">Amount</th>
                                                                    <th scope="col">Date</th>
                                                                    <th scope="col">Money Receipt</th>
                                                                    <th scope="col">Taken by</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="text-center">
                                                                        <th>1</th>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                        <td>1</td>
                                                                    </tr>
                                                                {/*{studentIncomeList && studentIncomeList.results.map((stincome) => (*/}
                                                                {/*<tr key={stincome.id}>*/}
                                                                {/*<th scope="row" style={{color: "#5CBD67"}}>*/}
                                                                {/*<Link href="">*/}
                                                                {/*{stincome.student_class_id}*/}
                                                                {/*</Link>*/}
                                                                {/*</th>*/}
                                                                {/*<td>{stincome.category.name}</td>*/}
                                                                {/*<td>{stincome.sub_category.name}</td>*/}
                                                                {/*<td>{stincome.amount.amount}</td>*/}
                                                                {/*<td>{stincome.paid_date}</td>*/}
                                                                {/*<td>{stincome.receipt_number}</td>*/}
                                                                {/*<td>let it</td>*/}
                                                                {/*</tr>*/}
                                                                {/*))}*/}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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


export default StudentIncome;




